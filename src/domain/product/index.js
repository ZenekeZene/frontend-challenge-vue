import { uncategorized } from '@/domain/category';

export default function createProduct(props) {
  return {
    id: props.id,
    name: props.name,
    sizes: props.sizes,
    price: props.price,
    image: props.image,
    categoryKey: props.category || uncategorized,
  }
}
