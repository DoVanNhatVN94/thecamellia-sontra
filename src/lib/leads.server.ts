/**
 * Server-only lead intake for POST /api/leads.
 * Email via Resend HTTP API (no SDK). Never import from client modules.
 *
 * Soft IP rate-limit: in-memory Map — NOT distributed across Vercel
 * instances. Soft spam brake only.
 *
 * Handler never throws: all paths return JSON 2xx/4xx/503 so spam probes
 * do not surface as Vercel function errors.
 */
import { z } from "zod";

const MIN_DWELL_MS = 2_500;
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60_000;
const MAX_MESSAGE = 1_000;
const MAX_UNIT = 80;
const PHONE_RE = /^(0|\+84)[0-9]{8,10}$/;

const ALLOWED_ORIGINS = new Set([
  "https://thecamellia-sontra.com",
  "https://www.thecamellia-sontra.com",
  "https://thecamellia-sontra.vercel.app",
]);

function env(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v ? v : undefined;
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, "").replace(/[<>]/g, "").trim();
}

const LeadBodySchema = z.object({
  name: z
    .string()
    .transform(stripHtml)
    .pipe(z.string().min(2, "Vui lòng nhập họ tên.").max(80, "Họ tên quá dài.")),
  phone: z
    .string()
    .transform((s) => s.replace(/\s/g, ""))
    .pipe(
      z
        .string()
        .min(1, "Vui lòng nhập số điện thoại.")
        .regex(PHONE_RE, "Số điện thoại chưa đúng định dạng (vd: 09xxxxxxxx hoặc +84…)."),
    ),
  email: z
    .union([z.string(), z.undefined(), z.null()])
    .optional()
    .transform((v) => {
      if (v == null) return undefined;
      const t = stripHtml(String(v));
      return t ? t : undefined;
    })
    .pipe(z.union([z.undefined(), z.string().email("Email chưa đúng định dạng.").max(120)])),
  unit: z
    .union([z.string(), z.undefined(), z.null()])
    .optional()
    .transform((v) => {
      if (v == null) return undefined;
      const t = stripHtml(String(v)).slice(0, MAX_UNIT);
      return t ? t : undefined;
    }),
  message: z
    .union([z.string(), z.undefined(), z.null()])
    .optional()
    .transform((v) => {
      if (v == null) return undefined;
      const t = stripHtml(String(v)).slice(0, MAX_MESSAGE);
      return t ? t : undefined;
    }),
  honey: z.union([z.string(), z.undefined(), z.null()]).optional(),
  website: z.union([z.string(), z.undefined(), z.null()]).optional(),
  company: z.union([z.string(), z.undefined(), z.null()]).optional(),
  openedAt: z.union([z.number(), z.undefined(), z.null()]).optional(),
  sourceUrl: z
    .union([z.string(), z.undefined(), z.null()])
    .optional()
    .transform((v) => {
      if (v == null) return undefined;
      const t = String(v).trim().slice(0, 500);
      return t || undefined;
    }),
});

type RateBucket = { stamps: number[] };

const globalRate = globalThis as typeof globalThis & {
  __camelliaLeadRate__?: Map<string, RateBucket>;
};

function rateMap(): Map<string, RateBucket> {
  globalRate.__camelliaLeadRate__ ??= new Map();
  return globalRate.__camelliaLeadRate__;
}

function clientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first.slice(0, 64);
  }
  const real = request.headers.get("x-real-ip")?.trim();
  if (real) return real.slice(0, 64);
  return "unknown";
}

