<template>
  <article class="favorites">
    <h1>Favoritos</h1>
    <FavoriteFeed />
  </article>
</template>
<script>
import FavoriteFeed from '@/ui/components/favorite/FavoriteFeed.vue'

export default {
  components: {
    FavoriteFeed,
  },
}
</script>
