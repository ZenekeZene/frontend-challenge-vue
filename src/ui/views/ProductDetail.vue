<template>
  <article class="product-detail">
    <section v-if="product">
      <BaseBack />
      <h1 class="product-detail__title mb-lg">{{ product.name }}</h1>
      <img class="product-detail__image" :src="product.image">
      <section v-if="product.sizes">
        <p class="mb-none text-bold">Tallas:</p>
        <ul class="product-detail__sizes">
          <li v-for="size in product.sizes" :key="`size-${size}`"
            class="pa-xs">
            {{ size }}
          </li>
        </ul>
      </section>
      <h4 class="product-detail__price mb-lg">{{ product.price }}€</h4>
      <ProductActions :id="id" isDetail />
    </section>
  </article>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ProductActions from '@/ui/components/product/ProductActions.vue'

export default {
  name: 'ProductDetail',
  components: {
    ProductActions,
  },
  computed: {
    ...mapGetters('productStore', ['productById']),
    id() {
      return Number(this.$route.params.id)
    },
  },
  data() {
    return {
      product: null,
    }
  },
  async created() {
    this.product = this.productById({ id: this.id })
    if (!this.product) {
      this.product = await this.getProductById({ id: this.id })
    }
  },
  methods: {
    ...mapActions('productStore', ['getProductById']),
  },
}
</script>
<style lang="scss" scoped>
.product-detail {
  position: relative;

  &__image {
    max-width: 10rem;
  }

  &__sizes {
    @include flex-centered;
  }

  &__price {
    display: inline-block;
    padding: unit('xs');
    border-bottom: $border-size solid var(--color-tertiary);
  }
}
</style>
