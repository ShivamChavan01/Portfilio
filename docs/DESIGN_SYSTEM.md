# DESIGN SYSTEM — Shivam Chavan Portfolio

> **Status:** Authoritative. Implementers must follow these tokens exactly. No deviations without changing this file first.
> **Stack target:** Next.js 15 App Router + TypeScript + Tailwind CSS v4 (CSS-first `@theme`).
> **Design direction:** Editorial, minimalistic, technical, premium. "Engineering journal / print-quality typography meets a precise instrument panel." The design is carried by **typography, hairline rules, whitespace, and one accent** — not color, shadows, icons, or motion.

---

## 0. Design principles (read first)

1. **Typography is the interface.** Hierarchy comes from size, weight, case, and typeface contrast — never from color blocks or shadows.
2. **Hairlines are the structure.** 1px rules replace cards, boxes, and dividers-as-backgrounds.
3. **Monospace is the metadata voice.** All labels, indices, dates, stack names, and numbers are mono. All prose is sans. All display statements are serif.
4. **One accent, used like a highlighter.** Deep signal green appears only on interactive states and focus — under ~5% of visible pixels.
5. **Nothing decorative that isn't data.** The only ornament is section numbering, rules, and mono labels. No illustration, no gradients, no stock.

---

## 1. Typography

### 1.1 Font stack (all Google Fonts, self-hosted via `next/font/google`)

| Role | Family | Weights used | Styles | `next/font` variable | Fallback |
|---|---|---|---|---|---|
| Display (serif) | **Instrument Serif** | 400 only | normal, italic | `--font-instrument-serif` | Georgia, "Times New Roman", serif |
| Text (sans) | **Instrument Sans** | 400, 500, 600 | normal, italic | `--font-instrument-sans` | ui-sans-serif, system-ui, sans-serif |
| Mono | **IBM Plex Mono** | 400, 500 | normal | `--font-plex-mono` | ui-monospace, "SF Mono", Menlo, monospace |

**Justification.**
- **Instrument Serif (display)** is a condensed, high-contrast display serif designed for large sizes — it delivers the "print journal" voice immediately, is distinctive (not Inter/Roboto/Space Grotesk overuse), and ships as a single ~30KB weight. Its single-weight constraint is a feature: it forces restraint (no bold-vs-light drama, hierarchy via size only).
- **Instrument Sans (text)** was designed by the same lineage (Instrument brand) and shares proportions with the serif, so the pairing is harmonious rather than decorative. It is a quiet, slightly technical humanist grotesk with excellent readability at 14–17px, variable 400–700, plus a width axis we deliberately do NOT use (wdth stays 100).
- **IBM Plex Mono (labels/metadata)** carries the "engineering documentation" voice — it is literally the typeface of IBM technical publishing. Sharp, slightly quirky, superbly hinted at 12px, with tabular figures for dates and metrics.
- All three are on Google Fonts → self-hosted by `next/font/google` (zero external requests, automatic size-adjusted fallbacks, no CLS).

**Weight rules (hard):**
- Instrument Serif is **never** used below 2.25rem and **never** bolded or weight-shifted (only 400 exists — do not synthesize).
- Instrument Sans max weight is **600**. 700 is not loaded.
- IBM Plex Mono uses 500 only for uppercase micro-labels; 400 everywhere else.
- Do not use the Instrument Sans `wdth` axis. Do not use additional families.

### 1.2 Type scale (named roles)

Every role is a Tailwind v4 token (see Appendix A) usable as `text-hero`, `text-heading`, etc. Reference values are desktop-first with fluid `clamp()`; px values shown for the 320px floor and the 1280px ceiling.

| Token | Role | Face / weight | Size (min px → max px) | Fluid `clamp()` | Line-height | Letter-spacing | Case / extras |
|---|---|---|---|---|---|---|---|
| `text-hero` | Hero display statement | Serif 400 | 44 → 96px | `clamp(2.75rem, 1.25rem + 7.5vw, 6rem)` | 1.04 | −0.015em | Sentence case; one italic word allowed |
| `text-display` | Display 2 (pull statements, big page titles) | Serif 400 | 36 → 56px | `clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)` | 1.08 | −0.01em | Sentence case |
| `text-heading` | Section heading (H2) | Sans 600 | 24 → 30px | `clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem)` | 1.2 | −0.02em | Sentence case |
| `text-subhead` | Subheading (H3, project names in detail views) | Sans 600 | 20px | `1.25rem` | 1.35 | −0.01em | Sentence case |
| `text-lead` | Lead / intro paragraph | Sans 400 | 17 → 19px | `clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem)` | 1.65 | −0.005em | Sentence case, color `ink-2` |
| `text-body` | Body | Sans 400 | 16px | `1rem` | 1.65 | 0 | Sentence case, color `ink-2` |
| `text-small` | Small body / list items | Sans 400 | 14px | `0.875rem` | 1.55 | 0 | Sentence case, color `ink-2` |
| `text-caption` | Caption / helper | Sans 400 | 13px | `0.8125rem` | 1.5 | 0 | Sentence case, color `ink-muted` |
| `text-label` | Mono micro-label (eyebrows, nav, indices, dates) | Mono 500 | 12px | `0.75rem` | 1.2 | **+0.08em** | **UPPERCASE**, color per context (see 1.4) |
| `text-meta` | Mono metadata (stack lists, timestamps in tables) | Mono 400 | 12px | `0.75rem` | 1.5 | 0 | Normal case, `tabular-nums`, color `ink-muted` |
| `text-code` | Inline code / code blocks | Mono 400 | 14px | `0.875rem` | 1.6 | 0 | Normal case, bg `recessed` |

