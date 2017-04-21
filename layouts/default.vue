<template>
  <div>
    <navigation>
      <nuxt-link tag="li" class="button" to="/" exact><a>{{ $t('home') }}</a></nuxt-link>
      <nuxt-link tag="li" class="button" to="/todo" exact><a>{{ $t('todos') }}</a></nuxt-link>
    </navigation>
    <nuxt/>
  </div>
</template>

<script>
import navigation from '~/components/Navigation';

export default {
  head: {
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
    ],
  },
  components: {
    navigation,
  }
}
</script>
