---
theme: default
colorSchema: dark
highlighter: shiki
lineNumbers: false
transition: slide-left
title: Building with AI — KOMDIGI Hack-Go-Thon 2026
mdc: true
toc: false
layout: cover
class: text-center
fonts:
  sans: Geist
  mono: JetBrains Mono
  weights: '400,600,700'
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1 — COVER
     ════════════════════════════════════════════════════ -->

<div style="position: absolute; top: 28px; left: 0; right: 0; text-align: center; font-size: 10px; letter-spacing: 0.25em; color: #60A5FA; font-family: monospace; text-transform: uppercase;">
  Hack-Go-Thon 2026 · KOMDIGI · 7 April 2026
</div>

<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
  <div style="font-size: 3rem; font-weight: 700; line-height: 1.15; color: white; margin-bottom: 16px;">
    Building with AI:<br>
    <span style="color: #60A5FA;">From Idea to Deployed App</span>
  </div>
  <div style="font-size: 1.15rem; color: #94A3B8; font-weight: 300;">What every developer needs to know in 2026</div>
  <div style="margin-top: 52px; font-size: 0.8rem; color: #475569; font-family: monospace; line-height: 1.8;">
    Yanuz Nurchalik · Head of Product Core, <span style="color: #94A3B8;">AstraPay</span><br>
    <span style="color: #374151;">KOMDIGI</span>
  </div>
</div>

---
layout: center
class: text-center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2 — THE WORLD CHANGED
     ════════════════════════════════════════════════════ -->

# The World Changed in 2025

<div class="grid grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
  <StatCard value="10×" label="More code written by AI agents than humans in 2026" />
  <StatCard value="3–5 days" label="From idea to deployed app" sub="Was 3–6 months" :highlight="true" />
  <StatCard value="1 week" label="Cloudflare rebuilt Next.js" sub="1 engineer + AI agent, Feb 2026" />
</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 3 — THREE LEVELS
     ════════════════════════════════════════════════════ -->

# How We Build Software: Three Levels

<div class="grid grid-cols-3 gap-5 mt-8">

  <div class="rounded-xl border border-slate-700/60 bg-slate-900/30 p-5 text-center">
    <div class="text-[9px] font-mono text-slate-500 tracking-[0.2em] mb-2">LEVEL 1</div>
    <div class="text-xl font-bold text-slate-300 mb-3">Traditional</div>
    <div class="text-xs text-slate-500 leading-relaxed mb-4">Write every line yourself.<br>IDE + Stack Overflow + coffee.</div>
    <div class="text-xs font-mono bg-slate-800/70 rounded-lg px-3 py-2 text-slate-400">3–6 months to MVP</div>
  </div>

  <div class="rounded-xl border border-amber-800/50 bg-amber-950/10 p-5 text-center">
    <div class="text-[9px] font-mono text-amber-500 tracking-[0.2em] mb-2">LEVEL 2</div>
    <div class="text-xl font-bold text-amber-300 mb-3">AI-Assisted</div>
    <div class="text-xs text-slate-400 leading-relaxed mb-3">AI suggests, you type.<br>Copilot · Stitch · Cursor</div>
    <div class="text-[10px] text-amber-700 italic mb-3">&#8592; Anton covers this next</div>
    <div class="text-xs font-mono bg-amber-950/50 rounded-lg px-3 py-2 text-amber-500">2–4 weeks to MVP</div>
  </div>

  <div class="rounded-xl border border-emerald-600/50 bg-emerald-950/15 p-5 text-center ring-1 ring-emerald-500/25">
    <div class="text-[9px] font-mono text-emerald-400 tracking-[0.2em] mb-2">LEVEL 3</div>
    <div class="text-xl font-bold text-emerald-300 mb-3">AI-Agentic</div>
    <div class="text-xs text-slate-400 leading-relaxed mb-3">You describe. Agent plans,<br>writes, runs, deploys.</div>
    <div class="text-[10px] text-emerald-700 font-mono mb-3">Claude Code · OpenCode</div>
    <div class="text-xs font-mono bg-emerald-950/50 rounded-lg px-3 py-2 text-emerald-400 font-bold">3–5 days to MVP</div>
  </div>

</div>

<div class="text-center text-xs text-slate-600 mt-5 font-mono">
  Levels don't compete — they compound. Use the right tool at the right phase.
