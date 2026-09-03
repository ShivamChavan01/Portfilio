# UX AUDIT & INFORMATION ARCHITECTURE — Shivam Chavan Portfolio

> **Role of this document:** UX critic brief. Part 1 is the anti-pattern audit — the "default developer portfolio" this site must visibly NOT be. Parts 2–7 architect the single-page experience: section order, reading flow, interaction spec, per-project layout patterns, accessibility floor, and the acceptance checklist.
> **Single factual source:** `docs/FACTS.md`. Nothing below invents a project, metric, employer, date, or link.
> **Companion docs:** `docs/DESIGN_SYSTEM.md` (tokens, type, color) and `docs/CONTENT_STRATEGY.md` (final copy). This document defines *structure and behavior*; it defers to the design system on visual values and to the content strategy on words. Deltas between them are flagged explicitly in §2.9.

---

## Part 1 — Anti-pattern audit: what this site must NOT be

The default developer portfolio is a recognizable artifact: dark mode, gradient hero, badge wall, three equal cards, skill bars, "passionate" copy. Every item below is a **tell** that the site is a template wearing a name. For each: why it fails a premium read, and the specific pattern THIS site uses instead. This table is a review checklist — any single hit is a defect.

### 1.1 The audit table

| # | Generic tell | Why it fails here | The pattern on THIS site |
|---|---|---|---|
| A1 | **Gradient heroes, mesh backgrounds, glow blobs, particle fields** (the purple-to-blue canvas every AI portfolio ships) | Decoration signals "I style, I don't build." A production engineer's credibility comes from evidence density, not ambient glow. Also the single most saturated cliché in the AI-portfolio niche — it makes an AI-infrastructure engineer look like every AI landing page | Warm paper background, zero gradients anywhere. The hero is a 96px serif statement plus a mono meta rail. The only color is one deep signal green (`#0F7B4F`) used on interaction states, covering under ~5% of visible pixels |
| A2 | **Glassmorphism, frosted panels, shadows, neon borders** | Imitates consumer marketing sites; reads as trend-chasing, and blurs text over busy backgrounds fails contrast | Opaque paper, hairline 1px rules, radius 0, zero shadows (design system §4). Depth = paper → recessed → surface, nothing else |
| A3 | **Skill bars, percentage rings, radar charts, "90% Python"** | Self-assessed percentages are unfalsifiable and every recruiter skips them. They also compress a real skill set (Python, Java 17, Spring Boot, Kafka, pgvector) into toy gauges | Capabilities are asserted **inside project narratives with evidence attached**: "1,400+ passing tests" proves Java/backend rigor; "$0.003/min cost ceiling, measured under $0.001" proves LLM cost engineering. Stack appears as mono metadata in each project's spec row — never as a standalone skills exhibit |
| A4 | **Logo walls / tech-marquee strips ("Technologies I work with": 20 gray logos)** | Nobody believes logo familiarity. It is filler with zero information, and brand logos violate the site's text-first system | Each project names its own stack, verbatim, in mono: `React · Java 17 · Spring Boot · MongoDB · Kafka`. The stack list is *scoped to the thing it built* — which is more credible than a wall of 20 logos |
| A5 | **Uniform 3-card grids ("My Projects", six identical rounded cards with thumbnail/title/buttons)** | Identical repeated modules are the template signature. They flatten differences: VoiceScope (open source, 6 integrations) and AutoAce (a cost-engineering result) are not the same shape of story | An editorial index with **five entries in five descending treatments** (dossier → ledger → field report → index card → footnote row, §5). No two adjacent entries share a layout. Rows, not cards — the row is the unit, hung from hairline rules |
| A6 | **"Passionate about crafting seamless digital experiences"** |stock enthusiasm copy is the fastest credibility killer for an engineer whose brand is dry production accountability | First-person, verb-first, dry: "I optimize for systems that still work in production on a bad day." The banned-words list in CONTENT_STRATEGY §11 (passionate, crafting, seamless, cutting-edge, robust, leverage…) is enforced verbatim. No exclamation marks anywhere |
| A7 | **Fake or inflated metrics ("100+ projects", "10x engineer", "500K users", rounded vanity numbers)** | One invented number poisons every real one. This person's actual numbers are strong; inflation is both dishonest and unnecessary | Every number on the site is copied verbatim from FACTS.md with its unit and direction: `300+ tests`, `−60% flaky CI`, `830MB → 85MB`, `85% vs 55%`, `< $0.001/min vs $0.003 ceiling`. Project count is exactly five; open source count is exactly four. No "20+ projects" aggregate. Phone number never appears (resume-only per FACTS) |
| A8 | **Animation excess: scroll-triggered reveals on every block, typewriter hero text, count-up counters, parallax, cursor followers, marquees, looping backgrounds** | Motion without informational content reads as concealment — decoration distracting from thin content. It also ages badly and breaks reduced-motion users | Exactly one entrance (hero fade-up, 250ms) plus instant state feedback (hover color/border, 1–2px transforms, panel fade). No scroll listeners, no reveal-on-scroll, no counters, no typewriter. Under `prefers-reduced-motion`, everything is immediate (design system §6.4) |
| A9 | **Dashboard feel: KPI stat tiles, gauge widgets, sidebar+content admin layout, "GitHub streak" embed cards** | SaaS-admin aesthetics scream "template" and put decoration between the reader and the work. GitHub stat widgets are README embeds, not portfolio content | Editorial journal structure: numbered hanging labels (`01 · SELECTED WORK`), asymmetric 12-col grid, spec-sheet key/value tables (§5.5 of design system). Metrics live in mono spec rows inline with the projects that earned them — not aggregated into tiles |
| A10 | **Badge soup: shields.io build badges, "MERN stack" icon rows, certification ribbons** | Badges are README furniture. They demonstrate tooling familiarity, not judgment | No badges. The equivalent information — CI, test counts, uptime — appears as prose with evidence ("300+ tests gate the build in GitHub Actions") |
| A11 | **Emoji, decorative icon rows, animated social buttons** | Emoji in a technical portfolio undercuts the production-engineer register instantly; icon-only socials hide destinations from screen readers and recruiters alike | Zero emoji, zero brand icons. Socials are mono text links that name their destination — `GitHub ↗`, `LinkedIn ↗`, `shivamrc189@gmail.com` — in a real contact section (§2, section 05), not an icon row floating in a corner |
| A12 | **Template tells: "Hi, I'm X 👋", "My Journey" dotted timeline, "What I Do" three-column services, "Download CV" hero button, "Made with ❤", visitor counter, testimonial carousel, "Blog (coming soon)"** | Each is an instantly recognizable theme artifact. Any one of them collapses the premium pretense | Hero opens with the serif thesis statement, not a greeting. Experience is a hanging-date editorial timeline with no dots or connector line. There is no CV download (no such asset in FACTS — the site *is* the evidence), no testimonials (none exist in FACTS — inventing quotes is a firing offense), no blog placeholder, no services grid. Footer colophon is mono facts: `© 2026 SHIVAM CHAVAN · BENGALURU, IN · NEXT.JS + TAILWIND — NO TRACKING` |
| A13 | **Fake AI theater: chatbot widget, "AI-powered portfolio" copy, sparkles, generated-sounding About text** | Ironic failure mode for an AI-infrastructure engineer: LLM cosplay instead of LLM systems. Also adds runtime cost, layout risk, and zero hiring signal | The AI credibility is carried by the artifacts themselves: VoiceScope, MCP Foundry, Open Agent, AutoAce — each with verified links and a case study. No chat widget, no "powered by AI" claims about the site itself |
| A14 | **Autoplaying demo videos, carousels, lightbox galleries, browser-chrome screenshot mockups** | Autoplay burns visitor data and attention; carousels hide content behind interaction; fake Safari chrome around screenshots reads as marketing, not engineering | At most two real screenshots per project (actual product UI, radius 0, hairline border, lazy-loaded with dimensions). MCP Foundry and supabase-lingo demos are *linked* YouTube destinations (`Demo ↗`), never embedded autoplay. No galleries, no lightbox |
| A15 | **Dark-mode-default neon developer aesthetic** (near-black bg, saturated green/purple accents, glow) | It is the default setting of the entire category. It photographs badly, prints badly, and signals defaults-chosen rather than decisions-made | **UPDATED (user request):** light "paper" remains the default; a dark "warm ink" scheme is now offered via the nav toggle (no neon, same hairline system, no `dark:` utility classes — token re-mapping only). The default is still a decision, not a default setting |
| A16 | **Centered everything, symmetric splits, rounded-everything** | Centered layouts are the free template default; symmetric 50/50 splits waste the editorial grid and flatten hierarchy | Left-weighted asymmetric grid: hanging 3-col label gutter, content at cols 5–12, one off-balance hero (design system §3.4). Radius 0 everywhere |

