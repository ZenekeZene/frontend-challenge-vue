<template>
<router-link :to="`/products/${slug}`" class="category">
  <img :src="image" class="category__image">
  <p class="category__name" :for="slug">{{ name }}</p>
</router-link>
</template>

<script>
export default {
  name: 'Category',
  props: {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
}
</script>
<style lang="scss" scoped>
.category {
  position: relative;
  display: inline-block;
  height: 100%;

  &__image {
    width: 100%;
    height: auto;
  }

  &__name {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: $gutter;
    font-weight: 800;
    color: white;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);

    @at-root .--is-mini & {
      width: 100%;
      height: unit('lg');
      padding: unit('xxs');
    }
  }
}
</style>
