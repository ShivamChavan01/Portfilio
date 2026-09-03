# PORTFOLIO IMPLEMENTATION PLAN — Shivam Chavan

> **Phase 2 output of the orchestration.** Synthesizes `docs/FACTS.md`, `docs/PORTFOLIO_POSITIONING.md`, `docs/UX_AUDIT.md`, `docs/DESIGN_SYSTEM.md`, `docs/CONTENT_STRATEGY.md` into a build contract.
> **Binding precedence:** FACTS (what may be said) → UX_AUDIT (structure & behavior) → DESIGN_SYSTEM (visual values) → CONTENT_STRATEGY (words). Conflicts resolved in §9.

---

## 1. Stack & tooling

| Decision | Value |
|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript**, static-friendly single route `/` |
| Styling | **Tailwind CSS v4** (CSS-first `@theme`), tokens exactly per DESIGN_SYSTEM Appendix A |
| Fonts | `next/font/google`: Instrument Serif (400), Instrument Sans (400/500/600), IBM Plex Mono (400/500) — Appendix B wiring |
| Node | **v22.22.0** via `/home/shivam/.nvm/versions/node/v22.22.0/bin` (system node is v18 — too old). Every shell: `export PATH=/home/shivam/.nvm/versions/node/v22.22.0/bin:$PATH` |
| Package manager | npm |
| Animation | **None installed.** CSS transitions only; no framer-motion |
| Icons | **None installed.** Typographic glyphs only (`↗ → + – ·`) |
| Analytics/tracking | **None** (footer claims "NO TRACKING" — must be literally true) |
| Rendering | All sections are **server components by default**; the case-study toggle is the only client component allowed (`"use client"`) |

## 2. Page architecture (from UX_AUDIT §2 — binding)

One route `/`, six regions, in order. Anchor ids are stable and deep-linkable.

| # | Region | id | Section component | Owner |
|---|---|---|---|---|
| — | Sticky nav | — | `components/nav.tsx` | A |
| 00 | Hero + intro + principles (unnumbered) | — | `components/hero.tsx`, `components/intro.tsx` | A |
| 01 | Selected Work — 5 entries, 5 distinct patterns (Dossier / Pipeline Ledger / Field Report / Index Card / Footnote Row) | `#work` | `components/selected-work.tsx` (+ `components/work/*`) | B |
| 02 | Case Studies — 3 expandable panels (VoiceScope, MCP Foundry, Strivo) with CONTEXT / ARCHITECTURE / ENGINEERING CHALLENGE / DECISIONS / RESULT | `#case-studies`, per-panel `#case-study-voicescope`, `#case-study-mcp-foundry`, `#case-study-strivo` | `components/case-studies.tsx` (+ `components/case-studies/*`) | E |
| 03 | Experience — Eazytag timeline entry + education line | `#experience` | `components/experience.tsx` | C |
| 04 | Open Source — JKube, OpenMetadata, ForgeQuest (WINNER tag, no link), supabase-lingo | `#open-source` | `components/open-source.tsx` | D |
| 05 | Footer / Contact | `#contact` | `components/footer.tsx` | F |

Strivo's Selected-Work entry links in-page: `Case study ↓` → `#case-study-strivo` (auto-expanded on hash arrival).

## 3. File tree & OWNERSHIP (exclusive — this is the conflict-avoidance contract)

```
portfilio/
├── .nvmrc                          Lead
├── package.json / tsconfig.json / next.config.ts / postcss.config.mjs   Lead (setup; frozen for A–F)
├── .gitignore                      Lead
├── next-env.d.ts                   generated
├── docs/                           Phase 1 outputs — READ-ONLY for implementers
├── lib/
│   ├── data.ts                     Lead (setup) — ALL copy as typed constants (from CONTENT_STRATEGY, verbatim)
│   └── case-studies.ts             Lead (setup) — case study copy
├── app/
│   ├── layout.tsx                  Lead (setup) — fonts, SEO + OG metadata, skip target
│   ├── globals.css                 Lead (setup) — DESIGN_SYSTEM Appendix A + base layer
│   ├── page.tsx                    Lead (setup stub → Lead final composition Phase 5)
│   ├── icon.svg                    Lead (Phase 5)
│   ├── robots.ts                   Lead (Phase 5)
│   └── sitemap.ts                  Lead (Phase 5)
└── components/
    ├── ui/
    │   ├── section-header.tsx      Lead (setup) — numbered mono eyebrow + heading + optional counter
    │   ├── mono-label.tsx          Lead (setup) — text-label mono uppercase micro-label
    │   ├── external-link.tsx       Lead (setup) — ↗ glyph, target/_blank + rel noopener noreferrer
    │   ├── spec-table.tsx          Lead (setup) — key/value mono spec table
    │   └── spec-row.tsx            Lead (setup) — inline mono metric row
    ├── nav.tsx                     ★ Agent A only
    ├── hero.tsx                    ★ Agent A only
    ├── intro.tsx                   ★ Agent A only
    ├── selected-work.tsx           ★ Agent B only
    ├── work/                       ★ Agent B only (subcomponents, any files inside)
    ├── case-studies.tsx            ★ Agent E only
    ├── case-studies/               ★ Agent E only (panel internals)
    ├── experience.tsx              ★ Agent C only
    ├── open-source.tsx             ★ Agent D only
    └── footer.tsx                  ★ Agent F only
```

