import { ExternalLink } from "@/components/ui/external-link";
import type { SiteLink } from "@/lib/data";

/**
 * Shared micro-parts for the five Selected Work entry patterns (Agent B only).
 * Nothing here is a page-level primitive — keep shared primitives in components/ui/.
 */

/** Decorative mono row index — aria-hidden; the adjacent <h3> carries the name. */
export function EntryIndex({ index }: { index: string }) {
  return (
    <span aria-hidden="true" className="font-mono text-label text-ink-faint">
      {index}
    </span>
  );
}

/**
 * Explicit link cells — one destination per link (whole rows are never links:
 * entries carry multiple destinations). Mono uppercase per the site's metadata
 * voice; ↗ glyph, target="_blank" + rel="noopener noreferrer" come from ExternalLink.
 * `py-2 inline-block` keeps mobile tap heights at the required minimum.
 */
export function WorkLinks({
  links,
  className = "",
}: {
  links: readonly SiteLink[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-baseline gap-x-5 gap-y-1 ${className}`}>
      {links.map((link) => (
        <ExternalLink
          key={link.href}
          href={link.href}
          className="inline-block py-2 font-mono text-label font-medium uppercase"
        >
          {link.label}
        </ExternalLink>
      ))}
    </div>
  );
}