### 1.2 Instant-rejection smell test

A reviewer should be able to reject the shipped site if **any** of the following is true:

1. Any pixel of gradient, glow, blur, particle, or glass anywhere in the DOM/CSS.
2. Any `box-shadow` or `border-radius > 0` utility in shipped CSS.
3. Any animation triggered by scroll position, or any animation lasting > 250ms that is not a hover/press state or the hero entrance.
4. Any icon library, brand logo, emoji, or badge image loaded.
5. Any number on the page that cannot be found verbatim in FACTS.md.
6. Any of the banned words from CONTENT_STRATEGY §11, or any exclamation mark.
7. Two or more visually identical content blocks side by side anywhere on the page.
8. A standalone "Skills" section with bars/tags/charts, or a standalone "Tech stack" logo area.
9. The phone number `[redacted]` appearing anywhere.
10. A link labeled "check it out", "learn more", "see more" — or any link whose href is not in FACTS.md.

---

## Part 2 — Information architecture (single page, editorial order)

### 2.0 Page-level model

One route (`/`), six numbered regions, read top to bottom as a journal: **contents (hero) → featured work → case study appendix → employment record → public contributions → contact**. Every region except the hero opens with the numbered mono eyebrow pattern (`01 · SELECTED WORK`) over a full-width hairline. Anchor ids: `#work`, `#case-studies` (with per-panel ids `#case-study-voicescope`, `#case-study-mcp-foundry`, `#case-study-strivo`), `#experience`, `#open-source`, `#contact`.

