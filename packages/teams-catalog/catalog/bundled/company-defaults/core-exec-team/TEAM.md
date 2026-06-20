---
name: Core Exec Team
description: Default leadership and execution team for bootstrapping a Paperclip company with CEO, CTO, Product Lead, UX Designer, Infrastructure Engineer, Technical Researcher, dual QA, starter project, and a recurring CEO heartbeat review task.
schema: agentcompanies/v1
slug: core-exec-team
category: company-defaults
key: paperclipai/bundled/company-defaults/core-exec-team
manager: agents/ceo/AGENTS.md
includes:
  - agents/cto/AGENTS.md
  - agents/product-lead/AGENTS.md
  - agents/ux-designer/AGENTS.md
  - agents/infra-engineer/AGENTS.md
  - agents/researcher/AGENTS.md
  - agents/codex-qa/AGENTS.md
  - agents/claude-qa/AGENTS.md
  - projects/first-project/PROJECT.md
defaultInstall: true
recommendedForCompanyTypes:
  - startup
  - software
  - generalist
tags:
  - default
  - executive
  - engineering
  - qa
requiredSkills:
  - paperclipai/bundled/paperclip-operations/task-planning
  - paperclipai/bundled/paperclip-operations/issue-triage
  - paperclipai/bundled/software-development/codegraph-impact-analysis
  - paperclipai/bundled/software-development/development-infrastructure
  - paperclipai/bundled/software-development/github-pr-workflow
  - paperclipai/bundled/software-development/trellis-development-workflow
  - paperclipai/bundled/quality/qa-acceptance
  - paperclipai/optional/browser/agent-browser
  - paperclipai/optional/product/imagegen
  - paperclipai/bundled/research/technical-research
  - paperclipai/optional/matt-engineering/ask-matt
  - paperclipai/optional/matt-engineering/codebase-design
  - paperclipai/optional/matt-engineering/domain-modeling
  - paperclipai/optional/matt-engineering/improve-codebase-architecture
  - paperclipai/optional/matt-engineering/to-issues
  - paperclipai/optional/matt-engineering/to-prd
  - paperclipai/optional/matt-in-progress/decision-mapping
  - paperclipai/optional/matt-in-progress/review
  - paperclipai/optional/matt-productivity/handoff
  - paperclipai/optional/superpowers/writing-plans
---

# Core Exec Team

The Core Exec Team is the bundled default install for a new Paperclip company. It boots the smallest org that can take a board prompt, discuss a lightweight plan, hand the decision to the board, implement it, and verify it.

## Contents

- `CEO` — strategy, prioritization, delegation. Uses `task-planning` and `issue-triage` to keep the inbox moving.
- `CTO` — technical execution and engineering oversight. Reports to CEO. Uses `github-pr-workflow` and architecture-review skills for code review, risk checks, and merge hygiene.
- `ProductLead` — planning lead. Reports to CEO. Drafts lightweight product/engineering plans and asks CTO/Codex for technical critique before board approval.
- `UXDesigner` — product design and UX-quality lead. Reports to ProductLead and collaborates with CTO/CodexQA/ClaudeQA on user-facing work.
- `InfraEngineer` — local development infrastructure owner. Reports to CTO. Prepares shared Docker PostgreSQL/Redis and project-isolated databases, schemas, and service notes.
- `Researcher` — technical/product research specialist. Reports to ProductLead. Compares authoritative industry approaches, competitor/app patterns, and vendor docs before planning.
- `CodexQA` — executable QA gate. Reports to CTO. Verifies fixes with commands, browser/API checks, logs, screenshots, and concrete pass/fail evidence.
- `ClaudeQA` — acceptance QA gate. Reports to CTO. Reviews plan fit, product intent, edge cases, UX quality, and CodexQA evidence before approving.
- `first-project` — starter project under the CTO for converting the company goal into the first implementation task.
- `first-heartbeat` — recurring CEO heartbeat to review priorities and confirm the next useful task.

## Workflow skills

- `trellis-development-workflow` keeps planning, implementation, review, and durable spec updates aligned with Trellis-managed repositories.
- `codegraph-impact-analysis` gives planning, engineering, and both QA gates a graph-backed first pass for exploration, dependency impact, and review triage.
- `development-infrastructure` lets the InfraEngineer reuse shared Docker services while isolating each project by database/schema/key prefix.
- `technical-research` gives ProductLead and CTO a source-backed way to compare current industry approaches before committing to a plan.
- `qa-acceptance` makes acceptance explicit: CodexQA and ClaudeQA must both post passing verdicts before a feature is accepted.
- `agent-browser` gives UXDesigner, CodexQA, ClaudeQA, and engineering a real browser path for web/client acceptance: screenshots, console errors, network failures, and viewport evidence.
- `imagegen` gives UXDesigner a bitmap asset path for hero art, product mockups, raster illustrations, textures, and other visual assets that should not be drawn as wireframes or SVG placeholders.

## Adapter defaults

- Claude Code is the default for planning, synthesis, product/design direction, research, executive coordination, and acceptance reasoning: CEO, ProductLead, Researcher, UXDesigner, and ClaudeQA.
- Codex is the default for code execution, debugging, infrastructure setup, technical review, and executable verification: CTO, InfraEngineer, CodexQA, and engineering implementers.

## Migration notes

This entry mirrors the historical `server/src/onboarding-assets/ceo/` template family while staying inside the catalog package boundary. Per-agent persona files (the legacy `SOUL.md`, `HEARTBEAT.md`, `TOOLS.md` siblings) are intentionally collapsed into a single `AGENTS.md` per agent so importer/portability semantics stay simple. The richer persona content can move into `references/` files in a follow-up once onboarding actually switches to the catalog service.
