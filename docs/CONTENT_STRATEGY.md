# CONTENT STRATEGY — Shivam Chavan Portfolio

> Single source of truth: `docs/FACTS.md`. Every number, link, name, and date below appears verbatim in FACTS.md.
> This document contains FINAL COPY, ready to render. Notes in `[brackets]` are build instructions, not copy.

---

## 1. HERO

### Headline candidates

**Option A — RECOMMENDED**

> **I build production systems and AI infrastructure.**

**Option B**

> **Full stack, end to end — Angular to MongoDB change streams to LLM pipelines.**

**Option C**

> **Production SaaS. Voice AI observability. Developer tools.**

### Recommended hero assembly (Option A)

- Eyebrow (mono, small caps): `SHIVAM CHAVAN — FULL STACK ENGINEER`
- H1: `I build production systems and AI infrastructure.`
- Sub-headline:
  > I work across voice AI observability, multi-tenant SaaS, and LLM tooling — from Angular frontends to MongoDB change streams. Currently building Strivo at Eazytag, on-call weekly with client engineering teams.
- Location / availability line (mono): `BENGALURU, INDIA · OPEN TO NEW WORK`
  - `[NOTE: availability status is NOT in FACTS.md — confirm with Shivam before shipping. Neutral fallback if unconfirmed: `BENGALURU, INDIA`]`

### Alternate sub-headlines

For Option B:
> I build production SaaS and AI infrastructure: a multi-tenant booking platform, a voice AI observability platform with 6 platform integrations, and MCP tooling that verifies itself.

For Option C:
> Shivam Chavan, Full Stack Engineer. Five systems built end to end — the code, the tests, and the numbers are on this page.

---

## 2. CALLS TO ACTION

- **Primary CTA:** `View selected work` → `[anchor: #selected-work]`
  - Alternates: `Read the case studies` → `#case-studies`
- **Secondary CTA (email):** `shivamrc189@gmail.com` → `[mailto:shivamrc189@gmail.com]`
- **Secondary CTA (GitHub):** `GitHub` → `[https://github.com/ShivamChavan01]`

Rules: primary button navigates in-page; secondary buttons are plain text links, no icons needed; never label a link "Check it out" or "Learn more".

---

## 3. INTRO / ABOUT (first person, 87 words)

> I'm a full stack engineer in Bengaluru. At Eazytag I build Strivo, a multi-tenant SaaS platform for gyms — Angular frontends, Java 21 and Micronaut backends, MongoDB with change streams — and I run weekly on-call directly with client engineering teams. Outside work I build open source AI infrastructure: VoiceScope, an observability and regression-testing platform for voice AI agents, and MCP Foundry, a self-verifying OpenAPI-to-MCP generator. Before that, I authored 27 PRs at Eclipse JKube, 18 of them merged. I optimize for systems that still work in production on a bad day.

---

## 4. SECTION INTROS (one line each, editorial and dry)

- **Selected Work:**
  > Five systems, built end to end — with the tests, links, and numbers attached.
- **Experience:**
  > One role, one platform, owned end to end. On-call included.
- **Open Source:**
  > Merged, reviewed, and shipped in other people's codebases — Eclipse Foundation, OpenMetadata, Atlassian, npm.
- **Contact:**
  > No forms. Email is fastest.

---

## 5. SELECTED WORK — INDEX ENTRIES

`[Render each entry: descriptor line, summary, role line, mono stack list, mono spec row, links. Order below is display order.]`

---

### 5.1 VoiceScope — `Jun – Jul 2026`

**Descriptor (index listing):**
> Open source observability and regression-testing platform for voice AI agents.

**Summary:**
> Voice agents fail in the field, and their operators rarely see why. VoiceScope ingests call webhooks from six voice AI platforms and runs a three-stage agentic pipeline — Whisper transcription, LLM analysis with RAG context retrieval, structured report generation — over a 7-layer validation harness that catches hallucinations and schema violations. Open source, live, with 300+ tests gating the build.

**Role line:**
> Sole builder — architecture, pipeline, integrations, tests, deployment.

