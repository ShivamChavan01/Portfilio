import {
  askGroq,
  createAskLimiter,
  findProfileFacts,
  isUnsafeQuestion,
  validateQuestion,
} from "@/lib/ask";
import { readBoundedJson } from "@/lib/bounded-json";
import type { AskResponse } from "@/lib/ask-shared";
export const runtime = "nodejs";
export const maxDuration = 20;
const allowRequest = createAskLimiter();
function respond(body: AskResponse, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...(status === 429 ? { "Retry-After": "60" } : {}),
    },
  });
}
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const publicHost =
        request.headers.get("host") ?? new URL(request.url).host;
      const parsed = new URL(origin);
      if (
        !["http:", "https:"].includes(parsed.protocol) ||
        parsed.host !== publicHost ||
        parsed.origin !== origin
      ) {
        return respond(
          {
            ok: false,
            message: "Please ask from this portfolio page.",
            sources: [],
          },
          403,
        );
      }
    } catch {
      return respond(
        {
          ok: false,
          message: "Please ask from this portfolio page.",
          sources: [],
        },
        403,
      );
    }
  }
  if (request.headers.get("sec-fetch-site") === "cross-site")
    return respond({ ok: false, message: "Please ask from this portfolio page.", sources: [] }, 403);
  if (request.headers.get("content-type")?.split(";", 1)[0].trim().toLowerCase() !== "application/json")
    return respond({ ok: false, message: "Please send a question as JSON.", sources: [] }, 415);
  let question: string | null;
  try {
    question = validateQuestion(await readBoundedJson({ body: request.body, maxBytes: 2048, signal: AbortSignal.any([request.signal, AbortSignal.timeout(3000)]) }));
  } catch {
    return respond(
      {
        ok: false,
        message:
          "The question could not be read. Please keep it under 500 characters.",
        sources: [],
      },
      400,
    );
  }
  if (!question)
    return respond(
      {
        ok: false,
        message: "Please enter a question between 1 and 500 characters.",
        sources: [],
      },
      400,
    );
  if (isUnsafeQuestion(question))
    return respond({ ok: false, message: "Please ask about Shivam’s public projects or experience. Requests for hidden instructions, credentials, or role changes are not supported.", sources: [] }, 403);
  const candidates = findProfileFacts(question);
  if (!candidates.length)
    return respond({ ok: true, answer: "That detail is not available in the reviewed portfolio records.", sources: [] });
  const key = process.env.GROQ_API_KEY?.trim();
  if (!key)
    return respond(
      {
        ok: false,
        message:
          "AI search is unavailable right now. You can browse the projects or email Shivam.",
        sources: [],
      },
      503,
    );
  const client =
    request.headers
      .get("x-forwarded-for")
      ?.split(",")[0]
      .trim()
      .slice(0, 100) || "local";
  if (!allowRequest(client))
    return respond(
      {
        ok: false,
        message:
          "A few questions are already being answered. Please try again in a minute.",
        sources: [],
      },
      429,
    );
  const result = await askGroq({
    question,
    candidates,
    key,
    model: process.env.GROQ_MODEL?.trim() || "openai/gpt-oss-20b",
    signal: AbortSignal.any([request.signal, AbortSignal.timeout(15000)]),
  });
  return result.ok
    ? respond({ ok: true, answer: result.answer, sources: result.sources })
    : respond({ ok: false, message: result.message, sources: [] }, result.status);
}
