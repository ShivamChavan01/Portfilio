import { test } from "node:test";
import assert from "node:assert/strict";
import { require } from "./register.mjs";
const { work, experience, openSource } = require("../lib/data.ts");
const { caseStudies } = require("../lib/case-studies.ts");
const { approvedFacts } = require("../lib/profile-facts.ts");
const { findProfileFacts } = require("../lib/ask.ts");

const fact = (id) => approvedFacts.find((entry) => entry.id === id);

test("newer project capabilities retain their delivery boundaries", () => {
  const cutroom = work.find((project) => project.slug === "cutroom");
  assert.match(cutroom.summary, /brief-grounded Assistant proposals/);
  assert.match(cutroom.summary, /source editing copies/);
  assert.match(fact("cutroom.delivery").text, /main.*successful CI/);
  assert.match(fact("cutroom.limits").text, /Rendered edited-sequence export/);
  const voicescope = work.find((project) => project.slug === "voicescope");
  assert.ok(voicescope.stack.includes("SQLite"));
  assert.ok(voicescope.stack.includes("FastEmbed"));
  assert.ok(!voicescope.stack.includes("ChromaDB"));
  assert.match(voicescope.summary, /pushed development branch/);
  assert.match(fact("voicescope.delivery").text, /No merged PR/);
  assert.match(
    fact("voicescope.stt-review").text,
    /human-verified timed reference/,
  );
});

test("excluded private projects are absent from public content and AI facts", () => {
  assert.ok(!work.some((project) => project.slug === "valence"));
  assert.ok(!caseStudies.some((study) => study.slug === "valence"));
  assert.ok(!approvedFacts.some((entry) => /valence|goldlend/i.test(JSON.stringify(entry))));
  assert.deepEqual(findProfileFacts("What is Valence?"), []);
  assert.deepEqual(findProfileFacts("What is Goldlend?"), []);
});

test("reviewed source references and employment wording match the refreshed audit", () => {
  for (const entry of approvedFacts) {
    for (const source of entry.evidence) {
      if (source.href.includes("/cutroom/blob/")) {
        assert.ok(
          source.href.includes("8faedfec10e9c7c2d200a4d586ee3c5b457f53c5"),
        );
      }
      if (source.href.includes("/voiceScope/blob/")) {
        assert.ok(
          source.href.includes("f661ef06fcdc9b1600edc118ce1939ef4a5906f5"),
        );
      }
    }
  }
  assert.match(experience.framing, /Recent merged work/);
  assert.ok(
    experience.bullets.some((bullet) => /Finance drilldowns/.test(bullet)),
  );
  assert.ok(
    experience.bullets.some((bullet) => /staff follow-up/.test(bullet)),
  );
  assert.ok(experience.bullets.some((bullet) => /gym-scoped/.test(bullet)));
  assert.match(fact("experience.recent").text, /shared review commits/);
  assert.match(
    fact("experience.recent").text,
    /Production deployment was not independently verified/,
  );
  assert.match(
    openSource.find((entry) => entry.name === "Eclipse JKube").description,
    /27 authored.*18 merged/,
  );
  assert.ok(
    openSource
      .find((entry) => entry.name === "Jira CI\/CD Status Panel")
      .links.some((link) => link.href.endsWith("/jira-cicd-panel")),
  );
});
