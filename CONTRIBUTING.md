# Contributing Agent Skills

A contribution should be a useful workflow, a portable package, and an honest statement of where it has been tested.

## Repository contract

Each skill lives in a lowercase, hyphenated directory whose name matches the frontmatter `name`:

```text
your-skill-name/
├── SKILL.md
└── references/       # optional
    └── guide.md
```

`SKILL.md` is the entry point. Keep it at 500 lines or fewer and move optional detail into focused reference files. Link every bundled reference from `SKILL.md` so multi-file installs stay complete.

Copy an existing skill directory, such as [`hackathon-idea-eval/`](./hackathon-idea-eval/), as a starting point.

## Standard frontmatter

```yaml
---
name: your-skill-name
description: Describe the workflow outcome clearly. Use when the user or project needs a specific result.
license: MIT
---
```

Required:

- `name`: lowercase, hyphenated, matches the directory, at most 64 characters.
- `description`: at most 200 characters; include an explicit `Use when ...` clause.
- `license`: exactly `MIT`.

Optional standard fields: `compatibility`, `metadata`, `allowed-tools`.

Do not put `category`, `tags`, or `author` in skill frontmatter. Those belong in [`catalog.ts`](./catalog.ts).

## Catalog metadata

Add exactly one catalog entry:

```ts
{
  category: "workflow",
  tags: ["example", "portable"],
  author: "ikrishg",
  surfaces: ["coding-agent"],
  capabilities: ["filesystem"],
  support: {
    "claude-code": "untested",
    codex: "untested",
    cursor: "untested",
  },
}
```

Use `tested` only after a real runtime smoke test is recorded in [`runtime-verification.json`](./runtime-verification.json).

## Validate locally

```bash
npm install
npm run catalog:sync
npm run check
```

Also add normal, ambiguous, and risk cases for the skill in [`skill-evals.json`](./skill-evals.json).

## Commits and merging

Releases are cut by [semantic-release](https://semantic-release.gitbook.io/) from [Conventional Commits](https://www.conventionalcommits.org/) on `main`: `feat:` ships a minor release, `fix:` a patch, and `BREAKING CHANGE:` a major. Pull requests merge by rebase only, so every commit lands on `main` as written. Write each commit message in conventional form.

## Pull request checklist

- [ ] Standard frontmatter only; `license: MIT`.
- [ ] Description explains what and when in 200 characters or fewer.
- [ ] `SKILL.md` is no longer than 500 lines.
- [ ] Every relative link resolves and every bundled reference is reachable.
- [ ] Catalog capabilities, surfaces, and support match observed behavior.
- [ ] README catalog and ZIPs are regenerated.
- [ ] `npm run check` passes.
- [ ] Every commit message follows Conventional Commits.