Rationale for the two-step work structure (index → case studies): the index is the table of contents; the case studies are the chapters. Merging them (expanding long deep-dives inline in the index) was rejected because three 300-word case studies inserted mid-index would bury Experience and Open Source below a scroll wall and destroy the skim path. Separating them keeps the index fast and makes the case-study region deep-linkable (`#case-study-strivo` — the anchor CONTENT_STRATEGY §5.3 already depends on).

### 2.1 Section 00 — Hero / Intro (unnumbered)

- **Purpose:** State the thesis, the person, and the three proof domains within one viewport; hand the reader their next step.
- **Reader question answered:** "Who is this, what do they build, and is it worth scrolling?"
- **Content inventory (FACTS only):** Name `Shivam Chavan`; title `Full Stack Engineer`; location `Bengaluru, India`; H1 thesis from CONTENT_STRATEGY Option A ("I build production systems and AI infrastructure."); sub-headline naming voice AI observability, multi-tenant SaaS, LLM tooling; current role `Currently building Strivo at Eazytag, on-call weekly with client engineering teams`; CTAs `View selected work` (in-page) + `shivamrc189@gmail.com` (mailto) + `GitHub ↗`. Optional right meta rail (mono, from design system §3.4 hero archetype): `BENGALURU, INDIA`, `FULL STACK ENGINEER`, `FOCUS: AGENTIC AI · VOICE AI · MULTI-TENANT SAAS`, `CARRIER LANGUAGES: PYTHON · JAVA 17 · TYPESCRIPT`. Below the hero statement, the 87-word first-person intro (CONTENT_STRATEGY §3) capped at 65ch, optionally followed by the five engineering-principles lines (CONTENT_STRATEGY §9) as a compact numbered mono list — this converts "about me" into "how I work" without adding a separate section.
- **Hierarchy:** Primary. This is one of only two places serif display type appears at full size.
- **Explicit exclusions:** No availability badge (`OPEN TO NEW WORK` is unconfirmed in FACTS — use neutral `BENGALURU, INDIA` unless Shivam confirms); no portrait requirement; no CTA buttons beyond one primary; no greeting ("Hi, I'm…").

### 2.2 Section 01 — Selected Work (`#work`)

- **Purpose:** The proof core. Five systems, each with an honest one-line descriptor, a summary, a mono stack row, a mono spec row, and verified links.
- **Reader question answered:** "What has this person actually built, end to end, and can I click it?"
- **Content inventory (FACTS only), display order:** 1. VoiceScope (open source voice AI observability; GitHub + Live; 300+ tests, 6 platform integrations, SSRF protection, 7-layer validation harness; Jun–Jul 2026). 2. MCP Foundry (self-verifying OpenAPI-to-MCP generator, OpenAI Build Week; GitHub + Demo; Jul 2026). 3. Strivo / Eazytag (multi-tenant gym SaaS; in-page case-study link only — no external URL exists in FACTS; 10/2025–Present). 4. Open Agent (yellow.ai take-home multi-tenant chatbot platform; GitHub + Live; 25 LLMs, 120+ tests). 5. AutoAce (call-audio classifier; Live only — no GitHub link exists in FACTS; 85% vs 55%, <$0.001/min vs $0.003 ceiling, 830MB → 85MB).
- **Order rationale:** Lead with the most ambitious self-directed, publicly verifiable artifact (VoiceScope: open source, live, integrated). Strivo sits third as the production-employment proof, pointing down-page to its case study. AutoAce closes as a footnote-row — its numbers are the story, so it needs the least furniture.
- **Hierarchy treatment:** Primary section; descending visual weight across the five entries (layout patterns in Part 5). The section header carries the mono counter `5 PROJECTS`.
- **Interaction:** Entries 1, 2, 4, 5 are link rows (whole row or explicit link cells, `↗`). Entry 3 (Strivo) has no external destination: its affordance is `Case study ↓` → smooth-scroll to `#case-study-strivo` and auto-expand it. Never render a fake disabled link.

### 2.3 Section 02 — Case Studies (`#case-studies`)

- **Purpose:** The depth layer — the only place the site argues *how* the work was done, in the author's own structural voice.
- **Reader question answered:** "Does this person make engineering decisions, or just stack technologies?"
- **Content inventory (FACTS only):** Three expandable panels — VoiceScope, MCP Foundry, Strivo — each with the five-part mono-eyebrow spine: `CONTEXT / ARCHITECTURE / ENGINEERING CHALLENGE / DECISIONS / RESULT` (copy is final in CONTENT_STRATEGY §6). Each panel also carries its spec-sheet table (stack, year, links, hero metric) and its real links.
- **Default state:** All three collapsed. Rationale: the section must be skippable — a skimmer scrolling from index to Experience should pass a compact, quiet region, not a wall of prose. The first panel may default open **only** if arrival was via a direct hash link to that panel.
- **Hierarchy treatment:** Secondary on skim, primary on read. Panel headers are index-styled rows (`+` glyph, mono index, subhead title, stack meta); expanded bodies use the 2/3+1/3 split (narrative + spec aside) at 65ch measure.
- **Affordance details:** in Part 4, §4.2.

