import ItemList from '@/components/ItemList'
import { getItems } from '@/db/items'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await getItems()

  return todos
}

const ItemsPage = async () => {
  const items = await getData()
  return (
    <div>
      <ItemList items={items} />
    </div>
  )
}

export default ItemsPage