</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 4 — THE AGENTIC LOOP
     ════════════════════════════════════════════════════ -->

# The Agentic Loop

<div style="max-width: 820px; margin: 28px auto 0; font-family: inherit;">
  <div style="display: flex; align-items: stretch; gap: 0;">
    <div style="flex: 1; background: #3B82F6; border-radius: 14px; padding: 22px 10px; text-align: center;">
      <div style="font-size: 2rem; line-height: 1;">💬</div>
      <div style="font-weight: 700; font-size: 0.88rem; color: white; margin-top: 8px;">You Describe</div>
    </div>
    <div style="display: flex; align-items: center; padding: 0 6px; color: #475569; font-size: 1.3rem;">&#8594;</div>
    <div style="flex: 1; background: #0F1929; border: 1px solid #1E2D4A; border-radius: 14px; padding: 22px 10px; text-align: center;">
      <div style="font-size: 2rem; line-height: 1;">🧠</div>
      <div style="font-weight: 600; font-size: 0.88rem; color: #94A3B8; margin-top: 8px;">Agent Plans</div>
    </div>
    <div style="display: flex; align-items: center; padding: 0 6px; color: #475569; font-size: 1.3rem;">&#8594;</div>
    <div style="flex: 1; background: #0F1929; border: 1px solid #1E2D4A; border-radius: 14px; padding: 22px 10px; text-align: center;">
      <div style="font-size: 2rem; line-height: 1;">⚡</div>
      <div style="font-weight: 600; font-size: 0.88rem; color: #94A3B8; margin-top: 8px;">Agent Executes</div>
    </div>
    <div style="display: flex; align-items: center; padding: 0 6px; color: #475569; font-size: 1.3rem;">&#8594;</div>
    <div style="flex: 1; background: #3B82F6; border-radius: 14px; padding: 22px 10px; text-align: center;">
      <div style="font-size: 2rem; line-height: 1;">👀</div>
      <div style="font-weight: 700; font-size: 0.88rem; color: white; margin-top: 8px;">You Verify</div>
    </div>
  </div>

  <div style="display: flex; gap: 12px; margin-top: 20px;">
    <div style="flex: 3; background: #1E2D4A; border-radius: 10px; padding: 14px 20px; color: #64748B; font-size: 0.82rem; font-family: monospace; text-align: center;">
      &#x21A9; Refine &#8212; redirect in one sentence &#8594; loops back
    </div>
    <div style="flex: 1; background: #10B981; border-radius: 10px; padding: 14px 20px; color: white; font-size: 0.85rem; font-weight: 700; text-align: center;">
      ✓ Ship it 🚀
    </div>
  </div>
</div>

<div style="text-align: center; color: #64748B; font-size: 0.9rem; margin-top: 24px;">
  You touch the keyboard twice — to <span style="color: #60A5FA;">describe</span>, and to <span style="color: #60A5FA;">verify</span>.
</div>

---
title: Planning
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 5 — PLANNING: THE MOST IMPORTANT STEP
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono tracking-[0.2em] uppercase mb-1" style="color: #6366F1;">Phase 0 — The Most Critical</div>
  <h1 class="text-3xl font-bold">Planning</h1>
</div>

<div class="grid grid-cols-2 gap-5">

  <div class="rounded-xl border border-slate-700/50 bg-slate-900/40 p-5">
    <div class="text-[10px] font-mono text-slate-500 tracking-widest mb-3">❌  WHAT MOST PEOPLE DO</div>
    <TerminalDemo
      prompt='claude "build me an app"'
      :lines="[
        '? Unclear intent detected.',
        '  What kind of app?',
        '  Who are the users?',
        '  What should it do?',
        '',
        '→ Produces generic boilerplate.',
        '→ You spend hours fixing it.',
      ]"
      :compact="true"
    />
  </div>

  <div class="rounded-xl border border-indigo-700/50 bg-indigo-950/10 p-5">
    <div class="text-[10px] font-mono tracking-widest mb-3" style="color: #818CF8;">✅  WHAT EXPERIENCED DEVS DO</div>
    <TerminalDemo
      prompt='claude "Read PRD.md. Permit tracker for govt staff. Plan only — do not execute yet."'
      :lines="[
        '◆ Reading PRD.md...',
        '◆ Proposing plan:',
        '  · 3 data models',
        '  · 5 API routes',
        '  · 2 UI pages',
        '',
        '◆ Awaiting your approval.',
      ]"
      :compact="true"
    />
  </div>

