import { test } from "node:test";
import assert from "node:assert/strict";
import { require } from "./register.mjs";
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const { work, site, nav } = require("../lib/data.ts");
const { filterProjects } = require("../lib/projects.ts");
const { caseStudies } = require("../lib/case-studies.ts");
const render = (name) =>
  renderToStaticMarkup(
    React.createElement(require(`../components/${name}.tsx`).default),
  );

test("filters select all eight projects without mutating the source", () => {
  const original = [...work];
  assert.equal(filterProjects("All work").length, 8);
  assert.deepEqual(
    filterProjects("Products")
      .map((p) => p.slug)
      .sort(),
    ["cutroom", "strivo"],
  );
  assert.equal(filterProjects("AI systems").length, 3);
  assert.equal(filterProjects("Developer tools").length, 3);
  assert.deepEqual(work, original);
});
test("empty and unclassified project collections are handled", () => {
  assert.deepEqual(filterProjects("All work", []), []);
  assert.deepEqual(filterProjects("Products", []), []);
  const unclassified = { ...work[0], slug: "unknown-project" };
  assert.deepEqual(filterProjects("Products", [unclassified]), []);
  assert.deepEqual(filterProjects("All work", [unclassified]), [unclassified]);
});
test("project names and deep links are unique and every case-study link resolves", () => {
  assert.equal(new Set(work.map((p) => p.slug)).size, work.length);
  assert.equal(
    new Set(caseStudies.map((p) => p.anchor)).size,
    caseStudies.length,
  );
  for (const entry of work)
    if (entry.caseStudyHref)
      assert.ok(
        caseStudies.some((study) => `#${study.anchor}` === entry.caseStudyHref),
      );
});
test("selected work renders five illustrated projects, three archive entries, and filter controls", () => {
  const html = render("selected-work");
  assert.equal((html.match(/class="profile-project"/g) || []).length, 5);
  assert.equal((html.match(/class="profile-project-row"/g) || []).length, 3);
  for (const project of work) assert.ok(html.includes(project.name));
  assert.ok(html.includes('aria-label="Filter projects"'));
  assert.ok(html.includes('role="status"'));
  assert.ok(html.includes("Projects &amp; experiments"));
  for (const entry of work) assert.ok(html.includes(entry.summary.replaceAll("&", "&amp;").replaceAll("\"", "&quot;").replaceAll("'", "&#x27;")));
  assert.ok(!html.includes("<details"));
  for (const slug of ["cutroom", "open-agent", "voicescope", "strivo", "mcp-foundry"])
    assert.ok(html.includes(`data-project="${slug}"`));
});
test("hero identifies the engineer and exposes résumé and work destinations", () => {
  const html = render("hero");
  assert.equal((html.match(/<h1 /g) || []).length, 1);
  assert.ok(html.includes(site.resume.replaceAll("&", "&amp;")));
  assert.ok(html.includes('href="#work"'));
  assert.ok(html.includes(site.name));
  assert.ok(html.includes('class="profile-name font-geist"'));
  assert.ok(html.includes("profile-eyebrow"));
  assert.ok(html.includes(site.title));
  assert.ok(!html.includes("Good ideas."));
  assert.ok(!html.includes("orbit-stage"));
  assert.ok(decodeURIComponent(html).includes("/avatar.png"));
  for (const href of Object.values(site.links).filter(Boolean)) assert.ok(html.includes(href));
});
test("all illustrations render and are labeled as conceptual studies", () => {
  const {
    ProjectArt,
    WorkbenchVisual,
  } = require("../components/project-art.tsx");
  for (const kind of ["cutroom", "open-agent", "voicescope", "strivo", "mcp-foundry"]) {
    assert.ok(
      renderToStaticMarkup(React.createElement(ProjectArt, { kind })).includes(
        "CONCEPTUAL",
      ),
    );
    assert.ok(
      renderToStaticMarkup(
        React.createElement(WorkbenchVisual, { kind }),
      ).includes('aria-hidden="true"'),
    );
  }
});
test("career, contact, calendar and navigation remain available", () => {
  assert.ok(render("experience").includes("Eazytag"));
  const footer = render("footer");
  assert.ok(footer.includes(`mailto:${site.email}`));
  assert.ok(footer.includes("cal.com/shivamchavan"));
  assert.ok(!footer.includes("<script"));
  const header = render("nav");
  assert.ok(header.includes("Skip to content"));
  for (const anchor of nav.anchors) assert.ok(header.includes(anchor.href));
});
test("Cutroom notebook states prototype limits and exposes accessible project selection", () => {
  const html = render("case-studies/panels");
  assert.ok(html.includes("not implemented"));
  assert.ok(html.includes('aria-controls="case-study-cutroom"'));
  assert.ok(html.includes('role="tablist"'));
  assert.ok(html.includes('aria-selected="true"'));
});

