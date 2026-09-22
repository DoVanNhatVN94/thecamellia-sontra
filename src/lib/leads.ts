import { PROJECT } from "@/data/project";

const STORAGE_KEY = "camellia-leads";
const RATE_KEY = "camellia-lead-rl";
/** Max successful/attempted submissions per window (client-side soft limit). */
const RATE_MAX = 3;
const RATE_WINDOW_MS = 60_000;
/** Reject instant bot posts (form must stay open briefly). */
const MIN_DWELL_MS = 2_500;

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email?: string;
  unit?: string;
  message?: string;
  createdAt: string;
};

export type LeadInput = Omit<Lead, "id" | "createdAt">;

/** Inbox used for mailto fallback (and optional FormSubmit if ever re-enabled). */
export function formSubmitEmail(): string {
  const fromEnv = String(import.meta.env.VITE_FORMSUBMIT_EMAIL ?? "").trim();
  return fromEnv || PROJECT.email;
}

export function saveLead(input: LeadInput): Lead {
  const lead: Lead = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  const existing = listLeads();
  existing.unshift(lead);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(0, 50)));
  return lead;
}

export function listLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Lead[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function leadMailtoHref(input: LeadInput): string {
  const subject = `[The Camellia] Đăng ký nhận bảng giá — ${input.name}`;
  const body = [
    `Họ và tên: ${input.name}`,
    `Số điện thoại: ${input.phone}`,
    `Email: ${input.email || "(không có)"}`,
    `Loại căn: ${input.unit || "(chưa chọn)"}`,
    `Nhu cầu: ${input.message || "(không có)"}`,
    "",
    "Nguồn: Website The Camellia Sơn Trà",
  ].join("\n");
  return `mailto:${formSubmitEmail()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type LeadRateResult = { ok: true } | { ok: false; error: string };

/** Soft client rate-limit — reduces spam bursts; not a substitute for server limits. */
export function checkLeadRateLimit(): LeadRateResult {
  if (typeof window === "undefined") return { ok: true };
  try {
    const raw = sessionStorage.getItem(RATE_KEY);
    const now = Date.now();
    const stamps: number[] = raw ? (JSON.parse(raw) as number[]) : [];
    const recent = stamps.filter((t) => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) {
      return {
        ok: false,
        error:
          "Bạn vừa gửi vài lần liên tiếp. Vui lòng đợi khoảng 1 phút, hoặc gọi hotline / nhắn Zalo.",
      };
    }
    return { ok: true };
  } catch {
    return { ok: true };
  }
}

function recordLeadAttempt() {
  if (typeof window === "undefined") return;
  try {
    const raw = sessionStorage.getItem(RATE_KEY);
    const now = Date.now();
    const stamps: number[] = raw ? (JSON.parse(raw) as number[]) : [];
    const recent = stamps.filter((t) => now - t < RATE_WINDOW_MS);
    recent.push(now);
    sessionStorage.setItem(RATE_KEY, JSON.stringify(recent));
  } catch {
    /* private mode */
  }
}

export type SendLeadOptions = {
  /** Honeypot value — if non-empty, treat as bot (silent success). */
  honey?: string;
  /** Performance.now()-style or Date when the form mounted. */
  openedAt?: number;
};

const FALLBACK_ERROR =
  "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo (hoặc dùng Gửi email bên dưới).";

/**
 * First-party POST /api/leads (Resend on server).
 * On network/5xx failure → error + mailto button in the form (no FormSubmit).
 */
export async function sendLeadEmail(
  input: LeadInput,
  opts: SendLeadOptions = {},
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (opts.honey) {
    return { ok: true };
  }
  if (opts.openedAt != null && Date.now() - opts.openedAt < MIN_DWELL_MS) {
    return {
      ok: false,
      error: "Vui lòng kiểm tra lại thông tin rồi gửi sau vài giây.",
    };
  }

  const rate = checkLeadRateLimit();
  if (!rate.ok) return rate;

  recordLeadAttempt();

  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        name: input.name,
        phone: input.phone,
        email: input.email,
        unit: input.unit,
        message: input.message,
        honey: opts.honey ?? "",
        openedAt: opts.openedAt ?? Date.now(),
        sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
      }),
    });

    let json: { ok?: boolean; error?: string } = {};
    try {
      json = (await res.json()) as { ok?: boolean; error?: string };
    } catch {
      /* non-JSON */
    }

    if (res.ok && json.ok !== false) {
      return { ok: true };
    }

    return {
      ok: false,
      error:
        typeof json.error === "string" && json.error.trim()
          ? json.error
          : FALLBACK_ERROR,
    };
  } catch {
    return { ok: false, error: FALLBACK_ERROR };
  }
}
