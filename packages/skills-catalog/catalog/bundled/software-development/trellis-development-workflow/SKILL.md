---
name: trellis-development-workflow
description: Follow Trellis-managed development and review workflow in repositories with `.trellis/`: read workflow/spec context, create or continue Trellis tasks when appropriate, use package/layer specs before code, update specs with durable lessons, and finish work through Trellis lifecycle. Trigger when a task mentions Trellis, asks to obey project workflow, starts implementation/review in a Trellis repo, or needs structured planning before code.
key: paperclipai/bundled/software-development/trellis-development-workflow
recommendedForRoles:
  - engineer
  - engineering-manager
  - qa
  - product-manager
  - designer
tags:
  - trellis
  - workflow
  - planning
  - review
  - verification
---

# Trellis Development Workflow

Use this skill when working in a repository that contains `.trellis/`. Trellis is the project workflow system; its files are the source of truth for task lifecycle, package specs, and durable session knowledge.

## Required Context

Read these before changing code or declaring review complete:

1. `.trellis/workflow.md`
2. Relevant `.trellis/spec/<package>/<layer>/index.md`
3. Any spec files linked by that index that match the files you will touch

Use this command to discover package/layer names:

```sh
python3 ./.trellis/scripts/get_context.py --mode packages
```

## Task Lifecycle

For implementation, refactor, build, or review work, use an active Trellis task unless the user explicitly says to skip Trellis for the turn.

```sh
python3 ./.trellis/scripts/task.py current --source
python3 ./.trellis/scripts/task.py create "<title>" --slug <short-slug>
python3 ./.trellis/scripts/task.py start <task-dir>
```

If the task is already active, continue it instead of creating a duplicate.

## Execution Rules

- Plan before code using the task PRD and current project specs.
- Keep work scoped to the active task.
- Use CodeGraph when available for code impact analysis, then verify by reading source.
- Run the smallest checks that prove the change.
- When you learn a reusable rule, update the relevant `.trellis/spec/` file instead of leaving the lesson only in chat.

## Finish

Before marking work done:

1. Run the relevant verification.
2. Update Trellis specs if the work changed or discovered a convention.
3. Commit the implementation if this workflow and repo state call for a commit.
4. Finish/archive via the available Trellis command or script.

```sh
python3 ./.trellis/scripts/task.py finish
```

Use `/trellis:finish-work` when the platform exposes it.

## Failure Handling

- If `.trellis/` exists but commands fail, read `.trellis/workflow.md` and proceed manually, reporting the failed command.
- If no active task exists and the user's request is pure Q&A with no file writes, answer directly.
- If Trellis instructions conflict with higher-priority repo instructions, follow the repo instructions and mention the conflict.
