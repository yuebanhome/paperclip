---
name: Product Engineering
description: Bundled engineering team that pairs a CTO with a senior coder, infrastructure engineer, technical researcher, and dual QA reviewers to deliver, review, verify, and support product changes.
schema: agentcompanies/v1
slug: product-engineering
category: software-development
key: paperclipai/bundled/software-development/product-engineering
manager: agents/cto/AGENTS.md
includes:
  - agents/senior-coder/AGENTS.md
  - agents/infra-engineer/AGENTS.md
  - agents/researcher/AGENTS.md
  - agents/codex-qa/AGENTS.md
  - agents/claude-qa/AGENTS.md
  - projects/product-engineering/PROJECT.md
defaultInstall: false
recommendedForCompanyTypes:
  - software
  - startup
  - product
tags:
  - engineering
  - delivery
  - qa
  - code-review
requiredSkills:
  - paperclipai/bundled/software-development/codegraph-impact-analysis
  - paperclipai/bundled/software-development/development-infrastructure
  - paperclipai/bundled/software-development/github-pr-workflow
  - paperclipai/bundled/software-development/trellis-development-workflow
  - paperclipai/bundled/quality/qa-acceptance
  - paperclipai/bundled/paperclip-operations/task-planning
  - paperclipai/bundled/docs/doc-maintenance
  - paperclipai/bundled/research/technical-research
  - paperclipai/optional/matt-engineering/codebase-design
  - paperclipai/optional/matt-engineering/diagnosing-bugs
  - paperclipai/optional/matt-engineering/domain-modeling
  - paperclipai/optional/matt-engineering/improve-codebase-architecture
  - paperclipai/optional/matt-engineering/tdd
  - paperclipai/optional/matt-engineering/to-issues
  - paperclipai/optional/matt-in-progress/review
  - paperclipai/optional/matt-productivity/handoff
---

# Product Engineering

An optional drop-in engineering pod for companies that want a working software-delivery loop without going through the catalog's `core-exec-team` first. Install it under an existing CEO/manager and the imported CTO will own engineering execution.

## Contents

- `CTO` — engineering manager and team root. Reviews PRs, owns code-quality standards, critiques ProductLead plans, and breaks approved priorities into engineering tasks.
- `senior-coder` — primary implementer. Picks up engineering tasks, ships PRs, and asks CodexQA plus ClaudeQA for verification.
- `InfraEngineer` — prepares shared Docker-backed PostgreSQL/Redis and other reusable local services so implementation and both QA gates can run.
- `Researcher` — researches current authoritative technical approaches and comparable app patterns before the CTO commits to a plan.
- `CodexQA` — executable QA gate. Verifies fixes with commands, browser/API checks, logs, screenshots, and concrete pass/fail evidence.
- `ClaudeQA` — acceptance QA gate. Reviews plan fit, product intent, edge cases, UX quality, and CodexQA evidence before approving.
- `product-engineering` project — the rolling backlog this pod works against.
- `weekly-engineering-sync` routine — recurring CTO-owned check-in to surface blockers and confirm the next deliverable.

## Skill rationale

- `github-pr-workflow` keeps logical commits, branch hygiene, and merge discipline consistent across the pod.
- `trellis-development-workflow` keeps planning, implementation, review, and durable spec updates aligned with Trellis-managed repositories.
- `codegraph-impact-analysis` gives engineering and both QA gates a common graph-backed first pass for exploration, dependency impact, and review triage.
- `qa-acceptance` gives CodexQA and ClaudeQA structured pass/fail formats coders can act on. Both must pass before acceptance.
- `development-infrastructure` gives the pod a repeatable local service owner for Docker PostgreSQL, Redis, and project-isolated databases/schemas.
- `technical-research` gives the pod a source-backed research lane for industry patterns, vendor docs, and competitor/app comparisons.
- `task-planning` and `to-issues` let the CTO turn approved plans into well-scoped child issues.
- Matt engineering skills give the CTO and senior coder practical prompts for codebase design, domain modeling, debugging, TDD, and review.
- `doc-maintenance` keeps docs aligned with shipped changes — install if the company has any user-facing docs surface.

## Adapter defaults

- Codex is the default for code execution, debugging, infrastructure setup, review, and executable QA verification: CTO, Senior Coder, InfraEngineer, and CodexQA.
- Claude Code is the default for planning-oriented research, synthesis, and acceptance reasoning: Researcher and ClaudeQA.

## Migration notes

This entry is derived from the `Coder` and `QA` role templates in `skills/paperclip-create-agent/references/agents/` plus the historical CTO persona under `server/src/onboarding-assets/`. The QA role is intentionally split into CodexQA for executable verification and ClaudeQA for acceptance reasoning. Adapter-type defaults (claude_local vs codex_local) are intentionally left out of frontmatter so the import preview can let operators choose per-agent. SecurityEngineer is intentionally deferred to the future `optional/quality/security-review` entry, since most installs will not want a dedicated security agent on day one.
