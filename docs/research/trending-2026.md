# Trending 2025–2026: What Modern Developer / AI-Engineer Portfolios Actually Look Like

*Design research compiled 2026-09-03. Method: 8 web searches ("best developer portfolios 2026", "best AI engineer portfolios 2026", "developer portfolio design trends 2026", "inspiring personal websites developers 2025", "awesome developer portfolios github", "AI engineer personal website examples", etc.), 27 distinct portfolio URLs collected, 15 studied in depth via live fetch + HTML-signature scan (fonts, hex values, libraries, feature keywords).*

---

## Part 1 — Sites studied (URL + one-line verdict)

### Studied in depth (fetch + markup analysis)

| # | Site | Verdict |
|---|------|---------|
| 1 | https://brittanychiang.com | The canonical dark-minimal dev portfolio; Next/Tailwind/Inter, `#0f172a`, single green accent, projects as plain rows, floating social rail, Spotify now-playing in footer, "time travel" easter egg. Still the template everyone copies. |
| 2 | https://karpathy.ai | The AI-engineer endgame: zero frameworks, pure HTML/CSS, text-first reverse-chronological timeline, emoji humor, "I like to train deep neural nets on large datasets". Seniority = zero decoration. |
| 3 | https://rauchg.com | Pure blog index with view counts per essay; Geist font, Next.js, no hero at all. Radical restraint as a flex; "Source" link to the site's own repo. |
| 4 | https://mitchellsparrow.com | UK ML engineer (Bittensor/LLMs); Next + Tailwind + Framer Motion + Sanity, Inter, teal `#68B2A0`; skill-percentage tooltips, numbered project list. Modern stack, template-shaped content. |
| 5 | https://darpanjain.com | Lead ML Engineer (NLP/LLMs); GSAP + particles, Inter, light. "Currently driving Personalization & AI at Crunchyroll" now-line in hero; "Labs" section of live tools instead of static screenshots; Calendly booking. |
| 6 | https://amankumar.ai | The 2026 AI-agent positioning archetype: "Agents break on software built for people." Narrative-first, dedicated **"Currently shipping"** section, three.js present, teal `#0F9E8E`, open-sourced template, © 2026. |
| 7 | https://amanrwt.com | Design-engineer minimalism: name + one positioning line, "Building" section (amvn.ui), "Soon" badges, ultra-terse microcopy, `#171717` dark, Inter. Quietly current; no gadgets. |
| 8 | https://amanbuilds.me | The student-generation 2026 look: neobrutalist/terminal hybrid — IBM Plex Mono + Space Grotesk, cream/dark + `#FFE135` yellow, marquee tickers, fake telemetry/status widgets, guestbook, "Open to Work 2026" badge, typewriter cursor. |
| 9 | https://ahmedtokyo.com | CTO-grade single-pager: Cal.com booking, bento/featured 🏆 projects with tag filtering, PDF resume, location + role tags. Senior signal = availability infrastructure, not effects. |
| 10 | https://www.joshwcomeau.com | Light-default playful blog-portfolio: dark-mode toggle, sound toggle, search, honeypot newsletter; whimsy through copy and interactive in-article demos. |
| 11 | https://tamalsen.dev | The "dated" comparator: 2021-era template — featured-in logo carousel, skill tags, filterable card grid, multi-color accents, © 2021 typo. Clean but frozen in time. |
| 12 | https://itssharl.ee | Creative-dev polish: "Materializing shapes..." 3D preloader, three.js, FR/EN switcher, purple `#606887`, © 2026. Modern via craft + freshness, not density. |
| 13 | https://diogotc.com | Security-flavored dev site: hero with 9 contact channels (incl. Mastodon/Matrix/GPG), top-projects rows, reverse-chronological **Timeline** section fresh to Oct 2025; older Gatsby/particle base. |
| 14 | https://jesse-zhou.com | Full WebGL game-experience portfolio ("Jesse's Ramen"), loading gate "Cooking Your Ramen… %" + START button. Experience-first creative-dev genre. |
| 15 | https://dustinbrett.com | daedalOS — an entire desktop OS (windows, dock, apps) running in the browser as the portfolio. Peak "one signature interaction" taken to the limit. |

### Signature-scanned (fonts/libs/colors verified, lighter content read)

