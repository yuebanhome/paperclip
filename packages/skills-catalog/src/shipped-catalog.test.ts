import { describe, expect, it } from "vitest";
import { catalogManifest, catalogSkills, resolveCatalogSkillRef } from "./index.js";

const EXPECTED_BUNDLED_KEYS = [
  "paperclipai/bundled/docs/doc-maintenance",
  "paperclipai/bundled/paperclip-operations/issue-triage",
  "paperclipai/bundled/paperclip-operations/task-planning",
  "paperclipai/bundled/product/wireframe",
  "paperclipai/bundled/quality/qa-acceptance",
  "paperclipai/bundled/research/technical-research",
  "paperclipai/bundled/software-development/codegraph-impact-analysis",
  "paperclipai/bundled/software-development/development-infrastructure",
  "paperclipai/bundled/software-development/github-pr-workflow",
  "paperclipai/bundled/software-development/trellis-development-workflow",
];

const EXPECTED_OPTIONAL_KEYS = [
  "paperclipai/optional/browser/agent-browser",
  "paperclipai/optional/content/release-announcement",
  "paperclipai/optional/matt-engineering/ask-matt",
  "paperclipai/optional/matt-engineering/codebase-design",
  "paperclipai/optional/matt-engineering/diagnosing-bugs",
  "paperclipai/optional/matt-engineering/domain-modeling",
  "paperclipai/optional/matt-engineering/grill-with-docs",
  "paperclipai/optional/matt-engineering/implement",
  "paperclipai/optional/matt-engineering/improve-codebase-architecture",
  "paperclipai/optional/matt-engineering/prototype",
  "paperclipai/optional/matt-engineering/resolving-merge-conflicts",
  "paperclipai/optional/matt-engineering/setup-matt-pocock-skills",
  "paperclipai/optional/matt-engineering/tdd",
  "paperclipai/optional/matt-engineering/to-issues",
  "paperclipai/optional/matt-engineering/to-prd",
  "paperclipai/optional/matt-engineering/triage",
  "paperclipai/optional/matt-in-progress/decision-mapping",
  "paperclipai/optional/matt-in-progress/review",
  "paperclipai/optional/matt-in-progress/writing-beats",
  "paperclipai/optional/matt-in-progress/writing-fragments",
  "paperclipai/optional/matt-in-progress/writing-shape",
  "paperclipai/optional/matt-misc/git-guardrails-claude-code",
  "paperclipai/optional/matt-misc/migrate-to-shoehorn",
  "paperclipai/optional/matt-misc/scaffold-exercises",
  "paperclipai/optional/matt-misc/setup-pre-commit",
  "paperclipai/optional/matt-personal/edit-article",
  "paperclipai/optional/matt-personal/obsidian-vault",
  "paperclipai/optional/matt-productivity/grill-me",
  "paperclipai/optional/matt-productivity/grilling",
  "paperclipai/optional/matt-productivity/handoff",
  "paperclipai/optional/matt-productivity/teach",
  "paperclipai/optional/matt-productivity/writing-great-skills",
  "paperclipai/optional/product/design-critique",
  "paperclipai/optional/product/imagegen",
  "paperclipai/optional/research/last30days",
  "paperclipai/optional/superpowers/brainstorming",
  "paperclipai/optional/superpowers/dispatching-parallel-agents",
  "paperclipai/optional/superpowers/executing-plans",
  "paperclipai/optional/superpowers/finishing-a-development-branch",
  "paperclipai/optional/superpowers/receiving-code-review",
  "paperclipai/optional/superpowers/requesting-code-review",
  "paperclipai/optional/superpowers/subagent-driven-development",
  "paperclipai/optional/superpowers/systematic-debugging",
  "paperclipai/optional/superpowers/test-driven-development",
  "paperclipai/optional/superpowers/using-git-worktrees",
  "paperclipai/optional/superpowers/using-superpowers",
  "paperclipai/optional/superpowers/verification-before-completion",
  "paperclipai/optional/superpowers/writing-plans",
  "paperclipai/optional/superpowers/writing-skills",
];

describe("shipped skills catalog", () => {
  it("ships the expected bundled and optional skill set", () => {
    const bundledKeys = catalogSkills
      .filter((skill) => skill.kind === "bundled")
      .map((skill) => skill.key)
      .sort();
    const optionalKeys = catalogSkills
      .filter((skill) => skill.kind === "optional")
      .map((skill) => skill.key)
      .sort();

    expect(bundledKeys).toEqual(EXPECTED_BUNDLED_KEYS);
    expect(optionalKeys).toEqual(EXPECTED_OPTIONAL_KEYS);
  });

  it("keeps script-bearing shipped skills explicit so install stays audit-gated", () => {
    // The real install-time security boundary audits materialized bytes and blocks
    // hard-stop findings. Static assets (svg/html templates, e.g. the wireframe skill)
    // carry the "assets" trust level and are installable.
    const scriptBearing = catalogSkills.filter((skill) => skill.trustLevel === "scripts_executables");
    expect(scriptBearing.map((skill) => skill.key)).toEqual([
      "paperclipai/optional/matt-engineering/diagnosing-bugs",
      "paperclipai/optional/matt-misc/git-guardrails-claude-code",
      "paperclipai/optional/research/last30days",
      "paperclipai/optional/superpowers/brainstorming",
      "paperclipai/optional/superpowers/subagent-driven-development",
    ]);
  });

  it("populates browse/search-relevant fields for every shipped skill", () => {
    const issues: string[] = [];
    for (const skill of catalogSkills) {
      if (skill.compatibility !== "compatible") {
        issues.push(`${skill.key} compatibility=${skill.compatibility}`);
      }
      if (!skill.description || skill.description.length < 40) {
        issues.push(`${skill.key} description must be at least 40 characters for catalog browse/search`);
      }
      if (skill.recommendedForRoles.length === 0) {
        issues.push(`${skill.key} must list recommendedForRoles`);
      }
      if (skill.tags.length === 0) {
        issues.push(`${skill.key} must list tags`);
      }
    }
    expect(issues).toEqual([]);
  });

  it("uses canonical paperclipai keys derived from kind/category/slug", () => {
    const violations: string[] = [];
    for (const skill of catalogSkills) {
      const expectedKey = `paperclipai/${skill.kind}/${skill.category}/${skill.slug}`;
      const expectedId = `paperclipai:${skill.kind}:${skill.category}:${skill.slug}`;
      if (skill.key !== expectedKey) violations.push(`${skill.key} should be ${expectedKey}`);
      if (skill.id !== expectedId) violations.push(`${skill.id} should be ${expectedId}`);
    }
    expect(violations).toEqual([]);
  });

  it("exposes a stable manifest header for downstream consumers", () => {
    expect(catalogManifest.schemaVersion).toBe(1);
    expect(catalogManifest.packageName).toBe("@paperclipai/skills-catalog");
    expect(catalogSkills.length).toBe(EXPECTED_BUNDLED_KEYS.length + EXPECTED_OPTIONAL_KEYS.length);
  });

  it("resolves shipped skills by id, key, and unique slug", () => {
    const sample = catalogSkills.find((skill) => skill.key === "paperclipai/bundled/software-development/github-pr-workflow");
    expect(sample, "expected github-pr-workflow to ship in the bundled catalog").toBeDefined();
    if (!sample) return;

    expect(resolveCatalogSkillRef(sample.id)).toMatchObject({ key: sample.key });
    expect(resolveCatalogSkillRef(sample.key)).toMatchObject({ key: sample.key });
    expect(resolveCatalogSkillRef(sample.slug)).toMatchObject({ key: sample.key });
  });
});
