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
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 1B — SPEAKER INTRO
     ════════════════════════════════════════════════════ -->

<div class="flex items-center gap-10 max-w-3xl mx-auto">
  <img src="/yanuz-photo.jpg" class="flex-shrink-0 w-28 h-28 rounded-full border-2 border-blue-500/50 object-cover" style="object-position: 50% 22%;" alt="Yanuz Nurchalik" />
  <div class="text-left">
    <div class="text-2xl font-bold text-white mb-1">Yanuz Nurchalik</div>
    <div class="text-sm text-blue-400 font-mono mb-4">Head of Product Core · AstraPay (Astra Group)</div>
    <div class="space-y-2 text-xs text-slate-400">
      <div class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">▸</span><span>Building fintech infrastructure for <span class="text-slate-300">16M+ users</span> — payments, core banking, settlement systems</span></div>
      <div class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">▸</span><span>Ships production features using <span class="text-emerald-400">Claude Code + OpenCode</span> daily — no IDE, just a terminal</span></div>
      <div class="flex items-start gap-2"><span class="text-blue-500 mt-0.5">▸</span><span>Backend engineer at heart. Thinks in systems. Has opinions about PostgreSQL indexes.</span></div>
    </div>
    <div class="flex gap-4 mt-4 text-[10px] font-mono">
      <a href="https://x.com/chalk93" target="_blank" class="text-slate-500 hover:text-blue-400 transition-colors no-underline">𝕏 @chalk93</a>
      <a href="https://linkedin.com/in/yanuzpurnomo" target="_blank" class="text-slate-500 hover:text-blue-400 transition-colors no-underline">in yanuzpurnomo</a>
      <a href="https://github.com/ap-yanuz-nurchalik" target="_blank" class="text-slate-500 hover:text-blue-400 transition-colors no-underline flex items-center gap-1"><svg viewBox="0 0 24 24" class="w-3 h-3 inline fill-current flex-shrink-0"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>ap-yanuz-nurchalik</a>
      <a href="https://github.com/yanuz93" target="_blank" class="text-slate-500 hover:text-blue-400 transition-colors no-underline">/ yanuz93</a>
    </div>
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
  <StatCard value="8–20×" label="Code output with agentic coding" sub="Documented team result, 2025" />
  <StatCard value="3–5 days" label="From idea to deployed app" sub="Was 3–6 months" :highlight="true" />
  <StatCard value="1 week" label="Cloudflare rebuilt 94% of Next.js" sub="1 engineer + AI · $1,100 in Claude tokens" />
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
     SLIDE 2B — AI MODELS
     ════════════════════════════════════════════════════ -->

# Meet the Models

<div class="mt-6 max-w-3xl mx-auto">
  <div class="text-xs text-slate-500 font-mono text-center tracking-widest mb-6">THE BRAINS BEHIND EVERYTHING</div>
  <div class="grid grid-cols-3 gap-4">
    <div class="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 text-center">
      <div class="text-2xl mb-2">🟢</div>
      <div class="text-sm font-bold text-slate-200 mb-1">OpenAI</div>
      <div class="text-xs text-slate-500 mb-3">GPT-5.4</div>
      <div class="text-[10px] text-slate-600 leading-relaxed">The one that started it all.<br>ChatGPT — you know it.</div>
    </div>
    <div class="rounded-xl border border-blue-700/50 bg-blue-950/20 p-4 text-center ring-1 ring-blue-600/20">
      <div class="text-2xl mb-2">🔷</div>
      <div class="text-sm font-bold text-blue-300 mb-1">Anthropic</div>
      <div class="text-xs text-blue-500 mb-3">Claude Opus 4.6 · Sonnet 4.6</div>
      <div class="text-[10px] text-slate-500 leading-relaxed">Strong at code, long context,<br>and being honest (rare).</div>
    </div>
    <div class="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 text-center">
      <div class="text-2xl mb-2">🔵</div>
      <div class="text-sm font-bold text-slate-200 mb-1">Google</div>
      <div class="text-xs text-slate-500 mb-3">Gemini 3.1</div>
      <div class="text-[10px] text-slate-600 leading-relaxed">1M token context.<br>Excellent multimodal.</div>
    </div>
  </div>
  <div class="mt-5 rounded-lg border border-slate-700/40 bg-slate-900/20 px-5 py-3 text-center text-xs text-slate-500">
    All of them are <span class="text-slate-300 font-semibold">Large Language Models (LLMs)</span> — they predict the next token. The magic is in scale.
  </div>
