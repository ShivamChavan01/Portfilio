/** Section 04, Open Source — curated ledger rows + live GitHub activity. */
import { formatPRDate, getContributions, getRecentMergedPRs } from "@/lib/github";
import { SectionHeader } from "@/components/ui/section-header";
import { openSource, sectionIntros } from "@/lib/data";

const LEVEL_CLASSES = [
  "bg-ink-faint/20",
  "bg-accent/25",
  "bg-accent/45",
  "bg-accent/70",
  "bg-accent",
] as const;

function Heatmap({ days }: { days: { date: string; count: number; level: number }[] }) {
  if (days.length === 0) return null;

  // Align the first day to its weekday column (Sun-start), then chunk into weeks.
  const offset = new Date(days[0].date + "T00:00:00Z").getUTCDay();
  const cells: (typeof days[number] | null)[] = [
    ...Array.from({ length: offset }, () => null),
    ...days,
  ];
  while (cells.length % 7 !== 0) cells.push(null);
  const weeks: (typeof cells)[] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface p-4">
      <div
        aria-hidden="true"
        className="grid w-full min-w-[640px] grid-flow-col grid-rows-7 gap-[3px]"
        style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
      >
        {weeks.flatMap((week, wi) =>
          week.map((day, di) => {
            const key = `${wi}-${di}`;
            if (!day) return <div key={key} className="aspect-square w-full rounded-[3px] opacity-0" />;
            return (
              <div
                key={key}
                title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${formatPRDate(day.date)}`}
                className={`aspect-square w-full rounded-[3px] ${LEVEL_CLASSES[day.level] ?? LEVEL_CLASSES[0]}`}
              />
            );
          }),
        )}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span aria-hidden="true" className="font-mono text-meta text-ink-faint">
          Last 12 months
        </span>
        <span className="flex items-center gap-1.5 font-mono text-meta text-ink-faint">
          Less
          {LEVEL_CLASSES.map((cls, i) => (
            <span key={i} aria-hidden="true" className={`h-[10px] w-[10px] rounded-[3px] ${cls}`} />
          ))}
          More
        </span>
      </div>
    </div>
  );
}

export default async function OpenSource() {
  const [prResult, contributions] = await Promise.all([
    getRecentMergedPRs(6),
    getContributions(),
  ]);
  const recentPRs = prResult.prs;
  const prsLive = prResult.live;

  return (
    <SectionHeader id="open-source" index="04" label="OPEN SOURCE">
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.openSource}</p>

      <ol className="mt-8 list-none lg:mt-10">
        {openSource.map((entry) => (
          <li key={entry.name} className="border-t border-line py-6 lg:py-7">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-medium text-ink">{entry.name}</h3>
              {entry.org ? (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-ink-faint sm:block"
                  />
                  <span className="font-mono text-meta text-ink-muted">{entry.org}</span>
                </>
              ) : null}
              {entry.period ? (
                <span className="font-mono text-meta text-ink-faint tabular-nums">
                  {entry.period}
                </span>
              ) : null}
            </div>

            <p className="mt-2 max-w-measure text-body text-ink-2">{entry.description}</p>

            <p className="mt-2.5 font-mono text-meta text-ink-faint">{entry.meta}</p>

            {entry.links.length > 0 ? (
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                {entry.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-small font-medium text-ink transition-colors duration-150 hover:text-accent md:min-h-0 md:py-0.5"
                  >
                    {link.label}
                    <span aria-hidden="true" className="ml-0.5 text-ink-faint">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>

      {/* Live GitHub activity: contribution heatmap + recent merged PRs */}
      <div className="mt-10">
        <div className="flex items-center gap-4">
          <p className="shrink-0 font-mono text-label font-medium uppercase text-ink-muted">
            Contribution activity
          </p>
          <div aria-hidden="true" className="h-px flex-1 bg-line" />
        </div>

        {contributions.days.length > 0 ? (
          <>
            <Heatmap days={contributions.days} />
            <p className="mt-3 font-mono text-meta text-ink-faint tabular-nums">
              {contributions.total} public contributions in the last year
              {contributions.live ? null : " · cached"}
            </p>
          </>
        ) : (
          <p className="mt-4 rounded-xl border border-line bg-surface p-4 font-mono text-meta text-ink-faint">
            Contribution graph is fetched live and is unavailable right now.{" "}
            <a
              href="https://github.com/ShivamChavan01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-accent"
            >
              View activity on GitHub
              <span aria-hidden="true" className="ml-0.5">
                ↗
              </span>
            </a>
          </p>
        )}

        {recentPRs.length > 0 ? (
          <div className="mt-8">
            <p className="font-mono text-label font-medium uppercase text-ink-muted">
              Recent merged pull requests
            </p>
            <ul className="mt-3 list-none">
              {recentPRs.map((pr) => (
                <li
                  key={pr.url}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-line py-3"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-status"
                  />
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-0 break-words text-small font-medium text-ink transition-colors duration-150 hover:text-accent"
                  >
                    {pr.title}
                    <span aria-hidden="true" className="ml-1 text-ink-faint">
                      ↗
                    </span>
                  </a>
                  <span className="font-mono text-meta text-ink-muted">{pr.repo}</span>
                  <span className="ml-auto font-mono text-meta text-ink-faint tabular-nums">
                    {formatPRDate(pr.updatedAt)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-meta text-ink-faint">
              {prsLive
                ? "Live from the GitHub API · refreshes hourly"
                : "Showing last synced PRs · live API rate-limited, refreshes hourly"}
            </p>
          </div>
        ) : (
          <p className="mt-4 font-mono text-meta text-ink-faint">
            Recent pull requests are fetched live from the GitHub API and are unavailable right
            now. Set GITHUB_TOKEN to raise API limits.{" "}
            <a
              href="https://github.com/ShivamChavan01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-2 underline decoration-line-strong underline-offset-4 hover:text-accent"
            >
              View all activity on GitHub
              <span aria-hidden="true" className="ml-0.5">
                ↗
              </span>
            </a>
          </p>
        )}
      </div>
    </SectionHeader>
  );
}
