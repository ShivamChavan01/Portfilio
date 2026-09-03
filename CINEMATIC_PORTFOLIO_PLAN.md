# Cinematic Portfolio Plan

## 1. Current-state audit

The portfolio is a Next.js 15 / React 19 / TypeScript application using Tailwind CSS 4 and a small set of focused components. The page is composed from `Hero`, `Intro`, `SelectedWork`, `CaseStudies`, `Experience`, `OpenSource`, and `Footer` sections. Project and case-study content lives in `lib/data.ts` and `lib/case-studies.ts`.

The existing visual system is already a strong foundation:

- near-black editorial surfaces, white typography, blue accent, thin rules, and generous whitespace;
- engineering-first copy with verified claims in `docs/FACTS.md`;
- restrained component shapes and no decorative UI that competes with the writing;
- a small, deliberate motion budget and reduced-motion handling in `app/globals.css`.

There is currently no `public/` asset library, no verified project screenshots in the repository, and no animation package. The existing design documents also prohibit generic particles, looping ambient backgrounds, parallax, WebGL, and scroll-triggered reveals. This plan intentionally revises that constraint only for a carefully bounded cinematic layer; implementation must update the relevant design documentation when the new motion system is approved.

The current dependency surface is sufficient. CSS transforms, `position: sticky`, `IntersectionObserver`, and a small client-side scroll-progress controller are preferable to adding a large animation or WebGL dependency.

## 2. Product direction

### Goal

Make scrolling feel like moving through an engineering narrative: the content remains the primary artifact, while a project visual changes state as the reader advances through its explanation.

### Non-goals

- No generic developer-template treatment, dashboard-card grid, or animation showcase.
- No giant 3D hero object, WebGL scene, stock imagery, AI-generated product screenshots, rainbow gradients, or aggressive neon.
- No fabricated project functionality, metrics, screenshots, or architecture claims.
- No autoplay carousel that is unrelated to scroll position.
- No animation that hides content or makes the page unusable without JavaScript.

### Design principles

1. **Editorial first:** typography, writing, hierarchy, and whitespace remain unchanged unless a layout change directly improves the story.
2. **One visual idea per project:** each project gets a distinct but quiet visual language.
3. **Motion has meaning:** every transform communicates entry, progression, architecture, scale, or verification.
4. **Subtle by default:** low contrast, short travel distances, restrained opacity, and no persistent glow.
5. **Progressive enhancement:** the static document is complete first; cinematic choreography enhances it.
6. **Evidence over decoration:** real screenshots are used only when supplied and verified; otherwise use honest CSS/SVG diagrams.

## 3. Proposed page architecture

Keep the current top-level page order and add a single cinematic storytelling layer to Selected Work:

1. **Hero:** existing positioning — “I build production systems and AI infrastructure.” Add a low-opacity grid/light field and a thin scroll-progress indicator.
2. **Intro:** unchanged editorial statement. It establishes context before the first visual sequence.
3. **Selected Work:** replace the five ordinary project treatments with five `ProjectStory` sequences. Each sequence contains a text rail and a sticky visual stage.
4. **Case Studies:** retain the existing expandable long-form case studies. A project story can link to its corresponding case-study anchor; it should not duplicate the full essay.
5. **Experience / Open Source / Footer:** unchanged except for shared atmosphere and the resume/contact treatment already present.

Each `ProjectStory` should be a tall, self-contained scroll region (approximately 180–260vh on desktop, tuned after testing). Inside it:

- the left column remains readable and can contain title, thesis, stack, verified metrics, and links;
- the right column is `position: sticky` with a bounded visual stage;
- normalized progress (`0..1`) drives visual state, not arbitrary timers;
- the text remains in normal document flow and remains fully accessible if all motion is disabled.

Use a shared `ScrollStory` controller rather than five bespoke scroll handlers. Prefer `IntersectionObserver` to activate/deactivate nearby stories and a passive scroll listener scheduled through `requestAnimationFrame` only while an active story is in view. Do not read layout and write styles in the same loop; cache section bounds and write CSS custom properties for transforms.

## 4. Component and style changes

### Add

- `components/cinematic/scroll-story.tsx`: client-side progress orchestration, activation, reduced-motion branch, and CSS-variable output.
- `components/cinematic/project-story.tsx`: reusable two-column story shell with semantic headings, metadata, links, and sticky stage.
- `components/cinematic/project-visual.tsx`: visual switchboard for the five project treatments.
- `components/cinematic/atmosphere.tsx`: shared low-opacity grid/noise/light-field layer with project theme variables.
- `components/cinematic/diagrams.tsx`: accessible inline SVG/CSS diagrams for pipelines and system graphs.

### Modify

