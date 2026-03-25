<template>
  <div v-for="(i, index) in listElement" :key="index" class="mb-5">
    <Popper arrow openDelay="0" closeDelay="100">
      <button
        class="bg-transparent border-0 hover:border-none transition-none focus:outline-none flex flex-col items-center  transition-all hover:scale-110"
      >
        <div
          class="w-24 h-24 border border-gray-200 dark:border-gray-600 bg-gray-300 dark:bg-gray-700 rounded flex justify-center"
        >
          <img :height="height" :width="width" :src="i.src" :alt="i.text" />
        </div>
        <div class="text-center">
          <span class="font-bold dark:text-gray-200">{{ i.subtitle }}</span>
        </div>
      </button>
      <template #content>
        <div class="max-w-96 max-h-28 overflow-auto">
          <span>{{ $t(`about.stack_texts.${i.tkey}`) }}</span>
        </div>
      </template>
    </Popper>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const width = ref(50);
    const height = ref(50);

    const listElement = [
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        subtitle: "PHP",
        tkey: "php",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        subtitle: "Laravel",
        tkey: "laravel",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg",
        subtitle: "Liveware",
        tkey: "liveware",
      },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      //   subtitle: "JavaScript",
      //   tkey: "js",
      // },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
        subtitle: "Vue",
        tkey: "vue",
      },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        subtitle: "React",
        tkey: "react",
      },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      //   subtitle: "HTML",
      //   tkey: "html",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      //   subtitle: "CSS",
      //   tkey: "css",
      // },
      {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        subtitle: "Tailwind",
        tkey: "tailwind",
      },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      //   subtitle: "Java",
      //   tkey: "java",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg",
      //   subtitle: "Spring boot",
      //   tkey: "spring",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      //   subtitle: "Python",
      //   tkey: "python",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg",
      //   subtitle: "Django",
      //   tkey: "django",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      //   subtitle: "C",
      //   text: "",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      //   subtitle: "C++",
      //   text: "",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      //   subtitle: "C#",
      //   tkey: "cs",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
      //   subtitle: "Electron",
      //   tkey: "electron",
      // },
      // {
      //   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
      //   subtitle: "Docker",
      //   tkey: "docker",
      // },
    ];

    return { width, height, listElement };
  },
};
</script>

<style>
:root {
  --popper-theme-background-color: #333333;
  --popper-theme-background-color-hover: #333333;
  --popper-theme-text-color: #ffffff;
  --popper-theme-border-width: 0px;
  --popper-theme-border-style: solid;
  --popper-theme-border-radius: 6px;
  --popper-theme-padding: 32px;
  --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}
</style>