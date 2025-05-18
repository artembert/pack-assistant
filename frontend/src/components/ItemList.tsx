import { List } from '@mui/material'
import { ItemRow } from './ItemRow'

export function ItemList({ items }) {
  return (
    <List dense>
      {items.map((item) => (
        <ItemRow key={item.label} {...item} />
      ))}
    </List>
  )
}
