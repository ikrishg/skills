#!/usr/bin/env node
// Writes the release version into the Claude Code plugin manifest.
import { readFileSync, writeFileSync } from "node:fs";

const version = process.argv[2];
if (!version) {
  console.error("Usage: node scripts/sync-plugin-version.mjs <version>");
  process.exit(1);
}

const file = new URL("../.claude-plugin/plugin.json", import.meta.url);
const manifest = JSON.parse(readFileSync(file, "utf8"));
manifest.version = version;
writeFileSync(file, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`plugin.json version -> ${version}`);
