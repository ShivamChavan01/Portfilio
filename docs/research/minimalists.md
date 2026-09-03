# Minimalist Developer Portfolio Research — 12 Sites

**Date:** 2026-09-03
**Method:** Live fetches (WebFetch + raw HTML/CSS download via curl). Hex values and font families are extracted from actual served CSS/HTML, not screenshots, so they are concrete but may miss runtime-only theming. Sections/hero order come from DOM reading order.

> Note: `mitchhanberg.com` (as given in the brief) does not resolve — DNS failure on every path. The correct live site is **https://www.mitchellhanberg.com**, which was fetched and analyzed instead.

---

## 1. Brittany Chiang — brittanychiang.com

- **Theme:** Dark only. bg `#0f172a` (Tailwind slate-900), body text slate-200 `#e2e8f0`, muted slate-400/500, headings near-white.
- **Hero formula:** `h1` Name → `h2` "Frontend Engineer" (green accent, mono-flavored) → 1-sentence pitch "I build accessible, pixel-perfect experiences for the web." → link into About. Left-aligned text; fixed left rail with vertical social icon list + email line.
- **Sections in order:** About → Experience → Projects → (new) Writing → Footer colophon ("Loosely designed in Figma and coded in VS Code…"). Nav: About / Experience / Projects.
- **Palette:** bg `#0f172a`, text `#e2e8f0`, accent teal-300/400 (`#5eead4`/`#2dd4bf`), borders slate (subtle, low-contrast).
- **Fonts:** Inter (self-hosted woff2, feature settings ss03/cv02/cv11) + ui-monospace stack for labels/numbers.
- **Projects/work:** Experience = timeline rows: `Title · Company`, date range right-aligned, paragraph + bulleted highlight list, tech listed as inline mono chips. Projects = bordered cards (6-col grid: 3-up desktop), each: folder icon + external-link icons, title, 2-line description, tech line. Small text, low density.
- **Socials:** Vertical icon rail pinned to left edge (GitHub, LinkedIn, CodePen, Instagram, Goodreads) + mirrored right-side email; footer has none.
- **Distinctive techniques:** (1) Fixed social rails on both page edges that don't move on scroll — signature of the design; (2) numbered section headers in mono ("01. About", "02. Experience") with a rule line extending to the edge.

---

## 2. Lee Robinson — leerob.com (leerob.io 307-redirects here)

- **Theme:** Light default. bg `#fafafa` (neutral-50), text `#171717` (neutral-900), secondary `#737373`/`#a1a1a1`. Effectively monochrome.
- **Hero formula:** `h1` handle `@leerob` → short bio block ("I'm an engineer and writer. I work on ML at SpaceX…") with inline links. No photo, no CTA button.
- **Sections in order:** Bio → Notes (topical essay index: Things I believe, Understanding AI, Developer experience…) → Blogs (reverse-chron list of title + "Month Year") → footer. Essentially a link-blog homepage now.
- **Palette:** near-monochrome grays (`#fafafa`, `#171717`, `#e5e5e5` borders); accent colors (`#f99c00`, `#ff6568`, `#fcbb00`) appear only in tiny metadata/badges, not as a brand accent.
- **Fonts:** Geist Sans (UI) + Geist Mono (mono) + **Iowan Old Style** (self-declared `--font-reading` serif for long-form) + Caveat (handwriting, sparingly).
- **Projects/work:** No cards at all. Plain text lists: title as link, one-line description or date. Extremely low density.
- **Socials:** Treated as plain text — inline links in bio (e.g., "angel invest"), no icon bars, no social section on the homepage.
- **Distinctive techniques:** (1) Handle-as-logo (`@leerob`) instead of a name-mark; (2) reading-optimized serif (`Iowan Old Style`) swapped in for prose while UI stays geometric sans — a three-register type system (UI / reading / handwriting).

---

## 3. Rauno Freiberg — rauno.me

