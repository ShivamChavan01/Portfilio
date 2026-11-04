"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { caseStudies, type CaseStudy, type CaseStudySection } from "@/lib/case-studies";
import { ExternalLink } from "@/components/ui/external-link";
import { VideoEmbed } from "@/components/ui/video-embed";

const sectionTitles: Record<CaseStudySection["label"], string> = {
  CONTEXT: "The problem",
  ARCHITECTURE: "Implementation",
  "ENGINEERING CHALLENGE": "The hard part",
  DECISIONS: "Trade-offs",
  RESULT: "Outcome & limits",
};

export default function CaseStudyPanels() {
  const [activeAnchor, setActiveAnchor] = useState(caseStudies[0]?.anchor);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    let frame: number | undefined;
    function selectFromHash() {
      const entry = caseStudies.find((item) => `#${item.anchor}` === window.location.hash);
      if (!entry) return;
      setActiveAnchor(entry.anchor);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.getElementById(entry.anchor)?.scrollIntoView({ block: "start" });
      });
    }
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => {
      window.removeEventListener("hashchange", selectFromHash);
      if (frame !== undefined) window.cancelAnimationFrame(frame);
    };
  }, []);

  function select(entry: CaseStudy) {
    setActiveAnchor(entry.anchor);
    window.history.replaceState(window.history.state, "", `#${entry.anchor}`);
  }

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (index + 1) % caseStudies.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (index - 1 + caseStudies.length) % caseStudies.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = caseStudies.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    const entry = caseStudies[next];
    if (!entry) return;
    select(entry);
    tabs.current[next]?.focus({ preventScroll: true });
    tabs.current[next]?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  return (
    <div className="engineering-notebook">
      <div className="notebook-index">
        <p className="notebook-index-label">Contents</p>
        <div className="notebook-tabs" role="tablist" aria-label="Engineering projects">
          {caseStudies.map((entry, index) => (
            <button
              key={entry.slug}
              ref={(node) => { tabs.current[index] = node; }}
              id={`${entry.anchor}-button`}
              type="button"
              role="tab"
              aria-selected={activeAnchor === entry.anchor}
              aria-controls={entry.anchor}
              tabIndex={activeAnchor === entry.anchor ? 0 : -1}
              onClick={() => select(entry)}
              onKeyDown={(event) => navigate(event, index)}
              className="notebook-tab"
            >
              <span className="notebook-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{entry.project}</strong><small>{entry.focus}</small></span>
            </button>
          ))}
        </div>
      </div>
      <div className="notebook-pages">
        {caseStudies.map((entry, index) => (
          <NotebookPage
            key={entry.slug}
            entry={entry}
            index={index + 1}
            active={activeAnchor === entry.anchor}
          />
        ))}
      </div>
    </div>
  );
}

function NotebookPage({ entry, index, active }: {
  entry: CaseStudy;
  index: number;
  active: boolean;
}) {
  return (
    <article
      id={entry.anchor}
      role="tabpanel"
      aria-labelledby={`${entry.anchor}-button`}
      hidden={!active}
      tabIndex={0}
      className="notebook-page"
    >
      <header className="notebook-page-header">
        <div className="notebook-meta"><span>Note {String(index).padStart(2, "0")} / {entry.focus}</span><span>{entry.year}</span></div>
        <h3>{entry.project}</h3>
        <p className="notebook-question">{entry.teaser}</p>
        <div className="notebook-links">
          {entry.links.map((link) => (
            <ExternalLink key={link.href} href={link.href}>{link.label}</ExternalLink>
          ))}
          <a href={`#${entry.anchor}`} aria-label={`Permalink to ${entry.project} engineering notes`}>Permalink ↗</a>
        </div>
      </header>
      <div className="notebook-decision">
        <p className="notebook-label">The decision</p>
        <p>{entry.decision}</p>
      </div>
      <section className="notebook-system" aria-label={`${entry.project} architecture overview`}>
        <p className="notebook-label">System path</p>
        <ol className="notebook-flow">
          {entry.flow.map((step, i) => (
            <li key={step.label}>
              <span className="notebook-node" aria-hidden="true">{i + 1}</span>
              <strong>{step.label}</strong>
              <span>{step.detail}</span>
            </li>
          ))}
        </ol>
      </section>
      <div id={`${entry.anchor}-body`} className="notebook-body">
        {entry.sections.map((section, i) => (
          <section key={section.label} aria-labelledby={`${entry.anchor}-section-${i}`}>
            <h4 id={`${entry.anchor}-section-${i}`}>{sectionTitles[section.label]}</h4>
            <p>{section.body}</p>
          </section>
        ))}
        <div className="notebook-stack"><span className="notebook-label">Built with</span><p>{entry.stack}</p></div>
        {entry.video && (
          <div className="notebook-video"><VideoEmbed id={entry.video.id} title={entry.video.label} /></div>
        )}
      </div>
    </article>
  );
}
