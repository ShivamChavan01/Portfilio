import type { ReactNode } from "react";
import { hero } from "@/lib/data";
import { ExternalLink } from "@/components/ui/external-link";

/**
 * Hero — region 00 (unnumbered). Serif thesis statement, mono meta rail,
 * one primary CTA plus plain-text secondary links. The hero entrance
 * (250ms fade + rise, disabled under prefers-reduced-motion) is applied
 * to the statement block only; nothing else on the page animates in.
 */

/** The single italic word permitted in a display statement (design system §1.2). */
const ITALIC_WORD = "production";

function renderHeadline(headline: string): ReactNode {
  const index = headline.indexOf(ITALIC_WORD);
  if (index === -1) return headline;
  return (
    <>
      {headline.slice(0, index)}
      <em className="italic">{ITALIC_WORD}</em>
      {headline.slice(index + ITALIC_WORD.length)}
    </>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-page px-5 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-10 lg:pt-32">
      <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
        <div className="col-span-4 animate-hero-entrance lg:col-span-9">
          <p className="mb-4 font-mono text-label font-medium uppercase text-ink-muted">
            {hero.eyebrow}
          </p>
          <h1 className="text-hero font-display text-ink">{renderHeadline(hero.headline)}</h1>
          <p className="mt-6 max-w-[56ch] text-lead text-ink-2">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex h-11 items-center border border-ink bg-ink px-5 text-small font-medium text-bg transition-colors duration-150 hover:border-ink-hover hover:bg-ink-hover active:translate-y-px"
            >
              {hero.ctaPrimary.label}
            </a>
            {hero.ctaSecondary.map((link) =>
              link.href.startsWith("mailto:") ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 items-center text-small font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
                >
                  {link.label}
                </a>
              ) : (
                <ExternalLink
                  key={link.label}
                  href={link.href}
                  className="inline-flex h-11 items-center text-small font-medium"
                >
                  {link.label}
                </ExternalLink>
              ),
            )}
          </div>
        </div>
        <ul className="col-span-4 mt-10 lg:col-span-3 lg:col-start-10 lg:mt-0">
          {hero.metaRail.map((item) => (
            <li
              key={item}
              className="border-t border-line py-3 font-mono text-label font-medium uppercase text-ink-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
