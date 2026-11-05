/** Recruitment wording maps to reviewed summaries, never to an inferred hiring verdict. */
const recruiterRules: { pattern: RegExp; factIds: readonly string[] }[] = [
  {
    pattern: /\b(?:good|great|bad|poor|competent|capable|skilled|strong|weak|talented)\b.{0,40}\b(?:engineer|enginner|enginer|developer|programmer|coder|code|coding)\b|\b(?:is|are)\b.{0,25}\b(?:he|you|shivam)\b.{0,15}\b(?:(?:any )?good|competent|capable)\b|\b(?:pros? and cons?|strengths? and weakness(?:es)?|honest opinion|honest assessment|balanced assessment|engineering ability|quality of his code)\b|\b(?:how good|rate|assess|evaluate)\b.{0,25}\b(?:him|he|you|shivam|engineer|enginner|enginer)\b|\bcan (?:he|you|shivam) (?:actually )?(?:code|build software)\b/,
    factIds: ["recruiter.assessment", "recruiter.fit", "recruiter.gaps"],
  },
  {
    pattern: /\b(?:interview|technical screen)\b|\bquestions?\b.{0,35}\b(?:ask|assess|evaluate)\b/,
    factIds: ["recruiter.interview", "recruiter.fit", "recruiter.gaps"],
  },
  {
    pattern: /\b(?:weakness(?:es)?|gaps?|limitations?|improv(?:e|ement|ements)|missing|concerns?|negatives?|downsides?|drawbacks?|shortcomings?|critici(?:sm|sms|ze)|critique|red flags|bad things|bad qualities)\b/,
    factIds: ["recruiter.gaps", "cutroom.limits", "autoace.calibration"],
  },
  {
    pattern: /\b(?:availability|available|notice period|start date|work authorization|visa|relocation)\b|\bwhen\b.{0,30}\b(?:join|start)\b/,
    factIds: ["recruiter.availability", "profile.contact"],
  },
  {
    pattern: /\b(?:backend|back[ -]end|api development|database experience)\b/,
    factIds: ["recruiter.backend", "open-agent.isolation", "experience.role"],
  },
  {
    pattern: /\b(?:frontend|front[ -]end|ui development|interface experience)\b/,
    factIds: ["recruiter.frontend", "profile.skills", "cutroom.overview"],
  },
  {
    pattern: /\b(?:ai|llm|machine learning)\b.{0,40}\b(?:experience|background|skills?|roles?|engineering)\b|\b(?:experience|background|worked|work)\b.{0,40}\b(?:ai|llm|machine learning)\b/,
    factIds: ["recruiter.ai", "voicescope.overview", "mcp-foundry.overview"],
  },
  {
    pattern: /\b(?:teamwork|collaboration|collaborate|communication|communicate|soft skills|culture fit|leadership)\b|\bwork with\b.{0,25}\b(?:others|clients|team)\b/,
    factIds: ["recruiter.collaboration", "experience.scope"],
  },
  {
    pattern: /\b(?:production|ownership|owned|on[ -]?call|responsibilit(?:y|ies)|end[ -]to[ -]end)\b/,
    factIds: ["recruiter.ownership", "experience.scope", "experience.role"],
  },
  {
    pattern: /\b(?:testing|tests?|quality|reliability|engineering practices)\b/,
    factIds: ["recruiter.testing", "mcp-foundry.repair", "cutroom.overview"],
  },
  {
    pattern: /\b(?:roles?|positions?|full[ -]?stack|seniority|senior|junior|mid[ -]level|career path)\b|\bsuited for\b|\bfit\b.{0,30}\b(?:job|team)\b/,
    factIds: ["recruiter.roles", "recruiter.fit", "profile.skills"],
  },
  {
    pattern: /\b(?:hire|hiring|recruit|candidate|strengths?|standout)\b|\b(?:recommend|choose|consider)\b.{0,35}\b(?:him|her|you|shivam)\b|\b(?:good|best) at\b|\bbring\b.{0,35}\b(?:team|company|table)\b|\bvalue\b.{0,35}\b(?:team|company)\b|\bstand out\b|\bsets?\b.{0,20}\bapart\b|\bhow good\b|\bwork with\b.{0,25}\b(?:him|you|shivam)\b/,
    factIds: ["recruiter.fit", "open-agent.overview", "experience.role", "profile.skills"],
  },
  {
    pattern: /\b(?:introduce|introduction|summary|summarize|short bio|overview|elevator pitch)\b|\btell me about\b.{0,20}\b(?:yourself|him|you|shivam)\b|\bwhat (?:do|does|can) (?:you|he|shivam) (?:do|offer)\b|\bwho(?: is| are|'s|’s)\b.{0,15}\b(?:shivam|he|you)\b/,
    factIds: ["recruiter.summary", "projects.overview", "experience.role"],
  },
];

export function getRecruiterFactIds(question: string): readonly string[] {
  const text = question.normalize("NFKC").toLowerCase();
  return recruiterRules.find(rule => rule.pattern.test(text))?.factIds ?? [];
}
