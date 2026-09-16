import { NEWS, PROJECT, UNIT_TYPES } from "@/data/project";

/** Public origin. Override with VITE_SITE_URL when needed. */
export const SITE_ORIGIN = String(
  import.meta.env.VITE_SITE_URL ?? "https://thecamellia-sontra.com",
).replace(/\/$/, "");

export const SITE = {
  name: PROJECT.name,
  nameEn: PROJECT.nameEn,
  tagline: PROJECT.tagline,
  locale: "vi_VN",
  localeAlt: "vi",
  ogImage: "/og.jpg",
  twitter: "",
  geo: {
    region: "VN-DN",
    placename: "Sơn Trà, Đà Nẵng",
    // Giao lộ Lê Văn Lương – Lê Đức Thọ, gần biển Mân Thái
    lat: 16.0835,
    lng: 108.249,
  },
} as const;

export function absUrl(path: string, origin = SITE_ORIGIN) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${p}` : p;
}

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Override OG image pixel size when known. */
  imageWidth?: number;
  imageHeight?: number;
  /** Override og:image:alt (articles default to title). */
  imageAlt?: string;
  type?: "website" | "article";
  keywords?: string;
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

/** Known OG asset dimensions (path relative to site root). Default og.jpg is 1200×630. */
export const OG_IMAGE_DIMS: Record<string, { width: number; height: number }> = {
  "/og.jpg": { width: 1200, height: 630 },
  "/images/news-tien-do-card.jpg": { width: 1200, height: 900 },
  "/images/news-event-card-og.jpg": { width: 1400, height: 787 },
  "/images/news-gio-hang-card-og.jpg": { width: 960, height: 540 },
  "/images/news-ra-hang-card-og.jpg": { width: 960, height: 540 },
  "/images/news-launch-og.jpg": { width: 1080, height: 722 },
  "/images/news-ceo-1-og.jpg": { width: 960, height: 641 },
  "/images/news-tt03-og.jpg": { width: 1080, height: 608 },
};

function ogPathKey(imageUrl: string) {
  try {
    if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
      return new URL(imageUrl).pathname;
    }
  } catch {
    /* keep as-is */
  }
  return imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
}

export function resolveOgDims(input: Pick<SeoInput, "image" | "imageWidth" | "imageHeight">) {
  if (input.imageWidth && input.imageHeight) {
    return { width: input.imageWidth, height: input.imageHeight };
  }
  const key = ogPathKey(input.image ?? SITE.ogImage);
  return OG_IMAGE_DIMS[key] ?? { width: 1200, height: 630 };
}

const TITLE_SUFFIX = "The Camellia Sơn Trà";

export function fullTitle(title: string) {
  if (title.includes(TITLE_SUFFIX)) return title;
  const withSuffix = `${title} | ${TITLE_SUFFIX}`;
  // Keep SERP titles near ~60–70 chars when the raw title is already descriptive.
  if (withSuffix.length > 70 && title.length >= 48) return title;
  return withSuffix;
}

export function pageHead(input: SeoInput) {
  const title = fullTitle(input.title);
  const url = absUrl(input.path);
  const image = absUrl(input.image ?? SITE.ogImage);
  const dims = resolveOgDims(input);
  const imageAlt =
    input.imageAlt ??
    (input.type === "article" ? input.title : `${SITE.name} — ${SITE.tagline}`);
  const robots = input.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return {
    meta: [
      { title },
      { name: "description", content: input.description },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { name: "author", content: `${PROJECT.developer} · ${PROJECT.operator}` },
      { name: "keywords", content: input.keywords ?? DEFAULT_KEYWORDS },
      { name: "geo.region", content: SITE.geo.region },
      { name: "geo.placename", content: SITE.geo.placename },
      { name: "geo.position", content: `${SITE.geo.lat};${SITE.geo.lng}` },
      { name: "ICBM", content: `${SITE.geo.lat}, ${SITE.geo.lng}` },
      { name: "format-detection", content: "telephone=yes" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:type", content: input.type ?? "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: input.description },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { property: "og:image:width", content: String(dims.width) },
      { property: "og:image:height", content: String(dims.height) },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: input.description },
      { name: "twitter:image", content: image },
      ...(input.publishedTime
        ? [{ property: "article:published_time", content: input.publishedTime }]
        : []),
      ...(input.modifiedTime
        ? [{ property: "article:modified_time", content: input.modifiedTime }]
        : []),
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: "vi", href: url },
      { rel: "alternate", hrefLang: "x-default", href: url },
    ],
  };
}

export const DEFAULT_KEYWORDS =
  "The Camellia Sơn Trà, căn hộ Sơn Trà, căn hộ biển Đà Nẵng, căn hộ sở hữu lâu dài Sơn Trà, The Camellia Da Nang, MBLAND Đà Nẵng, căn hộ Mân Thái, giá The Camellia, căn hộ Đà Nẵng 2026";

export const PAGES = {
  home: {
    title: "The Camellia Sơn Trà | Căn hộ biển kề rừng Đà Nẵng",
    description:
      "The Camellia Sơn Trà – Đà Nẵng: 469 căn hộ biển kề rừng, sổ hồng lâu dài, giá từ 1,98 tỷ. Giao lộ Lê Văn Lương – Lê Đức Thọ, P. Sơn Trà. Nhận bảng giá.",
    path: "/",
    keywords: DEFAULT_KEYWORDS,
  },
  units: {
    title: "Căn hộ Studio đến 3PN & Duplex",
    description:
      "Mặt bằng The Camellia Sơn Trà: Studio 27,8–28,4 m² từ 1,98 tỷ, 1PN+1, 2PN, 3PN và Duplex. Tầm view 360 tầng 5–25. Thông thủy, tim tường, bàn giao hoàn thiện.",
    path: "/can-ho",
    keywords: "mặt bằng The Camellia, căn hộ studio Sơn Trà, tầm view 360 The Camellia, căn 2 phòng ngủ Đà Nẵng",
  },
  amenities: {
    title: "42 tiện ích Wellness · Nature · Community",
    description:
      "42 tiện ích The Camellia Sơn Trà: hồ bơi, gym, yoga, vườn trên cao, kids club, sảnh chữ V. Xếp lớp theo tầng, không dồn hết ở khối đế.",
    path: "/tien-ich",
    keywords: "tiện ích The Camellia, hồ bơi Sơn Trà, gym yoga căn hộ Đà Nẵng",
  },
  news: {
    title: "Tin tức dự án",
    description:
      "Cập nhật The Camellia Sơn Trà: sự kiện ra mắt MBLAND, CEO Meeting, pháp lý sở hữu lâu dài và quỹ căn hộ biển kề rừng tại Đà Nẵng.",
    path: "/tin-tuc",
    keywords: "tin tức The Camellia, MBLAND Đà Nẵng, ra mắt The Camellia Sơn Trà",
  },
  contact: {
    title: "Liên hệ nhận bảng giá và lịch xem nhà",
    description: `Đăng ký tư vấn The Camellia Sơn Trà. Hotline ${PROJECT.hotlineDisplay}, Zalo, email ${PROJECT.email}. Nhận bảng giá, mặt bằng và chính sách.`,
    path: "/lien-he",
    keywords: "liên hệ The Camellia, hotline The Camellia Sơn Trà, đăng ký bảng giá căn hộ Sơn Trà",
  },
  tour: {
    title: "Tour 360 PanaMotion The Camellia Sơn Trà",
    description:
      "Khám phá The Camellia Sơn Trà bằng tour 360 PanaMotion: xoay tòa nhà, vào căn hộ và tầm view biển – rừng – thành phố tại Sơn Trà, Đà Nẵng.",
    path: "/kham-pha",
    keywords:
      "tour 360 The Camellia, PanaMotion The Camellia Sơn Trà, khám phá căn hộ 360 Đà Nẵng, virtual tour Sơn Trà",
  },
} as const;

export const FAQS = [
  {
    q: "The Camellia Sơn Trà ở đâu?",
    a: `Dự án tọa lạc tại ${PROJECT.address}, gần biển Mân Thái khoảng 200 m, 5 phút tới chùa Linh Ứng và bán đảo Sơn Trà, 20 phút tới sân bay Đà Nẵng.`,
  },
  {
    q: "Giá căn hộ The Camellia Sơn Trà bao nhiêu?",
    a: `Giá từ ${PROJECT.fromPrice} đồng cho căn Studio. 1 phòng ngủ + 1 từ 3,28 tỷ, 2 phòng ngủ từ 3,90 tỷ, 3 phòng ngủ từ 7,50 tỷ. Giá theo đợt mở bán, tầng và hướng view.`,
  },
  {
    q: "Pháp lý The Camellia Sơn Trà như thế nào?",
    a: `${PROJECT.legal}. Chủ đầu tư ${PROJECT.developer}, phát triển ${PROJECT.operator}, kinh doanh ${PROJECT.sales}. Đủ điều kiện bán nhà ở hình thành trong tương lai.`,
  },
  {
    q: "The Camellia có những loại căn hộ nào?",
    a: `${UNIT_TYPES.filter((u) => !u.comingSoon).map((u) => `${u.name} (${u.area})`).join("; ")}. Duplex sắp công bố mặt bằng.`,
  },
  {
    q: "Khi nào The Camellia Sơn Trà bàn giao?",
    a: `${PROJECT.handover}. Căn hộ bàn giao hoàn thiện (Xingfa, Daikin, Hafele, Grohe/Kohler).`,
  },
  {
    q: "Dự án có bao nhiêu căn và bao nhiêu tầng?",
    a: `${PROJECT.units}, ${PROJECT.floors}, quy mô khu đất ${PROJECT.land}. Tầng điển hình 22 căn.`,
  },
] as const;

export function parseDotDate(date: string) {
  const [d, m, y] = date.split(".");
  if (!d || !m || !y) return undefined;
  return `${y}-${m}-${d}`;
}

export function organizationLd(origin = SITE_ORIGIN) {
  return {
    "@type": "RealEstateAgent",
    "@id": absUrl("/#to-chuc", origin),
    name: PROJECT.sales,
    url: absUrl("/", origin),
    telephone: `+84${PROJECT.hotlineTel.replace(/^0/, "")}`,
    email: PROJECT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Giao lộ Lê Văn Lương – Lê Đức Thọ",
      addressLocality: "Sơn Trà",
      addressRegion: "Đà Nẵng",
      addressCountry: "VN",
    },
  };
}

export function apartmentComplexLd(origin = SITE_ORIGIN) {
  return {
    "@type": "ApartmentComplex",
    "@id": absUrl("/#du-an", origin),
    name: PROJECT.name,
    alternateName: PROJECT.nameEn,
    description: PAGES.home.description,
    url: absUrl("/", origin),
    image: [absUrl("/og.jpg", origin), absUrl("/images/hero.webp", origin)],
    telephone: `+84${PROJECT.hotlineTel.replace(/^0/, "")}`,
    email: PROJECT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Giao lộ Lê Văn Lương – Lê Đức Thọ",
      addressLocality: "Sơn Trà",
      addressRegion: "Đà Nẵng",
      postalCode: "550000",
      addressCountry: "VN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    numberOfAccommodationUnits: 469,
    numberOfAvailableAccommodationUnits: 469,
    petsAllowed: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Hồ bơi" },
      { "@type": "LocationFeatureSpecification", name: "Phòng gym" },
      { "@type": "LocationFeatureSpecification", name: "Phòng yoga" },
      { "@type": "LocationFeatureSpecification", name: "Sổ hồng sở hữu lâu dài" },
    ],
    slogan: PROJECT.slogan,
    developer: { "@type": "Organization", name: PROJECT.developer },
    brand: { "@type": "Brand", name: PROJECT.name },
  };
}

export function faqLd() {
  return {
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[], origin = SITE_ORIGIN) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path, origin),
    })),
  };
}

export function articleLd(
  article: (typeof NEWS)[number],
  origin = SITE_ORIGIN,
) {
  return {
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: absUrl(article.image, origin),
    datePublished: parseDotDate(article.date),
    dateModified: parseDotDate(article.date),
    author: { "@type": "Organization", name: PROJECT.operator },
    publisher: {
      "@type": "Organization",
      name: PROJECT.operator,
      logo: { "@type": "ImageObject", url: absUrl("/images/brand/logo-terracotta.webp", origin) },
    },
    mainEntityOfPage: absUrl(`/tin-tuc/${article.slug}`, origin),
    inLanguage: "vi-VN",
  };
}

export function jsonLdGraph(nodes: object[], origin = SITE_ORIGIN) {
  return {
    "@context": "https://schema.org",
    "@graph": [{ "@type": "WebSite", "@id": absUrl("/#website", origin), name: SITE.name, url: absUrl("/", origin), inLanguage: "vi-VN", publisher: organizationLd(origin) }, ...nodes],
  };
}

export const SITEMAP_PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/can-ho", priority: "0.9", changefreq: "weekly" },
  { path: "/tien-ich", priority: "0.8", changefreq: "monthly" },
  { path: "/kham-pha", priority: "0.8", changefreq: "monthly" },
  { path: "/tin-tuc", priority: "0.8", changefreq: "weekly" },
  { path: "/lien-he", priority: "0.7", changefreq: "monthly" },
  ...NEWS.map((n) => ({ path: `/tin-tuc/${n.slug}`, priority: "0.6", changefreq: "monthly" })),
] as const;
