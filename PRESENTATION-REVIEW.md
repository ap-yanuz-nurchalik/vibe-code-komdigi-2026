# Presentation Review Draft
**Building with AI: From Idea to Deployed App**
Yanuz Nurchalik · Head of Product Core, AstraPay · KOMDIGI
Hack-Go-Thon 2026 · 7 April 2026 · 09:30–09:45

> **How to use this file**: Review each slide's content and speaker notes.
> Edit anything — add/remove bullets, rewrite notes in your own voice, cut slides, change order.
> Once you're happy, we'll build the PPTX + Slidev version from this source of truth.

---

## SLIDE 1 · Cover
**Duration: ~20 sec**

### On Screen
- **Title:** Building with AI: From Idea to Deployed App
- **Subtitle:** What every developer needs to know in 2026
- Yanuz Nurchalik · Head of Product Core, **AstraPay**
- KOMDIGI · Hack-Go-Thon 2026 · 7 April 2026

### Speaker Notes
> Welcome everyone. My name is Yanuz, I lead product for the core platform at AstraPay —
> and I'm here today on behalf of KOMDIGI.
>
> I have 15 minutes. No fluff. By the time I'm done, you'll know exactly how
> AI fits into every phase of building a real app — and what that means for you
> starting at 10:15 today.

---

## SLIDE 2 · The World Changed in 2025
**Duration: ~1 min**

### On Screen
Three stat cards:
- **10×** — AI agents write more code than humans in 2026
- **3–5 days** — From idea to deployed app *(was 3–6 months)*
- **1 week** — Cloudflare rebuilt Next.js with 1 engineer + AI (Feb 2026)

### Speaker Notes
> Here's what changed.
>
> Andrej Karpathy — one of the founders of OpenAI — coined a term in early 2025: "vibe coding."
> The idea is simple: stop writing code line by line, and just describe what you want.
> Let the AI figure out the implementation.
>
> Teams that used to need 3 to 6 months to ship a product are doing it in 3 to 5 days.
> Cloudflare rebuilt 94% of the Next.js API surface — a massive project —
> with one engineer and an AI agent in one week.
>
> This isn't a future thing. This is happening right now.

---

## SLIDE 3 · How We Build Software: Three Levels
**Duration: ~1.5 min**

### On Screen
Three cards side by side:

| | Level 1 | Level 2 | Level 3 |
|---|---|---|---|
| **Name** | Traditional | AI-Assisted | AI-Agentic |
| **How** | You write every line | AI suggests, you type | You describe, AI executes |
| **Tools** | IDE + Stack Overflow | Copilot, Stitch, Cursor | Claude Code, OpenCode |
| **MVP time** | 3–6 months | 2–4 weeks | 3–5 days |

Caption: *"Anton covers Level 2 right after this. Levels aren't competing — they compound."*

### Speaker Notes
> Let me frame this as three levels — and I want to be clear: these aren't competing approaches.
> They build on each other.
>
> Level 1 — traditional. Write every line, fight Stack Overflow. Most developers start here.
>
> Level 2 — AI-assisted. Copilot suggests code as you type. Google Stitch designs your UI.
> You still drive, but AI accelerates every keystroke.
> Anton will walk you through Level 2 in the session right after me — pay attention to that one.
>
> Level 3 — agentic. You describe the outcome, the AI executes end-to-end.
> Not better in every phase — but dramatically faster for the right tasks.
>
> Today I'll show you which phase belongs at which level.

---

## SLIDE 4 · The Agentic Loop
**Duration: ~45 sec**

### On Screen
Flowchart:
```
You Describe → Agent Plans → Agent Executes → You Verify
                                                   ↓
                                          ✓ Ship   or   ↩ Refine → [back to start]
```
Caption: *"You touch the keyboard twice — to describe, and to verify."*

### Speaker Notes
> When you use an agentic tool — Claude Code, OpenCode — this is the loop.
>
> You describe. The agent reads your codebase, makes a plan, writes files,
> installs packages, runs tests. You verify the output. If it looks good, ship.
> If not, redirect in one sentence and repeat.
>
> Notice: you're not writing code. You're directing and reviewing.
> Think of yourself as the product manager and architect — the AI is your engineering team.
>
> But here's the part most people skip — and it's the most important one.

---

## SLIDE 5 · Phase 0: Planning — The Most Important Step
**Duration: ~1.5 min**

### On Screen
Large highlight card:

**💡 Every experienced agentic developer agrees:**
> "The quality of your output = the quality of your context."

Two columns:

**❌ What most beginners do**
```
❯ claude "build me an app"

? Unclear intent detected.
  What kind of app?
  Who are the users?
  What should it do?
  → Produces generic boilerplate
```

