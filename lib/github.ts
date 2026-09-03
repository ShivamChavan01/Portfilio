/**
 * Live GitHub data for the Open Source section.
 * Server-side fetch with ISR (hourly revalidate) — no tokens, no client
 * API calls, graceful fallback to an empty list on any failure.
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

async function searchPRs(query: string, perPage: number): Promise<RecentPR[]> {
  const res = await fetch(
    `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=${perPage}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "shivam-chavan-portfolio",
      },
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

export async function getRecentMergedPRs(perPage = 6): Promise<RecentPR[]> {
  try {
    const merged = await searchPRs(`author:${USER} type:pr is:merged`, perPage);
    if (merged.length > 0) return merged;
    // Fallback: any PRs (some forges report merge state oddly through search)
    return await searchPRs(`author:${USER} type:pr`, perPage);
  } catch {
    return [];
  }
}

export function formatPRDate(iso: string): string {
  if (!iso) return "";
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(iso));
}

export type ContributionDay = { date: string; count: number; level: number };

/** Daily public contribution levels (0-4) for the self-rendered heatmap. */
export async function getContributions(): Promise<{
  days: ContributionDay[];
  total: number;
}> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return { days: [], total: 0 };
    const data = await res.json();
    const days: ContributionDay[] = (data.contributions ?? []).map(
      (d: { date: string; count: number; level: number }) => ({
        date: d.date,
        count: d.count,
        level: d.level,
      }),
    );
    return { days, total: data.total?.lastYear ?? 0 };
  } catch {
    return { days: [], total: 0 };
  }
}
