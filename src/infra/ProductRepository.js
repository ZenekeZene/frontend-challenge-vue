import api from '@/infra/request'
import createProduct from '@/domain/product'

function model(data = []) {
  return data.map((item) => createProduct(item))
}

const rootPath = 'products'

async function getAll() {
  try {
    const response = await api.get(`http://localhost:3001/${rootPath}`)
    return model(response.data)
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

async function getByCategory({ categoryKey }) {
  if (!categoryKey) throw new Error('getByCategory needs a categoryKey as parameter.')
  try {
    const response = await api.get(`http://localhost:3001/${rootPath}?category=${categoryKey}`)
    return model(response.data)
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

async function getById({ id }) {
  if (!id) throw new Error('getById needs a id as parameter.')
  try {
    const response = await api.get(`http://localhost:3001/${rootPath}?id=${id}`)
    return createProduct(response.data)
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export default {
  getAll,
  getByCategory,
  getById,
}
