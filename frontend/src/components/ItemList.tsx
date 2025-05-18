import { List } from '@mui/material'
import { ItemRow } from './ItemRow'
import { PackingItem } from 'entities/item'

export interface ItemListProps {
  items: PackingItem[]
  onCheck: (item: PackingItem) => void
}

export function ItemList({ items, onCheck }: ItemListProps) {
  return (
    <List dense>
      {items.map((item) => (
        <ItemRow key={item.id} item={item} onCheck={onCheck} />
      ))}
    </List>
  )
}
