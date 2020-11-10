<template>
  <article class="product-actions">
    <button class="button --primary mb-none text-bold text-uppercase full-width">Comprar</button>
    <button
      v-if="!isDetail"
      class="button mb-none text-bold text-uppercase full-width"
      @click="$router.push({ name: 'ProductDetail', params: { id }})"
    >Ver
    </button>
    <button
      class="product-actions__favorite rounded"
      :class="{ '--is-detail': isDetail }"
      @click="toggleFavorite({ id })"
    ><span v-if="isFavorite({ idProduct: id })">💔</span>
    <span v-else>💘</span>
    </button>
  </article>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    isDetail: {
      type: Boolean,
      defaul: false,
    },
  },
  computed: {
    ...mapGetters('favoriteStore', ['isFavorite']),
  },
  methods: {
    ...mapActions('favoriteStore', ['toggleFavorite']),
  },
}
</script>

<style lang="scss" scoped>
.product-actions {
  @include flex-centered;
  flex-direction: column;
  align-items: center;
  gap: $gutter;
  height: 100%;
  padding: $gutter;
  border-radius: $radius;
  transition: opacity $transition-duration $transition-easing;

  &__favorite {
    $offset: unit('xs');
    position: absolute;
    top: $offset;
    right: $offset;
    display: inline-block;
    @include size(unit('xl'));
    padding: unit('xs');
    font-size: 1.5rem;
    text-align: center;
    border-radius: 50%;

    &.--is-detail {
      top: $gutter;
    }
  }
}
</style>