- `components/selected-work.tsx`: render the five stories from a typed project-story configuration instead of ordinary cards.
- `app/globals.css`: add scoped cinematic variables, perspective utilities, stage clipping, grain/grid layers, and reduced-motion overrides.
- `app/page.tsx`: preserve section order and anchors; add the shared atmosphere/progress layer at the page boundary.
- `lib/data.ts` / `lib/case-studies.ts`: reuse current verified content only. In particular, keep Strivo’s current Angular, Java 21, Micronaut, MongoDB, and Change Streams facts.
- `docs/DESIGN_SYSTEM.md` and `docs/PORTFOLIO_IMPLEMENTATION_PLAN.md`: document the approved motion exception and its budgets after implementation is accepted.

Avoid introducing Framer Motion, GSAP, Three.js, or another large runtime dependency unless profiling demonstrates that native CSS/observers cannot meet the interaction requirements.

## 5. Project story treatments

The text rail for every project follows the same rhythm: eyebrow / title / one-sentence thesis / stack / verified metrics / links. Visual treatments differ so the page feels authored rather than templated.

### VoiceScope — constrained product frame

- Use real VoiceScope screenshots only if they are supplied and can be traced to the project. Suggested later filenames: `public/projects/voicescope/overview.webp` and `public/projects/voicescope/analysis.webp`.
- Start with a slightly rotated, clipped product frame at low opacity; straighten and scale it toward the reader as progress advances.
- Crossfade a second verified screenshot only during the middle portion of the sequence; add a very faint audio-wave texture behind it, never over it.
- The text should surface the verified 300+ tests, six integrations, SSRF protection, and seven-layer harness without turning metrics into badges.
- Fallback when no screenshot exists: an abstract, labeled transcript/analysis frame built from CSS and text, explicitly presented as a system visualization rather than a product screenshot.

### MCP Foundry — repair pipeline

- Build an inline SVG pipeline with the exact sequence: OpenAPI → LLM description rewrite → live agent evaluation → auto repair → re-test → verified MCP tool.
- Reveal one node and connector at a time with progress-driven clip-path/opacity. Use a single restrained blue signal moving through the pipeline; do not add particle effects.
- The diagram must have a text alternative and remain fully visible in the no-motion state.
- Keep the up-to-three repair rounds and four prompt classes as verified supporting details; do not imply success beyond the documented behavior.

### Strivo — actual dashboard stage

- Use an actual Strivo dashboard capture only when the user supplies or commits it. Do not invent a dashboard image or functionality.
- Begin with a modest perspective rotation and a small scale reduction. Progress moves it toward a flat, readable frame, then introduces two or three quiet UI highlight bands.
- The visual atmosphere can use a faint data-grid texture, but all dashboard data shown must be real or clearly marked as illustrative.
- Text should use the verified 1,400+ tests, 50+ gyms, 10+ tenants, 99% uptime, and reduced overhead/incidents claims from the source of truth.
- Fallback: an honest CSS/SVG architecture plate focused on Angular → Micronaut/Java 21 → MongoDB/Change Streams.

### Open Agent — model/provider graph

- Create an accessible system diagram for 25 LLMs, provider fallback, RAG, tool calling, SSE, and token metering.
- Reveal the graph in layers: request boundary, model/provider routing, retrieval/tools, streaming, and metering. Use line drawing/clip-path and a quiet moving focus line tied to progress.
- Keep the architecture diagram schematic; it must not imply providers or flows not present in the verified case study.
- Fallback is the primary treatment because no source image exists: use SVG nodes and labels, not fake UI screenshots.

### AutoAce — audio/DSP chain

- Build a waveform-inspired stage around the exact chain: Audio → VAD → DSP + LLM → Classification → Result.
- Use a static waveform plus a progress-driven scan window or clip mask; no random audio visualizer loop.
- Present only the verified metrics: `< $0.001/min`, `85% field-match`, and `830MB → 85MB`. Keep the nine-field result detail in the text rail if useful.
- Fallback is expected: an SVG/DSP diagram is more truthful than an invented call-center screenshot.

## 6. Asset strategy and verification gate

The repository currently has no project image assets. Before implementation, collect only assets that can be verified by the user or source repository:

- VoiceScope screenshots, if available;
- an actual Strivo dashboard screenshot, if available;
- any additional MCP Foundry/Open Agent/AutoAce screenshots that represent the current projects.

Add optimized WebP/AVIF files under `public/projects/<slug>/`, with explicit dimensions, descriptive alt text, and lazy loading for below-the-fold images. Do not use stock images or generated screenshots. If an asset is unavailable, use the planned CSS/SVG visual fallback and label it as a system visualization. This keeps the story complete without manufacturing evidence.

## 7. Motion and atmosphere system

