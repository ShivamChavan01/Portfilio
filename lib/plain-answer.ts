import { isSafeSourceHref, type AskResponse } from "./ask-shared";

function escapeHtml(text: string) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

export function renderPlainAnswer(question: string | null, result: AskResponse): string {
  const sources = result.sources.filter(({ href }) => isSafeSourceHref(href)).map(({ title, href }) => {
    const fragment = href.replace(/^#hero-heading$/, "#top").replace(/^#work$/, "#projects").replace(/^#case-study-/, "#project-");
    const url = href.startsWith("#") ? "/" + fragment : href;
    return `<li><a href="${escapeHtml(url)}">${escapeHtml(title)}</a></li>`;
  });
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ask about Shivam · Shivam Chavan</title>
<style>
:root { color-scheme: light dark; }
body { max-width: 40rem; padding: 0 1.25rem; margin: 3rem auto; font: 1rem/1.65 system-ui,sans-serif; background: #e9e4da; color: #302e29; overflow-wrap: anywhere; }
h1 { font-size: 1.45rem; line-height: 1.35; } h2 { font-size: 1rem; } a { color: #71452f; }
@media (prefers-color-scheme: dark) { body { background: #181816; color: #e0ded6; } a { color: #d5b39d; } }
</style></head><body><main>
<a href="/">Shivam Chavan</a>
<h1>${escapeHtml(question || "Ask about my work")}</h1>
<p>${escapeHtml(result.ok ? result.answer : result.message)}</p>
${sources.length ? `<h2>Sources</h2><ul>${sources.join("")}</ul>` : ""}
<p><a href="/#ask">Ask another question</a> · <a href="/#projects">Browse projects</a></p>
</main></body></html>`;
}
