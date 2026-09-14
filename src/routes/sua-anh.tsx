import { Link, createFileRoute } from "@tanstack/react-router";
import { Eye, EyeOff, RotateCcw, Upload } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { MEDIA_GROUPS, MEDIA_SLOTS, type MediaSlot } from "@/data/media-slots";
import { SmartImg, useImageSrc } from "@/lib/image-src";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/sua-anh")({
  head: () => ({
    meta: [
      { title: "Sửa ảnh | The Camellia Sơn Trà" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: StudioPage,
});

function groupAnchor(group: string) {
  return `nhom-${group.toLowerCase().replace(/\s+/g, "-")}`;
}

function StudioPage() {
  const studio = useImageSrc();
  const [busy, setBusy] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const item of MEDIA_SLOTS) {
      const src = studio.resolve(item.id, item.src);
      map.set(src, (map.get(src) ?? 0) + 1);
    }
    return map;
  }, [studio]);

  const overlayLeft = MEDIA_SLOTS.filter((s) => s.overlay && !studio.overridden.has(s.id)).length;
  const hiddenCount = studio.hidden.size;
  const changedCount = studio.overridden.size;

  return (
    <SiteShell>
      <section className="bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="kicker">Thư viện của bạn</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">Sửa ảnh trên website</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            Bấm <strong>Đổi ảnh</strong> để tải JPG/PNG/WebP từ máy. Ẩn ảnh bị lặp
            hoặc còn chữ trên hình. Ảnh chỉ lưu trên trình duyệt này — khách xem
            website chưa thấy. Gửi ảnh mới trong chat kèm tên mục để lên bản chính thức.
          </p>

          <div className="mt-6 rounded-xl border border-terracotta/25 bg-paper p-5 shadow-border">
            <p className="text-sm leading-relaxed">
              {overlayLeft} ảnh còn chữ/mặt bằng đè lên. {changedCount} ảnh đã
              đổi trên máy này. {hiddenCount} ảnh đang ẩn.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Ảnh còn thiếu (gửi trong chat nếu có): nội thất 3PN & Duplex sạch
              chữ, spa, skybar, BBQ, co-working, rạp chiếu, mặt bằng thật.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" asChild>
              <Link to="/">Xem trang chủ</Link>
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                if (window.confirm("Xóa mọi ảnh đã đổi và hiện lại ảnh ẩn?")) {
                  void studio.resetAll();
                }
              }}
            >
              <RotateCcw className="size-4" />
              Đặt lại tất cả
            </Button>
          </div>
          {error ? <p className="mt-4 text-sm text-terracotta">{error}</p> : null}

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Nhóm ảnh">
            {MEDIA_GROUPS.map((group) => (
              <a
                key={group}
                href={`#${groupAnchor(group)}`}
                className="rounded-full border border-stone bg-paper px-3 py-1.5 text-xs tracking-wide uppercase hover:border-ink/30"
              >
                {group}
              </a>
            ))}
          </nav>

          {MEDIA_GROUPS.map((group) => (
            <div key={group} id={groupAnchor(group)} className="mt-14 scroll-mt-24">
              <h2 className="font-display text-3xl">{group}</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MEDIA_SLOTS.filter((s) => s.group === group).map((item) => (
                  <SlotCard
                    key={item.id}
                    slot={item}
                    duplicate={(counts.get(studio.resolve(item.id, item.src)) ?? 0) > 1}
                    busy={busy === item.id}
                    onError={setError}
                    onBusy={setBusy}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function SlotCard({
  slot,
  duplicate,
  busy,
  onError,
  onBusy,
}: {
  slot: MediaSlot;
  duplicate: boolean;
  busy: boolean;
  onError: (msg: string | null) => void;
  onBusy: (id: string | null) => void;
}) {
  const studio = useImageSrc();
  const input = useRef<HTMLInputElement>(null);
  const hidden = studio.isHidden(slot.id);
  const changed = studio.overridden.has(slot.id);
  const overlay = slot.overlay && !changed;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl bg-paper shadow-border",
        hidden && "opacity-60",
      )}
    >
      <SmartImg
        slot={slot.id}
        src={slot.src}
        alt={slot.label}
        loading="lazy"
        decoding="async"
        className="aspect-16/10 w-full object-cover"
      />
      <div className="p-4">
        <p className="font-display text-lg leading-snug">{slot.label}</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {overlay ? (
            <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-[11px] tracking-wide text-terracotta uppercase">
              Còn chữ trên ảnh
            </span>
          ) : null}
          {duplicate ? (
            <span className="rounded-full bg-sand px-2 py-0.5 text-[11px] tracking-wide text-muted uppercase">
              Có thể lặp
            </span>
          ) : null}
          {changed ? (
            <span className="rounded-full bg-terracotta/10 px-2 py-0.5 text-[11px] tracking-wide text-terracotta uppercase">
              Đã đổi
            </span>
          ) : null}
          {hidden ? (
            <span className="rounded-full bg-sand px-2 py-0.5 text-[11px] tracking-wide text-muted uppercase">
              Đang ẩn
            </span>
          ) : null}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" disabled={busy} onClick={() => input.current?.click()}>
            {busy ? (
              "Đang nén…"
            ) : (
              <>
                <Upload className="size-3.5" /> Đổi ảnh
              </>
            )}
          </Button>
          <Button size="sm" variant="outline" onClick={() => studio.hide(slot.id, !hidden)}>
            {hidden ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
            {hidden ? "Hiện" : "Ẩn"}
          </Button>
          {changed || hidden ? (
            <Button size="sm" variant="ghost" onClick={() => void studio.reset(slot.id)}>
              <RotateCcw className="size-3.5" /> Đặt lại
            </Button>
          ) : null}
        </div>
        <input
          ref={input}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/jpg"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            e.target.value = "";
            if (!file) return;
            if (file.size > 12 * 1024 * 1024) {
              onError("Ảnh quá nặng (tối đa 12 MB).");
              return;
            }
            onBusy(slot.id);
            onError(null);
            void studio
              .replace(slot.id, file)
              .catch(() => onError("Không đọc được ảnh. Dùng JPG, PNG hoặc WebP."))
              .finally(() => onBusy(null));
          }}
        />
      </div>
    </article>
  );
}
