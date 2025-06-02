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
import { useMutation } from '@apollo/client'
import { UpdateItem } from 'graphql/items'

export interface ItemRowProps {
  item: PackingItem
  onCheck: (item: PackingItem) => void
}

export function ItemRow({ item, onCheck }: ItemRowProps) {
  const { id, name, packed, recommended, notes, quantity } = item
  const [updateItem] = useMutation(UpdateItem)

  const handleCheck = async () => {
    try {
      await updateItem({
        variables: {
          id,
          input: {
            name,
            quantity,
            recommended,
            notes,
            packed: !packed
          }
        }
      })
      onCheck(item)
    } catch (error) {
      console.error('Failed to update item:', error)
    }
  }

  return (
    <ListItem disablePadding>
      <ListItemIcon>
        <Checkbox
          checked={packed}
          sx={{ color: '#3b3561' }}
          onChange={handleCheck}
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