**✅ What good agentic developers do**
```
❯ claude "Read PRD.md. The app is a permit tracker
         for government staff. Key flows: submit,
         review, approve. Users: staff + admin.
         Start with the data model. Plan first."

◆ Plan mode: reviewing PRD.md...
◆ Proposing: 3 data models, 5 routes
◆ Awaiting your approval before executing
```

Caption: *"Planning isn't overhead. Planning IS the senior engineer's job in agentic development."*

### Speaker Notes
> This is the slide I really want you to remember.
>
> Every senior engineer who has adopted agentic development says the same thing:
> the bottleneck is never the AI — it's the clarity of your instructions.
>
> If you describe what you want vaguely, you get vague, generic code that you'll
> spend hours fixing.
>
> If you write a clear plan first — user personas, data model, API contracts,
> edge cases, success criteria — the agent executes it precisely.
>
> In Claude Code, you can literally say "plan only, don't execute" and it will
> show you its proposed changes before touching a single file.
> Approve the plan. Then let it run.
>
> Planning is not overhead. It's the superpower.
> The engineers who get 10x results from AI are the ones who think clearly
> before they type a single prompt.

---

## SLIDE 6 · Phase 1: PRD — Let AI Draft It
**Duration: ~45 sec**

### On Screen
Two columns:

**❌ Traditional (1–2 weeks)**
- Stakeholder workshops, email chains
- 20–50 page Word doc, approval cycles
- Outdated before development starts
- Knowledge stuck in people's heads

**✅ Agentic (~1 hour)**
```
❯ claude "I want to build a permit tracking app
         for students. Who are the users? What
         features? Write PRD.md."

✓ Analyzing requirements...
✓ Writing PRD.md
  · User personas: 3 defined
  · Features: 12 prioritized
  · Success metrics: set
✓ PRD.md saved to disk — tracked in git
```

### Speaker Notes
> Once you have a plan, the PRD is where the agent really shines.
>
> In traditional development, just agreeing on what to build takes 1 to 2 weeks.
> Meetings, Word documents, email threads.
>
> With an agent, you have a conversation. Describe the problem,
> the agent writes a structured PRD markdown file directly to your project.
> One hour. And unlike a Word doc, this lives in git — it evolves with your project.
>
> This becomes the context file the agent reads every time it touches your code.

---

## SLIDE 7 · Phase 2: Design — Use the Right AI Tool
**Duration: ~1 min**

### On Screen
Two columns:

**⚠️ Agentic (terminal) — not ideal here**
- Visual design needs visual iteration
- Terminal agents output code, not mockups
- Hard to evaluate without seeing it

**✅ AI Design Tools — this is the right tier**

| Tool | What it does |
|---|---|
| **Google Stitch** | Describe UI → production-ready React/Next.js |
| **v0 by Vercel** | Prompt → shadcn/Tailwind components |
| **Figma AI** | Design in Figma, AI fills the gaps |
| **Lovable** | Full UI from natural language |

*"Generate your UI visually → export to code → agentic agent integrates it."*

### Speaker Notes
> Here's where I want to be honest: not every phase is better with a terminal agent.
> Design is one where purpose-built AI tools win.
>
> Google Stitch — which Anton will cover — lets you describe a screen
> and it generates production-ready React components with Tailwind.
> You see it instantly. You iterate visually. That's the right tool for design.
>
> What you do with agentic is the integration step:
> once you have your Stitch components, you hand them to the agent
> and say "integrate these into the project." That's where it takes over.
>
> Use the right tool at the right phase.

---

## SLIDE 8 · Phase 3: Frontend — Scaffold and Wire
**Duration: ~45 sec**

### On Screen
Two columns:

**❌ Traditional (4–8 weeks)**
- Figma handoff → pixel-perfect grind
- Routing, state management, forms from scratch
- 1–3 screens per developer per day

**✅ Agentic (1–2 days)**
```
❯ claude "Scaffold Next.js 15 + Tailwind + shadcn.
         Wire the Stitch components into the
         dashboard with permit table + filters."

✓ create-next-app scaffolded
✓ Stitch components integrated
✓ app/dashboard/page.tsx
✓ DataTable with status filters
✓ Mobile responsive: yes

🚀  5–10 screens/day
```

### Speaker Notes
> Once you have your design components from Stitch,
> the agent handles the wiring: routing, state, data-fetching, responsiveness.
>
> One prompt: scaffold Next.js, integrate the design components, wire up the dashboard.
> It's done in minutes. Fully connected, mobile responsive.
>
> You go from 1–3 screens a day to 5–10 screens a day.

---

## SLIDE 9 · Phase 4: Backend — Full API in Hours
**Duration: ~45 sec**

### On Screen
Two columns:

**❌ Traditional (4–8 weeks)**
- API contract docs, team coordination overhead
- ORM setup, migrations, auth middleware
- FE/BE versioning conflicts

