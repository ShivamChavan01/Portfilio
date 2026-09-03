/**
 * Section 01 · Selected Work — flat editorial rows per the research
 * consensus (9/12 minimalists, confirmed by trending-2026):
 * title + year + one-liner + tech chips + one hard metric + links.
 * Narrative depth lives in the Case Studies section below.
 */
import { SectionHeader } from "@/components/ui/section-header";
import { sectionIntros, work } from "@/lib/data";

export default function SelectedWork() {
  return (
    <SectionHeader
      id="work"
      index="01"
      label="SELECTED WORK"
      counter={`${work.length} PROJECTS`}
    >
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.work}</p>

      <ol className="mt-8 list-none lg:mt-10">
        {work.map((entry) => (
          <li key={entry.slug} className="border-t border-line py-6 lg:py-7">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-medium text-ink">{entry.name}</h3>
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

            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line px-2.5 py-0.5 font-mono text-meta text-ink-muted"
                >
                  {tech}
                </span>
              ))}
              {entry.stack.length > 4 ? (
                <span className="rounded-full px-1 py-0.5 font-mono text-meta text-ink-faint">
                  +{entry.stack.length - 4}
                </span>
              ) : null}
            </div>

            <p className="mt-3 font-mono text-meta text-ink-muted">
              {entry.spec.join(" · ")}
            </p>

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
            </div>
          </li>
        ))}
      </ol>
    </SectionHeader>
  );
}
