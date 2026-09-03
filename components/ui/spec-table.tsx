import type { ReactNode } from "react";

/**
 * Key-value spec sheet (mono key, sans value). Keys above values on mobile,
 * 160px key column from md up. Hairline between rows, no outer box.
 */
export function SpecTable({
  rows,
  className = "",
}: {
  rows: { key: string; value: ReactNode }[];
  className?: string;
}) {
  return (
    <dl className={className}>
      {rows.map((row) => (
        <div
          key={row.key}
          className="grid grid-cols-1 gap-1 border-t border-line py-3 md:grid-cols-[160px_1fr] md:gap-4"
        >
          <dt className="font-mono text-label font-medium uppercase text-ink-muted">{row.key}</dt>
          <dd className="text-small text-ink-2">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
