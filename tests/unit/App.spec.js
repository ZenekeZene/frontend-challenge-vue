import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import {render, screen, fireEvent, waitFor} from '@testing-library/vue'
import Vuex from 'vuex'
import Home from '@/ui/views/Home.vue'
import CategoryFeed from '@/ui/components/category/CategoryFeed.vue'
import BaseFeed from '@/ui/components/base/BaseFeed.vue'
import Category from '@/ui/components/category/Category.vue'
import CategoryStore, { getAllCategories } from '@/adapter/store/category'

function renderVuexTestComponent({ component }, customStore) {
  return render(component, { store: {...CategoryStore, ...customStore}})
}

describe('Critical render', () => {
  it('Home render correctly the greeting', async () => {
    const { getByText } = renderVuexTestComponent({ component: Home })
    await waitFor(() => {
      expect(getByText('¡Bienvenido!')).toBeTruthy()
    })
  })

  it('Category display right his correct category name', () => {
    const { getByText } = render(Category, {
      props: {
        name: 'New',
        slug: 'new',
      },
      components: {
        BaseFeed,
      },
      stubs: ['router-link', 'base-feed']
    })
    const category = getByText('New').textContent;
    expect(category).toMatch(/New/i)
  })
})

describe('', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const state = {
    categories: null
  }

  const getters = {
    hasCategories: jest.fn(),
  }

  const actions = {
    getAllCategories: jest.fn(),
  }
  
  const store = new Vuex.Store({
    modules: {
      categoryStore: {
        state,
        getters,
        actions,
        namespaced: true,
      },
    },
  })

  const wrapper = mount(CategoryFeed, {
    store,
    localVue
  })

  it('CategoriesFeed call to his initial action', async () => {
    expect(actions.getAllCategories).toHaveBeenCalled()
  })

  it('getAllCategories action works right', async () => {
    const commit = jest.fn()
    const categories = await getAllCategories({ commit })
    expect(categories.length).toBeGreaterThan(0)
  })
})