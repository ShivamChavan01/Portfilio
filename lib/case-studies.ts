/** Engineering notes grounded in the portfolio project records and source audits. */

export type CaseStudySection = {
  label:
    | "CONTEXT"
    | "ARCHITECTURE"
    | "ENGINEERING CHALLENGE"
    | "DECISIONS"
    | "RESULT";
  body: string;
};

export type CaseStudy = {
  slug: string;
  /** Stable anchor id, e.g. #case-study-strivo */
  anchor: string;
  project: string;
  teaser: string;
  focus: string;
  decision: string;
  flow: { label: string; detail: string }[];
  stack: string;
  year: string;
  heroMetric: string;
  links: { label: string; href: string }[];
  /** Optional demo video (YouTube id) — rendered as a click-to-load facade. */
  video?: { id: string; label: string };
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "cutroom",
    focus: "Versioned editing",
    decision: "Review conflicts explicitly instead of silently moving clips to make a merge look valid.",
    flow: [
      { label: "Compare", detail: "Base + two timelines" },
      { label: "Merge", detail: "Structured clip fields" },
      { label: "Validate", detail: "Overlaps & geometry" },
      { label: "Resolve", detail: "Explicit editor review" },
    ],
    anchor: "case-study-cutroom",
    project: "Cutroom",
    teaser:
      "What happens when two valid video edits produce an invalid combined timeline?",
    stack: "TypeScript · React · IndexedDB · OPFS",
    year: "2026",
    heroMetric: "Explicit conflict resolution",
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/cutroom" },
      { label: "Try the editor", href: "https://cutroom-editor.vercel.app/" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "Cutroom explores version control for editing decisions. Alternate cuts share an ancestor, so editors can compare what changed and deliberately combine versions.",
      },
      {
        label: "ARCHITECTURE",
        body: "A pure TypeScript engine records structured operations with undo and redo. Three-way merging compares clip fields, then checks the combined geometry for overlaps that neither individual version contained. IndexedDB stores project history; OPFS stores uploaded media.",
      },
      {
        label: "DECISIONS",
        body: "Conflicts require explicit review. The editor never silently shifts clips to hide overlaps. AI proposals are previewed before applying, and the sample workspace is isolated from personal projects.",
      },
      {
        label: "RESULT",
        body: "A hosted browser-editor prototype with alternate versions, diffs, merge review, and structural checks. Timeline exports support OTIO, FCPXML, EDL, and native JSON. Rendered-video export and live collaboration are not implemented.",
      },
    ],
  },
  {
    slug: "voicescope",
    focus: "Voice AI analysis",
    decision: "Ground analysis in retrieved context, then validate the output. Treat the small labeled benchmark as a check, not an accuracy guarantee.",
    flow: [
      { label: "Ingest", detail: "Platform webhooks" },
      { label: "Transcribe", detail: "Deepgram / Gemini / Whisper" },
      { label: "Analyze", detail: "LLM + retrieved context" },
      { label: "Validate", detail: "Structured findings" },
    ],
    anchor: "case-study-voicescope",
    project: "VoiceScope",
    teaser:
      "Transcription, policy-grounded analysis, and output validation for voice AI calls.",
    stack:
      "Python · FastAPI · OpenAI · Anthropic · Gemini · Groq · Mistral · Whisper · ChromaDB · Railway",
    year: "Jun – Jul 2026",
    heroMetric: "6 platform integrations",
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/voiceScope" },
      { label: "Live", href: "https://voice-scope.vercel.app/runs" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "Voice AI agents deployed on platforms like Vapi, Retell, Bland, Bolna, Synthflow, and Air.ai report back through webhooks. When an agent hallucinates an answer or returns malformed output, someone has to notice, ideally before the next call. VoiceScope is my open source answer: an observability and regression-testing platform for voice AI agents. It was built to make that noticing systematic rather than manual.",
      },
      {
        label: "ARCHITECTURE",
        body: "A three-stage agentic pipeline does the core work: Deepgram, Gemini, or Whisper transcription, then LLM-based analysis with RAG context retrieval, then structured report generation. ChromaDB provides the vector store for RAG; FastAPI serves the platform in Python. Deterministic output checks complement policy-grounded analysis of possible hallucinations and schema violations. The harness is itself measured: a benchmark checks a small labeled call set. Multi-LLM support spans OpenAI, Anthropic, Gemini, Groq, and Mistral, with results streaming to the UI over SSE. CI/CD runs on GitHub Actions; the stack deploys on Railway.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "Ingesting webhooks from six external platforms means ingesting attack surface, so the integration layer carries SSRF protection as a first-class requirement. A validation harness that judges other systems must itself be trustworthy, which is why the harness is checked against labeled call data. Supporting several LLM providers requires a shared interface; comparable output quality across vendors still needs evaluation. And a regression-testing platform needs CI that actually runs its suite on every push.",
      },
      {
        label: "DECISIONS",
        body: "Validate first, trust later: every webhook passes SSRF-protected ingest before analysis. Check the validator: the harness is measured against a small labeled dataset, with results scoped to that dataset. Retrieve before judging: RAG context via ChromaDB grounds the LLM analysis in retrieved call context instead of model priors. Stay vendor-neutral: analysis runs across OpenAI, Anthropic, Gemini, Groq, and Mistral. Ship tests with the platform: the suite gates the build in GitHub Actions.",
      },
      {
        label: "RESULT",
        body: "VoiceScope is open source and documents adapters for six voice AI platforms. The platform transcribes, analyzes, and reports on voice agent calls with deterministic output checks and policy-grounded analysis that expose validation findings for review. Results from the small labeled benchmark do not establish accuracy on unseen calls. Streaming SSE keeps reports live in the browser.",
      },
    ],
  },
  {
    slug: "mcp-foundry",
    focus: "Agent tool evaluation",
    decision: "Evaluate generated tools on an isolated API mock and cap repair attempts at three rounds.",
    flow: [
      { label: "Generate", detail: "OpenAPI \u2192 MCP tools" },
      { label: "Evaluate", detail: "Agent + Prism mock" },
      { label: "Repair", detail: "Up to three rounds" },
      { label: "Register", detail: "Passing tool scorecard" },
    ],
    anchor: "case-study-mcp-foundry",
    project: "MCP Foundry",
    teaser: "Evaluating generated MCP tools against an isolated API mock.",
    stack: "Python · FastAPI · OpenAPI · provider adapters · Prism · FastMCP",
    year: "Jul 2026",
    heroMetric: "up to 3 repair rounds",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/MCP_Foundry",
      },
      { label: "Demo", href: "https://youtu.be/vRT6zaGCySg" },
    ],
    video: {
      id: "vRT6zaGCySg",
      label: "MCP Foundry demo from OpenAI Build Week",
    },
    sections: [
      {
        label: "CONTEXT",
        body: "MCP servers give coding agents new tools, and OpenAPI specs describe existing APIs. Bridging the two by hand is slow; generating blindly is worse, because a generated tool with an ambiguous description or broken behavior fails at agent runtime. MCP Foundry, built during the OpenAI Build Week Hackathon in July 2026, is a self-verifying OpenAPI-to-MCP server generator. The generation flow includes behavioral evaluation before registration.",
      },
      {
        label: "ARCHITECTURE",
        body: "The generator parses supported OpenAPI specifications and produces MCP server tooling. An LLM pass rewrites ambiguous tool descriptions before anything is evaluated. Evaluation runs every generated tool against a live agent on an isolated Prism mock; the reviewed evaluation pipeline uses that mock as its target. Failing tools enter an auto-repair loop: repair, re-test, repeat, for up to 3 rounds against four prompt classes: direct, rephrased, edge-case, and adversarial. Tools that survive are registered into Codex's MCP config with a transparent pass/fail scorecard. The stack is Python, FastAPI, OpenAPI, provider adapters, Prism, and FastMCP.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "Evaluation needs an agent to evaluate against, so every tool check runs a live agent, which means the mock environment has to be isolated, or verification becomes the hazard. Auto-repair needs a stopping condition, bounded here at 3 rounds. And the test surface has to be adversarial enough to be worth the loop: direct, rephrased, edge-case, and adversarial prompts, not a single happy path.",
      },
      {
        label: "DECISIONS",
        body: "Rewrite descriptions with an LLM before testing: ambiguous descriptions are a defect class you can fix upstream. Evaluate against a live agent on an isolated Prism mock instead of static checks, because tool quality is behavior, not syntax. Bound repair at 3 rounds across four prompt classes so the loop terminates. Gate registration on the scorecard, so Codex's MCP config only receives tools that passed.",
      },
      {
        label: "RESULT",
        body: "MCP Foundry produces MCP tooling and a scorecard from an API specification. Passing mock-based evaluation does not establish compatibility with every production service. Every generated tool is evaluated against a live agent across direct, rephrased, edge-case, and adversarial prompts before it can register. Built and demoed during OpenAI Build Week; the demo is public on YouTube.",
      },
    ],
  },
  {
    slug: "strivo",
    focus: "Concurrent systems",
    decision: "Keep booking correctness in the backend and broadcast changes through MongoDB Change Streams.",
    flow: [
      { label: "Interface", detail: "Angular workflows" },
      { label: "Backend", detail: "Java / Micronaut" },
      { label: "Persist", detail: "Tenant-scoped MongoDB" },
      { label: "Broadcast", detail: "Change Streams" },
    ],
    anchor: "case-study-strivo",
    project: "Strivo",
    teaser:
      "Booking correctness under concurrent writes on a multi-tenant SaaS running 100+ gyms.",
    stack: "Angular · Java 21 · Micronaut · MongoDB · Change Streams",
    year: "10/2025 – Present",
    heroMetric: "100+ gyms",
    links: [],
    sections: [
      {
        label: "CONTEXT",
        body: "According to the supplied résumé, Strivo is Eazytag's gym SaaS platform, with a stated scope of 100+ gyms and 60+ tenants. Those production counts are profile-provided and are not independently verified by public source code. Two problems dominate the domain. Class booking is concurrency-heavy: slot scheduling, recurring series, waitlist promotion, biometric check-in, and a full session deduction/refund lifecycle all touch the same state. And gym operators were running a manual weekly review to understand facility health. I joined as Full Stack Developer in October 2025 and own features across the entire stack.",
      },
      {
        label: "ARCHITECTURE",
        body: "Angular on the frontend; Java 21 and Micronaut behind it; MongoDB as the data layer; MongoDB Change Streams broadcasting real-time updates across instances. The consolidated health scoring engine with alert tiers runs as a nightly pipeline, replacing the manual weekly review. Third-party APIs (WhatsApp, PDF, GST invoicing) sit behind integration layers with retry logic.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "Concurrent writes are the core difficulty: two members booking the last slot, a waitlist promoting while someone checks in biometrically, a refund racing a session deduction. The design had to be correct under that load, and the proof had to be executable: a suite covering the booking lifecycle. External APIs fail on their own schedule, so retries are used to handle transient failures; they cannot guarantee incident-free operation. And operator intuition about gym health had to be translated into a scoring engine with alert tiers precise enough to act on nightly.",
      },
      {
        label: "DECISIONS",
        body: "Treat tests as the specification: use booking lifecycle tests to check concurrent-write behavior. Passing tests do not establish correctness for every production interleaving. Automate the review: the manual weekly process became a nightly health-scoring pipeline with alert tiers. Put retries at the third-party boundary to handle transient WhatsApp, PDF, and GST invoicing failures at their boundary. Use MongoDB Change Streams to broadcast updates across instances without adding a separate message broker.",
      },
      {
        label: "RESULT",
        body: "The supplied résumé reports production work across 100+ gyms and 60+ tenants. Booking lifecycle tests and third-party integrations behind retry logic. The health scoring engine replaced the manual weekly review with a nightly pipeline. And weekly on-call with client engineering teams: leading product demos, resolving production issues in real time, as the technical point of contact between product and customer.",
      },
    ],
  },
  {
    slug: "open-agent",
    focus: "Multi-tenant AI",
    decision: "Enforce project access, retrieval scope, tool limits, and token accounting on the server.",
    flow: [
      { label: "Authorize", detail: "Project ownership" },
      { label: "Retrieve", detail: "Project-scoped pgvector" },
      { label: "Execute", detail: "Provider + bounded tools" },
      { label: "Stream", detail: "SSE + usage accounting" },
    ],
    anchor: "case-study-open-agent",
    project: "Open Agent",
    teaser:
      "A multi-tenant chatbot platform with provider fallback, grounded tools, and server-enforced usage limits.",
    stack:
      "Python · FastAPI · SQLAlchemy · PostgreSQL · pgvector · React · TypeScript · Docker",
    year: "AI PLATFORM",
    heroMetric: "Configurable model providers",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/agent-platform",
      },
      { label: "Live", href: "https://agent-platform-popb.onrender.com/" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "Open Agent is a multi-tenant chatbot platform built around a practical question: how do you let different projects use capable language models without losing control of prompts, tools, data, or spend? Each project has its own system prompt and knowledge base. The platform has configurable model providers, calculator and search tools, document-grounded answers, streamed output, and configurable session and weekly token budgets.",
      },
      {
        label: "ARCHITECTURE",
        body: "A React and TypeScript frontend talks to a FastAPI backend. SQLAlchemy persists users, projects, conversations, messages, usage, and uploaded documents in PostgreSQL. Document chunks are embedded into pgvector with project-scoped retrieval. Chat responses stream to the browser over Server-Sent Events, including tool and provider updates, while Docker packages the application for deployment.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "The hard part is coordinating several failure-prone boundaries in one request: authentication, tenant ownership, retrieval, model selection, tool execution, and streaming. A model can return malformed tool arguments, a provider can fail mid-conversation, or a user can exhaust a budget while a stream is active. The server therefore owns project access and token accounting instead of trusting the client, and the tool-calling loop is bounded so a model cannot run forever.",
      },
      {
        label: "DECISIONS",
        body: "Keep provider integration behind one interface so the same conversation can fall back across models when a provider is unavailable. Filter RAG retrieval by project ID and enforce ownership checks on the server. These implementation checks still need deployment-specific tenant-isolation testing. Use SSE for incremental output because chat is unidirectional from server to browser and does not need a heavier WebSocket protocol. Keep the tool loop and usage limits on the server, where they can be validated and enforced consistently.",
      },
      {
        label: "RESULT",
        body: "Open Agent works end to end as a multi-tenant AI platform: projects, conversations, JWT authentication, pgvector-backed RAG, calculator/document/web tools, provider fallback, SSE token streaming, and rolling token-budget metering. The repository includes automated tests and links to a public demo. This source audit does not establish the demo’s current reliability or a complete tenant-security guarantee.",
      },
    ],
  },
];
