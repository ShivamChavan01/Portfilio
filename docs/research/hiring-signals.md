# Hiring Signals: What Actually Works for AI-Engineer Portfolios

Research compiled 2026-09-03. Sources are real hiring-side discussions (Hacker News threads with named
commenters, a survey of 60+ hiring managers, recruiter/team-lead quotes) rather than generic listicles.
Reddit itself blocked direct scraping from this environment, so Reddit evidence comes via search-index
summaries and is labeled as such.

## Method and sources

Searched for recruiter/EM discussions of portfolios; fetched and parsed the most substantive results:

1. **Ask HN: What portfolio items are most impressive to you when hiring developers?** (35 comments, 67 pts)
   — https://news.ycombinator.com/item?id=14420802
2. **Ask HN: Hiring managers, describe the best developer portfolio / personal site**
   — https://news.ycombinator.com/item?id=21191906
3. **Ask HN: What signals do you look for when hiring?** (2026-era thread)
   — https://news.ycombinator.com/item?id=47409463
4. **Ask HN: Is a portfolio a real need for a junior?** — https://news.ycombinator.com/item?id=40875989
5. **Ask HN: What projects do hiring managers like to see?** — https://news.ycombinator.com/item?id=43134745
6. **Tell HN: My advice after I applied to 450 positions before getting hired**
   — https://news.ycombinator.com/item?id=45073589
7. **Ask HN: Anyone is an "AI Engineer"? What does your job look like?** — https://news.ycombinator.com/item?id=44438053
8. **"Don't waste time on a (React) portfolio website — 60+ hiring managers and a survey"**, Johannes
   Kettmann, profy.dev (Oct 2022, archived snapshot) — https://profy.dev/article/portfolio-websites-survey
9. **HN comment searches** across threads on hiring/resumes/portfolios (comments by h4b4n3r0, chucky_z,
   morgante, hgh, komali2, fzwang, Aurornis, rnoorda, pnathan, xb95, nhashem, danielweber, wikwocket)
   and on vibe-coding/hiring (SV_BubbleTime, abc123abc123, theultdev, rwyinuse).
10. **"5 AI Portfolio Projects That Actually Get You Hired in 2026"** (dev.to) — content marketing, partly
    AI-written per its own bio; used only for AI-specific claims and labeled low-trust.
    — https://dev.to/klement_gunndu/5-ai-portfolio-projects-that-actually-get-you-hired-in-2026-5bpl
11. Reddit thread themes (via search summaries only): r/cscareerquestions "Are recruiters even looking at
    my GitHub or portfolio website?", r/nextjs "What makes a developer's portfolio stand out",
    r/webdev "What do hiring managers look for in portfolio websites", r/reactjs recruiter thread.

## Headline finding

Portfolios are a **secondary, asymmetric** signal: most hiring managers glance, a minority care deeply,
and a good one can shortcut interviews — while a bad one actively hurts. GitHub projects, shipped
software, and writing consistently outrank the website itself. In the LLM era, the bar moved from
"can you produce code" to "can you prove the work is real and production-grade."

Quantified anchor (profy.dev survey of 60+ recruiters/team leads):
- 65% would "definitely look" at a junior's portfolio site; 93% "likely to have a look."
- But 51% said a candidate without a site has the *same* chances; 85% said only slightly lower at most.
- Conclusion stated by the author: "The majority of hiring managers look at your website... but don't
  give a crap." GitHub projects are named "superior to a personal website. By a lot."

## (a) Top 10 evidence-backed signals that make a portfolio work

1. **Shipped and deployed beats everything.** "Anything that has shipped" (edoceo, HN 14420802). "Look
   for 'fit & finish' in a completed app... I like to see that polish" (indescions_2017, same thread).
   One commenter interviews candidates on a live AWS instance with login credentials (wibbleywobbley).
   "This candidate ships. They don't just prototype — they deploy" (dev.to, low-trust).
2. **Real users, revenue, or hard deployment numbers.** "Something that has shipped, acquired customers
   and made money" (20years, HN 14420802). "I'm only impressed by side projects if they had users and/or
   MRR" (rozenmd, HN 47409463). "Side projects that are production-grade with customers and recurring
   revenue" (rvz, same thread). "A team improving load time from 10s to 0.5s" as a rare, credible
   achievement (ponyous, HN 21191906).
