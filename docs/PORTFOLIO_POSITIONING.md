# PORTFOLIO POSITIONING — Shivam Chavan

> Derived exclusively from `/mnt/nvme0n1p10/portfilio/docs/FACTS.md` (the verified fact base).
> Every recommendation below cites the specific fact that justifies it. If a claim in this document cannot be traced to FACTS.md, it must not reach the site.

---

## 1. Positioning Statement

**The one sentence the entire site must communicate:**

> **"Shivam Chavan builds production systems and AI infrastructure where quality is measurable — a multi-tenant SaaS platform serving 50+ gyms behind 1,400+ tests and weekly on-call, and open-source voice-AI tooling that integrates with 6 voice platforms and verifies its own output."**

This is not a generic "full-stack + AI" claim. The differentiating idea is **measurable correctness**: every project in the fact base carries a verification artifact — a test count, a cost measurement, an accuracy comparison, a named reviewer, or a hackathon win. The site's job is to make that pattern impossible to miss.

### Supporting proof axes

| Axis | Claim | Grounding in FACTS.md |
|---|---|---|
| **A. Production ownership under real accountability** | He owns features end to end on a live multi-tenant SaaS platform and is the technical point of contact to customers. | Eazytag/Strivo: "Owned features end to end across the full stack — React, Java 17/Spring Boot, MongoDB, Kafka"; "production code for **50+ gyms and 10+ tenants**"; "Ran **weekly on-call support** directly with client engineering teams"; "technical point of contact between product and customer." |
| **B. AI infrastructure other systems integrate with — and trust** | He builds open-source AI tooling at the integration and reliability layer, not toy chatbots. | VoiceScope: "open source observability and regression-testing platform for voice AI agents," "webhook integrations for **6 voice AI platforms** (Vapi, Retell, Bland, Bolna, Synthflow, Air.ai) with **SSRF protection**," "**300+ tests** passing," live at voice-scope.vercel.app. MCP Foundry: "**self-verifying** OpenAPI-to-MCP server generator" with auto-repair and a "transparent pass/fail scorecard." supabase-lingo: "Published an **npm package**." |
| **C. Externally reviewed and externally recognized** | Senior engineers and hackathon judges — not self-assessment — vouch for the work. | Eclipse JKube: "PRs reviewed by Principal Engineer **Marc Nuri**," contributions across "**15+ modules**," "cut flaky CI by **60%**." Jira CI/CD Status Panel: built for the **Atlassian ForgeQuest Hackathon** (no placement claimed). OpenMetadata: merged frontend PR **#27602**. Resume summary: "Open source contributor at Eclipse Foundation across Python, Java, Angular, React, and cloud infrastructure." |

These three axes map 1:1 to the core message: Axis A = "real production systems," Axis B = "interesting AI infrastructure," Axis C = third-party proof that both are true.

---

## 2. Differentiator Analysis (ranked, strongest first)

### 1. Voice AI observability shipped as open source, with 6 platform integrations and SSRF protection — VoiceScope
- **Why it differentiates:** "Voice AI observability and regression testing" is a category, not a CRUD app. Very few engineers at any level can show a platform that other voice-AI stacks plug into. The **6 named platforms (Vapi, Retell, Bland, Bolna, Synthflow, Air.ai)** prove market awareness of a real ecosystem; **SSRF protection** on webhooks proves security thinking that most portfolios never demonstrate; **300+ tests**, streaming SSE, and CI/CD via GitHub Actions prove it is engineered, not scripted.
- **Evidence:** "Architected an **open source observability and regression-testing platform for voice AI agents**: 3-stage agentic pipeline (Whisper transcription → LLM-based analysis with RAG context retrieval → structured report generation) and a **7-layer validation harness** catching hallucinations and schema violations, with a feedback loop that benchmarks harness accuracy and auto-tunes weights each run."
- **Site implication:** Hero-tier case study with a live link (voice-scope.vercel.app) and repo. The 7-layer harness and the self-tuning feedback loop deserve an architecture diagram/deep-dive — they are the most technically interesting content on the site.

