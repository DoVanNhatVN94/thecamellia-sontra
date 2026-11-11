/**
 * News articles are one file per slug under `./articles/<slug>.ts`.
 * `news-prose` renders `body` text as-is; do not convert articles to Markdown.
 *
 * Add an article by creating that one file (slug === filename, no `.ts`).
 * Export `article` (`satisfies NewsArticle`). Optionally export `listRank`
 * (smaller number renders first). Omit `listRank` to pin the article first;
 * ties then fall back to `date` (`dd.mm.yyyy`, newest first) then slug.
 * Card/list pages never import `article` — they read a summary built at
 * bundle time — and `/tin-tuc/$slug` loads only that file.
 */

export type NewsBlock = {
  heading?: string;
  text: string;
  /** Optional mid-body image (absolute /images/... path). Click opens lightbox when rendered. */
  image?: string;
  /** Alt for body image; falls back to heading or article title. */
  imageAlt?: string;
  /** Optional caption under a mid-body image. */
  imageCaption?: string;
  /** Optional internal paths rendered under the block (SEO FAQ articles). */
  links?: readonly {
    to:
      | "/"
      | "/gioi-thieu"
      | "/can-ho"
      | "/tien-ich"
      | "/lien-he"
      | "/kham-pha"
      | "/tin-tuc"
      | `/tin-tuc/${string}`;
    label: string;
  }[];
};

export type NewsArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  /** SEO meta description. Falls back to excerpt when omitted. */
  description?: string;
  image: string;
  /** Alt for the cover / OG image. Falls back to the article title. */
  imageAlt?: string;
  /** Optional caption under the article hero. Other articles omit it. */
  imageCaption?: string;
  poster?: string;
  /**
   * Optional Tailwind object-position for card/cover crops (e.g. "object-top").
   * Use for hero-biased assets so object-cover keeps faces/crowns, not sand.
   */
  imageObjectClass?: string;
  gallery: readonly string[];
  /** Gallery card fit. Use "contain" when a poster or plan must not be cropped. */
  galleryFit?: "cover" | "contain";
  body: NewsBlock[];
  /** Privacy-enhanced YouTube id. The article page embeds it only when set. */
  youtubeId?: string;
  /** Vietnamese iframe title. Used only with youtubeId. */
  youtubeTitle?: string;
  /** One line above the player. Used only with youtubeId. */
  youtubeCaption?: string;
  /**
   * "short" renders a lazy 9:16 youtube-nocookie iframe.
   * Omit for the existing 16:9 player.
   */
  youtubeAspect?: "short";
};

/** Fields the listing, homepage, and related-news cards render. No body. */
export type NewsCard = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageObjectClass?: string;
};

/** Image-studio slots. Paths only — not article prose. */
export type NewsMedia = {
  slug: string;
  title: string;
  image: string;
  poster?: string;
  gallery: readonly string[];
};
