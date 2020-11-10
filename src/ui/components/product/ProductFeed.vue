<template>
  <article class="product-feed">
    <BaseFeed
      v-if="!isLoading"
      :items="products"
      :isLoading="isLoading"
      :component="component"
      >
    </BaseFeed>
  </article>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import Product from '@/ui/components/product/Product.vue'

export default {
  name: 'ProductFeed',
  props: {
    categoryKey: {
      type: String,
    },
  },
  computed: {
    ...mapGetters('productStore', ['productsByCategory', 'hasProducts']),
    component: () => Product.name.toLowerCase(),
  },
  data() {
    return {
      products: [],
      isLoading: true,
    }
  },
  watch: {
    categoryKey() {
      this.getProducts()
    },
  },
  async created() {
    this.getProducts();
  },
  methods: {
    ...mapActions('productStore', ['getAllProducts', 'getProductsByCategory']),
    async getProducts() {
      if (!this.hasProducts) {
        this.products = await this.getAllProducts()
      }
      this.products = this.productsByCategory({ categoryKey: this.categoryKey })
      this.isLoading = false
    },
  },
}
</script>
