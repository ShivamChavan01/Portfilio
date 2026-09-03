import type { ReactNode } from "react";

/** Mono uppercase micro-label — the editorial "technical" layer. */
export function MonoLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-mono text-label font-medium uppercase text-ink-muted ${className}`}>
      {children}
    </span>
  );
}
