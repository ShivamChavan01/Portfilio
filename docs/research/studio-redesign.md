# Earlier studio concept

Branch: `redesign/portfolio-studio`.

This records the earlier wide layout. The current application uses the compact profile direction in `design/profile.html` and `design/profile.css`, following the user’s xevrion.dev reference. See `docs/ask-about-me.md` for the current AI integration and validation.

## Direction

Warm paper, charcoal, rust orange, generous spacing, a sans headline with italic serif emphasis, and original CSS/SVG project illustrations. Illustrations are labeled conceptual studies; they do not claim to be screenshots or live product telemetry. Project filters cover products, AI systems, and developer tools. Existing résumé, contact, calendar, theme, and case-study destinations remain accessible.

References reviewed on 2026-11-03:

- https://brittanychiang.com/ — clear identity, readable career evidence, accessible project links.
- https://rauno.me/ — attention to interaction and small visual details.
- https://paco.me/ — compact project descriptions and restrained typography.

The standalone full-page concept is `design/studio.html`; its stylesheet is shared with the application.

## Content sources

Existing `lib/data.ts`, `docs/FACTS.md`, and these public default-branch README files were reviewed through the GitHub connector:

- https://github.com/ShivamChavan01/cutroom — added the browser editor prototype, versioned editing, conflict review, persistence, and export limitations.
- https://github.com/ShivamChavan01/vectorshift-pipeline-builder — added the assessment project, config-driven nodes, dynamic inputs, and DAG validation.
- https://github.com/ShivamChavan01/voiceScope — refreshed transcription options to Deepgram/Gemini/Whisper and used conservative validation wording. README layer counts are inconsistent, so no new count is claimed.
- https://github.com/ShivamChavan01/MCP_Foundry — confirmed the generate/evaluate/repair flow.
- https://github.com/ShivamChavan01/opencode-terminal — confirmed persistent terminal/process tooling.

Existing employment and contribution figures are retained from the repository's fact base. This redesign does not establish fresh production benchmarks or independently validate each linked application's reliability.

## Verification

Run `npm run typecheck` and `npm run build`. Stop `next dev` before building because both write `.next`.

Run `npm test` for Node-based rendering and content tests using the existing TypeScript and React dependencies. Tests cover project filtering, empty collections, unknown categories, deep-link integrity, illustrations, navigation, contact details, lazy calendar markup, and case-study controls.

Browser verification was stopped at the user's request. Responsive appearance and browser interaction checks remain unverified. No Playwright dependency was added.
