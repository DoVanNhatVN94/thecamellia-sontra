/** Long-cache headers for photos, video, and fonts in Vite dev + preview. */
const CACHE = "public, max-age=31536000, immutable";

function isStaticMedia(url) {
  const path = String(url ?? "").split("?", 1)[0];
  return (
    path.startsWith("/images/") ||
    path.startsWith("/videos/") ||
    path.startsWith("/fonts/") ||
    path === "/favicon.svg" ||
    path === "/favicon.png" ||
    path === "/og.jpg"
  );
}

function attach(server) {
  server.middlewares.use((req, res, next) => {
    if (!isStaticMedia(req.url ?? "")) {
      next();
      return;
    }
    const original = res.setHeader.bind(res);
    res.setHeader = (name, value) => {
      if (String(name).toLowerCase() === "cache-control") return res;
      return original(name, value);
    };
    original("Cache-Control", CACHE);
    next();
  });
}

export function mediaCachePlugin() {
  return {
    name: "camellia:media-cache",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}