**Stack (mono, verbatim from FACTS):**
> `Python · FastAPI · OpenAI · Anthropic · Gemini · Groq · Mistral · Whisper · ChromaDB · RAG · Railway`

**Spec row (mono):**
> `300+ tests · 6 platform integrations · SSRF protection · 7-layer validation harness`

**Links:**
- `GitHub` → https://github.com/ShivamChavan01/voiceScope
- `Live` → https://voice-scope.vercel.app/

---

### 5.2 MCP Foundry — `Jul 2026`

**Descriptor (index listing):**
> Generates MCP servers from OpenAPI specs, then verifies every tool it ships.

**Summary:**
> A generated MCP tool with an ambiguous description or broken behavior fails when an agent runs it. MCP Foundry, built at the OpenAI Build Week Hackathon, parses any OpenAPI spec, uses an LLM to rewrite ambiguous tool descriptions, and evaluates every generated tool against a live agent on an isolated Prism mock. Failing tools are auto-repaired and re-tested for up to 3 rounds against direct, rephrased, edge-case, and adversarial prompts, then registered into Codex's MCP config with a transparent pass/fail scorecard.

**Role line:**
> Sole builder — OpenAI Build Week Hackathon.

**Stack (mono, verbatim from FACTS):**
> `Python · FastAPI · OpenAPI · Codex/GPT-5.6 · Prism · FastMCP`

**Spec row (mono):**
> `up to 3 repair rounds · 4 prompt classes · live-agent evals · pass/fail scorecard`

**Links:**
- `GitHub` → https://github.com/ShivamChavan01/MCP_Foundry
- `Demo` → https://youtu.be/vRT6zaGCySg

---

### 5.3 Strivo (Eazytag) — `10/2025 – Present`

**Descriptor (index listing):**
> Multi-tenant gym SaaS — bookings, biometric check-in, health scoring, GST invoicing.

**Summary:**
> Strivo runs gyms: slot scheduling, recurring class series, waitlist promotion, biometric check-in, and a full session deduction/refund lifecycle. I own features across the stack — Angular, Java 21 with Micronaut, MongoDB with change streams — including a consolidated health scoring engine that turned a manual weekly review into a nightly, alert-tiered pipeline. The booking platform is designed for correctness under concurrent writes; third-party integrations run behind retry logic.

**Role line:**
> Full Stack Developer at Eazytag — product engineering with weekly client-facing on-call.

**Stack (mono, verbatim from FACTS):**
> `Angular · Java 21 · Micronaut · MongoDB · Change Streams`

**Spec row (mono):**
> `100+ gyms · 60+ tenants`

`[CORRECTED 2026-10-15: this block previously said "React · Java 17 · Spring Boot · MongoDB · Kafka" and the spec row read "1,400+ tests · 50+ gyms · 10+ tenants · 99%+ uptime · −40% overhead & incidents". The stack now matches the shipped site (lib/case-studies.ts). The gym/tenant counts were stale. The test count, uptime, and 40% figures appear in no resume version and could not be evidenced — do not republish them without proof.]`

**Links:**
- `Read the case study` → `[in-page anchor: #case-study-strivo — no external link exists in FACTS.md; do not fabricate one]`

---

### 5.4 Open Agent — `Take-Home Assignment`

**Descriptor (index listing):**
> Multi-tenant chatbot platform: 25 LLMs, tool calling, RAG, metering.

**Summary:**
> A take-home assignment for yellow.ai, treated as a product. Open Agent is a multi-tenant chatbot platform with per-project system prompts, SSE token streaming, live chain-of-thought display, and a tool-calling loop — calculator, RAG document search, web search — across 25 LLMs with automatic provider fallback. A pgvector-backed RAG pipeline is scoped per project, and a server-enforced rolling token-budget metering caps sessions and weeks.

**Role line:**
> Sole builder — yellow.ai SDE-1 take-home assignment.

**Stack (mono, verbatim from FACTS):**
> `Python · FastAPI · SQLAlchemy · PostgreSQL · pgvector · JWT · React · TypeScript · Docker`

**Spec row (mono):**
> `25 LLMs · 120+ tests · provider fallback · token-budget metering`

**Links:**
- `GitHub` → https://github.com/ShivamChavan01/agent-platform
- `Live` → https://agent-platform-popb.onrender.com

