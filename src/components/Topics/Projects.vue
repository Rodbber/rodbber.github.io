<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(item, index) in projects" :key="index">
      <div class="w-full bg-white dark:bg-gray-800 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 h-[450px] flex flex-col justify-between">
        <div>
          <div class="mb-3">
            <h6 class="font-bold text-sm text-gray-900 dark:text-gray-100">{{ item.title }}</h6>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{{ item.subtitle }}</p>
          </div>
          <div class="flex flex-wrap gap-1 mb-3">
            <span
              v-for="(tech, i) in item.stack"
              :key="i"
              class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
            >
              {{ tech }}
            </span>
          </div>
          <div class="text-sm text-gray-700 dark:text-gray-300">
            <p v-for="(text, i) in item.content.text" :key="i" class="my-2">{{ text }}</p>
          </div>
        </div>
        <div class="flex gap-2 mt-3">
          <button
            class="flex items-center gap-1 text-xs border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            @click="openModal(index)"
          >
            <i class="pi pi-list text-xs"></i>
            {{ $t('more') }}
          </button>
          <a
            :href="item.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-1 text-xs bg-gray-900 dark:bg-gray-700 text-white rounded px-3 py-1.5 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
          >
            <i class="pi pi-github text-xs"></i>
            {{ $t('github') }}
          </a>
        </div>
      </div>
    </div>

    <Dialog
      v-if="selectedProject"
      :header="selectedProject.title"
      modal
      v-model:visible="visible"
      :style="{ width: '50vw' }"
      :draggable="false"
    >
      <p class="text-xs text-gray-500 mb-3 italic">{{ selectedProject.subtitle }}</p>
      <div class="flex flex-wrap gap-1 mb-4">
        <span
          v-for="(tech, i) in selectedProject.stack"
          :key="i"
          class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      <div class="font-sans text-sm">
        <p v-for="(text, i) in selectedProject.content.text" :key="i" class="my-2">{{ text }}</p>
      </div>
      <ul class="text-sm mt-3">
        <li
          v-for="(item, i) in selectedProject.content.list"
          :key="i"
          class="list-disc list-inside space-y-1 my-2"
        >
          {{ item }}
        </li>
      </ul>
      <div class="mt-4">
        <a
          :href="selectedProject.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm bg-gray-900 text-white rounded px-4 py-2 hover:bg-gray-700 transition-colors"
        >
          <i class="pi pi-github"></i>
          {{ $t('github') }}
        </a>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { tm } = useI18n();

const projects = computed(() => tm('projects.list'));

const selectedProject = ref(null);
const visible = ref(false);

const openModal = (index) => {
  selectedProject.value = projects.value[index];
  visible.value = true;
};
</script>
