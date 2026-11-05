# Portfolio questions and reviewed facts

The portfolio uses the preferred split layout, visible explanations for eight projects, a notebook for engineering detail, and Vercel Geist Sans for the name. VectorShift is removed. Open Agent is featured with project boundaries, controlled tools, provider fallback, and configurable usage controls. Main body text is 16px.

## Run and configure

```sh
npm run dev -- --hostname 127.0.0.1 --port 3101
```

Development uses `.next-dev`; production builds use `.next`. `design/profile.html` is a static visual snapshot; Next.js supplies the interactive behavior.

The existing local Groq credential is in ignored, server-only `.env.local`. For another environment, use `.env.example` and set:

```dotenv
GROQ_API_KEY=your-server-key
GROQ_MODEL=openai/gpt-oss-20b
```

Only the reviewed strict-output model is allowed. An incompatible model fails closed; there is no automatic paid or free-text fallback. The credential is sent only in the server-to-Groq authorization header. It is never included in model context, answers, client configuration, or this document. Vercel production and Preview use server-only environment variables for the same key and model.

[Groq structured outputs](https://console.groq.com/docs/structured-outputs) supports strict schema selection for this model. Account quota and availability remain provider-controlled; the site does not promise unlimited free inference.

## Answer pipeline

1. Parse a JSON object containing only `question`, with a 2KB streamed-body bound and a three-second input deadline. Normalize Unicode, bound the question to 500 characters, and reject hidden control characters.
2. Reject cross-origin browser submissions and common role-override/secret-extraction patterns. Unknown private information and unrelated requests return an explicit unsupported answer without inference.
3. Select up to eight candidate statements from `lib/profile-facts.ts`, using known project aliases, recruiter intent rules and keyword tokens. A named project limits the candidate topic. General hiring, strengths, role-fit, introduction, collaboration, testing and availability questions use reviewed summaries that connect the relevant evidence. No runtime website, repository, user URL, or private file is read.
4. Ask Groq to choose up to three candidate fact IDs using strict JSON schema with an enum of allowed IDs, no extra properties, and no tools. The model selects evidence; it does not write the answer shown to visitors.
5. Independently validate the provider envelope, completion status, JSON structure, count, ID uniqueness, and candidate membership. Reject unknown IDs, free text, fabricated links, tool calls, truncated output, extra fields, or an oversized response. Provider JSON is stream-bounded to 32KB and subject to a 15-second timeout.
6. Render the canonical statement text and its recorded evidence from the server catalog. Ignore any altered candidate text or links. Unknown selections return “not available”; invalid output returns an error with no unsafe fallback.

Questions are submitted one at a time and are not stored as conversation history. The widget opens with Cmd/Ctrl+K and closes with Escape. Statements render as escaped text. External source links open with `noopener noreferrer`; destination hosts and anchor formats are allowlisted. Source labels state their evidence basis and review date.

## Fact review

The [4 November evidence audit](research/fact-audit-2026-11-04.md) and [revision manifest](research/fact-audit-2026-11-04.json) record the review of seven public repositories, package records, and contribution metadata. The catalog contains 41 statements covering identity, contact, education, employment, all displayed projects, contribution entries and recruiter questions. Twelve recruiter summaries were added on 5 November from the same reviewed records; source review dates remain 4 November. These summaries explain relevant implementation experience without inventing comparative rankings, personality traits, seniority or unpublished availability.

Code and README statements point to pinned revisions. Reviewed source is not proof of production behavior or current deployment health. Supplied education, employment counts, and hackathon claims remain explicitly profile-provided when public evidence cannot independently confirm them. The model never upgrades those into verified credentials or production guarantees.

The main portfolio copy was also tightened: no unqualified current availability claim for 25 models, no unsupported AutoAce memory-reduction metric, calibration caveats for its three-call accuracy result, explicit unmerged status for OpenMetadata submissions, and scoped security/reliability wording.

## Quota and remaining limits

The instance-local backstop allows two provider-bound requests per client and five total per minute. Unknown or blocked questions do not spend model quota. This protects the shared free account from a single burst. It is not distributed across serverless instances, resets on cold starts, and depends on a trusted hosting proxy for meaningful client-IP headers. Groq's account quotas remain the account-wide ceiling. Shared storage or hosting-layer protection is needed for deployment-wide abuse controls.

Input-pattern screening is heuristic. The canonical output boundary prevents generated prose and invented citations from reaching visitors, including when an input bypasses those patterns. It does not guarantee relevance, perfect catalog facts, resistance to every attack, or future source freshness. A model can choose an irrelevant approved statement; reviewed repository documentation may itself contain errors. Facts need deliberate re-review when code or profile details change.

## Verification

`npm test` uses Node's existing test runner. The 50 tests cover the fact catalog, recruiter question variants, the hiring-question API regression, strict selection, canonical rendering, evidence URLs, input boundaries, Unicode and forged-role attacks, malformed/oversized/aborted streams, origin checks, provider failures, unsupported models, request limits, and the portfolio UI. Provider responses in automated tests are controlled fixtures. The adversarial corpus tests the output boundary even when an input filter is bypassed. CI runs this suite before building.

`npm run typecheck` and `npm run build` check the application and route. Native Chrome checks cover five screen widths, notebook selection, keyboard navigation, deep links, themes, and the question panel without adding Playwright.

Real requests through the local endpoint confirmed a Cutroom MP4 limitation answer with a pinned source, an Open Agent project-boundary answer with two code links, denial of an API-key extraction request, and an explicit unknown for salary. The source checks are point-in-time evidence review, not automated live browsing for every visitor question.
