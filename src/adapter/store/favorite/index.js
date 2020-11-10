export default {
  namespaced: true,
  state: {
    favorites: [],
  },
  getters: {
    hasFavorites: ({ favorites }) => favorites && favorites.length > 0,
    isFavorite: ({ favorites }, { hasFavorites }) => ({ idProduct }) => (
      hasFavorites && favorites.some(({ id }) => id === idProduct)
    ),
  },
  mutations: {
    setFavorites(state, { favorites }) {
      state.favorites = favorites
    },
    addFavorite(state, { product }) {
      state.favorites.push(product)
    },
    removeFavorite(state, { product }) {
      state.favorites = state.favorites.filter((favorite) => favorite.id !== product.id)
    },
  },
  actions: {
    toggleFavorite({ commit, getters, rootState: { productStore } }, { id: idProduct }) {
      const product = productStore.products.find(({ id }) => id === idProduct)
      if (!product) throw new Error('Product not found')
      const mutation = getters.isFavorite({ idProduct }) ? 'removeFavorite' : 'addFavorite'
      commit(mutation, { product })
    },
  },
}
