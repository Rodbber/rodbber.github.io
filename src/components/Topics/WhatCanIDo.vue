<template>
  <div class="space-y-5">
    <!-- Category Carousel -->
    <div class="flex items-center gap-2">
      <button
        @click="prevCategory"
        :disabled="activeCategoryIndex === 0"
        class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="flex gap-2 overflow-x-auto flex-1 scrollbar-hide pb-0.5" ref="tabsRef">
        <button
          v-for="(cat, index) in categories"
          :key="cat.key"
          @click="setCategory(index)"
          class="flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all border"
          :class="
            activeCategoryIndex === index
              ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 border-gray-900 dark:border-gray-100'
              : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
          "
        >
          <span class="mr-1.5">{{ cat.icon }}</span>{{ cat.label }}
        </button>
      </div>

      <button
        @click="nextCategory"
        :disabled="activeCategoryIndex === categories.length - 1"
        class="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-25 disabled:cursor-not-allowed"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Accordion items -->
    <Transition name="fade" mode="out-in">
      <div :key="activeCategoryIndex" class="space-y-2">
        <div
          v-for="item in activeCategory.items"
          :key="item.key"
          class="border border-gray-200 dark:border-gray-600 rounded-xl overflow-hidden"
        >
          <button
            @click="toggleItem(item.key)"
            class="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div class="flex items-center gap-3">
              <span class="text-base">{{ item.icon }}</span>
              <span class="font-medium text-gray-800 dark:text-gray-200 text-sm">{{ item.title }}</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 text-gray-400 dark:text-gray-500 transition-transform duration-200 flex-shrink-0"
              :class="openItem === item.key ? 'rotate-180' : ''"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition name="accordion">
            <div v-if="openItem === item.key" class="border-t border-gray-100 dark:border-gray-700">
              <div class="px-4 pt-3 pb-4">
                <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ item.description }}</p>
                <VisualBlock :visual="item.visual" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import VisualBlock from './VisualBlock.vue'

const { t, tm } = useI18n()

const activeCategoryIndex = ref(0)
const openItem = ref(null)

