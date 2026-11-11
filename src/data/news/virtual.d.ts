declare module "virtual:news-cards" {
  import type { NewsCard } from "./types";
  export const NEWS_CARDS: NewsCard[];
}

declare module "virtual:news-media" {
  import type { NewsMedia } from "./types";
  export const NEWS_MEDIA: NewsMedia[];
}