</div>

<div class="mt-4 rounded-xl border px-5 py-3 text-center" style="border-color: #4338CA40; background: #1e1b4b20;">
  <span style="color: #A5B4FC; font-size: 0.85rem; font-style: italic;">"The quality of your output = the quality of your context."</span>
  <span class="text-slate-600 text-xs ml-3 font-mono">— every senior agentic engineer</span>
</div>

---
title: PRD
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 6 — PHASE 1: PRD
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase mb-1">Phase 1</div>
  <h1 class="text-3xl font-bold">PRD — Let AI Draft It</h1>
</div>

<div class="grid grid-cols-2 gap-5">

  <div class="rounded-xl border border-amber-800/40 bg-amber-950/10 p-5">
    <div class="text-[10px] font-mono text-amber-500 tracking-widest mb-3">❌  TRADITIONAL</div>
    <ul class="text-sm text-slate-400 space-y-2 leading-relaxed">
      <li>📅 1–2 weeks of stakeholder workshops</li>
      <li>📝 20–50 page Word doc, approval cycles</li>
      <li>🔄 Outdated before dev even starts</li>
      <li>🧠 Knowledge stuck in people's heads</li>
    </ul>
    <div class="mt-4 text-xs font-mono text-amber-700 bg-amber-950/60 rounded-lg px-3 py-2">⏱  1–2 weeks</div>
  </div>

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-3">✅  AGENTIC</div>
    <TerminalDemo
      prompt='claude "Build a permit app for students. What features? Write PRD.md."'
      :lines="[
        '✓ Analyzing requirements...',
        '✓ Writing PRD.md',
        '  · User personas: 3 defined',
        '  · Features: 12 prioritized',
        '  · Success metrics: set',
        '',
        '✓ PRD.md saved — tracked in git',
      ]"
      :compact="true"
    />
    <div class="mt-3 text-xs font-mono text-emerald-700 bg-emerald-950/60 rounded-lg px-3 py-2">⚡ ~1 hour</div>
  </div>

</div>

---
title: Design
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 7 — PHASE 2: DESIGN — USE THE RIGHT AI TOOL
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase mb-1">Phase 2</div>
  <h1 class="text-3xl font-bold">Design — Use the Right AI Tool</h1>
</div>

<div class="grid grid-cols-2 gap-5 items-start">

  <div class="rounded-xl border border-slate-700/40 bg-slate-900/30 p-5">
    <div class="text-[10px] font-mono text-amber-600 tracking-widest mb-4">&#x26A0;&#xFE0F;  AGENTIC TERMINAL — NOT IDEAL HERE</div>
    <ul class="text-sm text-slate-500 space-y-2 leading-relaxed">
      <li>Visual design needs visual iteration</li>
      <li>Terminal agents output code, not mockups</li>
      <li>Hard to evaluate without seeing it</li>
    </ul>
  </div>

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-4">&#x2705;  AI DESIGN TOOLS — RIGHT TIER</div>
    <div class="space-y-2.5">
      <div class="rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-2.5">
        <div class="text-sm font-semibold text-white">&#x1F3A8; Google Stitch</div>
        <div class="text-xs text-slate-500 mt-0.5">Describe UI &#8594; production React / Next.js</div>
      </div>
      <div class="rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-2.5">
        <div class="text-sm font-semibold text-white">&#x25B2; v0 by Vercel</div>
        <div class="text-xs text-slate-500 mt-0.5">Prompt &#8594; Tailwind + shadcn/ui components</div>
      </div>
      <div class="rounded-lg border border-slate-700/50 bg-slate-900/50 px-4 py-2.5">
        <div class="text-sm font-semibold text-white">&#x1F58C; Figma AI</div>
        <div class="text-xs text-slate-500 mt-0.5">Design in Figma, AI fills in the details</div>
      </div>
    </div>
  </div>

</div>

<div class="mt-4 text-center text-xs font-mono text-slate-600">
  Stitch / v0 &#8594; export code &#8594; agentic agent integrates into your codebase
</div>

