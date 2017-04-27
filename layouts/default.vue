<template>
  <div>
    <navigation></navigation>
    <main>
      <nuxt/>
    </main>
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
