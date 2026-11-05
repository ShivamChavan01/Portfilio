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
    "text": "The reviewed project repositories use Python/FastAPI and TypeScript/React. His supplied employment profile lists Angular, Java 21, Micronaut, and MongoDB.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · technical stack",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "profile",
        "title": "Employment stack supplied by Shivam",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "projects.overview",
    "topic": "projects",
    "title": "Project directory",
    "keywords": "projects portfolio built build developed work software",
    "text": "His portfolio lists Cutroom, Open Agent, VoiceScope, MCP Foundry, AutoAce, opencode-terminal, voicecli, and Strivo. Seven have linked public repositories; Strivo is described in his supplied employment profile.",
    "evidence": [
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
    "text": "His résumé describes work on bookings, waitlists, biometric check-in, refund reporting, and a nightly health-scoring pipeline, plus weekly on-call support. The stated scale of 100+ gyms and 60+ tenants is profile-provided, not independently confirmed from public production records.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "cutroom.overview",
    "topic": "cutroom",
    "title": "Cutroom",
    "keywords": "cutroom video editor editing timeline version versions merge",
    "text": "The reviewed Cutroom repository describes a browser video-editor prototype with versioned timelines, change comparison, three-way merging, and explicit conflict review.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "cutroom.limits",
    "topic": "cutroom",
    "title": "Cutroom export limits",
    "keywords": "cutroom export mp4 render otio fcpxml edl json collaboration limitations",
    "text": "Cutroom's documented exports are timeline interchange files: OTIO, FCPXML, EDL, and native JSON. It does not export rendered MP4 video or provide live collaboration; full mobile editing is also unsupported.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "cutroom.storage",
    "topic": "cutroom",
    "title": "Cutroom local storage",
    "keywords": "cutroom storage persistence indexeddb opfs local sample restore",
    "text": "Cutroom documents IndexedDB for project state and OPFS for uploaded media, with a separate sample workspace. Browser storage is local to the device and origin and can be evicted.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
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
    "text": "VoiceScope's reviewed Python pipeline runs call processing with a validation harness and structured reports. Its repository documents transcription options, retrieved knowledge context, and a FastAPI interface.",
    "evidence": [
      {
        "basis": "code",
        "title": "voiceScope · pipeline.py",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/core/pipeline.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "voicescope.validation",
    "topic": "voicescope",
    "title": "VoiceScope validation limits",
    "keywords": "voicescope harness validation hallucination benchmark accuracy evaluation tests",
    "text": "VoiceScope combines deterministic checks with policy-grounded analysis. Its labeled benchmark is a small dataset; it does not prove general hallucination detection accuracy or a guarantee that every incorrect answer is caught.",
    "evidence": [
      {
        "basis": "code",
        "title": "voiceScope · harness.py",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/core/harness.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/README.md",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "voicescope.webhooks",
    "topic": "voicescope",
    "title": "VoiceScope webhook handling",
    "keywords": "voicescope integration integrations webhook bolna vapi retell bland synthflow air security ssrf",
    "text": "VoiceScope documents integrations for six voice platforms. The reviewed webhook route validates recording URLs with an SSRF-checking helper before processing; this source inspection is not a full security audit or live integration test.",
    "evidence": [
      {
        "basis": "code",
        "title": "voiceScope · routes.py",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/api/routes.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/README.md",
        "reviewedAt": "2026-11-04"
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
        "reviewedAt": "2026-11-04"
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
    "text": "GitHub's merged-PR search returned 18 Eclipse JKube PRs by ShivamChavan01 on the review date, including test modernization work. This is an authored contribution record, not evidence of employment at Eclipse.",
    "evidence": [
      {
        "basis": "public-record",
        "title": "JKube authored merged pull requests",
        "href": "https://github.com/eclipse-jkube/jkube/pulls?q=is%3Apr+author%3AShivamChavan01+is%3Amerged",
        "reviewedAt": "2026-11-04"
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
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "public-record",
        "title": "OpenMetadata PR #27445",
        "href": "https://github.com/open-metadata/OpenMetadata/pull/27445",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "public-record",
        "title": "OpenMetadata PR #27648",
        "href": "https://github.com/open-metadata/OpenMetadata/pull/27648",
        "reviewedAt": "2026-11-04"
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
        "reviewedAt": "2026-11-04"
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
    "text": "Shivam's supplied profile describes a Jira Forge CI/CD status panel built for ForgeQuest. No independently reviewed public repository was linked for this project.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Jira project in supplied profile",
        "href": "#open-source",
        "reviewedAt": "2026-11-04"
      }
    ]
  },
  {
    "id": "recruiter.fit",
    "topic": "recruiter",
    "title": "Reasons to consider Shivam",
    "keywords": "hire hiring candidate strengths value team company recommend choose consider",
    "text": "Reasons to consider Shivam for a software engineering role include end-to-end product work and practical AI/backend experience. Open Agent combines React and FastAPI with document retrieval, tool calling, provider fallback and usage controls. His supplied Eazytag résumé describes Angular, Java/Micronaut and MongoDB product work, plus weekly on-call support.",
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
      }
    ]
  },
  {
    "id": "recruiter.summary",
    "topic": "recruiter",
    "title": "Professional introduction",
    "keywords": "summary introduction introduce overview bio yourself",
    "text": "Shivam Chavan is a full-stack engineer based in Bengaluru. His supplied résumé lists a Full Stack Developer role at Eazytag, working on Strivo. His public projects include Open Agent for project-specific AI assistants, Cutroom for versioned video editing, and VoiceScope for voice-call analysis. His work spans TypeScript/React interfaces and Python/FastAPI backends, with Angular/Java experience described in his employment profile.",
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
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "voiceScope · pipeline.py",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/core/pipeline.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/README.md",
        "reviewedAt": "2026-11-04"
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
    "id": "recruiter.roles",
    "topic": "recruiter",
    "title": "Relevant engineering roles",
    "keywords": "roles positions fit fullstack full stack suited career seniority",
    "text": "His published work is most relevant to assessing fit for full-stack product engineering, Python/FastAPI backend development and applied-AI tooling. Open Agent combines interfaces, APIs, retrieval and model integration; Cutroom adds a TypeScript editing engine. His Eazytag résumé describes Java/Micronaut and Angular work. A specific role or seniority level should be assessed against its requirements.",
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
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
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
    "text": "His backend work includes Open Agent’s FastAPI service, PostgreSQL/pgvector document retrieval, project-ownership checks, bounded tool execution and provider fallback. His supplied Eazytag profile adds Java 21, Micronaut and MongoDB work on bookings, refunds, reporting and background scoring. These provide concrete API, data-boundary and failure-handling topics to discuss in an interview.",
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
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
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
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
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
    "text": "His applied-AI work includes project-scoped retrieval and tool calling in Open Agent, call analysis with validation in VoiceScope, and generated-tool evaluation and repair in MCP Foundry. The evidence concerns building and integrating AI applications, rather than a claim of training foundation models or publishing machine-learning research.",
    "evidence": [
      {
        "basis": "repository",
        "title": "agent-platform · README",
        "href": "https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/README.md",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "code",
        "title": "voiceScope · pipeline.py",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/core/pipeline.py",
        "reviewedAt": "2026-11-04"
      },
      {
        "basis": "repository",
        "title": "voiceScope · README",
        "href": "https://github.com/ShivamChavan01/voiceScope/blob/f9d459c75e7152e370afed838bc547dde9d0a2d5/README.md",
        "reviewedAt": "2026-11-04"
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
      }
    ]
  },
  {
    "id": "recruiter.ownership",
    "topic": "recruiter",
    "title": "Product ownership and production work",
    "keywords": "ownership production oncall responsibility owned end to end",
    "text": "His supplied Eazytag résumé describes owning full-stack features for Strivo, including bookings, waitlists, biometric check-in, refund reporting and a nightly health-scoring pipeline, with weekly on-call support. The stated customer scale is profile-provided. His public projects offer additional implementation examples, while production outcomes and team performance would need references or interview validation.",
    "evidence": [
      {
        "basis": "profile",
        "title": "Strivo scope from supplied résumé",
        "href": "#experience",
        "reviewedAt": "2026-11-04"
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
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
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
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
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
    "text": "The portfolio is strongest as evidence of implementation choices; it does not independently establish a seniority level, team performance, or production reliability. Cutroom is a prototype and AutoAce’s accuracy result comes from three calibration calls. Ask for a code walkthrough, broader evaluation results and references to assess those areas rather than inferring personal weaknesses.",
    "evidence": [
      {
        "basis": "repository",
        "title": "cutroom · README",
        "href": "https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md",
        "reviewedAt": "2026-11-04"
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
  }
];
