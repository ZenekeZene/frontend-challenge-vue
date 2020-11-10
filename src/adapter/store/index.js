import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import categoryStore from '@/adapter/store/category'
import productStore from '@/adapter/store/product'
import favoriteStore from '@/adapter/store/favorite'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'mini-shop',
      paths: ['favoriteStore.favorites'],
    }),
  ],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoryStore,
    productStore,
    favoriteStore,
  },
})
