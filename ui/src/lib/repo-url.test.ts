import { describe, expect, it } from "vitest";
import { deriveRepoNameFromUrl, formatRepoUrl, isGitRepoUrl, isSafeExternalUrl } from "./repo-url";

describe("repo-url helpers", () => {
  it("accepts HTTP(S), SCP-like SSH, and ssh:// git repo URLs", () => {
    expect(isGitRepoUrl("https://github.com/deepLumendev/deeplumen-ai-service.git")).toBe(true);
    expect(isGitRepoUrl("git@github.com:deepLumendev/deeplumen-ai-service.git")).toBe(true);
    expect(isGitRepoUrl("ssh://git@github.com/deepLumendev/deeplumen-ai-service.git")).toBe(true);
  });

  it("rejects non-git-looking URLs and unsafe external link targets", () => {
    expect(isGitRepoUrl("https://github.com")).toBe(false);
    expect(isGitRepoUrl("javascript:alert(1)")).toBe(false);
    expect(isSafeExternalUrl("git@github.com:deepLumendev/deeplumen-ai-service.git")).toBe(false);
    expect(isSafeExternalUrl("https://github.com/deepLumendev/deeplumen-ai-service.git")).toBe(true);
  });

  it("formats and names SSH repo URLs for compact workspace labels", () => {
    expect(formatRepoUrl("git@github.com:deepLumendev/deeplumen-ai-service.git")).toBe(
      "github.com/deepLumendev/deeplumen-ai-service",
    );
    expect(deriveRepoNameFromUrl("ssh://git@github.com/deepLumendev/deeplumen-ai-service.git")).toBe(
      "deeplumen-ai-service",
    );
  });
});