---
title: Frontend
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 8 — PHASE 3: FRONTEND
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase mb-1">Phase 3</div>
  <h1 class="text-3xl font-bold">Frontend — Scaffold and Wire</h1>
</div>

<div class="grid grid-cols-2 gap-5">

  <div class="rounded-xl border border-amber-800/40 bg-amber-950/10 p-5">
    <div class="text-[10px] font-mono text-amber-500 tracking-widest mb-3">❌  TRADITIONAL</div>
    <ul class="text-sm text-slate-400 space-y-2 leading-relaxed">
      <li>&#x1F3A8; Figma handoff &#8594; pixel-perfect grind</li>
      <li>⚙️ Setup boilerplate: routing, state, forms</li>
      <li>🐢 1–3 screens per developer per day</li>
      <li>📅 4–8 weeks for a basic app</li>
    </ul>
    <div class="mt-4 text-xs font-mono text-amber-700 bg-amber-950/60 rounded-lg px-3 py-2">⏱  4–8 weeks</div>
  </div>

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-3">✅  AGENTIC</div>
    <TerminalDemo
      prompt='claude "Scaffold Next.js 15 + Tailwind + shadcn. Wire Stitch components into dashboard with permit table + filters."'
      :lines="[
        '✓ create-next-app scaffolded',
        '✓ Stitch components integrated',
        '✓ app/dashboard/page.tsx',
        '✓ DataTable with status filters',
        '✓ Mobile responsive: yes',
        '',
        '🚀  5–10 screens/day',
      ]"
      :compact="true"
    />
    <div class="mt-3 text-xs font-mono text-emerald-700 bg-emerald-950/60 rounded-lg px-3 py-2">⚡ 1–2 days</div>
  </div>

</div>

---
title: Backend
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 9 — PHASE 4: BACKEND
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase mb-1">Phase 4</div>
  <h1 class="text-3xl font-bold">Backend — Full API in Hours</h1>
</div>

<div class="grid grid-cols-2 gap-5">

  <div class="rounded-xl border border-amber-800/40 bg-amber-950/10 p-5">
    <div class="text-[10px] font-mono text-amber-500 tracking-widest mb-3">❌  TRADITIONAL</div>
    <ul class="text-sm text-slate-400 space-y-2 leading-relaxed">
      <li>📋 API contract docs, team coordination</li>
      <li>🔧 ORM setup, migrations, auth middleware</li>
      <li>🔄 FE/BE versioning conflicts</li>
      <li>📅 4–8 weeks minimum</li>
    </ul>
    <div class="mt-4 text-xs font-mono text-amber-700 bg-amber-950/60 rounded-lg px-3 py-2">⏱  4–8 weeks</div>
  </div>

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-3">✅  AGENTIC</div>
    <TerminalDemo
      prompt='claude "Add Hono API on Cloudflare Workers + D1. CRUD for permits. Read PRD.md first."'
      :lines="[
        '✓ Reading PRD.md...',
        '✓ wrangler.toml created',
        '✓ D1 schema: permits table',
        '✓ Drizzle ORM configured',
        '✓ GET /api/permits',
        '✓ POST /api/permits',
        '✓ PATCH /api/permits/:id',
        '✓ All routes typed & wired',
      ]"
      :compact="true"
    />
    <div class="mt-3 text-xs font-mono text-emerald-700 bg-emerald-950/60 rounded-lg px-3 py-2">⚡ 2–4 hours</div>
  </div>

</div>

---
title: Testing + Deploy
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 10 — PHASES 5–6: TESTING + DEPLOY
     ════════════════════════════════════════════════════ -->

<div class="mb-4">
  <div class="text-[10px] font-mono text-slate-500 tracking-[0.2em] uppercase mb-1">Phases 5–6</div>
  <h1 class="text-3xl font-bold">Testing + Deploy</h1>
</div>

