/**
 * Single source of truth for all site copy and links.
 * Copy is grounded in docs/CONTENT_STRATEGY.md / docs/FACTS.md; the Strivo
 * implementation details follow the repository audit in BASERESUME.
 * Implementers import from here — never hardcode facts or links in JSX.
 */

export type SiteLink = {
  label: string;
  href: string;
  external: boolean;
};

export const site = {
  name: "Shivam Chavan",
  title: "Full Stack Engineer",
  location: "Bengaluru, India",
  email: "shivamrc189@gmail.com",
  phone: "+91 91139 11660",
  resume: "https://drive.google.com/file/d/1iL4V8Xgu5MAHFp6fuh-EW8Q6fxM3L4Yo/view",
  links: {
    github: "https://github.com/ShivamChavan01",
    linkedin: "https://www.linkedin.com/in/ShivamChavan01",
  },
} as const;

export const nav = {
  anchors: [
    { index: "01", label: "WORK", href: "#work" },
    { index: "02", label: "CASE STUDIES", href: "#case-studies" },
    { index: "03", label: "EXPERIENCE", href: "#experience" },
    { index: "04", label: "OPEN SOURCE", href: "#open-source" },
    { index: "05", label: "CONTACT", href: "#contact" },
  ],
  /** Mobile keeps only the anchors that fit at 320px. */
  mobile: [0, 2, 4],
} as const;

export const hero = {
  eyebrow: "SHIVAM CHAVAN · FULL STACK ENGINEER",
  headline: "I build production systems and AI infrastructure.",
  sub: "I work across voice AI observability, multi-tenant SaaS, and LLM tooling, from React frontends to event-driven backend systems. Currently building Strivo at Eazytag, on-call weekly with client engineering teams.",
  metaRail: [
    "BENGALURU, INDIA",
    "FULL STACK ENGINEER",
    "FOCUS: AGENTIC AI · VOICE AI · MULTI-TENANT SAAS",
    "PYTHON · JAVA 21 · TYPESCRIPT",
  ],
  ctaPrimary: { label: "View selected work", href: "#work" },
  ctaSecondary: [
    { label: "Email", href: "mailto:shivamrc189@gmail.com" },
    { label: "GitHub", href: "https://github.com/ShivamChavan01" },
    { label: "Resume", href: "https://drive.google.com/file/d/1iL4V8Xgu5MAHFp6fuh-EW8Q6fxM3L4Yo/view" },
  ] as SiteLink[],
} as const;

export const intro =
  "I'm a full stack engineer in Bengaluru. At Eazytag I build Strivo, a multi-tenant SaaS platform for gyms: Angular frontends, Java 21 and Micronaut backends, and MongoDB with change streams for real-time updates. I run weekly on-call directly with client engineering teams. Outside work I build open source AI infrastructure: VoiceScope, an observability and regression-testing platform for voice AI agents, and MCP Foundry, a self-verifying OpenAPI-to-MCP generator. Before that, I contributed across 15+ modules of Eclipse JKube at the Eclipse Foundation. I optimize for systems that still work in production on a bad day.";

export const principles = [
  {
    title: "Tests are a design tool.",
    body: "On Strivo's booking engine, 1,400+ passing tests aren't insurance; they're how correctness under concurrent writes gets specified and proven.",
  },
  {
    title: "Cost is an engineering constraint.",
    body: "AutoAce hit 85% accuracy under $0.001/min against a $0.003 ceiling partly by replacing torch-based VAD with an ONNX runtime. Model and runtime choice are budget decisions.",
  },
  {
    title: "Correctness lives at the race conditions.",
    body: "Waitlist promotion and refund lifecycles break under concurrent writes, not in demos; the booking platform was designed against that failure mode.",
  },
  {
    title: "Verify what you generate.",
    body: "MCP Foundry exists because LLM-generated tools deserve the same skepticism as human code: every tool is evaluated against adversarial prompts before it registers.",
  },
  {
    title: "Ship with accountability.",
    body: "Weekly on-call with client engineering teams means the code you ship is the code you answer for, in real time.",
  },
] as const;

export const sectionIntros = {
  work: "Five systems, built end to end, with the tests, links, and numbers attached.",
  experience: "One role, one platform, owned end to end. On-call included.",
  openSource:
    "Merged, reviewed, and shipped in other people's codebases: Eclipse Foundation, OpenMetadata, Atlassian, npm.",
  contact: "No forms. Email is fastest.",
} as const;

export type WorkPattern = "dossier" | "ledger" | "fieldReport" | "indexCard" | "footnote";

export type WorkEntry = {
  slug: string;
  index: string;
  name: string;
  year: string;
  descriptor: string;
  summary: string;
  role: string;
  stack: string[];
  spec: string[];
  links: SiteLink[];
  pattern: WorkPattern;
  /** In-page case study anchor (Strivo only — no external link exists in FACTS). */
  caseStudyHref?: string;
  current?: boolean;
};

