# Design Research: AI/ML Engineer Portfolios & Personal Sites

**Researcher:** Design research pass, 2026-09-03
**Method:** Live site fetches (WebFetch primary; `web_reader` fallback where WebFetch timed out — noted per site). Consistent probe: hero content/format, section list in order, color scheme, fonts, how AI projects/research/demos are presented, credibility mechanics, and what makes it read as specifically "AI engineer."
**Sample:** 15 sites — 8 named prominent AI/ML engineers + 7 found via web search (minimum required was 4).

> Fetch-status note: karpathy.ai and swyx.io repeatedly timed out on WebFetch and were captured via the web_reader fallback; all other sites fetched via WebFetch. Text extraction cannot always see CSS, so color/font fields are marked "not verifiable from fetch" where that applies — no invented values.

---

## Part 1 — The 8 named sites

### 1. karpathy.ai — Andrej Karpathy
- **Fetch status:** WebFetch timed out (3 attempts); captured via web_reader fallback.
- **Hero:** A plain portrait photo, followed immediately by a reverse-chronological **career timeline with org logos**: "2024 –" (Eureka Labs), "2023 – 2024" (return to OpenAI — "I came back to OpenAI where I..."), then Tesla and founding-OpenAI entries. The hero *is* the resume, told as a timeline.
- **Sections in order:** photo → career timeline (logos + dated stints) → Projects (nanoGPT, nanochat, llm.c, micrograd, Eureka, etc., each linking to GitHub) → Talks and Presentations (YouTube links) → Essays/writing → "Fun" → Socials (X/YouTube/GitHub).
- **Color scheme:** Black text on white/off-white. No accent color, no gradients, no dark-mode chrome observed. Almost aggressively plain HTML.
- **Fonts:** No webfonts detected; system/monospace-flavored text.
- **AI work presentation:** Projects are the homepage. Each is a named OSS repo with a one-line description. Talks are direct YouTube links. No cards, no thumbnails, no metrics badges.
- **Credibility:** Employer logos in the timeline (OpenAI, Tesla), the sheer fame of the repos, and YouTube talks with millions of views. No testimonials, no follower counts stated.
- **"AI engineer" signature:** Everything is "build models from scratch" — training code, tokenizers, educational repos. Zero marketing copy. The site's plainness itself signals "I don't need to sell you anything."

### 2. swyx.io — Shawn "swyx" Wang
- **Fetch status:** WebFetch timed out; captured via web_reader fallback.
- **Hero:** Name + role line: "Writer, Founder, Devtools Startup Advisor" (San Francisco), then a **mission statement**: "I foster the Rise of the AI Engineer and am working on Latent Space, AI Engineer Guild..." plus audience proof: ">10,000 people subscribe" and a Subscribe button. Also "Currently: OverGrid" latest experiment.
- **Sections in order:** intro/mission → "Latest Experiment" (OverGrid browser game + hackathon builds) → Recent posts (reverse-chron: LLM Codegen, "Rise of the AI Engineer", CUDA-for-AI-Engineers, 2025 agent/eval posts) → "Best of" essays list (classics like "Learn In Public") → Talks, grouped by era (2016–2018, 2019–2020, 2021–2022, 2023–2025) → footer socials.
- **Color scheme:** Meta theme colors found in markup: `#facc15` (yellow) and `#3730a3` (indigo) as accent pair; light background.
- **Fonts:** Not verifiable from fetch.
- **AI work presentation:** Writing is the product; experiments/demos are framed as "Latest Experiment" (a playable game). Talks archived by year. Posts tagged by AI-engineer vocabulary (agents, evals, codegen).
- **Credibility:** Subscriber count (">10,000"), the coining/ownership of "AI Engineer" as a term, Latent Space podcast, long talks archive, classic evergreen essays.
- **"AI engineer" signature:** Literally defines the discipline ("Rise of the AI Engineer") — identity-first branding, mission-statement hero, community-building artifacts (podcast, guild, summit).

