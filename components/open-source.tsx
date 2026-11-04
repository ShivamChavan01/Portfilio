import {
  formatPRDate,
  getContributions,
  getRecentMergedPRs,
} from "@/lib/github";
import { openSource, site } from "@/lib/data";
const levels = [
  "var(--color-line)",
  "#1e4930",
  "#2b6742",
  "#3c8c58",
  "#69ad7e",
];
export default async function OpenSource() {
  const [activity, contributions] = await Promise.all([
    getRecentMergedPRs(4),
    getContributions(),
  ]);
  return (
    <section
      id="open-source"
      className="profile-page profile-section"
      aria-labelledby="open-source-heading"
    >
      <div className="profile-section-title">
        <h2 id="open-source-heading">open source</h2>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer">
          @ShivamChavan01 ↗
        </a>
      </div>
      {openSource.map((entry) => (
        <article className="profile-oss-row" key={entry.name}>
          <h3>{entry.name}</h3>
          <p>{entry.description}</p>
          <div className="profile-links">
            {entry.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </article>
      ))}
      <div className="profile-feed">
        <p className="profile-note">
          Recent pull requests ·{" "}
          {activity.live ? "updated hourly" : "saved snapshot"}
        </p>
        <ul>
          {activity.prs.map((pr) => (
            <li key={pr.url}>
              <a href={pr.url} target="_blank" rel="noopener noreferrer">
                {pr.title}
                <small>{pr.repo}</small>
              </a>
              <time dateTime={pr.updatedAt}>{formatPRDate(pr.updatedAt)}</time>
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-activity">
        <div className="profile-section-title">
          <h2>contributions</h2>
          {contributions.live && (
            <span className="profile-counter">
              /{contributions.total.toLocaleString()} in the last year
            </span>
          )}
        </div>
        {contributions.days.length > 0 ? (
          <div
            className="profile-heatmap"
            role="img"
            aria-label={`${contributions.total} contributions in the last year`}
          >
            <div className="profile-heatmap-grid" aria-hidden="true">
              {Array.from(
                {
                  length: new Date(
                    `${contributions.days[0].date}T00:00:00Z`,
                  ).getUTCDay(),
                },
                (_, i) => (
                  <span key={`pad-${i}`} style={{ visibility: "hidden" }} />
                ),
              )}
              {contributions.days.map((day) => (
                <span
                  key={day.date}
                  title={`${day.count} contributions on ${day.date}`}
                  style={{ background: levels[day.level] ?? levels[0] }}
                />
              ))}
            </div>
          </div>
        ) : (
          <p className="profile-note">
            The contribution graph is unavailable right now.{" "}
            <a
              href={site.links.github}
              className="profile-inline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub activity ↗
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
