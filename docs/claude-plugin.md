# Claude Code plugin

Install the repository as a Claude Code marketplace plugin once skills are listed in `.claude-plugin/plugin.json`.

## Install

In Claude Code:

```text
/plugin marketplace add ikrishg/skills
/plugin install skills@ikrishg
```

Restart Claude Code or reload plugins when prompted.

## Validation

```bash
claude plugin validate .claude-plugin/plugin.json --strict
claude plugin validate .claude-plugin/marketplace.json --strict
```

Validation checks structure only. Individual task outcomes depend on the model, runtime, project, and available tools.
