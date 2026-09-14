import { useCallback, useEffect, useRef, useState } from "react";
import { VIRTUAL_TOUR } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { cn } from "@/lib/utils";

function preconnectTour() {
  if (typeof document === "undefined") return;
  const origin = VIRTUAL_TOUR.origin;
  if (document.querySelector(`link[data-tour-preconnect="${origin}"]`)) return;
  const link = document.createElement("link");
  link.rel = "preconnect";
  link.href = origin;
  link.crossOrigin = "anonymous";
  link.dataset.tourPreconnect = origin;
  document.head.appendChild(link);
  const dns = document.createElement("link");
  dns.rel = "dns-prefetch";
  dns.href = origin;
  document.head.appendChild(dns);
}

function whenIdle(fn: () => void, timeout: number) {
  if (typeof window === "undefined") return () => {};
  const w = window;
  if (typeof w.requestIdleCallback === "function") {
    const id = w.requestIdleCallback(fn, { timeout });
    return () => w.cancelIdleCallback(id);
  }
  const t = w.setTimeout(fn, Math.min(80, timeout));
  return () => w.clearTimeout(t);
}

export function TourEmbed({
  mode,
  className,
}: {
  mode: "page" | "section";
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(mode === "page");
  const [src, setSrc] = useState<string>();
  const [ready, setReady] = useState(false);

  const arm = useCallback(() => {
    preconnectTour();
    setArmed(true);
  }, []);

  useEffect(() => {
    if (mode !== "page") return;
    preconnectTour();
  }, [mode]);

  useEffect(() => {
    if (!armed || src) return;
    return whenIdle(() => setSrc(VIRTUAL_TOUR.src), mode === "page" ? 280 : 800);
  }, [armed, mode, src]);

  return (
    <div
      ref={host}
      className={cn(mode === "page" ? "tour-embed-page" : "tour-stage", className)}
      onPointerEnter={armed ? undefined : preconnectTour}
    >
      {src ? (
        <iframe
          title="Khám phá dự án The Camellia Sơn Trà"
          src={src}
          className={cn("tour-frame", ready && "is-ready")}
          loading="lazy"
          allow="autoplay; fullscreen; xr-spatial-tracking; gyroscope; accelerometer"
          allowFullScreen
          referrerPolicy="no-referrer"
          onLoad={() => setReady(true)}
        />
      ) : null}

      {ready ? null : (
        <div className="tour-cover">
          <SmartImg
            src={VIRTUAL_TOUR.poster}
            alt="Tour 360 The Camellia Sơn Trà"
            loading={mode === "page" ? "eager" : "lazy"}
            decoding="async"
            className="size-full object-cover"
          />
          {armed ? (
            <div className="view360-play" aria-hidden>
              <span className="view360-ring">
                <span className="font-num text-lg leading-none">360°</span>
              </span>
              <span className="mt-3 text-xs tracking-[0.18em] text-paper uppercase">
                Đang tải tour
              </span>
            </div>
          ) : (
            <button
              type="button"
              className="view360-play"
              onClick={arm}
              aria-label="Tải và mở tour 360"
            >
              <span className="view360-ring">
                <span className="font-num text-lg leading-none">360°</span>
              </span>
              <span className="mt-3 text-xs tracking-[0.18em] text-paper uppercase">
                Khám phá ngay
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
