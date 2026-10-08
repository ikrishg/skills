# Project guidance

This repository holds portable Agent Skills for Codex, Claude Code, and Cursor.

- Each skill is a top-level directory with `SKILL.md` (and optional `references/`).
- Catalog metadata lives in `catalog.ts`, not in skill frontmatter.
- After changing a skill or the catalog, run `npm run catalog:sync` and `npm run check`.
- Preserve unrelated worktree changes. Follow the existing validation contract.
