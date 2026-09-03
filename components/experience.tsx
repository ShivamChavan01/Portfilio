/** AGENT C — Section 03, Experience (UX_AUDIT §2.4, DESIGN_SYSTEM §5.7). */
import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { education, experience, sectionIntros } from "@/lib/data";

/**
 * Key metrics set in text-ink for scannability. Substring patterns only —
 * the rendered copy itself always comes verbatim from lib/data.ts.
 */
const METRIC_PHRASES = [
  "50+ gyms and 10+ tenants",
  "1,400+ passing tests",
  "40% each",
  "99%+ uptime",
] as const;

const METRIC_PATTERN = new RegExp(
  `(${METRIC_PHRASES.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

/** Wrap the key metrics of a bullet in <strong>; all other text passes through. */
function renderBullet(text: string): ReactNode {
  return text.split(METRIC_PATTERN).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-medium text-ink">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default function Experience() {
  return (
    <SectionHeader id="experience" index="03" label="EXPERIENCE" heading="Experience">
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.experience}</p>

      {/* Hanging-date editorial timeline — no connector line, no dots. */}
      <ol className="mt-8 list-none lg:mt-10">
        <li className="border-t border-line py-6 lg:py-8">
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="col-span-4 lg:col-span-3">
              <p className="font-mono text-label font-medium uppercase text-ink-muted tabular-nums">
                {experience.dates}
              </p>
              {experience.current ? (
                <span className="mt-2 inline-block bg-accent-tint px-2 py-1 font-mono text-label font-medium uppercase text-accent">
                  CURRENT
                </span>
              ) : null}
            </div>

            <div className="col-span-4 lg:col-span-8 lg:col-start-5">
              <h3 className="text-subhead font-medium text-ink">{experience.role}</h3>
              <p className="mt-1 font-mono text-meta uppercase text-ink-muted tabular-nums">
                {experience.org} · {experience.platform} · {experience.location}
              </p>
              <p className="mt-4 max-w-measure text-body text-ink">{experience.framing}</p>
              <ul className="mt-4 list-none space-y-3">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-small text-ink-faint">
                      –
                    </span>
                    <p className="text-small text-ink-2">{renderBullet(bullet)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      </ol>

      {/* Education — quiet one-line record, hairline only. */}
      <div className="grid grid-cols-4 gap-4 border-t border-line py-4 lg:grid-cols-12 lg:gap-6">
        <p className="col-span-4 font-mono text-meta uppercase text-ink-muted lg:col-span-3">
          EDUCATION
        </p>
        <p className="col-span-4 font-mono text-meta text-ink-muted tabular-nums lg:col-span-8 lg:col-start-5">
          {education}
        </p>
      </div>
    </SectionHeader>
  );
}