<div class="grid grid-cols-2 gap-5">

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-3">TESTING — AGENTIC</div>
    <TerminalDemo
      prompt='claude "Write Vitest tests for all routes. Happy path + errors + edge cases."'
      :lines="[
        '✓ 18 test cases generated',
        '',
        'vitest run',
        '  ✓ GET /permits (3)',
        '  ✓ POST /permits (5)',
        '  ✓ Error cases (6)',
        '',
        'Tests: 18 passed  Coverage: 84%',
      ]"
      :compact="true"
    />
    <div class="mt-3 flex justify-between text-xs font-mono">
      <span style="color: #64748B;">Traditional: 2–4 weeks · 20–40% coverage</span>
      <span style="color: #10B981;">⚡ 1–2 hours</span>
    </div>
  </div>

  <div class="rounded-xl border border-emerald-700/40 bg-emerald-950/10 p-5">
    <div class="text-[10px] font-mono text-emerald-400 tracking-widest mb-3">DEPLOY TO CLOUDFLARE</div>
    <TerminalDemo
      prompt='claude "Deploy to Cloudflare Pages + Workers"'
      :lines="[
        '✓ wrangler deploy',
        '  Published permits-api',
        '  300+ edge locations active',
        '',
        '✓ wrangler pages deploy',
        '  Published to Cloudflare Pages',
        '  Auto HTTPS enabled',
        '',
        '🌍  https://permits.pages.dev  (28s)',
      ]"
      :compact="true"
    />
    <div class="mt-3 flex justify-between text-xs font-mono">
      <span style="color: #64748B;">Traditional: 3–5 days of DevOps</span>
      <span style="color: #10B981;">⚡ 28 seconds</span>
    </div>
  </div>

</div>

---
layout: center
class: text-center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 11 — THE FULL PICTURE
     ════════════════════════════════════════════════════ -->

# The Full Picture

<div class="mt-5 max-w-2xl mx-auto">
  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-slate-700/60">
        <th class="text-left py-2 px-3 text-slate-500 font-normal text-xs">Phase</th>
        <th class="py-2 px-3 text-slate-600 font-normal text-xs">Traditional</th>
        <th class="py-2 px-3 text-amber-600/70 font-normal text-xs">AI-Assisted (L2)</th>
        <th class="py-2 px-3 text-emerald-400 font-semibold text-xs">AI-Agentic (L3) ⚡</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">Planning</td>
        <td class="py-2 px-3 text-slate-600 text-center">Ad hoc</td>
        <td class="py-2 px-3 text-amber-700 text-center">AI helps structure</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">Plan mode + context</td>
      </tr>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">PRD</td>
        <td class="py-2 px-3 text-slate-600 text-center">1–2 weeks</td>
        <td class="py-2 px-3 text-amber-700 text-center">2–3 days</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">~1 hour</td>
      </tr>
      <tr class="border-b border-slate-800/40 bg-amber-950/10">
        <td class="py-2 px-3 text-slate-300 text-left">Design</td>
        <td class="py-2 px-3 text-slate-600 text-center">2–4 weeks</td>
        <td class="py-2 px-3 text-amber-400 text-center font-semibold">Stitch · v0 · Figma AI ✓</td>
        <td class="py-2 px-3 text-slate-600 text-center text-xs italic">not ideal here</td>
      </tr>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">Frontend</td>
        <td class="py-2 px-3 text-slate-600 text-center">4–8 weeks</td>
        <td class="py-2 px-3 text-amber-700 text-center">1–2 weeks</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">1–2 days</td>
      </tr>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">Backend</td>
        <td class="py-2 px-3 text-slate-600 text-center">4–8 weeks</td>
        <td class="py-2 px-3 text-amber-700 text-center">1–2 weeks</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">2–4 hours</td>
      </tr>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">Testing</td>
        <td class="py-2 px-3 text-slate-600 text-center">2–4 weeks</td>
        <td class="py-2 px-3 text-amber-700 text-center">3–5 days</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">1–2 hours</td>
      </tr>
      <tr class="border-b border-slate-800/40">
        <td class="py-2 px-3 text-slate-300 text-left">Deploy</td>
        <td class="py-2 px-3 text-slate-600 text-center">3–5 days</td>
        <td class="py-2 px-3 text-amber-700 text-center">hours</td>
        <td class="py-2 px-3 text-emerald-400 text-center font-mono font-semibold">28 seconds</td>
      </tr>
      <tr style="background: rgba(30,58,138,0.15); border: 1px solid rgba(30,64,175,0.3);">
        <td class="py-3 px-3 text-white font-bold text-left">Total MVP</td>
        <td class="py-3 px-3 text-slate-500 text-center font-bold">3–6 months</td>
        <td class="py-3 px-3 text-amber-500 text-center font-bold">2–4 weeks</td>
        <td class="py-3 px-3 text-emerald-300 text-center font-bold text-base">3–5 days</td>
      </tr>
    </tbody>
  </table>
  <div class="text-center text-xs text-slate-600 mt-3 font-mono">
    Design stays at Level 2. Everything else scales to Level 3.
  </div>