- **Theme:** Light. Root background = Radix-style `--colors-gray1` (near-white), black text, grays for hierarchy.
- **Hero formula:** One continuous sentence: "Rauno Freiberg is an Estonian interaction designer working with Vercel and Devouring Details" — name inline as the sentence subject. No photo, no CTA.
- **Sections in order:** One-sentence bio → link list (Craft, History of Software Design, Projects, Field Notes) → archive links (Twitter, 2023, 2022) → GitHub, **Email (click-to-copy with "Copied" confirmation)** → manifesto block: "Make it fast. / Make it beautiful. / Make it consistent. / Make it carefully. / Make it timeless. / Make it soulful. / Make it." → three icon links.
- **Palette:** white/gray neutrals + signal colors used sparingly: red `#FF484C`, blue `#0000FF`; a full Radix-ish gray ramp in CSS vars.
- **Fonts:** Georgia serif (body) + JetBrains Mono (code/labels). Deliberately old-school.
- **Projects/work:** Homepage has zero project content — just labeled links; everything lives on subpages (`/craft`, `/projects`). The homepage is a directory, not a portfolio.
- **Socials:** Plain text links in the same list as everything else; email uses a copy-to-clipboard interaction.
- **Distinctive techniques:** (1) The homepage-as-index: no cards, no thumbnails, just one screen of typography; (2) micro-interaction detail (click-to-copy email with transient "Copied" state) — motion through utility, not decoration.

---

## 4. Brian Lovin — brianlovin.com

- **Theme:** Light default (bg neutral-50 `#fafafa`, text neutral-900 `#171717`), with dark mode (`#0a0a0a` bg, `#ffffffe6` text). Brand accent `#fc532a` (orange-red) used only for identity moments.
- **Hero formula:** `h1` Name → 1-sentence bio "I'm a software designer living in San Francisco, currently making AI products at Notion." No photo, no CTA.
- **Sections in order:** Bio → Writing (5 recent posts) → Projects (14 items) → Elsewhere (X, GitHub, YouTube) → "Sections" (sitemap-style footer nav with one-line descriptions) → footer utilities (Source, llms.txt, sitemap).
- **Palette:** Tailwind neutral ramp only: `#fafafa` / `#171717` / `#525252` / `#e5e5e5`; brand `#fc532a` rare; semantic colors (amber/red/emerald) exist for status bits.
- **Fonts:** Inter (sans) + Source Serif 4 (serif accents) + JetBrains/system mono. Weight discipline: 400/500/600/700 only.
- **Projects/work:** Flat unordered list, no cards. Each item = linked name + colon + one-line description ("HN — A minimal hacker news reader"). ~8 words per item max.
- **Socials:** A body-level "Elsewhere" text list (3 links), plus a sitemap footer. No icons.
- **Distinctive techniques:** (1) The "Sections" footer — a self-describing mini-sitemap where every link gets a one-line explanation; (2) 4-tier text-color hierarchy (primary/secondary/tertiary/quaternary CSS vars) so hierarchy never depends on size alone.

---

## 5. Cassidy Williams — cassidoo.co

- **Theme:** Light default — warm off-white `#faf5f6`, ink `#252525` — with a `body.dark-mode` toggle (pure black/white inversion).
- **Hero formula:** `h1` Name → `h2` "Software Engineer in Chicago" → tiny text nav (home, newsletter, blog, github, socials) → 1 playful sentence ("Hi! I'm Cassidy, and I like to make memes and dreams and software.") → 1 bio paragraph → newsletter CTA.
- **Sections in order:** Header/role → nav → bio → newsletter plug → "Here's my most recent posts or read a random one!" (5 posts) → subscribe links (Buttondown + RSS) → "View posts by tag" tag cloud (10 tags) → footer (© + repo link).
- **Palette:** Warm paper `#faf5f6`, text `#252525`; social hover accents are a pastel rainbow — green `#24d05a`, pink `#eb4888`, yellow `#e9bc3f`, blue `#10a2f5`.
- **Fonts:** **iA Writer Mono** for everything — the whole site is monospace. `max-width: 70ch`.
- **Projects/work:** No project section on the homepage; posts are a bulleted list: linked title + date + one-sentence summary + 1-3 hashtags. Very low density.
- **Socials:** Inline text links in the top nav; a /socials page aggregates the rest.
- **Distinctive techniques:** (1) All-monospace as an identity choice (typewriter/dev-terminal feel) with 70ch measure; (2) "read a random one!" + tag cloud as lightweight, playful navigation instead of heavy IA.

