# Bootstrap Task: Fill Project Development Guidelines

**You (the AI) are running this task. The developer does not read this file.**

The developer just ran `trellis init` on this project for the first time.
`.trellis/` now exists with empty spec scaffolding, and this bootstrap task
exists under `.trellis/tasks/`. When they want to work on it, they should start
this task from a session that provides Trellis session identity.

**Your job**: help them populate `.trellis/spec/` with the team's real
coding conventions. Every future AI session — this project's
`trellis-implement` and `trellis-check` sub-agents — auto-loads spec files
listed in per-task jsonl manifests. Empty spec = sub-agents write generic
code. Real spec = sub-agents match the team's actual patterns.

Don't dump instructions. Open with a short greeting, figure out if the repo
has any existing convention docs (CLAUDE.md, .cursorrules, etc.), and drive
the rest conversationally.

---

## Status (update the checkboxes as you complete each item)

- [ ] Fill guidelines for @paperclipai/adapter-utils
- [ ] Fill guidelines for adapters
- [ ] Fill guidelines for @paperclipai/db
- [ ] Fill guidelines for @paperclipai/mcp-server
- [ ] Fill guidelines for plugins
- [ ] Fill guidelines for @paperclipai/shared
- [ ] Fill guidelines for @paperclipai/skills-catalog
- [ ] Fill guidelines for @paperclipai/teams-catalog
- [ ] Fill guidelines for @paperclipai/adapter-acpx-local
- [ ] Fill guidelines for @paperclipai/adapter-claude-local
- [ ] Fill guidelines for @paperclipai/adapter-codex-local
- [ ] Fill guidelines for @paperclipai/adapter-cursor-cloud
- [ ] Fill guidelines for @paperclipai/adapter-cursor-local
- [ ] Fill guidelines for @paperclipai/adapter-gemini-local
- [ ] Fill guidelines for @paperclipai/adapter-grok-local
- [ ] Fill guidelines for @paperclipai/adapter-openclaw-gateway
- [ ] Fill guidelines for @paperclipai/adapter-opencode-local
- [ ] Fill guidelines for @paperclipai/adapter-pi-local
- [ ] Fill guidelines for @paperclipai/create-paperclip-plugin
- [ ] Fill guidelines for examples
- [ ] Fill guidelines for @paperclipai/plugin-fake-sandbox
- [ ] Fill guidelines for @paperclipai/plugin-llm-wiki
- [ ] Fill guidelines for @paperclipai/plugin-workspace-diff
- [ ] Fill guidelines for sandbox-providers
- [ ] Fill guidelines for @paperclipai/plugin-sdk
- [ ] Fill guidelines for @paperclipai/plugin-authoring-smoke-example
- [ ] Fill guidelines for @paperclipai/plugin-file-browser-example
- [ ] Fill guidelines for @paperclipai/plugin-hello-world-example
- [ ] Fill guidelines for @paperclipai/plugin-kitchen-sink-example
- [ ] Fill guidelines for @paperclipai/server
- [ ] Fill guidelines for @paperclipai/ui
- [ ] Fill guidelines for paperclipai
- [ ] Add code examples

---

## Spec files to populate

### Package: @paperclipai/adapter-utils (`spec/adapter-utils/`)

- Backend guidelines: `.trellis/spec/adapter-utils/backend/`

- Frontend guidelines: `.trellis/spec/adapter-utils/frontend/`

### Package: adapters (`spec/adapters/`)

- Backend guidelines: `.trellis/spec/adapters/backend/`

- Frontend guidelines: `.trellis/spec/adapters/frontend/`

### Package: @paperclipai/db (`spec/db/`)

- Backend guidelines: `.trellis/spec/db/backend/`

- Frontend guidelines: `.trellis/spec/db/frontend/`

### Package: @paperclipai/mcp-server (`spec/mcp-server/`)

- Backend guidelines: `.trellis/spec/mcp-server/backend/`

- Frontend guidelines: `.trellis/spec/mcp-server/frontend/`

### Package: plugins (`spec/plugins/`)

- Backend guidelines: `.trellis/spec/plugins/backend/`

- Frontend guidelines: `.trellis/spec/plugins/frontend/`

### Package: @paperclipai/shared (`spec/shared/`)

- Backend guidelines: `.trellis/spec/shared/backend/`

- Frontend guidelines: `.trellis/spec/shared/frontend/`

### Package: @paperclipai/skills-catalog (`spec/skills-catalog/`)

