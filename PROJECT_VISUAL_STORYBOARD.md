# Project Visual Storyboard

Visual direction for the five cinematic project stories. This is a creative-direction document only; it does not modify application code or authorize fabricated screenshots.

## Global direction

Each project occupies one scroll chapter with a sticky visual stage and a normal-flow text rail. Progress is normalized from `0.00` to `1.00`. The visual should always be understandable when frozen at any point, and the complete engineering explanation must remain available as text.

Shared visual language:

- near-black background, white type, restrained blue signal color;
- 1px rules, squared geometry, low-opacity grid/noise;
- transforms limited to perspective, translate, scale, rotation, opacity, and clip-path;
- no generic particles, invented dashboards, stock imagery, or decorative 3D objects;
- diagrams use labels and connectors that describe documented architecture, not implied implementation;
- reduced motion freezes each chapter at its clearest state and removes parallax/rotation.

The repository currently contains no verified project screenshots. The screenshot requirements below are therefore a collection gate, not permission to generate substitutes.

---

## 1. VoiceScope

### Story intention

Move from an opaque voice input into a trustworthy, testable analysis system. The visual arc is **signal → interpretation → verified product surface**.

### Opening visual — 0.00–0.22

- A dark field with a thin, low-contrast waveform/text-signal trace.
- A small framed product image enters at approximately `rotateY(-9deg) rotateZ(-1deg) scale(0.94)` and `opacity: 0.35`.
- Only the first portion of the frame is revealed through a vertical clip mask; it should feel like a system coming online, not a card appearing.
- Text rail introduces VoiceScope and its core statement.

### Mid-scroll transformation — 0.22–0.70

- The product frame straightens toward `rotateY(0deg) rotateZ(0deg)` and scales to `1.00`.
- A second verified screenshot crossfades in between `0.42–0.62`, with the first remaining as a dim offset layer rather than a carousel.
- A fine waveform texture shifts horizontally by less than one grid unit, tied to progress.
- A small annotation rail can reveal the documented pipeline: transcription / integrations / retrieval / analysis. Use only labels supported by the case study.
- At `0.58`, the frame receives a subtle blue edge highlight to mark the trust boundary, not a glow.

### Climax/final visual — 0.70–1.00

- The clearest verified screenshot is flat, centered, and fully readable at `scale(1.02)`.
- Secondary frame clips away, leaving one strong surface and three quiet evidence markers: `300+ tests`, `6 integrations`, `7-layer harness`.
- SSRF protection appears as a thin boundary line around the system, not as a security badge.
- At `0.90–1.00`, the waveform recedes and the product frame shifts up slightly to make room for the transition label.

### Atmosphere

Dark navy-black (`#071018`-like) with a barely visible horizontal waveform texture, one broad blue light field, and fine grain. The waveform must be static or progress-driven; never an autonomous audio visualizer.

### Transition into MCP Foundry

The final VoiceScope boundary line contracts into a single horizontal rule. That rule becomes the first connector in MCP Foundry’s pipeline. The navy atmosphere crossfades into neutral black over roughly 8% of the next chapter; no hard color jump.

### Required real screenshots

- VoiceScope overview/product surface, with source provenance.
- VoiceScope analysis or result surface, with source provenance.
- Explicit dimensions, alt text, and confirmation that screenshots reflect the current project.

If either screenshot cannot be supplied, do not draw a fake product frame. Use the honest system visualization below.

### SVG/CSS visuals without fabricated UI

- CSS waveform made from bounded bars or an SVG path.
- Two empty framed surfaces containing only labels such as `VOICE INPUT`, `TRANSCRIPTION`, and `ANALYSIS OUTPUT`.
- A seven-segment verification rail and six integration ticks based on the verified facts.
- No fake buttons, charts, user names, transcripts, or product controls.

### ASCII storyboard

