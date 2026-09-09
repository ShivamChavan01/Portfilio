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
  resume: "https://drive.google.com/file/d/1wKUMLS4Z1Qudry4FqZDJbPuPwuS8467w/view?usp=sharing",
  links: {
    github: "https://github.com/ShivamChavan01",
    linkedin: "https://www.linkedin.com/in/ShivamChavan01",
    x: "https://x.com/shivamrc2",
    /** Paste your public Spotify profile/playlist URL here (open.spotify.com/...) to enable the embed. */
    spotify: "",
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
  sub: "I work across voice AI observability, multi-tenant SaaS, and LLM tooling, from Angular frontends to event-driven backend systems.",
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
    { label: "Resume", href: site.resume, external: true },
  ] as SiteLink[],
} as const;

export const sectionIntros = {
  work: "Things I've built.",
  experience: "One role, one platform. Features owned end to end, on-call included.",
  openSource:
    "Merged and shipped in other people's codebases: Eclipse Foundation, OpenMetadata, Atlassian, npm.",
  contact: "No forms. Email is fastest.",
} as const;

export type WorkEntry = {
  slug: string;
  index: string;
  name: string;
  year: string;
  descriptor: string;
  summary: string;
  stack: string[];
  spec: string[];
  links: SiteLink[];
  /** In-page case study anchor (no external link exists in FACTS). */
  caseStudyHref?: string;
  current?: boolean;
};

export const work: WorkEntry[] = [
  {
    slug: "voicescope",
    index: "01",
    name: "VoiceScope",
    year: "Jun – Jul 2026",
    descriptor: "Voice AI observability across six platforms, with SSRF-protected ingest and a self-tuning validation harness.",
    summary: "Voice agents fail in the field and their operators rarely see why. VoiceScope ingests call webhooks from six voice AI platforms through a three-stage pipeline — Whisper transcription, LLM analysis with RAG retrieval, structured reports — under a validation harness that benchmarks and re-tunes its own weights every run. Open source, live, CI-gated.",
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
    spec: ["6 platform integrations", "SSRF protection", "7-layer validation harness"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/voiceScope", external: true },
      { label: "Live", href: "https://voice-scope.vercel.app/runs", external: true },
    ],
    caseStudyHref: "#case-study-voicescope",
  },
  {
    slug: "mcp-foundry",
    index: "02",
    name: "MCP Foundry",
    year: "Jul 2026",
    descriptor: "Generates MCP servers from OpenAPI specs, then tests every tool against a live agent before registering it.",
    summary: "A generated tool with a vague description fails at agent runtime. MCP Foundry rewrites ambiguous descriptions with an LLM, evaluates each tool against a live agent on an isolated Prism mock, and auto-repairs failures for up to 3 rounds across direct, rephrased, edge-case, and adversarial prompts. Survivors register into Codex's MCP config with a pass/fail scorecard. Built at the OpenAI Build Week Hackathon.",
    stack: ["Python", "FastAPI", "OpenAPI", "Codex/GPT-5.6", "Prism", "FastMCP"],
    spec: ["up to 3 repair rounds", "4 prompt classes", "live-agent evals", "pass/fail scorecard"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/MCP_Foundry", external: true },
      { label: "Demo", href: "https://youtu.be/vRT6zaGCySg", external: true },
    ],
    caseStudyHref: "#case-study-mcp-foundry",
  },
  {
    slug: "strivo",
    index: "03",
    name: "Strivo",
    year: "10/2025 – Present",
    current: true,
    descriptor: "Multi-tenant gym SaaS: bookings, biometric check-in, health scoring, GST invoicing.",
    summary: "Slot scheduling, recurring series, waitlists, biometric check-in, and refunds all touch the same state, so the booking platform is built for correctness under concurrent writes. A nightly health-scoring pipeline with alert tiers replaced a manual weekly review; MongoDB change streams broadcast realtime updates, and third-party integrations sit behind retry logic.",
    stack: ["Angular", "Java 21", "Micronaut", "MongoDB", "Change Streams"],
    spec: ["100+ gyms", "60+ tenants"],
    links: [],
    caseStudyHref: "#case-study-strivo",
  },
  {
    slug: "open-agent",
    index: "04",
    name: "Open Agent",
    year: "AI PLATFORM",
    descriptor: "Multi-tenant chatbots across 25 LLMs, with tool calling, per-project RAG, and server-enforced token budgets.",
    summary: "Each project gets its own system prompt and knowledge base. The server owns access control and token accounting, responses stream over SSE, and a bounded tool-calling loop covers calculator, RAG document search, and web search with automatic provider fallback. pgvector retrieval is scoped per project, so tenants never see each other's documents.",
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
    spec: ["25 LLMs", "provider fallback", "token-budget metering"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/agent-platform", external: true },
      { label: "Live", href: "https://agent-platform-popb.onrender.com/", external: true },
    ],
    caseStudyHref: "#case-study-open-agent",
  },
  {
    slug: "autoace",
    index: "05",
    name: "AutoAce",
    year: "2026",
    descriptor: "Call-audio classifier at 85% accuracy under a hard $0.003/minute cost ceiling.",
    summary: "Nine fields — tone, noise type and severity, quality, overlap, silence — classified by a hybrid DSP + LLM pipeline that measures under $0.001/min at 85% field-match accuracy against 55% for DSP alone. Swapping torch-based VAD for an ONNX runtime cut peak server memory from 830MB to 85MB. A login-gated dashboard handles batch ZIP upload, cost tracking, and CSV/JSON export.",
    stack: ["Python", "Groq (Whisper + LLM)", "librosa", "Silero VAD (ONNX)", "FastAPI", "React"],
    spec: ["< $0.001/min vs $0.003 ceiling", "85% vs 55%", "830MB → 85MB", "9 fields"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/autoace-voice-tone-classifier",
        external: true,
      },
    ],
  },
  {
    slug: "opencode-terminal",
    index: "06",
    name: "opencode-terminal",
    year: "Sep 2026",
    descriptor: "An OpenCode plugin for real terminals and persistent process control.",
    summary: "Agent shells run a command and wait; development needs persistent servers, REPLs, and TTY programs. Nine tools open native terminal windows, auto-detect the project's run command across 15+ stacks, and manage background sessions — start, poll logs, send input, kill the whole process tree. Closing a window stops its process, so nothing orphans ports. Published to npm under MIT.",
    stack: ["TypeScript", "Node", "Bun", "OpenCode Plugins", "macOS", "Windows", "Linux"],
    spec: ["9 tools", "auto-detect 15+ stacks", "tree-kill cleanup", "npm published"],
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/terminal-", external: true },
      { label: "npm", href: "https://www.npmjs.com/package/opencode-terminal", external: true },
    ],
  },
];

