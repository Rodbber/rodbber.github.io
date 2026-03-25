<template>
  <div class="mt-3 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4">

    <!-- LAYERS: stacked architecture -->
    <template v-if="visual.type === 'layers'">
      <div class="space-y-1">
        <template v-for="(layer, i) in visual.layers" :key="i">
          <div
            class="flex items-center justify-between px-3 py-2.5 rounded-lg border text-sm dark:border-gray-600"
            :class="layer.class ?? 'bg-white dark:bg-gray-700 border-gray-100'"
          >
            <div class="flex items-center gap-2 min-w-0">
              <span v-if="layer.icon" class="flex-shrink-0 text-base">{{ layer.icon }}</span>
              <span class="font-medium text-gray-800 dark:text-gray-200">{{ layer.label }}</span>
            </div>
            <span class="text-xs text-gray-400 dark:text-gray-500 ml-3 flex-shrink-0 text-right">{{ layer.sublabel }}</span>
          </div>
          <div v-if="i < visual.layers.length - 1" class="flex justify-center py-0.5">
            <svg class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </template>
      </div>
    </template>

    <!-- COMPARISON: before / after -->
    <template v-else-if="visual.type === 'comparison'">
      <div class="grid grid-cols-2 gap-2">
        <div class="bg-red-50 dark:bg-red-950/40 border border-red-100 dark:border-red-900/50 rounded-xl p-3">
          <div class="flex items-center gap-1.5 mb-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></span>
            <span class="text-xs font-semibold text-red-400 uppercase tracking-wide">{{ $t('visual.before') }}</span>
          </div>
          <div v-for="item in visual.before" :key="item.label" class="mb-2 last:mb-0">
            <div class="text-sm font-bold text-gray-800 dark:text-gray-200 font-mono leading-tight">{{ item.value }}</div>
            <div class="text-xs text-gray-400 dark:text-gray-500 leading-tight mt-0.5">{{ item.label }}</div>
          </div>
        </div>
        <div class="bg-green-50 dark:bg-green-950/40 border border-green-100 dark:border-green-900/50 rounded-xl p-3">
          <div class="flex items-center gap-1.5 mb-2.5">
            <span class="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
            <span class="text-xs font-semibold text-green-500 uppercase tracking-wide">{{ $t('visual.after') }}</span>
          </div>
          <div v-for="item in visual.after" :key="item.label" class="mb-2 last:mb-0">
            <div class="text-sm font-bold text-gray-800 dark:text-gray-200 font-mono leading-tight">{{ item.value }}</div>
            <div class="text-xs text-gray-400 dark:text-gray-500 leading-tight mt-0.5">{{ item.label }}</div>
          </div>
        </div>
      </div>
      <p v-if="visual.note" class="mt-2 text-xs text-gray-400 dark:text-gray-500 text-center font-mono bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg px-3 py-1.5">{{ visual.note }}</p>
    </template>

    <!-- MATRIX: role × permission grid -->
    <template v-else-if="visual.type === 'matrix'">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-gray-100 dark:border-gray-700">
              <th class="text-left pb-2 pr-4 text-xs text-gray-400 dark:text-gray-500 font-medium">{{ $t('visual.role') }}</th>
              <th v-for="col in visual.columns" :key="col" class="text-center pb-2 px-2 text-xs text-gray-500 dark:text-gray-400 font-medium">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in visual.rows" :key="row.role" class="border-b border-gray-50 dark:border-gray-700/50 last:border-0">
              <td class="py-2 pr-4 text-sm font-medium text-gray-700 dark:text-gray-300">{{ row.role }}</td>
              <td v-for="(allowed, i) in row.permissions" :key="i" class="text-center py-2 px-2">
                <svg v-if="allowed" class="w-4 h-4 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <svg v-else class="w-4 h-4 text-gray-200 dark:text-gray-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>

    <!-- FLOW: horizontal steps with arrows -->
    <template v-else-if="visual.type === 'flow'">
      <div class="flex flex-wrap items-center gap-1.5">
        <template v-for="(step, i) in visual.steps" :key="i">
          <div
            class="px-3 py-2 rounded-lg border text-xs flex-shrink-0"
            :class="step.class ?? 'bg-white dark:bg-gray-700 border-gray-100 dark:border-gray-600 text-gray-700 dark:text-gray-300'"
          >
            <div v-if="step.icon" class="text-sm mb-0.5 text-center">{{ step.icon }}</div>
            <div class="font-medium leading-tight">{{ step.label }}</div>
            <div v-if="step.sublabel" class="text-gray-400 dark:text-gray-500 font-normal leading-tight mt-0.5">{{ step.sublabel }}</div>
          </div>
          <svg v-if="i < visual.steps.length - 1" class="w-3.5 h-3.5 text-gray-300 dark:text-gray-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </template>
      </div>
    </template>

    <!-- METRICS: key numbers grid -->
    <template v-else-if="visual.type === 'metrics'">
      <div class="grid grid-cols-3 gap-2">
        <div v-for="metric in visual.items" :key="metric.label" class="bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-xl p-3 text-center">
          <div class="text-lg font-bold text-gray-900 dark:text-gray-100 font-mono leading-tight">{{ metric.value }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">{{ metric.label }}</div>
          <div v-if="metric.delta" class="text-xs font-semibold mt-1 leading-tight" :class="metric.good ? 'text-green-500' : 'text-red-400'">
            {{ metric.delta }}
          </div>
        </div>
      </div>
    </template>

    <!-- ROUTES: API endpoint list -->
    <template v-else-if="visual.type === 'routes'">
      <div class="space-y-1.5">
        <div v-for="route in visual.routes" :key="route.path" class="flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg px-3 py-2">
          <span
            class="text-xs font-bold font-mono px-2 py-0.5 rounded text-white flex-shrink-0 min-w-[2.75rem] text-center"
            :class="{
              'bg-green-500': route.method === 'GET',
              'bg-blue-500': route.method === 'POST',
              'bg-amber-500': route.method === 'PUT' || route.method === 'PATCH',
              'bg-red-500': route.method === 'DELETE',
            }"
          >{{ route.method }}</span>
          <span class="font-mono text-xs text-gray-600 dark:text-gray-300 flex-1 truncate">{{ route.path }}</span>
          <span class="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">{{ route.desc }}</span>
        </div>
      </div>
    </template>

    <!-- CARDS: SOLID principles -->
    <template v-else-if="visual.type === 'cards'">
      <div class="space-y-1.5">
        <div v-for="card in visual.cards" :key="card.letter" class="flex items-start gap-3 bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-lg px-3 py-2.5">
          <span class="flex-shrink-0 w-6 h-6 rounded-md bg-gray-100 dark:bg-gray-600 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300 mt-0.5">{{ card.letter }}</span>
          <div class="min-w-0">
            <div class="text-sm font-medium text-gray-800 dark:text-gray-200 leading-tight">{{ card.title }}</div>
            <div class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">{{ card.desc }}</div>
          </div>
        </div>
      </div>
    </template>

    <!-- SCHEMA: entity relationship -->
    <template v-else-if="visual.type === 'schema'">
      <div class="overflow-x-auto">
        <div class="flex items-start gap-2 min-w-max">
          <template v-for="(entity, i) in visual.entities" :key="entity.name">
            <div class="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden flex-shrink-0">
              <div class="px-3 py-1.5 bg-gray-50 dark:bg-gray-600 border-b border-gray-100 dark:border-gray-500">
                <span class="text-xs font-bold text-gray-700 dark:text-gray-200">{{ entity.name }}</span>
              </div>
              <div class="px-3 py-2 space-y-0.5">
                <div v-for="field in entity.fields" :key="field.name" class="flex items-center gap-2">
                  <span class="text-xs font-mono text-gray-500 dark:text-gray-400">{{ field.name }}</span>
                  <span class="text-xs text-gray-300 dark:text-gray-600 font-mono">{{ field.type }}</span>
                  <span v-if="field.note" class="text-xs text-amber-400">{{ field.note }}</span>
                </div>
              </div>
            </div>
            <div v-if="i < visual.entities.length - 1" class="flex items-center self-center flex-shrink-0 pt-1">
              <span class="text-xs text-gray-400 dark:text-gray-500 font-mono whitespace-nowrap">{{ visual.relations?.[i] ?? '→' }}</span>
            </div>
          </template>
        </div>
      </div>
    </template>

    <!-- TIMELINE: versioned steps -->
    <template v-else-if="visual.type === 'timeline'">
      <div class="space-y-0">
        <div v-for="(step, i) in visual.steps" :key="step.version" class="flex items-start gap-3">
          <div class="flex flex-col items-center flex-shrink-0">
            <div class="w-7 h-7 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 flex items-center justify-center z-10">
              <span class="text-xs text-gray-500 dark:text-gray-400 font-bold">{{ step.version }}</span>
            </div>
            <div v-if="i < visual.steps.length - 1" class="w-px h-5 bg-gray-200 dark:bg-gray-600"></div>
          </div>
          <div class="pb-1 pt-1">
            <div class="text-sm font-medium text-gray-700 dark:text-gray-300 leading-tight">{{ step.label }}</div>
            <div v-if="step.sublabel" class="text-xs text-gray-400 dark:text-gray-500 mt-0.5 leading-tight">{{ step.sublabel }}</div>
          </div>
        </div>
      </div>
    </template>

  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps({
  visual: { type: Object, required: true }
})
</script>
