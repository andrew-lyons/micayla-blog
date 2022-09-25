<template>
    <main>
        <h4>get my latest products</h4>

        <form>
            <input type="text">
            <input type="text">
            <button>Subscribe</button>
        </form>
    </main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeDividerForm'
});
</script>

<style lang="scss" scoped>
    main {
        text-align: center;
        margin-top: 175px;
        padding: 100px 0px 150px 0px;
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        background-image: url(https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/background.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h4 {
        color: var(--white);
        font-family: "MonteCarlo", Sans-serif;
        font-size: 58px;
        font-weight: 100;
        line-height: 94px;
        letter-spacing: 1.4px;
        margin: 20px 0;
    }

    form {
        max-width: 600px;
        width: 100%;
        margin: 0 auto 20px;
        padding: 20px;
        background-color: #efedea;
        display: flex;

        input {
            background-color: #fff;
            color: #333333;
            border-color: #ccc;
            border-radius: 0px;
            border-style: solid;
            border-width: 1px;
            font-family: 'Open Sans',Arial,Helvetica,sans-serif;
            font-size: 14px;
            line-height: 20px;
            margin: 0 8px 0 0;
            padding: 10px 10px;
            width: 100%;
            box-sizing: border-box;
            overflow-y: initial;
        }

        button {
            background-color: #ccbfb1!important;
            border-color: #ccbfb1;
            border-style: solid;
            border-width: 1px;
            border-radius: 0px;
            box-shadow: none;
            color: var(--white) !important;
            cursor: pointer;
            font-family: 'Open Sans',Arial,Helvetica,sans-serif;
            font-size: 14px!important;
            font-weight: 700;
            line-height: 20px;
            margin: 0!important;
            padding: 10px!important;
            width: 100%;
            height: auto;
        }
    }
</style>