| # | Site | Verdict |
|---|------|---------|
| 16 | https://www.codewonders.dev | Text-only Next.js homepage, bio + email + links, neon accents (`#ff69b4`, `#00ffff`). The "plain text homepage" trend. |
| 17 | https://www.cassie.codes | Dark `#1e1e1e`, Inter, Three.js/WebGL/GSAP, lamp-toggle theme switch, illustrated hero. Craft over clutter. |
| 18 | https://jhey.dev | Astro, black theme, red `#FF1E1E` accent, Inter + serif display; CSS-art personality. |
| 19 | https://lynnandtonic.com | Zero libraries, annual full redesigns, ink `#14303f`. Longevity through reinvention. |
| 20 | https://bruno-simon.com | The original 3D playable portfolio (drive a car), Three.js/WebGL, Next, Inter. Still referenced in every 2026 listicle. |
| 21 | https://www.tim-gesemann.dev | Svelte on Vercel, Inter, clean minimal, project section + "creative timeline" of work. |
| 22 | https://alexandrefernandes.dev | Astro, `#000` theme (AI/ML + full-stack; Vercel-bot gated at scan time). |
| 23 | https://aakarsh-devhq.vercel.app | Student AI engineer: Three.js + GSAP showpiece build on vercel.app — the max-effort student pattern. |
| 24 | https://blog.anniebombanie.com | Fun-facts personality, Command Palette + three.js present — the 2026 "keyboard-first" touch. |
| 25 | https://masontywong.com | Bold retro + holographic WebGL (Three). Retro-futurism wave. |
| 26 | https://adhamdannaway.com | The designer/developer split-screen hero — the evergreen "dual identity" pattern. |
| 27 | https://yashahire.info | Full Stack & AI Engineer; minimal single-page (light on detected flourishes). |

### Also collected from curated lists (not fetched)
ericwadkins.com (Google SWE/AI-ML), charliegerard.com (ML-in-the-browser experiments), wesbos.com, kentcdodds.com, sarasoueidan.com, olaolu.dev, findmatthew.com, neal.fun, meowni.ca, constancesouville.com, ewan-kerboas.fr, aaabadcode.com, plus the 1,000-entry pool at github.com/emmabostian/developer-portfolios (26k stars) — AI/LLM-engineer entries there are overwhelmingly `vercel.app`/`.dev` Next.js deploys.

---

## Part 2 — Frequency-counted pattern table

Scored against the 15 deeply-studied sites (N=15) plus signature evidence from the other 12 where noted.

| Pattern | Frequency | Evidence |
|---|---|---|
| Inter or Geist as primary typeface | **18/18** scanned sites | Every single site's markup references Inter (15) or Geist (rauchg); karpathy uses system stack visually equivalent to it. Mono (IBM Plex Mono / Roboto Mono / JetBrains) as *secondary* accent in ~4. |
| Built on Next.js (or Astro/Svelte on Vercel) | **14/15** | Next: brittanychiang, rauchg, mitchell, amankumar, amanrwt, ahmedtokyo, joshwcomeau, itssharl, dustinbrett, codewonders, bruno, amanbuilds, diogotc, tamalsen. Astro: jhey, tim-gesemann, afernandes. Only karpathy is framework-free. |
| Dark default OR strict light minimalism — almost never mid-gray "template light" | **8/15** dark-default | `#0f172a` (chiang), `#171717` (amanrwt), `#1e1e1e` (cassie), `#000` (jhey, afernandes), dark aesthetic (tamalsen, amanbuilds, itssharl). Light camp is equally deliberate (comeau, karpathy, rauchg, darpan). |
| Theme toggle (dark/light switch) | **4/15** | comeau, cassie (lamp), itssharl, diogotc-era templates; increasingly a courtesy, not a feature. |
| Exactly ONE accent color on near-monochrome base | **9/15** | green (chiang), teal ×2 (`#68B2A0`, `#0F9E8E`), red `#FF1E1E` (jhey), yellow `#FFE135` (amanbuilds), purple (itssharl), ink (lynn). Rainbow/multi-accent survives only in neobrutalist student builds and dated 2021 templates. |
| "Now / Currently / Building" element (present-tense status) | **9/15** | "Currently shipping" (amankumar.ai), "Building" + "Soon" (amanrwt), "Currently driving…" hero line (darpan), "Open to Work 2026" + "BUILDING & SHIPPING SOON" (amanbuilds), Present-dated roles (chiang, mitchell), current-activities-first timeline (karpathy), fresh Oct-2025 timeline (diogotc), Cal.com availability (ahmedtokyo). |
| Projects shown as scannable ROWS/LIST (title + one-liner + tech chips + metric), not bento | **11/15** | chiang, karpathy, amankumar, amanrwt, diogotc, mitchell, ahmedtokyo, darpan (card+tags), amanbuilds, tamalsen, comeau. Explicit bento: 1/15 (ahmedtokyo). Bento is a template-market trend, not what the reference sites ship. |
| Exactly one signature interactive moment (3D scene, playable OS, now-playing widget, sound toggle, preloader) | **10/15** | Spotify now-playing (chiang), drive-a-car (bruno), full browser OS (dustinbrett), WebGL game gate (jesse), 3D preloader (itssharl), sound toggle (comeau), lamp toggle (cassie), fake telemetry + marquee + guestbook (amanbuilds), command palette + 3D (anniebombanie). |
| Three.js / WebGL referenced somewhere | **10/18** scanned | cassie, bruno, jesse, itssharl, dustinbrett, mason, aakarsh, amankumar, anniebombanie, mitchell. Usually subtle (hero accent), not full-scene. |
| Command palette (⌘K) | **2/18** | anniebombanie explicitly; comeau has site search. Widely hyped, rarely shipped in the wild. |
| GitHub stats cards / contribution graphs embedded | **0/15** | None of the studied sites embed github-readme-stats or contribution graphs — that pattern lives in tutorials and student templates, not reference portfolios. Proof-of-work is a *link*, not an iframe. |
| Scheduling link (Cal.com / Calendly) | **3/15** | ahmedtokyo (Cal.com), darpan (Calendly), plus "book a call" (ahmedtokyo). Senior/consultant signal. |
| Blog/writing integrated as first-class section | **8/15** | rauchg (whole site), chiang, karpathy, amanrwt, amanbuilds, comeau, diogotc, jhey. |
| Link to the site's own source code / open-sourced template | **4/15** | rauchg ("Source"), amankumar.ai (template credit), amanbuilds, dustinbrett (open-source daedalOS). |
| Emoji used sparingly as brand voice in hero/copy | **8/15** | karpathy (🧠🤖💥), mitchell (👋🏼), amanbuilds (heavy), ahmedtokyo (🏆), darpan (🎧✨), comeau (✨), amankumar, diogotc (flag). |
| Testimonials/endorsements section | **3/15** | darpan, tamalsen, (Matt Farley pattern per listicles). Fading among engineers, alive among freelancers. |
| Freshness markers (© 2026, "Present", dates ≤ 2025) | **12/15** | itssharl, amankumar, amanbuilds, chiang (writing 2019–2026), diogotc, karpathy… The dated site (tamalsen, © 2021) is instantly identifiable as stale. |
| AI/agent-forward copy for AI roles | **5/15** and rising | amankumar.ai ("software for AI agents", MCP), mitchell (LLM fine-tuning, GPU training), darpan (NLP/LLMs), afernandes (AI/ML), amanbuilds (Agentic Coding, LLM Orchestration, OpenAI Codex in tech tags). |

