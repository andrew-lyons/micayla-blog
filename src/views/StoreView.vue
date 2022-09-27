<template>
    <main>
        <div class="store-hero">
            <h2>Marigold Project Store?</h2>
        </div>
    </main>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'StoreView',
    components: {
    },
});
</script>

<style lang="scss" scoped>
main {
    margin-top: 24px;
    margin-bottom: 100px;

    .store {
        &-hero {
            position: relative;
            display: flex;
            min-height: 850px;
            width: 100%;
            align-items: center;
            justify-content: center;

            &::before {
                position: absolute;
                top: 0;
                bottom: 0;
                left: -25vw;
                right: -25vw;
                width: 150vw;
                content: '';
                background-color: var(--white);
                z-index: 1;
            }

            &::after {
                position: absolute;
                top: 0;
                bottom: 0;
                left: -25vw;
                right: -25vw;
                width: 150vw;
                content: '';
                background-image: url('https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/pexels-jess-bailey-designs-1167051.jpeg');
                background-repeat: no-repeat;
                background-size: cover;
                opacity: 0.8;
                z-index: 2;
            }

            h2 {
                width: 100%;
                font-size: 56px;
                line-height: 64px;
                font-weight: 200;
                z-index: 3;
            }
        }
    }
}
</style>
    