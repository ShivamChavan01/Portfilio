# VERIFIED FACT BASE — Shivam Chavan

> **Single source of truth.** Extracted from `Shivam_Chavan_Resume_OnePage.pdf` (incl. PDF hyperlink annotations).
> **Re-verified 2026-10-15** against the GitHub API, the npm registry, and each project's own README. Source resume: `Shivam_Chavan_Resume.pdf` (Drive, modified 2026-09-30). Corrections applied below supersede the earlier extraction where they conflict.
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
- Owned features end to end across the full stack — Angular frontends, Java 21 and Micronaut backends, MongoDB data layers, and MongoDB change-stream event pipelines; shipped production code for **100+ gyms and 60+ tenants**.
- Ran **weekly on-call support** directly with client engineering teams — led product demos, resolved production issues and client-reported queries in real time; technical point of contact between product and customer.
- Translated gym operator workflows into a **consolidated health scoring engine with alert tiers**; automated a manual weekly review into a nightly pipeline. `[UNVERIFIED: an earlier draft claimed a 40% reduction in reporting overhead and incidents. That figure is in no resume version and could not be evidenced. Do not republish without proof.]`
- Engineered a **class booking platform** covering slot scheduling, recurring series, waitlist promotion, biometric check-in, and full session deduction/refund lifecycle, designed for correctness under concurrent writes; integrated third-party APIs (WhatsApp, PDF, GST invoicing) with retry logic. `[UNVERIFIED by external evidence: previously claimed 1,400+ passing tests and 99%+ uptime. Private repo; confirm or drop before publishing.]`
- Fixed a **money-pipeline bug** where transfer, freeze, and settlement fees never reached collection reports; added a payment-category model and dual-writes so fees surface in reporting.

## Open Source & Hackathons

### Eclipse JKube — Eclipse Foundation · 07/2024 – 11/2024
- Authored **27 PRs, 18 merged**, across this Kubernetes tooling for Java apps.
- Replaced deprecated AssertJ `asList()` calls with `asInstanceOf` and `Mockito.mock` with real objects, modernizing the test suite.
- PRs reviewed by Principal Engineer **Marc Nuri** (Red Hat; Eclipse JKube lead maintainer) and **Rohan Kumar**.
- `[Removed 2026-10-15: "15+ modules", "cut flaky CI by 60%", and "accelerated delivery by 30%" had no supporting evidence and are not to be reintroduced without proof.]`
- Org link (real destination): https://github.com/eclipse-jkube/jkube

### OpenMetadata
- Submitted frontend search for the **Roles entity (PR #27602)** with Ant Design Select typeahead. **PR is closed, not merged** (closed 2026-04-28; maintainer requested a screen recording plus unit and Playwright tests; the UI checkstyle check failed).
- Submitted PR #27445 (replaced `MetaData.reflect()` with direct SQL) and PR #27648 (Databricks external-table lineage paths). **All three PRs are closed and unmerged.**
- PR links: https://github.com/open-metadata/OpenMetadata/pull/27602 · https://github.com/open-metadata/OpenMetadata/pull/27445 · https://github.com/open-metadata/OpenMetadata/pull/27648
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
- Built a **hybrid DSP + LLM pipeline** classifying call-center audio into **9 fields** (tone, noise type/severity, quality, overlap, silence) under a hard **$0.003/audio-minute cost ceiling**, measured under **$0.001/min** (~30% of budget) with **85% field-match accuracy vs. 56%** for a DSP-only baseline, measured on **3 labeled calls** (the repo notes n=3 is a calibration set, not a validation set).
- Replaced torch-based VAD with an ONNX runtime, cutting peak server memory by **~90% (830MB → 85MB)**; shipped a login-gated dashboard for batch ZIP upload, cost tracking, and CSV/JSON export.

### 5. voicecli · Jun 2026
- **Stack:** Python, faster-whisper, xdotool, Piper TTS, SQLite
- **Links:** GitHub https://github.com/ShivamChavan01/voicecli · Demo https://youtu.be/fVV5UPiRxZI
- Built a **fully offline push-to-talk voice layer for terminal coding agents**. Hold `Ctrl+Space` to record; **faster-whisper** transcribes locally and **xdotool** types the text into whichever CLI has focus.
- A background watcher tails each agent's session store — Claude Code and Codex CLI JSONL files, OpenCode's SQLite database — and speaks new assistant messages aloud through **Piper TTS**. No cloud STT and no API key for the core voice loop.

### 6. opencode-terminal · Sep 2026
- **Stack:** TypeScript, Bun, Node, OpenCode Plugins
- **Links:** GitHub https://github.com/ShivamChavan01/opencode-terminal · npm https://www.npmjs.com/package/opencode-terminal
- Published an **OpenCode plugin on npm under MIT** (v0.2.0) giving coding agents real terminals: **9 tools** (`open_terminal`, `terminal_detect`, `close_terminal`, `terminal_run`, `terminal_start`, `terminal_log`, `terminal_send`, `terminal_kill`, `terminal_list`), persistent background sessions, REPLs, and run-command **auto-detection across 15+ stacks**. Closing a window tree-kills its process, so nothing orphans ports.
- Note: `https://github.com/ShivamChavan01/terminal-` is a stale rename that still resolves via a 301 redirect. Use the canonical `opencode-terminal` URL.

## Education

**B.E. Electronics and Communication** — Bapuji Institute of Engineering and Technology, Davangere, Karnataka · 08/2020 – 06/2023 · CGPA 7.5

## Skills (as stated on resume)

Source: `Shivam_Chavan_Resume.pdf` (2026-09-30). The previous list here was extracted from the older resume and no longer matches; that older list claimed Java 17, SQLAlchemy, JWT/OAuth2, SSE/WebSockets, Kubernetes, AWS, Kafka, Multi-Agent Orchestration, MCP, Agile, and LLM Cost Engineering. None of those appear on the current resume.

- **Technical Skills:** Python, Java, TypeScript, SQL, FastAPI, Micronaut, Spring Boot, React, Angular, MongoDB, PostgreSQL
- **AI & Tools:** RAG, Vector DBs, Whisper, LLM Evals, LLM Workflows, Eval Harnesses, Docker, CI/CD, Claude Code, OpenCode, Codex CLI

## Link Verification Notes

- All project links above were extracted from the resume PDF's hyperlink annotations — they are the user's own stated destinations.
- A newer resume (2026-09-30) adds three link targets: `https://github.com/ShivamChavan01/opencode-terminal`, `https://github.com/ShivamChavan01/voicecli`, and `https://youtu.be/fVV5UPiRxZI`. All three were verified reachable on 2026-10-15.
- `https://github.com/ShivamChavan01/terminal-` is a stale rename of `opencode-terminal` that still resolves via a 301 redirect. Use the canonical `opencode-terminal` URL.
- The email on the 2026-09-30 resume reads `shivamrc000@gmail.com`. Every other surface disagrees: `shivamrc189@gmail.com` is on all 16 commits in the portfolio repo (latest 2026-09-20) and on the npm maintainer record for both published packages. Treat `shivamrc189@gmail.com` as correct and the resume's address as a typo.
- `linkedin.com/in/ShivamChavan01` → canonical form `https://www.linkedin.com/in/ShivamChavan01`.
- supabase-lingo's npm package was independently verified later (v0.1.1, MIT) and the site links it alongside the YouTube demo.
- Jira CI/CD Status Panel has no link — present it as built for the Atlassian ForgeQuest **hackathon** without any placement or prize claim.
- Eclipse JKube / OpenMetadata: use org/PR links listed above (derived from verified org names + PR number).
