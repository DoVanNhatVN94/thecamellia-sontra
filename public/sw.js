/* Cache-first + background revalidate for photos, video, fonts. */
const CACHE = "camellia-media-v5";

function isMedia(url) {
  const path = new URL(url).pathname;
  return (
    path.startsWith("/images/") ||
    path.startsWith("/videos/") ||
    path.startsWith("/fonts/") ||
    path === "/favicon.svg" ||
    path === "/favicon.png"
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (!isMedia(req.url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const refresh = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      if (cached) {
        event.waitUntil(refresh);
        return cached;
      }
      return refresh;
    })(),
  );
});
