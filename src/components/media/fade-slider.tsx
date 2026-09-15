import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbox } from "@/components/media/lightbox";
import { SmartImg, useImageSrc } from "@/lib/image-src";
import { cn } from "@/lib/utils";

export type FadeSlide = {
  src: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  caption?: string;
};

type Props = {
  slides: FadeSlide[];
  interval?: number;
  className?: string;
  kenBurns?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  lightbox?: boolean;
  priority?: boolean;
  galleryId?: string;
  /** Hint for responsive candidates from SmartImg companions. */
  sizes?: string;
};

function isNear(i: number, index: number, count: number) {
  if (count <= 3) return true;
  const prev = (index - 1 + count) % count;
  const next = (index + 1) % count;
  return i === index || i === prev || i === next;
}

export function FadeSlider({
  slides,
  interval = 6500,
  className,
  kenBurns = true,
  showArrows = true,
  showDots = true,
  lightbox = false,
  priority = false,
  galleryId,
  sizes = "100vw",
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(true);
  const [allowVideo, setAllowVideo] = useState(false);
  const touch = useRef<{ x: number } | null>(null);
  const { resolve, isHidden } = useImageSrc();

  const items = slides
    .map((slide, origin) => ({ slide, origin }))
    .filter(({ origin }) => !(galleryId && isHidden(`${galleryId}:${origin}`)))
    .map(({ slide, origin }) => ({
      ...slide,
      origin,
      displaySrc: resolve(galleryId ? `${galleryId}:${origin}` : undefined, slide.src),
      displayPoster: resolve(
        galleryId ? `${galleryId}:${origin}` : undefined,
        slide.poster ?? slide.src,
      ),
    }));

  const count = items.length;

  const go = useCallback(
    (dir: number) => {
      if (!count) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (count && index >= count) setIndex(0);
  }, [count, index]);

  useEffect(() => {
    const el = root.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "120px", threshold: 0.02 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType === "slow-2g" || conn?.effectiveType === "2g") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setAllowVideo(true), 1800);
    return () => window.clearTimeout(t);
  }, [inView]);

  useEffect(() => {
    if (paused || open || count < 2 || !inView) return;
    const t = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(t);
  }, [paused, open, count, interval, go, inView]);

  if (!count) return null;
  const current = items[index];
  const stills = items.filter((s) => s.kind !== "video");

  return (
    <div
      ref={root}
      className={cn("relative isolate overflow-hidden bg-ink", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => {
        touch.current = { x: e.clientX };
      }}
      onPointerUp={(e) => {
        if (!touch.current) return;
        const dx = e.clientX - touch.current.x;
        touch.current = null;
        if (dx > 48) go(-1);
        else if (dx < -48) go(1);
      }}
    >
      {items.map((slide, i) => {
        const active = i === index;
        const near = isNear(i, index, count);
        return (
          <div
            key={`${slide.src}-${slide.origin}`}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              active ? "opacity-100" : "opacity-0",
            )}
            aria-hidden={!active}
          >
            {near ? (
              slide.kind === "video" ? (
                active && inView && allowVideo ? (
                  <video
                    className="size-full object-cover"
                    src={slide.src}
                    poster={slide.displayPoster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    ref={(el) => {
                      if (!el) return;
                      void el.play().catch(() => {});
                    }}
                  />
                ) : (
                  <SmartImg
                    slot={galleryId ? `${galleryId}:${slide.origin}` : undefined}
                    src={slide.poster ?? slide.src}
                    alt={slide.alt}
                    fetchPriority={priority && i === 0 ? "high" : "auto"}
                    decoding="async"
                    sizes={sizes}
                    className="size-full object-cover"
                  />
                )
              ) : (
                <SmartImg
                  slot={galleryId ? `${galleryId}:${slide.origin}` : undefined}
                  src={slide.src}
                  alt={slide.alt}
                  loading={priority && i === 0 ? "eager" : "lazy"}
                  fetchPriority={priority && i === 0 ? "high" : "auto"}
                  decoding="async"
                  sizes={sizes}
                  onClick={() => {
                    if (lightbox) setOpen(true);
                  }}
                  className={cn(
                    "size-full object-cover",
                    kenBurns && active && "hero-kenburns",
                    lightbox && "cursor-zoom-in",
                  )}
                />
              )
            ) : null}
          </div>
        );
      })}

      {showArrows && count > 1 ? (
        <>
          <button
            type="button"
            aria-label="Ảnh trước"
            onClick={() => go(-1)}
            className="absolute top-1/2 left-3 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/25 bg-ink/35 text-paper backdrop-blur-sm"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Ảnh sau"
            onClick={() => go(1)}
            className="absolute top-1/2 right-3 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-paper/25 bg-ink/35 text-paper backdrop-blur-sm"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      ) : null}

      {count > 1 ? (
        <div className="absolute inset-x-0 bottom-0 z-10 h-0.5 bg-paper/15">
          <div
            key={index}
            className="slider-progress h-full bg-terracotta"
            style={{
              animationDuration: `${interval}ms`,
              animationPlayState: paused || open || !inView ? "paused" : "running",
            }}
          />
        </div>
      ) : null}

      {showDots && count > 1 ? (
        <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
          {items.map((s, i) => (
            <button
              key={`${s.src}-dot-${s.origin}`}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 rounded-full transition-[width,background-color] duration-300",
                i === index ? "w-8 bg-paper" : "w-3 bg-paper/40",
              )}
            />
          ))}
        </div>
      ) : null}

      {current?.caption ? (
        <p className="absolute bottom-10 left-6 z-10 text-xs tracking-widest text-paper/80 uppercase">
          {current.caption}
        </p>
      ) : null}

      {open && stills.length ? (
        <Lightbox
          images={stills.map((s) => ({ src: s.displaySrc, alt: s.alt }))}
          index={Math.max(
            0,
            stills.findIndex((s) => s.origin === current.origin),
          )}
          onClose={() => setOpen(false)}
          onIndex={(i) => {
            const origin = stills[i]?.origin;
            const next = items.findIndex((s) => s.origin === origin);
            if (next >= 0) setIndex(next);
          }}
        />
      ) : null}
    </div>
  );
}