</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2C — AI TOOLS LANDSCAPE
     ════════════════════════════════════════════════════ -->

# How AI Enters Your Workflow

<div class="mt-6 max-w-3xl mx-auto space-y-3">
  <div class="rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 flex items-start gap-4">
    <div class="text-xl mt-0.5">💬</div>
    <div>
      <div class="text-sm font-bold text-slate-300 mb-0.5">Chat Interface</div>
      <div class="text-xs text-slate-500">Ask a question, get an answer. Copy. Paste. Repeat.</div>
      <div class="text-[10px] font-mono text-slate-600 mt-1">ChatGPT · Claude.ai · Gemini</div>
    </div>
  </div>
  <div class="rounded-xl border border-amber-800/40 bg-amber-950/10 p-4 flex items-start gap-4">
    <div class="text-xl mt-0.5">⌨️</div>
    <div>
      <div class="text-sm font-bold text-amber-300 mb-0.5">AI-Assisted Coding</div>
      <div class="text-xs text-slate-400">AI lives inside your IDE. Suggests as you type. You still drive.</div>
      <div class="text-[10px] font-mono text-amber-700 mt-1">GitHub Copilot · Google Stitch · Cursor</div>
    </div>
  </div>
  <div class="rounded-xl border border-purple-700/40 bg-purple-950/10 p-4 flex items-start gap-4">
    <div class="text-xl mt-0.5">🔌</div>
    <div>
      <div class="text-sm font-bold text-purple-300 mb-0.5">MCP — Model Context Protocol</div>
      <div class="text-xs text-slate-400">Gives AI access to <span class="text-slate-300">tools</span>: your filesystem, browser, APIs, databases. AI stops guessing — it <em>reads</em>.</div>
      <div class="text-[10px] font-mono text-purple-700 mt-1">Anthropic open standard · Nov 2024</div>
    </div>
  </div>
  <div class="rounded-xl border border-emerald-600/40 bg-emerald-950/10 p-4 flex items-start gap-4">
    <div class="text-xl mt-0.5">🤖</div>
    <div>
      <div class="text-sm font-bold text-emerald-300 mb-0.5">AI Agent</div>
      <div class="text-xs text-slate-400">AI that <span class="text-slate-300">acts</span>: reads your codebase, plans, writes files, runs commands, verifies, deploys.</div>
      <div class="text-[10px] font-mono text-emerald-700 mt-1">Claude Code · OpenCode</div>
    </div>
  </div>
</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2E — THE AI TRINITY
     ════════════════════════════════════════════════════ -->

# The Three Pieces of an AI Agent

<div class="grid grid-cols-3 gap-5 mt-8 max-w-3xl mx-auto">
  <div class="rounded-xl border border-blue-700/50 bg-blue-950/15 p-5 text-center">
    <div class="text-3xl mb-3">🧠</div>
    <div class="text-xs font-mono text-blue-400 tracking-widest mb-2">MODEL</div>
    <div class="text-base font-bold text-blue-300 mb-3">The Brain</div>
    <div class="text-xs text-slate-400 leading-relaxed mb-4">Reads, reasons, writes. The LLM that understands your intent and generates responses.</div>
    <div class="text-[10px] font-mono text-blue-700">GPT-5 · Claude · Gemini</div>
  </div>
  <div class="rounded-xl border border-purple-700/50 bg-purple-950/15 p-5 text-center">
    <div class="text-3xl mb-3">🔌</div>
    <div class="text-xs font-mono text-purple-400 tracking-widest mb-2">MCP</div>
    <div class="text-base font-bold text-purple-300 mb-3">The Hands</div>
    <div class="text-xs text-slate-400 leading-relaxed mb-4">Connects AI to the real world. Files, browsers, APIs, databases. AI stops guessing — it <em>acts</em>.</div>
    <div class="text-[10px] font-mono text-purple-700">Model Context Protocol</div>
  </div>
  <div class="rounded-xl border border-amber-700/50 bg-amber-950/15 p-5 text-center">
    <div class="text-3xl mb-3">📋</div>
    <div class="text-xs font-mono text-amber-400 tracking-widest mb-2">SKILLS</div>
    <div class="text-base font-bold text-amber-300 mb-3">The Playbook</div>
    <div class="text-xs text-slate-400 leading-relaxed mb-4">Reusable workflows that tell the agent <em>how</em> to approach tasks. Encoded expertise. SOPs for AI.</div>
    <div class="text-[10px] font-mono text-amber-700">Brainstorm · TDD · Deploy</div>
  </div>
