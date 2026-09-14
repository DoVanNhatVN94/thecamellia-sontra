import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { VIEW_FLOORS } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { cn } from "@/lib/utils";

function kuulaSrc(id: string) {
  const params = new URLSearchParams({
    logo: "0",
    info: "0",
    fs: "1",
    vr: "0",
    zoom: "1",
    thumbs: "0",
    alpha: "0.60",
    inst: "0",
    keys: "0",
  });
  return `https://kuula.co/share/collection/${id}?${params.toString()}`;
}

function Viewer({
  title,
  src,
}: {
  title: string;
  src: string;
}) {
  return (
    <iframe
      title={title}
      src={src}
      className="size-full border-0"
      allow="fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function View360Section() {
  const [floorId, setFloorId] = useState<(typeof VIEW_FLOORS)[number]["id"]>("5");
  const [playing, setPlaying] = useState(false);
  const [compact, setCompact] = useState(false);
  const floor = VIEW_FLOORS.find((f) => f.id === floorId) ?? VIEW_FLOORS[0];
  const title = `Tầm view 360 ${floor.label} The Camellia Sơn Trà`;
  const src = kuulaSrc(floor.kuula);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setCompact(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || !compact) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlaying(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [playing, compact]);

  const floorTabs = (tone: "light" | "dark") => (
    <div className="filter-facet" role="tablist" aria-label="Chọn tầng tầm view">
      {VIEW_FLOORS.map((f) => {
        const on = f.id === floorId;
        const selected =
          tone === "dark"
            ? "border-paper bg-paper text-ink"
            : "border-ink bg-ink text-paper";
        const idle =
          tone === "dark"
            ? "border-stone bg-transparent text-paper"
            : "border-stone bg-paper text-ink";
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={on}
            onClick={() => setFloorId(f.id)}
            className={cn("filter-chip border", on ? selected : idle)}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <article id="tam-view" className="scroll-mt-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <p className="kicker">Camera 360°</p>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl">Tầm view</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Xoay góc nhìn từ loggia tầng 5, 10, 15 và 25 — biển Mân Thái, bán đảo Sơn
            Trà và đô thị Đà Nẵng. Viewer chính thức của chủ đầu tư.{" "}
            <Link to="/kham-pha" className="text-ink underline underline-offset-4">
              Tour ảo toàn cảnh
            </Link>
            .
          </p>
        </div>
        {floorTabs("light")}
      </div>

      <div className="view360-frame mt-8 shadow-border">
        {playing && !compact ? (
          <Viewer key={floor.kuula} title={title} src={src} />
        ) : (
          <>
            <SmartImg
              slot={`view:${floor.id}`}
              src={floor.src}
              alt={floor.alt}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
            />
            <button
              type="button"
              className="view360-play"
              onClick={() => setPlaying(true)}
              aria-label={`Khám phá tầm view 360 ${floor.label}`}
            >
              <span className="view360-ring">
                <span className="font-num text-lg leading-none">360°</span>
              </span>
              <span className="mt-3 text-xs tracking-[0.18em] text-paper uppercase">
                Khám phá ngay
              </span>
            </button>
          </>
        )}
      </div>
      {playing && !compact ? (
        <button
          type="button"
          className="mt-3 text-sm text-muted underline underline-offset-4"
          onClick={() => setPlaying(false)}
        >
          Đóng camera 360 · xem ảnh {floor.label}
        </button>
      ) : (
        <p className="mt-3 text-sm text-muted">
          Bấm vào ảnh để mở camera 360 {floor.label}. Trên điện thoại sẽ xem toàn màn hình.
        </p>
      )}

      {playing && compact && typeof document !== "undefined"
        ? createPortal(
            <div className="view360-overlay" role="dialog" aria-modal="true" aria-label={title}>
              <div className="view360-overlay-bar">
                <p className="min-w-0 flex-1 font-display text-lg text-paper">{floor.label}</p>
                <button
                  type="button"
                  className="grid size-11 shrink-0 place-items-center rounded-md text-paper"
                  onClick={() => setPlaying(false)}
                  aria-label="Đóng camera 360"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="view360-overlay-tabs">{floorTabs("dark")}</div>
              <div className="view360-overlay-stage">
                <Viewer key={floor.kuula} title={title} src={src} />
              </div>
            </div>,
            document.body,
          )
        : null}
    </article>
  );
}
