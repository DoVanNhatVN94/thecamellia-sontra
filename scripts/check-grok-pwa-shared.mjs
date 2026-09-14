#!/usr/bin/env node
/**
 * Fail the build when scripts/grok-pwa-shared.mjs is truncated or missing
 * exports the Vite/Nitro PWA plugins need (notably injectGrokPwaHead).
 *
 * Grok exports have previously landed a ~2KB stub that ends at
 * resolvePublicHost; Vercel then fails (or ships broken OG injection).
 * Keep this gate in `npm run build` so a bad overwrite cannot deploy.
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { isMainModule, projectRoot } from "./with-app-env.mjs";

export const GROK_PWA_SHARED_REL = "scripts/grok-pwa-shared.mjs";
/** Truncated exports were ~2.4KB; the known-good file is ~17–18KB. */
export const MIN_GROK_PWA_SHARED_BYTES = 12_000;

export const REQUIRED_EXPORTS = [
  "injectGrokPwaHead",
  "createHeadInjector",
  "grokOgHeadTags",
  "publicAppHost",
];

/**
 * @param {string} [root]
 * @returns {{ ok: true, path: string, size: number } | { ok: false, path: string, message: string, size?: number, missing?: string[] }}
 */
export function checkGrokPwaShared(root = projectRoot()) {
  const path = join(root, GROK_PWA_SHARED_REL);
  if (!existsSync(path)) {
    return {
      ok: false,
      path,
      message: `[grok-pwa-shared] missing ${GROK_PWA_SHARED_REL} — restore the full helper before building.`,
    };
  }

  const size = statSync(path).size;
  const source = readFileSync(path, "utf8");
  const missing = REQUIRED_EXPORTS.filter((name) => {
    const re = new RegExp(`export\\s+function\\s+${name}\\b`);
    return !re.test(source);
  });

  if (size < MIN_GROK_PWA_SHARED_BYTES || missing.length > 0) {
    const bits = [];
    if (size < MIN_GROK_PWA_SHARED_BYTES) {
      bits.push(`file is ${size} bytes (need ≥ ${MIN_GROK_PWA_SHARED_BYTES})`);
    }
    if (missing.length > 0) {
      bits.push(`missing exports: ${missing.join(", ")}`);
    }
    return {
      ok: false,
      path,
      size,
      missing,
      message:
        `[grok-pwa-shared] ${GROK_PWA_SHARED_REL} looks truncated (${bits.join("; ")}). ` +
        "A short Grok export overwrote the full helper — restore the ~17–18KB file that exports injectGrokPwaHead before deploying.",
    };
  }

  return { ok: true, path, size };
}

function main() {
  const result = checkGrokPwaShared();
  if (result.ok) {
    console.log(`[grok-pwa-shared] ok (${result.size} bytes, required exports present)`);
    process.exit(0);
  }
  console.error(result.message);
  process.exit(1);
}

if (isMainModule(import.meta.url)) {
  main();
}
