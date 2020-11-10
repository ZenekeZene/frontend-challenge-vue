<template>
  <article
    class="product"
    :class="{ '--is-favorite': isFavorite }"
  >
    <section class="product__info">
      <div class="product__image-wrapper">
        <img
          :src="image"
          alt="Detail of product"
          class="product__image"
        >
      </div>
      <p>{{ name }}</p>
      <p v-if="price" class="product__price">{{ price }}€</p>
      <p v-else>Precio no disponible</p>
    </section>
    <ProductActions
      class="product__actions"
      :class="{ '--is-detail': isDetail }"
      :id="id"
    />
  </article>
</template>
<script>
import ProductActions from '@/ui/components/product/ProductActions.vue';

export default {
  name: 'Product',
  components: {
    ProductActions,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    sizes: {
      type: Array,
      default: () => [],
    },
    price: {
      type: Number,
      default: null,
    },
    categoryKey: {
      type: String,
    },
    isDetail: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.product {
  position: relative;

  &__info {
    transition: opacity $transition-duration $transition-easing;
  }

  &__image {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &-wrapper {
      position: relative;
      height: 10rem;
      overflow: hidden;

      &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgb(247, 247, 247);
      }
    }
  }

  &__price {
    display: inline-block;
    width: auto;
    padding: unit('xs');
    background: var(--color-tertiary);
    border-radius: $radius;
  }

  $self: &;

  &:hover {
    #{$self}__info {
      opacity: 0.5;
    }

    #{$self}__actions {
      display: flex;
      opacity: 1;
    }
  }

  &__actions:not(.--is-detail) {
    display: none;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate3D(-50%, -50%, 0);
  }

  &.--is-favorite {
    #{$self}__image {
      min-height: unit('md');
    }
  }
}
</style>
