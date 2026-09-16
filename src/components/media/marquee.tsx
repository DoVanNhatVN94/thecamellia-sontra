import { SmartImg, useImageSrc } from "@/lib/image-src";
import { cn } from "@/lib/utils";

type Item = { src: string; alt: string };

export function ImageMarquee({
  items,
  className,
  reverse = false,
  galleryId,
}: {
  items: Item[];
  className?: string;
  reverse?: boolean;
  galleryId?: string;
}) {
  const { resolve, isHidden } = useImageSrc();
  const visible = items
    .map((item, origin) => ({
      ...item,
      origin,
      displaySrc: resolve(galleryId ? `${galleryId}:${origin}` : undefined, item.src),
    }))
    .filter((item) => !(galleryId && isHidden(`${galleryId}:${item.origin}`)));
  const loop = [...visible, ...visible];
  if (!visible.length) return null;
  return (
    <div className={cn("overflow-hidden", className)} aria-hidden="true">
      <div className={cn("marquee-track flex w-max gap-3", reverse && "marquee-reverse")}>
        {loop.map((item, i) => (
          <SmartImg
            key={`${item.src}-${item.origin}-${i}`}
            slot={galleryId ? `${galleryId}:${item.origin}` : undefined}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            className="h-44 w-72 shrink-0 rounded-lg object-cover sm:h-56 sm:w-96"
            sizes="384px"
          />
        ))}
      </div>
    </div>
  );
}

export function TextMarquee({ items, className }: { items: string[]; className?: string }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className={cn("overflow-hidden border-y border-stone bg-paper py-5", className)} aria-hidden="true">
      <div className="marquee-track flex w-max gap-10 px-6">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs tracking-[0.28em] whitespace-nowrap text-muted uppercase"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}