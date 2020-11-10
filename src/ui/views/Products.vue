<template>
  <article>
    <BaseBack go="/" />
    <div class="products">
      <CategoryFeed isMini />
      <h1>{{ categoryKey }}</h1>
      <ProductFeed :categoryKey="categoryKey" />
    </div>
  </article>
</template>
<script>
import ProductFeed from '@/ui/components/product/ProductFeed.vue'
import CategoryFeed from '@/ui/components/category/CategoryFeed.vue'

export default {
  name: 'Products',
  components: {
    ProductFeed,
    CategoryFeed,
  },
  computed: {
    categoryKey() {
      return this.$route.params.category;
    },
  },
}
</script>
