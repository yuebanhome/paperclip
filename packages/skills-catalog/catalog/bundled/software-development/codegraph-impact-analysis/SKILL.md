---
name: codegraph-impact-analysis
description: Use CodeGraph for repository code exploration, dependency and symbol lookup, impact analysis, and review triage before broad manual scans or invasive edits. Trigger when a task mentions CodeGraph, asks for codebase exploration, asks what files/functions are affected, asks for architecture review, or requires reviewing changes in a repo with `.codegraph/`.
key: paperclipai/bundled/software-development/codegraph-impact-analysis
recommendedForRoles:
  - engineer
  - engineering-manager
  - qa
  - product-manager
tags:
  - codegraph
  - code-review
  - impact-analysis
  - codebase-navigation
---

# CodeGraph Impact Analysis

Use CodeGraph as the first pass for codebase shape, dependency impact, and review triage when the repository has `.codegraph/` or the `codegraph` CLI is available.

## Quick Checks

```sh
codegraph status
```

If status reports pending changes, a missing index, or a recommended reindex:

```sh
codegraph init
```

Do not commit `.codegraph/codegraph.db`; `.codegraph/.gitignore` keeps the database local.

## Workflow

1. Check `codegraph status` before broad code exploration.
2. Use CodeGraph MCP/tools when available to locate symbols, callers, routes, dependencies, and likely affected files.
3. Use normal repo tools (`rg`, tests, typecheck, manual file reads) to verify findings. CodeGraph narrows the search; it does not replace source review.
4. For review work, start from changed files, then use CodeGraph to identify dependent surfaces and missed tests.
5. For planning work, ask engineering to provide CodeGraph-backed impact notes before finalizing technical scope.

## Reporting

When CodeGraph materially shaped the work, state:

- index status if it affected confidence
- symbols/files/routes inspected
- impact boundaries found
- residual areas not covered by the graph

## Failure Handling

- If `codegraph` is missing, report that and continue with `rg` / direct source reads.
- If the index is stale and reindexing is cheap, run `codegraph init`.
- If reindexing fails, keep working from source and mention that graph confidence is unavailable.
