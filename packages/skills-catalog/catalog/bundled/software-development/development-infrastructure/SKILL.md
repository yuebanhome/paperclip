---
name: development-infrastructure
description: Prepare and maintain local development infrastructure for projects: Docker-backed PostgreSQL, Redis, and shared services, with reusable instances and project-isolated databases, schemas, users, ports, and connection notes.
key: paperclipai/bundled/software-development/development-infrastructure
recommendedForRoles:
  - infrastructure
  - engineer
  - engineering-manager
tags:
  - docker
  - postgres
  - redis
  - infrastructure
  - local-development
---

# Development Infrastructure

Prepare local service dependencies so implementers can work without reinventing setup per issue.

## Default Principle

Prefer one shared Docker PostgreSQL instance and one shared Docker Redis instance per machine or workspace, then isolate projects inside those services:

- PostgreSQL: create one database per project when isolation matters, or one schema per project for lightweight local use.
- Redis: use a project-specific database index, key prefix, or dedicated logical config.
- Ports: reuse stable local ports unless a conflict exists.
- Credentials: use local-only development credentials and never paste real production secrets into configs or comments.

## When to Use

- A new project needs local dependencies before engineering work can start.
- Tests need PostgreSQL, Redis, or another common service.
- A developer reports setup drift, port conflicts, or missing local service state.
- Multiple projects should share the same local service process but remain data-isolated.

## Workflow

1. Inspect project docs and existing compose files before creating anything new.
2. Check Docker availability:
   ```sh
   docker version
   docker ps
   ```
3. Reuse existing local containers when possible. Look for Paperclip-managed names, labels, or documented ports.
4. For PostgreSQL:
   - prefer an existing container such as `paperclip-dev-postgres`
   - create project database/schema/user only when absent
   - document the connection string in the project issue or local env file pattern
5. For Redis:
   - prefer an existing container such as `paperclip-dev-redis`
   - assign a key prefix or logical database for the project
6. Add or update project-local documentation only when the project lacks setup instructions.
7. Verify with a connection check, migration check, or smoke test that proves the service is usable.

## Docker Defaults

Use conservative defaults unless the repo has its own standard:

```sh
docker run -d --name paperclip-dev-postgres \
  -p 5432:5432 \
  -e POSTGRES_USER=paperclip \
  -e POSTGRES_PASSWORD=paperclip \
  -e POSTGRES_DB=postgres \
  postgres:17

docker run -d --name paperclip-dev-redis \
  -p 6379:6379 \
  redis:7
```

If containers already exist, start them instead:

```sh
docker start paperclip-dev-postgres
docker start paperclip-dev-redis
```

## Project Isolation

Use stable project slugs. For a project slug `acme-api`:

- PostgreSQL database: `acme_api`
- PostgreSQL schema: `acme_api`
- PostgreSQL user: only create one if tests require separate permissions
- Redis key prefix: `acme-api:`

Do not create a new PostgreSQL container for every project unless a version conflict, extension conflict, or destructive test suite requires it.

## Handoff Format

Leave a short comment with:

- services reused or created
- container names and ports
- project database/schema/key prefix
- connection strings with only local dev credentials
- verification command and result
- any cleanup command if the setup is intentionally temporary

## Safety

- Do not stop or delete existing containers unless the task explicitly asks for cleanup.
- Do not use production credentials.
- Do not expose local services beyond localhost unless the board explicitly asks.
- Do not commit `.env` files containing secrets. Commit `.env.example` or docs only.
