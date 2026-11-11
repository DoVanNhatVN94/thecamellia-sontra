import type { NewsCard } from "./types";
import { NEWS_CARDS as loadedCards } from "virtual:news-cards";

export const NEWS_CARDS: readonly NewsCard[] = loadedCards;