```text
0.00                 0.22                 0.42                 0.70                 1.00
┌──────────────┐    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ faint signal │ -> │ clipped      │  -> │ frame        │  -> │ clear frame  │  -> │ evidence     │
│ + dark field │    │ product frame│     │ straightens  │     │ + 2nd image  │     │ + boundary   │
│              │    │ perspective  │     │ crossfade    │     │ waveform low │     │ contracts    │
└──────────────┘    └──────────────┘     └──────────────┘     └──────────────┘     └──────┬───────┘
                                                                                           │
                                                                                     MCP connector
```

---

## 2. MCP Foundry

### Story intention

Show an API becoming a verified MCP tool through a bounded repair loop. The visual arc is **specification → evaluation → repair → verification**.

### Opening visual — 0.00–0.18

- A six-node horizontal pipeline is present as faint outlines only.
- `OpenAPI` is the sole fully visible node; all other nodes are dim labels.
- A small signal line enters from the left and stops at the first node.

### Mid-scroll transformation — 0.18–0.72

- Reveal exact sequence, one node per progress band:
  - `0.18–0.30`: LLM description rewrite
  - `0.30–0.42`: live agent evaluation
  - `0.42–0.54`: auto repair
  - `0.54–0.66`: re-test
  - `0.66–0.72`: verified MCP tool
- Connectors draw via SVG stroke-dashoffset or clip-path.
- At `0.42–0.54`, show a small loop from `auto repair` back to `re-test`, with a `≤ 3 rounds` annotation. Do not imply an infinite loop.
- Four prompt-class ticks can appear beneath the evaluation node as supporting evidence.

### Climax/final visual — 0.72–1.00

- All six nodes are crisp, with the signal resting inside `verified MCP tool`.
- The repair loop remains visible but quiet, demonstrating bounded iteration.
- A single blue verification line runs under the full pipeline; no particle trail.
- At `0.94`, the pipeline compresses vertically into the top rule that will become Strivo’s dashboard frame.

### Atmosphere

Black with a technical drafting grid, small square node anchors, and a very low-opacity coordinate crosshair. Grid movement is less than 4px across the chapter and progress-bound.

### Transition into Strivo

The pipeline’s final verification line expands horizontally, then becomes the top edge of the Strivo frame. Neutral grid lines soften into a faint data-grid atmosphere.

### Required real screenshots

None required for the core story. A real MCP Foundry screenshot may be added only if it documents the current tool and is verified; it is optional, not a visual requirement.

### SVG/CSS visuals without fabricated UI

- Inline SVG nodes and connectors with exact labels.
- Dashed repair-loop connector and bounded-round annotation.
- CSS grid background and progress-driven signal line.
- Text alternative listing the same six stages in document order.

### ASCII storyboard

```text
0.00                 0.30                 0.54                 0.72                 1.00
[OpenAPI]  · · · ->  [OpenAPI] -> [rewrite] -> [evaluate] -> [repair]              ┐
                                                                                     │
                         faint nodes become solid as the signal advances            │
                                                                                     v
                                                           [re-test] -> [verified MCP tool]
                                                              ^          ────────────────┘
                                                              └── ≤ 3 repair rounds
```

---

## 3. Strivo

### Story intention

Bring the reader from service architecture into an operational product surface. The visual arc is **system foundation → dashboard proximity → stable operating picture**.

### Opening visual — 0.00–0.25

- A real Strivo dashboard screenshot, if supplied, sits in a bounded frame at `perspective(900px) rotateY(8deg) rotateX(2deg) scale(0.92)` and `opacity: 0.38`.
- Only a narrow horizontal band is visible at first; the text rail carries the context.
- A thin architecture footer reads `Angular → Micronaut / Java 21 → MongoDB / Change Streams`.

### Mid-scroll transformation — 0.25–0.70

- The dashboard moves toward the viewer, rotation reduces to zero, and the clip expands to full height.
- At `0.45`, add one restrained focus band around the primary verified workflow area. Do not invent labels or values; the band can be an abstract highlight if the screenshot’s semantics are unclear.
- At `0.58–0.70`, a second real screenshot may crossfade in if it shows a meaningful adjacent state. Never use a generic admin panel as a substitute.

### Climax/final visual — 0.70–1.00

