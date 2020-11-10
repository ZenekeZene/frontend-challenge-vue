import ProductRepository from '@/infra/ProductRepository'

export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    hasProducts: ({ products }) => products && products.length,
    productsByCategory: ({ products }, { hasProducts }) => (
      ({ categoryKey }) => hasProducts && products.filter((product) => (
        product.categoryKey === categoryKey
      ))
    ),
    productById: ({ products }) => ({ id }) => products.find((product) => product.id === id),
  },
  mutations: {
    setProducts(state, { products }) {
      state.products = products
    },
  },
  actions: {
    async getAllProducts({ commit }) {
      const products = await ProductRepository.getAll()
      commit('setProducts', { products })
    },
    getProductById(context, { id }) {
      return ProductRepository.getById({ id })
    },
  },
}