### 2. A self-verifying MCP generator — the "evals and reliability" mindset — MCP Foundry
- **Why it differentiates:** The fact is not "built an OpenAPI-to-MCP converter"; it is "**self-verifying** … evaluates every generated tool against a live agent on an isolated Prism mock. Failing tools are auto-repaired and re-tested for up to 3 rounds against direct, rephrased, edge-case, and **adversarial prompts**, then registered … with a transparent pass/fail scorecard." Designing a system that grades and repairs its own output is evaluation-infrastructure thinking — the single most in-demand instinct in AI engineering right now — and it is stated in the fact base, not invented. Built at the **OpenAI Build Week Hackathon** (verified context in FACTS.md).
- **Evidence:** Full MCP Foundry entry; stack line "OpenAPI, Codex/GPT-5.6, Prism, FastMCP"; demo link youtu.be/vRT6zaGCySg.
- **Site implication:** Hero-tier case study. Frame the narrative around the verify → repair → re-test loop; the scorecard is a visual asset.

### 3. 1,400+ tests and weekly on-call customer contact on production SaaS — Strivo at Eazytag
- **Why it differentiates:** Two facts here are rare in combination: "**1,400+ passing tests**" on a system "designed for correctness under concurrent writes" (slot scheduling, recurring series, waitlist promotion, biometric check-in, "full session deduction/refund lifecycle"), and "**Ran weekly on-call support directly with client engineering teams**." The first proves engineering discipline at a scale most personal projects never reach; the second proves the business trusted him in production incidents, in real time. "**99%+ uptime**" on third-party integrations (WhatsApp, PDF, GST invoicing) with retry logic closes the reliability loop.
- **Evidence:** Eazytag experience block, all four bullets.
- **Site implication:** Featured case study, but framed as **work experience** (no public repo exists — it is employer code). The concurrency-correctness story (waitlist promotion + deduction/refund under concurrent writes) is the technical heart.

### 4. Contributions reviewed by a named Principal Engineer at the Eclipse Foundation — Eclipse JKube
- **Why it differentiates:** "PRs reviewed by Principal Engineer **Marc Nuri**" is third-party validation with a name attached — it cannot be faked and cannot be said by a template portfolio. Supporting facts: contributions across "**15+ modules**" of Kubernetes tooling for Java, "Applied TDD, cut flaky CI by **60%**, accelerated delivery by **30%**." The 60% flaky-CI number is a maintainability metric — evidence he improves systems, not just adds features.
- **Evidence:** Eclipse JKube block; resume summary line ("Open source contributor at Eclipse Foundation across Python, Java, Angular, React, and cloud infrastructure").
- **Site implication:** Not a personal-project case study — an **open-source contribution entry** with the org link, surfaced early as a credibility anchor (see §3).

### 5. Measured LLM cost engineering — AutoAce (plus the skill explicitly claimed on the resume)
- **Why it differentiates:** The fact base contains a full cost/quality optimization story: "**85% field-match accuracy vs. 55%** for a DSP-only baseline" while "measured under **$0.001/min**" against "a hard **$0.003/audio-minute cost ceiling** (~30% of budget)," plus "cutting peak server memory by **~90% (830MB → 85MB)**" by replacing torch-based VAD with ONNX. The resume also lists "**LLM Cost Engineering**" under Tools/Practice — so the theme is deliberate, not accidental. Startups pay for exactly this.
- **Evidence:** AutoAce block; Skills → Tools/Practice.
- **Site implication:** Secondary tier, but with its metrics displayed prominently — it has the densest hard numbers in the fact base. Label honestly as a "Voice AI Take-Home Assessment." Note: FACTS.md lists only a **live link** (voice-classifier.up.railway.app) — no GitHub URL — so link the live demo only.

---

## 3. Auditor Prioritization

### What each audience scans for → which facts satisfy them

| Auditor | What they look for | Facts that satisfy it (from FACTS.md) |
|---|---|---|
| **Recruiter (6-second scan)** | Current title + role; keyword match ("Full Stack", "AI", "Python"); brand signals; open-source/hackathon recognition. | Title: "Full Stack Engineer." Current role: "Full Stack Developer — Eazytag (Strivo SaaS Platform) · 10/2025 – Present." Keywords present in facts: Python, agentic AI, LLM pipelines, multi-tenant SaaS, voice AI. Brand signals: "Eclipse Foundation," "Atlassian ForgeQuest Hackathon," "open source voice AI observability platform." Hero must render name, title, current role, and these signals above the fold. |
| **Hiring manager** | Production ownership; testing discipline; reliability; system-design maturity; working links. | "**50+ gyms and 10+ tenants**"; "**1,400+ passing tests**"; "**99%+ uptime**"; "designed for correctness under concurrent writes"; "weekly on-call support"; multi-tenancy again in Open Agent ("multi-tenant chatbot platform," "token-budget metering (session/weekly caps)," "**120+ tests**"); VoiceScope "**SSRF protection**." Every featured project has a verified repo/live/demo link. |
| **Startup founder** | Ships fast and end to end; talks to customers; watches costs; has working demos. | "Owned features end to end"; "led product demos, resolved production issues … in real time"; "Translated gym operator workflows into a consolidated health scoring engine" (product translation); AutoAce cost results ("measured under $0.001/min" vs "$0.003 ceiling"); working demos: VoiceScope live, MCP Foundry YouTube demo, Open Agent live, AutoAce live, supabase-lingo YouTube demo. |

