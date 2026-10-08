# Contributing

## Layout

```text
skills/
└── <bucket>/
    ├── README.md            # lists the bucket's skills
    └── <skill-name>/
        ├── SKILL.md
        ├── agents/
        │   └── openai.yaml  # Codex display name and invocation policy
        └── REFERENCE.md     # optional, linked from SKILL.md
```

Pick an existing bucket (`product/` today) or add one with its own `README.md`.

## Frontmatter

```yaml
---
name: skill-name
description: What the skill does. Use when the user needs a specific result.
license: MIT
---
```

- `name` is lowercase and hyphenated, and matches the directory.
- `description` says what the skill does and when to use it.
- For a skill that should run only when you type it, add `disable-model-invocation: true` here and `policy: { allow_implicit_invocation: false }` in `agents/openai.yaml`, and list it under **User-invoked** in the bucket README.

## Register it

1. Add `./skills/<bucket>/<skill-name>` to `skills` in [`.claude-plugin/plugin.json`](./.claude-plugin/plugin.json).
2. Add one line for it in the bucket README.
3. Run `npm install` once, then `npm run check`.

## Commits and merging

Releases are cut by [semantic-release](https://semantic-release.gitbook.io/) from [Conventional Commits](https://www.conventionalcommits.org/) on `main`: `feat:` ships a minor release, `fix:` a patch, and `BREAKING CHANGE:` a major. Pull requests merge by rebase only, so every commit lands on `main` as written. Write each commit message in conventional form.