</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 12 — THE STACK
     ════════════════════════════════════════════════════ -->

# The Stack AI Knows Best

<div class="grid grid-cols-4 gap-4 mt-6 max-w-3xl mx-auto">

  <div class="stack-badge">
    <div class="text-3xl mb-2 text-white font-bold">▲</div>
    <div class="font-semibold text-sm">Next.js 15</div>
    <div class="text-xs text-slate-500 mt-1">Frontend</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2 font-bold text-blue-400">TS</div>
    <div class="font-semibold text-sm">TypeScript</div>
    <div class="text-xs text-slate-500 mt-1">Language</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2">🎨</div>
    <div class="font-semibold text-sm">Tailwind + shadcn</div>
    <div class="text-xs text-slate-500 mt-1">UI</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2">🔥</div>
    <div class="font-semibold text-sm">Hono</div>
    <div class="text-xs text-slate-500 mt-1">API Framework</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2">☁️</div>
    <div class="font-semibold text-sm">Cloudflare D1</div>
    <div class="text-xs text-slate-500 mt-1">Database</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2">⚡</div>
    <div class="font-semibold text-sm">Vitest</div>
    <div class="text-xs text-slate-500 mt-1">Unit Testing</div>
  </div>

  <div class="stack-badge">
    <div class="text-2xl mb-2">🎭</div>
    <div class="font-semibold text-sm">Playwright</div>
    <div class="text-xs text-slate-500 mt-1">E2E Testing</div>
  </div>

  <div class="stack-badge" style="border-color: rgba(249,115,22,0.4); background: rgba(124,45,18,0.1); ring: rgba(249,115,22,0.3);">
    <div class="text-2xl mb-2">⚙️</div>
    <div class="font-semibold text-sm" style="color: #FED7AA;">Cloudflare</div>
    <div class="text-xs mt-1" style="color: #9a3412;">Pages + Workers</div>
  </div>

</div>

<div class="text-center text-xs text-slate-600 mt-5 font-mono">
  Agent familiarity = fewer corrections = faster shipping
</div>

---
layout: center
class: text-center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 13 — PROOF / DEMO
     ════════════════════════════════════════════════════ -->

# It Works. Here's Proof.

<div class="grid grid-cols-2 gap-8 mt-6 items-center max-w-2xl mx-auto">

  <div class="rounded-xl border border-slate-700/60 bg-slate-900/40 p-6 text-left">
    <div class="text-3xl mb-3">🏛️</div>
    <div class="text-lg font-bold text-emerald-400 mb-1">Sistem Perizinan Online</div>
    <div class="text-xs text-slate-500 mb-4 font-mono">Built in one terminal session. Zero IDE.</div>
    <div class="space-y-1.5 text-xs text-slate-400">
      <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Submit permit application</div>
      <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Track application status</div>
      <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Admin review dashboard</div>
      <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> Live on Cloudflare globally</div>
      <div class="flex items-center gap-2"><span class="text-emerald-500">✓</span> 84% test coverage</div>
    </div>
  </div>

  <div class="space-y-4">
    <div class="rounded-xl border border-blue-800/40 bg-blue-950/15 p-5">
      <div class="text-xs text-blue-400 font-mono mb-3 tracking-wide">LIVE DEMO</div>
      <div class="w-28 h-28 bg-slate-800/80 border border-slate-700 rounded-lg mx-auto flex items-center justify-center text-slate-600 text-xs">
        [QR Code]
      </div>
    </div>
    <div class="text-xs text-slate-600 font-mono">permits-demo.pages.dev</div>
  </div>

</div>

<div class="mt-4 text-sm text-slate-600 italic">"PRD first. Plan before execute. Design with Stitch. Agent handles the rest."</div>

---
title: You Have 75 Minutes Starting at 10:15
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 14 — YOU HAVE 75 MINUTES
     ════════════════════════════════════════════════════ -->

<div style="text-align: center; margin-bottom: 18px;">
  <h1 style="font-size: 1.9rem; font-weight: 700; color: white; line-height: 1.2;">You Have 75 Minutes Starting at 10:15</h1>