- Shared variables: `--story-progress`, `--story-x`, `--story-rotate`, `--story-scale`, `--story-opacity`, and `--story-clip`.
- Use `transform: translate3d(...) scale(...) rotate(...)` and `opacity` for choreography; avoid animating layout properties.
- Use `clip-path` for masked reveals only on bounded visual layers. Keep text readable throughout.
- `position: sticky` stages should have a clear fallback when sticky is unsupported or when the viewport is short.
- Atmosphere consists of a very low-opacity grain texture (CSS/noise asset if needed), a technical grid, and a broad radial light field. Theme changes interpolate through CSS variables; never hard-switch the page background.
- Keep atmosphere behind content with `pointer-events: none`, no interaction traps, and no high-frequency canvas loop.
- Use CSS transitions for non-scroll state changes. Scroll-linked values must be deterministic and pause when the story is outside the active viewport.

## 8. Mobile behavior

Do not remove the cinematic layer on mobile. Collapse each story to a single column with the visual before or beside the text, depending on reading order. Use shorter story regions (roughly 120–170vh), smaller perspective, fewer layers, and less simultaneous choreography. Keep image crossfades and diagram reveals, but reduce travel distance and atmosphere opacity. Verify at 320px, 375px, and 430px widths, including landscape/short-height viewports.

## 9. Accessibility and reduced motion

- Respect `prefers-reduced-motion: reduce` at both CSS and controller level.
- In reduced motion, remove scroll choreography, perspective, rotation, parallax, and looping atmosphere; retain a simple opacity transition or fully static visual.
- All project titles, claims, metrics, technologies, and links must exist as semantic HTML outside the visual layer.
- SVG diagrams need accessible labels or adjacent text alternatives. Do not encode essential meaning by color alone.
- Maintain keyboard focus visibility, contrast, skip-link behavior, and sensible reading order when the sticky stage changes.
- Test with keyboard-only navigation, VoiceOver/NVDA, zoom at 200%, and reduced-motion settings.

## 10. Performance and QA budgets

Target budgets for the cinematic version:

- no new large animation runtime dependency;
- no more than one active scroll-progress loop at a time;
- transforms/opacity only in the hot path; no forced synchronous layout in scroll handling;
- lazy-load below-fold images and keep each project image optimized;
- no console errors, hydration warnings, or inaccessible focus traps;
- preserve strong Core Web Vitals and compare a production build before/after the visual layer.

Verification sequence:

1. `npm run build` and the existing CI workflow.
2. Browser QA at desktop and mobile widths, with screenshots at hero, each project midpoint, and footer.
3. Check scroll progress when jumping via anchors, refreshing mid-page, resizing, and using a short viewport.
4. Test reduced motion, keyboard navigation, screen-reader labels, 200% zoom, and no-JavaScript/content fallback.
5. Inspect console/network for image failures, hydration issues, excessive requests, and long tasks.

## 11. Implementation phases

### Phase 0 — approval and assets

Confirm this direction, resolve the asset gate, and identify which real screenshots can be committed. No implementation should begin until fabricated-visual risk is cleared.

### Phase 1 — shared foundation

Add the typed story model, semantic `ProjectStory` shell, atmosphere variables, progress indicator, and reduced-motion/static fallback. Validate that the page remains readable before adding project-specific visuals.

### Phase 2 — visual treatments

Implement MCP Foundry, Open Agent, and AutoAce SVG/CSS diagrams first because they do not depend on unavailable screenshots. Add VoiceScope and Strivo image stages only after verified assets are present.

### Phase 3 — responsive and polish

Tune progression ranges, mobile simplifications, background interpolation, image loading, and focus/alt text. Remove any motion that reads as decorative or distracts from the engineering copy.

### Phase 4 — verification and documentation

Run the full QA sequence, compare performance against the current site, update design docs, and only then consider deployment.

## 12. Acceptance criteria

- The homepage still reads as a minimal engineering portfolio with the same core copy and hierarchy.
- Each of the five projects has a distinct scroll-linked visual story, not a standard card.
- VoiceScope and Strivo use real assets only when verified; missing assets fall back to honest diagrams.
- MCP Foundry, Open Agent, and AutoAce communicate their documented architectures visually and progressively.
- Atmospheres are subtle, smooth, and never compete with text.
- Mobile retains meaningful but reduced choreography.
- Reduced-motion users receive a complete static/fade experience.
- Build, CI, browser QA, accessibility checks, and performance checks pass with no fabricated claims or screenshots.

## 13. Explicit implementation boundary

This document is the complete planning deliverable for now. Do not modify implementation files, add dependencies, generate imagery, or deploy the cinematic version until the plan is approved and the required real assets (especially VoiceScope and Strivo) are supplied or explicitly waived in favor of the documented CSS/SVG fallbacks.
