# skills

Agent Skills for Codex, Claude Code, and Cursor. Each skill is a self-contained `SKILL.md` package plus any references it needs.

This repository is a scaffold: validation, catalog sync, and packaging are in place. Skills will land as top-level directories.

## Install

```bash
# Codex
npx skills add ikrishg/skills --skill <slug> -g -a codex -y

# Claude Code
npx skills add ikrishg/skills --skill <slug> -g -a claude-code -y

# Cursor
npx skills add ikrishg/skills --skill <slug> -g -a cursor -y
```

Omit `--skill <slug>` to install every skill once any exist.

## Skill catalog

This table is generated from `catalog.ts` and skill frontmatter. Do not edit the block by hand; run `npm run catalog:sync` after changing catalog metadata or a description.

<!-- BEGIN GENERATED SKILL CATALOG -->
| Skill | Category | What it does and when to use it |
| --- | --- | --- |
<!-- END GENERATED SKILL CATALOG -->

## Add a skill

1. Copy `templates/your-skill-name/` to a new top-level directory named like the skill (`your-skill-name/`).
2. Fill in `SKILL.md` frontmatter and instructions. Keep optional detail in `references/`.
3. Add one matching entry in [`catalog.ts`](./catalog.ts).
4. Add normal / ambiguous / risk cases in [`skill-evals.json`](./skill-evals.json).
5. Run:

```bash
npm install
npm run catalog:sync
npm run check
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) and [QUALITY.md](./QUALITY.md).

## License

[MIT](./LICENSE) © 2026 Krish Gupta.