function checkIpRate(ip: string): boolean {
  const map = rateMap();
  const now = Date.now();
  const bucket = map.get(ip) ?? { stamps: [] };
  const recent = bucket.stamps.filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    map.set(ip, { stamps: recent });
    return false;
  }
  recent.push(now);
  map.set(ip, { stamps: recent });
  if (map.size > 2_000) {
    for (const [k, v] of map) {
      const keep = v.stamps.filter((t) => now - t < RATE_WINDOW_MS);
      if (keep.length === 0) map.delete(k);
      else map.set(k, { stamps: keep });
    }
  }
  return true;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  if (ALLOWED_ORIGINS.has(origin)) return true;
  try {
    const u = new URL(origin);
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1") return true;
    if (u.hostname.endsWith(".grok-sandbox.com")) return true;
    if (u.hostname.endsWith(".vercel.app") && u.hostname.includes("camellia")) return true;
  } catch {
    return false;
  }
  return false;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(fields: {
  name: string;
  phone: string;
  email?: string;
  unit?: string;
  message?: string;
  sourceUrl?: string;
}): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  const apiKey = env("RESEND_API_KEY");
  const to = env("LEADS_TO_EMAIL");
  const from = env("LEADS_FROM_EMAIL");

  if (!apiKey || !to || !from) {
    console.error(
      "[leads] Missing RESEND_API_KEY / LEADS_TO_EMAIL / LEADS_FROM_EMAIL",
    );
    return {
      ok: false,
      status: 503,
      error:
        "Hệ thống gửi form chưa được cấu hình. Vui lòng gọi hotline hoặc nhắn Zalo (hoặc dùng Gửi email bên dưới).",
    };
  }

  const subject = `[The Camellia] Đăng ký nhận bảng giá — ${fields.name}`;
  const rows: [string, string][] = [
    ["Họ và tên", fields.name],
    ["Số điện thoại", fields.phone],
    ["Email", fields.email || "(không có)"],
    ["Loại căn", fields.unit || "(chưa chọn)"],
    ["Nhu cầu", fields.message || "(không có)"],
    ["Nguồn URL", fields.sourceUrl || "(không có)"],
    ["Nguồn", "Website The Camellia Sơn Trà"],
  ];
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5"><p><strong>Lead mới — The Camellia Sơn Trà</strong></p><table style="border-collapse:collapse;width:100%;max-width:560px">${rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 10px;border:1px solid #e5e5e5;font-weight:600;width:140px">${escapeHtml(k)}</td><td style="padding:6px 10px;border:1px solid #e5e5e5">${escapeHtml(v)}</td></tr>`,
    )
    .join("")}</table></div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      signal: AbortSignal.timeout(12_000),
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text,
        html,
        ...(fields.email ? { reply_to: fields.email } : {}),
      }),
    });

    if (!res.ok) {
      const bodyText = await res.text().catch(() => "");
      console.error("[leads] Resend HTTP", res.status, bodyText.slice(0, 300));
      return {
        ok: false,
        status: 502,
        error:
          "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo (hoặc dùng Gửi email bên dưới).",
      };
    }
    return { ok: true };
  } catch (err) {
    console.error("[leads] Resend fetch failed:", err);
    return {
      ok: false,
      status: 502,
      error:
        "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo (hoặc dùng Gửi email bên dưới).",
    };
  }
}

async function handleLeadPost(request: Request): Promise<Response> {
  const origin = request.headers.get("origin");
  if (!isAllowedOrigin(origin)) {
    return json({ ok: false, error: "Yêu cầu không hợp lệ." }, 403);
  }

  const ct = (request.headers.get("content-type") ?? "").toLowerCase();
  if (!ct.includes("application/json")) {
    return json({ ok: false, error: "Content-Type phải là application/json." }, 415);
  }

  if (!checkIpRate(clientIp(request))) {
    return json(
      {
        ok: false,
        error:
          "Bạn vừa gửi vài lần liên tiếp. Vui lòng đợi khoảng 10 phút, hoặc gọi hotline / nhắn Zalo.",
      },
      429,
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return json({ ok: false, error: "Dữ liệu gửi lên không hợp lệ." }, 400);
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return json({ ok: false, error: "Dữ liệu gửi lên không hợp lệ." }, 400);
  }

  const body = raw as Record<string, unknown>;

  // Honeypot → silent fake OK, no email
  const traps = [body.honey, body.website, body.company];
  if (traps.some((v) => typeof v === "string" && v.trim().length > 0)) {
    return json({ ok: true });
  }

  // Dwell: openedAt required + ≥ MIN_DWELL_MS
  const openedAt = body.openedAt;
  if (typeof openedAt !== "number" || !Number.isFinite(openedAt)) {
    return json(
      { ok: false, error: "Vui lòng kiểm tra lại thông tin rồi gửi sau vài giây." },
      400,
    );
  }
  if (Date.now() - openedAt < MIN_DWELL_MS) {
    return json(
      { ok: false, error: "Vui lòng kiểm tra lại thông tin rồi gửi sau vài giây." },
      400,
    );
  }

  const parsed = LeadBodySchema.safeParse(body);
  if (!parsed.success) {
    const first =
      parsed.error.issues[0]?.message ?? "Vui lòng kiểm tra các trường bắt buộc.";
    return json({ ok: false, error: first }, 400);
  }

  const data = parsed.data;
  const sent = await sendViaResend({
    name: data.name,
    phone: data.phone,
    email: data.email,
    unit: data.unit,
    message: data.message,
    sourceUrl: data.sourceUrl,
  });

  if (!sent.ok) {
    return json({ ok: false, error: sent.error }, sent.status);
  }

  return json({ ok: true });
}

/** Entrypoint for /api/leads — never throws. */
export async function handleLeadRequest(request: Request): Promise<Response> {
  try {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Accept",
          "Access-Control-Max-Age": "86400",
        },
      });
    }
    if (request.method !== "POST") {
      return json(
        { ok: false, error: "Phương thức không được hỗ trợ. Chỉ nhận POST." },
        405,
      );
    }
    return await handleLeadPost(request);
  } catch (err) {
    console.error("[leads] unhandled:", err);
    return json(
      {
        ok: false,
        error:
          "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo (hoặc dùng Gửi email bên dưới).",
      },
      500,
    );
  }
}