test("bottom AI launcher is keyboard discoverable and does not load or expose secrets in markup", () => {
  const html = render("ask-about-me");
  assert.ok(html.includes("Ask about my work"));
  assert.ok(html.includes('aria-controls="ask-panel"'));
  assert.ok(!html.includes("api.groq.com"));
  assert.ok(!html.includes("GROQ_API_KEY"));
});

test("open source renders fetched activity and real contribution cells", async (t) => {
  t.mock.method(globalThis, "fetch", async (url) =>
    String(url).includes("search/issues")
      ? Response.json({
          items: [
            {
              title: "A real upstream change",
              html_url: "https://github.com/example/project/pull/1",
              number: 1,
              updated_at: "2026-11-01T00:00:00Z",
              repository_url: "https://api.github.com/repos/example/project",
            },
          ],
        })
      : Response.json({
          contributions: [{ date: "2026-11-01", count: 2, level: 1 }],
          total: { lastYear: 2 },
        }),
  );
  const html = renderToStaticMarkup(
    await require("../components/open-source.tsx").default(),
  );
  assert.ok(html.includes("A real upstream change"));
  assert.ok(html.includes("2 in the last year"));
  assert.ok(html.includes("2 contributions on 2026-11-01"));
});
test("open source preserves useful content when activity providers fail", async (t) => {
  t.mock.method(globalThis, "fetch", async () => {
    throw new Error("Provider offline");
  });
  const html = renderToStaticMarkup(
    await require("../components/open-source.tsx").default(),
  );
  assert.ok(html.includes("Eclipse JKube"));
  assert.ok(html.includes("saved snapshot"));
  assert.ok(html.includes("View GitHub activity"));
});


test("split page preserves the identity column, visible projects, and contact content", () => {
  const Home = require("../app/page.tsx").default;
  const sections = React.Children.toArray(Home().props.children);
  const main = sections.find((child) => child.type === "main");
  assert.equal(main.props.className, "portfolio-layout");
  const [identity, content] = React.Children.toArray(main.props.children);
  assert.equal(identity.type, require("../components/hero.tsx").default);
  assert.equal(content.props.className, "portfolio-content");
  const contentSections = React.Children.toArray(content.props.children);
  assert.equal(contentSections[0].type, require("../components/selected-work.tsx").default);
  assert.equal(contentSections.at(-1).type, require("../components/footer.tsx").default);
});


test("experience responsibilities and framing are visible without expanding controls", () => {
  const { experience } = require("../lib/data.ts");
  const html = render("experience");
  assert.ok(!html.includes("<details"));
  assert.ok(html.includes(experience.role));
  assert.ok(html.includes(experience.framing));
  assert.equal((html.match(/<li>/g) || []).length, experience.bullets.length);
});


test("notebook provides one selected project with full technical detail and stable links", () => {
  const html = render("case-studies/panels");
  assert.equal((html.match(/role="tab"/g) || []).length, caseStudies.length);
  assert.equal((html.match(/role="tabpanel"/g) || []).length, caseStudies.length);
  assert.equal((html.match(/aria-selected="true"/g) || []).length, 1);
  assert.equal((html.match(/tabindex="-1"/g) || []).length, caseStudies.length - 1);
  assert.equal((html.match(/hidden=""/g) || []).length, caseStudies.length - 1);
  for (const entry of caseStudies) {
    assert.equal(entry.flow.length, 4);
    assert.ok(html.includes(`aria-label="${entry.project} architecture overview"`));
    assert.ok(html.includes(`aria-label="Permalink to ${entry.project} engineering notes"`));
    assert.ok(html.includes(`aria-controls="${entry.anchor}"`));
    assert.ok(html.includes(`id="${entry.anchor}-body"`));
    assert.equal(new Set(entry.flow.map(step => step.label)).size, entry.flow.length);
  }
  assert.ok(html.includes("Outcome &amp; limits"));
  assert.ok(!html.includes("Read technical detail"));
  assert.ok(!html.includes("<iframe"));
});

test("engineering notes section has a descriptive heading and accurate count", () => {
  const html = render("case-studies");
  assert.ok(html.includes('id="case-studies-heading"'));
  assert.ok(html.includes("Engineering notes"));
  assert.ok(html.includes(`${String(caseStudies.length).padStart(2, "0")} notes`));
});


test("Open Agent is featured with concrete capabilities and VectorShift is removed", () => {
  const html = render("selected-work");
  assert.ok(!html.toLowerCase().includes("vectorshift"));
  assert.ok(!work.some(entry => entry.slug === "vectorshift"));
  const agent = work.find(entry => entry.slug === "open-agent");
  assert.ok(agent.highlights.length === 3);
  for (const highlight of agent.highlights) assert.ok(html.includes(highlight.label));
  assert.ok(html.includes('data-project="open-agent"'));
  const { ProjectArt } = require("../components/project-art.tsx");
  const art = renderToStaticMarkup(React.createElement(ProjectArt, { kind: "open-agent" }));
  assert.ok(art.includes("PROJECT WORKSPACE"));
  assert.ok(art.includes("token budgets"));
});
