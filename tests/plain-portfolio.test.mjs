import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { require } from "./register.mjs";

const { site, work, experience, openSource } = require("../lib/data.ts");
const html = readFileSync(
  new URL("../public/plain.html", import.meta.url),
  "utf8",
);
const escape = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

test("plain portfolio is a standalone accessible HTML document", () => {
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<html lang="en">/);
  assert.match(html, /name="viewport"/);
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(html, /<main>/);
  assert.doesNotMatch(
    html,
    /<script\b|<iframe\b|<canvas\b|onclick=|next\/static/i,
  );
  assert.doesNotMatch(html, /<link[^>]+rel="stylesheet"/i);
});

test("plain portfolio retains project evidence and contact destinations", () => {
  assert.ok(html.includes(`href="${escape(site.resume)}"`));
  assert.ok(html.includes(`href="mailto:${site.email}"`));
  assert.ok(html.includes(escape(experience.framing)));
  for (const entry of work) {
    assert.ok(html.includes(`id="project-${entry.slug}"`));
    assert.ok(html.includes(escape(entry.descriptor)));
    assert.ok(html.includes(escape(entry.summary)));
    for (const link of entry.links)
      assert.ok(html.includes(`href="${escape(link.href)}"`));
  }
  assert.equal((html.match(/<details>/g) || []).length, work.length);
  for (const entry of openSource)
    assert.ok(html.includes(escape(entry.description)));
});

test("plain portfolio navigation resolves and has no duplicate IDs", () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, target] of html.matchAll(/href="#([^"]+)"/g))
    assert.ok(ids.includes(target), target);
});

test("VoiceScope is presented as voice AI observability", () => {
  const entry = work.find((project) => project.slug === "voicescope");
  const { approvedFacts } = require("../lib/profile-facts.ts");
  assert.match(entry.descriptor, /voice AI observability/i);
  assert.match(entry.descriptor, /post-call analysis and STT review/i);
  assert.ok(html.includes(escape(entry.descriptor)));
  assert.match(approvedFacts.find((fact) => fact.id === "voicescope.overview").text, /voice AI observability/i);
});

test("plain introduction leads with engineering work and selected projects", () => {
  const header = html.match(/<header[^>]*>([\s\S]*?)<\/header>/)[1];
  assert.match(header, /I'm a full-stack engineer who loves finding gaps in products/);
  const invitation = /If I’ve built something you’d like to bring to your product, I’d love to join your team and keep working on it/;
  assert.doesNotMatch(header, invitation);
  assert.match(html.match(/<section id="contact"[^>]*>([\s\S]*?)<\/section>/)[1], invitation);
  assert.ok(html.includes('<a href="https://cutroom-editor.vercel.app/?demo=1">Compare two cuts</a>'));
  assert.match(header, /platform for running gyms/);
  assert.match(header, /Outside work, I'm building/);
  assert.match(header, /frontend, backend, and database/);
  assert.match(header, /reviewing calls and finding where they went wrong/);
  assert.match(header, /video editor with version control/);
  assert.match(header, /voice AI observability tool/);
  assert.doesNotMatch(html, /valence|goldlend/i);
  assert.ok(html.indexOf('<section id="projects"') < html.indexOf('<section id="experience"'));
});

test("readers can ask a question without JavaScript or putting it in the URL", () => {
  const form = html.match(/<form id="ask"[\s\S]*?<\/form>/)[0];
  assert.match(html, /<nav[^>]*>.*href="#ask">Ask<\/a>.*<\/nav>/);
  assert.ok(html.indexOf(form) > html.lastIndexOf('</section>'));
  assert.match(html, /<details class="ask-dock">\s*<summary>Ask about Shivam<\/summary>\s*<form id="ask"/);
  assert.match(form, /placeholder="Projects, skills or experience…"/);
  assert.match(form, /action="\/api\/ask" method="post"/);
  assert.match(form, /<label for="ask-question">Ask about my work<\/label>/);
  assert.match(form, /id="ask-question" name="question"/);
  assert.match(form, /<button type="submit">Ask<\/button>/);
});
