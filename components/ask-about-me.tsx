"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  isAskResponse,
  MAX_QUESTION_LENGTH,
  type AskResponse,
} from "@/lib/ask-shared";
import { site } from "@/lib/data";

type AnswerState =
  | { kind: "idle" }
  | { kind: "loading"; question: string }
  | { kind: "result"; question: string; response: AskResponse };
const suggestions = [
  "Why should we hire him?",
  "What are his strengths?",
  "What has he built with AI?",
  "What does he do at Eazytag?",
];
export default function AskAboutMe() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [state, setState] = useState<AnswerState>({ kind: "idle" });
  const launcher = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const controller = useRef<AbortController | null>(null);
  const pending = useRef(false);
  const wasOpen = useRef(false);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      controller.current?.abort();
    };
  }, []);
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      input.current?.focus();
    } else if (wasOpen.current)
      launcher.current?.focus({ preventScroll: true });
  }, [open]);
  async function ask(value: string) {
    const text = value.trim();
    if (!text || text.length > MAX_QUESTION_LENGTH || pending.current) return;
    pending.current = true;
    controller.current?.abort();
    const active = new AbortController();
    controller.current = active;
    setQuestion(text);
    setState({ kind: "loading", question: text });
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
        signal: AbortSignal.any([active.signal, AbortSignal.timeout(20000)]),
      });
      const body: unknown = await response.json();
      if (!isAskResponse(body)) throw new Error("Invalid response");
      if (!active.signal.aborted) {
        setState({ kind: "result", question: text, response: body });
        setQuestion("");
      }
    } catch {
      if (!active.signal.aborted)
        setState({
          kind: "result",
          question: text,
          response: {
            ok: false,
            message:
              "Couldn’t get an answer right now. Please try again or email Shivam.",
            sources: [],
          },
        });
    } finally {
      pending.current = false;
    }
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void ask(question);
  }
  return (
    <div className="ask-dock">
      {!open ? (
        <button
          ref={launcher}
          className="ask-launcher"
          type="button"
          aria-expanded={false}
          aria-controls="ask-panel"
          onClick={() => setOpen(true)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 3 14.3 9.7 21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3Z" />
          </svg>
          <span>Ask about my work…</span>
          <kbd>⌘ / Ctrl K</kbd>
        </button>
      ) : (
        <section
          className="ask-panel"
          id="ask-panel"
          role="dialog"
          aria-label="Ask about Shivam"
        >
          <div className="ask-panel-header">
            <div>
              <h2>Ask about Shivam</h2>
              <p>Projects, experience, and the tools I use.</p>
            </div>
            <button
              className="ask-close"
              type="button"
              aria-label="Close questions"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>
          <div
            className="ask-content"
            aria-live="polite"
            aria-busy={state.kind === "loading"}
          >
            {state.kind === "idle" ? (
              <>
                <p className="ask-intro">
                  Ask about the reviewed profile and project records. Source links show the basis for each answer.
                </p>
                <div className="ask-suggestions">
                  {suggestions.map((text) => (
                    <button
                      type="button"
                      key={text}
                      onClick={() => void ask(text)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                <p className="ask-question">{state.question}</p>
                {state.kind === "loading" ? (
                  <p className="ask-status" role="status">
                    Looking through the portfolio…
                  </p>
                ) : (
                  <>
                    {state.response.ok ? (
                      <p className="ask-answer">{state.response.answer}</p>
                    ) : (
                      <div className="ask-error" role="alert">
                        {state.response.message}{" "}
                        <a href={`mailto:${site.email}`}>Email Shivam ↗</a>
                      </div>
                    )}
                    {state.response.sources.length > 0 && (
                      <div className="ask-sources">
                        <p>Sources</p>
                        <div className="profile-links">
                          {state.response.sources.map((source) => (
                            <a
                              key={source.id}
                              href={source.href}
                              target={source.href.startsWith("#") ? undefined : "_blank"}
                              rel={source.href.startsWith("#") ? undefined : "noopener noreferrer"}
                              onClick={() => setOpen(false)}
                            >
                              {source.title} ↗
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <form className="ask-form" onSubmit={submit}>
            <label className="sr-only" htmlFor="ask-question">
              Question about Shivam
            </label>
            <input
              ref={input}
              id="ask-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask a question about me…"
              maxLength={MAX_QUESTION_LENGTH}
              autoComplete="off"
              disabled={state.kind === "loading"}
            />
            <button
              className="ask-submit"
              type="submit"
              disabled={!question.trim() || state.kind === "loading"}
              aria-label="Send question"
            >
              ↑
            </button>
          </form>
          <div className="ask-disclosure">
            <span>Supported questions are sent to Groq. Avoid personal details.</span>
            <a
              href="https://groq.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy ↗
            </a>
          </div>
        </section>
      )}
    </div>
  );
}
