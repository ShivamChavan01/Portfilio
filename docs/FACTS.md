# VERIFIED FACT BASE — Shivam Chavan

> **Single source of truth.** Extracted from `Shivam_Chavan_Resume_OnePage.pdf` (incl. PDF hyperlink annotations).
> **RULE: Every agent MUST use only these facts. Do NOT invent projects, metrics, employers, dates, links, or capabilities. If a fact is not here, it does not go on the site.**

## Identity & Contact

| Field | Value |
|---|---|
| Name | Shivam Chavan |
| Title | Full Stack Engineer |
| Location | Bengaluru, India |
| Email | shivamrc189@gmail.com |
| LinkedIn | https://linkedin.com/in/ShivamChavan01 |
| GitHub | https://github.com/ShivamChavan01 |
| Phone (resume only) | not published on the site |

## Resume Summary (verbatim intent)

Full Stack Engineer with deep Python experience building production-grade agentic AI systems, LLM pipelines, and multi-tenant SaaS platforms. Shipped VoiceScope, an open source voice AI observability platform with integrations across Vapi, Retell, Bland, and Bolna. Runs weekly on-call support with client engineering teams at Eazytag. Open source contributor at Eclipse Foundation across Python, Java, Angular, React, and cloud infrastructure.

## Experience

### Full Stack Developer — Eazytag (Strivo SaaS Platform) · 10/2025 – Present · Bengaluru, India
- Owned features end to end across the full stack — Angular frontends, Java 21 and Micronaut backends, MongoDB data layers, and MongoDB change-stream event pipelines; shipped production code for **50+ gyms and 10+ tenants**.
- Ran **weekly on-call support** directly with client engineering teams — led product demos, resolved production issues and client-reported queries in real time; technical point of contact between product and customer.
- Translated gym operator workflows into a **consolidated health scoring engine with alert tiers**; automated a manual weekly review into a nightly pipeline, cutting reporting overhead and incidents by **40% each**.
- Engineered a **class booking platform** covering slot scheduling, recurring series, waitlist promotion, biometric check-in, and full session deduction/refund lifecycle, designed for correctness under concurrent writes, with **1,400+ passing tests**; integrated third-party APIs (WhatsApp, PDF, GST invoicing) with retry logic, maintaining **99%+ uptime**.

## Open Source & Hackathons

### Eclipse JKube — Eclipse Foundation · 05/2024 – 03/2025
- Contributed across **15+ modules** of this Kubernetes tooling for Java apps.
- Applied TDD, cut flaky CI by **60%**, accelerated delivery by **30%**.
- PRs reviewed by Principal Engineer **Marc Nuri**.
- Org link (real destination): https://github.com/eclipse-jkube/jkube