### 2.4 Section 03 — Experience (`#experience`)

- **Purpose:** The employment record — one role, owned end to end, with the on-call accountability that differentiates this person from project-only portfolios.
- **Reader question answered:** "Is this real production work with real users, and what happened when it broke?"
- **Content inventory (FACTS only):** Single primary timeline entry: `Full Stack Developer — Eazytag (Strivo SaaS Platform) · 10/2025 – Present · Bengaluru, India`, framing line, and the four verb-led bullets (50+ gyms / 10+ tenants; 1,400+ passing tests; health scoring engine, −40% overhead and −40% incidents each; 99%+ uptime with WhatsApp/PDF/GST retry logic; weekly on-call). `CURRENT` tag in accent tint marks the live role. Below it, one quiet secondary row for education: `08/2020 – 06/2023 · B.E. ELECTRONICS AND COMMUNICATION · BIET, DAVANGERE · CGPA 7.5` — present as a one-line mono record, not a decorated entry.
- **Hierarchy treatment:** Primary for recruiters, visually quieter than Selected Work. Hanging-date editorial timeline (date in left gutter, content right), hairline-separated, no dots, no connector line.
- **Deliberate redundancy with Strivo:** the Selected Work Strivo entry is metric-forward and points to the case study; this section is role-and-accountability-forward. The two must not repeat the same sentences.

### 2.5 Section 04 — Open Source (`#open-source`)