**Hard rules for all implementers:**
1. Modify **only** files marked with your star. Everything else is read-only — especially `lib/`, `app/`, `components/ui/`.
2. Never edit another agent's component to fix something you need — you request it via your final report; the Lead resolves.
3. Do not install dependencies. Do not change tokens, fonts, or globals.css.
4. Do not create new shared primitives — if you need one that's missing, build it **inside your own file(s)**.
5. Import copy/data from `lib/data.ts` / `lib/case-studies.ts` — never hardcode facts/links in JSX (keeps fact-traceability in one auditable place).
6. Verify with `npm run build` (must pass with zero errors/warnings you introduced).

## 4. Shared contracts (Lead-provided, frozen)

- `lib/data.ts` exports: `site` (name, title, location, email, links), `principles[]`, `work[]` (slug, index, name, year, descriptor, summary, role, stack[], spec[], links[], anchor?), `experience` (role, org, dates, location, framing, bullets[]), `education`, `openSource[]` (name, org?, period?, description, meta[], links[] incl. `winner` flag), `nav` anchors.
- `lib/case-studies.ts` exports: `caseStudies[]` (slug, project, teaser, sections: {context, architecture, challenge, decisions, result}, specTable).
- `components/ui/section-header.tsx`: props `{ index: string; label: string; counter?: string; id?: string }` → renders hairline + hanging mono eyebrow + `text-heading`.
- `components/ui/external-link.tsx`: props `{ href; children; className? }` → `<a target="_blank" rel="noopener noreferrer">` + `↗`.
- Agent stubs (Lead-created) define each section's signature: `export default function SelectedWork()` etc. — **no props**; sections self-contained (they import their own data).

## 5. Implementation order

| Step | Who | Work |
|---|---|---|
| 3.0 | **Lead** | Scaffold app (package.json, configs), install deps, `globals.css` + `layout.tsx` (fonts + SEO/OG), `lib/data.ts` + `lib/case-studies.ts`, `components/ui/*`, stub sections, compose `app/page.tsx`; `npm run build` green |
| 3.1 | **Agents A–F in parallel** (isolated files, see §3) | Each implements their section(s) per UX_AUDIT patterns + DESIGN_SYSTEM tokens + CONTENT_STRATEGY copy |
| 3.2 | **Lead** | Integration review, compose `page.tsx` final order, fix cross-component inconsistencies |
| 4.1 | **Motion specialist** | Motion audit: the one hero entrance, panel fade, state transitions; reduced-motion kill-switch verification; no scroll-triggered anything. May touch `app/globals.css` and add motion CSS classes; component edits only in coordination with Lead report |
| 4.2 | **Mobile specialist** | 320/375/390/768/1024/1280/1440 passes: overflow, wrap, tap targets ≥44px, nav, type clamps, spec tables stacking; fixes in any component (sequential — no conflicts at this phase) |
| 5 | **Lead** | Final integration: factual audit against FACTS (every number/link), link check, a11y pass, icon.svg + robots + sitemap, `npm run build` + dev-server smoke test, screenshots at key viewports, polish |

## 6. Per-agent implementation briefs (summary — full context given in dispatch)

