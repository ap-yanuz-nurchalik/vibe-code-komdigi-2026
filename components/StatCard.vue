<script setup lang="ts">
defineProps<{
  value: string
  label: string
  sub?: string
  highlight?: boolean
}>()
</script>

<template>
  <div
    class="rounded-xl border p-6 text-center"
    :class="highlight
      ? 'border-blue-700/60 bg-blue-950/20 ring-1 ring-blue-500/30'
      : 'border-slate-700/60 bg-slate-900/30'"
  >
    <div
      class="text-4xl font-bold tracking-tight mb-2"
      :class="highlight ? 'text-blue-300' : 'text-white'"
    >
      {{ value }}
    </div>
    <div class="text-sm text-slate-400 leading-snug">{{ label }}</div>
    <div v-if="sub" class="text-xs text-slate-600 mt-1">{{ sub }}</div>
  </div>
</template>
