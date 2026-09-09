/** Section 03, Experience — hanging-date editorial timeline row. */
import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/section-header";
import { education, experience, sectionIntros } from "@/lib/data";

const METRIC_PHRASES = ["100+ gyms and 60+ tenants"] as const;

const METRIC_PATTERN = new RegExp(
  `(${METRIC_PHRASES.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
  "g",
);

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
    <SectionHeader id="experience" index="03" label="EXPERIENCE">
      <p className="max-w-measure text-lead text-ink-2">{sectionIntros.experience}</p>

      <ol className="mt-8 list-none lg:mt-10">
        <li className="border-t border-line py-6 lg:py-8">
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="col-span-4 lg:col-span-3">
              <p className="font-mono text-label font-medium uppercase text-ink-muted tabular-nums">
                {experience.dates}
              </p>
              {experience.current ? (
                <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-label font-medium uppercase text-accent">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-status" />
                  Current
                </span>
              ) : null}
            </div>

            <div className="col-span-4 lg:col-span-9">
              <h3 className="text-lg font-medium text-ink">{experience.role}</h3>
              <p className="mt-1 font-mono text-meta uppercase text-ink-muted">
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

        <li className="grid grid-cols-4 gap-4 border-t border-line py-5 lg:grid-cols-12 lg:gap-6">
          <p className="col-span-4 font-mono text-label font-medium uppercase text-ink-muted lg:col-span-3">
            Education
          </p>
          <p className="col-span-4 font-mono text-meta text-ink-muted tabular-nums lg:col-span-9">
            {education}
          </p>
        </li>
      </ol>
    </SectionHeader>
  );
}