3. **Open-source contributions are the strongest verifiable proof.** "Committing code to open source
   projects is always going to be a stronger example of work than a personal project. It shows you can
   work with other people, and handle feedback" (nilawafer, HN 40875989). "I'd take popular open source
   contributors over other candidates all things being equal" (kasey_junk, HN 14420802). rvz's bar:
   contributions to high-profile repos "with code-review in the open with core maintainers" (HN 47409463).
4. **Writing that exposes your decision process is the highest-leverage add-on.** "Associated blog posts
   that explain how your code works and why though? I'd put your name to the top of the 'get this person
   in' list on the spot" (corobo, HN 14420802). In the AI era, writing matters more: "What I look for
   instead is more information on the process of creation, which usually means examining their writing.
   How did they get the idea? How did they think about what features..." (fzwang, hiring manager, HN
   comment on 45273403). "I would prefer a non-experienced person with a bunch of articles over a person
   with less than 1 year of experience" (Dmytro K., team lead, profy.dev survey).
5. **You can defend every technical decision in the project.** Portfolios that let interviewers "ask you
   about your technical decisions... follow your thought process... ask what you would improve" turn the
   interview into home turf (Sam L., recruiter, profy.dev). "Technical competency plus the ability to
   explain design decisions and trade-offs" — merely plugging modules together "isn't worth highlighting"
   (Traster, HN 21191906). "It's practically an automatic interview... and hire if you can talk
   intelligently and engagingly about what you've worked on" (hgh, hiring manager, HN comment on 8582793).
6. **A strong portfolio can bypass interview stages.** "As a hiring manager, if someone has a portfolio
   I definitely judge them on it, and if it's good it allows me to bypass huge swaths of
   technical/coding interview stuff" (chucky_z, HN comment on 23748199). komali2 was "told explicitly I
   was hired mostly because the hiring manager liked my website," and at another company "one of the
   engineers found a bug on my website and my interview was to pair program a fix with him" (HN comment).
7. **Depth beats breadth: one long-iterated project.** "One project that you iterated on over 3/6/12
   months, changed technologies, refactored, and ultimately built/released something" (purvesta, hiring
   manager, HN 43134745). Counter-signal: "listing too much — looking like an all-rounder can hurt if a
   specialist is needed" (Traster, HN 21191906).
8. **Communication artifacts inside repos: READMEs, commit history, issues.** "A meaningful commit
   message and git history is useful too. I don't want developers that `git commit -m 'Updated stuff.'`"
   (purvesta, HN 43134745). "If you run an open project on GitHub I'll also look at your wiki and issues,
   to evaluate communication" (edoceo, HN 14420802). "A good README is a must-have for any portfolio
   project" (profy.dev).
9. **For AI work specifically: evals, ground truth, and reliability engineering.** Real AI engineers
   describe the job as "running accuracy and related metrics... gathering (or building) ground truth data
   to be able to do Accuracy evaluations... Bedrock Guardrails... Reranker... rate-limiters, resilience4j
   kind of stuff" (valbaca, HN 44438053); "a lot of glue code and software to manage the context of the
   LLM, query for data, integrate with other systems" plus front-end interfaces (csh0, same thread). A
   portfolio that demonstrates measured evals (e.g., hallucination rate tracked against labeled samples,
   regression-gated in CI) reads as production rather than demo (dev.to, low-trust corroboration).
10. **Personality and motivation — the "would I sit next to you" test.** "Can you write code (bare
    minimum required for the job) and a sense of who you are... Do I want to sit next to you for the next
    six months?... don't be a robot. Inject personality into your portfolio/site" (Jemaclus, hiring
    manager, HN 21191906). "Anyone can learn to code but you can't teach someone how to enjoy what
    they're doing" (Jason M., team lead, profy.dev). "I like to see projects that people are obviously
    passionate about" (camhenlin, HN 14420802).

## (b) Top 10 credibility killers

1. **Tutorial clones and toy CRUD.** "If the portfolio looks like the usual university assignments or
   tutorial stuff (to-do list apps, for example) I probably won't care much about those" (gregjor, HN
   43134745). AI-specific: every other candidate has "a chatbot, a sentiment analyzer, and a fine-tuned
   model" (dev.to, low-trust). Hiring managers now "put less weight on generic CRUD apps" because AI
   assistance made them trivially producible (fzwang).
