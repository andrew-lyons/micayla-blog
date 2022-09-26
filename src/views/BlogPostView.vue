<template>
    <div class="blog-post">
        <h2>hi</h2>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .blog-post {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
    width: var(--width);
    margin-bottom: 70px;
    margin-top: 40px;
  }
  </style>
  