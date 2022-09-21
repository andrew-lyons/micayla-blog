<template>
  <div class="homepage">
    <div class="homepage-hero">
      <div class="homepage-hero-image">
        <img src="https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/profile.png" alt="">
      </div>
      <div class="homepage-hero-text">
        <div class="homepage-hero-text-divider"><span></span></div>
  
        <h1>hello and welcome!</h1>
  
        <p>
          Hi there, I'm Jane. This is a demo installation for the premade branding 
          and WordPress design created by Kelly Brito. It's perfect for minimal and 
          feminine brands.
        </p>

        <a>See the Program</a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1 {
    color: #363636;
    font-family: "Montserrat", Sans-serif;
    font-size: 52px;
    font-weight: 200;
    margin: 20px 0;
    letter-spacing: 2px;
  }

  p {
    text-align: center;
    color: #363636;
    font-family: "Montserrat", Sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 2.1em;
    letter-spacing: 2px;
  }

  a {
    font-family: "Montserrat", Sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    fill: #FFFFFF;
    color: #FFFFFF;
    background-color: #E2CECC;
    border-radius: 0px 0px 0px 0px;
    padding: 25px 50px;
  }

  .homepage {
    display: flex;

    &-hero {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 80px;

      &-image {
        width: 44%;
        transform: scaleX(-1);

        img {
          width: 100%;
          height: auto;
          transform: scale(1.3);
        }
      }
      &-text {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 44%;
        z-index: 1;
        margin-bottom: 50px;

        &-divider {
          display: flex;
          text-align: center;
          padding-top: 15px;
          padding-bottom: 15px;
          width: 100%;
  
          span {
            width: 10%;
            margin: 0 auto;
            border-top: 1.8px solid #E2CECC;
          }
        }
      }
    }
  }
</style>
