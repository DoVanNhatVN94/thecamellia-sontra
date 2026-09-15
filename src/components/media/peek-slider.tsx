import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Lightbox } from "@/components/media/lightbox";
import { SmartImg, useImageSrc } from "@/lib/image-src";
import { cn } from "@/lib/utils";

export type PeekSlide = {
  src: string;
  alt: string;
  caption?: string;
  fit?: "cover" | "contain";
};

type Props = {
  slides: PeekSlide[];
  interval?: number;
  className?: string;
  cardClassName?: string;
  lightbox?: boolean;
  galleryId?: string;
};

export function PeekSlider({
  slides,
  interval = 4200,
  className,
  cardClassName,
  lightbox = true,
  galleryId,
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(true);
  const { resolve, isHidden } = useImageSrc();
  const items = slides
    .map((slide, origin) => ({
      ...slide,
      origin,
      displaySrc: resolve(galleryId ? `${galleryId}:${origin}` : undefined, slide.src),
    }))
    .filter((s) => !(galleryId && isHidden(`${galleryId}:${s.origin}`)));

  const cardWidth = useCallback(() => {
    const el = scroller.current;
    if (!el) return 0;
    const card = el.querySelector("figure");
    if (!card) return el.clientWidth;
    const style = window.getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || "16") || 16;
    return card.getBoundingClientRect().width + gap;
  }, []);

  const go = useCallback(
    (dir: number) => {
      const el = scroller.current;
      if (!el) return;
      const w = cardWidth();
      const max = el.scrollWidth - el.clientWidth;
      let next = el.scrollLeft + dir * w;
      if (next > max - 8) next = 0;
      if (next < 0) next = max;
      el.scrollTo({ left: next, behavior: "smooth" });
    },
    [cardWidth],
  );

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const onScroll = () => {
      const w = cardWidth() || 1;
      setIndex(Math.round(el.scrollLeft / w) % Math.max(items.length, 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardWidth, items.length]);

  useEffect(() => {
    const el = scroller.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "160px", threshold: 0.02 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (paused || open || items.length < 2 || !inView) return;
    const t = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(t);
  }, [paused, open, items.length, interval, go, inView]);

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((s, i) => {
          const near = i <= 1 || (inView && Math.abs(i - index) <= 1);
          return (
          <figure
            key={`${s.src}-${s.origin}`}
            className={cn(
              "w-[min(82vw,720px)] shrink-0 snap-start",
              cardClassName,
            )}
          >
            <div
              className={cn(
                "overflow-hidden rounded-xl",
                s.fit === "contain" && "bg-paper",
              )}
            >
              {near ? (
              <SmartImg
                slot={galleryId ? `${galleryId}:${s.origin}` : undefined}
                src={s.src}
                alt={s.alt}
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 720px) 82vw, 720px"
                onClick={() => {
                  if (!lightbox) return;
                  setIndex(i);
                  setOpen(true);
                }}
                className={cn(
                  "w-full",
                  s.fit === "contain"
                    ? "aspect-video object-contain bg-paper"
                    : "aspect-16/10 object-cover transition-transform duration-700",
                  lightbox && "cursor-zoom-in",
                  lightbox && s.fit !== "contain" && "hover:scale-[1.03]",
                )}
              />
              ) : (
                <div
                  className={cn(
                    "w-full bg-sand",
                    s.fit === "contain" ? "aspect-video" : "aspect-16/10",
                  )}
                  aria-hidden
                />
              )}
            </div>
            {s.caption ? (
              <figcaption className="mt-3 text-sm text-muted">
                {s.caption}
              </figcaption>
            ) : null}
          </figure>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          {items.map((s, i) => (
            <button
              key={`${s.src}-p-${s.origin}`}
              type="button"
              aria-label={`Tới ảnh ${i + 1}`}
              onClick={() => {
                const el = scroller.current;
                if (!el) return;
                el.scrollTo({ left: i * cardWidth(), behavior: "smooth" });
              }}
              className={cn(
                "h-1 rounded-full transition-[width,background-color] duration-300",
                i === index ? "w-8 bg-terracotta" : "w-3 bg-stone",
              )}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Trước"
            onClick={() => go(-1)}
            className="grid size-11 place-items-center rounded-full border border-stone text-ink"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Sau"
            onClick={() => go(1)}
            className="grid size-11 place-items-center rounded-full border border-stone text-ink"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
      {open ? (
        <Lightbox
          images={items.map((s) => ({ src: s.displaySrc, alt: s.alt }))}
          index={index}
          onClose={() => setOpen(false)}
          onIndex={setIndex}
        />
      ) : null}
    </div>
  );
}
