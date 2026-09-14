import { PROJECT } from "@/data/project";

const STORAGE_KEY = "camellia-leads";

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
  return `mailto:${PROJECT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export async function sendLeadEmail(input: LeadInput): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${PROJECT.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        "Họ và tên": input.name,
        "Số điện thoại": input.phone,
        "Email khách": input.email || "(không có)",
        "Loại căn quan tâm": input.unit || "(chưa chọn)",
        "Nhu cầu": input.message || "(không có)",
        "Nguồn": "Website The Camellia Sơn Trà",
        _subject: `[The Camellia] Đăng ký nhận bảng giá — ${input.name}`,
        _template: "table",
        _captcha: "false",
        _autoresponse:
          "Cảm ơn bạn đã đăng ký nhận bảng giá The Camellia Sơn Trà. Tư vấn viên sẽ liên hệ sớm qua số điện thoại bạn để lại.",
        ...(input.email ? { _replyto: input.email } : {}),
      }),
    });
    if (!res.ok) {
      return { ok: false, error: "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo." };
    }
    const json = (await res.json()) as { success?: string | boolean };
    if (json.success === false || json.success === "false") {
      return { ok: false, error: "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Không gửi được. Vui lòng gọi hotline hoặc nhắn Zalo." };
  }
}
