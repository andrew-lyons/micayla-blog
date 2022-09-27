<template>
    <main>
        <div class="store-hero">
            <h2>Marigold Project Store?</h2>
            <p>Perhaps here we explain what the deal is and why there are occasionally some items here.</p>
        </div>

        <div class="store-products">
            <div class="store-products-item">
                <a><img src="../assets/logo.png" alt=""></a>
                <a><h3>Product Name</h3></a>
                <a><p>Product description goes here. This is an ornament which you will love blah blah.</p></a>
            </div>

            <div class="store-products-item">
                <a><img src="../assets/logo.png" alt=""></a>
                <a><h3>Product Name</h3></a>
                <a><p>Product description goes here. This is an ornament which you will love blah blah.</p></a>
            </div>

            <div class="store-products-item">
                <a><img src="../assets/logo.png" alt=""></a>
                <a><h3>Product Name</h3></a>
                <a><p>Product description goes here. This is an ornament which you will love blah blah.</p></a>
            </div>

            <div class="store-products-item">
                <a><img src="../assets/logo.png" alt=""></a>
                <a><h3>Product Name</h3></a>
                <a><p>Product description goes here. This is an ornament which you will love blah blah.</p></a>
            </div>
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
    flex-wrap: wrap;

    .store {
        &-hero {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;

            h2 {
                width: 100%;
                font-size: 56px;
                line-height: 64px;
                font-weight: 200;
                z-index: 3;
                margin-bottom: 0;
            }

            p {
                font-size: 16px;
                line-height: 24px;
                font-weight: 400;
                letter-spacing: 2px;
            }
        }

        &-products {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 50px;
            width: 100%;

            &-item {
                padding: 20px;
                background-color: var(--white);
                width: 28%;

                img {
                    width: 13.88vw;
                    height: 13.88vw;
                    object-fit: cover;
                }
            }
        }
    }
}
</style>
    