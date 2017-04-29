<template>
  <div class="home p-t-2">
      <ol class="post-list p-a-1">
        <li v-for="item in posts">
          <article itemscope itemtype="https://schema.org/Article" class="post-item">
            <header>
              <h1 itemprop="name headline" class="title title-2"><nuxt-link :to="'/' + item.meta.permalink" :title="item.meta.title">{{item.meta.title}}</nuxt-link></h1>
              <time datetime="" class="date title text-1 m-b-1" itemprop="dateModified">{{item.meta.date}}</time>
            </header>
            <p itemprop="description" class="text text-1">{{item.meta.resume}}</p>
          </article>
        </li>
    </ol>
    <pagination v-if="totalPages > 1" :current-page="currentPage || 1" :total-pages="totalPages"></pagination>
  </div>
</template>

<script>
import store from '~store';
import pagination from '~components/Pagination';

export default {
  cache: true,
  async fetch ({ store, query, redirect }) {
    await store.dispatch('posts/FETCH_POSTS', query.page);
    if (!query.page) {
      // return redirect('/?page=1')
    }
  },
  head () {
    return {
      title: 'Inicio'
    }
  },
  computed: {
      posts() {
        return this.$store.state.posts.posts
      },
      currentPage() {
        return this.$route.query.page;
      },
      totalPages() {
        return this.$store.state.posts.totalPages;
      }
  },
  components: {
    pagination,
  }
}
</script>
<style scoped lang="stylus">
  @import '../assets/css/variables';

  .post-list
    max-width 720px
    margin 0 auto
  time
    display block
  .post-item
    margin-bottom 50px
    a
      overflow hidden
      color $primaryTextColor
      position relative
      display inline-block
      transition color 120ms ease-in-out
      padding-bottom 3px
      max-width 100%
      text-overflow ellipsis
      white-space nowrap
      &:after
        transition transform 120ms ease-in
        content ""
        width 100%
        position absolute
        bottom 0px
        left 0
        transform translateX(-100%)
        height 3px
        background-color $primaryColor
      &:hover
        text-decoration none
        color $primaryColor
        &:after
          transform translateX(0)
</style>
