<template>
  <div class="home">
    <HomeHero />
    <HomeDividerImageText />
    <HomeTripleImage />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import HomeTripleImage from '../components/Home/HomeTripleImage.vue'
import HomeDividerImageText from '@/components/Home/HomeDividerImageText.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeHero,
    HomeTripleImage,
    HomeDividerImageText
  },
  setup() {
    onMounted(() => {
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('io-visible');
          }
        })
      }, {threshold: 0.25})
  
      document.querySelectorAll('main').forEach(el => intersectionObserver.observe(el));
    });
  }
});
</script>

<style lang="scss" scoped>
  main {
    opacity: 0;
    transition: opacity 1.5s;

    &.io-visible {
      opacity: 1 !important;
    }
  }
</style>
