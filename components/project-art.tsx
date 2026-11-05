import type { CSSProperties } from "react";

export type ArtKind = "cutroom" | "open-agent" | "voicescope" | "strivo" | "mcp-foundry";

export function WorkbenchVisual({ kind }: { kind: ArtKind }) {
  return (
    <svg
      className="bench-visual"
      viewBox="0 0 150 55"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {kind === "cutroom" ? (
        <>
          <path d="M12 33H135M42 33V12H100V33" />
          {[12, 42, 100, 135].map((x) => (
            <circle key={x} cx={x} cy="33" r="4" fill="currentColor" />
          ))}
          <circle cx="72" cy="12" r="4" fill="currentColor" />
        </>
      ) : kind === "open-agent" ? (
        <>
          <rect x="7" y="16" width="35" height="24" rx="4" />
          <rect x="108" y="5" width="35" height="19" rx="4" />
          <rect x="108" y="32" width="35" height="19" rx="4" />
          <path d="M42 28H77M77 28V14H108M77 28V42H108" />
          <circle cx="77" cy="28" r="4" fill="currentColor" />
        </>
      ) : kind === "voicescope" ? (
        <path
          d="M5 28H15L18 21L23 38L28 12L33 45L38 18L43 36L48 25L53 28H64L68 16L73 40L78 7L83 48L88 17L93 35L98 24L103 28H145"
          strokeWidth="1.5"
        />
      ) : kind === "strivo" ? (
        <>
          <rect x="16" y="10" width="118" height="38" rx="3" />
          <path d="M16 21H134M55 21V48M94 21V48" />
          {[23, 62, 101].map((x) => (
            <rect
              key={x}
              x={x}
              y="27"
              width="25"
              height="13"
              rx="2"
              fill="currentColor"
              opacity=".4"
            />
          ))}
        </>
      ) : (
        <>
          <rect x="6" y="16" width="35" height="23" rx="3" />
          <rect x="58" y="16" width="35" height="23" rx="3" />
          <rect x="110" y="16" width="35" height="23" rx="3" />
          <path d="M41 28H58M93 28H110M128 40V48H75V40" />
        </>
      )}
    </svg>
  );
}

const captions: Record<ArtKind, string> = {
  cutroom: "Explore. Compare. Merge.",
  "open-agent": "Context. Tools. Control.",
  voicescope: "Listen closer.",
  strivo: "Keep the everyday running.",
  "mcp-foundry": "Generate. Evaluate. Repair.",
};

export function ProjectArt({ kind }: { kind: ArtKind }) {
  return (
    <div className={`project-art project-art-${kind}`} aria-hidden="true">
      <span className="project-art-label studio-label">{captions[kind]}</span>
      <div className={`art-window ${kind === "strivo" ? "strivo-art" : ""}`}>
        <div className="art-window-bar">
          <span>
            {kind} /{" "}
            {kind === "cutroom"
              ? "motion study"
              : kind === "voicescope"
                ? "analysis pipeline"
                : kind === "strivo"
                  ? "class bookings"
                  : kind === "open-agent"
                    ? "project-scoped assistants"
                    : "proof loop"}
          </span>
          <span>↗</span>
        </div>
        <div className="art-window-body">
          {kind === "cutroom" ? (
            <>
              <div className="cutroom-preview">
                <div className="cutroom-frame" />
                <div className="preview-caption">
                  A different cut.
                  <br />
                  The same starting point.
                </div>
              </div>
              <div className="timeline-ruler">
                <span>00:00</span>
                <span>00:02</span>
                <span>00:04</span>
                <span>00:06</span>
              </div>
              <div className="timeline-track">
                {["opening", "middle", "ending"].map((name, i) => (
                  <span
                    key={name}
                    style={
                      { width: `${[35, 27, 36][i]}%` } satisfies CSSProperties
                    }
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="timeline-track audio">
                <span style={{ width: "100%" }} />
              </div>
            </>
          ) : kind === "open-agent" ? (
            <div className="agent-architecture">
              <div className="agent-project"><span>PROJECT WORKSPACE</span><strong>Prompt + knowledge base</strong></div>
              <span className="agent-connector">↓</span>
              <div className="agent-capabilities"><span>Document search</span><span>Calculator</span><span>Web search</span></div>
              <span className="agent-connector">↓</span>
              <div className="agent-provider"><strong>Model provider</strong><span>Fallback · streamed responses</span></div>
              <p>Project access · token budgets · bounded tools</p>
            </div>
          ) : kind === "voicescope" ? (
            <>
              <svg className="voice-waveform" viewBox="0 0 300 75">
                <path
                  d="M0 38H20L25 29L30 50L35 20L40 62L45 9L50 68L55 25L60 47L65 32L70 38H100L105 23L110 52L115 13L120 63L125 6L130 70L135 20L140 56L145 28L150 45L155 33L160 38H200L205 24L210 51L215 15L220 62L225 28L230 47L235 36H300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="voice-pipeline">
                <span>Transcribe</span>→<span>Analyze</span>→
                <span>Validate</span>
              </div>
              <div className="voice-footnote">
                <span>Policy-grounded analysis</span>
                <span>Human review ↗</span>
              </div>
            </>
          ) : kind === "strivo" ? (
            <>
              <div className="booking-heading">
                <span>One place for every booking.</span>
                <span>Weekly view</span>
              </div>
              <div className="booking-grid">
                {[
                  "",
                  "MON",
                  "TUE",
                  "WED",
                  "08",
                  "Yoga",
                  "",
                  "Strength",
                  "09",
                  "",
                  "Mobility",
                  "",
                  "10",
                  "Strength",
                  "",
                  "Yoga",
                ].map((text, i) => (
                  <span
                    key={i}
                    className={
                      text === "Yoga" || text === "Mobility"
                        ? "booked"
                        : text === "Strength"
                          ? "confirmed"
                          : ""
                    }
                  >
                    {text}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <div className="foundry-flow">
              <div className="foundry-input">{`{ } OpenAPI specification`}</div>
              <span>↓</span>
              <div className="foundry-steps">
                <span>Generate</span>→<span>Evaluate</span>→
                <span>Register</span>
              </div>
              <div className="foundry-repair">↳ Repair & re-evaluate ↲</div>
            </div>
          )}
        </div>
      </div>
      <span className="project-art-corner">
        CONCEPTUAL{" "}
        {kind === "cutroom" || kind === "strivo" ? "INTERFACE" : "PIPELINE"}{" "}
        STUDY ↗
      </span>
    </div>
  );
}
