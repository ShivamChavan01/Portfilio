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
    "slug": "cutroom",
    "focus": "Evidence-grounded editing",
    "decision": "Show the evidence behind an edit, preview its effect, and reject proposals that worsen required brief constraints.",
    "flow": [
      {
        "label": "Ground",
        "detail": "Brief + authored source notes"
      },
      {
        "label": "Propose",
        "detail": "Bounded evidence + preview"
      },
      {
        "label": "Validate",
        "detail": "Source, duration & ordering"
      },
      {
        "label": "Review",
        "detail": "Explicit Apply / Undo"
      }
    ],
    "anchor": "case-study-cutroom",
    "project": "Cutroom",
    "teaser": "Versioned editing, bounded Assistant proposals, and a local-first playback workflow.",
    "stack": "TypeScript · React · IndexedDB · OPFS",
    "year": "2026",
    "heroMetric": "Reviewed editing decisions",
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/ShivamChavan01/cutroom"
      },
      {
        "label": "Try the editor",
        "href": "https://cutroom-editor.vercel.app/"
      }
    ],
    "sections": [
      {
        "label": "CONTEXT",
        "body": "Cutroom explores alternate editing decisions with a shared timeline ancestor. The November release also brings the editing brief and authored source evidence into the review process."
      },
      {
        "label": "ARCHITECTURE",
        "body": "A pure TypeScript engine records undoable timeline operations and compares branches against a common ancestor. Bounded lexical and source-time retrieval connects a saved brief to authored timestamped notes. Required duration, source coverage, and ordering checks gate proposed edits. IndexedDB transactions reject stale-tab overwrites while OPFS keeps source media local."
      },
      {
        "label": "DECISIONS",
        "body": "Merge conflicts require explicit choices. Assistant requests expose the evidence included and omitted, and edits are previewed before Apply. Three eligible manual gain edits can support a session-local suggestion on another clip. Synchronized buffering and separate full-resolution source editing copies preserve the original timeline references."
      },
      {
        "label": "RESULT",
        "body": "The November release is on main with successful CI and deployment statuses, and the public editor bundle contains the new UI. It remains a browser-editor prototype. Timeline exports use OTIO, FCPXML, EDL, or native JSON. Rendered-sequence export and live collaboration are not implemented. This audit did not rerun live Assistant generation or interactive editing."
      }
    ]
  },
  {
    "slug": "voicescope",
    "focus": "Evidence-first voice observability",
    "decision": "Link findings to call evidence, retain applied policy versions, and withhold STT rates when the reference or alignment is insufficient.",
    "flow": [
      {
        "label": "Ingest",
        "detail": "Attributed text or recording"
      },
      {
        "label": "Assess",
        "detail": "Versioned rules + analysis"
      },
      {
        "label": "Inspect",
        "detail": "Quotes, audio & STT reference"
      },
      {
        "label": "Review",
        "detail": "Explicit evidence states"
      }
    ],
    "anchor": "case-study-voicescope",
    "project": "VoiceScope",
    "teaser": "Review voice-agent calls through source quotes, original audio, policy evidence, and STT diagnostics.",
    "stack": "Python · FastAPI · Next.js · TypeScript · SQLite · FastEmbed · Deepgram · PostgreSQL",
    "year": "2026 · development branch",
    "heroMetric": "Evidence-linked call review",
    "links": [
      {
        "label": "GitHub",
        "href": "https://github.com/ShivamChavan01/voiceScope"
      },
      {
        "label": "Live",
        "href": "https://voice-scope.vercel.app/runs"
      },
      {
        "label": "Latest code",
        "href": "https://github.com/ShivamChavan01/voiceScope/tree/feat/voicescope-reliability-stt-demo"
      }
    ],
    "sections": [
      {
        "label": "CONTEXT",
        "body": "VoiceScope is voice AI observability focused on post-call inspection. Operators review policy findings, attributed transcripts, original audio, STT diagnostics, and evaluator-output checks in one Calls interface."
      },
      {
        "label": "ARCHITECTURE",
        "body": "FastAPI accepts audio, attributed text, and completed-call webhooks. The pipeline combines speaker attribution, configured policy checks, retrieved context, model analysis, and structured reporting. The latest pushed branch uses local FastEmbed/SQLite indexes with explicit index migration and per-store snapshots. Its Next.js interface links exact-quote findings back to transcript turns."
      },
      {
        "label": "ENGINEERING CHALLENGE",
        "body": "Uncertainty must survive the pipeline. Inferred speakers retain their provenance. Refund-completion claims need action evidence. Separate STT comparison distinguishes human-verified references from automatically generated references, and missing timing or alignment can withhold a rate."
      },
      {
        "label": "DECISIONS",
        "body": "Keep immutable applied policy snapshots and quoted evidence for the supported refund-guarantee and escalation checks. Persist Bolna ingestion receipts and fail visibly when configured storage is unavailable. Automatic STT comparisons are labeled as estimated transcript disagreement. Synthetic demo scenarios are kept separate from real calls and aggregate metrics."
      },
      {
        "label": "RESULT",
        "body": "The latest work is pushed on feat/voicescope-reliability-stt-demo at f661ef0, with seven successful CI jobs checked on 21 November 2026. It is a development candidate. The default main branch and current Vercel production deployment remain on the older baseline. The public frontend still presents the earlier Runs interface."
      }
    ]
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
    "slug": "strivo",
    "focus": "Full-stack operational workflows",
    "decision": "Keep tenant scope and membership invariants on the server, and make reporting and staff actions traceable.",
    "flow": [
      {
        "label": "Interface",
        "detail": "Angular workflows"
      },
      {
        "label": "Backend",
        "detail": "Java / Micronaut"
      },
      {
        "label": "Persist",
        "detail": "Tenant-scoped MongoDB"
      },
      {
        "label": "Broadcast",
        "detail": "Change Streams"
      }
    ],
    "anchor": "case-study-strivo",
    "project": "Strivo",
    "teaser": "Recent contributions across finance reporting, staff operations, biometric alerts, and membership integrity.",
    "stack": "Angular · Java 21 · Micronaut · MongoDB · Change Streams",
    "year": "10/2025 – Present",
    "heroMetric": "Merged full-stack contributions",
    "links": [],
    "sections": [
      {
        "label": "CONTEXT",
        "body": "Strivo is the multi-tenant gym SaaS platform I work on at Eazytag. Recent work crosses finance reporting, staff follow-ups, biometric device visibility, and membership lifecycle behavior."
      },
      {
        "label": "ARCHITECTURE",
        "body": "Angular interfaces connect native follow-up queues, Finance drilldowns, and staff-activity views to Java 21/Micronaut services and MongoDB. Server-side tenant scope protects product search and booking history, while waitlist admission and membership transitions retain shared invariants."
      },
      {
        "label": "ENGINEERING CHALLENGE",
        "body": "Reports must reconcile category totals with their drilldowns, device alerts must distinguish connectivity states, and upgrades and transfers must preserve usage, approval, refund, and sales-attribution rules across existing data."
      },
      {
        "label": "DECISIONS",
        "body": "Use native operational lists for dashboard follow-ups, explicit access attribution for staff reporting, gym-scoped database queries, and regression coverage for concurrent waitlist admission and legacy membership state. The work includes shared review contributions; the audit traces Shivam-authored commits within those PRs."
      },
      {
        "label": "RESULT",
        "body": "A November source audit verified authored commits in merged development-branch PRs for reporting, staff activity, biometric alerts, tenant isolation, and membership fixes. Production deployment and customer-impact metrics were not independently verified. Weekly on-call remains supplied employment context."
      }
    ]
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
