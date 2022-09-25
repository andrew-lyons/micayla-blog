<template>
    <main id="home-about-me">
        <div class="triple-image-container">
            <div class="triple-image-container-img1">
                <img src="https://jane.brandingmypurpose.com/wp-content/uploads/2022/06/pexels-jess-bailey-designs-1167051.jpeg" alt="">
            </div>

            <div class="triple-image-container-img2">
                <img src="https://jane.brandingmypurpose.com/wp-content/uploads/elementor/thumbs/pexels-teona-swift-6913737-scaled-1-prfuhnq1tpp9r3mhvmjxsukxit8rs8oiwrzbtkvsnc.jpeg" alt="">
            </div>

            <div class="triple-image-container-img3">
                <img src="https://jane.brandingmypurpose.com/wp-content/uploads/elementor/thumbs/tamara-bellis-GRfLA7aXlO4-unsplash-scaled-1-1366x2048-1-prfuh0832ut3oukmoue9kiieo6glft38hjo6tnumyw.jpeg" alt="">
            </div>
        </div>

        <div class="triple-image-text">
            <h4>About Me</h4>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend a lorem eu commodo. Integer non turpis nibh. Praesent semper ligula at tellus finibus bibendum vitae at eros.</p>

            <button>Find out more</button>
        </div>
    </main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomeTripleImage'
});
</script>

<style lang="scss" scoped>
    main {
        min-height: 955px;
        padding: 80px 0;

        @media screen and (max-width: 1024px) {
            min-height: 1075px;
            padding-top: 60px;
        }

        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
            flex-direction: column;
            min-height: unset;
            padding: 0;
            margin: 50px 0;
        }

        &:before {
            content: " ";
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            width: 125vw;
            opacity: 0.05;
            background-repeat: no-repeat;
            background-position: -10vw 5%;
            background-size: cover;
            pointer-events: none;
            z-index: -1;
        }

        .triple-image-container {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            justify-content: space-between;
            width: 100%;

            @media screen and (max-width: 768px) {
                order: 2;
                margin-top: 32px;
            }
            
            div {
                display: flex;
                position: absolute;
                border-style: solid;
                border-width: 10px 10px 10px 10px;
                border-color: var(--white);
                border-radius: 1px 1px 1px 1px;

                img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }
            }

            &-img1 {
                max-height: 250px;
                max-width: 325px;
                left: 172.8px;
                z-index: 2;
                top: 28.8px;

                @media screen and (max-width: 900px) {
                    top: 100px;
                }

                @media screen and (max-width: 768px) {
                    position: unset !important;
                    max-width: unset;
                    max-height: unset;
                    width: calc(var(--width) / 2 - 8px);
                    height: calc(var(--width) / 2 - 8px);
                }
            }

            &-img2 {
                left: 325px;
                top: 220px;
                max-height: 570px;
                max-width: 290px;
                z-index: 2;

                @media screen and (max-width: 1024px) {
                    left: 200px;
                    top: 500px;
                    max-height: 400px;
                    max-width: 254px;
                }

                @media screen and (max-width: 768px) {
                    position: unset !important;
                    max-width: unset;
                    max-height: unset;
                    margin-left: 8px;
                    width: calc(var(--width) / 2 - 8px);
                    height: calc(var(--width) / 2 - 8px);
                }
            }

            &-img3 {
                max-width: 360px;
                top: 220px;
                left: 0;
                z-index: 1;

                @media screen and (max-width: 768px) {
                    position: unset !important;
                    max-width: unset;
                    max-height: unset;
                    margin-top: 16px;
                    width: var(--width);
                    height: var(--width);
                }
            }
        }

        .triple-image-text {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            align-self: center;
            justify-content: center;
            text-align: center;
            width: 50%;
            padding-left: 25px;

            @media screen and (max-width: 1024px) {
                width: 60%;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
                order: 1;
                padding: 0;
            }

            h4 {
                color: var(--primary-light);
                font-family: "MonteCarlo", Sans-serif;
                font-size: 61px;
                font-weight: 400;
                line-height: 58px;
                letter-spacing: 3.7px;
                margin: 0;
                font-weight: bold;
                width: 100%;
            }

            p {
                font-family: "Montserrat", Sans-serif;
                font-size: 16px;
                font-weight: 400;
                text-transform: none;
                line-height: 28px;
                letter-spacing: 1.5px;
                margin: 24px 0;
                max-width: 310px;
                width: 100%;

                @media screen and (max-width: 768px) {
                    max-width: unset;
                }
            }

            button {
                font-family: "Montserrat", Sans-serif;
                font-size: 12px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 3.1px;
                fill: var(--white);
                color: var(--white);
                background-color: var(--primary-light);
                border-radius: 0px 0px 0px 0px;
                border: none;
                padding: 20px 40px;
                cursor: pointer;
                transition: background-color 0.25s;

                &:hover {
                    color: var(--white);
                    background-color: #E2B49A;
                }
            }
        }
    }
</style>