Notes:
- Negative letter-spacing is applied **only** at display/heading sizes (≥24px). Never negative-track body or mono.
- All mono numerals (dates, metrics, indices, years) get `font-variant-numeric: tabular-nums` (Plex Mono is effectively monospaced anyway; the property also covers any sans numerals in tables).
- Semantic mapping: `h1` → `text-hero` (home) or `text-display` (inner pages); `h2` → `text-heading`; `h3` → `text-subhead`. All other roles are non-heading.

### 1.3 Measure (max line length)

| Context | Max measure | Token |
|---|---|---|
| Body, small, list prose | **65ch** | `max-w-measure` (`--container-measure: 65ch`) |
| Lead paragraph | 56ch | `max-w-[56ch]` |
| Code blocks | 80ch | `max-w-[80ch]` |
| Mono metadata tables | 72ch | `max-w-[72ch]` |

- Never set prose full-width inside a wide column; wrap in the measure token.
- Text is never justified. Hyphenation off.

### 1.4 Mono uppercase micro-labels — the editorial "technical" layer

This is the signature device of the site. Rules:

- **Format:** `text-label` (mono 500, 12px, uppercase, +0.08em tracking), optionally preceded by a 2-digit section index: `01`, `02`, … Zero-padded, always two digits.
- **Canonical pattern:** `01 · SELECTED WORK` (index + middle-dot space + label). The middle dot `·` (U+00B7) is the only separator glyph.
- **Placement:** every major section opens with this label, sitting in the left hanging gutter on desktop (see §3.4), directly above or beside the `text-heading`.
- **Color:** default `ink-muted`; on hover-adjacent or active contexts `ink`; never accent green (accent is reserved for interaction, see §2).
- **Where labels appear:** nav links, section eyebrows, table keys, timeline dates, footer colophon, form field names (if any), "STACK", "ROLE", "YEAR" spec rows.
- **Where they do not appear:** inside body prose, in buttons (buttons use sans 500 sentence case), as pseudo-italic decoration, or with color.

---

## 2. Color system

### 2.1 Scheme decision

**UPDATED (user request): TWO schemes — light "paper" (default) + dark "warm ink".**
Light remains the default and the design's home. Dark is the same system inverted: near-black warm paper (`#141312`), warm off-white ink, brightened accent (`#4CC38A`). Implementation: `[data-theme="dark"]` overrides the `--color-*` tokens (see `app/globals.css`); every utility re-maps automatically. Toggle lives in the nav (`components/theme-toggle.tsx`); choice persists in localStorage; system preference is the default; pre-paint inline script in `app/layout.tsx` prevents flash. All rules in this document (hairlines, radius 0, accent whitelist, motion budget) apply identically to both themes.

### 2.2 Palette (exact values)

