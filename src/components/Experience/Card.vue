<template>
  <div class="w-full bg-white dark:bg-gray-800 px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 h-[450px] flex flex-col justify-between">
    <div>
      <div class="mb-3">
        <h6 class="font-bold text-sm text-gray-900 dark:text-gray-100">{{ title }}</h6>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 italic">{{ subtitle }}</p>
      </div>
      <div class="flex flex-wrap gap-1 mb-3">
        <span
          v-for="(tech, i) in stack"
          :key="i"
          class="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      <div class="overflow-hidden max-h-52">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="flex gap-2 mt-3">
      <button
        class="flex items-center gap-1 text-xs border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        @click="openModal"
      >
        <i class="pi pi-list text-xs"></i>
        {{ $t('more') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardExperience",
  emits: ['openModal'],
  props: {
    title: { default: null, type: String },
    subtitle: { default: null, type: String },
    stack: { default: () => [], type: Array },
    index: { default: null, type: Number },
  },
  methods: {
    openModal() {
      this.$emit('openModal', this.index);
    }
  }
};
</script>
