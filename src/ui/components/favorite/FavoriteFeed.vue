<template>
  <article class="favorite-feed">
    <BaseFeed
      :items="favorites"
      :component="component"
      >
    </BaseFeed>
  </article>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Product from '@/ui/components/product/Product.vue'

export default {
  name: 'CategoryFeed',
  computed: {
    ...mapState('favoriteStore', ['favorites']),
    ...mapGetters('favoriteStore', ['hasFavorites']),
    component: () => Product.name.toLowerCase(),
  },
}
</script>
<style lang="scss">
.category-feed {
  & &__list {
    grid-auto-rows: unit('xxl');
  }

  &.--is-mini &__list {
    grid-auto-rows: unit('lg');
  }
}
</style>