2. **Unverifiable authorship in the LLM era.** "Most github repos are not that impressive as I have no
   idea how long it took to write... or if the candidate even wrote it at all" (lastofus, HN 14420802).
   "All of that can be faked, gamed and cheated by LLMs in 2026" (rvz, HN 47409463). "It's too hard to
   tell if anyone knows anything anymore. Everyone has the right or right enough answers... The bar to
   detect bullshit has been moved deeper into the non-detectable range" (SV_BubbleTime, HN comment).
3. **A bad or broken website.** "Having no site doesn't affect the interview process. Having a poor
   site, however, does not reflect well on a candidate" (Krishna Glick, team lead at iHeartMedia,
   profy.dev). "Better to have no website than a bad one" (Débora Esteves, frontend team lead at LIQID,
   profy.dev).
4. **Stale/unmaintained links and demos.** "I've seen broken links in portfolios that were only a few
   weeks or months old" (Tiago Dionesto Willrich da Silva, engineering team lead at Zenjob, profy.dev).
   "If a personal website hasn't been up-kept then it could hinder their application" (Louis H.,
   recruiter, profy.dev).
5. **Auth-walled or friction-gated work.** "You can't casually point a recruiter/hiring manager to view
   the portfolio — since it's likely they won't bother to sign up" (billturner, HN comment on 1232163).
6. **Buzzword stuffing and fake-sounding metrics.** "Screen a lot of resumes and you'll get tired of
   seeing 'Boosted revenue by 23% by decreasing deploy times by 64%.' This communicates nothing useful"
   (Aurornis, HN comment on 47278426). "Keyword stuffing words like 'Vibecoding' as your #1 skill...
   hurting you" (Aurornis, HN comment on 43963434). Recruiters do primitive buzzword pattern-matching,
   which rewards generic noise and punishes specificity (nhashem, HN comment on 4807683).
7. **Vibe-coded slop with no fundamentals.** "Never hire vibe coding brogrammers who have no idea about
   basics... Usually they leave behind a mess which soon breaks" (abc123abc123, HN comment on 46431049).
   Insider account of a YC company running a vibe-coding "SEAL team" building "vibe coded monstrosities
   without any regard to safety" (throw-vibec0d3, HN comment on 44193018).
8. **Walls of noise instead of organized evidence.** "Good organisation of the information is key"
   (Traster, HN 21191906); "You have too much noise" on a dense CV (pnathan, hiring manager, HN comment
   on 4247367); typos/grammar failures are an instant negative (xb95, hiring manager, HN comment on
   5307184). Community consensus in r/webdev threads (search summaries): broken links, skill bars, and
   walls of text are the most-cited turn-offs.
9. **The "half-baked repo collection."** "Some half baked collection of github repos proving to me
   you've done the first couple chapters of several hot 'how to' books" (kasey_junk, HN 14420802).
10. **Treating the portfolio as the strategy.** "Most recruiters are looking for consistent work
    experience with reputable companies. Sure portfolios help but it's not even remotely on the same
    spectrum" (Peroni, 20-year startup recruiter, HN 47409463). "A seasoned hiring manager isn't going to
    demand a portfolio" (danielweber, HN comment on 8041674). "The portfolio -- which will mostly get
    barely glanced at" (gregjor). Large companies "will not even look" (h4b4n3r0, former hiring manager;
    portfolios matter mostly for juniors and startups).

## (c) Direct quotes (quick-reference)