export const work: WorkEntry[] = [
  {
    slug: "voicescope",
    index: "01",
    name: "VoiceScope",
    year: "Jun – Jul 2026",
    pattern: "dossier",
    descriptor: "Open source observability and regression-testing platform for voice AI agents.",
    summary:
      "Voice agents fail in the field, and their operators rarely see why. VoiceScope ingests call webhooks from six voice AI platforms and runs a three-stage agentic pipeline (Whisper transcription, LLM analysis with RAG context retrieval, structured report generation) over a 7-layer validation harness that catches hallucinations and schema violations. Open source, live, with 300+ tests gating the build.",
    role: "Sole builder: architecture, pipeline, integrations, tests, deployment.",
    stack: [
      "Python",
      "FastAPI",
      "OpenAI",
      "Anthropic",
      "Gemini",
      "Groq",
      "Mistral",
      "Whisper",
      "ChromaDB",
      "RAG",
      "Railway",
    ],
    spec: ["300+ tests", "6 platform integrations", "SSRF protection", "7-layer validation harness"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/voiceScope", external: true },
      { label: "Live", href: "https://voice-scope.vercel.app/", external: true },
    ],
  },
  {
    slug: "mcp-foundry",
    index: "02",
    name: "MCP Foundry",
    year: "Jul 2026",
    pattern: "ledger",
    descriptor: "Generates MCP servers from OpenAPI specs, then verifies every tool it ships.",
    summary:
      "A generated MCP tool with an ambiguous description or broken behavior fails when an agent runs it. MCP Foundry, built at the OpenAI Build Week Hackathon, parses any OpenAPI spec, uses an LLM to rewrite ambiguous tool descriptions, and evaluates every generated tool against a live agent on an isolated Prism mock. Failing tools are auto-repaired and re-tested for up to 3 rounds against direct, rephrased, edge-case, and adversarial prompts, then registered into Codex's MCP config with a transparent pass/fail scorecard.",
    role: "Sole builder: OpenAI Build Week Hackathon.",
    stack: ["Python", "FastAPI", "OpenAPI", "Codex/GPT-5.6", "Prism", "FastMCP"],
    spec: ["up to 3 repair rounds", "4 prompt classes", "live-agent evals", "pass/fail scorecard"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/MCP_Foundry", external: true },
      { label: "Demo", href: "https://youtu.be/vRT6zaGCySg", external: true },
    ],
  },
  {
    slug: "strivo",
    index: "03",
    name: "Strivo",
    year: "10/2025 – Present",
    pattern: "fieldReport",
    current: true,
    descriptor: "Multi-tenant gym SaaS: bookings, biometric check-in, health scoring, GST invoicing.",
    summary:
      "Strivo runs gyms: slot scheduling, recurring class series, waitlist promotion, biometric check-in, and a full session deduction/refund lifecycle. I own features across the stack (Angular, Java 21 with Micronaut, and MongoDB), including a consolidated health scoring engine that turned a manual weekly review into a nightly, alert-tiered pipeline. MongoDB change streams broadcast real-time updates across instances, and third-party integrations run behind retry logic.",
    role: "Full Stack Developer at Eazytag: product engineering with weekly client-facing on-call.",
    stack: ["Angular", "Java 21", "Micronaut", "MongoDB", "Change Streams"],
    spec: ["1,400+ tests", "50+ gyms", "10+ tenants", "99%+ uptime", "−40% overhead & incidents"],
    links: [],
    caseStudyHref: "#case-study-strivo",
  },
  {
    slug: "open-agent",
    index: "04",
    name: "Open Agent",
    year: "AI PLATFORM",
    pattern: "indexCard",
    descriptor: "Multi-tenant chatbot platform: 25 LLMs, tool calling, RAG, metering.",
    summary:
      "Open Agent is a multi-tenant chatbot platform with per-project system prompts, SSE token streaming, live chain-of-thought display, and a tool-calling loop (calculator, RAG document search, web search) across 25 LLMs with automatic provider fallback. A pgvector-backed RAG pipeline is scoped per project, and server-enforced rolling token-budget metering caps sessions and weeks.",
    role: "Sole builder: multi-tenant AI platform.",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "pgvector",
      "JWT",
      "React",
      "TypeScript",
      "Docker",
    ],
    spec: ["25 LLMs", "120+ tests", "provider fallback", "token-budget metering"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/agent-platform", external: true },
      { label: "Live", href: "https://agent-platform-popb.onrender.com", external: true },
    ],
  },
  {
    slug: "autoace",
    index: "05",
    name: "AutoAce",
    year: "2026",
    pattern: "footnote",
    descriptor: "Call-audio classifier at 85% accuracy under a hard cost ceiling.",
    summary:
      "AutoAce classifies call-center audio into 9 fields (tone, noise type and severity, quality, overlap, silence) under a hard $0.003/audio-minute cost ceiling. The hybrid DSP + LLM pipeline measures under $0.001/min, about 30% of budget, and hits 85% field-match accuracy against 55% for a DSP-only baseline. Replacing torch-based VAD with an ONNX runtime cut peak server memory from 830MB to 85MB; a login-gated dashboard handles batch ZIP upload, cost tracking, and CSV/JSON export.",
    role: "Sole builder: voice AI take-home assessment.",
    stack: ["Python", "Groq (Whisper + LLM)", "librosa", "Silero VAD (ONNX)", "FastAPI", "React"],
    spec: ["< $0.001/min vs $0.003 ceiling", "85% vs 55%", "830MB → 85MB", "9 fields"],
    links: [{ label: "Live", href: "https://voice-classifier.up.railway.app", external: true }],
  },
];

