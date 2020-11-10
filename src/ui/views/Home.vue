<template>
  <article class="home">
    <h1>¡Bienvenido!</h1>
    <p class="pa-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae
      natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam
      deleniti eos cupiditate dolore doloribus!
    </p>
    <CategoryFeed />
  </article>
</template>

<script>
import CategoryFeed from '@/ui/components/category/CategoryFeed.vue'

export default {
  name: 'Home',
  components: {
    CategoryFeed,
  },
};
</script>
