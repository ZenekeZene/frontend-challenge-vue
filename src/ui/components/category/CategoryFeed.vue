<template>
  <article
    class="category-feed"
    :class="{ '--is-mini' : isMini }"
  >
    <BaseFeed
      v-if="!isLoading"
      :items="categories"
      :isLoading="isLoading"
      :component="component"
      classNameList="category-feed__list"
      classNameItem="category-feed__item"
      >
    </BaseFeed>
  </article>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Category from '@/ui/components/category/Category.vue'

export default {
  name: 'CategoryFeed',
  computed: {
    ...mapState('categoryStore', ['categories']),
    ...mapGetters('categoryStore', ['hasCategories']),
    component: () => Category.name.toLowerCase(),
  },
  data() {
    return {
      isLoading: true,
    };
  },
  props: {
    isMini: {
      type: Boolean,
      default: false,
    },
  },
  async created() {
    await this.getAllCategories();
    this.isLoading = false;
  },
  methods: {
    ...mapActions('categoryStore', ['getAllCategories']),
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

  &__item {
    border: $border-size solid transparent;

    &:hover {
      border-color: var(--color-primary);
    }
  }
}
</style>
