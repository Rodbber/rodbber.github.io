<template>
  <div class="space-y-6">
    <div class="space-y-3">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">{{ $t("about.headline") }}</h2>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ $t("about.paragraph1") }}</p>
      <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ $t("about.paragraph2") }}</p>
      <ul class="space-y-1 mt-2">
        <li
          v-for="(item, index) in services"
          :key="index"
          class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
        >
          <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="space-y-4">
      <h4 class="text-base font-semibold text-gray-900 dark:text-gray-100">{{ $t("about.stacks") }}</h4>
      <div class="flex gap-4 flex-wrap justify-center">
        <stacks></stacks>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Stacks from "./Stacks.vue";
import { useI18n } from 'vue-i18n'
const { tm } = useI18n()

const services = computed(() => tm("about.services"));
</script>