</div>
<div class="mt-5 text-center text-xs text-slate-600">A brain that can act, guided by experience &#8212; that's an agent.</div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2D — MCPs EXPLAINED
     ════════════════════════════════════════════════════ -->

# MCPs: Why They Change Everything

<div class="grid grid-cols-2 gap-8 mt-6 max-w-3xl mx-auto">
  <div class="space-y-3">
    <div class="text-xs font-mono text-slate-500 tracking-widest mb-4">WITHOUT MCP</div>
    <div class="rounded-lg border border-slate-700/50 bg-slate-900/40 p-3 text-xs text-slate-400">
      You: <span class="text-slate-300">"How do I fix this bug?"</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; AI guesses from training data</div>
    <div class="rounded-lg border border-slate-700/50 bg-slate-900/40 p-3 text-xs text-slate-400">
      AI: <span class="text-slate-300">"Try this &#8212; it might work?"</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; you copy-paste, maybe it works</div>
    <div class="rounded-lg border border-red-900/40 bg-red-950/10 p-3 text-xs text-slate-500 italic">
      😐 3 hours of back-and-forth
    </div>
  </div>
  <div class="space-y-3">
    <div class="text-xs font-mono text-emerald-500 tracking-widest mb-4">WITH MCP</div>
    <div class="rounded-lg border border-emerald-800/40 bg-emerald-950/10 p-3 text-xs text-slate-400">
      You: <span class="text-slate-300">"Fix the bug in auth.ts"</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; AI reads auth.ts, runs tests, sees errors</div>
    <div class="rounded-lg border border-emerald-800/40 bg-emerald-950/10 p-3 text-xs text-slate-400">
      AI: <span class="text-emerald-300">edits file &#8594; runs tests &#8594; "Fixed. Tests pass."</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; actual working code</div>
    <div class="rounded-lg border border-emerald-800/40 bg-emerald-950/10 p-3 text-xs text-emerald-500 italic">
      ✓ Done in 40 seconds
    </div>
  </div>
</div>
<div class="mt-5 text-center text-xs text-slate-600">MCP is the bridge from <span class="text-amber-400">AI that advises</span> &#8594; <span class="text-emerald-400">AI that acts</span></div>

---
layout: center
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 2F — SKILLS EXPLAINED
     ════════════════════════════════════════════════════ -->

# Skills: The Agent's Expertise

<div class="grid grid-cols-2 gap-8 mt-6 max-w-3xl mx-auto">
  <div class="space-y-3">
    <div class="text-xs font-mono text-slate-500 tracking-widest mb-4">WITHOUT SKILLS</div>
    <div class="rounded-lg border border-slate-700/50 bg-slate-900/40 p-3 text-xs text-slate-400">
      You: <span class="text-slate-300">"Write tests for this feature"</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; agent figures it out from scratch</div>
    <div class="rounded-lg border border-slate-700/50 bg-slate-900/40 p-3 text-xs text-slate-500">
      Agent writes <em>something</em>. Maybe good, maybe not. No consistency.
    </div>
    <div class="rounded-lg border border-red-900/40 bg-red-950/10 p-3 text-xs text-slate-500 italic">
      🎲 Results vary every time
    </div>
  </div>
  <div class="space-y-3">
    <div class="text-xs font-mono text-amber-500 tracking-widest mb-4">WITH A TDD SKILL</div>
    <div class="rounded-lg border border-amber-800/40 bg-amber-950/10 p-3 text-xs text-slate-400">
      You: <span class="text-slate-300">"Write tests for this feature"</span>
    </div>
    <div class="text-xs text-slate-600 text-center">&#8595; agent loads the TDD playbook</div>
    <div class="rounded-lg border border-amber-800/40 bg-amber-950/10 p-3 text-xs text-slate-400">
      Agent follows: red &#8594; green &#8594; refactor. Edge cases. Mocks. Coverage check.
    </div>
    <div class="rounded-lg border border-amber-800/40 bg-amber-950/10 p-3 text-xs text-amber-400 italic">
      ✓ Mid-level quality, consistently. Senior, sometimes.
    </div>
  </div>
