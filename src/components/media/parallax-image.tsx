import { useEffect, useRef, useState } from "react";
import { useSlotSrc } from "@/lib/image-src";
import { companionSrcSet, isBlobUrl } from "@/lib/image-variants";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
  loading?: "eager" | "lazy";
  slot?: string;
  sizes?: string;
  srcSet?: string;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  speed = 0.22,
  loading = "lazy",
  slot,
  sizes,
  srcSet,
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const media = useRef<HTMLImageElement>(null);
  const resolved = useSlotSrc(slot, src);
  const [failed, setFailed] = useState(false);
  const resolvedSrcSet = isBlobUrl(resolved)
    ? undefined
    : srcSet ?? companionSrcSet(src) ?? companionSrcSet(resolved);

  useEffect(() => {
    setFailed(false);
  }, [resolved]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrap.current;
    const img = media.current;
    if (!el || !img) return;
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const mid = r.top + r.height / 2 - window.innerHeight / 2;
      img.style.transform = `translate3d(0, ${mid * speed * -0.4}px, 0) scale(1.14)`;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed, resolved]);

  return (
    <div ref={wrap} className={cn("overflow-hidden", className)}>
      {failed ? (
        <span className={cn("grid size-full place-items-center bg-sand text-xs text-muted", imgClassName)}>
          Đang cập nhật hình
        </span>
      ) : (
        <img
          ref={media}
          src={resolved}
          srcSet={resolvedSrcSet}
          sizes={resolvedSrcSet ? sizes : undefined}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
          className={cn("size-full object-cover will-change-transform", imgClassName)}
        />
      )}
    </div>
  );
}