---

## 6. Josh W. Comeau — joshwcomeau.com

- **Theme:** Dual, first-class. Light bg pale blue `#e8f1fc`-family, dark bg `#0d0f12`; both via `data-color-mode` on `<html>` with animated `--color-background` transition.
- **Hero formula:** Playful logo/name mark → animated intro area (his site is known for an interactive greeting) → straight into content. Nav: categories / courses / goodies / About.
- **Sections in order:** Articles and Tutorials (big cards) → Browse By Category → Popular Content → Interactive Courses → General/footer. It's a blog-homepage hybrid.
- **Palette:** Light: `#e8f1fc` bg, `#2f2f2f` text, yellow `#ffd500`/`#e7c400` accent, pink `#c20544`, link blue `#4242fa`. Dark: `#0d0f12`, text `#a0d4ee`-family, same accents adjusted. Selection color customized (`#ffec8f`).
- **Fonts:** Wotfard (geometric sans) + Cartograph CF (mono) + Sriracha (handwritten "spicy" accent font for playful bits).
- **Projects/work:** Article cards with title + 2-3 sentence description + "Read more"; colorful gradient/illustrated headers. The most decorated of the 12, yet still restrained vs. mainstream portfolios.
- **Socials:** Minimal — About/nav links and footer; the site pushes newsletter over socials.
- **Distinctive techniques:** (1) CSS-variable theme system where *every* color transitions smoothly on theme swap (`--color-swap-duration`); (2) a third "playful" font register (Sriracha) used like handwriting in the margins.

---

## 7. Kent C. Dodds — kentcdodds.com

- **Theme:** Dual (explicit "Switch to dark mode" control). Light bg `#f7f7f7`/white, text gray-900 `#1f2028`; gray ramp for cards/borders.
- **Hero formula:** `h2` mission tagline "Helping people make the world a better place through quality software." → 3 CTAs (Read the blog / Take a course / Learn more about Kent) → video intro link → `h2` "Hi, I'm Kent C. Dodds…" personal paragraph. Name is in the nav, not a giant h1.
- **Sections in order:** Mission + CTAs → intro video → personal bio ("big extreme sports enthusiast") → "one stop shop" value prop → Educational blog (with live stats: "212 blog posts… read 963,245 times by 764,375 people") → Blog recommendations → Flagship training (Epic Product Engineer / Epic AI / Epic Web / Epic React / Testing JavaScript) → Discord community → personal closer.
- **Palette:** Neutral grays (`#f7f7f7`, `#1f2028`, `#818890`) + team colors yellow `#846901` / blue `#36a3ff` / red `#ff4545` used for playful brand bits ("yellow team").
- **Fonts:** Pure system stack — `ui-sans-serif, system-ui` + system mono. No webfont cost at all.
- **Projects/work:** Courses as card/feature blocks with short pitches; blog as stats-driven link. Text-first.
- **Socials:** Nav + Discord; footer standard.
- **Distinctive techniques:** (1) Live proof-by-numbers in copy ("read 963,245 times") instead of logos; (2) zero-webfont system-ui typography — the most performance-pure site of the set; defined `hero-image-reveal`/`hero-text-reveal` keyframes (subtle entrance motion only).

---

## 8. Wes Bos — wesbos.com