</div>
<div class="mt-4 text-center text-xs text-slate-600">Skills = reusable expertise you teach the agent once, and it applies forever.<br><span class="text-amber-500/70">Brainstorm · TDD · Deploy · Code Review · Security Audit · ...</span></div>

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

# Oh, By The Way — These Slides Were Vibed Too.

<div class="grid grid-cols-2 gap-10 mt-8 items-center max-w-2xl mx-auto">

  <div class="space-y-3 text-left">
    <div class="text-xs font-mono text-slate-500 tracking-widest mb-4">PROOF OF CONCEPT</div>
    <div class="text-sm text-slate-300">This entire presentation — 15 slides, custom components, live on Cloudflare — was built in one terminal session.</div>
    <div class="text-sm text-slate-300">No PowerPoint. No Figma. No IDE.</div>
    <div class="mt-4 text-sm text-emerald-400 font-mono">Just: <span class="text-white">claude "make me a presentation"</span></div>
    <div class="mt-3 text-xs text-slate-600 italic">(and some back-and-forth. AI is not magic. Yet.)</div>
  </div>

  <div class="space-y-3 text-center">
    <div class="rounded-xl border border-blue-800/40 bg-blue-950/15 p-5">
      <div class="text-xs text-blue-400 font-mono mb-3 tracking-wide">SCAN — KEEP THE SLIDES</div>
      <img src="/qr-presentation.png" class="mx-auto w-28 h-28" alt="QR code" />
    </div>
    <div class="text-xs text-slate-600 font-mono">vibe-code-komdigi-2026.yanuz.workers.dev</div>
  </div>

</div>

---
title: You Have 75 Minutes Starting at 10:15
---

<!-- ═══════════════════════════════════════════════════════
     SLIDE 14 — YOU HAVE 75 MINUTES
     ════════════════════════════════════════════════════ -->

<div style="text-align: center; margin-bottom: 18px;"><h1 style="font-size: 1.9rem; font-weight: 700; color: white; line-height: 1.2;">You Have 75 Minutes Starting at 10:15</h1></div>
<div style="max-width: 520px; margin: 0 auto;">
  <div style="border-radius: 12px; border: 1px solid rgba(59,130,246,0.4); background: rgba(23,37,84,0.12); padding: 24px;">
    <div style="font-size: 10px; font-family: monospace; color: #60A5FA; letter-spacing: 0.2em; margin-bottom: 20px;">YOUR QUICK-START GUIDE</div>
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: flex; align-items: flex-start; gap: 12px;">
        <div style="color: #60A5FA; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; min-width: 16px;">1</div>
        <div>
          <div style="font-size: 0.875rem; font-weight: 600; color: white; margin-bottom: 4px;">Plan before you prompt</div>
          <div style="font-size: 0.75rem; color: #64748B; font-family: monospace; background: rgba(15,25,41,0.6); border-radius: 6px; padding: 4px 8px;">"I want to build X for Y users. Key features: A, B, C."</div>
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
          <div style="font-size: 0.75rem; color: #64748B; font-family: monospace; background: rgba(15,25,41,0.6); border-radius: 6px; padding: 4px 8px;">claude "Build the app &#8212; read plan, integrate design, deploy Cloudflare"</div>
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
  <div style="margin-top: 12px; font-size: 0.72rem; color: #374151; font-family: monospace; text-align: center;">npm install -g @anthropic-ai/claude-code</div>
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
    <div class="text-xs text-slate-500 leading-relaxed">Copilot · Stitch · Cursor</div>
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