---

### 5.5 AutoAce — `2026`

**Descriptor (index listing):**
> Call-audio classifier at 85% accuracy under a hard cost ceiling.

**Summary:**
> AutoAce classifies call-center audio into 9 fields — tone, noise type and severity, quality, overlap, silence — under a hard $0.003/audio-minute cost ceiling. The hybrid DSP + LLM pipeline measures under $0.001/min, about 30% of budget, and hits 85% field-match accuracy against 56% for a DSP-only baseline, measured over 3 labeled calls. Replacing torch-based VAD with an ONNX runtime cut peak server memory from 830MB to 85MB; a login-gated dashboard handles batch ZIP upload, cost tracking, and CSV/JSON export.

**Role line:**
> Sole builder — voice AI take-home assessment.

**Stack (mono, verbatim from FACTS):**
> `Python · Groq (Whisper + LLM) · librosa · Silero VAD (ONNX) · FastAPI · React`

**Spec row (mono):**
> `< $0.001/min vs $0.003 ceiling · 85% vs 56% · 830MB → 85MB · 9 fields`

**Links:**
- `Live` → https://voice-classifier.up.railway.app
- `[NO GitHub link in FACTS.md — do not add one.]`

---

## 6. CASE STUDIES

`[Three case studies: VoiceScope, MCP Foundry, Strivo. Headings rendered as mono eyebrows: CONTEXT / ARCHITECTURE / ENGINEERING CHALLENGE / DECISIONS / RESULT]`

---

### 6.1 VoiceScope

**CONTEXT**
Voice AI agents deployed on platforms like Vapi, Retell, Bland, Bolna, Synthflow, and Air.ai report back through webhooks. When an agent hallucinates an answer or returns malformed output, someone has to notice — ideally before the next call. VoiceScope is my open source answer: an observability and regression-testing platform for voice AI agents. It was built to make that noticing systematic rather than manual.

**ARCHITECTURE**
A three-stage agentic pipeline does the core work: Whisper transcription, then LLM-based analysis with RAG context retrieval, then structured report generation. ChromaDB provides the vector store for RAG; FastAPI serves the platform in Python. A 7-layer validation harness sits over the pipeline, catching hallucinations and schema violations. The harness is itself measured: a feedback loop benchmarks harness accuracy and auto-tunes its weights each run. Multi-LLM support spans OpenAI, Anthropic, Gemini, Groq, and Mistral, with results streaming to the UI over SSE. CI/CD runs on GitHub Actions; the stack deploys on Railway.

**ENGINEERING CHALLENGE**
Ingesting webhooks from six external platforms means ingesting attack surface, so the integration layer carries SSRF protection as a first-class requirement. A validation harness that judges other systems must itself be trustworthy — which is why harness accuracy is benchmarked and auto-tuned rather than assumed. Supporting five LLM providers means the analysis layer has to stay provider-agnostic without quality drifting per vendor. And a regression-testing platform claiming 300+ passing tests needs CI that actually runs them on every push.

**DECISIONS**
Validate first, trust later: every webhook passes SSRF-protected ingest before analysis. Measure the judge: the harness auto-tunes its weights from each run's benchmark instead of being hand-tuned once. Retrieve before judging: RAG context via ChromaDB grounds the LLM analysis in retrieved call context instead of model priors. Stay vendor-neutral: analysis runs across OpenAI, Anthropic, Gemini, Groq, and Mistral. Ship tests with the platform: 300+ tests gate the build in GitHub Actions.

**RESULT**
VoiceScope is open source, live, and integrated with six voice AI platforms. 300+ tests pass in CI. The platform transcribes, analyzes, and reports on voice agent calls with a 7-layer harness that catches hallucinations and schema violations — and re-tunes itself each run. Streaming SSE keeps reports live in the browser.

---

### 6.2 MCP Foundry

**CONTEXT**
MCP servers give coding agents new tools, and OpenAPI specs describe existing APIs. Bridging the two by hand is slow; generating blindly is worse, because a generated tool with an ambiguous description or broken behavior fails at agent runtime. MCP Foundry, built during the OpenAI Build Week Hackathon in July 2026, is a self-verifying OpenAPI-to-MCP server generator. Nothing it produces ships untested.

