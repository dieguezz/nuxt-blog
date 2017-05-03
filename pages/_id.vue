<template>
  <article class="post p-t-1">
    <header class="p-a-1 p-x-2">
      <h1 itemprop="name headline" class="max title title-1">{{post.meta.title}}</h1>
      <time datetime="" class="date max title text-1 m-b-1 p-t-1" itemprop="dateModified">10 de abril de 2017</time>
    </header>
    <div v-html="compiledMD" class="post-body max p-x-2">

    </div>
    <div class="comments max p-a-2">
      <disqus shortname="diario-1" :identifier="this.$route.params.id" :url="baseUrl"></disqus>
    </div>
  </article>
</template>

<script>
import store from '~store';
import disqus from 'vue-disqus/VueDisqus.vue'
import marked from 'marked';

export default {
  cache: true,
  head () {
    return {
      title: this.post.meta.title
    }
  },
  async fetch({ params }) {
    await store.dispatch('posts/FETCH_POST', params.id);
  },
  asyncData({ route, env }) {
    return {
      baseUrl: `${env.baseUrl}/${route.fullPath}`
    }
  },
  computed: {
    post() {
      return this.$store.state.posts.post;
    },
    compiledMD() {
      return marked(this.post.content, { sanitize: true });
    }
  },
  components: {
    disqus
  }
}
</script>

<style lang="stylus">
  .max
    max-width 720px
    margin 0 auto
    display block
  .post-body
    line-height 1.8em
    color #888
    strong
      font-weight bold
      color #666
    h1, h2, h3
      padding-top 15px
      padding-bottom 15px
    ul, ol
      padding-left 2em
      line-height 1.2em
    ul
      list-style-type disc
    ol
      list-style-type decimal
    a
      color #888
      border-bottom 1px solid blue
      padding-bottom 1px
    code
      font-family monospace
      padding 0 7px
      background-color #ededed
      line-height 1.8em
      display inline-block
      font-size .9em
      white-space pre-line
</style>