### The 3 credibility anchors (must be visible within the first two sections)

1. **VoiceScope — open source, live, 6 integrations.** The single most distinctive fact in the fact base; it *is* the "interesting AI infrastructure" claim. First featured case study; also named in the hero proof line.
2. **Strivo production scale — 50+ gyms, 10+ tenants, 1,400+ tests, weekly on-call.** The "real production systems" claim with the largest numbers; appears in the hero proof line and the featured Strivo deep-dive.
3. **External validation — Eclipse JKube reviewed by Principal Engineer Marc Nuri + Atlassian ForgeQuest win.** Proof that outside senior reviewers and judges agree. Named in the hero proof line; detailed in the open-source/recognition section. These are the only two facts in the fact base where a *named external party* vouches for the work — that is why they anchor the page.

---

## 4. Project Prioritization & Hierarchy

Final order and prominence. The brief's ordering (VoiceScope > MCP Foundry > Strivo > Open Agent) is retained at the top; AutoAce and JKube placements are refined below with rationale.

| Rank | Project | Prominence | Justification (fact-cited) |
|---|---|---|---|
| 1 | **VoiceScope** | **Featured / hero-tier** — full case study, first | Strongest unique fact: "open source observability and regression-testing platform for voice AI agents," 6 platform integrations, SSRF protection, 300+ tests, 7-layer harness, **both** GitHub and live links. Directly embodies the core message's "interesting AI infrastructure." |
| 2 | **MCP Foundry** | **Featured / hero-tier** — full case study, second | "Self-verifying" generator with adversarial-prompt auto-repair loop and pass/fail scorecard — the most novel mechanism in the fact base. OpenAI Build Week Hackathon context. GitHub + demo links. Pairs with VoiceScope to form a coherent "AI reliability infrastructure" theme. |
| 3 | **Strivo (Eazytag work)** | **Featured / hero-tier** — presented as experience deep-dive, third | Largest production numbers (50+ gyms, 10+ tenants, 1,400+ tests, 99%+ uptime, 40% overhead/incident cut) and the only **current employer** facts. Presented in an Experience frame, not a repo frame — it is employer code with no public link, and that separation must stay explicit (§6). |
| 4 | **Open Agent** | **Secondary tier — top of secondary**, full entry with metrics | Strong multi-tenant AI platform (25 LLMs with provider fallback, pgvector RAG, token-budget metering, 120+ tests, Docker) with GitHub + live links — but FACTS.md labels it a "yellow.ai SDE-1 take-home," so it cannot outrank owned/shipped work. It does reinforce the multi-tenancy + metering theme from Strivo. |
| 5 | **AutoAce** | **Secondary tier — top of secondary, alongside Open Agent** *(refined: elevated above footnote/burial)* | Rationale for elevation: it carries the densest verified hard numbers in the fact base — "**85% field-match accuracy vs. 55%**," "measured under **$0.001/min**" vs the "**$0.003** ceiling," "**~90% (830MB → 85MB)**" memory cut — plus a live link. Those numbers out-persuade many "real" projects, and they activate the explicitly claimed "LLM Cost Engineering" skill. Not hero-tier only because FACTS.md frames it as a "Voice AI Take-Home Assessment" and provides no repo link (live demo only). |
| 6 | **Eclipse JKube** | **Open-source band** — substantive contribution entry (not a personal-project case study) | Real, verifiable, externally reviewed (Marc Nuri, 15+ modules, 60%/30% CI/delivery numbers) — but it is contributions to an existing Eclipse project, not owned architecture, so it ranks below his own shipped platforms. *Refinement vs. brief:* keep it out of the featured tier, **but surface it in the hero proof line** as a credibility anchor — its job on the page is validation, not demonstration. |
| 7 | **OpenMetadata** | **Open-source band — compact entry** | One verified frontend PR ("frontend search for the **Roles entity (PR #27602)** with Ant Design Select typeahead") plus investigations (Greenplum connector, Databricks lineage). Real and linkable, but a single PR — thinner than JKube's 15+ modules. Keep the derived PR link. |
| 8 | **Jira CI/CD Status Panel** | **Recognition strip / compact entry** | Built for the **Atlassian ForgeQuest Hackathon** (no placement claimed), but there is no link. A hackathon build without artifact belongs in a compact entry, not a case study. |
| 9 | **supabase-lingo** | **Footnote — compact list entry** | "Published an **npm package** for a real-time, PostgreSQL event-driven translation pipeline" is a nice supporting fact, but per FACTS.md link-verification notes only the YouTube demo is verified — no npm/repo URL. One-line entry with the demo link; no case study. |

