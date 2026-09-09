"use client";

/**
 * Expandable Selected Work rows.
 *
 * Collapsed: one-liner + first 4 tech chips + clickable "+N more" toggle.
 * Expanded: full summary + all tech chips + spec + links.
 * Full copy is always server-rendered and hidden with `hidden` (never
 * null-rendered) so crawlers and no-JS readers see everything.
 */

import { useState } from "react";
import { work, type WorkEntry } from "@/lib/data";

export default function WorkRows() {
  const [openRows, setOpenRows] = useState<ReadonlySet<string>>(() => new Set<string>());

  const toggle = (slug: string) => {
    setOpenRows((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  return (
    <ol className="mt-8 list-none lg:mt-10">
      {work.map((entry) => (
        <WorkRow
          key={entry.slug}
          entry={entry}
          open={openRows.has(entry.slug)}
          onToggle={() => toggle(entry.slug)}
        />
      ))}
    </ol>
  );
}

function WorkRow({
  entry,
  open,
  onToggle,
}: {
  entry: WorkEntry;
  open: boolean;
  onToggle: () => void;
}) {
  const hiddenCount = entry.stack.length - 4;
  const visibleStack = open ? entry.stack : entry.stack.slice(0, 4);

  return (
    <li key={entry.slug} className="border-t border-line py-6 lg:py-7">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-geist text-lg font-medium text-ink">{entry.name}</h3>
        {entry.current ? (
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.6875rem] font-medium uppercase text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-status" />
            Current
          </span>
        ) : null}
        <span
          aria-hidden="true"
          className="hidden h-1 w-1 rounded-full bg-ink-faint sm:block"
        />
        <span className="font-mono text-meta text-ink-faint">{entry.year}</span>
      </div>

      <p className="mt-2 max-w-measure text-body text-ink-2">{entry.descriptor}</p>

      {/* Full summary — collapsed bodies hidden, never null-rendered (SEO/no-JS safe) */}
      <div id={`work-${entry.slug}-body`} role="region" className={open ? "block" : "hidden"}>
        <p className={`mt-2 max-w-measure text-small text-ink-muted${open ? " animate-panel-in" : ""}`}>
          {entry.summary}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {visibleStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line px-2.5 py-0.5 font-mono text-meta text-ink-muted"
          >
            {tech}
          </span>
        ))}
        {!open && hiddenCount > 0 ? (
          <button
            type="button"
            onClick={onToggle}
            aria-expanded={open}
            aria-controls={`work-${entry.slug}-body`}
            className="min-h-11 rounded-full px-2 py-0.5 font-mono text-meta text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-hover md:min-h-0"
          >
            +{hiddenCount} more
          </button>
        ) : null}
      </div>

      <p className="mt-3 font-mono text-meta text-ink-muted">{entry.spec.join(" · ")}</p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        {entry.links.map((link) => (
          <a
            key={link.label}
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
        {entry.caseStudyHref ? (
          <a
            href={entry.caseStudyHref}
            className="inline-flex min-h-11 items-center text-small font-medium text-accent transition-colors duration-150 hover:text-accent-hover md:min-h-0 md:py-0.5"
          >
            Case study
            <span aria-hidden="true" className="ml-1">
              ↓
            </span>
          </a>
        ) : null}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`work-${entry.slug}-body`}
          className="inline-flex min-h-11 items-center text-small font-medium text-accent transition-colors duration-150 hover:text-accent-hover md:min-h-0 md:py-0.5"
        >
          {open ? "Show less" : "Show more"}
          <span aria-hidden="true" className="ml-1">
            {open ? "–" : "+"}
          </span>
        </button>
      </div>
    </li>
  );
}
