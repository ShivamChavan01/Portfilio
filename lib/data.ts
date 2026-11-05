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
  resume:
    "https://drive.google.com/file/d/1Urq06xCQivEwkBLXqahpKLpPQHH0oW7O/view?usp=sharing",
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
    { index: "01", label: "work", href: "#experience" },
    { index: "02", label: "projects", href: "#work" },
    { index: "03", label: "notes", href: "#case-studies" },
    { index: "04", label: "open source", href: "#open-source" },
    { index: "05", label: "contact", href: "#contact" },
  ],
  mobile: [0, 1],
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
  experience:
    "One role, one platform. Features owned end to end, on-call included.",
  openSource:
    "Contributions to other people's codebases: merged PRs in Eclipse JKube, submitted work in OpenMetadata, plus Atlassian and npm.",
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
  highlights?: { label: string; detail: string }[];
  links: SiteLink[];
  /** In-page case study anchor (no external link exists in FACTS). */
  caseStudyHref?: string;
  current?: boolean;
};

export const work: WorkEntry[] = [
  {
    slug: "cutroom",
    index: "00",
    name: "Cutroom",
    year: "2026",
    descriptor:
      "Browser video editing with alternate versions, diffs, and merge review.",
    summary:
      "A browser video-editor prototype with versioned timelines, three-way merges, explicit conflict resolution, and structural checks. Local edits restore through IndexedDB and OPFS. Exports are timeline interchange files, not rendered video; live collaboration is not implemented.",
    stack: ["TypeScript", "React", "IndexedDB", "OPFS"],
    spec: [
      "Three-way timeline merge",
      "Explicit conflict review",
      "Local persistence",
    ],
    links: [
      {
        label: "Try the editor",
        href: "https://cutroom-editor.vercel.app/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/cutroom",
        external: true,
      },
    ],
    caseStudyHref: "#case-study-cutroom",
  },
  {
    slug: "voicescope",
    index: "01",
    name: "VoiceScope",
    year: "Jun – Jul 2026",
    descriptor: "Voice AI call analysis grounded in transcripts and policies.",
    summary:
      "Voice agents fail in the field and their operators rarely see why. VoiceScope ingests call webhooks from six voice AI platforms through a pipeline with Deepgram, Gemini, or Whisper transcription, LLM analysis grounded in a knowledge base, structured reporting, and deterministic validation. The benchmark uses a small labeled dataset; its results are not a guarantee of accuracy on new calls.",
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
    spec: [
      "6 platform integrations",
      "SSRF protection",
      "Deterministic validation",
      "KB-grounded hallucination detection",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/voiceScope",
        external: true,
      },
      {
        label: "Live",
        href: "https://voice-scope.vercel.app/runs",
        external: true,
      },
    ],
    caseStudyHref: "#case-study-voicescope",
  },
  {
    slug: "mcp-foundry",
    index: "02",
    name: "MCP Foundry",
    year: "Jul 2026",
    descriptor:
      "Generate MCP tools from API specs, then evaluate and repair them.",
    summary:
      "A generated tool with a vague description fails at agent runtime. MCP Foundry rewrites ambiguous descriptions with an LLM, evaluates each tool against a live agent on an isolated Prism mock, and auto-repairs failures for up to 3 rounds across direct, rephrased, edge-case, and adversarial prompts. Survivors register into Codex's MCP config with a pass/fail scorecard. Built at the OpenAI Build Week Hackathon.",
    stack: [
      "Python",
      "FastAPI",
      "OpenAPI",
      "provider adapters",
      "Prism",
      "FastMCP",
    ],
    spec: [
      "up to 3 repair rounds",
      "4 prompt classes",
      "live-agent evals",
      "pass/fail scorecard",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/MCP_Foundry",
        external: true,
      },
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
    descriptor:
      "Multi-tenant gym SaaS: bookings, biometric check-in, health scoring, GST invoicing.",
    summary:
      "Slot scheduling, recurring series, waitlists, biometric check-in, and refunds all touch the same state, so the booking platform is built for correctness under concurrent writes. A nightly health-scoring pipeline with alert tiers replaced a manual weekly review; MongoDB change streams broadcast realtime updates, and third-party integrations sit behind retry logic.",
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
    descriptor:
      "Project-specific AI assistants with document search, tools, and configurable model providers.",
    summary:
      "Built the React chat interface and FastAPI backend around project-specific prompts, conversations, and knowledge bases. Document retrieval uses pgvector, and assistants can call calculator, document-search, and web-search tools. Responses and tool updates stream over SSE; provider fallback handles unavailable models.",
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
    spec: ["multi-model interface", "provider fallback", "token-budget metering"],
    highlights: [
      { label: "Project boundaries", detail: "Server-side ownership checks and project-scoped document retrieval." },
      { label: "Controlled tool use", detail: "A bounded execution loop keeps model-driven tool calls from running indefinitely." },
      { label: "Usage controls", detail: "Configurable session and weekly token budgets, with server-side usage metering." },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/agent-platform",
        external: true,
      },
      {
        label: "Live",
        href: "https://agent-platform-popb.onrender.com/",
        external: true,
      },
    ],
    caseStudyHref: "#case-study-open-agent",
  },
  {
    slug: "autoace",
    index: "05",
    name: "AutoAce",
    year: "2026",
    descriptor:
      "Hybrid DSP and LLM call-audio classification with calibration and cost reporting.",
    summary:
      "Nine fields — tone, noise type and severity, quality, overlap, silence — classified by a hybrid DSP + LLM pipeline that measures under $0.001/min at 85% field-match accuracy against 56% for DSP alone. A login-gated dashboard handles batch ZIP upload, cost tracking, and CSV/JSON export. The accuracy figure is a calibration measurement over three labeled calls.",
    stack: [
      "Python",
      "Groq (Whisper + LLM)",
      "librosa",
      "Silero VAD (ONNX)",
      "FastAPI",
      "React",
    ],
    spec: [
      "< $0.001/min vs $0.003 ceiling",
      "85% vs 56% on 3 calibration calls",
      "9 fields",
    ],
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
    descriptor:
      "An OpenCode plugin for real terminals and persistent process control.",
    summary:
      "Agent shells run a command and wait; development needs persistent servers, REPLs, and TTY programs. Nine tools open native terminal windows, auto-detect the project's run command across 15+ stacks, and manage background sessions — start, poll logs, send input, kill the whole process tree. Process cleanup is best-effort and depends on the operating system and terminal setup. Published to npm under MIT.",
    stack: [
      "TypeScript",
      "Node",
      "Bun",
      "OpenCode Plugins",
      "macOS",
      "Windows",
      "Linux",
    ],
    spec: [
      "9 tools",
      "auto-detect 15+ stacks",
      "tree-kill cleanup",
      "npm published",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/opencode-terminal",
        external: true,
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/opencode-terminal",
        external: true,
      },
    ],
  },
  {
    slug: "voicecli",
    index: "07",
    name: "voicecli",
    year: "Jun 2026",
    descriptor:
      "An offline push-to-talk voice layer for terminal coding agents.",
    summary:
      "Terminal agents are read, not heard. voicecli holds Ctrl+Space to record, transcribes locally with faster-whisper, and types the text into whichever CLI has focus. A background watcher tails each agent's session store — Claude Code and Codex CLI JSONL, OpenCode's SQLite database — and speaks new assistant messages back through Piper TTS. The core loop runs locally after model setup, using a supported desktop environment, with no cloud STT key.",
    stack: ["Python", "faster-whisper", "xdotool", "Piper TTS", "SQLite"],
    spec: [
      "fully offline",
      "Ctrl+Space push-to-talk",
      "watches Claude Code, OpenCode, Codex CLI",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ShivamChavan01/voicecli",
        external: true,
      },
      { label: "Demo", href: "https://youtu.be/fVV5UPiRxZI", external: true },
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
  framing:
    "Full-stack features across Angular, Java 21 with Micronaut, and MongoDB — with weekly on-call alongside client engineering teams.",
  bullets: [
    "Shipped full-stack features (Angular, Java 21, Micronaut, MongoDB change streams) for 100+ gyms and 60+ tenants.",
    "Engineered the class booking platform for correctness under concurrent writes: waitlists, biometric check-in, refund lifecycle.",
    "Fixed a money-pipeline bug where transfer, freeze, and settlement fees never reached collection reports; added a payment-category model and dual-writes so fees surface in reporting.",
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
    period: "07/2024 – 11/2024",
    description:
      "18 merged PRs in Eclipse JKube were returned by GitHub’s authored-PR search on 4 November 2026, including AssertJ and Mockito test modernization.",
    meta: "ECLIPSE FOUNDATION · 07/2024 – 11/2024 · 18 MERGED PRS CHECKED 2026-11-04 · ASSERTJ + MOCKITO",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/eclipse-jkube/jkube",
        external: true,
      },
    ],
  },
  {
    name: "OpenMetadata",
    description:
      "Submitted frontend Roles search (PR #27602), Greenplum DDL extraction (#27445), and Databricks lineage (#27648). All three PRs were closed and unmerged when checked on 4 November 2026.",
    meta: "PR #27602 · ANT DESIGN TYPEAHEAD · ROLES ENTITY SEARCH · GREENPLUM DDL + DATABRICKS LINEAGE",
    links: [
      {
        label: "PR #27602",
        href: "https://github.com/open-metadata/OpenMetadata/pull/27602",
        external: true,
      },
      {
        label: "Organization",
        href: "https://github.com/open-metadata",
        external: true,
      },
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
      {
        label: "npm",
        href: "https://www.npmjs.com/package/supabase-lingo",
        external: true,
      },
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