const categories = computed(() => [
  {
    key: 'frontend',
    label: t('what_can_i_do.categories.frontend'),
    icon: '🖥️',
    items: [
      {
        key: 'component_architecture',
        icon: '🧩',
        title: t('what_can_i_do.frontend.component_architecture.title'),
        description: t('what_can_i_do.frontend.component_architecture.description'),
        visual: tm('what_can_i_do.visuals.component_architecture'),
      },
      {
        key: 'state_management',
        icon: '🗃️',
        title: t('what_can_i_do.frontend.state_management.title'),
        description: t('what_can_i_do.frontend.state_management.description'),
        visual: tm('what_can_i_do.visuals.state_management'),
      },
      {
        key: 'performance',
        icon: '⚡',
        title: t('what_can_i_do.frontend.performance.title'),
        description: t('what_can_i_do.frontend.performance.description'),
        visual: tm('what_can_i_do.visuals.performance'),
      },
    ],
  },
  {
    key: 'backend',
    label: t('what_can_i_do.categories.backend'),
    icon: '⚙️',
    items: [
      {
        key: 'restful_api',
        icon: '🔌',
        title: t('what_can_i_do.backend.restful_api.title'),
        description: t('what_can_i_do.backend.restful_api.description'),
        visual: tm('what_can_i_do.visuals.restful_api'),
      },
      {
        key: 'repository_pattern',
        icon: '🏛️',
        title: t('what_can_i_do.backend.repository_pattern.title'),
        description: t('what_can_i_do.backend.repository_pattern.description'),
        visual: tm('what_can_i_do.visuals.repository_pattern'),
      },
      {
        key: 'auth',
        icon: '🔐',
        title: t('what_can_i_do.backend.auth.title'),
        description: t('what_can_i_do.backend.auth.description'),
        visual: tm('what_can_i_do.visuals.auth'),
      },
    ],
  },
  {
    key: 'architecture',
    label: t('what_can_i_do.categories.architecture'),
    icon: '🏗️',
    items: [
      {
        key: 'ddd',
        icon: '🗺️',
        title: t('what_can_i_do.architecture.ddd.title'),
        description: t('what_can_i_do.architecture.ddd.description'),
        visual: tm('what_can_i_do.visuals.ddd'),
      },
      {
        key: 'clean_arch',
        icon: '🔄',
        title: t('what_can_i_do.architecture.clean_arch.title'),
        description: t('what_can_i_do.architecture.clean_arch.description'),
        visual: tm('what_can_i_do.visuals.clean_arch'),
      },
      {
        key: 'solid',
        icon: '🧱',
        title: t('what_can_i_do.architecture.solid.title'),
        description: t('what_can_i_do.architecture.solid.description'),
        visual: tm('what_can_i_do.visuals.solid'),
      },
    ],
  },
  {
    key: 'database',
    label: t('what_can_i_do.categories.database'),
    icon: '🗄️',
    items: [
      {
        key: 'schema_design',
        icon: '📐',
        title: t('what_can_i_do.database.schema_design.title'),
        description: t('what_can_i_do.database.schema_design.description'),
        visual: tm('what_can_i_do.visuals.schema_design'),
      },
      {
        key: 'indexing',
        icon: '🔍',
        title: t('what_can_i_do.database.indexing.title'),
        description: t('what_can_i_do.database.indexing.description'),
        visual: tm('what_can_i_do.visuals.indexing'),
      },
      {
        key: 'migrations',
        icon: '🚀',
        title: t('what_can_i_do.database.migrations.title'),
        description: t('what_can_i_do.database.migrations.description'),
        visual: tm('what_can_i_do.visuals.migrations'),
      },
    ],
  },
  {
    key: 'optimization',
    label: t('what_can_i_do.categories.optimization'),
    icon: '🚀',
    items: [
      {
        key: 'caching',
        icon: '💾',
        title: t('what_can_i_do.optimization.caching.title'),
        description: t('what_can_i_do.optimization.caching.description'),
        visual: tm('what_can_i_do.visuals.caching'),
      },
      {
        key: 'n_plus_one',
        icon: '♾️',
        title: t('what_can_i_do.optimization.n_plus_one.title'),
        description: t('what_can_i_do.optimization.n_plus_one.description'),
        visual: tm('what_can_i_do.visuals.n_plus_one'),
      },
      {
        key: 'bundle',
        icon: '📦',
        title: t('what_can_i_do.optimization.bundle.title'),
        description: t('what_can_i_do.optimization.bundle.description'),
        visual: tm('what_can_i_do.visuals.bundle'),
      },
    ],
  },
  {
    key: 'platforms',
    label: t('what_can_i_do.categories.platforms'),
    icon: '🌐',
    items: [
      {
        key: 'full_platform',
        icon: '🏢',
        title: t('what_can_i_do.platforms.full_platform.title'),
        description: t('what_can_i_do.platforms.full_platform.description'),
        visual: tm('what_can_i_do.visuals.full_platform'),
      },
      {
        key: 'institutional',
        icon: '🌐',
        title: t('what_can_i_do.platforms.institutional.title'),
        description: t('what_can_i_do.platforms.institutional.description'),
        visual: tm('what_can_i_do.visuals.institutional'),
      },
      {
        key: 'landing_page',
        icon: '🎯',
        title: t('what_can_i_do.platforms.landing_page.title'),
        description: t('what_can_i_do.platforms.landing_page.description'),
        visual: tm('what_can_i_do.visuals.landing_page'),
      },
    ],
  },
])

const activeCategory = computed(() => categories.value[activeCategoryIndex.value])

function setCategory(index) {
  activeCategoryIndex.value = index
  openItem.value = null
}

function prevCategory() {
  if (activeCategoryIndex.value > 0) setCategory(activeCategoryIndex.value - 1)
}

function nextCategory() {
  if (activeCategoryIndex.value < categories.value.length - 1) setCategory(activeCategoryIndex.value + 1)
}

function toggleItem(key) {
  openItem.value = openItem.value === key ? null : key
}
</script>

<style scoped>
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.2s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
}
</style>
