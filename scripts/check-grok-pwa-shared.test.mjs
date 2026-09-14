import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import {
  MIN_GROK_PWA_SHARED_BYTES,
  checkGrokPwaShared,
} from "./check-grok-pwa-shared.mjs";
import { projectRoot } from "./with-app-env.mjs";

function writeShared(root, body) {
  mkdirSync(join(root, "scripts"), { recursive: true });
  const path = join(root, "scripts/grok-pwa-shared.mjs");
  writeFileSync(path, body);
  return path;
}

test("repo helper on disk passes the gate", () => {
  const result = checkGrokPwaShared(projectRoot());
  assert.equal(result.ok, true);
  assert.ok(result.size >= MIN_GROK_PWA_SHARED_BYTES);
});

test("missing file fails", () => {
  const root = mkdtempSync(join(tmpdir(), "grok-pwa-missing-"));
  const result = checkGrokPwaShared(root);
  assert.equal(result.ok, false);
  assert.match(result.message, /missing/);
});

test("truncated stub without injectGrokPwaHead fails", () => {
  const root = mkdtempSync(join(tmpdir(), "grok-pwa-trunc-"));
  writeShared(
    root,
    `export function publicAppHost() { return ""; }\nexport function resolvePublicHost() { return ""; }\n`,
  );
  const result = checkGrokPwaShared(root);
  assert.equal(result.ok, false);
  assert.match(result.message, /truncated|missing exports/i);
  assert.ok(result.missing?.includes("injectGrokPwaHead"));
});

test("large file still fails if required exports are absent", () => {
  const root = mkdtempSync(join(tmpdir(), "grok-pwa-pad-"));
  writeShared(root, `${"// pad\n".repeat(2000)}export function publicAppHost() { return ""; }\n`);
  const result = checkGrokPwaShared(root);
  assert.equal(result.ok, false);
  assert.ok(result.missing?.includes("injectGrokPwaHead"));
});