export const experience = {
  role: "Full Stack Developer",
  org: "Eazytag",
  platform: "Strivo SaaS Platform",
  dates: "10/2025 – Present",
  location: "Bengaluru, India",
  current: true,
  framing: "Full-stack features across Angular, Java 21 with Micronaut, and MongoDB — with weekly on-call alongside client engineering teams.",
  bullets: [
    "Shipped full-stack features (Angular, Java 21, Micronaut, MongoDB change streams) for 100+ gyms and 60+ tenants.",
    "Engineered the class booking platform for correctness under concurrent writes: waitlists, biometric check-in, refund lifecycle.",
    "Automated manual weekly reviews into a nightly health-scoring pipeline with alert tiers; third-party integrations run behind retry logic.",
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
};

export const openSource: OpenSourceEntry[] = [
  {
    name: "Eclipse JKube",
    org: "Eclipse Foundation",
    period: "05/2024 – 03/2025",
    description:
      "Contributed across 15+ modules of Eclipse's Kubernetes tooling for Java, with PRs reviewed by Principal Engineer Marc Nuri.",
    meta: "ECLIPSE FOUNDATION · 05/2024 – 03/2025 · 15+ MODULES · TDD · −60% FLAKY CI · +30% DELIVERY",
    links: [{ label: "GitHub", href: "https://github.com/eclipse-jkube/jkube", external: true }],
  },
  {
    name: "OpenMetadata",
    description:
      "Implemented frontend search for the Roles entity (PR #27602) using Ant Design typeahead; investigated Greenplum and Databricks lineage issues.",
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
      "A Jira Forge plugin surfacing real-time CI/CD pipeline status inside Jira issues, built for the Atlassian ForgeQuest Hackathon.",
    meta: "ATLASSIAN FORGE · REAL-TIME CI/CD IN JIRA · FORGEQUEST HACKATHON",
    links: [],
  },
  {
    name: "supabase-lingo",
    description:
      "Published an npm package for a real-time, PostgreSQL event-driven translation pipeline, built for the Lingo.dev Hackathon.",
    meta: "NPM PACKAGE · POSTGRESQL EVENT-DRIVEN PIPELINE · LINGO.DEV HACKATHON",
    links: [
      { label: "npm", href: "https://www.npmjs.com/package/supabase-lingo", external: true },
      { label: "Demo", href: "https://youtu.be/03hsGuhBdzQ", external: true },
    ],
  },
];

export const contact = {
  closing:
    "I build production systems and take the on-call for them. If that's useful to you, email is the fastest route.",
  colophon: "Shivam Chavan · Full Stack Engineer · Bengaluru, India · 2026",
  buildNote: "NEXT.JS + TAILWIND · NO TRACKING",
} as const;
