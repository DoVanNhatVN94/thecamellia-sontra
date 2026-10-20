import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { META_PIXEL_ID, trackPageViewForPath } from "@/lib/meta-pixel";

const NOSCRIPT_IMG = `<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1" />`;

/**
 * Noscript fallback plus SPA PageViews. The fbq stub, init, landing PageView,
 * and the tel/Zalo click listener live in the root <head> snippet so they run
 * before hydration. PageViews are deduped by the last tracked pathname.
 */
export function MetaPixel() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    trackPageViewForPath(pathname);
  }, [pathname]);

  return <noscript dangerouslySetInnerHTML={{ __html: NOSCRIPT_IMG }} />;
}
