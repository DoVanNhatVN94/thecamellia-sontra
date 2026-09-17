import { useEffect, useRef, useState } from "react";
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
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; phone?: string }>({});
  const [ok, setOk] = useState(false);
  const [busy, setBusy] = useState(false);
  const openedAt = useRef(Date.now());

  useEffect(() => {
    if (defaultUnit) setUnit(defaultUnit);
  }, [defaultUnit]);

  function validate() {
    const next: { name?: string; phone?: string } = {};
    const n = name.trim();
    const p = phone.replace(/\s/g, "");
    if (n.length < 2) next.name = "Vui lòng nhập họ tên.";
    if (!p) next.phone = "Vui lòng nhập số điện thoại.";
    else if (!PHONE_RE.test(p)) next.phone = "Số điện thoại chưa đúng định dạng (vd: 09xxxxxxxx hoặc +84…).";
    setFieldErrors(next);
    return { ok: Object.keys(next).length === 0, n, p };
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const { ok: valid, n, p } = validate();
    if (!valid) {
      setError("Vui lòng kiểm tra các trường bắt buộc.");
      return;
    }
    // Dual honeypot: classic company + website URL traps
    if (honey || website) {
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
    const result = await sendLeadEmail(payload, {
      honey: honey || website,
      openedAt: openedAt.current,
    });
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

  const showExtras = !compact;

  return (
    <form noValidate onSubmit={submit} className={cn("relative grid gap-3", className)}>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
        <label htmlFor="lead-company">Công ty</label>
        <input
          id="lead-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
        <label htmlFor="lead-website">Website</label>
        <input
          id="lead-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lead-name">
          Họ và tên <span className="text-terracotta">*</span>
        </Label>
        <Input
          id="lead-name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (fieldErrors.name) setFieldErrors((f) => ({ ...f, name: undefined }));
          }}
          placeholder="Nguyễn Văn A"
          autoComplete="name"
          aria-required="true"
          aria-invalid={fieldErrors.name ? true : undefined}
          aria-describedby={fieldErrors.name ? "lead-name-err" : undefined}
        />
        {fieldErrors.name ? (
          <p id="lead-name-err" className="text-xs text-terracotta">
            {fieldErrors.name}
          </p>
        ) : null}
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="lead-phone">
          Số điện thoại <span className="text-terracotta">*</span>
        </Label>
        <Input
          id="lead-phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (fieldErrors.phone) setFieldErrors((f) => ({ ...f, phone: undefined }));
          }}
          placeholder="09xx xxx xxx"
          inputMode="tel"
          autoComplete="tel"
          aria-required="true"
          aria-invalid={fieldErrors.phone ? true : undefined}
          aria-describedby={fieldErrors.phone ? "lead-phone-err" : "lead-phone-hint"}
        />
        {fieldErrors.phone ? (
          <p id="lead-phone-err" className="text-xs text-terracotta">
            {fieldErrors.phone}
          </p>
        ) : (
          <p id="lead-phone-hint" className="text-[11px] text-muted">
            Định dạng: 0xxxxxxxxx hoặc +84xxxxxxxxx
          </p>
        )}
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
      {showExtras ? (
        <>
          <div className="grid gap-1.5">
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
          <div className="grid gap-1.5">
            <Label htmlFor="lead-msg">Nhu cầu</Label>
            <Textarea
              id="lead-msg"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="An cư, đầu tư, xem nhà mẫu…"
              rows={3}
            />
          </div>
        </>
      ) : null}
      {error ? (
        <div className="grid gap-2 rounded-md bg-terracotta/10 p-3" role="alert">
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