- The clearest dashboard view is flat and legible, with no browser chrome unless it is part of the supplied evidence.
- Verified operational outcomes appear in the text rail or as plain annotations: `1,400+ tests`, `50+ gyms`, `10+ tenants`, `99% uptime`, and documented overhead/incident reduction.
- At `0.92`, the image stage dims slightly while the architecture footer remains, making the system boundary—not the screenshot—the handoff point.

### Atmosphere

Near-black graphite with an extremely faint data-grid and slow, sub-pixel horizontal drift. Use a cool slate-blue tint, no dashboard glow, and no floating data particles.

### Transition into Open Agent

The dashboard’s architecture footer separates into six short rules. Those rules become the six labeled branches of the Open Agent system graph. The slate atmosphere crossfades toward a cooler network black.

### Required real screenshots

- Current Strivo dashboard hero view.
- Optional second dashboard state only if it shows a documented, materially different workflow.
- Source provenance, dimensions, alt text, and confirmation that no private tenant/customer data is exposed.

If no screenshot is available, use the architecture plate below and do not imitate dashboard UI.

### SVG/CSS visuals without fabricated UI

- Layered architecture plate with Angular, Micronaut/Java 21, MongoDB, and Change Streams.
- Empty viewport frame with a label such as `STRIVO / OPERATIONAL SURFACE`, not fake charts or controls.
- Three tenant-isolation rails and a test/uptime evidence line, using only verified claims.

### ASCII storyboard

```text
0.00                 0.25                 0.45                 0.70                 1.00
┌──────────────┐    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│ architecture │ -> │ real image   │  -> │ image toward │  -> │ flat readable│  -> │ image dims;  │
│ footer first │    │ narrow band  │     │ viewer       │     │ dashboard    │     │ system handoff│
└──────┬───────┘    └──────────────┘     └──────────────┘     └──────┬───────┘     └──────┬───────┘
       │                                                             │                      │
       └──────── Angular → Micronaut → MongoDB → Change Streams ─────┘                      │
                                                                                     Open Agent branches
```

---

## 4. Open Agent

### Story intention

Make a multi-provider AI platform legible as a system, not as a collection of model logos. The visual arc is **request boundary → routing resilience → tools/retrieval → streamed, metered result**.

### Opening visual — 0.00–0.20

- A central `REQUEST` boundary appears with one input/output edge.
- The 25-LLM provider field is represented by a compact matrix of numbered/unnamed model slots, not logos or fabricated provider cards.
- Only the central request node and one route are fully visible.

### Mid-scroll transformation — 0.20–0.75

- Reveal layers in this order:
  - `0.20–0.36`: 25-model provider matrix and fallback route
  - `0.36–0.50`: RAG/retrieval branch
  - `0.50–0.62`: tool-calling branch
  - `0.62–0.70`: SSE stream returning to the request boundary
  - `0.70–0.75`: token-budget metering attached to the stream
- The fallback path activates only when the primary route is dimmed; do not animate random failures.
- Use a single moving blue line to indicate the active path and muted grey branches for available paths.

### Climax/final visual — 0.75–1.00

- The full graph is visible and settles into a clean topology: request at left, provider/fallback center, RAG/tools below, SSE and metering at right.
- The 25 slots become one quiet field behind the primary route so the architecture remains readable.
- At `0.93`, the metering line extends to the right edge and becomes AutoAce’s audio input baseline.

### Atmosphere

Deep black with a sparse network graph, tiny square anchors, and a low-opacity blue radial field around the active route. No starfield or generic particle cloud.

### Transition into AutoAce

The SSE/metering line is clipped into a horizontal waveform. The network nodes fade to zero while the waveform remains, creating a continuous handoff into the audio/DSP chapter.

### Required real screenshots

None required. A real Open Agent interface image is optional and must be verified; the architecture diagram is the primary visual because it communicates the system more honestly.

### SVG/CSS visuals without fabricated UI

- SVG graph with semantic labels: `25 LLMs`, `provider fallback`, `RAG`, `tool calling`, `SSE`, `token metering`.
- Numbered provider slots instead of invented vendor logos.
- Animated stroke-dashoffset for route reveal and a bounded fallback branch.
- Adjacent text alternative describing the same data flow.