### 3. simonwillison.net — Simon Willison
- **Hero:** H1 "Simon Willison's Weblog" — **no tagline, no bio, no title**. Directly under: sponsor line ("Sponsored by: Greptile") and a **tag cloud with counts** ("ai 2,213", "pelican-riding-a-bicycle 139", "qwen 61"). Nav: About, Subscribe, TILs, Tools.
- **Sections in order:** header/nav → tag-frequency strip → sponsor banner → content-type tabs (Entries, Links, Quotes, Notes, Guides, Elsewhere) → reverse-chronological entries under date headings → "Highlights" bullet list (~40 key posts) → "Monthly briefing" sponsorship pitch → footer (Disclosures, Colophon, archives 2002–2026).
- **Color scheme:** Not verifiable from fetch (site is a famously plain light theme in reality).
- **Fonts:** Not verifiable from fetch.
- **AI work presentation:** A dense link-blog/tumblog: timestamped micro-posts typed as "Sighting", "Release", "Tool", quotes — interleaved with long essays ("[... 2,270 words]"). OSS releases link to GitHub tags with annotated changelogs; demos link to hosted pages; one HTML5 video embed. His signature "Generate an SVG of a pelican riding a bicycle" model test recurs as a benchmark meme.
- **Credibility:** No job title anywhere. Credibility = **longevity** (continuous archive 2002–2026), first-party OSS releases (llm, datasette, sqlite-utils), a TILs subdomain, self-funded sponsorship, and relentless first-hand experimentation (system-prompt forensics, prompt-injection writeups).
- **"AI engineer" signature:** Practitioner forensics — benchmarking models the same day they ship, leaking/reverse-engineering system prompts, coding-agents vocabulary. The blog *is* the portfolio.

### 4. philschmid.de — Philipp Schmid
- **Hero:** None in the marketing sense. Site identity is just the name "Philschmid" in the header with a "Search ⌘K" shortcut; top heading is "Index" — a **pure blog index**, not a landing page.
- **Sections in order:** header nav (Blog, Projects, Newsletter, About Me) → H1 "Index" → month-grouped post lists (2026 September backward) → footer (©, Imprint, RSS, theme link) → social row (Mail, X, LinkedIn, GitHub) → pagination (14 pages).
- **Color scheme:** Not verifiable from fetch; footer "theme" link implies light/dark toggle.
- **Fonts:** Not verifiable from fetch.
- **AI work presentation:** Reverse-chronological list: linked title + date + dash-separated topic tags ("Agents, Harness Engineering, Bash, Subagents"). No cards, thumbnails, or embeds. Plain typographic index.
- **Credibility:** None stated on the index page — implied through a 14-page deep archive, dedicated Projects page, newsletter, About, and the "philschmid" handle across GitHub/LinkedIn/X.
- **"AI engineer" signature:** Every tag is agent-stack vocabulary — MCP, Computer Use, Subagents, Evaluation, "Harness Engineering". Titles are hands-on build guides ("How Foundational Models Became Superhuman in Bash"; controlling Android with "Gemini 3.7 Flash and 150 lines of Python"). Working engineer's technical blog, not a portfolio.

