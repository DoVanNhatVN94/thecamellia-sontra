import { useEffect, useState } from "react";
import { PROJECT, UNIT_TYPES } from "@/data/project";
import { leadMailtoHref, saveLead, sendLeadEmail } from "@/lib/leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const PHONE_RE = /^(0|\+84)[0-9]{8,10}$/;

type Props = {
  defaultUnit?: string;
  compact?: boolean;
  onSuccess?: () => void;
  className?: string;
};

export function LeadForm({ defaultUnit, compact, onSuccess, className }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [unit, setUnit] = useState(defaultUnit ?? "");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [error, setError] = useState("");
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (defaultUnit) setUnit(defaultUnit);
  }, [defaultUnit]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const n = name.trim();
    const p = phone.replace(/\s/g, "");
    if (n.length < 2) {
      setError("Vui lòng nhập họ tên.");
      return;
    }
    if (!PHONE_RE.test(p)) {
      setError("Số điện thoại chưa đúng định dạng.");
      return;
    }
    if (honey) {
      setOk(true);
      return;
    }
    const payload = {
      name: n,
      phone: p,
      email: email.trim() || undefined,
      unit: unit || undefined,
      message: message.trim() || undefined,
    };
    setBusy(true);
    const result = await sendLeadEmail(payload);
    if (!result.ok) {
      setError(result.error);
      setBusy(false);
      return;
    }
    saveLead(payload);
    setOk(true);
    setBusy(false);
    onSuccess?.();
  }

  if (ok) {
    return (
      <div className={cn("rounded-lg bg-paper p-6 text-center", className)}>
        <p className="kicker">Đã nhận thông tin</p>
        <h3 className="mt-3 font-display text-2xl">Cảm ơn {name.trim()}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Tư vấn viên sẽ liên hệ trong thời gian sớm nhất với bảng giá, mặt bằng
          và chính sách phù hợp.
        </p>
      </div>
    );
  }

  const extraCls = compact ? "hidden" : "hidden sm:grid";

  return (
    <form onSubmit={submit} className={cn("relative grid gap-3", className)}>
      <div className="h-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="lead-company">Công ty</label>
        <input
          id="lead-company"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lead-name">Họ và tên</Label>
        <Input
          id="lead-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nguyễn Văn A"
          autoComplete="name"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lead-phone">Số điện thoại</Label>
        <Input
          id="lead-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="09xx xxx xxx"
          inputMode="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lead-unit">Loại căn quan tâm</Label>
        <select
          id="lead-unit"
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="h-11 rounded-md border border-stone bg-paper px-3.5 text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
        >
          <option value="">Chưa xác định</option>
          {UNIT_TYPES.map((u) => (
            <option key={u.id} value={u.name}>
              {u.comingSoon ? `${u.name} (sắp công bố)` : `${u.name} · ${u.area}`}
            </option>
          ))}
        </select>
      </div>
      <div className={cn("gap-1.5", extraCls)}>
        <Label htmlFor="lead-email">Email (không bắt buộc)</Label>
        <Input
          id="lead-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@domain.com"
          autoComplete="email"
        />
      </div>
      <div className={cn("gap-1.5", extraCls)}>
        <Label htmlFor="lead-msg">Nhu cầu</Label>
        <Textarea
          id="lead-msg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="An cư, đầu tư, xem nhà mẫu…"
          rows={3}
        />
      </div>
      {error ? (
        <div className="grid gap-2 rounded-md bg-terracotta/10 p-3">
          <p className="text-sm text-terracotta">{error}</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
            <a href={`tel:${PROJECT.hotlineTel}`} className="font-num underline underline-offset-2">
              Gọi {PROJECT.hotlineDisplay}
            </a>
            <a href={PROJECT.zalo} target="_blank" rel="noreferrer" className="underline underline-offset-2">
              Zalo
            </a>
            <a
              href={leadMailtoHref({
                name: name.trim(),
                phone: phone.replace(/\s/g, ""),
                email: email.trim() || undefined,
                unit: unit || undefined,
                message: message.trim() || undefined,
              })}
              className="underline underline-offset-2"
            >
              Gửi email
            </a>
          </div>
        </div>
      ) : null}
      <Button type="submit" disabled={busy} className="mt-1 w-full">
        {busy ? "Đang gửi…" : "Nhận bảng giá & tư vấn"}
      </Button>
      <p className="text-center text-[11px] leading-relaxed text-muted">
        Thông tin được bảo mật. Việc đăng ký không ràng buộc mua bán.
      </p>
    </form>
  );
}
