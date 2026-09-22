import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NewsArticle } from "@/data/project";
import { SmartImg } from "@/lib/image-src";
import { cn } from "@/lib/utils";

type Props = {
  articles: NewsArticle[];
  className?: string;
};

/** Related articles band: kicker + heading + peek cards with arrow controls. */
export function RelatedNews({ articles, className }: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const cardWidth = useCallback(() => {
    const el = scroller.current;
    if (!el) return 0;
    const card = el.querySelector("[data-related-card]");
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
      setIndex(Math.round(el.scrollLeft / w) % Math.max(articles.length, 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [cardWidth, articles.length]);

  if (!articles.length) return null;

  return (
    <section className={cn("bg-paper", className)}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="kicker">Tin khác</p>
            <h2 className="mt-3 font-display text-3xl">Tiếp tục đọc</h2>
          </div>
          {articles.length > 1 ? (
            <div className="hidden gap-2 sm:flex">
              <button
                type="button"
                aria-label="Trước"
                onClick={() => go(-1)}
                className="grid size-11 place-items-center rounded-full border border-stone bg-cream text-ink"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Sau"
                onClick={() => go(1)}
                className="grid size-11 place-items-center rounded-full border border-stone bg-cream text-ink"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          ) : null}
        </div>

        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {articles.map((n) => (
            <Link
              key={n.slug}
              data-related-card
              to="/tin-tuc/$slug"
              params={{ slug: n.slug }}
              className="group block w-[min(82vw,420px)] shrink-0 snap-start overflow-hidden rounded-xl bg-cream shadow-border sm:w-[min(46%,420px)]"
            >
              <div className="aspect-video overflow-hidden rounded-t-xl">
                <SmartImg
                  slot={`news:${n.slug}`}
                  src={n.image}
                  alt={n.title}
                  loading="lazy"
                  decoding="async"
                  className={`size-full object-cover transition-transform duration-700 group-hover:scale-105 ${n.imageObjectClass ?? ""}`}
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[0.16em] uppercase text-muted">{n.date}</p>
                <h3 className="mt-2 line-clamp-3 min-h-[4.125rem] font-display text-xl leading-snug group-hover:text-terracotta">
                  {n.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {articles.length > 1 ? (
          <div className="mt-4 flex gap-2">
            {articles.map((n, i) => (
              <button
                key={`${n.slug}-dot`}
                type="button"
                aria-label={`Tới bài ${i + 1}`}
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
        ) : null}
      </div>
    </section>
  );
}