export const experience = {
  role: "Full Stack Developer",
  org: "Eazytag",
  platform: "Strivo SaaS Platform",
  dates: "10/2025 – Present",
  location: "Bengaluru, India",
  current: true,
  framing: "Features owned end to end, then defended weekly in front of client engineering teams.",
  bullets: [
    "Shipped production code across the full stack (Angular frontends, Java 21 and Micronaut backends, MongoDB data layers, and MongoDB Change Streams for real-time updates) for 50+ gyms and 10+ tenants.",
    "Engineered a class booking platform covering slot scheduling, recurring series, waitlist promotion, biometric check-in, and the full session deduction/refund lifecycle, designed for correctness under concurrent writes, with 1,400+ passing tests.",
    "Translated gym operator workflows into a consolidated health scoring engine with alert tiers, automating a manual weekly review into a nightly pipeline, cutting reporting overhead and incidents by 40% each.",
    "Integrated third-party APIs (WhatsApp, PDF, GST invoicing) with retry logic while maintaining 99%+ uptime, and ran weekly on-call with client engineering teams as the technical point of contact between product and customer.",
  ],
} as const;

export const education =
  "08/2020 – 06/2023 · B.E. ELECTRONICS AND COMMUNICATION · BIET, DAVANGERE · CGPA 7.5";

export type OpenSourceEntry = {
  name: string;
  org?: string;
  period?: string;
  description: string;
  meta: string;
  links: SiteLink[];
  winner?: boolean;
};

export const openSource: OpenSourceEntry[] = [
  {
    name: "Eclipse JKube",
    org: "Eclipse Foundation",
    period: "05/2024 – 03/2025",
    description:
      "Contributed across 15+ modules of the Eclipse Foundation's Kubernetes tooling for Java applications. Worked test-first: flaky CI down 60%, delivery up 30%, with PRs reviewed by Principal Engineer Marc Nuri.",
    meta: "ECLIPSE FOUNDATION · 05/2024 – 03/2025 · 15+ MODULES · TDD · −60% FLAKY CI · +30% DELIVERY",
    links: [{ label: "GitHub", href: "https://github.com/eclipse-jkube/jkube", external: true }],
  },
  {
    name: "OpenMetadata",
    description:
      "Implemented frontend search for the Roles entity (PR #27602) using Ant Design's Select typeahead. Also investigated Greenplum connector and Databricks lineage issues.",
    meta: "PR #27602 · ANT DESIGN TYPEAHEAD · ROLES ENTITY SEARCH · GREENPLUM + DATABRICKS INVESTIGATIONS",
    links: [
      {
        label: "PR #27602",
        href: "https://github.com/open-metadata/OpenMetadata/pull/27602",
        external: true,
      },
      { label: "Organization", href: "https://github.com/open-metadata", external: true },
    ],
  },
  {
    name: "Jira CI/CD Status Panel",
    description:
      "A Jira Forge plugin surfacing real-time CI/CD pipeline status inside Jira issues. Won the Atlassian ForgeQuest Hackathon.",
    meta: "ATLASSIAN FORGE · REAL-TIME CI/CD IN JIRA · FORGEQUEST HACKATHON · WINNER",
    links: [],
    winner: true,
  },
  {
    name: "supabase-lingo",
    description:
      "Published an npm package for a real-time, PostgreSQL event-driven translation pipeline, built for the Lingo.dev Hackathon.",
    meta: "NPM PACKAGE · POSTGRESQL EVENT-DRIVEN PIPELINE · LINGO.DEV HACKATHON",
    links: [{ label: "Demo", href: "https://youtu.be/03hsGuhBdzQ", external: true }],
  },
];

export const contact = {
  closing:
    "I build production systems and take the on-call for them. If that's useful to you, email is the fastest route.",
  colophon: "Shivam Chavan · Full Stack Engineer · Bengaluru, India · 2026",
  buildNote: "NEXT.JS + TAILWIND · NO TRACKING",
} as const;
