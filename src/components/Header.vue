<template>
  <header class="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 text-gray-600 h-16">
    <div class="max-w-7xl mx-auto px-5 h-full flex items-center relative">
      <nav class="flex-1 items-center justify-center gap-8 hidden lg:flex">
        <a
          href="#about"
          @click="scrolling($event)"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >{{ $t("about.title") }}</a>
        <a
          href="#xp"
          @click="scrolling($event)"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >{{ $t("xp.title") }}</a>
        <a
          href="#what-can-i-do"
          @click="scrolling($event)"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >{{ $t("what_can_i_do.nav") }}</a>
        <a
          href="#projects"
          @click="scrolling($event)"
          class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >{{ $t("projects.title") }}</a>
      </nav>

      <div class="absolute left-5 flex lg:hidden">
        <Dropdown placeholder="Menu" class="w-auto" :options="ancors" optionLabel="name">
          <template #option="{ option }">
            <a
              :href="option.href"
              @click="scrolling($event)"
              class="text-sm text-gray-700 dark:text-gray-300"
            >{{ option.name }}</a>
          </template>
        </Dropdown>
      </div>

      <div class="absolute right-5 flex items-center gap-2">
        <button
          @click="toggleDark"
          class="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="$t('theme.toggle')"
        >
          <!-- Sun icon (shown in dark mode) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon (shown in light mode) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        <Dropdown
          v-model="selectedLanguage"
          :options="languages"
          optionValue="code"
          optionLabel="name"
          placeholder="Idioma"
          class="w-auto"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "myHeader",
  data() {
    return {
      selectedLanguage: null,
      isDark: false,
      ancors: [
        { name: this.$t("about.title"), href: "#about" },
        { name: this.$t("xp.title"), href: "#xp" },
        { name: this.$t("what_can_i_do.nav"), href: "#what-can-i-do" },
        { name: this.$t("projects.title"), href: "#projects" },
      ],
    };
  },
  mounted() {
    this.selectedLanguage = this.$i18n.locale.toLowerCase();
    this.isDark = document.documentElement.classList.contains('dark');
  },
  computed: {
    languages() {
      return [
        { name: this.$t("language.pt"), code: "pt-br" },
        { name: this.$t("language.en"), code: "en" },
      ];
    },
  },
  methods: {
    scrolling(el) {
      el.preventDefault();
      document
        .querySelector(`${el.target.href.split("/").pop()}`)
        .scrollIntoView({ behavior: "smooth" });
    },
    toggleDark() {
      this.isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
  },
  watch: {
    selectedLanguage(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>
