<template>
  <div class="home">
    <HomeHero />
    <!-- <HomeDividerForm /> -->
    <HomeDividerImageText />
    <HomeTripleImage />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeHero from '@/components/Home/HomeHero.vue';
import HomeDividerForm from '@/components/Home/HomeDividerForm.vue';
import HomeDividerImageText from '@/components/Home/HomeDividerImageText.vue'
import HomeTripleImage from '../components/Home/HomeTripleImage.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
    HomeDividerImageText,
    HomeHero,
    // HomeDividerForm,
    HomeTripleImage
},
});
</script>

<style lang="scss" scoped>
  .home {
    main {
      display: flex;
      width: var(--width);
      max-width: 1140px;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }
  }
</style>
