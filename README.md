# ikrishg/skills

**Workflows saved as Agent Skills.**

Reusable `SKILL.md` workflows from real projects. Install them in Codex, Claude Code, or Cursor; check what each skill needs before you install it.

Each skill owns one meaningful outcome rather than a single code snippet.

## Agent Skills, not runtime-specific prompts

Each directory is a self-contained [Agent Skills](https://agentskills.io) package: a standard `SKILL.md` plus any references it needs to run the workflow. The package format is shared, while installation, invocation, and available tools still differ by runtime.

[`QUALITY.md`](./QUALITY.md) defines the interaction, evidence, execution, and evaluation standard every package is expected to meet.

## Developer tools

- [Claude Code plugin](docs/claude-plugin.md): install every skill as the `ikrishg/skills` plugin.
- [Skill package checker](docs/skill-check.md): inspect your own `SKILL.md` packages locally.

## Install

Target the runtime explicitly for a deterministic global install:

```bash
# Codex
npx skills add ikrishg/skills --skill <slug> -g -a codex -y

# Claude Code
npx skills add ikrishg/skills --skill <slug> -g -a claude-code -y

# Cursor
npx skills add ikrishg/skills --skill <slug> -g -a cursor -y
```

Omit `--skill <slug>` to install every skill.

## Skill catalog

This table is generated from [`catalog.ts`](./catalog.ts) and skill frontmatter. Do not edit the generated block by hand; run `npm run catalog:sync` after changing catalog metadata or a description.

<!-- BEGIN GENERATED SKILL CATALOG -->
| Skill | Category | What it does and when to use it |
| --- | --- | --- |
| [`hackathon-idea-eval`](./hackathon-idea-eval/SKILL.md) | Product | Score and kill hackathon ideas against one event. Use when comparing candidates, generating them from saved launches, or deciding Build, Rework, or Drop before any code. |
<!-- END GENERATED SKILL CATALOG -->

## Contributing

Contributions should preserve the portable Agent Skills package contract. Start with [CONTRIBUTING.md](./CONTRIBUTING.md), then run:

```bash
npm install
npm run catalog:sync
npm run check
```

Validation covers standard frontmatter, naming, licensing, description portability, line limits, safe relative links and heading fragments, bundled-reference structure and reachability, behavioral eval coverage, catalog coverage, generated ZIP contents, and this README catalog.

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), pull requests merge by rebase, and [semantic-release](https://semantic-release.gitbook.io/) cuts versions, the changelog, and GitHub releases from `main`.

## Scope

Local Agent Skills in Codex, Claude Code, and Cursor. Copilot, Gemini, and OpenAI plugin packaging are out of scope.

## License

[MIT](./LICENSE) © 2026 Krish Gupta.

## Credits

Repository structure, validation, and catalog tooling are adapted from [tushar-skills](https://github.com/tushaarmehtaa/tushar-skills) by [Tushar Mehta](https://github.com/tushaarmehtaa).
