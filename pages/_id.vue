<template>
  <article class="post p-t-1">
    <header class="p-a-1 p-x-2">
      <h1 itemprop="name headline" class="max title title-1">{{post.title}}</h1>
      <time datetime="" class="date max title text-1 m-b-1 p-t-1" itemprop="dateModified">10 de abril de 2017</time>
    </header>
    <div class="post-body max p-x-2">
      {{post.body}}
    </div>
    <div class="comments max p-a-2">
      <disqus shortname="diario-1" :identifier="this.$route.params.id" :url="baseUrl"></disqus>
    </div>
  </article>
</template>

<script>
import store from '~store';
import disqus from 'vue-disqus/VueDisqus.vue'

export default {
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
  },
  components: {
    disqus
  }
}
</script>

<style scoped lang="stylus">
  .max
    max-width 720px
    margin 0 auto
    display block
  .post-body
    line-height 1.8em
    font-size 17px
</style>
