/**
 * AGENT F — Section 05 · Contact / footer (UX_AUDIT §2.6, DESIGN_SYSTEM §5.9,
 * CONTENT_STRATEGY §4 + §10). The close of the page: serif sign-off, a
 * low-friction contact ledger (EMAIL / GITHUB / LINKEDIN as mono text links),
 * and the mono colophon. No forms, no phone, no copy-to-clipboard, no icons —
 * the only glyph is ↗ via the ExternalLink primitive.
 */
import { ExternalLink } from "@/components/ui/external-link";
import { contact, sectionIntros, site } from "@/lib/data";

/**
 * Serif sign-off: the closing line's first sentence stands alone, so it is
 * reused verbatim as the one serif moment; the sans lead carries the rest.
 * Both are derived from contact.closing — the copy is rendered exactly once,
 * across two voices. Nothing hardcoded.
 */
const divider = contact.closing.indexOf(". ");
const signoff = divider === -1 ? contact.closing : contact.closing.slice(0, divider + 1);
const offer = divider === -1 ? "" : contact.closing.slice(divider + 2);

/** Display form of a stored URL: "https://github.com/x" → "github.com/x". */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "");
}

export default function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="border-t border-line">
      <div className="mx-auto max-w-page px-5 sm:px-6 lg:px-10">
        <div className="py-16 md:py-24 lg:py-28">
          {/* Header row — mirrors the numbered section-header pattern, built
              privately: SectionHeader renders a <section>, wrong inside a
              <footer> landmark. */}
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="col-span-4 lg:col-span-3">
              <p className="font-mono text-label font-medium uppercase text-ink-muted">
                <span aria-hidden="true">05 · </span>
                Contact
              </p>
            </div>
            <div className="col-span-4 mt-3 lg:col-span-8 lg:col-start-5 lg:mt-0">
              <h2 id="contact-heading" className="text-heading text-ink">
                Contact
              </h2>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-4 gap-8 lg:grid-cols-12 lg:gap-6">
            {/* Col A — the argument's last word: serif sign-off, closing offer,
                and the dry "no forms" one-liner. */}
            <div className="col-span-4 lg:col-span-5">
              <p className="font-display text-display text-ink">{signoff}</p>
              {offer ? (
                <p className="mt-4 max-w-[40ch] text-lead text-ink-2">{offer}</p>
              ) : null}
              <p className="mt-4 font-mono text-label font-medium uppercase text-ink-muted">
                {sectionIntros.contact}
              </p>
            </div>

            {/* Col B — contact ledger: mono key above mono value link (stacked
                so URLs never wrap mid-string). Rows hang from top rules; links
                carry a 44px tap target. */}
            <div className="col-span-4 lg:col-span-4">
              <dl>
                <div className="min-h-11 border-t border-line py-3">
                  <dt className="font-mono text-label font-medium uppercase text-ink-muted">
                    Email
                  </dt>
                  <dd className="mt-1 max-w-full">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex min-h-11 items-center font-mono text-meta text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="min-h-11 border-t border-line py-3">
                  <dt className="font-mono text-label font-medium uppercase text-ink-muted">
                    Phone
                  </dt>
                  <dd className="mt-1 max-w-full">
                    <a
                      href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                      className="inline-flex min-h-11 items-center font-mono text-meta text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="min-h-11 border-t border-line py-3">
                  <dt className="font-mono text-label font-medium uppercase text-ink-muted">
                    Resume
                  </dt>
                  <dd className="mt-1 max-w-full">
                    <ExternalLink href={site.resume} className="inline-flex min-h-11 items-center font-mono text-meta">
                      View resume
                    </ExternalLink>
                  </dd>
                </div>
                <div className="min-h-11 border-t border-line py-3">
                  <dt className="font-mono text-label font-medium uppercase text-ink-muted">
                    GitHub
                  </dt>
                  <dd className="mt-1 max-w-full">
                    <ExternalLink
                      href={site.links.github}
                      className="inline-flex min-h-11 items-center font-mono text-meta"
                    >
                      {displayUrl(site.links.github)}
                    </ExternalLink>
                  </dd>
                </div>
                <div className="min-h-11 border-t border-line py-3">
                  <dt className="font-mono text-label font-medium uppercase text-ink-muted">
                    LinkedIn
                  </dt>
                  <dd className="mt-1 max-w-full">
                    <ExternalLink
                      href={site.links.linkedin}
                      className="inline-flex min-h-11 items-center font-mono text-meta"
                    >
                      {displayUrl(site.links.linkedin)}
                    </ExternalLink>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Col C — the small print: mono facts, no tracking claims beyond
                the data's own build note. Left-aligned until lg. */}
            <div className="col-span-4 lg:col-span-3 lg:text-right">
              <p className="font-mono text-caption text-ink-muted">{contact.colophon}</p>
              <p className="mt-2 font-mono text-caption text-ink-muted">{contact.buildNote}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
