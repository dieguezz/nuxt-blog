<template lang="html">
  <header>
    <nav class="navigation">
      <ul class="layout-row layout-align-center-center">
        <h1 hidden>Inicio</h1>
        <nuxt-link tag="li" to="/" exact><a class="p-a-1 flex"><span class="heart"></span></a></nuxt-link>
      </ul>
    </nav>
    <!-- <search-bar></search-bar> -->
  </header>
</template>

<script>

export default {}
</script>

<style lang="stylus" scoped>
  @import '../assets/css/variables';
  .heart {
    background-color: $primaryColor;
    display: inline-block;
    height: 30px;
    margin: 0 10px;
    position: relative;
    top: 0;
    transform: rotate(-45deg) scale(0.7);
    width: 30px;
  }

  .heart:before,
  .heart:after {
    content: "";
    background-color: $primaryColor;
    border-radius: 50%;
    height: 30px;
    position: absolute;
    width: 30px;
  }

  .heart:before {
    top: -15px;
    left: 0;
  }

  .heart:after {
    left: 15px;
    top: 0;
  }
  .flex
    flex-basis 100%
  .navigation
    background-color $white
    border-bottom: 1px solid #ebebeb;
    li
      a
        transition color 120ms ease-in-out
        line-height 2em

  img
    height 40px
    width 40px
  a
    color $primaryTextColor
    &:hover
      color $primaryColor
</style>