- **A — Hero/Nav/Intro:** sticky mono nav with scroll-spy (client component permitted for nav only), hero per UX_AUDIT §2.1 (thesis H1, sub-headline, meta rail, CTAs, 250ms entrance), 87-word intro, five principles as numbered list. Owns `nav.tsx`, `hero.tsx`, `intro.tsx`.
- **B — Selected Work:** five entries in patterns A/B/C/D/E (UX_AUDIT Part 5) — Dossier, Pipeline Ledger (numbered process list), Field Report (metrics strip first), Index Card, Footnote Row. No two adjacent alike; no card grid. Owns `selected-work.tsx` + `work/*`.
- **C — Experience:** hanging-date timeline entry (Eazytag 10/2025 – Present, CURRENT accent tag), framing line, 4 outcome bullets, quiet education row. Owns `experience.tsx`.
- **D — Open Source:** 4 ledger entries with mono metadata rows; ForgeQuest WINNER tag (only accent element); links exactly per FACTS (JKube org, PR #27602 + org, none, Demo only). Owns `open-source.tsx`.
- **E — Case Studies:** 3 panels, `aria-expanded`/`aria-controls` button headers, `+`/`–` glyph swap (no rotation), 200ms opacity+4px fade (never height), deep-link hash auto-expand, server-rendered full text, spec table in expanded body. Owns `case-studies.tsx` + `case-studies/*`.
- **F — Footer/Contact:** closing line, mono email/GitHub/LinkedIn links, serif sign-off statement, colophon `© 2026 SHIVAM CHAVAN · … · NO TRACKING`. Owns `footer.tsx`.

## 7. Verification gates

Every implementer agent, before reporting done:
1. `npm run build` — zero errors.
2. No hardcoded facts/links outside `lib/` (grep their own files).
3. No banned vocabulary (CONTENT_STRATEGY §11), no exclamation marks, no phone number.
4. No gradients/shadows/rounded corners/icon imports/animation libraries.
5. All external links `target="_blank" rel="noopener noreferrer"` + `↗`.
6. Focus-visible ring intact on every interactive element they built.

Lead final gate (Phase 5): full factual diff against FACTS.md; UX_AUDIT §Part 7 ten-point acceptance checklist; responsive matrix; Lighthouse a11y ≥ 95 target.

## 8. SEO & metadata (Lead, setup + Phase 5)

- `<title>`: `Shivam Chavan — Full Stack Engineer` · meta description from hero sub-headline (voice AI observability, multi-tenant SaaS, LLM tooling).
- Open Graph: `og:title`, `og:description`, `og:type=website`, `og:locale=en_US`, canonical URL placeholder `https://shivamchavan.dev` (user-updatable), Twitter card summary. `metadataBase` set so OG resolves.
- `app/robots.ts` (allow all), `app/sitemap.ts` (single URL), `app/icon.svg` — minimal monogram on ink square.
- `lang="en"`, skip-link, landmark structure per UX_AUDIT §6.4.

## 9. Resolved conflicts (from Phase 1 deltas)

1. **Nav links** → UX_AUDIT §2.8 wins: desktop `01 WORK · 02 CASE STUDIES · 03 EXPERIENCE · 04 OPEN SOURCE · 05 CONTACT`; mobile truncates to `01 WORK · 03 EXPERIENCE · 05 CONTACT`. No hamburger.
2. **Case-study panels** → live in section 02 (`#case-studies`), not inline in the work index; panel anatomy per DESIGN_SYSTEM §5.6, placement per UX_AUDIT §2.0/§2.9.
3. **Hero meta rail** → per UX_AUDIT §2.1: `BENGALURU, INDIA` · `FULL STACK ENGINEER` · `FOCUS: AGENTIC AI · VOICE AI · MULTI-TENANT SAAS` · `PYTHON · JAVA 17 · TYPESCRIPT`.
4. **Availability claim** → `"OPEN TO NEW WORK"` is not in FACTS.md → **dropped**; location line renders `BENGALURU, INDIA` (user can add availability later).
5. **`py-22` spacing** → use `py-24` at md (Tailwind v4 dynamic spacing makes `py-22` legal, but the plan standardizes on the 4px-scale values listed in DESIGN_SYSTEM §3.1).
6. **Strivo links** → Selected-Work entry and Experience carry no external URL; only `Case study ↓` in-page anchor. Education renders as one quiet mono line inside Experience.
7. **Section counter** → `5 PROJECTS` on `#work`; `3 CASE STUDIES` on `#case-studies` (counters are mono `text-meta`).

## 10. Out of scope (v1)

Dark mode · availability badge · blog · testimonials · CV download · screenshots (no verified product screenshots available in facts — sections must read complete without imagery) · analytics · i18n · animations beyond the motion budget.
