# Project guidance

This repository holds portable Agent Skills for Codex, Claude Code, and Cursor.

- Skills live in `skills/<bucket>/<slug>/` with a `SKILL.md`, optional reference files, and an `agents/openai.yaml` for Codex.
- Each bucket has a `README.md` that lists its skills, split into user-invoked and model-invoked.
- `.claude-plugin/plugin.json` lists every skill directory. Add new skills there.
- Run `npm run check` after adding, moving, or renaming a skill.
- Commits follow Conventional Commits; pull requests merge by rebase.
