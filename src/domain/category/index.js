export const uncategorized = 'uncategorized'

export default function createCategory(props) {
  return {
    id: props.id,
    name: props.name,
    slug: props.category_key,
    image: props.category_image,
  }
}
