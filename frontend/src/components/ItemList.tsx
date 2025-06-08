import { List } from '@mui/material'
import { ItemRow } from './ItemRow'
import { PackingItem } from 'entities/item'

export interface ItemListProps {
  items: PackingItem[]
  onCheck: (item: PackingItem) => void
  onDelete: (item: PackingItem) => void
}

export function ItemList({ items, onCheck, onDelete }: ItemListProps) {
  const sortedItems = [...items].sort((a, b) => (a.name > b.name ? 1 : -1))
  return (
    <List sx={{ p: 0 }} dense>
      {sortedItems?.length > 0 &&
        sortedItems.map((item) => (
          <ItemRow
            key={item.id}
            item={item}
            onCheck={onCheck}
            onDelete={onDelete}
          />
        ))}
    </List>
  )
}
