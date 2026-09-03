import type { ReactNode } from "react";

/**
 * External link: names its destination, carries the ↗ glyph (aria-hidden),
 * always target="_blank" + rel="noopener noreferrer".
 */
export function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-0.5 align-super font-mono text-[0.75em]">
        ↗
      </span>
    </a>
  );
}

/** In-page anchor (smooth scroll): ↓ / → actions, no external glyph. */
export function InternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent ${className}`}
    >
      {children}
    </a>
  );
}
