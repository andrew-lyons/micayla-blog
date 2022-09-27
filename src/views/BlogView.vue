<template>
    <div class="blog">
        <div class="blog-posts">
            <div class="blog-posts-article">
                <a href="/blog/32" class="blog-posts-article-title">Lorem Ipsum Title</a>

                <a class="blog-posts-article-meta">September 17, 2022</a>
                <a class="blog-posts-article-meta">Leave a comment</a>

                <a href="/blog/32"><img class="blog-posts-article-featured" src="../assets/marigold_bg.jpg" alt=""></a>

                <p class="blog-posts-article-blurb">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard
                </p>

                <div class="blog-posts-article-links">
                    <a href="/blog/32" class="blog-posts-article-links-href">
                        Read more
                    </a>

                    <div class="blog-posts-article-links-tags">
                        <a href="">
                            Perinatal Loss
                        </a>
                        <a href="">
                            Mental Health
                        </a>
                    </div>
                </div>
            </div>

            <div class="blog-posts-article">
                <a class="blog-posts-article-title">Lorem Ipsum Title</a>

                <a class="blog-posts-article-meta">September 17, 2022</a>
                <a class="blog-posts-article-meta">Leave a comment</a>

                <a><img class="blog-posts-article-featured" src="../assets/marigold_bg.jpg" alt=""></a>

                <p class="blog-posts-article-blurb">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard
                </p>

                <div class="blog-posts-article-links">
                    <a href="" class="blog-posts-article-links-href">
                        Read more
                    </a>

                    <div class="blog-posts-article-links-tags">
                        <a href="">
                            Perinatal Loss
                        </a>
                        <a href="">
                            Mental Health
                        </a>
                    </div>
                </div>
            </div>

            <div class="blog-posts-article">
                <a class="blog-posts-article-title">Lorem Ipsum Title</a>

                <a class="blog-posts-article-meta">September 17, 2022</a>
                <a class="blog-posts-article-meta">Leave a comment</a>

                <a><img class="blog-posts-article-featured" src="../assets/marigold_bg.jpg" alt=""></a>

                <p class="blog-posts-article-blurb">
                    Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion friends me message as delight. Whole front do of plate heard
                </p>

                <div class="blog-posts-article-links">
                    <a href="" class="blog-posts-article-links-href">
                        Read more
                    </a>

                    <div class="blog-posts-article-links-tags">
                        <a href="">
                            Perinatal Loss
                        </a>
                        <a href="">
                            Mental Health
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="blog-sidebar">
            <div class="blog-sidebar-category">
                <h3>Date</h3>

                <a href="">September 2020</a>
                <a href="">October 2020</a>
                <a href="">November 2020</a>
                <a href="">December 2020</a>
            </div>

            <div class="blog-sidebar-category">
                <h3>Categories</h3>

                <a href="">Perinatal Loss</a>
                <a href="">Infertility</a>
                <a href="">Mental Health</a>
            </div>
        </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'BlogView',
    components: {
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .blog {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1140px;
    width: var(--width);
    margin-bottom: 70px;
    margin-top: 40px;

    h2 {
        font-size: 64px;
        line-height: 72px;
        font-weight: 100;
        margin: 36px 0 64px;
        width: 100%;
        cursor: default;
    }

    &-posts {
        width: 68.4%;
        padding-right: 48px;

        @media screen and (max-width: 1024px) {
            width: 100%;
            order: 2;
            padding: 0;
        }

        &-article {
            background: var(--white);
            padding: 40px;
            text-align: left;
            margin-bottom: 24px;

            @media screen and (max-width: 600px) {
                padding: 20px;
            }

            &-title {
                display: flex;
                font-family: 'Montserrat', sans-serif;
                font-size: 40px;
                line-height: 56px;
                font-weight: 200;
                text-transform: none;
                margin: 0;
                cursor: pointer;
                text-align: left;
                width: 100%;
                opacity: 1;
                transition: opacity 0.5s;
                text-decoration: none;

                &:hover {
                    opacity: 0.5;
                }
            }

            &-meta {
                display: inline-flex;
                font-family: Lato, sans-serif;
                font-size: 8px;
                font-weight: 500;
                letter-spacing: 1px;
                margin: 0 16px 20px 0;
                text-transform: uppercase;
                cursor: pointer;
                opacity: 1;
                transition: opacity 0.5s;

                &:hover {
                    opacity: 0.5;
                }
            }

            a {
                cursor: pointer;
            }

            &-featured {
                width: 100%;
                height: auto;
            }

            &-blurb {
                margin: 14px 0 28px;
                padding: 0;
                letter-spacing: 2px;
                font-weight: 300;
                line-height: 1.625;
            }

            &-links {
                display: flex;
                flex-wrap: wrap;

                > a {
                    display: inline-flex;
                    font-family: "Montserrat", Sans-serif;
                    font-size: 11px;
                    font-weight: 400;
                    text-transform: uppercase;
                    fill: var(--white);
                    background-color: var(--white);
                    border-style: solid;
                    border-width: 1px 1px 1px 1px;
                    border-color: var(--primary-light);
                    border-radius: 0px 0px 0px 0px;
                    padding: 10px 20px;
                    margin-bottom: 24px;
                    cursor: pointer;
                    text-decoration: none;
                    letter-spacing: 2px;
                    transition: background-color 0.5s, color 0.5s;

                    &:hover {
                        background-color: var(--primary-light);
                        color: var(--white);
                    }
                }

                &-tags {
                    display: flex;
                    width: 100%;

                    a {
                        background-color: none;
                        padding: 0;
                        margin-right: 16px;
                        text-decoration: none;
                        font-size: 11px;
                        letter-spacing: 1px;
                        opacity: 1;
                        transition: opacity 0.5s;

                        &:hover {
                            opacity: 0.5;
                        }
                    }
                }
            }
        }
    }

    &-sidebar {
        display: flex;
        flex-wrap: wrap;
        width: 31.6%;
        height: 100%;

        @media screen and (max-width: 1024px) {
            width: 100%;
            order: 1;
            justify-content: space-between;
            align-items: flex-start;
        }

        &-category {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 24px;
            cursor: default;

            @media screen and (max-width: 1024px) {
                width: 45%;
            }

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            h3 {
                font-size: 15px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-top: 0;
            }

            a {
                border-bottom: 0;
                margin-bottom: 10px;
                padding-bottom: 10px;
                padding: 10px;
                text-align: center;
                background: var(--white);
                text-transform: uppercase;
                letter-spacing: 5px;
                font-weight: 800;
                font-size: 12px;
                line-height: 16px;
                padding: 10px;
                width: 100%;
                text-decoration: none;
                transition: background-color 0.5s, color 0.5s;

                &:hover {
                    background-color: var(--primary-light);
                    color: var(--white);
                }
            }
        }
    }
  }
  </style>
  