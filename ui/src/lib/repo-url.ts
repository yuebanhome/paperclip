export function isGitRepoUrl(value: string) {
  const trimmed = value.trim();
  if (/^git@[^:\s]+:[^:\s]+\/[^:\s]+(?:\.git)?$/i.test(trimmed)) return true;
  if (/^ssh:\/\/git@[^/\s]+\/[^/\s]+\/[^/\s]+(?:\.git)?$/i.test(trimmed)) return true;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return false;
    const segments = parsed.pathname.split("/").filter(Boolean);
    return segments.length >= 2;
  } catch {
    return false;
  }
}

export function isSafeExternalUrl(value: string | null | undefined) {
  if (!value) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function formatRepoUrl(value: string) {
  const trimmed = value.trim();
  const sshPath = trimmed.match(/^git@([^:]+):(.+)$/i);
  if (sshPath) {
    const host = sshPath[1];
    const path = sshPath[2]?.replace(/\.git$/i, "");
    return path ? `${host}/${path}` : value;
  }
  const sshUrlPath = trimmed.match(/^ssh:\/\/git@([^/]+)\/(.+)$/i);
  if (sshUrlPath) {
    const host = sshUrlPath[1];
    const path = sshUrlPath[2]?.replace(/\.git$/i, "");
    return path ? `${host}/${path}` : value;
  }
  try {
    const parsed = new URL(value);
    const segments = parsed.pathname.split("/").filter(Boolean);
    if (segments.length < 2) return parsed.host;
    const owner = segments[0];
    const repo = segments[1]?.replace(/\.git$/i, "");
    if (!owner || !repo) return parsed.host;
    return `${parsed.host}/${owner}/${repo}`;
  } catch {
    return value;
  }
}

export function deriveRepoNameFromUrl(value: string, fallback = "Repository") {
  const trimmed = value.trim();
  const sshPath = trimmed.match(/^git@[^:]+:(.+)$/i)?.[1]
    ?? trimmed.match(/^ssh:\/\/git@[^/]+\/(.+)$/i)?.[1]
    ?? null;
  if (sshPath) {
    const segments = sshPath.split("/").filter(Boolean);
    return segments[segments.length - 1]?.replace(/\.git$/i, "") || fallback;
  }
  try {
    const parsed = new URL(trimmed);
    const segments = parsed.pathname.split("/").filter(Boolean);
    return segments[segments.length - 1]?.replace(/\.git$/i, "") || fallback;
  } catch {
    return fallback;
  }
}
