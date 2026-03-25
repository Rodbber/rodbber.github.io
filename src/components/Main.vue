<template>
  <main class="max-w-7xl mx-auto px-4 py-8 space-y-6">
    <card id="about">
      <template #header>
        <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ $t("about.title") }}</h4>
      </template>
      <template #body>
        <about></about>
      </template>
    </card>

    <card id="xp">
      <template #header>
        <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ $t("xp.title") }}</h4>
      </template>
      <template #body>
        <xp></xp>
      </template>
    </card>

    <card id="what-can-i-do">
      <template #header>
        <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ $t("what_can_i_do.title") }}</h4>
      </template>
      <template #body>
        <what-can-i-do></what-can-i-do>
      </template>
    </card>

    <card id="projects">
      <template #header>
        <h4 class="text-xl font-bold text-gray-900 dark:text-gray-100">{{ $t("projects.title") }}</h4>
      </template>
      <template #body>
        <projects></projects>
      </template>
    </card>
  </main>
</template>

<script>
import About from "./Topics/About.vue";
import Xp from "./Topics/Xp.vue";
import WhatCanIDo from "./Topics/WhatCanIDo.vue";
import Projects from "./Topics/Projects.vue";
import Contacts from "./Topics/Contacts.vue";
import Card from "./Card.vue";

export default {
  name: "myMain",
  components: { About, Xp, WhatCanIDo, Projects, Contacts, Card },
};
</script>
