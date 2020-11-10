import api from '@/infra/request'
import createCategory from '@/domain/category'

function modelCategories(data = []) {
  return data.map((item) => createCategory(item))
}

async function getAll() {
  try {
    const response = await api.get('/categories')
    return modelCategories(response.data);
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export default {
  getAll,
}