### 5. sebastianraschka.com — Sebastian Raschka
- **Hero:** H1 greeting with a credential: "**Hello, I'm Sebastian Raschka, PhD**" + bio: "I am an **LLM Research Engineer** with over a decade of experience in artificial intelligence," naming dual roles (senior staff engineer at Lightning AI; statistics professor at UW–Madison) and "My expertise lies in LLM research and the development of high-performance AI systems."
- **Sections in order:** skip link; header with name, social icons (X, LinkedIn, GitHub), dark-mode toggle (moon icon), search → main nav (Home, Blog, Books, Courses, LLM Gallery, LLMs From Scratch, Reasoning Models, Talks + More dropdown with Blog Archive, Paper Notes, Research, About) → hero + bio → CTA links ("Start Here", "Best Articles", RSS, Subscribe via Email) → "Recent Articles and Notes" split into "Latest Articles" and "Quick Notes" → footer with social/professional links, © 2013–2026.
- **Color scheme:** Not verifiable from fetch; confirmed light/dark theme toggle.
- **Fonts:** Not verifiable from fetch.
- **AI work presentation:** Everything productized as a nav-level item: books ("Build a Large Language Model (From Scratch)", "Reasoning Models"), courses, an **LLM architecture gallery**, talks. Articles are dated entries with one-line summaries; "Quick Notes" are short dated model/paper observations.
- **Credibility:** PhD in the hero heading; "over a decade of experience"; named industry + academic roles; published books; a dedicated Research/publications page; Google Scholar link in footer; LinkedIn offered "for my most up-to-date CV details."
- **"AI engineer" signature:** The catalog is entirely LLM-centric and code-driven — from-scratch implementation books, architecture galleries, articles on RLVR, MoE backbones, token sampling, local coding agents. Practitioner framing: implementation over theory.

### 6. minimaxir.com — Max Woolf
- **Hero:** Bio-as-hero: "**Max Woolf (@minimaxir) is formerly a Senior Data Scientist at BuzzFeed** in San Francisco. Currently, Max is unemployed and looking for a data science/machine learning/AI position" + contact invitation + Patreon support note. Radically honest employment status.
- **Sections in order:** top nav (Posts, Search, GitHub, Patreon) → author bio → Patreon note → blog post list (each: title, wry one-line subtitle, date, read time — e.g., "An AI agent coding skeptic tries AI agent coding, in excessive detail" · 33 min) → "Next" pagination → footer (© 2026, built with Hugo + PaperMod).
- **Color scheme:** Not verifiable from fetch; PaperMod = clean minimal light theme.
- **Fonts:** Not verifiable from fetch (Hugo PaperMod defaults to a simple sans stack).
- **AI work presentation:** Writing *is* the output: headline + subtitle + date + estimated read time. Long read times (22–33 min) signal deep empirical dives. No separate project gallery on the homepage.
- **Credibility:** BuzzFeed title in the bio, GitHub in nav, Patreon funding (audience-validated work), hyper-current practitioner topics (OpenRouter rankings, agent quota resets, image-model evals), transparency about job status.
- **"AI engineer" signature:** Frontier-practitioner subject matter — LLM failure modes ("Cognitohazards can affect machines too."), leaderboard analysis, agentic-coding experiments — published as long-form empirical writeups, not marketing.

### 7. interconnects.ai — Nathan Lambert (Substack)
- **Hero:** Title "Interconnects AI" + three-line tagline: "The cutting edge of AI, from inside the frontier AI labs, **minus the hype**." / "The border between high-level and technical thinking." / "Read by leading engineers, researchers, and investors."
- **Sections in order:** site title → tagline paragraph → subscriber count ("Over 81,000 subscribers") → Subscribe CTA → legal boilerplate → "Read before subscribing" → three endorsement quotes (Jasmine Sun, Timothy B. Lee, Dean W. Ball).
- **Color scheme:** Not verifiable from fetch; standard Substack light layout.
- **Fonts:** Not verifiable from fetch (Substack defaults).
- **AI work presentation:** Newsletter essays positioned between accessible commentary and technical depth; open-source AI as a recurring beat (echoed in testimonials: "Leading insights on the state of open-source AI").
- **Credibility:** Named author; 81,000+ subscribers; peer endorsements ("Insightful and accessible commentary from a guy whose **day job is actually training AI models**").
- **"AI engineer" signature:** Insider-but-unhyped positioning; "day job is training models" as the trust anchor; vocabulary of labs, open models, RLHF/post-training.

