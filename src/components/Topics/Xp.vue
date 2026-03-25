<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="(item, index) in xp" :key="index">
      <CardExperience
        :index="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :stack="item.stack"
        @openModal="openModalDetail"
      >
        <template #content>
          <div class="text-sm text-gray-700 dark:text-gray-300">
            <p v-for="(text, i) in item.content.text" :key="i" class="my-2">{{ text }}</p>
          </div>
        </template>
      </CardExperience>
    </div>

    <Dialog
      v-if="selectedElement"
      :header="selectedElement.title"
      modal
      v-model:visible="visible"
      :style="{ width: '50vw' }"
      :draggable="false"
    >
      <p class="text-xs text-gray-500 mb-3 italic">{{ selectedElement.subtitle }}</p>
      <div class="flex flex-wrap gap-1 mb-4">
        <span
          v-for="(tech, i) in selectedElement.stack"
          :key="i"
          class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      <div class="font-sans text-sm">
        <p v-for="(text, i) in selectedElement.content.text" :key="i" class="my-2">{{ text }}</p>
      </div>
      <ul class="text-sm mt-3">
        <li
          v-for="(j, i) in selectedElement.content.list"
          :key="i"
          class="list-disc list-inside space-y-1 my-2"
        >
          {{ j }}
        </li>
      </ul>
      <div class="font-sans text-sm mt-4" v-if="selectedElement.content.impacts">
        <h3 class="font-semibold text-sm mb-1">{{ selectedElement.content.impacts.title }}</h3>
        <p class="text-gray-600">{{ selectedElement.content.impacts.text }}</p>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CardExperience from "../Experience/Card.vue";
import { useI18n } from "vue-i18n";

const { tm } = useI18n();

const xp = computed(() => tm("xp.xp"));

const selectedElement = ref(null);
const visible = ref(false);

const openModalDetail = (index) => {
  selectedElement.value = xp.value[index];
  visible.value = true;
};
</script>