**ARCHITECTURE**
The generator parses any OpenAPI spec and produces MCP server tooling. An LLM pass rewrites ambiguous tool descriptions before anything is evaluated. Evaluation runs every generated tool against a live agent on an isolated Prism mock — no generated tool is ever exercised against a real service. Failing tools enter an auto-repair loop: repair, re-test, repeat, for up to 3 rounds against four prompt classes — direct, rephrased, edge-case, and adversarial. Tools that survive are registered into Codex's MCP config with a transparent pass/fail scorecard. The stack is Python, FastAPI, OpenAPI, Codex/GPT-5.6, Prism, and FastMCP.

**ENGINEERING CHALLENGE**
Evaluation needs an agent to evaluate against, so every tool check runs a live agent — which means the mock environment has to be isolated, or verification becomes the hazard. Auto-repair needs a stopping condition, bounded here at 3 rounds. And the test surface has to be adversarial enough to be worth the loop: direct, rephrased, edge-case, and adversarial prompts, not a single happy path.

**DECISIONS**
Rewrite descriptions with an LLM before testing — ambiguous descriptions are a defect class you can fix upstream. Evaluate against a live agent on an isolated Prism mock instead of static checks, because tool quality is behavior, not syntax. Bound repair at 3 rounds across four prompt classes so the loop terminates. Gate registration on the scorecard, so Codex's MCP config only receives tools that passed.

**RESULT**
MCP Foundry works end to end: spec in, verified MCP server out, scorecard attached. Every generated tool is evaluated against a live agent across direct, rephrased, edge-case, and adversarial prompts before it can register. Built and demoed during OpenAI Build Week; the demo is public on YouTube.

---

### 6.3 Strivo (Eazytag)

**CONTEXT**
Strivo is Eazytag's multi-tenant SaaS platform for gyms, running across 100+ gyms grouped under 60+ tenants. Two problems dominate the domain. Class booking is concurrency-heavy: slot scheduling, recurring series, waitlist promotion, biometric check-in, and a full session deduction/refund lifecycle all touch the same state. And gym operators were running a manual weekly review to understand facility health. I joined as Full Stack Developer in October 2025 and own features across the entire stack.

**ARCHITECTURE**
Angular on the frontend; Java 21 and Micronaut behind it; MongoDB as the data layer, with Change Streams broadcasting updates across instances. The consolidated health scoring engine with alert tiers runs as a nightly pipeline, replacing the manual weekly review. Third-party APIs — WhatsApp, PDF, GST invoicing — sit behind integration layers with retry logic.

**ENGINEERING CHALLENGE**
Concurrent writes are the core difficulty: two members booking the last slot, a waitlist promoting while someone checks in biometrically, a refund racing a session deduction. The design had to be correct under that load, and the proof had to be executable: a suite covering the booking lifecycle. External APIs fail on their own schedule, so retry logic has to absorb their failures without surfacing as platform incidents. And operator intuition about gym health had to be translated into a scoring engine with alert tiers precise enough to act on nightly.

**DECISIONS**
Treat tests as the specification: correctness under concurrent writes is enforced by the suite, not by hope. Automate the review: the manual weekly process became a nightly health-scoring pipeline with alert tiers. Put retries at the third-party boundary so WhatsApp, PDF, and GST invoicing failures don't surface as platform incidents. Use MongoDB Change Streams to broadcast updates across instances without adding a separate message broker.

**RESULT**
Production code across 100+ gyms and 60+ tenants. Full test coverage on the booking platform, with third-party integrations behind retry logic. The health scoring engine replaced the manual weekly review with a nightly pipeline. And weekly on-call with client engineering teams — leading product demos, resolving production issues in real time, as the technical point of contact between product and customer.

---

## 7. EXPERIENCE

**Full Stack Developer — Eazytag (Strivo SaaS Platform)**
`10/2025 – Present · Bengaluru, India`

Framing line (render beneath the title, above the bullets):
> Features owned end to end, then defended weekly in front of client engineering teams.

