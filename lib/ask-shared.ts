export const MAX_QUESTION_LENGTH = 500;
export function isSafeSourceHref(href: string): boolean {
  if (/^#[a-z][a-z0-9-]*$/i.test(href)) return true;
  try {
    const url = new URL(href);
    return url.protocol === "https:" && !url.username && !url.password && !url.port &&
      ["github.com", "www.npmjs.com"].includes(url.hostname);
  } catch { return false; }
}
export type AskSource = { id: string; title: string; href: string };
export type AskResponse =
  | { ok: true; answer: string; sources: AskSource[] }
  | { ok: false; message: string; sources: AskSource[] };

export function isAskResponse(value: unknown): value is AskResponse {
  if (
    typeof value !== "object" ||
    value === null ||
    !("ok" in value) ||
    !("sources" in value) ||
    !Array.isArray(value.sources) || value.sources.length > 12
  )
    return false;
  if (
    !value.sources.every(
      (source: unknown) =>
        typeof source === "object" &&
        source !== null &&
        "id" in source &&
        typeof source.id === "string" &&
        "title" in source &&
        typeof source.title === "string" && source.title.length <= 240 &&
        "href" in source &&
        typeof source.href === "string" &&
        source.href.length <= 1500 && isSafeSourceHref(source.href),
    )
  )
    return false;
  return value.ok === true
    ? "answer" in value && typeof value.answer === "string" && value.answer.length <= 2500
    : value.ok === false &&
        "message" in value &&
        typeof value.message === "string" && value.message.length <= 600;
}
