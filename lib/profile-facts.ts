/** Reviewed answer statements. Update evidence and review date when changing a claim. */
export type FactEvidence = {
  basis: "code" | "repository" | "public-record" | "profile";
  title: string;
  href: string;
  reviewedAt: string;
};
export type ProfileFact = {
  id: string;
  topic: string;
  title: string;
  keywords: string;
  text: string;
  evidence: [FactEvidence, ...FactEvidence[]];
};

export const approvedFacts: readonly ProfileFact[] = [
  {
    "id": "profile.identity",
    "topic": "profile",
    "title": "About Shivam",
    "keywords": "about bio who shivam chavan engineer bengaluru location",
    "text": "Shivam Chavan's portfolio lists him as a Full Stack Engineer based in Bengaluru, India.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Portfolio profile",
        "href": "#hero-heading",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "profile.contact",
    "topic": "profile",
    "title": "Contact",
    "keywords": "contact email reach linkedin github resume cv",
    "text": "His published contact email is shivamrc189@gmail.com. His portfolio links to GitHub, LinkedIn, and a résumé.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Published contact details",
        "href": "#contact",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "profile.education",
    "topic": "profile",
    "title": "Education",
    "keywords": "education degree college university biet davangere electronics communication cgpa",
    "text": "His supplied résumé lists a B.E. in Electronics and Communication at BIET, Davangere, from August 2020 to June 2023, with a CGPA of 7.5. This is a profile-provided qualification.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Résumé details in portfolio",
        "href": "#contact",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "profile.skills",
    "topic": "profile",
    "title": "Technical stack",
    "keywords": "skills stack technologies languages python typescript java angular react fastapi micronaut mongodb postgres programming",
    "text": "Reviewed project sources cover TypeScript/React, Python/FastAPI, PostgreSQL/pgvector, and local SQLite/FastEmbed retrieval. His employment contributions use Angular, Java 21/Micronaut, and MongoDB.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/docs/semantic-retrieval.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Reviewed employment and local project scope",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "projects.overview",
    "topic": "projects",
    "title": "Project directory",
    "keywords": "projects portfolio built build developed work software",
    "text": "His portfolio includes Cutroom, Open Agent, VoiceScope, MCP Foundry, AutoAce, opencode-terminal, voicecli, and Strivo. Cutroom has a verified November deployment; VoiceScope’s newest reviewed work is on a pushed development branch.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Current portfolio project directory",
        "href": "#work",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "experience.role",
    "topic": "experience",
    "title": "Eazytag / Strivo",
    "keywords": "job work career employer company employment eazytag strivo experience",
    "text": "According to his supplied résumé, Shivam has worked as a Full Stack Developer at Eazytag on Strivo since October 2025, using Angular, Java 21, Micronaut, and MongoDB.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Employment details supplied by Shivam",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "experience.scope",
    "topic": "experience",
    "title": "Strivo responsibilities",
    "keywords": "eazytag strivo bookings membership payments gyms tenants oncall responsibility production",
    "text": "His weekly on-call employment context is profile-provided. A November private-repository audit verified authored commits in merged development-branch PRs for Finance drilldowns, staff activity and access attribution, biometric notifications, tenant isolation, and membership integrity. Production deployment and scale/impact metrics were not independently verified.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Private employment contribution audit",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.overview",
    "topic": "cutroom",
    "title": "Cutroom",
    "keywords": "cutroom video editor editing timeline version versions merge",
    "text": "A browser-editor prototype with alternate cuts, three-way timeline merges, and explicit conflict review. The November release adds brief-grounded Assistant proposals, local gain-match suggestions, synchronized multitrack playback, and full-resolution source editing copies. IndexedDB and OPFS restore local work with stale-tab overwrite protection. Timeline delivery uses interchange files. Rendered-sequence export and live collaboration remain unimplemented.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/docs/editor-guide.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.limits",
    "topic": "cutroom",
    "title": "Cutroom export limits",
    "keywords": "cutroom export mp4 render otio fcpxml edl json collaboration limitations",
    "text": "Cutroom is a browser-editor prototype. It exports OTIO, FCPXML, EDL, and native JSON. A full-resolution MP4 editing copy can be prepared for a single source. Rendered edited-sequence export, live collaboration, and full mobile editing remain unimplemented or unsupported. Live Assistant quality was not tested in the November audit.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/docs/editor-guide.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.storage",
    "topic": "cutroom",
    "title": "Cutroom local storage",
    "keywords": "cutroom storage persistence indexeddb opfs local sample restore",
    "text": "Cutroom stores acknowledged project state in IndexedDB and source media in OPFS. Transactional snapshot comparison rejects stale-tab overwrites. Browser quota, origin/device scope, eviction, and save acknowledgment remain important limits; this local persistence does not establish cloud backup or collaboration.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/apps/web/src/lib/persistence/storage.ts",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "open-agent.overview",
    "topic": "open-agent",
    "title": "Open Agent",
    "keywords": "openagent open agent platform ai chatbot projects react fastapi llm models",
    "text": "Open Agent's repository describes a React and FastAPI chatbot platform with project-specific prompts, conversations, document search, model configuration, and streamed responses.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "open-agent.isolation",
    "topic": "open-agent",
    "title": "Open Agent project boundaries",
    "keywords": "openagent open agent tenant isolation access ownership project security rag documents pgvector",
    "text": "The reviewed Open Agent source filters retrieved file chunks by project ID and checks project ownership on the server. These code checks support project separation; they are not a guarantee of complete tenant security.",
    "evidence": [
      {
        "basis": "code",
        "title": "agent-platform · rag.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/rag.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · projects.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/routers/projects.py",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "open-agent.tools",
    "topic": "open-agent",
    "title": "Open Agent tool limits",
    "keywords": "openagent open agent tools tool calling calculator web search bounded loop",
    "text": "Open Agent's tool layer defines a maximum of four tool-calling turns and includes calculator and project-document search tools. Its documented web search requires a configured Tavily API key.",
    "evidence": [
      {
        "basis": "code",
        "title": "agent-platform · tools.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/tools.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "open-agent.budgets",
    "topic": "open-agent",
    "title": "Open Agent usage controls",
    "keywords": "openagent open agent tokens budgets metering session weekly usage limits",
    "text": "Open Agent's reviewed services calculate session and weekly usage windows. Budget enforcement is configuration-dependent; a disabled or non-positive cap is not an enforced limit.",
    "evidence": [
      {
        "basis": "code",
        "title": "agent-platform · services.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/services.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · conversations.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/routers/conversations.py",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "open-agent.fallback",
    "topic": "open-agent",
    "title": "Open Agent provider fallback",
    "keywords": "openagent open agent llm models provider fallback stream sse",
    "text": "Open Agent's reviewed provider adapter supports a configured fallback when the primary fails before yielding output. Its README's historical list of 25 models does not establish their current availability.",
    "evidence": [
      {
        "basis": "code",
        "title": "agent-platform · llm.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/llm.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "voicescope.overview",
    "topic": "voicescope",
    "title": "VoiceScope",
    "keywords": "voicescope voice scope ai calls audio transcription analysis observability platform rag",
    "text": "Voice AI observability for post-call inspection using transcripts, original audio, policy findings, and evaluator checks. The latest pushed development branch adds quote-linked Calls review, versioned refund and escalation checks, STT reference comparison, persistent Bolna ingestion receipts, and SQLite/FastEmbed retrieval. Its CI passes, while the public demo still runs the older main baseline. Automatic STT comparisons are labeled as transcript disagreement, and uncertain findings remain reviewable.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/pipeline.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/frontend/src/components/call-review.tsx",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.validation",
    "topic": "voicescope",
    "title": "VoiceScope validation limits",
    "keywords": "voicescope harness validation hallucination benchmark accuracy evaluation tests",
    "text": "The latest pushed VoiceScope branch separates configured policy findings, evaluator consistency checks, and STT diagnostics. Its benchmark remains scoped to labeled fixtures. Model flags, automated transcript comparisons, and an absence of configured policy matches do not establish overall call truthfulness or compliance.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/reliability.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/harness.py",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.webhooks",
    "topic": "voicescope",
    "title": "VoiceScope webhook handling",
    "keywords": "voicescope integration integrations webhook bolna vapi retell bland synthflow air security ssrf",
    "text": "The reviewed VoiceScope development branch includes adapters for six voice platforms and transcript-first Bolna ingestion with preserved speaker metadata, validated recording downloads, and persistent deduplication receipts. The audit did not verify fresh hosted webhook delivery or durable production execution.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/api/routes.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/storage/webhook_receipts.py",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "mcp-foundry.overview",
    "topic": "mcp-foundry",
    "title": "MCP Foundry",
    "keywords": "mcp foundry tools openapi generator agent evaluation prism mock",
    "text": "MCP Foundry turns an OpenAPI specification into MCP tools, evaluates them against an isolated Prism mock, and exposes per-tool results.",
    "evidence": [
      {
        "basis": "code",
        "title": "MCP_Foundry · main.py",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/backend/main.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "MCP_Foundry · README",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "mcp-foundry.repair",
    "topic": "mcp-foundry",
    "title": "MCP Foundry repair bounds",
    "keywords": "mcp foundry repair loops register codex rounds scorecard",
    "text": "MCP Foundry documents up to three repair rounds and local Codex configuration registration. Passing mock-based evaluation does not prove compatibility with every production API.",
    "evidence": [
      {
        "basis": "code",
        "title": "MCP_Foundry · repair.py",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/backend/pipeline/repair.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "MCP_Foundry · README",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "autoace.overview",
    "topic": "autoace",
    "title": "AutoAce",
    "keywords": "autoace classifier voice audio tone dsp llm cost noise vad",
    "text": "AutoAce combines local DSP features with hosted transcription and language models to classify call audio into a structured nine-field result.",
    "evidence": [
      {
        "basis": "repository",
        "title": "autoace-voice-tone-classifier · README",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "autoace.calibration",
    "topic": "autoace",
    "title": "AutoAce calibration limits",
    "keywords": "autoace accuracy benchmark 85 56 cost calibration performance measurements",
    "text": "AutoAce's repository reports 85% field match on three calibration calls, compared with 56% for its DSP baseline. Its evaluation notes call this illustrative and optimistic; it is not evidence of accuracy on unseen calls.",
    "evidence": [
      {
        "basis": "code",
        "title": "autoace-voice-tone-classifier · validation_results.md",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/eval/validation_results.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "autoace-voice-tone-classifier · README",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "terminal.overview",
    "topic": "opencode-terminal",
    "title": "opencode-terminal",
    "keywords": "opencode terminal plugin npm persistent process shell tools native tty",
    "text": "opencode-terminal's repository documents native terminal windows and persistent background processes, with nine tools for starting, inspecting, interacting with, and stopping sessions.",
    "evidence": [
      {
        "basis": "repository",
        "title": "opencode-terminal · README",
        "href": "https://github.com/ShivamChavan01/opencode-terminal/blob/6154fe540c24f83665d95ee6cc6cfc493b9b2dba/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "terminal.publication",
    "topic": "opencode-terminal",
    "title": "opencode-terminal publication",
    "keywords": "opencode terminal npm published package license mit version",
    "text": "The public npm registry lists opencode-terminal version 0.2.0, and the reviewed package manifest declares an MIT license. Publication does not verify compatibility with every operating-system setup.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "npm package record",
        "href": "https://www.npmjs.com/package/opencode-terminal",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "opencode-terminal · package.json",
        "href": "https://github.com/ShivamChavan01/opencode-terminal/blob/6154fe540c24f83665d95ee6cc6cfc493b9b2dba/package.json",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "voicecli.overview",
    "topic": "voicecli",
    "title": "voicecli",
    "keywords": "voicecli voice cli offline whisper piper push talk terminal speech",
    "text": "voicecli's reviewed source uses local faster-whisper transcription, types text into a focused CLI, and supports local speech playback through Piper with fallback options. Its documented core loop needs no cloud STT key; local model setup is still required.",
    "evidence": [
      {
        "basis": "code",
        "title": "voicecli · voicecli.py",
        "href": "https://github.com/ShivamChavan01/voicecli/blob/90346fc7a35278cd57e09bc956bcdaa4e747e0ef/voicecli.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voicecli · README",
        "href": "https://github.com/ShivamChavan01/voicecli/blob/90346fc7a35278cd57e09bc956bcdaa4e747e0ef/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "oss.jkube",
    "topic": "oss-jkube",
    "title": "Eclipse JKube contributions",
    "keywords": "jkube eclipse foundation open source contributions prs merged assertj mockito",
    "text": "GitHub’s authored-PR search returned 27 Eclipse JKube PRs for ShivamChavan01, of which 18 are merged, checked on 21 November 2026. The work includes AssertJ and Mockito test modernization.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "Authored Eclipse JKube PRs",
        "href": "https://github.com/eclipse-jkube/jkube/pulls?q=is%3Apr+author%3AShivamChavan01",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oss.openmetadata",
    "topic": "oss-openmetadata",
    "title": "OpenMetadata submissions",
    "keywords": "openmetadata open metadata source contributions roles greenplum databricks prs merged",
    "text": "OpenMetadata PRs #27602, #27445, and #27648 were submitted by ShivamChavan01. All three are closed and unmerged as of the review date, so they should not be described as merged contributions.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "OpenMetadata PR #27602",
        "href": "https://github.com/open-metadata/OpenMetadata/pull/27602",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "public-record",
        "title": "OpenMetadata PR #27445",
        "href": "https://github.com/open-metadata/OpenMetadata/pull/27445",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "public-record",
        "title": "OpenMetadata PR #27648",
        "href": "https://github.com/open-metadata/OpenMetadata/pull/27648",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "oss.lingo",
    "topic": "oss-lingo",
    "title": "supabase-lingo",
    "keywords": "supabase lingo npm translation postgresql event hackathon",
    "text": "The public npm registry lists supabase-lingo version 0.1.1 with a description of database-content translation through Lingo.dev. The hackathon participation claim comes from Shivam's supplied profile.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "supabase-lingo package record",
        "href": "https://www.npmjs.com/package/supabase-lingo",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Hackathon description supplied by Shivam",
        "href": "#open-source",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "oss.jira",
    "topic": "oss-jira",
    "title": "Jira CI/CD Status Panel",
    "keywords": "jira atlassian forge cicd status panel hackathon",
    "text": "The public jira-cicd-panel repository implements a Forge/React Jira issue panel that fetches GitHub Actions workflow status, recent runs, and commit information. The repository documents fixed demo configuration. ForgeQuest participation is supplied profile context, and current Forge deployment was not verified.",
    "evidence": [
      {
        "basis": "repository",
        "title": "Jira CI/CD panel README",
        "href": "https://github.com/ShivamChavan01/jira-cicd-panel/blob/fc86a9117a9c5b70134ce40db05805c164445f3a/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.fit",
    "topic": "recruiter",
    "title": "Reasons to consider Shivam",
    "keywords": "hire hiring candidate strengths value team company recommend choose consider",
    "text": "Shivam is a full-stack engineer with concrete interface, backend, and database work. Recent merged employment contributions use Angular, Java 21/Micronaut, and MongoDB across reporting, staff workflows, tenant isolation, and membership correctness. Open Agent combines a React frontend, FastAPI backend, and PostgreSQL retrieval and tools. Cutroom adds deployed browser-editing improvements.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · tools.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/tools.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "November portfolio audit and local-development status",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.summary",
    "topic": "recruiter",
    "title": "Professional introduction",
    "keywords": "summary introduction introduce overview bio yourself",
    "text": "Shivam Chavan is a full-stack engineer in Bengaluru working on Strivo at Eazytag. His reviewed work includes finance and staff workflows, tenant-scoped backend fixes, Cutroom’s deployed editing improvements, and VoiceScope’s pushed observability candidate. His public projects span interfaces, backend services, databases, and developer tools.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Portfolio profile",
        "href": "#hero-heading",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "voiceScope · pipeline.py · development branch",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/pipeline.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README · development branch",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "November portfolio audit and local-development status",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.roles",
    "topic": "recruiter",
    "title": "Relevant engineering roles",
    "keywords": "roles positions fit fullstack full stack suited career seniority",
    "text": "Shivam is a full-stack engineer. His supplied Eazytag résumé describes Angular interfaces, Java/Micronaut services and MongoDB product work. Open Agent combines a React frontend, FastAPI backend and PostgreSQL/pgvector retrieval; Cutroom adds a TypeScript editing engine. AI integrations are part of his full-stack project work. A specific role or seniority level should be assessed against its requirements.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Employment details supplied by Shivam",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.backend",
    "topic": "recruiter",
    "title": "Backend experience",
    "keywords": "backend back end api database server experience",
    "text": "His reviewed backend work includes FastAPI, PostgreSQL/pgvector, and bounded tool execution in Open Agent, plus Java 21/Micronaut and MongoDB employment contributions. Recent employment fixes cover tenant-scoped queries, reporting drilldowns, waitlist concurrency, and membership state.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · rag.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/rag.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · projects.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/routers/projects.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "November portfolio audit and local-development status",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.frontend",
    "topic": "recruiter",
    "title": "Frontend experience",
    "keywords": "frontend front end ui interface react angular typescript experience",
    "text": "His public projects include React/TypeScript interfaces for Open Agent and Cutroom. Open Agent connects the interface to streamed AI responses, documents and tool activity; Cutroom exposes timeline editing, version comparison and conflict review. His supplied Eazytag profile describes Angular frontend work alongside backend implementation.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Employment details supplied by Shivam",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.ai",
    "topic": "recruiter",
    "title": "Applied AI experience",
    "keywords": "ai llm experience background applied tools retrieval rag",
    "text": "His applied-AI work includes project-scoped retrieval and tool use in Open Agent, evidence-grounded edit proposals in Cutroom, VoiceScope’s pushed call-review and STT candidate, and generated-tool evaluation and repair in MCP Foundry. The evidence concerns application engineering and evaluation boundaries; it does not establish foundation-model training or published ML research.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "voiceScope · pipeline.py · development branch",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/pipeline.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README · development branch",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "MCP_Foundry · main.py",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/backend/main.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "MCP_Foundry · README",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "November portfolio audit and local-development status",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.ownership",
    "topic": "recruiter",
    "title": "Product ownership and production work",
    "keywords": "ownership production oncall responsibility owned end to end",
    "text": "His supplied Eazytag employment context includes end-to-end features and weekly on-call support. A November audit verified authored commits in shared, merged development-branch PRs across reporting, staff operations, tenant isolation, biometric alerts, and memberships. It did not independently verify production deployment or sole ownership of the platform.",
    "evidence": [
      {
        "basis": "profile",
        "title": "November portfolio audit and local-development status",
        "href": "#experience",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Portfolio project directory",
        "href": "#work",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "public-record",
        "title": "Public GitHub repository index",
        "href": "https://github.com/ShivamChavan01?tab=repositories",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "recruiter.testing",
    "topic": "recruiter",
    "title": "Testing and failure handling",
    "keywords": "testing tests quality reliability engineering practices",
    "text": "His projects provide several testing and failure-handling examples: Cutroom documents deterministic timeline checks and explicit merge-conflict review; MCP Foundry evaluates generated tools against an isolated mock and bounds repair attempts; Open Agent bounds tool use and implements provider fallback. These are concrete design choices to discuss, rather than a guarantee of complete coverage or production reliability.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "MCP_Foundry · repair.py",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/backend/pipeline/repair.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "MCP_Foundry · README",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · llm.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/llm.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.interview",
    "topic": "recruiter",
    "title": "Useful interview topics",
    "keywords": "interview assess evaluate questions ask technical screen",
    "text": "Useful interview topics include how Open Agent enforces project boundaries and bounds tool use, how Cutroom resolves conflicting timeline edits, and how MCP Foundry evaluates and repairs generated tools. For his employment work, ask him to walk through a booking or refund failure, the tests he used, and an on-call incident. Those questions let you assess reasoning and ownership against the published examples.",
    "evidence": [
      {
        "basis": "code",
        "title": "agent-platform · rag.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/rag.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · projects.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/routers/projects.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "profile",
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · tools.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/tools.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "MCP_Foundry · repair.py",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/backend/pipeline/repair.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "MCP_Foundry · README",
        "href": "https://github.com/ShivamChavan01/MCP_Foundry/blob/dafb83fbaede2f2f5452dec748a47df06040a4b8/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.gaps",
    "topic": "recruiter",
    "title": "Limits and areas to assess",
    "keywords": "gaps weaknesses limitations improve missing concerns",
    "text": "Areas to improve in the public portfolio include production-readiness evidence and evaluation depth. Cutroom is documented as a prototype; AutoAce’s accuracy figure comes from only three calibration calls. Useful next steps are broader test/evaluation results, deployment evidence and examples of how failures were handled. Public records do not establish personal weaknesses, teamwork problems or a seniority level.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "autoace-voice-tone-classifier · validation_results.md",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/eval/validation_results.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "autoace-voice-tone-classifier · README",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.availability",
    "topic": "recruiter",
    "title": "Availability and next steps",
    "keywords": "availability available notice period start date visa authorization relocation",
    "text": "His current notice period, start date, relocation preferences and work authorization are not published in the reviewed records. You can ask him directly at shivamrc189@gmail.com and use the résumé and project links to discuss a specific opportunity.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Published contact details",
        "href": "#contact",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.collaboration",
    "topic": "recruiter",
    "title": "Collaboration and communication",
    "keywords": "teamwork collaboration communicate communication clients soft skills leadership culture",
    "text": "His supplied Eazytag résumé describes weekly on-call support alongside client engineering teams, providing a concrete example to discuss collaboration and handling production issues. The public project records do not establish a personality assessment or management level; communication quality and team fit are best assessed through interviews and references.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Employment details supplied by Shivam",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.assessment",
    "topic": "recruiter",
    "title": "Engineering ability and areas to improve",
    "keywords": "good bad competent capable engineer enginner developer programmer assessment opinion pros cons criticism negatives",
    "text": "Shivam is a full-stack engineer, and his reviewed work shows positive signs of engineering ability. Open Agent combines a React frontend, FastAPI services and database-backed retrieval; his supplied Eazytag résumé describes Angular, Java/Micronaut and MongoDB features, plus weekly on-call work. Areas to assess are production readiness and evaluation depth: Cutroom is a prototype, and AutoAce’s reported accuracy comes from only three calibration calls. He could strengthen the portfolio with broader evaluations, deployment evidence and examples of handling failures. A code walkthrough and references can help assess his engineering quality in a team.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "agent-platform · tools.py",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/tools.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "autoace-voice-tone-classifier · validation_results.md",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/eval/validation_results.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "autoace-voice-tone-classifier · README",
        "href": "https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "cutroom.production",
    "topic": "cutroom",
    "title": "Cutroom brief-grounded proposals",
    "keywords": "cutroom assistant production brief source evidence notes retrieval constraints proposals duration preserve ordering",
    "text": "Cutroom’s November release stores editing briefs and authored timestamped notes, retrieves bounded source evidence, and exposes omitted context. Proposals are previewed, and Apply rejects edits worsening required duration, source-coverage, or ordering constraints. Subjective style and continuity remain human review.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/docs/production-context.md",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/apps/web/src/lib/production/review.ts",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.gain",
    "topic": "cutroom",
    "title": "Cutroom local gain suggestions",
    "keywords": "cutroom gain matching suggestions audio volume local undo three edits",
    "text": "Cutroom can suggest a gain match after three eligible manual edits on distinct clips from the same source and track. Support is inspectable, preview changes nothing, and Apply is undoable. The rule is local to the session and does not call a model or measure loudness normalization.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/apps/web/src/lib/gainSuggestions.ts",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.playback",
    "topic": "cutroom",
    "title": "Cutroom playback and editing copies",
    "keywords": "cutroom playback seek buffer multitrack editing copies mp4 source performance",
    "text": "Cutroom’s November release synchronizes multitrack buffering and lets a lone video decoder pace the timeline during stalls. A full-resolution MP4 editing copy supports source preview while keeping original timeline references. The measured fixture results do not establish general 4K/8K or production-length performance.",
    "evidence": [
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/apps/web/src/components/Player.tsx",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/apps/web/src/lib/media/editingCopy.ts",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "cutroom.delivery",
    "topic": "cutroom",
    "title": "Cutroom November delivery",
    "keywords": "cutroom latest shipped release deployed live main november status",
    "text": "The November 21 audit found Cutroom commit 8faedfec on main with successful CI, Pages deployment, and Vercel commit status. The public editor returned HTTP 200 and its bundle included the new brief, gain-suggestion, and editing-copy UI. Interactive editing and live Assistant generation were not rerun in that audit.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "Cutroom exact-head CI",
        "href": "https://github.com/ShivamChavan01/cutroom/actions/runs/44815016413",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "Cutroom source reviewed November 2026",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/8faedfec10e9c7c2d200a4d586ee3c5b457f53c5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.evidence-review",
    "topic": "voicescope",
    "title": "VoiceScope Calls review",
    "keywords": "voicescope calls review findings transcript quote audio policy evidence latest",
    "text": "The latest pushed VoiceScope development branch adds a Calls interface with Findings, Transcript, Speech diagnostics, STT quality, and Evaluation checks. Quotes link to source turns, original audio remains available, and synthetic and real calls are labeled separately. Deployment of this branch was not verified.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/frontend/src/components/call-review.tsx",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.stt-review",
    "topic": "voicescope",
    "title": "VoiceScope STT comparison",
    "keywords": "voicescope stt transcription speech quality bolna deepgram human reference alignment wer accuracy disagreement",
    "text": "VoiceScope’s pushed development work compares retained Bolna recordings and original text with a separate Deepgram or supplied human-verified reference. Automatic comparisons are estimated transcript disagreement. WER requires an adequate human-verified timed reference, and insufficient alignment withholds a rate.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/stt_quality.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/stt_alignment.py",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.policy-checks",
    "topic": "voicescope",
    "title": "VoiceScope policy evidence",
    "keywords": "voicescope refund escalation policy version snapshot quote evidence review",
    "text": "The pushed VoiceScope candidate supports configured refund-guarantee and escalation checks with stored policy snapshots and exact evidence quotes. Uncertain intent or inferred speakers remain reviewable. A claim that a refund completed needs action evidence. These bounded rules do not provide general compliance certification.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/reliability.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/core/policy_store.py",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.storage",
    "topic": "voicescope",
    "title": "VoiceScope storage hardening",
    "keywords": "voicescope sqlite fastembed semantic retrieval database migration backup chroma",
    "text": "The latest VoiceScope feature branch replaces runtime Chroma with local FastEmbed/SQLite semantic indexes. It implements explicit offline index migration, fail-closed configured storage errors, indexed-call deletion, and individual SQLite snapshots. This audit did not verify a hosted migration or coordinated whole-system restore.",
    "evidence": [
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/storage/semantic_index.py",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/docs/storage-reliability.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "voicescope.delivery",
    "topic": "voicescope",
    "title": "VoiceScope development delivery",
    "keywords": "voicescope latest shipped release branch deployed status ci november",
    "text": "On 21 November 2026, VoiceScope main remained at f9d459c while the latest authored work was pushed on feat/voicescope-reliability-stt-demo at f661ef0. Its exact commit passed seven CI jobs. No merged PR was found. Current Vercel production metadata and the public frontend still point to the older main baseline.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "VoiceScope development CI",
        "href": "https://github.com/ShivamChavan01/voiceScope/actions/runs/43942424429",
        "reviewedAt": "2026-11-21"
      },
      {
        "basis": "code",
        "title": "VoiceScope development branch source",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f661ef06fcdc9b1600edc118ce1939ef4a5906f5/README.md",
        "reviewedAt": "2026-11-21"
      }
    ]
  },
  {
    "id": "experience.recent",
    "topic": "experience",
    "title": "Recent merged employment contributions",
    "keywords": "strivo eazytag recent reporting finance staff followup biometric notifications tenant upgrade transfer sales",
    "text": "The November private-repository audit traced Shivam-authored commits in merged development-branch PRs for Finance drilldowns, staff follow-up/access attribution, biometric outage notifications, tenant-isolated product search and booking history, atomic waitlist admission, and membership upgrade/transfer/sales fixes. PRs include shared review commits. Production deployment was not independently verified.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Private employment contribution audit",
        "href": "#case-study-strivo",
        "reviewedAt": "2026-11-21"
      }
    ]
  }
];
