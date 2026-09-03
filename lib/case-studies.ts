/**
 * Case study deep-dive copy — verbatim from docs/CONTENT_STRATEGY.md §6.
 * Consumed by components/case-studies.tsx (Agent E).
 */

export type CaseStudySection = {
  label: "CONTEXT" | "ARCHITECTURE" | "ENGINEERING CHALLENGE" | "DECISIONS" | "RESULT";
  body: string;
};

export type CaseStudy = {
  slug: string;
  /** Stable anchor id, e.g. #case-study-strivo */
  anchor: string;
  project: string;
  teaser: string;
  stack: string;
  year: string;
  heroMetric: string;
  links: { label: string; href: string }[];
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "voicescope",
    anchor: "case-study-voicescope",
    project: "VoiceScope",
    teaser:
      "How a voice AI observability platform ingests six platforms' webhooks safely, and measures its own judge.",
    stack: "Python · FastAPI · OpenAI · Anthropic · Gemini · Groq · Mistral · Whisper · ChromaDB · Railway",
    year: "Jun – Jul 2026",
    heroMetric: "300+ tests",
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/voiceScope" },
      { label: "Live", href: "https://voice-scope.vercel.app/" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "Voice AI agents deployed on platforms like Vapi, Retell, Bland, Bolna, Synthflow, and Air.ai report back through webhooks. When an agent hallucinates an answer or returns malformed output, someone has to notice, ideally before the next call. VoiceScope is my open source answer: an observability and regression-testing platform for voice AI agents. It was built to make that noticing systematic rather than manual.",
      },
      {
        label: "ARCHITECTURE",
        body: "A three-stage agentic pipeline does the core work: Whisper transcription, then LLM-based analysis with RAG context retrieval, then structured report generation. ChromaDB provides the vector store for RAG; FastAPI serves the platform in Python. A 7-layer validation harness sits over the pipeline, catching hallucinations and schema violations. The harness is itself measured: a feedback loop benchmarks harness accuracy and auto-tunes its weights each run. Multi-LLM support spans OpenAI, Anthropic, Gemini, Groq, and Mistral, with results streaming to the UI over SSE. CI/CD runs on GitHub Actions; the stack deploys on Railway.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "Ingesting webhooks from six external platforms means ingesting attack surface, so the integration layer carries SSRF protection as a first-class requirement. A validation harness that judges other systems must itself be trustworthy, which is why harness accuracy is benchmarked and auto-tuned rather than assumed. Supporting five LLM providers means the analysis layer has to stay provider-agnostic without quality drifting per vendor. And a regression-testing platform claiming 300+ passing tests needs CI that actually runs them on every push.",
      },
      {
        label: "DECISIONS",
        body: "Validate first, trust later: every webhook passes SSRF-protected ingest before analysis. Measure the judge: the harness auto-tunes its weights from each run's benchmark instead of being hand-tuned once. Retrieve before judging: RAG context via ChromaDB grounds the LLM analysis in retrieved call context instead of model priors. Stay vendor-neutral: analysis runs across OpenAI, Anthropic, Gemini, Groq, and Mistral. Ship tests with the platform: 300+ tests gate the build in GitHub Actions.",
      },
      {
        label: "RESULT",
        body: "VoiceScope is open source, live, and integrated with six voice AI platforms. 300+ tests pass in CI. The platform transcribes, analyzes, and reports on voice agent calls with a 7-layer harness that catches hallucinations and schema violations, and re-tunes itself each run. Streaming SSE keeps reports live in the browser.",
      },
    ],
  },
  {
    slug: "mcp-foundry",
    anchor: "case-study-mcp-foundry",
    project: "MCP Foundry",
    teaser:
      "A generator that refuses to ship untested tools: eval, repair, re-test, then register.",
    stack: "Python · FastAPI · OpenAPI · Codex/GPT-5.6 · Prism · FastMCP",
    year: "Jul 2026",
    heroMetric: "up to 3 repair rounds",
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/MCP_Foundry" },
      { label: "Demo", href: "https://youtu.be/vRT6zaGCySg" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "MCP servers give coding agents new tools, and OpenAPI specs describe existing APIs. Bridging the two by hand is slow; generating blindly is worse, because a generated tool with an ambiguous description or broken behavior fails at agent runtime. MCP Foundry, built during the OpenAI Build Week Hackathon in July 2026, is a self-verifying OpenAPI-to-MCP server generator. Nothing it produces ships untested.",
      },
      {
        label: "ARCHITECTURE",
        body: "The generator parses any OpenAPI spec and produces MCP server tooling. An LLM pass rewrites ambiguous tool descriptions before anything is evaluated. Evaluation runs every generated tool against a live agent on an isolated Prism mock; no generated tool is ever exercised against a real service. Failing tools enter an auto-repair loop: repair, re-test, repeat, for up to 3 rounds against four prompt classes: direct, rephrased, edge-case, and adversarial. Tools that survive are registered into Codex's MCP config with a transparent pass/fail scorecard. The stack is Python, FastAPI, OpenAPI, Codex/GPT-5.6, Prism, and FastMCP.",
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
        body: "MCP Foundry works end to end: spec in, verified MCP server out, scorecard attached. Every generated tool is evaluated against a live agent across direct, rephrased, edge-case, and adversarial prompts before it can register. Built and demoed during OpenAI Build Week; the demo is public on YouTube.",
      },
    ],
  },
  {
    slug: "strivo",
    anchor: "case-study-strivo",
    project: "Strivo",
    teaser:
      "Booking correctness under concurrent writes on a multi-tenant SaaS running 50+ gyms, with the tests to prove it.",
    stack: "Angular · Java 21 · Micronaut · MongoDB · Change Streams",
    year: "10/2025 – Present",
    heroMetric: "1,400+ tests",
    links: [],
    sections: [
      {
        label: "CONTEXT",
        body: "Strivo is Eazytag's multi-tenant SaaS platform for gyms, running across 50+ gyms and 10+ tenants. Two problems dominate the domain. Class booking is concurrency-heavy: slot scheduling, recurring series, waitlist promotion, biometric check-in, and a full session deduction/refund lifecycle all touch the same state. And gym operators were running a manual weekly review to understand facility health. I joined as Full Stack Developer in October 2025 and own features across the entire stack.",
      },
      {
        label: "ARCHITECTURE",
        body: "Angular on the frontend; Java 21 and Micronaut behind it; MongoDB as the data layer; MongoDB Change Streams broadcasting real-time updates across instances. The consolidated health scoring engine with alert tiers runs as a nightly pipeline, replacing the manual weekly review. Third-party APIs (WhatsApp, PDF, GST invoicing) sit behind integration layers with retry logic.",
      },
      {
        label: "ENGINEERING CHALLENGE",
        body: "Concurrent writes are the core difficulty: two members booking the last slot, a waitlist promoting while someone checks in biometrically, a refund racing a session deduction. The design had to be correct under that load, and the proof had to be executable: 1,400+ passing tests. External APIs fail on their own schedule, so retry logic has to absorb their failures while the platform itself holds 99%+ uptime. And operator intuition about gym health had to be translated into a scoring engine with alert tiers precise enough to act on nightly.",
      },
      {
        label: "DECISIONS",
        body: "Treat tests as the specification: correctness under concurrent writes is enforced by 1,400+ passing tests, not by hope. Automate the review: the manual weekly process became a nightly health-scoring pipeline, cutting reporting overhead and incidents by 40% each. Put retries at the third-party boundary so WhatsApp, PDF, and GST invoicing failures don't surface as platform incidents. Use MongoDB Change Streams to broadcast updates across instances without adding a separate message broker.",
      },
      {
        label: "RESULT",
        body: "Production code across 50+ gyms and 10+ tenants. 1,400+ tests passing on the booking platform; 99%+ uptime maintained alongside third-party integrations. Reporting overhead and incidents each down 40% after the health scoring engine replaced the manual weekly review. And weekly on-call with client engineering teams: leading product demos, resolving production issues in real time, as the technical point of contact between product and customer.",
      },
    ],
  },
  {
    slug: "open-agent",
    anchor: "case-study-open-agent",
    project: "Open Agent",
    teaser:
      "A multi-tenant chatbot platform with provider fallback, grounded tools, and server-enforced usage limits.",
    stack: "Python · FastAPI · SQLAlchemy · PostgreSQL · pgvector · React · TypeScript · Docker",
    year: "AI PLATFORM",
    heroMetric: "120+ tests",
    links: [
      { label: "GitHub", href: "https://github.com/ShivamChavan01/agent-platform" },
      { label: "Live", href: "https://agent-platform-popb.onrender.com" },
    ],
    sections: [
      {
        label: "CONTEXT",
        body: "Open Agent is a multi-tenant chatbot platform built around a practical question: how do you let different projects use capable language models without losing control of prompts, tools, data, or spend? Each project has its own system prompt and knowledge base. The platform supports 25 LLMs, calculator and search tools, document-grounded answers, live streaming, and rolling session and weekly token budgets.",
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
        body: "Keep provider integration behind one interface so the same conversation can fall back across models when a provider is unavailable. Scope RAG retrieval by project so one tenant's documents cannot appear in another tenant's answer. Use SSE for incremental output because chat is unidirectional from server to browser and does not need a heavier WebSocket protocol. Keep the tool loop and usage limits on the server, where they can be validated and enforced consistently.",
      },
      {
        label: "RESULT",
        body: "Open Agent works end to end as a multi-tenant AI platform: projects, conversations, JWT authentication, pgvector-backed RAG, calculator/document/web tools, provider fallback, SSE token streaming, and rolling token-budget metering. More than 120 tests cover the application, and the project is available as both a public repository and a live deployment.",
      },
    ],
  },
];
