#!/usr/bin/env node
// Checks every skill under skills/<bucket>/<slug>/ and that plugin.json lists exactly those skills.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import matter from "gray-matter";

const root = new URL("..", import.meta.url).pathname;
const skillsDir = join(root, "skills");
const errors = [];
const found = [];

const dirs = (path) =>
  readdirSync(path).filter((name) => statSync(join(path, name)).isDirectory());

for (const bucket of dirs(skillsDir)) {
  const bucketPath = join(skillsDir, bucket);
  if (!existsSync(join(bucketPath, "README.md"))) {
    errors.push(`skills/${bucket}: missing README.md`);
  }
  for (const slug of dirs(bucketPath)) {
    const skillPath = join(bucketPath, slug, "SKILL.md");
    const rel = relative(root, skillPath);
    if (!existsSync(skillPath)) {
      errors.push(`${rel}: missing`);
      continue;
    }
    found.push(`./skills/${bucket}/${slug}`);

    const { data } = matter(readFileSync(skillPath, "utf8"));
    if (data.name !== slug) errors.push(`${rel}: name must match its directory (${slug})`);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(String(data.name ?? "")) || String(data.name).length > 64) {
      errors.push(`${rel}: name must be lowercase and hyphenated, at most 64 characters`);
    }
    if (typeof data.description !== "string" || !data.description.trim()) {
      errors.push(`${rel}: description is required`);
    } else if ([...data.description].length > 1024) {
      errors.push(`${rel}: description is over 1024 characters`);
    }

    const readme = readFileSync(join(bucketPath, "README.md"), "utf8");
    if (!readme.includes(`./${slug}/SKILL.md`)) {
      errors.push(`skills/${bucket}/README.md: does not list ${slug}`);
    }
  }
}

const plugin = JSON.parse(readFileSync(join(root, ".claude-plugin/plugin.json"), "utf8"));
const listed = plugin.skills ?? [];
for (const path of found) {
  if (!listed.includes(path)) errors.push(`.claude-plugin/plugin.json: skills is missing ${path}`);
}
for (const path of listed) {
  if (!found.includes(path)) errors.push(`.claude-plugin/plugin.json: ${path} is not a skill directory`);
}

if (errors.length) {
  for (const error of errors) console.error(`✖ ${error}`);
  process.exit(1);
}
console.log(`✔ ${found.length} skill(s) valid and listed in plugin.json`);