### 8. latent.space — swyx & Alessio Fanelli (Substack)
- **Hero:** Title "Latent.Space" + two-sentence description: "The AI Engineer newsletter + Top technical AI podcast." / "How leading labs build Agents, Models, Infra, & AI for Science." + "Over 198,000 subscribers" + Subscribe.
- **Sections in order (as fetched):** publication title → tagline/description (pointing to /about) → subscriber count → Subscribe → legal boilerplate → testimonials (peer newsletters: "Best AI and LLM commentary"; "swyx and Alessio... as funny as they are informed"). The /about page advertises guest highlights: "Greg Brockman, Andrej Karpathy, George Hotz, Simon Willison, Soumith Chintala et al."
- **Color scheme:** Not verifiable from fetch (custom-branded Substack).
- **Fonts:** Not verifiable from fetch.
- **AI content presentation:** Hybrid newsletter + "Top technical AI podcast"; episodes/interviews with frontier-lab engineers; framed as "how labs *build*" systems.
- **Credibility:** Scale (198,000+ subscribers), marquee guest roster, peer endorsements from other AI publications, host identities.
- **"AI engineer" signature:** The four-pillar taxonomy in the tagline — "Agents, Models, Infra, & AI for Science" — and a guest list of hands-on builders, not pundits.

---

## Part 2 — Additional sites found via WebSearch (7 fetched)

Search queries used: "AI engineer portfolio examples personal site LLM engineer 2026", "machine learning engineer personal website portfolio examples", and per-name queries (eugeneyan.com, huyenchip.com, jxnl.co, hamel.dev). Source lists included upskillist.com, dataexpert.io, github.com/emmabostian/developer-portfolios, mitchellsparrow.com, darpanjain.com, ericwadkins.com — from which the 7 below were selected and fetched.

### 9. eugeneyan.com — Eugene Yan
- **Hero:** "**Hi, I'm Eugene Yan, an applied scientist.** Currently, I'm a Member of Technical Staff at Anthropic, building the applications side of Claude." + mission lines: "I work to bridge the field and the frontier, and help build safe, reliable AI systems that scale. I also write and speak about AI-powered systems and products, and **prototype for fun**."
- **Sections in order:** nav (Start Here, Writing, Speaking, Prototyping, About) → hero + bio → "Latest" → "Trending This Week" → "More than 50k Reads" → "Featured Talks" (AI Engineer keynotes) → "My Favourites" → a stats line: "**212 posts, 31 talks, 19 prototypes, 426,689 words**" → "Selected Prototypes" (13 items: AI Reading Club, AlignEval, Obsidian Copilot, an AI Coach with his phone number for feedback) → "Resources" (OSS: applied-ml, open-llms, applied-llms) → footer socials + bio.
- **Color scheme:** Light, warm-neutral background; dark-mode toggle available.
- **Fonts:** Verified in markup: **Merriweather** (serif body) + **Raleway** (sans headings), Google Fonts; monokai code highlighting.
- **AI work presentation:** The most complete "portfolio" pattern in the sample: writing ranked by social proof (Trending, 50k Reads), talks, and a distinct **Prototypes** section where each item is a working demo or repo — "proof of work" beyond prose.
- **Credibility:** Current employer (Anthropic) in the hero, prior companies (Amazon, Alibaba), quantified output (posts/talks/words), audience count (11,800+ readers), curated OSS lists.
- **"AI engineer" signature:** "Bridge the field and the frontier" framing; prototypes-as-hobby identity; LLM-patterns writing ("Patterns for Building LLM-based Systems").