- Backend guidelines: `.trellis/spec/skills-catalog/backend/`

- Frontend guidelines: `.trellis/spec/skills-catalog/frontend/`

### Package: @paperclipai/teams-catalog (`spec/teams-catalog/`)

- Backend guidelines: `.trellis/spec/teams-catalog/backend/`

- Frontend guidelines: `.trellis/spec/teams-catalog/frontend/`

### Package: @paperclipai/adapter-acpx-local (`spec/adapter-acpx-local/`)

- Backend guidelines: `.trellis/spec/adapter-acpx-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-acpx-local/frontend/`

### Package: @paperclipai/adapter-claude-local (`spec/adapter-claude-local/`)

- Backend guidelines: `.trellis/spec/adapter-claude-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-claude-local/frontend/`

### Package: @paperclipai/adapter-codex-local (`spec/adapter-codex-local/`)

- Backend guidelines: `.trellis/spec/adapter-codex-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-codex-local/frontend/`

### Package: @paperclipai/adapter-cursor-cloud (`spec/adapter-cursor-cloud/`)

- Backend guidelines: `.trellis/spec/adapter-cursor-cloud/backend/`

- Frontend guidelines: `.trellis/spec/adapter-cursor-cloud/frontend/`

### Package: @paperclipai/adapter-cursor-local (`spec/adapter-cursor-local/`)

- Backend guidelines: `.trellis/spec/adapter-cursor-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-cursor-local/frontend/`

### Package: @paperclipai/adapter-gemini-local (`spec/adapter-gemini-local/`)

- Backend guidelines: `.trellis/spec/adapter-gemini-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-gemini-local/frontend/`

### Package: @paperclipai/adapter-grok-local (`spec/adapter-grok-local/`)

- Backend guidelines: `.trellis/spec/adapter-grok-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-grok-local/frontend/`

### Package: @paperclipai/adapter-openclaw-gateway (`spec/adapter-openclaw-gateway/`)

- Backend guidelines: `.trellis/spec/adapter-openclaw-gateway/backend/`

- Frontend guidelines: `.trellis/spec/adapter-openclaw-gateway/frontend/`

### Package: @paperclipai/adapter-opencode-local (`spec/adapter-opencode-local/`)

- Backend guidelines: `.trellis/spec/adapter-opencode-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-opencode-local/frontend/`

### Package: @paperclipai/adapter-pi-local (`spec/adapter-pi-local/`)

- Backend guidelines: `.trellis/spec/adapter-pi-local/backend/`

- Frontend guidelines: `.trellis/spec/adapter-pi-local/frontend/`

### Package: @paperclipai/create-paperclip-plugin (`spec/create-paperclip-plugin/`)

- Backend guidelines: `.trellis/spec/create-paperclip-plugin/backend/`

- Frontend guidelines: `.trellis/spec/create-paperclip-plugin/frontend/`

### Package: examples (`spec/examples/`)

- Backend guidelines: `.trellis/spec/examples/backend/`

- Frontend guidelines: `.trellis/spec/examples/frontend/`

### Package: @paperclipai/plugin-fake-sandbox (`spec/plugin-fake-sandbox/`)

- Backend guidelines: `.trellis/spec/plugin-fake-sandbox/backend/`

- Frontend guidelines: `.trellis/spec/plugin-fake-sandbox/frontend/`

### Package: @paperclipai/plugin-llm-wiki (`spec/plugin-llm-wiki/`)

- Frontend guidelines: `.trellis/spec/plugin-llm-wiki/frontend/`

### Package: @paperclipai/plugin-workspace-diff (`spec/plugin-workspace-diff/`)

- Backend guidelines: `.trellis/spec/plugin-workspace-diff/backend/`

- Frontend guidelines: `.trellis/spec/plugin-workspace-diff/frontend/`

### Package: sandbox-providers (`spec/sandbox-providers/`)

- Backend guidelines: `.trellis/spec/sandbox-providers/backend/`

- Frontend guidelines: `.trellis/spec/sandbox-providers/frontend/`

### Package: @paperclipai/plugin-sdk (`spec/plugin-sdk/`)

- Backend guidelines: `.trellis/spec/plugin-sdk/backend/`

- Frontend guidelines: `.trellis/spec/plugin-sdk/frontend/`

### Package: @paperclipai/plugin-authoring-smoke-example (`spec/plugin-authoring-smoke-example/`)

- Frontend guidelines: `.trellis/spec/plugin-authoring-smoke-example/frontend/`

