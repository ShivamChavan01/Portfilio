/**
 * Inline mono metric row: `6 platform integrations · SSRF protection · …`
 * The middot separators are decorative (aria-hidden).
 */
export function SpecRow({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <p className={`font-mono text-meta text-ink-muted ${className}`}>
      {items.map((item, i) => (
        <span key={item}>
          {i > 0 && (
            <span aria-hidden="true" className="mx-2 text-ink-faint">
              ·
            </span>
          )}
          {item}
        </span>
      ))}
    </p>
  );
}
