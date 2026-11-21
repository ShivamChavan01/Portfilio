import { test } from "node:test";
import assert from "node:assert/strict";
import { require } from "./register.mjs";
const { site } = require("../lib/data.ts");
const analyticsPath = require.resolve("../lib/analytics.ts");
function freshAnalytics() {
  delete require.cache[analyticsPath];
  return require(analyticsPath);
}

test("link events classify destinations and validate project context", () => {
  const { getLinkEvent } = freshAnalytics();
  for (const [href, name] of [
    [site.resume, "resume_clicked"],
    [`mailto:${site.email}`, "email_clicked"],
    ["#case-study-cutroom", "engineering_notes_opened"],
    ["https://cal.com/shivamchavan", "calendar_clicked"],
    [site.links.github, "github_clicked"],
    [site.links.linkedin, "linkedin_clicked"],
    ["https://cutroom-editor.vercel.app/", "external_link_clicked"],
  ]) assert.equal(getLinkEvent(href)?.name, name);
  assert.deepEqual(getLinkEvent("#case-study-strivo", "cutroom").properties, { project: "strivo" });
  assert.deepEqual(getLinkEvent(site.links.github, "autoace").properties, { project: "autoace" });
  assert.deepEqual(getLinkEvent(site.links.github, "unknown").properties, {});
  for (const href of ["", "#work", "#case-study-unknown", "invalid", "javascript:alert(1)", "mailto:other@example.com"]) {
    assert.equal(getLinkEvent(href), null);
  }
  assert.equal(getLinkEvent("https://cal.com.evil.example/").name, "external_link_clicked");
});

test("invalid configuration and initialization failure never capture, and retries succeed", () => {
  const { initializeAnalytics, trackEvent } = freshAnalytics();
  const captured = [];
  const client = { init() { throw new Error("blocked"); }, capture(...args) { captured.push(args); } };
  for (const [token, host] of [[undefined, undefined], ["", "https://us.i.posthog.com"], [" ", "https://us.i.posthog.com"], ["test", ""], ["test", "invalid"], ["test", "http://example.com"], ["test", "https://user:pass@example.com"]]) {
    assert.equal(initializeAnalytics(token, host, client), false);
  }
  assert.equal(initializeAnalytics("test", "https://us.i.posthog.com", client), false);
  trackEvent("ask_opened", {});
  assert.deepEqual(captured, []);
  let options;
  let initializations = 0;
  const working = { init(token, config) { initializations++; assert.equal(token, "test"); options = config; }, capture(...args) { captured.push(args); } };
  assert.equal(initializeAnalytics("test", "https://eu.i.posthog.com", working), true);
  assert.equal(initializeAnalytics("test", "https://eu.i.posthog.com", working), true);
  assert.equal(initializations, 1);
  assert.deepEqual(options.before_send({ event: "$pageview", properties: { path: "/" } }).properties, { path: "/", portfolio_version: "plain" });
  assert.equal(options.api_host, "https://eu.i.posthog.com");
  assert.equal(options.request_batching, false);
  assert.equal(options.autocapture, false);
  assert.equal(options.disable_session_recording, true);
  assert.equal(options.person_profiles, "identified_only");
  assert.equal(options.mask_all_text, true);
  assert.equal(options.mask_all_element_attributes, true);
  assert.equal(options.capture_pageview, "history_change");
  trackEvent("project_filter_selected", { filter: "Products" });
  assert.deepEqual(captured, [["project_filter_selected", { filter: "Products" }]]);
});

test("capture errors do not interrupt interactions", () => {
  const { initializeAnalytics, trackEvent } = freshAnalytics();
  initializeAnalytics("test", "https://us.i.posthog.com", { init() {}, capture() { throw new Error("blocked"); } });
  assert.doesNotThrow(() => trackEvent("ask_submitted", {}));
});

test("entrypoint listens for primary and middle link clicks, including safe Ask links", () => {
  const analytics = freshAnalytics();
  const captured = [];
  analytics.initializeAnalytics("test", "https://us.i.posthog.com", { init() {}, capture(...args) { captured.push(args); } });
  const oldDocument = globalThis.document;
  const oldElement = globalThis.Element;
  const listeners = {};
  class Element {
    constructor(href, project = null, ask = false) { this.href = href; this.project = project; this.ask = ask; }
    closest(selector) {
      if (selector === "a") return this;
      if (selector === "[data-project]") return this.project ? this : null;
      if (selector === ".ask-dock") return this.ask ? this : null;
      return null;
    }
    getAttribute(name) { return name === "href" ? this.href : this.project; }
  }
  globalThis.Element = Element;
  globalThis.document = { addEventListener(name, callback) { listeners[name] = callback; } };
  const entrypoint = require.resolve("../instrumentation-client.ts");
  delete require.cache[entrypoint];
  try {
    require(entrypoint);
    assert.deepEqual(Object.keys(listeners).sort(), ["auxclick", "click", "submit", "toggle"]);
    listeners.click({ button: 0, target: new Element("#case-study-strivo") });
    listeners.auxclick({ button: 1, target: new Element(site.links.github, "autoace") });
    listeners.click({ button: 0, target: new Element(site.links.github, null, true) });
    listeners.click({ button: 0, target: new Element(`mailto:${site.email}`, null, true) });
    listeners.click({ button: 0, target: new Element("https://evil.example/private?question=secret", null, true) });
    listeners.auxclick({ button: 2, target: new Element(site.resume) });
    listeners.click({ button: 0, target: null });
    assert.deepEqual(captured, [
      ["engineering_notes_opened", { project: "strivo" }],
      ["github_clicked", { project: "autoace" }],
      ["github_clicked", {}],
      ["email_clicked", {}],
    ]);
  } finally {
    globalThis.document = oldDocument;
    globalThis.Element = oldElement;
    delete require.cache[entrypoint];
  }
});

test("native Ask and project notes record actions without question text", () => {
  const analytics = freshAnalytics();
  const captured = [];
  analytics.initializeAnalytics("test", "https://us.i.posthog.com", { init() {}, capture(...args) { captured.push(args); } });
  const originalDetails = globalThis.HTMLDetailsElement;
  const originalForm = globalThis.HTMLFormElement;
  try {
    globalThis.HTMLDetailsElement = class {
      constructor(open, dock) { this.open = open; this.classList = { contains: () => dock }; }
      closest() { return { getAttribute: () => "cutroom" }; }
    };
    globalThis.HTMLFormElement = class { id = "ask"; };
    for (const [open, dock] of [[false, true], [true, true], [true, false]]) {
      analytics.handlePortfolioToggle({ target: new HTMLDetailsElement(open, dock) });
    }
    analytics.handlePortfolioSubmit({ target: new HTMLFormElement() });
    assert.deepEqual(captured, [
      ["ask_opened", {}], ["engineering_notes_opened", { project: "cutroom" }], ["ask_submitted", {}],
    ]);
  } finally {
    globalThis.HTMLDetailsElement = originalDetails;
    globalThis.HTMLFormElement = originalForm;
  }
});
