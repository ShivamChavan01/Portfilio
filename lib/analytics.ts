import posthog from "posthog-js";
import { site, work, type WorkEntry } from "./data";
import type { ProjectFilter } from "./projects";
import { isSafeSourceHref } from "./ask-shared";

type LinkEvent =
  | "resume_clicked"
  | "email_clicked"
  | "calendar_clicked"
  | "github_clicked"
  | "linkedin_clicked"
  | "external_link_clicked";
type AnalyticsEvents = Record<LinkEvent, { project?: WorkEntry["slug"] }> & {
  engineering_notes_opened: { project: WorkEntry["slug"] };
  project_filter_selected: { filter: ProjectFilter };
  ask_opened: Record<string, never>;
  ask_submitted: Record<string, never>;
};
type Client = Pick<typeof posthog, "init" | "capture">;
let readyClient: Client | undefined;

function projectForSlug(slug: string | null): WorkEntry["slug"] | undefined {
  return work.find((entry) => entry.slug === slug)?.slug;
}

export function getLinkEvent(href: string, projectAttribute: string | null = null) {
  const notes = work.find((entry) => entry.caseStudyHref === href);
  if (notes) {
    return {
      name: "engineering_notes_opened" as const,
      properties: { project: notes.slug },
    };
  }
  const project = projectForSlug(projectAttribute);
  let name: LinkEvent;
  if (href === site.resume) name = "resume_clicked";
  else if (href === `mailto:${site.email}`) name = "email_clicked";
  else {
    try {
      const url = new URL(href);
      if (url.protocol !== "https:") return null;
      if (url.hostname === "cal.com") name = "calendar_clicked";
      else if (url.hostname === "github.com") name = "github_clicked";
      else if (url.hostname === "www.linkedin.com") name = "linkedin_clicked";
      else name = "external_link_clicked";
    } catch {
      return null;
    }
  }
  return { name, properties: project ? { project } : {} };
}

export function trackEvent<K extends keyof AnalyticsEvents>(
  name: K,
  properties: AnalyticsEvents[K],
) {
  try {
    readyClient?.capture(name, properties);
  } catch {}
}

export function initializeAnalytics(
  token: string | undefined,
  host: string | undefined,
  client: Client = posthog,
) {
  if (readyClient) return true;
  if (!token?.trim() || !host?.trim()) return false;
  try {
    const url = new URL(host);
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash) return false;
    client.init(token, {
      api_host: host,
      // Native forms and links can leave the document immediately.
      request_batching: false,
      before_send: (event) => ({
        ...event,
        properties: { ...event.properties, portfolio_version: "plain" },
      }),
      capture_pageview: "history_change",
      capture_pageleave: true,
      autocapture: false,
      mask_all_text: true,
      mask_all_element_attributes: true,
      person_profiles: "identified_only",
      disable_session_recording: true,
      enable_heatmaps: false,
      capture_exceptions: false,
      disable_surveys: true,
      respect_dnt: true,
    });
    readyClient = client;
    return true;
  } catch {
    return false;
  }
}

export function handleAnalyticsClick(event: MouseEvent) {
  if (event.button !== 0 && event.button !== 1) return;
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest("a");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  if (link.closest(".ask-dock") && href !== `mailto:${site.email}` && !isSafeSourceHref(href)) return;
  const result = getLinkEvent(href, link.closest("[data-project]")?.getAttribute("data-project") ?? null);
  if (result) trackEvent(result.name, result.properties);
}

export function handlePortfolioToggle(event: Event) {
  const details = event.target;
  if (!(details instanceof HTMLDetailsElement) || !details.open) return;
  if (details.classList.contains("ask-dock")) {
    trackEvent("ask_opened", {});
    return;
  }
  const project = projectForSlug(details.closest("[data-project]")?.getAttribute("data-project") ?? null);
  if (project) trackEvent("engineering_notes_opened", { project });
}

export function handlePortfolioSubmit(event: Event) {
  if (event.target instanceof HTMLFormElement && event.target.id === "ask") {
    trackEvent("ask_submitted", {});
  }
}