- **Purpose:** Evidence of working inside other people's codebases and standards-bearing organizations — the trust layer.
- **Reader question answered:** "Can they work in unfamiliar, reviewed, real-world code — not just greenfield solo repos?"
- **Content inventory (FACTS only):** Four ledger entries, each 1–2 sentences + mono metadata row + only-verified links: Eclipse JKube (Eclipse Foundation, 05/2024–03/2025, 15+ modules, TDD, −60% flaky CI, +30% delivery, PRs reviewed by Principal Engineer Marc Nuri; org link). OpenMetadata (Roles entity search, PR #27602, Ant Design Select typeahead; Greenplum + Databricks investigations; PR link + org link). Jira CI/CD Status Panel (Forge plugin, real-time CI/CD status inside Jira issues; **Won the Atlassian ForgeQuest Hackathon** — rendered as the site's single `WINNER` accent tag, no link, no invented prize details). supabase-lingo (npm package, PostgreSQL event-driven translation pipeline, Lingo.dev Hackathon; YouTube demo link only).
- **Hierarchy treatment:** Secondary, ledger rhythm: consistent compact rows, visually calmer than Selected Work by design — this section should feel like the journal's citations page. The `WINNER` tag is the only accent-tinted element here.

### 2.6 Section 05 — Footer / Contact (`#contact`)

- **Purpose:** A real contact section — the close of the argument and the lowest-friction path to email.
- **Reader question answered:** "How do I reach this person, and is the site itself credible down to the small print?"
- **Content inventory (FACTS only):** Closing line ("I build production systems and take the on-call for them…"), email as plain mono text `shivamrc189@gmail.com` (mailto), `GitHub ↗`, `LinkedIn ↗` (canonical `https://www.linkedin.com/in/ShivamChavan01`), colophon `© 2026 SHIVAM CHAVAN · FULL STACK ENGINEER · BENGALURU, INDIA · 2026` plus the build note `NEXT.JS + TAILWIND — NO TRACKING`. Serif sign-off statement in the first footer column per design system §5.9.
- **Hierarchy treatment:** Primary function, secondary visuals. No forms (the copy already says "No forms. Email is fastest."), no contact-modal, no copy-to-clipboard requirement (a small optional `COPY` affordance with a text "Copied" confirmation is permitted, not required).
- **Exclusions:** No phone number. No QR code. No third-party "book a call" embed.

### 2.7 Content deliberately absent (and why)

| Absent item | Reason |
|---|---|
| Skills section (bars/tags/clouds) | Anti-pattern A3; capabilities are embedded per-project |
| Testimonials | None exist in FACTS; inventing quotes is forbidden |
| Blog / writing | No writing samples in FACTS; a placeholder is worse than absence |
| Resume PDF download | No verified asset; the site itself is the evidence |
| Dark mode | Out of scope v1 (design system §2.1) |
| Availability/status widget | `OPEN TO NEW WORK` unconfirmed in FACTS |
| All projects beyond the five + four open source entries | Count inflation is an anti-pattern (A7); the real count is the count |
| AutoAce GitHub link, supabase-lingo npm/repo link, Jira plugin link | Not in FACTS; linking nothing is correct |

### 2.8 Navigation model

- **Desktop (≥640px):** five mono anchors in the sticky bar, index-prefixed: `01 WORK · 02 CASE STUDIES · 03 EXPERIENCE · 04 OPEN SOURCE · 05 CONTACT`, with scroll-spy active state (accent underline — the nav's only accent). Brand left: `Shivam Chavan — FULL STACK ENGINEER` (suffix lg-only).
- **Mobile (<640px):** same bar, truncated to the three anchors that fit at 320px: `01 WORK · 03 EXPERIENCE · 05 CONTACT`. No hamburger, no drawer (per design system §5.2) — the page is a single scroll; the nav is a convenience, not a table of contents. All sections remain reachable by scrolling.
- **Delta vs DESIGN_SYSTEM §5.2:** the shipped spec lists `WORK / ABOUT / CONTACT`. The IA folds About into the hero (§2.1), so `ABOUT` becomes a dead anchor. Update the design-system nav to the model above; until then, `ABOUT` must point to the hero intro, not to a missing section.

### 2.9 Deltas & conflicts register (for the other docs' owners)

1. **Nav links** — as in §2.8; DESIGN_SYSTEM §5.2 needs its link list amended.
2. **Expandable panel placement** — DESIGN_SYSTEM §5.6 says the panel is used "on the index page per project." This IA relocates the three case-study panels to section 02 (reasons in §2.0). The §5.6 component anatomy is reused unchanged for the section-02 panels; Selected Work rows instead use plain rows (§5.4) plus the `Case study ↓` affordance.
3. **Hero meta rail contents** — defined here (§2.1) as location / title / focus / carrier languages; design system §3.4 leaves the meta block contents open.

---

## Part 3 — Reading flow & hierarchy

### 3.1 The three readers

| Reader | Time | Path | What they must leave with |
|---|---|---|---|
| Recruiter (skim) | 10 seconds | Hero H1 → mono spec rows of Selected Work → Experience date/role → Contact email | Name, "Full Stack Engineer, Bengaluru", the five project names, one hard number per top project (300+ tests, 1,400+ tests, 25 LLMs), current employer Eazytag, an email |
| Engineer (scan) | 2 minutes | Skim path + index summaries + spec rows + open source rows + one case study expanded | Stack choices per project, the Strivo concurrency/test story, MCP Foundry's verify-before-register loop, Eclipse/Atlassian credentials |
| Hiring manager / staff engineer (read) | 10 minutes | Everything, including all three case studies and every link | The decision narratives: SSRF-first ingest, harness-that-measures-itself, correctness-under-concurrent-writes, cost-ceiling engineering — and evidence links that resolve |

### 3.2 The mono layer is a complete skim path

The defining hierarchy device: **all metadata (dates, stacks, metrics, indices, links) is mono; all narrative is sans; all argument is serif display.** Consequence to enforce: a reader who reads *only* the mono text — as if the sans/serif were redacted — must still learn who, where, what was built, with what, at what scale, since when, and how to make contact. This is a testable property (acceptance checklist item 1) and it is what makes the 10-second skim work without dumbing down the deep read.

### 3.3 Beat structure (how the page breathes)

The page alternates density on purpose; a uniform rhythm is the "wall of identical blocks" failure:

1. **Open (air):** hero — large type, generous top padding (128px desktop), almost no furniture.
2. **Dense spike:** Selected Work — the highest information density on the page; five descending treatments prevent row monotony.
3. **Quiet valley:** Case Studies collapsed — three slim rows; the page visibly exhales here so the reader *notices* the optional depth.
4. **Medium:** Experience — one entry plus a quiet education line; the `CURRENT` tag is the only heat.
5. **Calm ledger:** Open Source — four compact rows.
6. **Close:** Contact — short, declarative, generous bottom padding.

Vertical padding follows design system §3.5 (py-16 → py-24 → py-28 by breakpoint). Sections open with a full-width hairline; no double rules; content hangs from top rules, print-style.

### 3.4 Devices that prevent the clone-wall feel

- **Numbering as wayfinding:** `01–05` mono indices on sections and rows give the reader a constant positional sense ("I'm on 03 of 05") — the quiet version of a progress bar, without the progress bar (A3/A9 territory avoided).
- **One giant faint numeral per section** (optional, serif, `ink-faint`) — a wayfinding ornament, never per-entry (design system §5.3 allows one per section).
- **Hierarchy by scale, not by boxes:** one serif display statement per region at most; everything else steps down. If two blocks look equally loud, one of them is wrong.
- **Descended weight in the index:** entry 1 opens with a 2/3+1/3 split; entry 5 is a two-line row. The eye learns the pattern "important = tall," so relative importance is readable at a glance.
- **Whitespace before decoration:** when two things feel cramped, add padding — never a box, never a divider, never a background (design system §4.2 decision rule).

### 3.5 Where expandable case studies fit in flow

Collapsed panels sit between the index and Experience so that: (a) the skim path index→experience is uninterrupted; (b) the Strivo `Case study ↓` affordance from the index has a natural downward target; (c) a deep-linked reader (`/＃case-study-mcp-foundry` from a GitHub README, for instance) lands directly on an expanded, correctly scrolled panel. Expanded state pushes content below it down — acceptable and expected; nothing may overlay or float above the flow.

---

## Part 4 — Interaction & micro-UX specification

### 4.1 Navigation bar

- `sticky top-0 z-50`, h-16, opaque paper `bg-bg`, `border-b border-line`. Content scrolls under it; a shadow is forbidden.
- **Scroll-spy:** IntersectionObserver sets the active anchor; active = accent text + 2px accent underline. No sliding indicator, no animated pill.
- **Anchor scrolling:** `html { scroll-behavior: smooth }`, and every section id gets `scroll-margin-top: 5rem` (80px) so the sticky bar never covers the section's numbered eyebrow. Under reduced motion this becomes an instant jump (global kill-switch in design system §6.4).
- **Skip link:** "Skip to content" as the first focusable element, visually hidden until focused, landing on `<main>`.
- **Mobile:** the three short anchors (§2.8), each with ≥44px tap height (`py-3`), no drawer, no hamburger, no bottom tab bar.

### 4.2 Case-study expand/collapse

- **Control:** a full-width `<button aria-expanded="false" aria-controls="<panel-id>">` header row; the panel is a `<div role="region" aria-labelledby="<button-id>">`. The `+`/`–` glyph is `aria-hidden` (the button's accessible name already carries the state).
- **Behavior:** click/Enter/Space toggles; glyph swaps `+` → `–` instantly (no rotation, no morph). Panel content appears with a single 200ms opacity + 4px-rise fade; **never** animate height. Under reduced motion, content appears immediately.
- **Focus:** focus stays on the toggle button after toggling (it is the thing that changed). No focus trapping, no focus jumping into the panel.
- **Deep links:** on load with `#case-study-<name>` in the URL, that panel renders expanded and the browser's native hash scroll lands with the §4.1 scroll-margin. Panel ids are stable, lowercase, hyphenated.
- **Persistence:** none required (no localStorage); state resets on reload unless a hash says otherwise. Multiple panels may be open simultaneously; auto-closing others is not required and not forbidden — pick one and be consistent (recommendation: allow multiple, simplest and least surprising).
- **Skim safety:** a collapsed panel must communicate enough to be judged (title, stack meta, one-line context teaser) without expanding — a collapsed section that hides its own value gets skipped forever.

### 4.3 Links — external vs internal

- **External:** trailing `↗` glyph (text character, not SVG), `target="_blank"` + `rel="noopener noreferrer"`, label names the destination (`GitHub`, `Live`, `Demo`, `PR #27602`, `Organization`). Hover: text + glyph to accent. The glyph is `aria-hidden`; the accessible name is the label.
- **In-page:** `Case study ↓` (U+2193) from Strivo's index row; `View selected work` hero CTA; footer anchors. Smooth scroll, no SPA route change.
- **mailto:** plain text email in footer; `mailto:` on click. No obfuscation, no contact form, no JS clipboard dependency for the primary path (the optional COPY affordance is an enhancement only).
- **Link integrity:** all 13 external hrefs + 1 mailto must resolve to exactly the URLs in FACTS.md. Jira CI/CD Status Panel renders the `WINNER` tag and no link; AutoAce renders `Live ↗` only; supabase-lingo renders `Demo ↗` only.

### 4.4 Scroll behavior

- No scroll listeners beyond the nav scroll-spy. No reveal-on-scroll, no parallax, no scroll-jacking, no snap points, no back-to-top button (the footer is the end; the nav is always present).
- Long-page performance: case-study panel content is server-rendered in the DOM and visually collapsed (available without JS where feasible — progressive enhancement: `<noscript>` users and crawlers see full content; if the panel uses hidden-by-default rendering, crawlers must still index the full text).

### 4.5 Interactive vs static inventory

| Interactive (and only these) | Static (everything else) |
|---|---|
| Nav anchors; skip link | Hero type, meta rail, intro, principles list |
| Hero CTA; email/GitHub/LinkedIn links | All section headers/eyebrows; all index numerals |
| Work index rows / link cells (5 entries) | Spec-sheet tables; stack rows; spec rows |
| Case-study toggles (3) + in-panel links | Case-study prose; timeline entries; education row |
| All external links (13) | Footer colophon; WINNER tag; screenshots |
| Optional email COPY affordance | — |

Hover exists only where the thing is interactive. Static text must never respond to hover — a hovering paragraph is a broken affordance.

### 4.6 Motion budget (restated as UX law)

Total motion vocabulary of the entire site: hero entrance (once), hover/press/focus state transitions (≤200ms), panel fade (200ms). Nothing else. All of it is state feedback or first-paint orientation; none is ambient, looped, scroll-triggered, or decorative. `prefers-reduced-motion: reduce` disables all of it via the design-system global rule; the site must be 100% functional and information-complete with every transition at zero.

---

## Part 5 — Content presentation patterns per project (no two entries feel like clones)

Five entries, five treatments, descending weight. Each pattern has a named *defining element* so implementers can verify difference at a glance. Adjacent entries never share a pattern.

### Pattern A — "The Dossier" (VoiceScope, entry 01; also the template for expanded case-study bodies)

- **Defining element:** the 2/3 narrative + 1/3 spec-sheet split.
- **Structure (lg):** left 8 cols: serif-accented descriptor line ("Open source observability and regression-testing platform for voice AI agents."), summary prose at 65ch, role line, links row. Right 3 cols (col-start-10): spec-sheet table — `STACK` (mono list), `YEAR`, `STATUS: OPEN SOURCE · LIVE`, hero metric `300+ TESTS` optionally set in serif display, `GITHUB ↗`, `LIVE ↗`.
- **Use when:** the project is the flagship and has enough facts for a full spec sheet. Height: tallest entry.

### Pattern B — "The Pipeline Ledger" (MCP Foundry, entry 02)

- **Defining element:** the process rendered as a numbered mono step list — because the project *is* a pipeline.
- **Structure:** hanging left column (date `JUL 2026`, `OPENAI BUILD WEEK HACKATHON`, stack list, `GITHUB ↗`, `DEMO ↗`); right column: one-paragraph summary, then the five stages as a numbered list with mono step indices: `01 PARSE any OpenAPI spec` → `02 REWRITE ambiguous descriptions (LLM)` → `03 EVALUATE against a live agent on an isolated Prism mock` → `04 AUTO-REPAIR failing tools, up to 3 rounds, 4 prompt classes` → `05 REGISTER into Codex's MCP config with a pass/fail scorecard`.
- **Use when:** the system has a legible sequence of stages. This is the only entry permitted to use a numbered process list — that restriction is what keeps it distinct from Pattern A.

### Pattern C — "The Field Report" (Strivo, entry 03)

- **Defining element:** the production-metrics strip on top — the entry leads with proof, not prose.
- **Structure:** full-width; first line is the mono spec row in larger treatment: `1,400+ TESTS · 50+ GYMS · 10+ TENANTS · 99%+ UPTIME · −40% OVERHEAD & INCIDENTS`; then two short prose paragraphs (what Strivo runs; what he owns); then verb-led bullet lines (booking platform scope: slot scheduling, recurring series, waitlist promotion, biometric check-in, deduction/refund lifecycle, concurrent-write correctness); closing affordance `CASE STUDY ↓ → #case-study-strivo`. `CURRENT` mono tag with accent tint marks it as the live job. No external links (none exist in FACTS).
- **Use when:** the project is the employment proof; the redundancy with Experience is resolved by making this entry metric-led and Experience role-led.

### Pattern D — "The Index Card" (Open Agent, entry 04)

- **Defining element:** an index row that grew exactly two extra lines — no narrative paragraphs.
- **Structure:** one row: index `04`, title `Open Agent`, stack `Python · FastAPI · PostgreSQL · pgvector · React · TypeScript · Docker` (truncated to 3 + `+n` on mobile), year `TAKE-HOME`; below the row, one descriptor sentence ("Multi-tenant chatbot platform: 25 LLMs, tool calling, RAG, metering.") and one spec row `25 LLMS · 120+ TESTS · PROVIDER FALLBACK · TOKEN-BUDGET METERING`; links `GITHUB ↗ · LIVE ↗`.
- **Use when:** the project deserves full links but not full narrative; its story is told by the spec row.

### Pattern E — "The Footnote Row" (AutoAce, entry 05) — compact variant of D

- **Defining element:** the numbers are the entire entry; a two-line row with no sentence of prose.
- **Structure:** row: index `05`, title `AutoAce`, year `2026`; second line: the spec row is the story — `< $0.001/MIN VS $0.003 CEILING · 85% VS 55% · 830MB → 85MB · 9 FIELDS`; single link `LIVE ↗`.
- **Use when:** one verified link and a killer metric row exist; prose would only dilute it. Closing the index with the smallest entry creates the descending-weight rhythm (§3.4).

**Cross-pattern rules:** screenshots (max two per project, real product UI only) are permitted in Patterns A and C only — not in B, D, E — so imagery never becomes a repeating module. No pattern may appear twice in a row down the page. On mobile all five collapse gracefully toward D/E forms (stacked rows), which is correct: mobile weight differences compress; desktop differences express.

---

## Part 6 — Accessibility & responsiveness requirements

### 6.1 Breakpoint behavior (Tailwind defaults: sm 640 / md 768 / lg 1024 / xl 1280)

| Width | Verified requirements |
|---|---|
| **320px** (hard floor) | Zero horizontal overflow; `text-hero` (44px) wraps to ≥3 clean lines; Pattern A/C collapse to stacked single column; spec tables stack key-over-value; long mono URLs `break-all` inside value cells only; nav shows 3 anchors with ≥44px tap height; no word depends on hyphenation |
| **375 / 390px** (common phones) | Same as 320 plus: spec rows may show full stack lists; row second-lines don't truncate mid-metric — a metric row may wrap but never hides a number behind an ellipsis |
| **768px** (tablet) | 4-col grid engaged; footer may go 2-up; hanging labels still stack above content (never beside); case-study expanded bodies may use 2-up narrative+aside if ≥768 and readable, else stacked |
| **1024px** (lg gate) | 12-col grid engages; all asymmetric splits (hanging 3-col gutter, 8+3, hero 9+3) activate; scroll-spy eyebrow alignment with sticky nav verified |
| **≥1280px** | Container capped at 1200px, centered; all fluid clamps at ceiling (hero 96px); whitespace grows, not type |

Testing matrix: every section inspected at 320, 375, 390, 768, 1024, 1440. Fluid text only via the four `clamp()` roles in the design system; no other viewport-scaling technique.

### 6.2 Touch & pointer

- Minimum interactive target 44×44px (nav links `py-3`; work rows full-height; toggle buttons full-width rows). Targets separated by ≥8px; whole-row links must not nest conflicting targets (one link per row region — no "row is a link" wrapping a second inner link; use link cells instead where two destinations exist).
- Hover-dependent information is forbidden: every hover state's content is visible without hover (the `↗` glyphs and labels are always present; hover only restyles them).

### 6.3 Contrast & color

- Body text `ink-2` 9.4:1; muted labels `ink-muted` 5.1:1 (AA); accent 5.0:1 as text. `ink-faint` (~2.9:1) is restricted to decorative giant numerals and disabled states — never meaningful text.
- Meaning is never color-only: the `WINNER` tag pairs tint with the word itself; the `CURRENT` tag pairs tint with text; the `+`/`–` toggle glyph carries state redundantly with `aria-expanded`.
- Focus: global `:focus-visible` 2px accent ring, offset 2px, on every interactive element including whole-row links and toggle buttons. `outline: none` nowhere in the codebase.

### 6.4 Semantic HTML expectations

- One `<h1>` (hero thesis). Each section: `<section aria-labelledby>` with `<h2>` (`SELECTED WORK` etc. as visible headings); project names are `<h3>` inside their sections. No heading skips, no div-as-heading.
- Landmarks: `<header>` (nav), `<main>`, `<footer>`; skip link to `<main>`.
- Work index as a list of articles (`<article>` per entry) — not a `<table>` (rows are heterogeneous heights); spec sheets as `<dl>` or real `<table>` (they are key-value data); timeline as an ordered list; principles as `<ol>`.
- Decorative content silent: mono indices `01–05`, giant section numerals, `↗`/`↓`/`+`/`–` glyphs, and the middot separators are `aria-hidden`.
- Images (screenshots only): `alt` describing the actual UI ("VoiceScope report view showing…"), explicit width/height, `loading="lazy"`.
- `<html lang="en">`; page `<title>` and meta description derived from hero copy; panels render full text server-side so content is crawlable regardless of JS/expanded state.

### 6.5 Motion & preference settings

- `prefers-reduced-motion: reduce` → design-system global kill-switch; verify anchor jumps become instant and the panel fade is removed.
- No forced zoom limits (`user-scalable` never disabled); text remains readable at 200% browser zoom without clipping (no fixed-height text containers); layout reflows, never scrolls sideways, at 320px and at 200% zoom.

---

## Part 7 — UX success criteria (acceptance checklist)

The shipped site passes only if all ten are true. Each is verifiable by a reviewer in one pass.

1. **The mono-only skim test:** cover every sans and serif word on the page. The remaining mono layer alone communicates: name, title, city, current employer, five project names with stacks, and one hard metric each (300+ tests / up to 3 repair rounds / 1,400+ tests · 50+ gyms / 25 LLMs / <$0.001/min vs $0.003), plus four open source entries and a working email. If any of those is missing from the mono layer, the skim layer is under-built.
2. **The 10-second test:** a first-time recruiter landing cold can answer "who, what, where, current role, how to contact" from the first viewport without scrolling past the fold on a 1440×900 laptop and a 390px phone.
3. **Zero anti-patterns:** no item from the §1 audit table or §1.2 smell test is present — no gradient/glass/shadow/radius, no scroll-triggered animation, no icon or logo asset loaded, no skills exhibit, no badge, no emoji, no invented number, no banned word, no exclamation mark, no phone number.
4. **No clone wall:** no two adjacent Selected Work entries share a layout pattern (A/B/C/D/E sequence holds); nowhere on the page do two identical-structure blocks sit side by side at identical size.
5. **Link integrity:** exactly the 13 external URLs + 1 mailto from FACTS.md resolve correctly in new tabs with `rel="noopener noreferrer"` and `↗` glyphs; Jira ForgeQuest shows the `WINNER` tag with no link; AutoAce has Live only; supabase-lingo has Demo only; Strivo's only CTA is the in-page `Case study ↓`.
6. **Case-study mechanics:** all three panels toggle via mouse, Enter, and Space; `aria-expanded`/`aria-controls` correct; focus stays on the toggle; height never animates; deep links (`#case-study-strivo` etc.) load with the right panel expanded and correctly offset below the sticky nav; content is in the server-rendered DOM.
7. **Responsive floor:** at 320px there is no horizontal overflow in any section and every interactive target is ≥44px; at 200% zoom no text clips; at 1440px no clamp ceiling is exceeded.
8. **Keyboard pass:** tab order is logical (skip link → nav → hero CTA → work rows → toggles → experience → open source → contact); every interactive element shows the accent focus ring; nothing is reachable only by mouse or by hover.
9. **Reduced-motion pass:** with `prefers-reduced-motion: reduce`, the page renders instantly, anchors jump (not scroll), and zero information depends on an animation that no longer runs.
10. **Polish pass:** no layout shift on load (CLS < 0.1; screenshots have explicit dimensions); no console errors; Lighthouse accessibility ≥ 95; the footer's claim `NO TRACKING` is literally true (zero analytics, zero third-party scripts); sticky nav active state tracks the section in view without animation.

---

*End of UX audit. Structure decisions here (§2.0 section order, §2.8 nav, §2.9 deltas, Part 5 patterns) are the binding UX contract for implementation; visual values defer to DESIGN_SYSTEM.md, copy defers to CONTENT_STRATEGY.md, facts defer to FACTS.md.*