Bullets (outcome-led, each carries a real metric):
- Shipped production code across the full stack — Angular frontends, Java 21 and Micronaut backends, MongoDB data layers with Change Streams — for **100+ gyms and 60+ tenants**.
- Engineered a class booking platform covering slot scheduling, recurring series, waitlist promotion, biometric check-in, and the full session deduction/refund lifecycle — designed for correctness under concurrent writes.
- Fixed a money-pipeline bug where transfer, freeze, and settlement fees never reached collection reports; added a payment-category model and dual-writes so fees surface in reporting.
- Translated gym operator workflows into a consolidated health scoring engine with alert tiers, automating a manual weekly review into a nightly pipeline.
- Integrated third-party APIs (WhatsApp, PDF, GST invoicing) with retry logic, and ran weekly on-call with client engineering teams as the technical point of contact between product and customer.

---

## 8. OPEN SOURCE

`[Each entry: 1-2 sentences + mono metadata row + links.]`

### Eclipse JKube — Eclipse Foundation
> Authored 27 PRs across the Eclipse Foundation's Kubernetes tooling for Java applications, 18 of them merged, modernizing AssertJ and Mockito tests. PRs reviewed by Principal Engineer Marc Nuri.

> `ECLIPSE FOUNDATION · 07/2024 – 11/2024 · 27 PRS · 18 MERGED · ASSERTJ + MOCKITO`

Link: `GitHub` → https://github.com/eclipse-jkube/jkube

