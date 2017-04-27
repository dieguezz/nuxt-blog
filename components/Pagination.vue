<template lang="html">
  <nav itemscope itemtype="http://schema.org/SiteNavigationElement" role="navigation" class="layout-row pagination m-b-2">
    <ul class="layout-row layout-align-center-center">
      <li itemprop="url" class="flex">
        <nuxt-link itemprop="name" v-if="currentPage > 1" :to="{ path: '/', query: { page: currentPage - 1 } }" exact class="p-a-1"><</nuxt-link>
      </li>
      <li v-for="page in pages" itemprop="url" class="flex">
        <nuxt-link itemprop="name" v-if="!page.selected" :to="{ path: '/', query: { page: page.number } }" :class="{'nuxt-link-active': page.selected}" exact class="p-a-1">{{ page.number }}</nuxt-link>
        <nuxt-link itemprop="name" v-else :to="{ path: '/', query: { page: page.number } }" :class="{'nuxt-link-active': page.selected}" exact class="p-a-1">{{ page.number }}</nuxt-link>
      </li>
      <li itemprop="url">
        <nuxt-link itemprop="name" v-if="currentPage < totalPages" :to="{ path: '/', query: { page: currentPage + 1 } }" exact class="p-a-1 flex">></nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  props: ['currentPage', 'totalPages'],
  created() {
    console.log('currentPage', this.currentPage)
    console.log('totalPages', this.totalPages)
    if (Object.keys(this.pages).length > 3) {
      console.log('Is Fucking long', Object.keys(this.pages).length)
      this.$forceUpdate();
    };
  },
  beforeUpdate() {
    console.log('currentPage', this.currentPage)
    console.log('totalPages', this.totalPages)
    console.log('Pages', Object.keys(this.pages).length)
  },
  computed: {
    pages() {
      const items = {};
      const computedPages = this.totalPages - 1;
      if (this.totalPages <= 3) {
        for (var i = 0; i < this.totalPages; i++) {
          const page = {
            number: i + 1,
            selected: i + 1 === this.currentPage
          }
          items[i] = page;
        }
      } else {
        let leftPart = 2;
        let rightPart = 0;

        if (this.currentPage < leftPart) {
          leftPart = this.currentPage;
          rightPart = 3 - leftPart;
        } else if (this.currentPage > this.totalPages - 3 / 2) {
          rightPart = this.totalPages - this.currentPage;
          leftPart = 3 - rightPart;
        }

        for (var i = 0; i < this.totalPages; i++) {
          const page = {
            number: i + 1,
            selected: i + 1 === this.currentPage
          }
          if (i <= 0 || i >= computedPages) {
            items[i] = page;
            continue
          }

          let breakView = {
            number: '...',
            enabled: false
          }

          if ((this.currentPage + rightPart) < computedPages && items[this.totalPages - 1] !== breakView) {
            items[this.totalPages - 1] = breakView;
          }

          const overCount = this.currentPage + rightPart - this.totalPages + 1

          if (overCount > 0 && i === this.currentPage - leftPart - overCount) {
            items[i] = page
          }

          if ((i >= this.currentPage - leftPart) && (i <= this.currentPage + rightPart)) {
            items[i] = page
            continue
          }
        }
      }
      return items
    }
  },
}
</script>

<style lang="stylus" scoped>
  @import '../assets/css/variables';
  .pagination
    display block
  a
    background-color $white
    color $primaryColor
    border 0
    &.nuxt-link-active
      background-color $primaryColor
      color $white
      font-weight bold
    &:focus
      outline 0
    &:hover:not(.nuxt-link-active)
      background-color alpha($primaryTextColor, 0.1)
    &:hover
      &.nuxt-link-active
        cursor not-allowed
        pointer-events painted

</style>
