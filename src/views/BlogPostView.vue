<template>
  <main>
    <div class="article">
      <a class="article-title" v-html="post.title"></a>

      <div class="article-subtitleblock">
        <div>
          <a class="article-subtitleblock-tags" v-for="tag, tagIdx in post.tags" :key="tag+tagIdx" v-html="tag.name"></a>
        </div>
  
        <div>
          <a @click="redirectDate(post.date)" class="article-subtitleblock-meta">{{ post.date }}</a>
    
          <a href="#comments" class="article-subtitleblock-meta">Leave a comment</a>
        </div>
      </div>

      <p class="article-blurb" v-html="post.content"></p>
    </div>

    <div id="comments">
      <h2>Comments</h2>

      <div class="comment-block" v-if="comments.length">
        <div class="comment-block-item" v-for="comment, commentIdx in comments" :key="comment+commentIdx">
          <div class="comment-block-item-author">
            <img :src="comment.author.avatar_URL" alt="">
            <h4 v-html="comment.author.name"></h4>
          </div>

          <div class="comment-block-item-reply">
            <div class="comment-block-item-reply-text" v-html="comment.content"></div>

            <!-- <div class="comment-block-item-reply-interactions">
              <a><font-awesome-icon icon="fa-comment" /></a>
              <a><font-awesome-icon icon="fa-thumbs-up" /></a>
            </div> -->
          </div>
        </div>
      </div>

      <div v-else>
        No comments yet.
      </div>
    </div>
  </main>
</template>
  
<script lang="ts">
import router from '@/router';
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
  name: 'BlogPostView',
  components: {
  },
  setup() {
    const wp = inject('wp');

    fetch(`${wp}/posts/slug:${router.currentRoute.value.params.id}`)
      .then(response => response.json())
      .then(data => {
        post.value = data;
        post.value.date = new Date(post.value.date).toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });

        if (post.value.discussion.comment_count) {
          fetch(`${wp}/posts/${post.value.ID}/replies`)
          .then(response => response.json())
          .then(data => {
            comments.value = data.comments;
          })
        }
      });

    const post = ref({} as any);
    const comments = ref({} as any);

    const redirectDate = (date: string) => {
      const toDate = new Date(date).toLocaleString('default', { month: 'long', year: 'numeric' });
      router.push(`/blog/date/${toDate}`);
    }

    const redirectTags = (tag: string) => {
      router.push(`/blog/categories/${tag}`);
    }

    return {
      post,
      comments,

      redirectDate,
      redirectTags
    }
  }
});
</script>
  
<style lang="scss" scoped>
main {
  margin-top: 24px;
  margin-bottom: 100px;
  flex-wrap: wrap;

  a {
    cursor: pointer;
  }

  .article {
    background: var(--white);
    padding: 40px 20%;
    text-align: left;

    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 600px) {
      padding: 20px;
    }

    &-title {
        display: flex;
        font-family: 'Montserrat', sans-serif;
        font-size: 56px;
        line-height: 64px;
        font-weight: 200;
        text-transform: none;
        margin: 12px 0 36px;
        cursor: pointer;
        text-align: center;
        opacity: 1;
        transition: opacity 0.5s;
        text-decoration: none;
        justify-content: center;

        @media screen and (max-width: 600px) {
          text-align: left;
        }

        &:hover {
          opacity: 0.5;
        }
      }

    &-subtitleblock {
      display: flex;
      justify-content: space-between;
      margin: 24px 0;

      @media screen and (max-width: 600px) {
        flex-wrap: wrap;

        * {
          width: 100%;
          margin-left: 0px !important;
          margin-bottom: 12px;
        }
      }

      > div {

        &:first-child {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

      &-tags {
        display: inline-flex;
        font-family: Lato, sans-serif;
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        letter-spacing: 1px;
        transition: opacity 0.5s;
        text-transform: uppercase;
        margin: 0 12px 4px 0;
        opacity: 1;
        transition: opacity 0.5s;
  
        &:hover {
          opacity: 0.5;
        }
      }
  
      &-meta {
        display: inline-flex;
        font-family: Lato, sans-serif;
        font-size: 12px;
        line-height: 12px;
        font-weight: 500;
        letter-spacing: 1px;
        margin: 0 0 4px 12px;
        text-transform: uppercase;
        cursor: pointer;
        opacity: 1;
        transition: opacity 0.5s;
  
        &:hover {
          opacity: 0.5;
        }
      }
    }

    &-blurb {
      margin: 14px 0 28px;
      padding: 0;
      letter-spacing: 1px;
      font-weight: 300;
      line-height: 1.5;
    }
  }

  #comments {
    padding: 0 40px 40px;
    text-align: left;
    margin-top: 40px;
    background-color: var(--white);
    width: 100%;

    @media screen and (max-width: 600px) {
      padding: 20px;
    }

    h2 {
      font-size: 36px;
      line-height: 36px;
      font-weight: 200;
    }

    .comment-block {
      &-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 64px;

        @media screen and (max-width: 768px) {
          flex-wrap: wrap;
        }

        &-author {
          display: flex;
          align-items: center;
          margin-right: 16px;

          @media screen and (max-width: 768px) {
            margin-bottom: 32px;
          }

          h4 {
            margin: 0 0 0 16px;
            font-weight: 300;
            font-size: 24px;
            line-height: 24px;
            width: 125px;
          }
        }

        &-reply {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: space-between;

          &-interactions {
            display: flex;
            justify-content: flex-end;

            a {
              margin-left: 16px;
              display: flex;
              height: 24px;
              width: 24px;
              
              svg {
                width: 24px;
                height: 24px;

                :deep(path) {
                  opacity: 1;
                  transition: opacity 0.5s;
                }
              }

              
              &:hover {
                :deep(path) {
                  opacity: 0.5;
                }
              }
            }
          }

          &-text {
            // margin-bottom: 32px;

            :deep(p) {
              margin: 0;
              letter-spacing: 1.25px;
              line-height: 1.5;
              color: var(--primary);
            }
          }

          button {
            display: flex;
            margin-left: 8px;
          }
        }
      }
    }
  }
}
</style>
  