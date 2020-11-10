import CategoryRepository from '@/infra/CategoryRepository'

export async function getAllCategories({ commit }) {
  const categories = await CategoryRepository.getAll();
  commit('setCategories', { categories })
  return categories
}

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    hasCategories: ({ categories }) => categories && categories.length,
  },
  mutations: {
    setCategories(state, { categories }) {
      state.categories = categories;
    },
  },
  actions: {
    getAllCategories,
  },
}
