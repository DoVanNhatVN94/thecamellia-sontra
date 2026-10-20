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
    /** Pathname of the last PageView actually sent or queued. */
    __camelliaMetaPage?: string;
    __camelliaMetaInited?: number;
    __camelliaMetaContact?: number;
  }
}

export type MetaStandardEvent = "PageView" | "Lead" | "Contact";

/**
 * Standard Meta Pixel stub + init + the landing PageView, plus one capture-phase
 * click listener for tel: and Zalo. Inlined in <head> so fbq exists before
 * hydration and can queue events (including the first click or route change).
 * Idempotent if the tag is evaluated twice.
 */
export const META_PIXEL_BOOT = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'${PIXEL_SRC}');
if(!window.__camelliaMetaInited){
window.__camelliaMetaInited=1;
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');
window.__camelliaMetaPage=location.pathname;
}
if(!window.__camelliaMetaContact){
window.__camelliaMetaContact=1;
document.addEventListener('click',function(event){
var node=event.target;
if(!node)return;
if(node.nodeType!==1)node=node.parentElement;
if(!node||!node.closest)return;
var anchor=node.closest("a[href^='tel:'],a[href*='zalo.me']");
if(!anchor)return;
if(typeof window.fbq==='function')window.fbq('track','Contact');
},true);
}`;

export function trackMeta(event: MetaStandardEvent): void {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", event);
}

/**
 * One PageView per distinct pathname. The landing path is recorded by the
 * head snippet, so the first client navigation is sent instead of skipped.
 */
export function trackPageViewForPath(pathname: string): void {
  if (typeof window === "undefined") return;
  if (window.__camelliaMetaPage === pathname) return;
  if (typeof window.fbq !== "function") return;
  window.__camelliaMetaPage = pathname;
  window.fbq("track", "PageView");
}
