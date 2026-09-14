import { AMENITY_LAYERS, GALLERIES, NEWS, UNIT_TYPES, VIEW_FLOORS } from "@/data/project";

export type MediaSlot = {
  id: string;
  group: string;
  label: string;
  src: string;
  overlay: boolean;
};

/** Renderings that still have floor-plan / “3PN” watermarks from CĐT. */
const OVERLAY_SRC = new Set([
  "/images/amenity-2.webp",
  "/images/amenity-4.webp",
  "/images/kids.webp",
]);

function slot(id: string, group: string, label: string, src: string): MediaSlot {
  return { id, group, label, src, overlay: OVERLAY_SRC.has(src) };
}

function fromGallery(
  items: readonly { src: string; alt: string; caption?: string; kind?: "image" | "video"; poster?: string }[],
  prefix: string,
  group: string,
): MediaSlot[] {
  return items.map((s, i) =>
    slot(
      `${prefix}:${i}`,
      group,
      s.kind === "video" ? "Poster video flycam" : (s.caption ?? s.alt),
      s.kind === "video" ? (s.poster ?? s.src) : s.src,
    ),
  );
}

export const MEDIA_SLOTS: MediaSlot[] = [
  ...fromGallery(GALLERIES.hero, "hero", "Hero"),
  ...fromGallery(GALLERIES.exterior, "exterior", "Phối cảnh"),
  slot("story:main", "Câu chuyện", "Tổng thể trên cao", "/images/hero-aerial.webp"),
  slot("story:inset", "Câu chuyện", "Góc phố chiều", "/images/brochure-02.webp"),
  slot("facts:bg", "Thông tin dự án", "Nền tòa tháp chiều", "/images/hero.webp"),
  ...fromGallery(GALLERIES.lifestyle, "lifestyle", "Tinh thần"),
  ...fromGallery(GALLERIES.location, "location", "Vị trí"),
  ...fromGallery(GALLERIES.architecture, "architecture", "Kiến trúc"),
  ...fromGallery(GALLERIES.amenity, "amenity", "Tiện ích"),
  ...AMENITY_LAYERS.map((layer) =>
    slot(`amenity-layer:${layer.id}`, "Tiện ích", `Lớp ${layer.title}`, layer.image),
  ),
  ...fromGallery(GALLERIES.interior, "interior", "Nội thất"),
  slot("unit:typical", "Căn hộ", "Mặt bằng tầng điển hình", "/images/floor-typical.webp"),
  ...VIEW_FLOORS.map((f) => slot(`view:${f.id}`, "Tầm view", f.label, f.src)),
  ...UNIT_TYPES.flatMap((u) => [
    ...(u.image
      ? [slot(`unit:${u.id}`, "Căn hộ", u.name, u.image)]
      : []),
    ...u.layouts.map((l, i) =>
      slot(`unit:${u.id}:${i}`, "Căn hộ", `${u.name} ${l.code}`, l.src),
    ),
  ]),
  ...NEWS.flatMap((n) => [
    slot(`news:${n.slug}`, "Tin tức", n.title, n.image),
    ...(n.poster ? [slot(`news:${n.slug}:poster`, "Tin tức", `${n.title} — poster`, n.poster)] : []),
    ...n.gallery.map((src, i) => slot(`news:${n.slug}:${i}`, "Tin tức", `${n.title} — ảnh ${i + 1}`, src)),
  ]),
  ...fromGallery(GALLERIES.cta, "cta", "Đăng ký"),
];

export const MEDIA_GROUPS = [...new Set(MEDIA_SLOTS.map((s) => s.group))];