### 10. huyenchip.com — Chip Huyen
- **Hero:** Portrait photo + "**I'm Chip Huyen, a writer and computer scientist.** I work to bring AI into production. I write about AI system design."
- **Sections in order:** header (bio, home, blog, archive, AI, chiptalk, VN, about) → hero photo + intro → Books ("Designing Machine Learning Systems", "AI Engineering") → AI resources (MLOps guide, ML systems design, ML interviews book) → OSS projects (GoodAIList, killedbygpt, lazynlp) → blog → footer socials (GitHub, X, LinkedIn, YouTube) + photo credit.
- **Color scheme:** Not verifiable from fetch; Jekyll-minimal, light.
- **Fonts:** Not verifiable from fetch (Font Awesome icons detected; no webfont declarations).
- **AI work presentation:** Books first, then free educational mega-resources (guides, interview books), then OSS, then blog. Everything is long-form educational artifacts.
- **Credibility:** Author of two canonical O'Reilly books; taught ML Systems Design at Stanford; employers in bio (NVIDIA, Snorkel, Netflix); LinkedIn/GitHub links.
- **"AI engineer" signature:** "AI into production" systems framing — the site sells *discipline* (ML systems design) rather than projects.

### 11. jxnl.co — Jason Liu
- **Hero:** "**Jason Liu here.** These days, I'm a **Developer Experience Engineer on the Codex team at OpenAI**. Previously: creator of **Instructor** (Python library for structured LLM outputs), consultant, educator..." plus an impact claim (helped businesses generate tens of millions in revenue with applied AI).
- **Sections in order:** hero intro → "What I'm up to now" (OpenAI role, a16z scout, open-sourcing his "Systematically Improving RAG" course) → current focus list → recent writing (agents, RAG, applied AI) → personal/life updates → archives → footer.
- **Color scheme:** `theme-color` `#103dc2` (deep blue) in markup; clean light default with dark palette available.
- **Fonts:** **Roboto + Roboto Mono** (mkdocs-material default pairing).
- **AI work presentation:** A "now" page at the top (current role + current building), then writing organized by topic (RAG, agents, evals), then personal notes — life-and-work blended.
- **Credibility:** OpenAI team name-drop, OSS authorship (Instructor), investor/scout roles (a16z), course authorship, consulting track record with revenue numbers.
- **"AI engineer" signature:** The archetypal "applied LLM consultant turned lab engineer" arc; heavy RAG/evals vocabulary; /resume page exists.

### 12. hamel.dev — Hamel Husain
- **Hero:** Blog title + **course banner**: "Join **4,500+ engineers & PMs** in mastering AI Evals" (cohort sales, dates, discount) → intro: "I'm a **machine learning engineer with 20+ years of experience**. I've worked at **Airbnb and GitHub**, including early LLM research used by OpenAI for code..." + "I'm currently working to bring data science back to AI... I call this **'evals'**."
- **Sections in order:** course banner → intro bio → nav (Blog, AI Evals, OSS, Talks, About) → blog as a **table** (title | description | date) → footer.
- **Color scheme:** Not verifiable from fetch; Quarto default light theme, typographically plain.
- **Fonts:** Not verifiable from fetch (Quarto defaults).
- **AI work presentation:** The "evals guy" niche — landing page funnels to his flagship essays ("Your AI Product Needs Evals", LLM-as-a-Judge, AI Evals FAQ); blog table is dense and unglamorous.
- **Credibility:** 20+ years, Airbnb/GitHub pedigree ("early LLM research used by OpenAI"), audience metrics (4,500+ students from 500+ companies), a Maven course with Shreya Shankar, OSS links.
- **"AI engineer" signature:** Owning a single sub-discipline (evals) so completely that the site becomes the reference for it; course monetization bolted directly onto the homepage.

### 13. mitchellsparrow.com — Mitch (working ML engineer, UK)
- **Hero:** Portrait photo + kicker "Software Engineer" + a big rotating/headline line ("Machine Learning Engineer..." variants) + "I am a Software / Machine Learning Engineer currently based in the United Kingdom. ...things to do with AI, robots and code."
- **Sections in order:** About (photo, bio) → Experience (timeline cards: Tensora, Key Three Data, etc., with bullets and quantified impact) → Skills (with **proficiency bars** — e.g., Python 90%, PyTorch 85%) → Projects (cards with screenshots, some GitHub links) → Contact (email form).
- **Color scheme:** Modern light card-based UI, accent color on CTAs (exact hex not verifiable from fetch).
- **Fonts:** Not verifiable from fetch (Next.js + Sanity stack).
- **AI work presentation:** Project cards with screenshots and short descriptions; a "variety of Machine Learning models" framing — classic junior/mid portfolio layout.
- **Credibility:** Employer timeline with quantified bullets; skill bars; GitHub links. No audience metrics, no famous-name endorsements.
- **"AI engineer" signature:** "AI, robots and code" hobbyist-practitioner tone; ML model variety over niche depth.