</div>

<div style="max-width: 520px; margin: 0 auto;">
  <div style="border-radius: 12px; border: 1px solid rgba(59,130,246,0.4); background: rgba(23,37,84,0.12); padding: 24px;">
    <div style="font-size: 10px; font-family: monospace; color: #60A5FA; letter-spacing: 0.2em; margin-bottom: 20px;">YOUR QUICK-START GUIDE</div>

    <div style="display: flex; flex-direction: column; gap: 16px;">

      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #60A5FA; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; min-width: 16px;">1</div>
        <div>
          <div style="font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 4px;">Plan before you prompt</div>
          <div style="font-size: 0.75rem; color: #64748B; font-family: monospace; background: rgba(15,25,41,0.6); border-radius: 6px; padding: 4px 8px;">
            "I want to build X for Y users. Key features: A, B, C."
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #60A5FA; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; min-width: 16px;">2</div>
        <div>
          <div style="font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 4px;">Design with Stitch or v0 first</div>
          <div style="font-size: 0.75rem; color: #64748B; margin-top: 2px;">Get your UI components visually &#8212; faster to iterate than code</div>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #60A5FA; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; min-width: 16px;">3</div>
        <div>
          <div style="font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 4px;">Let the agent build and deploy</div>
          <div style="font-size: 0.75rem; color: #64748B; font-family: monospace; background: rgba(15,25,41,0.6); border-radius: 6px; padding: 4px 8px;">
            claude "Build the app &#8212; read plan, integrate design, deploy Cloudflare"
          </div>
        </div>
      </div>

      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #60A5FA; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; min-width: 16px;">4</div>
        <div>
          <div style="font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 4px;">Iterate &#8212; each round is 2&#8211;5 minutes</div>
          <div style="font-size: 0.75rem; color: #64748B; margin-top: 2px;">Ship something real. Do not wait for perfect.</div>
        </div>
      </div>

    </div>
  </div>

  <div style="margin-top: 12px; font-size: 0.72rem; color: #374151; font-family: monospace; text-align: center;">
    npm install -g @anthropic-ai/claude-code
  </div>
</div>

---
layout: center
class: text-center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 15 — CLOSE
     ════════════════════════════════════════════════════ -->

# The Ladder Is Right Here

<div class="grid grid-cols-3 gap-4 mt-6 max-w-2xl mx-auto">

  <div class="rounded-xl border border-slate-700/60 bg-slate-900/30 p-5 text-center">
    <div class="text-[9px] font-mono text-slate-600 tracking-[0.2em] mb-2">LEVEL 1</div>
    <div class="font-bold text-slate-500 mb-2">Traditional</div>
    <div class="text-xs text-slate-600 leading-relaxed">Months. You already know this one.</div>
  </div>

  <div class="rounded-xl border border-amber-800/50 bg-amber-950/10 p-5 text-center">
    <div class="text-[9px] font-mono text-amber-500 tracking-[0.2em] mb-2">LEVEL 2</div>
    <div class="font-bold text-amber-400 mb-2">AI-Assisted</div>
    <div class="text-xs text-slate-500 leading-relaxed">Anton shows you this.<br>Next 30 minutes. 👉</div>
  </div>

  <div class="rounded-xl border border-emerald-600/50 bg-emerald-950/15 p-5 text-center ring-1 ring-emerald-500/25">
    <div class="text-[9px] font-mono text-emerald-400 tracking-[0.2em] mb-2">LEVEL 3</div>
    <div class="font-bold text-emerald-300 mb-2">AI-Agentic</div>
    <div class="text-xs text-slate-400 leading-relaxed">Start with planning.<br>One install away. ⚡</div>
  </div>

</div>

<div class="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-4 max-w-sm mx-auto text-left">
  <div class="text-[9px] text-slate-600 font-mono tracking-widest mb-2">INSTALL CLAUDE CODE</div>
  <div class="font-mono text-sm text-blue-300">npm install -g @anthropic-ai/claude-code</div>
  <div class="font-mono text-sm text-slate-400 mt-1">claude "help me plan my hackathon app"</div>
</div>

<div class="mt-5 text-slate-600 text-xs">
  Hack-Go-Thon 2026 · KOMDIGI · Thank you 🙏
</div>
