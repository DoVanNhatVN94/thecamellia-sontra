import type { NewsMedia } from "./types";
import { NEWS_MEDIA as loadedMedia } from "virtual:news-media";

export const NEWS_MEDIA: readonly NewsMedia[] = loadedMedia;
