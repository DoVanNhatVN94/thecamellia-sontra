/** Companion responsive widths for homepage-critical `/images/*` assets. */
const VARIANTS: Record<string, { w640: number; full: number }> = {
  "/images/hero-aerial.webp": { w640: 640, full: 1080 },
  "/images/hero.webp": { w640: 640, full: 1080 },
  "/images/exterior-1.webp": { w640: 640, full: 1080 },
  "/images/exterior-2.webp": { w640: 640, full: 1080 },
  "/images/lifestyle-1.webp": { w640: 640, full: 1080 },
  "/images/pool-1.webp": { w640: 640, full: 1080 },
  "/images/brochure-02.webp": { w640: 640, full: 1080 },
  "/images/yoga-op1.webp": { w640: 640, full: 1080 },
  "/images/kids.webp": { w640: 640, full: 1080 },
  "/images/amenity-2.webp": { w640: 640, full: 1080 },
  "/images/lobby.webp": { w640: 640, full: 1080 },
  "/images/bedroom.webp": { w640: 640, full: 1080 },
  "/images/kitchen.webp": { w640: 640, full: 1080 },
  "/images/facade.webp": { w640: 640, full: 1080 },
  "/images/sontra-beach.webp": { w640: 640, full: 900 },
  "/images/event-crowd.webp": { w640: 640, full: 1080 },
  "/images/pool-3.webp": { w640: 640, full: 1080 },
  "/images/layouts/ch09.webp": { w640: 640, full: 1200 },
  "/images/layouts/ch06.webp": { w640: 640, full: 1200 },
  "/images/layouts/ch01.webp": { w640: 640, full: 1200 },
  "/images/layouts/ch03.webp": { w640: 640, full: 1200 },
  "/images/midhome-statement.webp": { w640: 800, full: 1600 },
  "/images/midhome-building.webp": { w640: 800, full: 1600 },
  "/images/midhome-facts-bg.webp": { w640: 800, full: 1600 },
};

/** Build a `srcset` for a static `/images/...` path when a `-640` companion exists. */
export function companionSrcSet(src: string | undefined): string | undefined {
  if (!src || !src.startsWith("/images/") || src.startsWith("blob:")) return undefined;
  if (!src.endsWith(".webp")) return undefined;
  const meta = VARIANTS[src];
  if (!meta) return undefined;
  const small = src.replace(/\.webp$/, "-640.webp");
  return `${small} ${meta.w640}w, ${src} ${meta.full}w`;
}

export function isBlobUrl(src: string | undefined): boolean {
  return !!src && src.startsWith("blob:");
}
