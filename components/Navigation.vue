<template lang="html">
  <header>
    <nav class="navigation">
      <ul class="layout-row layout-align-center-center">
        <h1 hidden>Inicio</h1>
        <nuxt-link tag="li" to="/" exact><a class="p-a-1 flex"><span class="heart heart-1"></span><span class="heart heart-2"></span></a></nuxt-link>
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
    margin: 0 auto;
    position: relative;
    top: 0;
    width: 30px;
    position absolute
    top 10px
    bottom 0
    left 0
    right 0
  }

  .heart-2
    transform: rotate(-45deg) scale(0.5);
    background-color #0c76c3
    z-index 2
    top 9px
    &:before, &:after
      background-color #0c76c3!important

  .heart-1
    transition transform 120ms ease-in-out
    transform: rotate(-45deg) scale(0.5);
    z-index 1


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
    position relative
    height 45px
    li
      a
        transition color 120ms ease-in-out
        line-height 2em
        cursor pointerch

  a
    color $primaryTextColor
    &:hover
      color $primaryColor
      .heart-1
        transform: rotate(-45deg) scale(0.7);

</style>
