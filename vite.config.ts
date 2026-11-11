import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
// @ts-expect-error JS plugin alongside the TS vite config
import { mediaCachePlugin } from "./scripts/media-cache-plugin.mjs";
// @ts-expect-error JS plugin alongside the TS vite config
import { newsVirtualPlugin } from "./scripts/news-virtual-plugin.mjs";

// `npm run dev` binds 0.0.0.0:8080 (package.json). Production deploy is Vercel,
// preset `vercel` below — do not point the live site at this port.
export default defineConfig(({ command, isPreview }) => ({
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 8081,
    strictPort: true,
  },
  resolve: { tsconfigPaths: true },
  plugins: [
    mediaCachePlugin(),
    newsVirtualPlugin(),
    tailwindcss(),
    tanstackStart(),
    ...(command === "build" || isPreview
      ? [
          nitro({
            preset: "vercel",
            routeRules: {
              "/images/**": {
                headers: { "cache-control": "public, max-age=31536000, immutable" },
              },
              "/videos/**": {
                headers: { "cache-control": "public, max-age=31536000, immutable" },
              },
              "/fonts/**": {
                headers: { "cache-control": "public, max-age=31536000, immutable" },
              },
              "/og.jpg": {
                headers: { "cache-control": "public, max-age=86400" },
              },
              "/sw.js": { headers: { "cache-control": "no-cache" } },
            },
          }),
        ]
      : []),
    viteReact(),
  ],
}));
