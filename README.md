# ikrishg/skills

**Workflows saved as Agent Skills.**

Reusable `SKILL.md` workflows from real projects, for Codex, Claude Code, and Cursor. Each skill owns one meaningful outcome rather than a single code snippet. Each directory is a self-contained [Agent Skills](https://agentskills.io) package: a standard `SKILL.md` plus any references it needs.

## Install

Claude Code, as a plugin that updates itself:

```text
/plugin marketplace add ikrishg/skills
/plugin install ikrishg-skills@ikrishg
```

Any runtime, as editable copies through [skills.sh](https://skills.sh):

```bash
# Codex
npx skills add ikrishg/skills --skill <slug> -g -a codex -y

```bash
npx skills add ikrishg/skills --skill <slug> -g -y

Omit `--skill <slug>` to install every skill. Pick one method per runtime, because installing both gives you every skill twice. See the [Claude Code plugin guide](docs/claude-plugin.md) for validation.

## Skills

Skills are grouped into buckets under [`skills/`](./skills/). Each bucket's README lists its skills and says which ones the model can pick up on its own.

- **[Product](./skills/product/README.md)**: deciding what to build before any code gets written.
  - [`hackathon-idea-eval`](./skills/product/hackathon-idea-eval/SKILL.md): score and kill hackathon ideas against one event.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md), then run:

```bash
npm install
npm run check
```

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), pull requests merge by rebase, and [semantic-release](https://semantic-release.gitbook.io/) cuts versions, the changelog, and GitHub releases from `main`.

## License

[MIT](./LICENSE) © 2026 Krish Gupta.

## Credits

Repository structure adapted from [tushar-skills](https://github.com/tushaarmehtaa/tushar-skills) by [Tushar Mehta](https://github.com/tushaarmehtaa) and [skills](https://github.com/mattpocock/skills) by [Matt Pocock](https://github.com/mattpocock).