**✅ Agentic (2–4 hours)**
```
❯ claude "Add Hono API on Cloudflare Workers + D1.
         CRUD for permits. Read PRD.md first."

✓ wrangler.toml created
✓ D1 schema: permits table
✓ Drizzle ORM configured
✓ GET /api/permits
✓ POST /api/permits
✓ PATCH /api/permits/:id
✓ All routes typed, wired to frontend
```

### Speaker Notes
> Backend is where the traditional workflow really slows down —
> API contracts, ORM configuration, migrations, auth, team coordination.
>
> One prompt: add a Hono API on Cloudflare Workers with a D1 database.
> Notice it reads PRD.md first — that's why the planning step matters.
> It knows the data model before writing a single line.
>
> 2 to 4 hours instead of 4 to 8 weeks.

---

## SLIDE 10 · Phases 5–6: Testing + Deploy (The Fast Finish)
**Duration: ~1 min**

### On Screen
Two mini-sections:

**Testing — Agentic (1–2 hours)**
```
❯ claude "Write Vitest tests for all API routes.
         Happy path + errors + edge cases."

✓ 18 test cases generated
✓ Tests: 18 passed  Coverage: 84%
  (agent auto-fixed 2 failing tests)
```
Traditional: 2–4 weeks · 20–40% coverage

---

**Deploy to Cloudflare — 28 seconds**
```
❯ claude "Deploy to Cloudflare Pages + Workers"

✓ wrangler deploy → 300+ edge locations
✓ Auto HTTPS enabled

🌍  https://permits.pages.dev  (28s)
```
Traditional: 3–5 days (Docker · CI/CD · approvals)

### Speaker Notes
> Testing and deployment are where agentic development closes the gap completely.
>
> Testing: ask the agent to write Vitest tests — happy path, errors, edge cases.
> It writes 18 test cases, runs them, and auto-fixes any failures.
> 84% coverage in an afternoon instead of a QA sprint.
>
> Deployment: Cloudflare. One command. 28 seconds.
> Your app is live on 300 edge locations globally — including servers in Indonesia.
> No Docker, no pipeline setup, no change management tickets.
>
> That's the full stack. Let's see what it adds up to.

---

## SLIDE 11 · The Full Picture
**Duration: ~1 min**

### On Screen
Comparison table (rows revealed one by one):

| Phase | Traditional | AI-Assisted (L2) | AI-Agentic (L3) |
|---|---|---|---|
| Planning | Ad hoc / meetings | AI helps structure | **Agent-generated plan + context** |
| PRD | 1–2 weeks | Days | **~1 hour** |
| Design | 2–4 weeks | **Stitch / v0 / Figma AI** | Not ideal |
| Frontend | 4–8 weeks | 1–2 weeks | **1–2 days** |
| Backend | 4–8 weeks | 1–2 weeks | **2–4 hours** |
| Testing | 2–4 weeks | Days | **1–2 hours** |
| Deploy | 3–5 days | Hours | **28 seconds** |
| **Total MVP** | **3–6 months** | **2–4 weeks** | **3–5 days** |

Caption: *"Design stays at Level 2. Everything else scales to Level 3."*

### Speaker Notes
> Here's the full picture — and notice that Design is the exception.
> Level 2 tools like Stitch win there. Use them.
>
> For everything else, the agentic tier is 10 to 100 times faster.
> The total MVP time goes from 3 to 6 months down to 3 to 5 days.
>
> The key insight: it's not about picking a single approach.
> It's about knowing which AI tool fits which phase.

---

## SLIDE 12 · The Stack AI Knows Best
**Duration: ~30 sec**

### On Screen
8-icon badge grid:

| | | | |
|---|---|---|---|
| ▲ **Next.js 15** (Frontend) | **TS** TypeScript (Language) | 🎨 **Tailwind + shadcn** (UI) | 🔥 **Hono** (API) |
| ☁️ **Cloudflare D1** (Database) | ⚡ **Vitest** (Unit Tests) | 🎭 **Playwright** (E2E) | ⚙️ **Cloudflare Pages + Workers** (Deploy) |

Caption: *"Agent familiarity = fewer corrections = faster shipping"*

### Speaker Notes
> Quick note on the stack. The reason I recommend these specific tools —
> Next.js, TypeScript, Tailwind, shadcn, Hono, Cloudflare —
> is that AI agents are trained on millions of GitHub repos.
> They know these tools deeply.
>
> When an agent is familiar with the stack, it makes fewer mistakes.
> Fewer mistakes = fewer corrections = faster shipping.
>
> And it's a full-stack on a single platform — Cloudflare handles your frontend,
> API, database, CDN, and HTTPS in one place.

---

## SLIDE 13 · It Works. Here's Proof.
**Duration: ~1 min**

### On Screen
Two halves:

