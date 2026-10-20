import { PROJECT } from "@/data/project";

/** Public Meta (Facebook) Pixel ID. Not a secret. */
export const META_PIXEL_ID = "1046573188388695";

const PIXEL_SRC = "https://connect.facebook.net/en_US/fbevents.js";

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
  }
}

export type MetaStandardEvent = "PageView" | "Lead" | "Contact";

let baseInstalled = false;

/**
 * Standard Meta Pixel base code: defines fbq, loads fbevents.js with async,
 * then init + the first PageView. Idempotent — the first PageView lives here
 * so route listeners must not fire again for the initial load.
 */
export function installMetaPixel(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  if (typeof window.fbq === "function" || baseInstalled) return;
  if (document.getElementById("meta-pixel-base")) {
    baseInstalled = true;
    return;
  }

  baseInstalled = true;
  const script = document.createElement("script");
  script.id = "meta-pixel-base";
  script.text = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'${PIXEL_SRC}');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;
  document.head.appendChild(script);
}

export function trackMeta(event: MetaStandardEvent): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", event);
}

function digits(value: string): string {
  return value.replace(/\D/g, "");
}

/** tel: link for hotline 0934 885 108 (local or +84). */
export function isProjectHotlineHref(href: string): boolean {
  const trimmed = href.trim();
  if (!trimmed.toLowerCase().startsWith("tel:")) return false;
  let rest = trimmed.slice(4);
  try {
    rest = decodeURIComponent(rest);
  } catch {
    /* keep raw */
  }
  const got = digits(rest);
  const hotline = digits(PROJECT.hotlineTel);
  const intl = `84${hotline.replace(/^0/, "")}`;
  return got === hotline || got === intl;
}

/** Zalo chat link for the project hotline (https://zalo.me/0934885108). */
export function isProjectZaloHref(href: string): boolean {
  try {
    const url = new URL(href, "https://thecamellia-sontra.com");
    if (url.protocol !== "http:" && url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (host !== "zalo.me") return false;
    const expected = new URL(PROJECT.zalo);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    const expectedPath = expected.pathname.replace(/\/+$/, "") || "/";
    return path === expectedPath;
  } catch {
    return false;
  }
}

export function isMetaContactHref(href: string): boolean {
  return isProjectHotlineHref(href) || isProjectZaloHref(href);
}
