import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography
} from '@mui/material'
import { PackingItem } from 'entities/item'

export interface ItemRowProps {
  item: PackingItem
  onCheck: (item: PackingItem) => void
}

export function ItemRow({ item, onCheck }: ItemRowProps) {
  const { label, checked, recommended } = item
  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <Checkbox
          checked={checked}
          sx={{ color: '#3b3561' }}
          onChange={() => onCheck(item)}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <>
            {label}
            {recommended && (
              <Typography
                variant="caption"
                color="primary"
                sx={{ display: 'block', ml: 2 }}
              >
                Recommended
              </Typography>
            )}
          </>
        }
      />
    </ListItem>
  )
}
