<template>
    <main></main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeDivider'
});
</script>

<style lang="scss" scoped>
    main {
        margin-top: 175px;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        padding: 100px 0px 150px 0px;
        background-image: url(https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/background.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>