**Net hierarchy:** Tier 1 (featured case studies): VoiceScope, MCP Foundry, Strivo · Tier 2 (secondary, metrics-forward): Open Agent, AutoAce · Tier 3 (open-source band): Eclipse JKube, OpenMetadata · Tier 4 (recognition/footnotes): Jira CI/CD Status Panel, supabase-lingo.

---

## 5. Narrative Arc (one-page story order)

| # | Section | Content (facts only) | Impression it must leave |
|---|---|---|---|
| 1 | **Hero** | Name; "Full Stack Engineer"; the positioning statement (§1); proof line citing three anchors: VoiceScope open source + live, Strivo 50+ gyms / 1,400+ tests / weekly on-call, Eclipse JKube reviewed by Marc Nuri; contact links (GitHub, LinkedIn, email). | "This person ships real, verified systems — and outside reviewers agree." The visitor can already quote three numbers about him within 10 seconds. |
| 2 | **Selected work — featured case studies** | VoiceScope → MCP Foundry → Strivo, each as a deep-dive with architecture, the hard numbers, and verified links. | "He builds AI reliability infrastructure *and* owns production SaaS — with evidence for both." This section carries the core message on its own. |
| 3 | **More engineering — secondary work** | Open Agent and AutoAce, presented compactly but metrics-forward (25 LLMs + fallback + metering; 85% vs 55% at $0.001/min; 830MB → 85MB). | "The depth repeats — multi-tenancy, testing, and cost engineering are habits, not one-offs." Pattern > accident. |
| 4 | **Open source & recognition** | Eclipse JKube (Marc Nuri, 15+ modules, 60% flaky CI cut), OpenMetadata (PR #27602), Atlassian ForgeQuest **win**, supabase-lingo npm package (demo link). | "Named external engineers and hackathon judges have already graded this work." Third-party proof closes the credibility loop. |
| 5 | **Experience & about** | Current role card (Eazytag · 10/2025 – Present, Bengaluru) with the on-call and product-translation facts; education (B.E. ECE, 08/2020 – 06/2023, CGPA 7.5); skills as *operating areas* in plain text groups (per FACTS.md Skills section) — no logo wall, no progress bars. | "A real employment record with dates, and a stack that matches the projects above — nothing decorative." |
| 6 | **Contact / close** | Email, LinkedIn, GitHub; one restrained closing line restating the positioning (no "passionate" language). | "Easy to reach, nothing inflated, nothing hidden." |

Editorial note: sections 2–4 are the body; the hero (1) must pre-state their three best facts so the 6-second recruiter scan is satisfied before any scrolling.

---

## 6. Risks & Honesty Guardrails

### Dates — reproduce exactly, never adjust
Today is Sep 2026; the resume is dated 2025–2026. Use dates verbatim from FACTS.md and never extend, normalize, or "fill gaps":
- Eazytag: **10/2025 – Present** · Eclipse JKube: **05/2024 – 03/2025** · VoiceScope: **Jun – Jul 2026** · MCP Foundry: **Jul 2026** · AutoAce: **2026** · Open Agent: "Take-Home Assignment" (no date — show none) · Education: **08/2020 – 06/2023**.
- Do **not** compute totals like "X years of experience" from these dates, and do not invent anything for the period between 06/2023 (degree end) and 05/2024 (first listed contribution) or between 03/2025 and 10/2025. Silence is honest; fabrication is not.

### Metric attribution — each number stays welded to its exact scope
| Metric | Exact attribution (never migrate) |
|---|---|
| **50+ gyms, 10+ tenants** | Strivo production code at Eazytag |
| **40%** | Cut in reporting overhead **and** incidents *each*, from the health scoring engine + nightly pipeline automation |
| **1,400+ tests** | Class booking platform (concurrent-write correctness) |
| **99%+ uptime** | Third-party API integrations (WhatsApp, PDF, GST invoicing) with retry logic |
| **40% / 30%** (JKube) | 60% = flaky CI reduction; 30% = delivery acceleration — never swap or combine |
| **15+ modules** | Eclipse JKube contribution breadth |
| **6 platforms** | VoiceScope webhook integrations (Vapi, Retell, Bland, Bolna, Synthflow, Air.ai) |
| **300+ tests** | VoiceScope |
| **25 LLMs** | Open Agent multi-provider support with fallback |
| **120+ tests** | Open Agent |
| **85% vs 55%** | AutoAce field-match accuracy vs **DSP-only baseline** — always show the comparator |
| **$0.001/min vs $0.003** | AutoAce measured cost vs its hard ceiling; "~30% of budget" as stated |
| **830MB → 85MB (~90%)** | AutoAce peak server memory after replacing torch-based VAD with ONNX runtime |

### Context separation — label every item's origin
- **Built at work (employer code, no public repo):** Strivo/Eazytag. Never implied as open source; no repo links.
- **Personal / hackathon / take-home:** VoiceScope (personal, open source), MCP Foundry (**OpenAI Build Week Hackathon**), Open Agent (**yellow.ai SDE-1 take-home** — never presented as employment at yellow.ai), AutoAce (**Voice AI Take-Home Assessment**), Jira CI/CD Status Panel (**Atlassian ForgeQuest Hackathon win**), supabase-lingo (**Lingo.dev Hackathon**).
- **Open-source contributions:** Eclipse JKube (05/2024 – 03/2025), OpenMetadata (PR #27602).
- The resume summary already draws this line correctly ("Shipped VoiceScope… Runs weekly on-call… at Eazytag. Open source contributor at Eclipse Foundation…"); the site must preserve it.

### Link hygiene (from FACTS.md verification notes)
- supabase-lingo: link **only** the verified YouTube demo (youtu.be/03hsGuhBdzQ); no npm/repo URL unless independently verified later.
- Jira CI/CD Status Panel: **no link**; present as a hackathon build, no URL, no placement claim.
- AutoAce: **live link only** (voice-classifier.up.railway.app); no GitHub link.
- OpenMetadata: use the PR link derived from the verified PR number (#27602); JKube: org link github.com/eclipse-jkube/jkube.
- Phone ([redacted]) is marked "resume only" — **do not publish on the site** unless the user explicitly approves.

### Hard "do not add" list
No employers, projects, metrics, dates, certifications, client names, or capabilities beyond FACTS.md. No "trusted by," no inferred team sizes, no inferred funding/scale, no invented logos (even of real integrations platforms — the 6 platforms are *integration targets named in facts*, and may appear only in that factual context).

---

## 7. Messaging Tone Rules

1. **Declarative and specific.** Lead with the system and the number: "A booking engine designed for correctness under concurrent writes, with 1,400+ passing tests" — not "worked on a robust booking system."
2. **Verbs of ownership:** architected, built, shipped, engineered, cut, replaced, won, reviewed by. The fact base already uses these; mirror them.
3. **Banned vocabulary:** "passionate," "innovative," "cutting-edge," "world-class," "rockstar," "ninja," "revolutionary," "next-gen," "guru," "expert in," and any hype superlative. Also banned: "led" where FACTS.md says a narrower verb (he "led product demos" — that exact fact may keep "led"; nothing else gets upgraded).
4. **Every number carries its scope and comparator in the same breath:** "85% vs 55%" (never bare "85%"), "$0.001/min against a $0.003 ceiling" (never bare "90% cheaper"), "~90% (830MB → 85MB)".
5. **Confidence comes from evidence, not adjectives.** A metric with a named reviewer (Marc Nuri) or a named competition (ForgeQuest) does the persuading; the prose stays flat and editorial.
6. **Visual tone follows the same rule:** no excessive gradients, no floating blobs, no particles, no glassmorphism, no skill progress bars, no technology-logo walls, no generic project-card grids, no fake counters, no excessive animations. Typography, whitespace, and one restrained accent carry the premium feel; the numbers provide the color.
7. **Test every sentence:** could this line appear on any engineer's portfolio? If yes, it fails. If it can only be true of Shivam (e.g., "reviewed by Principal Engineer Marc Nuri," "6 voice platforms with SSRF protection"), it passes.

---

*Source of truth: `/mnt/nvme0n1p10/portfilio/docs/FACTS.md`. This document makes no factual additions to it; all placement and framing choices are editorial decisions grounded in the cited facts.*
