import { useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import {
  META_PIXEL_ID,
  installMetaPixel,
  isMetaContactHref,
  trackMeta,
} from "@/lib/meta-pixel";

const NOSCRIPT_IMG = `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;

/**
 * Mounted once from the root document. The base snippet (init + first PageView)
 * runs after hydration and loads fbevents.js asynchronously. Later SPA
 * navigations send PageView; the first route is skipped so it is not sent twice.
 * Clicks on the project hotline (tel:) or Zalo link send Contact.
 */
export function MetaPixel() {
  const routeKey = useRouterState({
    select: (s) => s.location.pathname + s.location.searchStr,
  });
  const seenRoute = useRef<string | null>(null);

  useEffect(() => {
    installMetaPixel();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const href = anchor.getAttribute("href") ?? anchor.href;
      if (!isMetaContactHref(href)) return;
      trackMeta("Contact");
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (seenRoute.current === null) {
      seenRoute.current = routeKey;
      return;
    }
    if (seenRoute.current === routeKey) return;
    seenRoute.current = routeKey;
    trackMeta("PageView");
  }, [routeKey]);

  return <noscript dangerouslySetInnerHTML={{ __html: NOSCRIPT_IMG }} />;
}
