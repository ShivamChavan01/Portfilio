# Portfolio evidence audit — 4 November 2026

This audit replaces older blanket “verified” labels in `docs/FACTS.md`. It checks the portfolio's substantive claim groups against public source material and distinguishes that material from supplied résumé claims. It does not independently establish education, employment, production customer counts, uptime, security, or current model availability.

## Evidence and coverage

Seven public repositories were inspected through the connected GitHub tools. Readmes were reviewed for each, with targeted source inspection for sensitive claims. The exact repository revisions are recorded in [the audit manifest](fact-audit-2026-11-04.json). The public npm registry was read for `opencode-terminal` and `supabase-lingo`. OpenMetadata PR metadata and authored JKube PR searches were refreshed.

The AI's approved wording is in [`lib/profile-facts.ts`](../../lib/profile-facts.ts): 29 statements covering identity/contact/education, Eazytag/Strivo, all eight displayed projects, and the four contribution entries. Each statement carries its evidence basis, source URL, and review date. Unsupported portfolio text is not automatically ingested into this list.

| Claim group | Evidence reviewed | Finding and action |
|---|---|---|
| Identity/contact | Supplied résumé and portfolio records | Kept as profile-provided; not presented as independent identity verification. |
| Education/CGPA | Supplied résumé | Kept as profile-provided. No institutional record was obtained. |
| Eazytag/Strivo role, dates, scale and on-call | Supplied résumé and existing project audit | Employment and the 100+ gym / 60+ tenant counts remain profile-provided. Public production records were unavailable. AI answers state that qualification. |
| Cutroom versioning, storage and exports | [Pinned README](https://github.com/ShivamChavan01/cutroom/blob/1bc9c647074ad95dc1ec4be0bff8bdecb6c6f877/README.md); engine source tree inspected | Repository supports prototype, timeline merge, IndexedDB/OPFS, and interchange exports. Preserved explicit limits: no rendered MP4, no live collaboration, and no full mobile editing. README differentiates working revisions from deployed revisions; hosted parity is not asserted. |
| Open Agent retrieval/ownership | [rag.py](https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/rag.py), [projects.py](https://github.com/ShivamChavan01/agent-platform/blob/596022714a88ab95476d7881bfb0c158d9382d98/app/routers/projects.py), services, tools, conversations and provider adapter | Project filters and ownership checks exist in reviewed code. Replaced absolute tenant-security wording with a scoped implementation description. No complete cross-tenant production audit was performed. |
| Open Agent 25 models and budgets | README, `app/llm.py`, `app/services.py`, `app/routers/conversations.py`, `app/tools.py` | README's model list is historical and contains configuration-dependent behavior. Removed the unqualified “25 currently available LLMs” presentation. Budgets depend on configuration; a disabled cap is not enforcement. Four-turn tool bound is source-supported. |
| VoiceScope validation and integrations | README, `core/pipeline.py`, `core/harness.py`, `api/routes.py` | Repository has validation and URL-checking code. README/source disagree about harness layer counts; no exact layer count is promoted. Small benchmark results do not establish accuracy on unseen calls. Six adapters are documented; six working production integrations are not asserted. |
| MCP Foundry generation/evaluation/repair | README, `backend/main.py`, `backend/pipeline/eval_harness.py`, `backend/pipeline/repair.py` | Mock evaluation, up to three repair rounds, and local registration are supported. Removed “any OpenAPI spec” and universal real-service/security guarantees. Current code uses provider adapters; obsolete GPT-5.6 stack wording was removed. Hackathon attribution remains profile-provided. |
| AutoAce metrics | [Evaluation caveats](https://github.com/ShivamChavan01/autoace-voice-tone-classifier/blob/134e0088438e01df478e033c8af693370bdbe3a4/eval/validation_results.md), README | Reported 85% vs 56% is calibration over three calls, explicitly illustrative/optimistic. Removed the unqualified accuracy headline. Removed 830MB → 85MB from the displayed project copy because that claim was not established by the reviewed source material. |
| opencode-terminal | README, `package.json`, public npm registry | Registry lists 0.2.0; manifest declares MIT. Nine tools are documented. Cleanup is described as best-effort with platform dependencies, not a guarantee against orphaned processes. |
| voicecli | README and `voicecli.py` | Local faster-whisper, focused CLI text input, and Piper/fallback playback are source-supported. Clarified that local model setup and a supported desktop environment are required. |
| Eclipse JKube | GitHub authored PR search and `is:merged` search | Merged search returned 18 entries. General search returned only its first 20 results, so the old total of 27 was not independently re-established. Display copy uses the 18 merged result snapshot and removes unsupported reviewer-title assertions. |
| OpenMetadata | [#27602](https://github.com/open-metadata/OpenMetadata/pull/27602), [#27445](https://github.com/open-metadata/OpenMetadata/pull/27445), [#27648](https://github.com/open-metadata/OpenMetadata/pull/27648) | All three metadata records show closed and unmerged. Display text and AI statements now say so explicitly. |
| supabase-lingo | `https://registry.npmjs.org/supabase-lingo/latest` | Public registry lists 0.1.1 and a translation-related description. That establishes a package record, not independent proof of the hackathon claim or author's ownership. |
| Jira CI/CD panel | Supplied résumé | No independently reviewed public repository was linked. AI identifies this as a profile description. |
| Demo URLs and CI claims | Existing links and repository descriptions | Links are navigation destinations, not evidence of continuous availability. Removed blanket assertions that current remote tests pass or that live deployments are production-ready. No other repository's test suite or production deployment was executed by this audit. |

## Stronger answer boundary

Groq selects up to three IDs from a request-specific list of reviewed statements. [Groq strict structured outputs](https://console.groq.com/docs/structured-outputs) constrain that selection to a JSON schema. The server independently validates the JSON, allowed IDs, uniqueness, and count, then renders the canonical statement text and its recorded evidence. The model cannot provide visitor-visible prose, URLs, or new facts. Invalid output is rejected without a free-text fallback.

Additional controls include exact request shape, Unicode normalization/control-character rejection, common injection screening, no tools, no runtime remote-source ingestion, bounded request/response streams, timeouts, safe source destinations, escaped text, server-only credentials, and existing rate limits. This follows the layered input/output boundary approach described in the [OWASP prompt-injection prevention guidance](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html).

Input screening is heuristic. The deterministic output boundary is the main control against invented prose and exfiltration. A model can still select an irrelevant approved fact. A reviewed README can be inaccurate, and owner-provided claims are not independent evidence. Source inspection does not establish production correctness. Facts require deliberate re-review when sources change.

## Request limits

The retained backstop allows two provider-bound questions per client and five per server instance per minute. It protects the shared free-provider quota, rather than factual accuracy. It is not a distributed limiter, client-IP headers depend on the hosting proxy, and cold starts reset local state. Groq's account quota is the account-wide ceiling. Distributed abuse prevention requires deployment infrastructure; this change does not claim to provide it.

## Verification

The automated suite includes strict selection/serialization checks, fake evidence/prose rejection, Unicode attacks, cross-topic IDs, extra fields, duplicate IDs, malformed/oversized/aborted streams, provider failures, unavailable models, origin checks, and request limits. The attack corpus tests the output boundary even when an input filter is bypassed. These tests establish the exercised boundary, not resistance to every possible attack.

Live checks through the local API confirmed a Cutroom MP4 limitation answer with a pinned source; an Open Agent project-boundary answer with two pinned code links; rejection of a request to reveal the key; and an explicit unknown for salary. Current test/build/browser results are recorded with delivery rather than implied by repository README badges.
