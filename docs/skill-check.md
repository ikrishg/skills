# Check an Agent Skill package

`skills-check` checks a local skill's frontmatter, instruction body, and local Markdown references.

```bash
npx --yes --package=github:ikrishg/skills skills-check ./my-skill
npx --yes --package=github:ikrishg/skills skills-check ./skills --collection --json
```

For a local checkout:

```bash
npm ci
node scripts/check-skill.mjs /path/to/my-skill
```

Exit codes: `0` means no structural errors, `1` means a package failed checks, and `2` means invalid arguments or an unreadable collection.

Collection mode checks immediate subdirectories containing `SKILL.md`. Symlinked package files are rejected instead of followed.

This is a structural checker, not a security scanner or runtime certification.