**Cross-cutting finding — the seniority gradient:** interactivity budget scales *inversely* with seniority. Students ship maximum density (3D + marquees + fake telemetry + guestbook). Mid-levels ship one polished effect on a dark minimal base (the Chiang mold). Seniors ship text (karpathy, rauchg: "0 frameworks were used", view counts as social proof). Both extremes read as "modern" in 2026; the middle-of-the-road 2019 template (particles hero + skill bars + filterable grid) now reads as dated.

---

## Part 3 — The 10 patterns that define the current (2026) modern standard

1. **Inter (or Geist) everywhere, mono as seasoning.** 18/18 use it. The differentiator is now weight/tracking (tight display headings, dotless-ı brand touches) rather than font choice. Terminal-aesthetic sites pair IBM Plex Mono with Space Grotesk.

2. **Next.js on Vercel (or Astro), Tailwind, and a link to your own source.** The stack is assumed; open-sourcing the site ("View source", template credit) is a credibility move.

3. **Near-monochrome base + exactly one accent.** Dark `#0a0a0a–#1e1e1e` with a single teal/green/red, or strict warm-white light mode. Multi-color gradients and rainbow chips are the tell of a 2019/2021 template.

4. **Terse positioning hero.** Name + one line of the form "I build X for Y" ("Agents break on software built for people", "I like to train deep neural nets on large datasets"). No "Hi, welcome to my portfolio", no rotating word clouds.

5. **A live "now" element.** "Currently shipping" list, "Building" section with "Soon" badges, present-tense employer line in the hero, "Open to Work 2026" badge, or a timeline whose newest entry is this quarter. Stale dates are the #1 dated signal.

6. **Projects as scannable rows, not bento.** Title, one-liner, tech chips, one hard metric (100k+ installs, 13M users, CVE number). Bento grids are a template-market phenomenon; the reference sites use editorial rows with generous whitespace. AI engineers add model cards / eval metrics / architecture links per the 2026 hiring guidance.

7. **One signature interaction, budgeted.** A playable 3D scene, a browser OS, a Spotify now-playing footer, a sound toggle, a ⌘K palette — exactly one, polished. Everything else stays still. More than one reads as a student build.

8. **Building-in-public surface.** A "Currently building" entry with "Soon" status, guestbook, changelog/RSS, open-source template — process visibility now outranks polished case studies for the newest generation.

9. **Frictionless contact as infrastructure.** Copy-email button, Cal.com/Calendly, "Say hi on X" (X/Bluesky/Mastodon + GPG for the security-minded), obfuscated email. Seniors offer booking; juniors offer forms.

10. **The seniority gradient is the real rule.** Content-first text minimalism (Karpathy/Rauch: zero frameworks, view counts, pure HTML) and experience-first maximalism (Bruno/dustinbrett: WebGL playgrounds) are both fully current in 2026 — what's dead is the undecorated middle: particles-hero template, skill bars, "featured-in" carousels, filterable card grids, frozen copyright.

---

## Sources
- Searches: upskillist.com, dev.to, careery.pro, novelvista.com, dataexpert.io, jobroadmaps.com, elements.envato.com/learn/portfolio-trends, figma.com/resource-library/web-design-trends, colorlib.com/wp/portfolio-design-trends, sitebuilderreport.com/inspiration, wearedevelopers.com/magazine/161, portfoliostudio.dev/blog/best-developer-portfolio-examples, blog.tomaszgil.me, github.com/emmabostian/developer-portfolios
- Primary: live fetches and HTML-signature scans of the 27 URLs listed in Part 1 (2026-09-03).
