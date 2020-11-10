<template>
  <div id="app" class="app">
    <div class="app__nav">
      <BaseLogo class="app__logo" />
      <router-link to="/">Inicio</router-link>
      <router-link to="/favorites">Favoritos</router-link>
      <a href="http://www.hectorvillar.com/" target="BLANK">Contacto</a>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view class="animated" />
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions('productStore', ['getAllProducts', 'getProductsByCategory']),
  },
  mounted() {
    this.getAllProducts()
  },
}
</script>

<style lang="scss">
.app {
  max-width: 44rem;
  margin: 0 auto;
  color: var(--color-text);
  text-align: center;

  &__logo {
    position: absolute;
    left: $gutter;
    top: $gutter;
  }

  &__nav {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: unit('lg');

    a {
      padding: unit('xs');
      font-weight: bold;
      color: var(--color-primary);

      &.router-link-exact-active {
        color: white;
        background-color: var(--color-link);
        border-radius: $radius;
      }
    }
  }
}
</style>
