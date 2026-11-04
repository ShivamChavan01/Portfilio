import type { ReactNode } from "react";
export function SectionHeader({
  id,
  label,
  counter,
  children,
}: {
  id: string;
  index: string;
  label: string;
  counter?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="profile-page profile-section"
    >
      <div className="profile-section-title">
        <h2 id={`${id}-heading`}>
          {id === "case-studies" ? "engineering notes" : label.toLowerCase()}
        </h2>
        {counter && (
          <span className="profile-counter">
            /{counter.split(" ")[0].padStart(2, "0")}
          </span>
        )}
      </div>
      {children}
    </section>
  );
}
