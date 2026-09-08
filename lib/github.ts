/**
 * Live GitHub data for the Open Source section.
 * Server-side fetch with ISR (hourly revalidate) — optional GITHUB_TOKEN,
 * request timeouts, and a committed fallback snapshot so a transient API
 * failure or rate limit never renders a blank section.
 * Note: GitHub's public APIs only surface public activity — private repo
 * contributions and PRs are intentionally not shown.
 */

export type RecentPR = {
  title: string;
  url: string;
  repo: string;
  number: number;
  updatedAt: string;
};

const USER = "ShivamChavan01";

/** Committed snapshot (Sep 2026) shown only when the live API is unreachable. */
const FALLBACK_PRS: RecentPR[] = [
  {
    title: "Register shivamchavan.is-a.dev",
    url: "https://github.com/is-a-dev/register/pull/50470",
    repo: "is-a-dev/register",
    number: 50470,
    updatedAt: "2026-09-03T10:21:08Z",
  },
  {
    title: "Create shivamrc.json",
    url: "https://github.com/is-a-dev/register/pull/30736",
    repo: "is-a-dev/register",
    number: 30736,
    updatedAt: "2025-12-27T12:25:55Z",
  },
  {
    title: "Issue 3520 replace `aslist()` project enricher test",
    url: "https://github.com/eclipse-jkube/jkube/pull/3524",
    repo: "eclipse-jkube/jkube",
    number: 3524,
    updatedAt: "2024-11-08T07:37:43Z",
  },
  {
    title: "Fix #3507: Replace Deprecated `asList()` Method in DefaultServiceEnricherAddMissingPartsTest",
    url: "https://github.com/eclipse-jkube/jkube/pull/3508",
    repo: "eclipse-jkube/jkube",
    number: 3508,
    updatedAt: "2024-11-05T10:09:09Z",
  },
  {
    title: "Task 3464/replace aslist pod template handler test",
    url: "https://github.com/eclipse-jkube/jkube/pull/3465",
    repo: "eclipse-jkube/jkube",
    number: 3465,
    updatedAt: "2024-10-18T11:21:56Z",
  },
  {
    title: "#3463 issue : Replaced `asList()` method in `DockerHealthCheckEnricherTest`",
    url: "https://github.com/eclipse-jkube/jkube/pull/3466",
    repo: "eclipse-jkube/jkube",
    number: 3466,
    updatedAt: "2024-10-18T11:20:21Z",
  },
];

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "shivam-chavan-portfolio",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  // Optional: set GITHUB_TOKEN in Vercel env to raise the unauthenticated
  // search limit (10 req/min shared IP) to authenticated limits.
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function fetchWithTimeout(url: string, init: RequestInit, ms = 10000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

async function searchPRs(query: string, perPage: number): Promise<RecentPR[]> {
  const res = await fetchWithTimeout(
    `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=${perPage}`,
    {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) return [];
  const data = await res.json();
  return (data.items ?? []).map(
    (item: {
      title: string;
      html_url: string;
      number: number;
      state: string;
      updated_at?: string;
      created_at?: string;
      repository_url?: string;
    }) => ({
      title: item.title,
      url: item.html_url,
      repo: (item.repository_url ?? "").replace("https://api.github.com/repos/", ""),
      number: item.number,
      updatedAt: item.updated_at ?? item.created_at ?? "",
    }),
  );
}

export type PRResult = { prs: RecentPR[]; live: boolean };

export async function getRecentMergedPRs(perPage = 6): Promise<PRResult> {
  try {
    const merged = await searchPRs(`author:${USER} type:pr is:merged`, perPage);
    if (merged.length > 0) return { prs: merged, live: true };
    // Fallback: any PRs (some forges report merge state oddly through search)
    const any = await searchPRs(`author:${USER} type:pr`, perPage);
    if (any.length > 0) return { prs: any, live: true };
  } catch {
    // fall through to snapshot
  }
  return { prs: FALLBACK_PRS.slice(0, perPage), live: false };
}

export function formatPRDate(iso: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}