### 14. darpanjain.com — Darpan Jain (Lead ML Engineer)
- **Hero:** Headline + sub-headline: "**Lead Machine Learning Engineer** with **9+ years of experience** building products in Applied NLP..." plus a "Connect with me" CTA (Calendly booking widget embedded).
- **Sections in order:** hero + CTAs → Work Experience (cards: Lead MLE at Crunchyroll/Sony — "Currently driving Personalization & AI serving 13M anime fans"; earlier Warner Bros. Discovery, USC-ISI) → Consulting Projects (GenAI/NLP client work with metrics like "72K monthly users") → Publications → Education → Technical Skills → Testimonials (4+ LinkedIn recommendations quoted) → footer (GitHub/LinkedIn/email).
- **Color scheme:** Bootstrap light theme; `theme-color #ffffff`, tile accent `#da532c`; subtle cards.
- **Fonts:** Not verifiable from fetch (Bootstrap stack).
- **AI work presentation:** Consulting projects presented as mini case studies with user-impact metrics; publications listed academically.
- **Credibility:** Quantified scale in every bullet (13M fans, 72K users), titled roles, publications, quoted LinkedIn testimonials, booking link for recruiters.
- **"AI engineer" signature:** NLP/GenAI project vocabulary + production-scale numbers; reads like a living CV with proof.

### 15. ericwadkins.com — Eric Wadkins (MIT / Google)
- **Hero:** Name + role strip: "**Software Engineer @ Google - Grad Student - AI/ML Researcher**" + photo + short bio (MIT Class of 2018, M.Eng.; interests: AI, ML, computer vision, NLP).
- **Sections in order:** hero (name, roles, photo) → About → Skills → Projects (15+ personal builds, each with description, screenshot and/or video, and a "**View this project on GitHub**" link) → Papers (thesis PDF) → Timeline (education/work with **logo strip: MIT, CSAIL, NASA, Google**) → Contact/footer (Resume PDF).
- **Color scheme:** Bootstrap-era light theme, grayscale profile photo, accent blue links (exact hex not verifiable).
- **Fonts:** Verified in markup: Google Fonts — **Montserrat, Source Sans Pro, Droid Serif, Roboto Slab, Kaushan Script**.
- **AI work presentation:** The densest *demos* section in the sample: nearly every project ships a screenshot or video plus a GitHub link — visual proof-first.
- **Credibility:** Institution logo wall (Google/MIT/NASA), Resume + thesis PDFs, GitHub per project.
- **"AI engineer" signature:** CV-site structure with hands-on CV/NLP project demos; academic-to-industry storyline.

---

## Part 3 — Pattern-frequency summary (N = 15)

