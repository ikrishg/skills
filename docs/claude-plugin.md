# Claude Code plugin

The repository is a Claude Code marketplace (`ikrishg`) with one plugin (`ikrishg-skills`) that bundles every skill listed in [`.claude-plugin/plugin.json`](../.claude-plugin/plugin.json).

## Install

In Claude Code:

```text
/plugin marketplace add ikrishg/skills
/plugin install ikrishg-skills@ikrishg
```

Restart Claude Code or reload plugins when prompted.

## Validation

```bash
claude plugin validate .claude-plugin/plugin.json --strict
claude plugin validate .claude-plugin/marketplace.json --strict
```
