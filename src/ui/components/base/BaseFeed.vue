<template>
  <article class="feed">
    <p v-if="isLoading" for="loading">Cargando...</p>
    <section v-else-if="!isLoading">
      <ul
        v-if="items && items.length > 0"
        class="feed__list l-grid-2columns"
        :class="classNameList"
      >
        <li
          v-for="(item, index) in items"
          :key="`item-${index}`"
          class="feed__item"
          :class="classNameItem"
          :for="item.name"
        >
          <component :is="component" v-bind="item"></component>
        </li>
      </ul>
      <p v-else>No hemos encontrado nada.</p>
    </section>
  </article>
</template>

<script>
import Category from '@/ui/components/category/Category.vue'
import Product from '@/ui/components/product/Product.vue'

export default {
  name: 'BaseFeed',
  components: {
    Category,
    Product,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    component: {
      type: String,
      default: 'category',
    },
    classNameList: {
      type: String,
      default: '',
    },
    classNameItem: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.feed {
  &__list {
    list-style: none;
    padding: $gutter;
  }

  &__item {
    overflow: hidden;
    border-radius: $radius;
  }

  &__link {
    text-decoration: none;
  }
}
</style>