**Left — App Summary**
🏛️ **Sistem Perizinan Online** (Online Permit Tracker)
*Built in one terminal session. Zero IDE.*
- ✓ Submit permit application
- ✓ Track application status
- ✓ Admin review dashboard
- ✓ Live on Cloudflare globally
- ✓ 84% test coverage

**Right — QR Code**
[Large QR code — live demo URL]
*"permits-demo.pages.dev"*

### Visuals / Action Required
> ⚠️ Before the event: deploy the Perizinan demo app to Cloudflare,
> generate a real QR code, and replace the placeholder in this slide.

### Speaker Notes
> This isn't theoretical. I built this permit tracking system —
> the kind of app KOMDIGI might actually deploy for e-government services —
> in a single terminal session using the workflow I just described.
>
> PRD first. Plan before execute. Stitch for the UI components.
> Agent for backend, testing, deploy.
>
> Scan the QR code. It's live right now on Cloudflare's global network.
> Built in less time than it took you to eat breakfast this morning.

---

## SLIDE 14 · You Have 75 Minutes Starting at 10:15
**Duration: ~1.5 min**

### On Screen
Blue-bordered card:

**YOUR QUICK-START GUIDE**

**1. Plan before you prompt**
```
"I want to build [your idea] for [who].
 Key features: [list 3]. Help me plan it."
```

**2. Design with Stitch or v0 first**
→ Get your UI components visually

**3. Let the agent scaffold and wire**
```
claude "Build the app — read the plan, integrate
        the design, deploy to Cloudflare"
```

**4. Iterate fast — each round is 2–5 minutes**

---
`npm install -g @anthropic-ai/claude-code`

### Speaker Notes
> Now let's talk about you. You have 75 minutes.
>
> Step one: plan. Don't start with code. Write one clear sentence about your app —
> who it's for, what it does, what success looks like. Give the agent that context first.
>
> Step two: if you're building a UI, use Stitch or v0 to generate your components visually.
> Much faster to iterate there before handing off to the agent.
>
> Step three: once you have context and design, let the agent build the rest.
> Backend, wiring, tests, deploy — one prompt each.
>
> Step four: iterate. Each round is 2 to 5 minutes.
> In 75 minutes, you can have a working prototype with a live URL.
>
> The install command is on screen.

---

## SLIDE 15 · The Ladder Is Right Here
**Duration: ~30 sec**

### On Screen
Three level cards:

| Level 1 | Level 2 | Level 3 |
|---|---|---|
| **Traditional** | **AI-Assisted** | **AI-Agentic** |
| Months. You already know this. | Anton shows you this. Next 30 minutes. 👉 | One install away. Start with planning. ⚡ |

Install box:
```
npm install -g @anthropic-ai/claude-code
claude "help me plan my hackathon app"
```

*"Hack-Go-Thon 2026 · KOMDIGI · Thank you 🙏"*

### Speaker Notes
> The ladder is right in front of you.
>
> Level 2 — Anton covers that in the next 30 minutes. Don't miss it.
>
> Level 3 — one command away. But remember: planning first.
> The most powerful thing you can do before opening a terminal
> is write a clear sentence about what you're building and who it's for.
>
> I'll be around during the practice session if you want to see it live.
> Go build something. Thank you.

---

## Summary

**Total duration: 15 minutes**

| Section | Slides | Time |
|---|---|---|
| Opening | 1–2 | ~1 min 20 sec |
| Three Levels + Agentic Loop | 3–4 | ~2 min 15 sec |
| **Planning (NEW)** | **5** | **~1 min 30 sec** |
| PRD | 6 | ~45 sec |
| Design (AI tools, not agentic) | 7 | ~1 min |
| Frontend + Backend | 8–9 | ~1 min 30 sec |
| Testing + Deploy (merged) | 10 | ~1 min |
| Full picture + Stack | 11–12 | ~1 min 30 sec |
| Proof + CTA + Close | 13–15 | ~3 min |
| **Total** | **15** | **~15 min** |

---

## What Changed from v1

- **Planning slide added** (Slide 5) — now the centerpiece of the agentic narrative
- **Design slide rewritten** (Slide 7) — Stitch/v0/Figma AI as the right tools; agentic terminal noted as not ideal for visual design
- **Comparison table updated** (Slide 11) — Design column correctly shows Level 2 as the winner
- **Framing broadened** — "where AI fits at each phase" replaces "agentic for everything"
- **Testing + Deploy merged** into one slide (Slide 10) to recover time for the new Planning slide
- **Quick-start guide updated** (Slide 14) — "Plan first, design with Stitch, then agent"

---

## Decisions Locked

| Decision | Choice |
|---|---|
| Language | Full English |
| Branding | KOMDIGI throughout; AstraPay on cover/intro only |
| Demo (Slide 13) | Optional — pre-build the app before April 7 if time allows; QR code is the fallback |
