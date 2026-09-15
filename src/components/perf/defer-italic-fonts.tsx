import { useEffect } from "react";

const ITALIC_CSS = "/fonts/cormorant-italic.css";

/**
 * Loads Cormorant italic @font-face rules after first paint so they stay
 * off the render-blocking critical CSS path (HTML → styles.css → italic woff2).
 */
export function DeferItalicFonts() {
  useEffect(() => {
    if (document.querySelector('link[data-defer-italic="1"]')) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = ITALIC_CSS;
    link.media = "print";
    link.dataset.deferItalic = "1";
    const promote = () => {
      link.media = "all";
    };
    link.onload = promote;
    document.head.appendChild(link);
    // Cached stylesheet may already be available
    if (link.sheet) promote();
  }, []);

  return null;
}