### OpenMetadata
- Implemented frontend search for the **Roles entity (PR #27602)** with Ant Design Select typeahead.
- Investigated Greenplum connector and Databricks lineage issues.
- PR link (real destination, derived from verified PR number): https://github.com/open-metadata/OpenMetadata/pull/27602
- Org link: https://github.com/open-metadata

### Jira CI/CD Status Panel
- Developed a Jira Forge plugin surfacing **real-time CI/CD pipeline status inside Jira issues**, built for the **Atlassian ForgeQuest Hackathon**.

### supabase-lingo
- Published an **npm package** for a real-time, PostgreSQL event-driven translation pipeline, for the **Lingo.dev Hackathon**.
- Demo link (verified): https://youtu.be/03hsGuhBdzQ

## Projects (with VERIFIED links from resume PDF)

### 1. VoiceScope · Jun – Jul 2026
- **Stack:** Python, FastAPI, OpenAI, Anthropic, Gemini, Groq, Mistral, Whisper, ChromaDB, RAG, Railway
- **Links:** GitHub https://github.com/ShivamChavan01/voiceScope · Live https://voice-scope.vercel.app/runs
- Architected an **open source observability and regression-testing platform for voice AI agents**: 3-stage agentic pipeline (Whisper transcription → LLM-based analysis with RAG context retrieval → structured report generation) and a **7-layer validation harness** catching hallucinations and schema violations, with a feedback loop that benchmarks harness accuracy and auto-tunes weights each run.
- Delivered native webhook integrations for **6 voice AI platforms (Vapi, Retell, Bland, Bolna, Synthflow, Air.ai)** with **SSRF protection**; **300+ tests** passing, multi-LLM support, streaming SSE, CI/CD via GitHub Actions.

### 2. MCP Foundry · Jul 2026
- **Stack:** Python, FastAPI, OpenAPI, Codex/GPT-5.6, Prism, FastMCP — **OpenAI Build Week Hackathon**
- **Links:** GitHub https://github.com/ShivamChavan01/MCP_Foundry · Demo https://youtu.be/vRT6zaGCySg
- Built a **self-verifying OpenAPI-to-MCP server generator**: parses any OpenAPI spec, uses an LLM to rewrite ambiguous tool descriptions, then evaluates every generated tool against a live agent on an isolated Prism mock. Failing tools are auto-repaired and re-tested for up to 3 rounds against direct, rephrased, edge-case, and adversarial prompts, then registered into Codex's MCP config with a transparent pass/fail scorecard.

### 3. Open Agent (yellow.ai SDE-1 take-home) · Take-Home Assignment
- **Stack:** Python, FastAPI, SQLAlchemy, PostgreSQL, pgvector, JWT, React, TypeScript, Docker
- **Links:** GitHub https://github.com/ShivamChavan01/agent-platform · Live https://agent-platform-popb.onrender.com/
- Built a **multi-tenant chatbot platform** with per-project system prompts, SSE token streaming, live chain-of-thought display, and a tool-calling loop (calculator, RAG document search, web search) across **25 LLMs** with automatic provider fallback.
- Implemented a **pgvector-backed RAG pipeline** scoped per project, JWT auth, and server-enforced rolling **token-budget metering** (session/weekly caps); **120+ tests** passing, deployed via multi-stage Docker.

### 4. AutoAce · 2026
- **Stack:** Python, Groq (Whisper + LLM), librosa, Silero VAD (ONNX), FastAPI, React — Voice AI Take-Home Assessment
- **Links:** GitHub https://github.com/ShivamChavan01/autoace-voice-tone-classifier
- Built a **hybrid DSP + LLM pipeline** classifying call-center audio into **9 fields** (tone, noise type/severity, quality, overlap, silence) under a hard **$0.003/audio-minute cost ceiling**, measured under **$0.001/min** (~30% of budget) with **85% field-match accuracy vs. 55%** for a DSP-only baseline.
- Replaced torch-based VAD with an ONNX runtime, cutting peak server memory by **~90% (830MB → 85MB)**; shipped a login-gated dashboard for batch ZIP upload, cost tracking, and CSV/JSON export.

## Education

**B.E. Electronics and Communication** — Bapuji Institute of Engineering and Technology, Davangere, Karnataka · 08/2020 – 06/2023 · CGPA 7.5

## Skills (as stated on resume)

- **Languages/Core:** Python, Java 17, TypeScript
- **Backend:** FastAPI, Spring Boot, SQLAlchemy, JWT/OAuth2, SSE/WebSockets
- **Frontend:** React, Angular
- **Data:** PostgreSQL, pgvector, MongoDB
- **Infra:** Docker, Kubernetes, AWS, Kafka
- **AI/ML:** LLMs, Agentic AI & Tool-Calling, RAG & Vector Search, Multi-Agent Orchestration, MCP, ASR/Audio DSP (Whisper)
- **Tools/Practice:** Claude Code, OpenCode, Codex CLI, TDD, CI/CD, Agile, LLM Cost Engineering

## Link Verification Notes

- All project links above were extracted from the resume PDF's hyperlink annotations — they are the user's own stated destinations.
- `linkedin.com/in/ShivamChavan01` → canonical form `https://www.linkedin.com/in/ShivamChavan01`.
- supabase-lingo has a verified YouTube demo; its npm/repo URL was NOT in the resume — link only the demo (or the npm package only if independently verified later).
- Jira CI/CD Status Panel has no link — present it as built for the Atlassian ForgeQuest **hackathon** without any placement or prize claim.
- Eclipse JKube / OpenMetadata: use org/PR links listed above (derived from verified org names + PR number).
