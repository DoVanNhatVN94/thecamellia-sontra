#!/usr/bin/env node
/**
 * Opt-in deploy migrate for apps that actually use Postgres.
 *
 * This marketing site sets `.grok/app-env.json` → deploy.database=false.
 * Skip migrate unless DATABASE_URL is set AND RUN_DB_MIGRATE=true
 * (or VITE_RUN_DB_MIGRATE=true). Avoids failing production static builds when
 * DATABASE_URL is present but unused / misconfigured.
 */
import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function deployDatabaseEnabled() {
  try {
    const raw = readFileSync(join(root, ".grok/app-env.json"), "utf8");
    const parsed = JSON.parse(raw);
    return parsed?.deploy?.database === true;
  } catch {
    return false;
  }
}

const databaseUrl = process.env.DATABASE_URL;
const force =
  process.env.RUN_DB_MIGRATE === "true" || process.env.VITE_RUN_DB_MIGRATE === "true";
const wanted = force || deployDatabaseEnabled();

if (!databaseUrl) {
  console.log("[migrate-on-build] DATABASE_URL not set — skip.");
  process.exit(0);
}
if (!wanted) {
  console.log(
    "[migrate-on-build] DATABASE_URL set but deploy.database is false (and RUN_DB_MIGRATE unset) — skip for marketing build.",
  );
  process.exit(0);
}

const result = spawnSync(process.execPath, [join(root, "scripts/migrate.mjs")], {
  stdio: "inherit",
  env: process.env,
});
process.exit(result.status ?? 1);