### ASCII storyboard

```text
0.00                 0.36                 0.50                 0.70                 1.00
 [REQUEST]       [REQUEST]             [REQUEST]             [REQUEST]             [REQUEST]
     │               │                     │                     │                     │
     ·           25 LLMs              25 LLMs                25 LLMs               25 LLMs
                 primary ──┐          primary ──┐            primary ──┐           fallback
                 fallback  ┘          fallback  ┘            fallback  ┘           + RAG/tools
                                       ├─ RAG                 ├─ RAG                ├─ RAG
                                       └─ tools               └─ tools              └─ tools
                                                               ── SSE ──> metering ────┘
```

---

## 5. AutoAce

### Story intention

Translate audio processing into a clear, measured inference chain. The visual arc is **raw signal → gated signal → DSP/LLM interpretation → structured result**.

### Opening visual — 0.00–0.22

- A static, low-amplitude waveform enters from the left on a dark field.
- The `Audio` node is the only solid stage; downstream stages are outlined.
- A narrow scan window marks the current progress without pretending to show real-time audio.

### Mid-scroll transformation — 0.22–0.72

- Reveal exact stages in order:
  - `0.22–0.34`: VAD gate opens/closes over the waveform
  - `0.34–0.50`: DSP + LLM stage receives the gated segment
  - `0.50–0.62`: classification node resolves
  - `0.62–0.72`: structured result fields appear as labeled rows
- The waveform is clipped through the VAD gate; it must not become a random equalizer.
- Show only documented result structure, such as the verified nine-field detail, without inventing field names.

### Climax/final visual — 0.72–1.00

- The complete chain is flat and connected: `Audio → VAD → DSP + LLM → Classification → Result`.
- Three exact metrics appear as plain evidence typography: `< $0.001/min`, `85% field-match`, `830MB → 85MB`.
- The waveform settles into a thin baseline while the result block gains the highest contrast.
- At `0.94–1.00`, the result baseline stretches into the closing/footer rule.

### Atmosphere

Almost-black with a blue-grey waveform texture, a restrained horizontal scan line, and subtle grain. No neon spectrum, pulsing glow, or autonomous visualizer loop.

### Transition into the footer

The result block’s final baseline becomes the footer rule. The audio atmosphere fades to the site’s normal near-black background while the metrics remain visible long enough to read.

### Required real screenshots

None required. A real AutoAce result screenshot is optional only if it can be verified and contains no sensitive call data. The chain diagram is the canonical visual.

### SVG/CSS visuals without fabricated UI

- SVG waveform path and bounded scan window.
- Five labeled pipeline nodes and connectors.
- CSS clip-path VAD gate.
- Plain metric typography and an abstract result-field stack with labels only when verified.

### ASCII storyboard

```text
0.00                 0.34                 0.50                 0.62                 1.00
~ ~ ~ ~ ~        ~ ~ |VAD| ~         [DSP + LLM]          [CLASSIFY]             [RESULT]
   [Audio]  ->       [VAD]      ->         │          ->        │            ->  9 fields
      ·              gate                  │                    │                metrics
      ·          gated signal              └────────────────────┘                ────────┐
                                                                                         │
                                             < $0.001/min · 85% · 830MB → 85MB ─────────┘
```

---

## Scroll choreography summary

```text
VoiceScope  signal/product frame      → analysis/evidence       → boundary contracts
MCP Foundry OpenAPI node              → bounded repair loop     → verified tool line
Strivo      architecture footer      → real dashboard arrives  → system footer remains
Open Agent  request boundary          → provider/tools/stream   → metering line
AutoAce     raw waveform              → gated inference chain   → structured result/footer
```

The chapters should feel connected by rules, connectors, and baselines rather than by dramatic wipes. The reader should notice continuity first and animation second.

## Asset and approval gate

Before implementation, confirm whether verified VoiceScope and Strivo screenshots exist and can be committed safely. If not, approve the planned SVG/CSS fallbacks explicitly. No generated image, invented product UI, synthetic metric, or unverified architecture detail should enter the portfolio.