| Signal / claim | Quote | Who, where |
|---|---|---|
| Blog posts about code | "I'd put your name to the top of the 'get this person in' list on the spot" | corobo, HN 14420802 |
| Portfolio shortcuts interviews | "it allows me to bypass huge swaths of technical/coding interview stuff" | chucky_z, HN comment |
| Rare but strong signal | "It's practically an automatic interview" | hgh, hiring manager, HN comment |
| Hired off the site | "I was told explicitly I was hired mostly because the hiring manager liked my website" | komali2, HN comment |
| GitHub > website | "I would give higher priority to GitHub" | Débora Esteves (LIQID), profy.dev |
| Website mostly ignored | "GitHub and personal projects are nearly always mentioned and talked about" (vs. never the site) | Sam L., recruiter, profy.dev |
| No site is fine | "51% of the hiring managers said that your chances... would not be lower" | profy.dev survey (60+ HM) |
| AI-era verification | "can be faked, gamed and cheated by LLMs in 2026" | rvz, HN 47409463 |
| Writing > repos now | "more information on the process of creation, which usually means examining their writing" | fzwang, hiring manager, HN |
| Open source > personal project | "always going to be a stronger example of work" | nilawafer, HN 40875989 |
| Real AI engineering | "running accuracy and related metrics... ground truth data... Guardrails... rate-limiters" | valbaca, HN 44438053 |
| AI engineer defined | "Vendor LLM APIs + Software engineer = AI Engineer" | usgroup, HN 44438053 |
| Shipped + revenue | "Something that has shipped, acquired customers and made money" | 20years, HN 14420802 |
| Users/MRR bar | "only impressed by side projects if they had users and/or MRR" | rozenmd, HN 47409463 |

## (d) Implications for a Full Stack / AI engineer portfolio in 2026

1. **Make it an evidence site, not a brochure.** Two to three deep, deployed, end-to-end apps (real
   auth, state, APIs, payments where plausible) with live URLs. The AI engineer role itself is "LLM APIs
   + software engineering" including front-ends (csh0), so full-stack depth is the differentiator over
   notebook-style ML portfolios.
2. **Show the reliability layer, not just the demo.** Each AI project should visibly include: an eval
   set with labeled ground truth and a measured accuracy/hallucination rate; guardrails/fallbacks for
   when the model fails; structured/validated outputs; cost and latency notes. This mirrors what actual
   AI engineers do daily (valbaca, kelseyfrog) and directly answers the 2026 "is this real or generated"
   skepticism (rvz, SV_BubbleTime).
3. **Publish the decision trail.** README with problem, architecture, trade-offs, and what you'd change;
   a short blog post per major project explaining why (corobo, fzwang, profy.dev). Clean commit history
   (purvesta) and, if possible, one open-source contribution with review history (rvz, kasey_junk).
4. **Make every claim verifiable and instantly inspectable.** No login walls (billturner); a 1-2 minute
   demo video plus running demo; screenshots; metrics with before/after numbers you can defend
   (ponyous's 10s to 0.5s style claims). Everything is treated as possibly LLM-faked until proven.
5. **Keep one polished site — but budget hours, not weeks.** The site's job is fast scanning and
   personality (Jemaclus); the projects' job is proof. A broken or ugly site is worse than none
   (profy.dev), and 51% of hiring managers give none at all. Maintenance matters: no dead demos.
6. **Remember the funnel.** Recruiters/ATS gate on the resume first (Peroni, nhashem, profy.dev); the
   portfolio mostly converts startup interviews, not big-company screens (h4b4n3r0, komali2). Target
   startups/small teams, get the resume to a human, and expect the portfolio to be your interview
   home-field advantage — "you start the interview by talking about something where you're the expert"
   (Sam L., profy.dev).
7. **Signal AI-tool fluency without slop.** Some hiring managers now filter out candidates "adverse to
   AI" (theultdev), while despising vibe-coded messes (abc123abc123). The winning stance in the evidence:
   use AI agents openly, but show human review, tests, evals, and architecture ownership.
8. **Avoid the sea of sameness.** Chatbot wrapper + sentiment analyzer + fine-tuned model is the 2026
   equivalent of the to-do list app. Choose one real domain problem (with users if possible), and let
   the write-up show how you thought about who it's for and why (agitator, fzwang).

## Notes and caveats

- Reddit content could not be fetched directly (blocked); Reddit themes above come from search-index
  summaries and should be treated as directional, not quoted evidence.
- The dev.to "5 AI portfolio projects" piece explicitly states its articles are agent-written; used only
  for AI-specific phrasing and marked low-trust.
- The profy.dev survey is 2022 data (pre-LLM) for the site-vs-GitHub question; its recruiting-lead quotes
  remain the largest direct sample of hiring-side opinions found.
- Survivorship bias applies: HN hiring managers skew startup/senior; enterprise and FAANG processes
  (per komali2, h4b4n3r0) largely ignore portfolios entirely.