### OpenMetadata
> Submitted frontend search for the Roles entity (PR #27602) using Ant Design's Select typeahead, plus PRs for Greenplum DDL extraction (#27445) and Databricks lineage (#27648). All three PRs are closed and unmerged.

> `PR #27602 · ANT DESIGN TYPEAHEAD · ROLES ENTITY SEARCH · GREENPLUM DDL + DATABRICKS LINEAGE`

Links: `PR #27602` → https://github.com/open-metadata/OpenMetadata/pull/27602 · `Organization` → https://github.com/open-metadata

### Jira CI/CD Status Panel
> A Jira Forge plugin surfacing real-time CI/CD pipeline status inside Jira issues, built for the Atlassian ForgeQuest Hackathon.

> `ATLASSIAN FORGE · REAL-TIME CI/CD IN JIRA · FORGEQUEST HACKATHON`

`[No link exists in FACTS.md — render without a URL. Do not invent prize details, placement, or cash amounts.]`

### supabase-lingo
> Published an npm package for a real-time, PostgreSQL event-driven translation pipeline, built for the Lingo.dev Hackathon.

> `NPM PACKAGE · POSTGRESQL EVENT-DRIVEN PIPELINE · LINGO.DEV HACKATHON`

Link: `Demo` → https://youtu.be/03hsGuhBdzQ
`[Only the demo URL is verified. Do not link npm or a repo unless independently verified later.]`

---

## 9. ENGINEERING PRINCIPLES

`[Render as a titled list; title in mono or small caps, one sentence each.]`

1. **Tests are a design tool.** — On Strivo's booking engine, the test suite isn't insurance; it's how correctness under concurrent writes gets specified and proven.
2. **Cost is an engineering constraint.** — AutoAce hit 85% field-match accuracy over three labeled calls, under $0.001/min against a $0.003 ceiling, partly by replacing torch-based VAD with an ONNX runtime — model and runtime choice are budget decisions.
3. **Correctness lives at the race conditions.** — Waitlist promotion and refund lifecycles break under concurrent writes, not in demos; the booking platform was designed against that failure mode.
4. **Verify what you generate.** — MCP Foundry exists because LLM-generated tools deserve the same skepticism as human code: every tool is evaluated against adversarial prompts before it registers.
5. **Ship with accountability.** — Weekly on-call with client engineering teams means the code you ship is the code you answer for, in real time.

---

## 10. CONTACT / FOOTER

**Closing line:**
> I build production systems and take the on-call for them. If that's useful to you, email is the fastest route.

**Email display (plain text, mono):** `shivamrc189@gmail.com` → `[mailto:shivamrc189@gmail.com]`

**Link labels:**
- `GitHub` → https://github.com/ShivamChavan01
- `LinkedIn` → https://www.linkedin.com/in/ShivamChavan01

**Small print (mono, footer):**
> `Shivam Chavan · Full Stack Engineer · Bengaluru, India · 2026`

`[Phone number ([redacted]) is resume-only. It must NOT appear anywhere on the site.]`

---

## 11. VOICE & STYLE GUIDE

### Rules

1. **Sentence length.** Prose sentences run 8–18 words. One longer sentence per paragraph is allowed; never two in a row.
2. **Verb-first.** Bullets start with a verb in past tense ("Engineered", "Integrated", "Translated"). Never "Responsible for", "Worked on", "Helped with".
3. **No exclamation marks.** Anywhere. Ever.
4. **Metric formatting.** Metrics always carry their unit and live in mono spec rows: `25 LLMs`, `6 platform integrations`, `311 tests`, `100+ gyms`, `60+ tenants`, `9 fields`. Transitions use an arrow: `830MB → 85MB`. Comparisons use "vs": `85% vs 56%`, `< $0.001/min vs $0.003 ceiling`. Separators inside a row are middots: `·`. `[2026-10-15: examples refreshed to verified figures (311 tests is the VoiceScope repo's own count). The previous examples 1,400+ tests, 50+ gyms, 10+ tenants, 99%+ uptime, −60% flaky CI, −40% overhead & incidents, and +30% delivery are unsupported and must not be reused. "300+ tests" for VoiceScope remains valid.]`
5. **Capitalization.** Section eyebrows are mono, uppercase: `SELECTED WORK`, `EXPERIENCE`, `OPEN SOURCE`, `CONTACT`. Headlines and prose are sentence case. No Title Case anywhere.
6. **Mono-label usage.** Dates, metrics, stack lists, metadata rows, and the footer small print render in the monospace face. Narrative prose never goes in mono.
7. **Name technologies precisely.** "Java 21", "Micronaut", "Silero VAD (ONNX)", "Codex/GPT-5.6" — abbreviate nothing beyond how FACTS.md writes it.
8. **First person, singular.** Personal projects: "I built". Eazytag: "I owned" (the resume says "Owned features"). Never "we" — there is no team claim to hide behind.
9. **Traceability.** Every number, link, name, and date must exist in FACTS.md. If it isn't there, it doesn't ship. No inventory inflation ("20+ projects") — the site shows five projects and four open source entries; that is the count.
10. **Link labels name the destination.** `GitHub`, `Live`, `Demo`, `PR #27602`, `Organization` — never "check it out", "learn more", or "see more".
11. **No em dashes (user rule).** The em dash (—) never appears in any user-visible string. Mono separators use the middot `·`; prose uses colons, commas, periods, or parentheses. En dashes are permitted only inside date/number ranges (`10/2025 – Present`, `Jun – Jul 2026`) and the minus sign in metrics (`−90%`). `[2026-10-15: the shipped site (lib/data.ts) currently contains 9 em dashes, so this rule is not being followed. Decide whether to enforce it or retire it.]`

### Banned words and phrases

passionate · crafting · "crafting digital experiences" · seamless · cutting-edge · leveraged · synergy · robust · "robust ecosystem" · ecosystem · innovative · "state-of-the-art" · revolutionary · game-changer · next-gen · world-class · best-in-class · supercharge · empower · unlock · elevate · transformative · delve · "blazing fast" · magical · delightful · 10x · ninja · rockstar · wizard · guru · "thought leader" · evangelist · "disrupt" / "disruptive" · holistic · "wide range of" · "various" (as a filler) · "spearheaded" · "utilize" (use "use") · "solutions" (name the actual system instead)

---

## NOTES FOR BUILDERS (not copy)

- Availability line ("OPEN TO NEW WORK") is the only string on the site not backed by FACTS.md — confirm or drop it before launch.
- Strivo has no external link in FACTS.md; its only CTA is the in-page case study anchor.
- AutoAce links to Live only; supabase-lingo links to the YouTube demo only; Jira CI/CD Status Panel carries no link.
- Case-study problem framing (e.g., "operators rarely see why", "generated tools fail at agent runtime") is derived from stated capabilities, not invented events — keep it in that register when editing.
