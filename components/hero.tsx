import { hero, site } from "@/lib/data";

/**
 * Hero — text-first per the research consensus, with a mono facts panel
 * filling the right column on desktop (the "quantified stat line" pattern
 * from 6/15 AI engineer portfolios). No CTA buttons, no photo, no chips.
 */

const HEADLINE = "I build production systems and AI infrastructure.";
const MARK = "production systems";

function renderHeadline(headline: string): React.ReactNode {
  const index = headline.indexOf(MARK);
  if (index === -1) return headline;
  return (
    <>
      {headline.slice(0, index)}
      <mark className="bg-accent/15 text-accent">{MARK}</mark>
      {headline.slice(index + MARK.length)}
    </>
  );
}

const SOCIALS = [
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "X", href: site.links.x, external: true },
  { label: "Email", href: `mailto:${site.email}`, external: false },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1iL4V8Xgu5MAHFp6fuh-EW8Q6fxM3L4Yo/view",
    external: true,
  },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-5 pb-16 pt-16 sm:px-6 md:pt-24 lg:px-10 lg:pb-20 lg:pt-32">
      <div className="grid max-w-none grid-cols-4 gap-4 animate-hero-entrance lg:grid-cols-12 lg:gap-6">
        <div className="col-span-4 lg:col-span-8">
          <p className="font-mono text-label font-medium uppercase text-ink-muted">
            {site.name} · {site.title}
          </p>
          <h1 className="mt-5 text-hero font-display text-ink">
            {renderHeadline(HEADLINE)}
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-ink-2">
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-status" />
              {site.location}
            </span>
            <span aria-hidden="true">·</span>
            <span>Currently building Strivo at Eazytag</span>
            <span aria-hidden="true">·</span>
            <span className="text-ink">Open to full-stack & AI engineering roles</span>
          </p>

          <p className="mt-4 max-w-[60ch] text-lead text-ink-2">
            I work across voice AI observability, multi-tenant SaaS, and LLM tooling, from React
            frontends to event-driven backend systems.
          </p>

          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-small">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-ink-2 transition-colors duration-150 hover:text-accent"
              >
                {social.label}
                {social.external ? <span aria-hidden="true" className="ml-0.5">↗</span> : null}
              </a>
            ))}
          </p>
        </div>

        <aside className="col-span-4 mt-10 lg:col-span-4 lg:mt-2" aria-label="Quick facts">
          <ul className="list-none">
            {hero.metaRail.map((fact) => (
              <li
                key={fact}
                className="border-t border-line py-3 font-mono text-label font-medium uppercase leading-relaxed text-ink-muted"
              >
                {fact}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
