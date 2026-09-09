"use client";

/**
 * Expandable case-study panels as rounded cards.
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
import { VideoEmbed } from "@/components/ui/video-embed";

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
    <div className="divide-y divide-line border-t border-line border-b">
      {caseStudies.map((entry, i) => (
        <CaseStudyPanel
          key={entry.slug}
          entry={entry}
          index={String(i + 1).padStart(2, "0")}
          open={openPanels.has(entry.anchor)}
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
  onToggle,
}: {
  entry: CaseStudy;
  index: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div id={entry.anchor} className="border-t border-line">
      <button
        type="button"
        id={`${entry.anchor}-button`}
        aria-expanded={open}
        aria-controls={`${entry.anchor}-body`}
        onClick={onToggle}
        className="flex w-full items-start gap-4 py-5 text-left lg:py-6"
      >
        <span aria-hidden="true" className="mt-1 font-mono text-label text-ink-faint">
          {index}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-geist text-lg font-medium text-ink">{entry.project}</span>
          <span className="mt-1 block text-small text-ink-muted">{entry.teaser}</span>
        </span>
        <span
          aria-hidden="true"
          className="mt-0.5 shrink-0 font-mono text-base leading-none text-ink-muted"
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
        <div className={`pb-8${open ? " animate-panel-in" : ""}`}>
          <div className="border-t border-line pt-5">
            <SpecRow items={[entry.stack, entry.year, entry.heroMetric]} className="break-all" />
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
            {entry.video ? (
              <div className="mt-5 max-w-2xl">
                <VideoEmbed id={entry.video.id} title={entry.video.label} />
              </div>
            ) : null}
            {entry.sections.map((section) => (
              <div key={section.label} className="mt-7">
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
