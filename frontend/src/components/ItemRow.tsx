import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Box
} from '@mui/material'
import { PackingItem } from 'entities/item'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

export interface ItemRowProps {
  item: PackingItem
  onCheck: (item: PackingItem) => void
}

export function ItemRow({ item, onCheck }: ItemRowProps) {
  const { name, packed, recommended } = item
  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <Checkbox
          checked={packed}
          sx={{ color: '#3b3561' }}
          onChange={() => onCheck(item)}
        />
      </ListItemIcon>
      <ListItemText
        primary={
          <Box display="flex" alignItems="baseline" gap={1}>
            {name}
            {recommended && (
              <Typography
                variant="caption"
                color="primary"
                sx={{ display: 'block' }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 12, mr: 0.5 }} />
                Rec
              </Typography>
            )}
          </Box>
        }
      />
    </ListItem>
  )
}
