<script setup lang="ts">
const props = defineProps<{
  prompt: string
  lines: string[]
  compact?: boolean
}>()

function lineStyle(line: string): Record<string, string> {
  const base: Record<string, string> = { lineHeight: '1.5' }
  if (line === '') return { ...base, minHeight: '8px' }
  if (line.startsWith('✓')) return { ...base, color: '#10B981' }
  if (line.startsWith('◆')) return { ...base, color: '#6366F1' }
  if (line.startsWith('🚀') || line.startsWith('🌍'))
    return { ...base, color: '#F59E0B', fontWeight: '600' }
  if (line.startsWith('  ') || line.startsWith('vitest'))
    return { ...base, color: '#64748B', paddingLeft: '12px' }
  return { ...base, color: '#94A3B8' }
}
</script>

<template>
  <div
    style="border-radius: 8px; overflow: hidden; font-family: 'JetBrains Mono', monospace;"
    :style="{ fontSize: compact ? '10px' : '11.5px' }"
  >
    <!-- Window chrome -->
    <div style="display: flex; align-items: center; gap: 6px; padding: 7px 12px; background: #1C1C1E;">
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #FF5F57; display: inline-block; flex-shrink: 0;"></span>
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #FFBD2E; display: inline-block; flex-shrink: 0;"></span>
      <span style="width: 10px; height: 10px; border-radius: 50%; background: #28C840; display: inline-block; flex-shrink: 0;"></span>
      <span style="margin-left: 10px; font-size: 9px; color: #6B7280; letter-spacing: 0.08em;">~/project</span>
    </div>
    <!-- Body -->
    <div
      style="background: #0D1117; padding: 10px 14px;"
      :style="{ minHeight: compact ? '90px' : '130px' }"
    >
      <!-- Prompt -->
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <span style="color: #3B82F6; flex-shrink: 0; margin-top: 1px;">❯</span>
        <span style="color: #E2E8F0; line-height: 1.5; word-break: break-all;">{{ prompt }}</span>
      </div>
      <!-- Output -->
      <div style="margin-top: 6px; padding-left: 14px;">
        <div
          v-for="(line, i) in lines"
          :key="i"
          :style="lineStyle(line)"
        >{{ line }}</div>
      </div>
    </div>
  </div>
</template>
