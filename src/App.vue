<template>
  <div class="w-full min-h-screen bg-zinc-50 dark:bg-gray-950">
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from './components/Footer.vue'
import MyHeader from './components/Header.vue'
import MyMain from './components/Main.vue'

export default {
  components: {MyMain, MyHeader, MyFooter},
  mounted() {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark')
    }
  },
}
</script>