### Package: @paperclipai/plugin-file-browser-example (`spec/plugin-file-browser-example/`)

- Backend guidelines: `.trellis/spec/plugin-file-browser-example/backend/`

- Frontend guidelines: `.trellis/spec/plugin-file-browser-example/frontend/`

### Package: @paperclipai/plugin-hello-world-example (`spec/plugin-hello-world-example/`)

- Backend guidelines: `.trellis/spec/plugin-hello-world-example/backend/`

- Frontend guidelines: `.trellis/spec/plugin-hello-world-example/frontend/`

### Package: @paperclipai/plugin-kitchen-sink-example (`spec/plugin-kitchen-sink-example/`)

- Backend guidelines: `.trellis/spec/plugin-kitchen-sink-example/backend/`

- Frontend guidelines: `.trellis/spec/plugin-kitchen-sink-example/frontend/`

### Package: @paperclipai/server (`spec/server/`)

- Backend guidelines: `.trellis/spec/server/backend/`

- Frontend guidelines: `.trellis/spec/server/frontend/`

### Package: @paperclipai/ui (`spec/ui/`)

- Frontend guidelines: `.trellis/spec/ui/frontend/`

### Package: paperclipai (`spec/paperclipai/`)

- Backend guidelines: `.trellis/spec/paperclipai/backend/`

- Frontend guidelines: `.trellis/spec/paperclipai/frontend/`


### Thinking guides (already populated)

`.trellis/spec/guides/` contains general thinking guides pre-filled with
best practices. Customize only if something clearly doesn't fit this project.

---

## How to fill the spec

### Step 1: Import from existing convention files first (preferred)

Search the repo for existing convention docs. If any exist, read them and
extract the relevant rules into the matching `.trellis/spec/` files —
usually much faster than documenting from scratch.

| File / Directory | Tool |
|------|------|
| `CLAUDE.md` / `CLAUDE.local.md` | Claude Code |
| `AGENTS.md` | Codex / Claude Code / agent-compatible tools |
| `.cursorrules` | Cursor |
| `.cursor/rules/*.mdc` | Cursor (rules directory) |
| `.windsurfrules` | Windsurf |
| `.clinerules` | Cline |
| `.roomodes` | Roo Code |
| `.github/copilot-instructions.md` | GitHub Copilot |
| `.vscode/settings.json` → `github.copilot.chat.codeGeneration.instructions` | VS Code Copilot |
| `CONVENTIONS.md` / `.aider.conf.yml` | aider |
| `CONTRIBUTING.md` | General project conventions |
| `.editorconfig` | Editor formatting rules |

### Step 2: Analyze the codebase for anything not covered by existing docs

Scan real code to discover patterns. Before writing each spec file:
- Find 2-3 real examples of each pattern in the codebase.
- Reference real file paths (not hypothetical ones).
- Document anti-patterns the team clearly avoids.

### Step 3: Document reality, not ideals

**Critical**: write what the code *actually does*, not what it should do.
Sub-agents match the spec, so aspirational patterns that don't exist in the
codebase will cause sub-agents to write code that looks out of place.

If the team has known tech debt, document the current state — improvement
is a separate conversation, not a bootstrap concern.

---

## Quick explainer of the runtime (share when they ask "why do we need spec at all")

- Every AI coding task spawns two sub-agents: `trellis-implement` (writes
  code) and `trellis-check` (verifies quality).
- Each task has `implement.jsonl` / `check.jsonl` manifests listing which
  spec files to load.
- The platform hook auto-injects those spec files + the task's `prd.md`
  into every sub-agent prompt, so the sub-agent codes/reviews per team
  conventions without anyone pasting them manually.
- Source of truth: `.trellis/spec/`. That's why filling it well now pays
  off forever.

---

## Completion

When the developer confirms the checklist items above are done with real
examples (not placeholders), guide them to run:

```bash
python3 ./.trellis/scripts/task.py finish
python3 ./.trellis/scripts/task.py archive 00-bootstrap-guidelines
```

After archive, every new developer who joins this project will get a
`00-join-<slug>` onboarding task instead of this bootstrap task.

---

## Suggested opening line

"Welcome to Trellis! Your init just set me up to help you fill the project
spec — a one-time setup so every future AI session follows the team's
conventions instead of writing generic code. Before we start, do you have
any existing convention docs (CLAUDE.md, .cursorrules, CONTRIBUTING.md,
etc.) I can pull from, or should I scan the codebase from scratch?"