Near-monochrome warm-neutral ink-on-paper. Contrast ratios computed against `bg` (#FAFAF8).

| Token | Hex | Role | Contrast on bg |
|---|---|---|---|
| `--color-bg` | `#FAFAF8` | Page background (warm paper) | — |
| `--color-surface` | `#FFFFFF` | Raised surface: hover rows, panels, code blocks' parent | — |
| `--color-recessed` | `#F3F2EE` | Recessed fill: code blocks, spec-table header zones, quiet wells | — |
| `--color-ink` | `#191817` | Primary text, primary button fill, selection bg | 16.5:1 |
| `--color-ink-hover` | `#35332E` | Primary button hover fill | — |
| `--color-ink-2` | `#454340` | Body / secondary text | 9.4:1 |
| `--color-ink-muted` | `#6E6A63` | Muted text: captions, labels, metadata | 5.1:1 (AA) |
| `--color-ink-faint` | `#98948B` | Decorative only: large index numerals, disabled text | ~2.9:1 — large/decorative/disabled only, never body |
| `--color-line` | `#E7E4DD` | Hairline borders, rules (default) | — |
| `--color-line-strong` | `#D8D4CB` | Hover/strong hairlines, default underline color, secondary button border | — |
| `--color-accent` | `#0F7B4F` | **The single accent** — deep signal green | 5.0:1 (AA as text) |
| `--color-accent-hover` | `#0B6340` | Accent hover state | 6.5:1 |
| `--color-accent-tint` | `#EAF2EC` | Accent wash — reserved: active nav marker bg, "winner" tag. Sparingly. | — |

### 2.3 Accent choice — justified

**Deep signal green `#0F7B4F`.** Reasons:
1. Semantics: green is the color of "operational / passing / on-call resolved / production" — it reinforces the core message ("I build real production systems") like a status LED on an instrument panel.
2. It avoids the AI-cliché purple and the default-portfolio blue entirely.
3. At this desaturated-deep value it harmonizes with warm paper (heritage print + engineering-diagram feel) instead of glowing against it.
4. It passes AA as small text on paper, so links and labels may use it without size compromises.

**Accent usage whitelist (nothing else may use it):** inline-link hover color, active nav state, `:focus-visible` rings, external-link glyph on hover, the "Atlassian ForgeQuest winner" tag, and live-status dots if ever needed. Everything else is ink/line.

### 2.4 Global color rules

- No color outside this table, anywhere (including SVG strokes, scrollbar, form fills).
- `::selection { background: var(--color-ink); color: var(--color-bg); }` — high-contrast print feel.
- `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` — global, on every interactive element.
- `color-scheme: light` on `:root`.
- Text links: `ink` text with underline `1px` in `line-strong` (offset 4px); hover → `accent` text + `accent` underline. Never blue, never default UA styles.

---

## 3. Spacing & layout grid

### 3.1 Base unit

Tailwind v4 default: `--spacing: 0.25rem` (4px). **Do not override.** Allowed spacing steps (utilities): `1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32` (i.e., 4/8/12/16/20/24/32/40/48/64/80/96/128px). No arbitrary off-scale values (no `p-[18px]`, no odd numbers). The type system's line-heights provide intra-block rhythm; spacing utilities only separate blocks.

### 3.2 Page container

| Token | Value |
|---|---|
| `--container-page` | `75rem` (1200px) — `max-w-page` + `mx-auto` |
| `--container-measure` | `65ch` — prose cap |

Horizontal padding per breakpoint (applied to the page container):

| Breakpoint | `px` | Value |
|---|---|---|
| 320–639px | `px-5` | 20px |
| 640–1023px | `px-6` | 24px |
| ≥1024px | `px-10` | 40px |

### 3.3 Grid concept

- **≥1024px (lg): 12-column grid**, gutter 24px (`gap-6`).
- **<1024px: 4-column grid**, gutter 16px (`gap-4`). Below md, most content is single-column; the 4-col grid serves image pairs and footer columns.
- Implementation: `grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6`. Never use flexbox for page-level layout; flex is for intra-component rows (nav, buttons, table cells).

### 3.4 Editorial asymmetry rules (desktop)

Standard content archetypes, expressed as exact column spans on `lg`:

| Archetype | Left gutter / label | Main content | Right rail |
|---|---|---|---|
| **Hanging-label section** (default for all sections) | label `lg:col-span-3` (mono eyebrow + optionally huge faint index numeral) | `lg:col-span-8 lg:col-start-5` | — |
| **2/3 + 1/3 split** (case study body, project detail) | — | article `lg:col-span-8` | aside `lg:col-span-3 lg:col-start-10` (spec-sheet table) |
| **Full-bleed index** (project rows, footer) | spans all 12 | — | — |
| **Hero** | statement `lg:col-span-9` (deliberately off-balance left) | meta block `lg:col-span-3 lg:col-start-10` (mono: location, availability, coordinates-style facts) | — |

Rules:
- The left hanging gutter is the default home for mono labels and dates — this "hanging" pattern is what makes the page read like a journal margin, not a template.
- Asymmetry is **left-weighted**: text starts at column 1 or 5, never centered except the vertical centering of the hero block itself.
- On mobile everything collapses to `col-span-4`; hanging labels stack **above** their content (never below).

### 3.5 Vertical rhythm

| Context | Mobile | ≥768px (md) | ≥1024px (lg) |
|---|---|---|---|
| Section padding-block | `py-16` (64px) | `py-22` (88px)* | `py-28` (112px) |
| Label → section heading | `mb-3` (12px) | `mb-4` (16px) | `mb-4` |
| Section heading → content | `mt-6` (24px) | `mt-10` (40px) | `mt-12` (48px) |
| Paragraph gap (within prose) | `space-y-4` (16px) | same | same |
| Between index rows (padding) | `py-4` | `py-5` (20px) | `py-6` (24px) |
| Hero block top padding | `pt-16` | `pt-24` (96px) | `pt-32` (128px) |

\* `py-22` = 88px exists on the 4px scale; use it or `py-24` consistently — pick `py-24` (96px) at md if `py-22` is unavailable in the installed Tailwind version.

- Sections are separated by a full-width hairline rule (`border-t border-line`) OR by the section padding — the section-header pattern in §5.3 uses the hairline; never both stacked adjacently.
- No vertical centering of text blocks outside the hero. Baseline grid enforcement is not required; consistent line-heights do the work.

---

## 4. Borders & surfaces

### 4.1 Hairline rule policy — the primary structural device

- **1px solid `--color-line`** is the default divider between: sections, project index rows, spec-table rows, nav bottom, footer top, timeline entries.
- Use `border-t` (top rules) wherever possible so content "hangs" from rules, print-style. Bottom borders only inside tables and nav.
- **Strong hairline `--color-line-strong`** is used only for: interactive hover borders, the primary button border, and underlines on links.
- A hairline always spans its full container width unless it is a "short rule" under a section label (`w-12 border-t border-ink` — a 48px ink-colored tick used once per section header, optional variant).
- Never use hairlines thicker than 1px. Never double-rule (two adjacent rules with no content between).

### 4.2 Borders vs. background shifts — decision rule

| Need | Use |
|---|---|
| Separate content | hairline border |
| Group related content (code block, spec table, expanded panel) | `bg-recessed` fill + hairline border |
| Hover feedback on rows/cards | `bg-surface` (white on paper) + border-color → `line-strong` |
| Everything else | nothing — whitespace does the work |

Never nest filled areas more than one level deep (paper → recessed is the maximum depth).

### 4.3 Corner radius policy

**Radius 0 everywhere.** Buttons, images, panels, tags, focus rings: sharp corners. `--radius-none: 0px`. Rationale: sharp corners are the print/instrument-panel signature; rounded corners read consumer-soft. No exceptions (no pills, no rounded avatars).

### 4.4 Elevation policy

**No shadows. Zero.** No `box-shadow`, no `drop-shadow`, no glow, no blur backdrops, no glassmorphism. Depth is expressed exclusively as: paper (bg) → recessed (fill) → surface (white), plus hairlines. Sticky nav may have a hairline bottom border, never a shadow.

---

## 5. Component specifications

All components: radius 0, no shadows, only tokens from this document. Focus states are uniform: `outline 2px accent, offset 2px`. Disabled state is uniform: `opacity-40`, `cursor-not-allowed`, no transitions.

### 5.1 Buttons

**Anatomy (shared):** height 44px (min touch target), `px-5`, `text-small` (sans 14px, weight 500), `gap-2` between label and trailing glyph, radius 0. Trailing glyph for external actions: `↗` (mono, 0.75em, raised).

| Part | Primary | Secondary | Tertiary (text link) |
|---|---|---|---|
| Background | `bg-ink` | `bg-transparent` | none |
| Text | `text-bg` (paper) | `text-ink` | `text-ink` |
| Border | `1px solid ink` | `1px solid line-strong` | none; underline `1px line-strong`, offset 4px |
| Hover | `bg-ink-hover`, `border-ink-hover` | `border-ink`, `bg-surface` | `text-accent`, underline `accent` |
| Active | `translate-y-px` (1px down), keep hover colors | same | underline thickens to 2px (no layout shift — `text-decoration-thickness`) |
| Focus-visible | global ring | global ring | global ring |
| Disabled | `opacity-40`, colors frozen | same | `opacity-40`, no underline |

- Tertiary links inside prose omit the box entirely (plain inline link per §2.4).
- One primary button per view region max. Buttons never use mono labels.

### 5.2 Navigation (top bar)

**Anatomy:** `sticky top-0 z-50`, `h-16`, `bg-bg` (opaque paper — content scrolls under it), `border-b border-line`, inner container = page container. Left: "Shivam Chavan" in sans 500 16px `text-ink`, followed (lg only) by a mono label `— FULL STACK ENGINEER` in `text-label text-ink-muted`. Right: links `WORK`, `ABOUT`, `CONTACT` — each as `text-label` (mono 12px uppercase) with a 2-digit index prefix (`01 WORK`). Mobile: brand + links only (3 links fit at 320px; no hamburger, no drawer — do not build one).

**States:** default `ink-muted`; hover `ink` + underline offset 6px; **active/current section** `text-accent` + `border-b-2 border-accent` (or underline) — the only accent in the nav; focus-visible global ring; scroll-spy sets active, no animated indicator slide.

### 5.3 Section header pattern (numbered)

**Anatomy (lg, hanging-label archetype):**
- Full-width `border-t border-line` opens the section.
- Left gutter (`lg:col-span-3`): `text-label` mono eyebrow: `01 · SELECTED WORK`. Optional: giant index numeral `01` in serif `text-display text-ink-faint` positioned behind/below the label (decorative, one per section max).
- Content column (`lg:col-span-8 col-start-5`): `text-heading` sans 600. Optional right-aligned `text-meta` mono counter on the same row, e.g., `4 PROJECTS`.
- Optional 48px short rule (`w-12 border-t border-ink`) under the label variant.

**States:** static (not interactive). Mobile: eyebrow stacks above heading, both within `col-span-4`.

### 5.4 Project index rows

The work list is a table-like index, not cards.

**Anatomy (one row = one `<a>`, whole row clickable):** `border-t border-line` each row; last row also `border-b`. Inner grid on lg: `col-span-1` mono index (`01`, `text-label text-ink-faint`) · `col-span-5` project name (`text-subhead` sans 500 20px `text-ink`) · `col-span-3` stack (`text-meta` mono 12px `ink-muted`, truncated to 3 items + `+n`) · `col-span-2` year (`text-meta` mono, `tabular-nums`) · trailing `↗` glyph (`ink-faint`). Mobile: two lines — name on line 1, `index · year · first-2-stack-items` mono line 2.

**States:** default (above); hover → `bg-surface`, name → `text-accent`, `↗` → `text-ink` and `translate-x-0.5 -translate-y-0.5` (150ms `ease-state`); focus-visible ring on the row; active → `bg-recessed`; no disabled state (all listed projects have at least one verified link; if a project has none — e.g., Jira ForgeQuest winner — render the row as a non-link with the `WINNER` mono tag in `accent-tint` bg + `accent` text instead of the `↗`).

### 5.5 Spec-sheet table (key-value technical metadata)

Used in project details and the experience sidebar: stack, role, links, metrics.

**Anatomy:** `<table>` or `<dl>`; each row `grid grid-cols-[160px_1fr]` (lg) or stacked (mobile); `py-3`; `border-t border-line` per row (no outer box; if grouping needed, wrap whole table in `border border-line p-6 bg-recessed`). Key cell: `text-label` mono uppercase `ink-muted` (`STACK`, `YEAR`, `STATUS`, `GITHUB`). Value cell: `text-small` sans `ink-2`; mono URLs/versions stay mono. Metric values may use serif `text-display` for the single hero metric per project (e.g., `40%`) with `text-caption` label under it.

**States:** static; only links inside value cells are interactive (tertiary-link behavior). No zebra striping, no header row background, no vertical dividers.

### 5.6 Expandable case study panel

Used on the index page per project (collapsed by default).

**Anatomy:** header row is a `<button aria-expanded>` spanning full width: `col-span-1` mono index · `col-span-6` title (`text-subhead`) · `col-span-3` stack (`text-meta`) · trailing glyph `+` (mono, `ink-muted`, 16px). Body: content indented to the content column (`lg:col-start-5 lg:col-span-8`), `pb-8`, contains `text-body` prose + spec-sheet table (§5.5) + tertiary links.

**States:** collapsed (default) / expanded — glyph swaps `+` → `–` instantly (no rotation, no morph). Panel content: no height animation; on open, content renders immediately with a single `opacity 0→1` + `translateY(4px)→0` over 200ms `ease-state` (skipped under reduced motion). Hover on header row: `bg-surface`. Focus-visible: ring on the header button. Only one panel open at a time is permitted but not required.

### 5.7 Timeline entry (experience)

**Anatomy (lg):** `grid-cols-12`; left `col-span-3` = date range as `text-label` mono (`10/2025 — PRESENT`) in `ink-muted`; right `col-span-8 col-start-5` = role line (`text-subhead` sans 500: "Full Stack Developer") + org line (`text-meta` mono: `EAZYTAG · STRIVO SAAS · BENGALURU`) + 2–4 `text-small` bullets (`list-disc` markers replaced with `–` via `list-style: none` + `–` prefix, `ink-faint`). Entries separated by `border-t border-line`, `py-6`. No vertical connector line, no dots.

**States:** static. The date column may show a `CURRENT` tag in `accent-tint`/`accent` for the present role — the single accent exception on this component.

### 5.8 External-link affordance

- Every external link ends with `↗` (U+2197, from the loaded font faces — not an SVG icon), mono, `0.75em` size, `vertical-align: super` ≈ raised 0.25em, `ml-0.5`.
- Internal anchors use no glyph (or `→` U+2192 for "read more" actions).
- `target="_blank"` always paired with `rel="noopener noreferrer"`.
- States: inherits text color; glyph turns `accent` on link hover. Email/GitHub/LinkedIn in the footer are mono text links with this glyph — no brand icons.

### 5.9 Footer

**Anatomy:** `border-t border-line`, `py-12` (lg `py-16`). Grid lg: `col-span-4` name + one-line serif statement (`text-display`, e.g., "Build real things.") · `col-span-4` mono contact list (`text-label`, stacked: EMAIL, GITHUB, LINKEDIN — with `↗`) · `col-span-3 col-start-10` colophon (`text-caption` + `text-meta`: `© 2026 SHIVAM CHAVAN`, `BENGALURU, IN`, `NEXT.JS + TAILWIND — NO TRACKING`). Mobile: stacked, `gap-8`.

**States:** links behave as tertiary; static otherwise.

---

## 6. Interaction states & motion principles

### 6.1 Tokens

| Token | Value | Used for |
|---|---|---|
| `--duration-fast` | `150ms` | color/border/underline changes, glyph shifts |
| `--duration-base` | `200ms` | row/button background shifts, panel content fade |
| `--duration-slow` | `250ms` | the single hero entrance only |
| `--ease-entrance` | `cubic-bezier(0.16, 1, 0.3, 1)` | entrance transforms (expo-out) |
| `--ease-state` | `cubic-bezier(0.4, 0, 0.2, 1)` | all hover/active/state transitions |

### 6.2 What may animate

**Properties:** `opacity`, `transform` (translate/scale ≤ 8px shifts), `color`, `background-color`, `border-color`, `text-decoration-color`, `text-decoration-thickness`. Nothing else.

**What may happen on this site (exhaustive list):**
1. One hero entrance: `opacity 0→1` + `translateY(12px)→0`, 250ms `ease-entrance`, on first paint only. Nothing else on the page animates in.
2. Hover/active/focus transitions at the durations above.
3. Expanded-panel content fade (§5.6).

**What may never animate:** width, height, padding, margin, top/left/right/bottom, font-size, line-height, box-shadow (none exist), filter/blur, letter-spacing; no marquees; no scroll-triggered per-element reveals; no parallax; no scroll-jacking; no looping/ambient animation of any kind; no cursor followers; no animated gradients; no typewriter effects; no counters that count up; no image zoom on hover beyond `scale(1.02)` (prefer none); no nav indicator sliding.

### 6.3 Hover / focus language

- Hover = **color + background + 1–2px transform**, never size or elevation changes.
- Keyboard focus is first-class: the global `:focus-visible` ring (2px `accent`, offset 2px, radius 0) on every interactive element, including whole-row links. Focus is never removed (`outline: none` is forbidden anywhere).
- `:active` states are instant (no transition delay on press): 1px translate or `bg-recessed`.

### 6.4 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
The hero entrance and panel fade are disabled entirely (opacity-only fallback). All information must be fully available with animations off.

### 6.5 Performance rules

- Only `transform` and `opacity` are compositor-friendly; color transitions are cheap on small surfaces — never transition background on large containers (row hovers are fine).
- No JavaScript-driven animation loops (`requestAnimationFrame` animations), no animation libraries (no framer-motion in v1). CSS transitions only.
- No `will-change` left in shipped CSS.
- Scroll effects: `scroll-behavior: smooth` allowed for in-page anchors (disabled by reduced-motion rule above); nothing else listens to scroll.

**Hard statement: there is no gratuitous animation on this site. If a motion cannot be justified as state feedback, it does not exist.**

---

## 7. Responsive breakpoints

### 7.1 Breakpoints — Tailwind v4 defaults, unmodified

`sm 640px` · `md 768px` · `lg 1024px` · `xl 1280px`. Do not override `--breakpoint-*`. Do not add named breakpoints. `2xl` is unused. Mobile-first syntax only (`base` = 320–639px).

### 7.2 Behavior per breakpoint

| Range | Grid | Container padding | Layout notes |
|---|---|---|---|
| 320–639px | 4-col, `gap-4` | `px-5` (20px) | single column; labels stack above content; nav shows 3 mono links; project rows two-line; hero ~44px |
| 640–767px | 4-col | `px-6` | same as above with more air; lead sizes step up via clamp |
| 768–1023px | 4-col (grid still 4) | `px-6` | 2-up arrangements allowed (footer cols, image pairs); hanging labels still stacked |
| 1024–1279px | 12-col, `gap-6` | `px-10` | hanging-label archetype engages; all asymmetric splits active |
| ≥1280px | 12-col | `px-10`, container capped 1200px | max sizes of all clamps reached |

### 7.3 Fluid type (authoritative `clamp()` values)

Already embedded per-role in §1.2 / Appendix A (`text-hero`, `text-display`, `text-heading`, `text-lead` are fluid; all other roles are fixed px — they do not scale with viewport). No other responsive type technique (no `vw` in arbitrary utilities, no JS fit-text).

### 7.4 320px degradation rules

- No horizontal overflow at 320px — verify with devtools; the page must not scroll sideways.
- `text-hero` at 44px must wrap to ≥3 lines cleanly; no word may rely on hyphenation.
- Spec tables stack (key above value); project index rows wrap to two lines; footer stacks.
- Long mono strings (URLs) get `break-all` inside value cells only.
- Tap targets ≥44px: nav links get `py-3` on mobile.

---

## 8. Iconography & imagery policy

### 8.1 Icons

**Recommendation adopted: virtually none — the site is text-first.**
- No icon library is installed. Social/contact links are mono text + `↗` glyph (§5.8).
- The only permitted glyphs are typographic characters already in the fonts: `↗`, `→`, `+`, `–`, `·`, `–`. These are text, not icons.
- If an SVG icon is ever strictly required (e.g., a "copy email" affordance): inline SVG, **single color `currentColor`**, **1.5px stroke**, 16px box, `stroke-linecap="square"`, radius-0 aesthetic, no fills, no brand-colored logos. Max 2 such icons site-wide.
- No favicon-as-icon flourish, no emoji anywhere.

### 8.2 Images

- **No stock photos. No AI-generated imagery. No illustration. No avatars with filters/treatments.**
- Allowed: **real screenshots of real products Shivam built** (VoiceScope dashboard, Agent Platform UI, AutoAce dashboard) and, optionally, one plain portrait if the user supplies one.
- Screenshot treatment: radius 0, `border border-line`, optional `p-2 bg-surface` matting, no shadow, no tilt/perspective, no browser-chrome mockups, `loading="lazy"` + explicit width/height (no CLS), `alt` text describing the actual UI. Screenshots sit inside the content column (max 8 cols), never full-bleed.
- No image galleries/carousels. Two images max per project.

### 8.3 Ornament policy

The only decoration on the site: **section numbers** (mono labels; optionally one large `ink-faint` serif numeral per section), **hairline rules**, and **mono uppercase labels**. Nothing else. No background patterns, no grids/dot-matrix backgrounds, no noise textures, no gradient washes, no oversized watermark words.

---

## 9. Do / Don't

| # | DO | DON'T |
|---|---|---|
| 1 | Open every section with the mono eyebrow pattern: `01 · SELECTED WORK` in `text-label text-ink-muted` | Don't use colored section headers, icon+title pairs, or centered section titles |
| 2 | Separate content with 1px `border-line` rules; let content hang from top rules | Don't wrap content in shadowed/rounded cards or background blocks |
| 3 | Cap prose at `max-w-measure` (65ch); lead at 56ch | Don't set text full-width across 12 columns or justify/hyphenate it |
| 4 | Use Instrument Serif only at ≥2.25rem, weight 400, with at most one italic word per display statement | Don't use the serif for body text, buttons, labels, or fake-bold it |
| 5 | Put all dates, indices, stack names, and metrics in IBM Plex Mono with `tabular-nums` | Don't set metadata in the sans or use proportional figures in tables |
| 6 | Reserve accent green for link hover, active nav, focus rings, and the one WINNER tag | Don't use accent for headings, backgrounds, large fills, or add a second accent color |
| 7 | Give every interactive element the global focus-visible ring and a hover state from §6.3 | Don't write `outline: none`, don't ship focus styles that only show on `:focus` for mouse users |
| 8 | Use exact column spans from §3.4 (`col-span-8`/`col-start-5`, hanging 3-col gutter) on lg | Don't center-align page sections or use symmetric 50/50 splits for article+aside |
| 9 | Pull every number, link, and claim verbatim from `docs/FACTS.md`; render "ForgeQuest winner" as the one accent tag | Don't invent metrics, add placeholder projects, or decorate with made-up stats |
| 10 | Test every view at 320px (no overflow) and 1280px (clamp ceilings) | Don't add entrance/scroll animations beyond the single hero fade-up or any motion not listed in §6.2 |

---

## Appendix A — Drop-in Tailwind v4 tokens (`globals.css`)

```css
@import "tailwindcss";

@theme {
  /* ---- Fonts: wired to next/font variables (see Appendix B) ---- */
  --font-display: var(--font-instrument-serif), Georgia, "Times New Roman", serif;
  --font-sans: var(--font-instrument-sans), ui-sans-serif, system-ui, sans-serif;
  --font-mono: var(--font-plex-mono), ui-monospace, "SF Mono", Menlo, monospace;

  /* ---- Color: single light "paper" scheme (dark out of scope v1) ---- */
  --color-bg: #FAFAF8;           /* warm paper */
  --color-surface: #FFFFFF;      /* raised: hover rows, panels */
  --color-recessed: #F3F2EE;     /* wells: code, spec tables */
  --color-ink: #191817;          /* primary text / primary button */
  --color-ink-hover: #35332E;    /* primary button hover */
  --color-ink-2: #454340;        /* body text */
  --color-ink-muted: #6E6A63;    /* labels, captions, metadata */
  --color-ink-faint: #98948B;    /* decorative numerals, disabled only */
  --color-line: #E7E4DD;         /* hairline rules */
  --color-line-strong: #D8D4CB;  /* hover rules, underlines, secondary border */
  --color-accent: #0F7B4F;       /* THE accent — deep signal green */
  --color-accent-hover: #0B6340;
  --color-accent-tint: #EAF2EC;  /* reserved: WINNER tag, current marker */

  /* ---- Type roles (utilities: text-hero, text-heading, ...) ---- */
  --text-hero: clamp(2.75rem, 1.25rem + 7.5vw, 6rem);      /* 44 → 96px */
  --text-hero--line-height: 1.04;
  --text-hero--letter-spacing: -0.015em;
  --text-hero--font-weight: 400;

  --text-display: clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem);  /* 36 → 56px */
  --text-display--line-height: 1.08;
  --text-display--letter-spacing: -0.01em;
  --text-display--font-weight: 400;

  --text-heading: clamp(1.5rem, 1.3rem + 0.8vw, 1.875rem); /* 24 → 30px */
  --text-heading--line-height: 1.2;
  --text-heading--letter-spacing: -0.02em;
  --text-heading--font-weight: 600;

  --text-subhead: 1.25rem;                                  /* 20px */
  --text-subhead--line-height: 1.35;
  --text-subhead--letter-spacing: -0.01em;
  --text-subhead--font-weight: 600;

  --text-lead: clamp(1.0625rem, 1rem + 0.3vw, 1.1875rem);  /* 17 → 19px */
  --text-lead--line-height: 1.65;
  --text-lead--letter-spacing: -0.005em;

  --text-body: 1rem;                                        /* 16px */
  --text-body--line-height: 1.65;

  --text-small: 0.875rem;                                   /* 14px */
  --text-small--line-height: 1.55;

  --text-caption: 0.8125rem;                                /* 13px */
  --text-caption--line-height: 1.5;

  --text-label: 0.75rem;                                    /* 12px mono micro-label */
  --text-label--line-height: 1.2;
  --text-label--letter-spacing: 0.08em;

  --text-meta: 0.75rem;                                     /* 12px mono metadata */
  --text-meta--line-height: 1.5;

  --text-code: 0.875rem;                                    /* 14px mono code */
  --text-code--line-height: 1.6;

  /* ---- Motion ---- */
  --ease-entrance: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-state: cubic-bezier(0.4, 0, 0.2, 1);

  /* ---- Structure ---- */
  --container-page: 75rem;      /* max-w-page = 1200px */
  --container-measure: 65ch;    /* max-w-measure */
  --radius-none: 0px;           /* radius 0 everywhere — no rounded-* utilities */
}
```

Durations are plain custom properties (use `transition-duration: var(--duration-fast)` or `duration-[var(--duration-fast)]`):

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 200ms;
  --duration-slow: 250ms;
}
```

### Appendix B — `next/font` wiring (layout.tsx)

```ts
import { Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const sans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});
// <html className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
```

### Base layer

```css
@layer base {
  :root { color-scheme: light; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--color-bg);
    color: var(--color-ink-2);
    font-family: var(--font-sans);
    font-size: var(--text-body);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  ::selection { background: var(--color-ink); color: var(--color-bg); }
  :focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
  h1, h2, h3 { color: var(--color-ink); }
  table, .tabular { font-variant-numeric: tabular-nums; }
}
```

### Utility conventions (project-wide classes)

- Page container: `mx-auto max-w-page px-5 sm:px-6 lg:px-10`
- Standard grid: `grid grid-cols-4 lg:grid-cols-12 gap-4 lg:gap-6`
- Micro-label: `font-mono text-label uppercase text-ink-muted` (weight 500 via `font-medium`)
- Hairline: `border-t border-line`
- Prose cap: `max-w-measure`