| # | Pattern | Frequency | Notes |
|---|---------|-----------|-------|
| 1 | **Name + current role/company stated up front** | 13/15 | Every site except simonwillison.net (no title anywhere) and philschmid.de (name only on index). Formats: "Hello, I'm X, PhD" (raschka), "MTS at Anthropic" (eugeneyan), "DX Engineer on Codex at OpenAI" (jxnl), career-timeline hero (karpathy). |
| 2 | **Writing/blog as the primary artifact & credibility engine** | 11/15 | Writing-led: swyx, simonwillison, philschmid, raschka, minimaxir, eugeneyan, hamel, huyenchip, jxnl + both newsletters. Only karpathy (projects), mitchell/darpan/ericwadkins (CV-style) lead with something else. |
| 3 | **Reverse-chronological dated list on the homepage** | 9/15 | 7 personal sites + 2 Substacks. Dates, tags, and (sometimes) read-times are the unit of display; almost nobody uses portfolio "cards" for writing. |
| 4 | **Named employers / institutions as trust anchors** | 13/15 | OpenAI, Tesla, Anthropic, Lightning AI, BuzzFeed, Airbnb, GitHub, Amazon, NVIDIA/Netflix/Stanford, Crunchyroll/Sony, Google/MIT/NASA. Often inside the hero sentence itself. karpathy renders these as a **logo timeline**; ericwadkins as a logo wall. |
| 5 | **Open-source repos linked from the homepage** | 12/15 | karpathy (nanoGPT/llm.c), simonwillison (llm/datasette with release-tag changelogs), eugeneyan (applied-ml/open-llms), jxnl (Instructor), huyenchip, raschka, hamel, minimaxir, philschmid, ericwadkins, mitchell, swyx. **PR-level links are rare (~1–2/15)** — repo/release links dominate. |
| 6 | **Minimal, typographic, content-first design** | 9/15 | Plain HTML/static-blog aesthetics: karpathy, simonwillison, philschmid, minimaxir (PaperMod), raschka, hamel (Quarto), huyenchip (Jekyll), eugeneyan, interconnects. Card/portrait-led layouts appear mostly on CV-style sites (mitchell, darpan, ericwadkins) and Substacks. |
| 7 | **Newsletter / subscribe CTA on the homepage** | 8/15 | swyx, eugeneyan, hamel, philschmid (nav), raschka ("Subscribe via Email"), jxnl, latent.space, interconnects. Of these, **5/15 display explicit audience counts** (">10,000", "11,800+", "4,500+", "81,000+", "198,000+"). |
| 8 | **"Currently building/focused on X" narrative** | 8/15 | Explicit now-statements: swyx ("am working on Latent Space..."), hamel ("I call this 'evals'"), eugeneyan ("Currently, I'm..."), jxnl ("These days..."), darpan ("Currently driving Personalization & AI..."), karpathy (timeline head "2024 –"), minimaxir ("Currently... looking for..."), raschka. |
| 9 | **Talks / keynotes / podcast section** | 6/15 | karpathy (YouTube links), swyx (talks by era), eugeneyan (Featured Talks), raschka (Talks nav), huyenchip (chiptalk), latent.space (the podcast itself). |
| 10 | **Productized knowledge: books, courses, guides** | 5/15 | raschka (2 books + courses), huyenchip (2 O'Reilly books + guides), eugeneyan (Applied-LLMs.org, ApplyingML), hamel (AI Evals course banner with cohort sales), jxnl (open-sourced RAG course). |
| 11 | **Working demos/prototypes as "proof of work"** | 5/15 | eugeneyan (13 prototypes incl. playable AI Coach), swyx (OverGrid game), simonwillison (hosted tools + pelican-SVG benchmarks), ericwadkins (screenshot/video per project), mitchell (project screenshots). YouTube/video embeds are otherwise rare (1–2/15). |
| 12 | **Social icon/link row (GitHub/X/LinkedIn)** | 13/15 | Near-universal footer or header element; often duplicated in hero. |
| 13 | **Quantified output / impact metrics** | 6/15 | eugeneyan ("212 posts, 31 talks, 19 prototypes, 426,689 words"), simonwillison (tag counts: "ai 2,213"), hamel (4,500+ students, 500+ companies), darpan (13M fans, 72K monthly users in bullets), latent.space/interconnects (subscriber counts). |
| 14 | **Self photo on homepage** | 6/15 | karpathy, huyenchip, hamel, minimaxir, ericwadkins, mitchell. Prominent engineers favor plain or grayscale portraits; CV-style sites use larger hero photos. |
| 15 | **Dark-mode toggle** | 4/15 confirmed | raschka (moon icon), eugeneyan (darkmode.js), jxnl (palette), philschmid (theme link). Several more likely have it but were unverifiable via text fetch. |
| 16 | **Search affordance** | 4/15 | philschmid ("Search ⌘K"), raschka, minimaxir, eugeneyan. |
| 17 | **Testimonials / peer endorsements** | 3/15 | latent.space + interconnects (peer-newsletter pull quotes), darpan (LinkedIn recommendations). Notably absent from the most-technical personal sites. |
| 18 | **Resume/CV page or PDF** | 4/15 | jxnl (/resume), ericwadkins (Resume + thesis PDF), raschka (LinkedIn "for CV details"), darpan (implicit full-CV structure). |
| 19 | **Sponsorship / monetization surfaced on homepage** | 3/15 | simonwillison (sponsor banner + $10/month briefing), minimaxir (Patreon), hamel (course sales). |
| 20 | **Skill bars / percentage widgets** | 1/15 | mitchell only. Zero prominent engineers use them — a strong negative signal. |

### Verifiable color/font data points
- swyx.io: theme-color accents `#facc15` (yellow) + `#3730a3` (indigo).
- jxnl.co: theme-color `#103dc2` (deep blue); Roboto + Roboto Mono.
- eugeneyan.com: Merriweather (serif body) + Raleway (sans headings); monokai code theme; light + dark mode.
- ericwadkins.com: Montserrat, Source Sans Pro, Droid Serif, Roboto Slab, Kaushan Script.
- karpathy.ai: no webfonts, black-on-white, monospace-flavored.
- All others: color/font not verifiable from text fetch (CSS not extracted); most are standard light minimal themes.

---

## Part 4 — Synthesis: what makes a site read as "AI engineer"

1. **Credibility is editorial, not decorative.** The unit of trust is a dated, specific, hands-on artifact: a post about reverse-engineering a system prompt, a repo trained from scratch, an eval harness. Badges, skill bars, and gradient heroes appear on zero prominent sites.
2. **The hero is a sentence, not a splash.** One photo (or none), one role sentence with employer, optionally one mission clause ("bring AI into production", "bridge the field and the frontier", "minus the hype"). Then straight into content.
3. **Recency is the aesthetic.** Reverse-chronological lists with dates and tags dominate; the homepage is a feed of thinking, not a gallery.
4. **Niche ownership beats breadth.** hamel = evals, eugeneyan = LLM patterns, simonwillison = LLM forensics, raschka = from-scratch LLMs, lambert = post-training/open models. Each site is the reference for one sub-discipline.
5. **Pedigree is stated once, precisely** — employer + team in the first sentence — then never repeated. No logo carousels except on CV-style sites.
6. **Audience is a metric.** Subscriber/student counts appear as raw numbers next to the subscribe CTA; output counts (posts, talks, words) appear as humble-brag stat lines.
7. **Writing and code are cross-linked.** Posts link to repos; repos link back to posts; talks link to YouTube; prototypes are live and clickable.
8. **Monetization is honest and small-scale**: sponsor banner, Patreon, course cohort — surfaced plainly, never as a sales page.

### Design implications for a new AI-engineer portfolio
- Ship a one-sentence hero: name + current focus + employer/team; optional mission clause.
- Make the homepage a dated feed (writing first), with tags drawn from current agent-stack vocabulary (evals, agents, MCP, RAG, harness).
- Add a "Now / Currently building" block with 2–3 live or linked artifacts.
- Link OSS repos with one-line descriptions; link talks/YouTube if any.
- Include subscribe CTA; show a count once real.
- Keep the design typographic: 1 serif + 1 sans (or single sans), one accent color, dark-mode toggle, no skill bars, no card grid for writing.
- Quantify selectively: X posts, Y talks, Z users — one stat line maximum.

---

*End of report. Sites fetch-failed via WebFetch (karpathy.ai, swyx.io — captured via fallback fetcher); no site in the final sample was left uncovered.*