- **Theme:** Light default (white bg) with theme switcher ("Font?! Theme!?"), signature black-and-yellow; dark blue variants (`#193549`, `#00112f`) exist for code blocks/dark mode.
- **Hero formula:** `h2` "Hey, I'm Wes Bos." → `h2` value prop "I'm here to help you become a really good web developer." → 1 short bio paragraph → immediately into course cards. Name lives in nav.
- **Sections in order:** Mega-nav (Courses / Syntax podcast / About / Blog / Tips / JavaScript Notes / Speaking / /uses / Contact) → two-line hero → bio → Beginner JavaScript course feature → YouTube/GitHub links → Syntax podcast latest episode (#1035) → 𝕏 feed embed → footer.
- **Palette:** Yellow `#ffc600` accent on white; black `#000`; navy `#193549` / `#00112f` for code/dark; red `#ec1212` rare.
- **Fonts:** Custom **radnika** (sans) + **HCo Operator Mono** (mono, with a long fallback chain to JetBrains Mono/Berkeley Mono/Geist Mono). Base font-size 10px scaling trick.
- **Projects/work:** Course cards: image/screenshot + title + 2-sentence description + CTA URL. Podcast as a single "latest episode" row.
- **Socials:** Text links in nav + embedded 𝕏 timeline; footer minimal.
- **Distinctive techniques:** (1) A solid border drawn around the entire viewport (`html { border: 10px solid var(--dark) }`) — a frame as brand; (2) yellow-on-black terminal branding carried through scrollbar (`scrollbar-color: var(--yellow) var(--dark)`).

---

## 9. Sam Rose — samwho.dev

- **Theme:** Light. bg `#f7f7f7`-ish paper, dark ink `#402c1f`-family warm text; code blocks use Nord (`#2e3440`) and Monokai-ish syntax colors.
- **Hero formula:** Emoji-section structure instead of a classic hero: "👋 Hi." + 3-line self-intro ("I'm Sam. Husband, dad, programmer, whisky-drinker, writer… It's really nice to meet you."). Name only in the header logo.
- **Sections in order:** 👋 Hi → 🎨 I write (9 flagship essays listed) + ngrok work note → 💌 I newsletter → 🎙️ I talk (podcast list) → 📰 I play the NYT games → 😈 I tinker → ⌨️ I write → 👨🏻‍💻 I code → 📖 I read. Nav: Archive, RSS, Twitter, GitHub, Bluesky.
- **Palette:** Paper white bg, warm dark text, functional accents: teal `#66eae9`, yellow `#ffdb59`, purple `#b372e0`, green `#4ec879`, red `#ce1f01` — mostly for interactive-essay widgets.
- **Fonts:** System serif stack for headings (Iowan Old Style, Palatino…), humanist sans body (Seravek, Ubuntu, Calibri, DejaVu Sans, source-sans-pro), mono for code. All system, zero webfonts.
- **Projects/work:** Essays as a plain list of titles (Big O, Reservoir Sampling, Turing Machines…) — each is itself an interactive visual essay. No cards, no thumbnails.
- **Socials:** 4 text links in the header nav; nothing in footer.
- **Distinctive techniques:** (1) Emoji-labeled "I verb." section headers (`🎨 I write.`) — scannable personality in 2 words; (2) investment in the artifact (interactive essays) instead of portfolio chrome — credibility through content.

---

## 10. Adam Wathan — adamwathan.me

- **Theme:** Light. bg light slate `#f1f5f8`, text dark slate `#22292f`, muted `#606f7b`/`#8795a1`, borders `#dae1e7`.
- **Hero formula:** `h1` "Who the hell am I?" (conversational) → 2 short paragraphs: who he is, what he shares, what he's working on now (Tailwind CSS) → links to articles/talks/screencasts/podcast/courses inline → uses-page link.
- **Sections in order:** It's nearly a single-screen page: nav (Articles, Talks, Screencasts, Podcast, Courses, Projects, Journal) → h1 + bio → done. Everything else lives on subpages.
- **Palette:** Tailwind-v1-era slate ramp: `#f1f5f8` bg, `#22292f` ink, `#38c172` green / `#3490dc` blue as link/action colors. No dark mode.
- **Fonts:** system-ui sans for body + a serif stack (Constantia/Lucida Bright/Georgia) for display headings + system mono for code.
- **Projects/work:** Not on homepage; prose mentions with inline links only.
- **Socials:** Barely present — @adamwathan inline in copy; nav links instead.
- **Distinctive techniques:** (1) Homepage as one screen of prose with zero lists — trust the reader to click; (2) playful conversational h1 ("Who the hell am I?") sets tone before any design element does.

---

## 11. Mitchell Hanberg — www.mitchellhanberg.com  *(brief listed mitchhanberg.com — dead domain)*

- **Theme:** Light. White bg, warm-dark ink `#2B332D`, monochrome UI.
- **Hero formula:** Terminal prompt aesthetic: `h2` `/mitch` → `h1` role "Staff Software Engineer" → 2-sentence bio (location, what he builds, affiliations). Header nav is command-like: `/articles /micros /bookshelf /uses`.
- **Sections in order:** /mitch prompt + role + bio → Projects (Expert, elixir-tools, Temple, Wallaby — each h3 + paragraph) → Conference Speaking → Podcasts → Get in touch → footer shows `/mitch/ ▌` with a blinking-cursor block.
- **Palette:** White bg, `#2B332D` text, plus "fallout" terminal accent set: amber `#ffb641`, blue `#2ecfff`, green `#1bff80`, pale cyan `#c0ffff` — used like syntax highlighting.
- **Fonts:** System-ui sans + **Pixel Code** monospace (fancy mono var).
- **Projects/work:** h3 title + 1 short paragraph each — list rows, no cards, no images.
- **Socials:** "Get in touch" section near the end; nav has no social links.
- **Distinctive techniques:** (1) Whole-site terminal metaphor: prompt-style URLs as nav, blinking block cursor in footer; (2) role-as-h1 ("Staff Software Engineer") with the name in the path `/mitch` — identity through the metaphor.

---

## 12. Sara Soueidan — www.sarasoueidan.com

- **Theme:** Light. White `#fff` bg, dark gray text `#4f4f4f`/`#4d4d4d`, borders `#e3e3e3`.
- **Hero formula:** `h1` "Hi, I'm Sara." → 1 paragraph positioning statement ("independent web user interface developer, author, speaker, and educator…") with a clearly named audience ("My people are…"). Nav: Blog, Newsletter, Speaking, The Accessibility Course, About Me.
- **Sections in order:** Intro → Latest articles from the blog (title, published/updated dates, summary) → Notable updates → Newsletter → Subscribe elsewhere → RSS → Follow me elsewhere → More on this site.
- **Palette:** Monochrome grays + strong orange-red accent `#ea4110`/`#f2643b`, supporting green `#10bf7a`, mint `#d3fbeb`. Accessibility-focused contrast choices.
- **Fonts:** Inter (sans, via var) + Consolas/Monaco mono for code; system-ui fallbacks.
- **Projects/work:** Articles as list rows with meta dates and 1-2 sentence summaries. No cards/thumbnails on home.
- **Socials:** Dedicated "Follow me elsewhere" + "Subscribe elsewhere" sections — socials as first-class content blocks rather than icons.
- **Distinctive techniques:** (1) Explicit published/updated date metadata on every article (credibility + freshness); (2) an in-progress redesign banner that leans into honesty ("designed by a developer") — persona over polish; accessibility-first color choices throughout.

---

# Pattern-Frequency Summary (across 12)

| # | Pattern | Count | Notes |
|---|---------|-------|-------|
| 1 | **One-sentence bio hero** (name/role + 1 short line, no photo, no CTA button) | 12/12 | Only the phrasing differs (sentence-integration at rauno.me, terminal prompt at mitchellhanberg.com) |
| 2 | **Light default theme** | 10/12 | Only brittanychiang.com is dark-only; joshwcomeau defaults light. ~5/12 ship a dark toggle (brianlovin, cassidoo, josh, kent, wesbos) |
| 3 | **Writing/blog as a homepage section** (recent posts list, title + date + ≤1-sentence blurb) | 11/12 | All except adamwathan.me (links out instead). Credibility comes from writing, not screenshots |
| 4 | **Monochrome base + at most one accent color** | 9/12 | Brittany (teal), Wesbos (yellow), Sara (orange-red), Brian (orange `#fc532a`), Rauno (red `#FF484C`), Josh (yellow), Mitchell (terminal trio), Lee (near-none), Kent (neutral UI). Cassidoo's pastel rainbow and samwho's widget colors are the exceptions |
| 5 | **Text-row project/work lists, not card grids** — linked title + one line, ≤20 words | 9/12 | Cards only where the product IS the content (josh's tutorials, wesbos's courses); brittany is the classic card exception |
| 6 | **Monospace as a secondary/accent font** (labels, dates, chips, nav) | 10/12 | Inter+mono (Brittany, Brian, Sara), Geist Mono (Lee), Cartograph (Josh), Operator Mono (Wesbos), Pixel Code (Mitchell), system mono (Kent, Adam); cassidoo is 100% mono; samwho mono-for-code |
| 7 | **Single centered column, narrow measure (~60–75ch)** | 8/12 | Explicit 70ch at cassidoo; prose-width at brianlovin, leerob, samwho, adam, mitchell, sara, kent. Brittany (~1200px + side rails) and wesbos/josh are the outliers |
| 8 | **Few nav items (≤7) and no mega-menu on personal pages** | 9/12 | rauno.me: ~4; adam: 7; sara: 5; cassidoo: 5; mitchell: 4. Wesbos (9) and kent (7+) are content-business outliers |
| 9 | **Subtle or no motion; motion = utility** (copy-email confirmations, theme-swap transition, hero fade-in) | 9/12 | Nobody runs scroll-jacking or parallax; josh/kent have the most polish, still restrained |
| 10 | **Footer colophon / meta-footer** ("built with X", sitemap-of-sections, llms.txt) | 8/12 | Brittany, Lee, Brian, cassidoo, samwho, Mitchell, Sara, Josh |
| 11 | **System or single-webfont type strategy** (0–2 webfonts) | 9/12 | Kent, samwho, Adam: zero webfonts; most others exactly one family + mono |
| 12 | **Socials as plain text links (nav, "Elsewhere" list, or one section), not icon walls** | 10/12 | Only Brittany uses an icon rail (and it's the site's signature) |
| 13 | **Role/title stated as the second line of the hero** ("Frontend Engineer", "Software Engineer in Chicago", "Staff Software Engineer") | 8/12 | Kent and Wesbos lead with a mission/value-prop line instead; rauno integrates it into the sentence |
| 14 | **Numbered/mono section headers with rule lines** | 4/12 | Brittany ("01. About"), samwho (emoji verb headers), Mitchell (prompt headers), rauno (bare h3s) — the loudest remaining "decoration" |

## Consensus Recipe (what "the respected minimalist portfolio" looks like in 2026)

1. Open with **name + one-line role + one-sentence pitch** — nothing above it, no photo, no hero image.
2. Default to a **light, near-monochrome page** (white/`#fafafa` bg, `#171717`-class ink) with **one accent** reserved for links and small highlights; offer dark mode as a toggle, not the default.
3. Set UI in **one sans (often Inter or system-ui) + one monospace** for dates, labels, and section numbers; optionally a serif for reading.
4. Present work as **flat text rows** — linked title, colon or dash, one-line description — and let subpages carry detail.
5. Show **recent writing (5 items, title + date + one-liner)** instead of a skills grid; skills/testimonials are effectively absent from all 12.
6. Keep socials to **plain text links** in nav/footer; keep nav to ≤5 items.
7. Spend the motion budget on **one or two micro-interactions** (click-to-copy email, theme transition), not scroll effects.
8. Close with a **colophon footer** ("built with X, set in Y") that doubles as a credibility signal.
9. Differentiate with **one idea executed consistently** (all-mono type, terminal metaphor, social side-rails, viewport frame) — every site has exactly one signature, not ten.

## Source URLs (all fetched 2026-09-03)

- https://brittanychiang.com
- https://leerob.com (redirect target of https://leerob.io)
- https://rauno.me
- https://brianlovin.com
- https://cassidoo.co
- https://www.joshwcomeau.com
- https://kentcdodds.com
- https://wesbos.com
- https://samwho.dev
- https://adamwathan.me
- https://www.mitchellhanberg.com (correct URL; https://mitchhanberg.com does not resolve)
- https://www.sarasoueidan.com
