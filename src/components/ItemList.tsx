import Item from './Item'

const ItemList = ({ items }:any) => {
  return (
    <div>
      {items.map((item:any) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export default ItemList
