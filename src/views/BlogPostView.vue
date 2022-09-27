<template>
  <main>
    <div class="article">
      <a href="/blog/32" class="article-title">Lorem Ipsum Title</a>

      <a class="article-meta">September 17, 2022</a>
      <a class="article-meta">Leave a comment</a>

      <a href="/blog/32"><img class="article-featured" src="../assets/marigold_bg.jpg" alt=""></a>

      <p class="article-blurb">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence
        way everything joy alteration boisterous the attachment. Party we years to order allow asked of. We so opinion
        friends me message as delight. Whole front do of plate heard
      </p>
    </div>
  </main>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BlogPostView',
  components: {
  },
});
</script>
  
<style lang="scss" scoped>
main {
  margin-top: 24px;
  margin-bottom: 100px;

  .article {
    background: var(--white);
    padding: 40px;
    text-align: left;
  
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
  
      >a {
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

</style>
  