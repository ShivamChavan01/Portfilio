"use client";

/**
 * AGENT E — Expandable case-study panels (DESIGN_SYSTEM §5.6, UX_AUDIT §4.2).
 *
 * Full body text is rendered unconditionally on the server; collapsed bodies
 * are hidden with the `hidden` utility — never null-rendered — so crawlers
 * and no-JS readers always see the complete copy. Collapsed/expanded is a
 * display toggle only: height never animates; the open body gets a single
 * 200ms opacity + 4px-rise fade via the `animate-panel-in` utility.
 */

import { useEffect, useState } from "react";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { ExternalLink } from "@/components/ui/external-link";
import { MonoLabel } from "@/components/ui/mono-label";
import { SpecRow } from "@/components/ui/spec-row";

export default function CaseStudyPanels() {
  // Initial state: all collapsed on both server and client — no hydration
  // mismatch. Deep-link expansion happens in an effect after first render.
  const [openPanels, setOpenPanels] = useState<ReadonlySet<string>>(() => new Set<string>());

  useEffect(() => {
    const anchors = new Set(caseStudies.map((entry) => entry.anchor));
    const expandFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (!anchors.has(hash)) return;
      setOpenPanels((prev) => {
        if (prev.has(hash)) return prev;
        const next = new Set(prev);
        next.add(hash);
        return next;
      });
    };
    expandFromHash();
    // Also covers in-page deep links (e.g. the index's `Case study ↓` jump to
    // #case-study-strivo), which change the hash without a page load.
    window.addEventListener("hashchange", expandFromHash);
    return () => window.removeEventListener("hashchange", expandFromHash);
  }, []);

  const toggle = (anchor: string) => {
    setOpenPanels((prev) => {
      const next = new Set(prev);
      if (next.has(anchor)) {
        next.delete(anchor);
      } else {
        next.add(anchor);
      }
      return next;
    });
  };

  return (
    <div>
      {caseStudies.map((entry, i) => (
        <CaseStudyPanel
          key={entry.slug}
          entry={entry}
          index={String(i + 1).padStart(2, "0")}
          open={openPanels.has(entry.anchor)}
          last={i === caseStudies.length - 1}
          onToggle={() => toggle(entry.anchor)}
        />
      ))}
    </div>
  );
}

function CaseStudyPanel({
  entry,
  index,
  open,
  last,
  onToggle,
}: {
  entry: CaseStudy;
  index: string;
  open: boolean;
  last: boolean;
  onToggle: () => void;
}) {
  return (
    <div id={entry.anchor} className={`border-t border-line${last ? " border-b" : ""}`}>
      <button
        type="button"
        id={`${entry.anchor}-button`}
        aria-expanded={open}
        aria-controls={`${entry.anchor}-body`}
        onClick={onToggle}
        className="grid w-full grid-cols-4 items-baseline gap-x-4 py-5 text-left transition-colors duration-150 hover:bg-surface lg:grid-cols-12 lg:gap-x-6 lg:py-6"
      >
        <span aria-hidden="true" className="col-span-1 font-mono text-label text-ink-faint">
          {index}
        </span>
        <span className="col-span-2 lg:col-span-6">
          <span className="block text-subhead text-ink">{entry.project}</span>
          <span className="mt-1 block text-small text-ink-muted">{entry.teaser}</span>
        </span>
        <span className="hidden font-mono text-meta text-ink-muted lg:col-span-4 lg:block">
          {entry.stack}
        </span>
        <span
          aria-hidden="true"
          className="col-span-1 justify-self-end font-mono text-base leading-none text-ink-muted"
        >
          {open ? "–" : "+"}
        </span>
      </button>

      <div
        id={`${entry.anchor}-body`}
        role="region"
        aria-labelledby={`${entry.anchor}-button`}
        className={open ? "block" : "hidden"}
      >
        <div
          className={`grid grid-cols-4 gap-4 pb-8 lg:grid-cols-12 lg:gap-6${
            open ? " animate-panel-in" : ""
          }`}
        >
          <div className="col-span-4 lg:col-span-8 lg:col-start-5">
            <SpecRow items={[entry.stack, entry.year, entry.heroMetric]} />
            {entry.links.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {entry.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    href={link.href}
                    className="text-small font-medium"
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            ) : null}
            {entry.sections.map((section) => (
              <div key={section.label} className="mt-8">
                <MonoLabel>{section.label}</MonoLabel>
                <p className="mt-2 max-w-measure text-body text-ink-2">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
