"use client";
import { useState } from "react";
import { work, type WorkEntry } from "@/lib/data";
import { filters, filterProjects, type ProjectFilter } from "@/lib/projects";
import { ProjectArt, type ArtKind } from "./project-art";
const featured: ArtKind[] = ["cutroom", "open-agent", "voicescope", "strivo", "mcp-foundry"];
function Links({ entry }: { entry: WorkEntry }) {
  return (
    <div className="profile-links">
      {entry.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
        >
          {link.label} ↗
        </a>
      ))}
      {entry.caseStudyHref && <a href={entry.caseStudyHref}>Notes ↗</a>}
    </div>
  );
}
export default function SelectedWork() {
  const [filter, setFilter] = useState<ProjectFilter>("All work");
  const visible = filterProjects(filter);
  const archive = visible.filter(
    (entry) => !featured.some((slug) => slug === entry.slug),
  );
  return (
    <section
      id="work"
      className="profile-page profile-section"
      aria-labelledby="work-heading"
    >
      <div className="work-heading-row">
        <div><p className="profile-eyebrow">A selection of what I work on</p>
        <h2 id="work-heading">Projects & experiments<span>.</span></h2></div>
        <span className="work-index" aria-hidden="true">2025 — 2026</span>
      </div>
      <div className="profile-section-title work-directory">
        <span>Project directory</span>
        <span className="profile-counter">
          /{String(work.length).padStart(2, "0")}
        </span>
        <a
          href={"https://github.com/ShivamChavan01?tab=repositories"}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
      <div
        className="profile-filters"
        role="group"
        aria-label="Filter projects"
      >
        {filters.map((label) => (
          <button
            key={label}
            type="button"
            aria-pressed={filter === label}
            onClick={() => setFilter(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} projects shown
      </p>
      <div className="profile-projects">
        {featured.flatMap((slug, index) => {
          const entry = visible.find((item) => item.slug === slug);
          return entry
            ? [
                <article className="profile-project" data-project={slug} key={slug}>
                  <ProjectArt kind={slug} />
                  <div className="project-copy">
                  <span className="project-number">{String(index + 1).padStart(2, "0")} / {entry.stack.slice(0, 2).join(" · ")}</span>
                  <div className="profile-project-name">
                    <h3>{entry.name}</h3>
                  </div>
                  <p className="project-descriptor">{entry.descriptor}</p>
                  <p className="project-explanation">{entry.summary}</p>
                  {entry.highlights && (
                    <ul className="project-highlights">
                      {entry.highlights.map((item) => (
                        <li key={item.label}><strong>{item.label}</strong><span>{item.detail}</span></li>
                      ))}
                    </ul>
                  )}
                  <div className="profile-stack">{entry.stack.slice(0, 5).map(tag => <span key={tag}>{tag}</span>)}</div>
                  <Links entry={entry} />
                  </div>
                </article>,
              ]
            : [];
        })}
      </div>
      {archive.length > 0 && (
        <div className="profile-more">
          <h3 className="archive-heading">More explorations <span>/{archive.length}</span></h3>
          {archive.map((entry) => (
            <article className="profile-project-row" key={entry.slug}>
              <h3>{entry.name}</h3>
              <p>{entry.summary}</p>
              <Links entry={entry} />
              <div className="profile-stack">
                {entry.stack.slice(0, 5).map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
