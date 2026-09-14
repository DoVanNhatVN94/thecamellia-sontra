import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { MediaCache } from "@/components/media-cache";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ImageSrcProvider } from "@/lib/image-src";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#26150A" },
      { name: "msapplication-TileColor", content: "#A84424" },
      { name: "apple-mobile-web-app-title", content: "The Camellia" },
      { name: "application-name", content: "The Camellia Sơn Trà" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      {
        rel: "preload",
        as: "image",
        href: "/images/brand/logo-nav-white.webp",
        type: "image/webp",
      },
      {
        rel: "preload",
        as: "image",
        href: "/images/hero-aerial.webp",
        type: "image/webp",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/inter-latin.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/inter-vietnamese.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        href: "/fonts/cormorant-vietnamese.woff2",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
    ],
  }),
  notFoundComponent: NotFound,
  component: () => (
    <html lang="vi" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <MediaCache />
        <ImageSrcProvider>
          <AuthProvider>
            <Outlet />
          </AuthProvider>
        </ImageSrcProvider>
        <Scripts />
      </body>
    </html>
  ),
});

function NotFound() {
  return (
    <main className="grid min-h-dvh place-items-center bg-cream px-6 text-center text-ink">
      <div>
        <p className="kicker">404</p>
        <h1 className="mt-3 font-display text-4xl">Không tìm thấy trang</h1>
        <Link to="/" className="mt-6 inline-block text-sm text-terracotta">
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
