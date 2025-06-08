import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Box,
  IconButton
} from '@mui/material'
import { PackingItem } from 'entities/item'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ClearIcon from '@mui/icons-material/Clear'
import { useMutation } from '@apollo/client'
import { UpdateItem, DeleteItem } from 'graphql/items'

export interface ItemRowProps {
  item: PackingItem
  onCheck: (item: PackingItem) => void
  onDelete?: (item: PackingItem) => void
}

export function ItemRow({ item, onCheck, onDelete }: ItemRowProps) {
  const { id, name, packed, recommended, notes, quantity } = item
  const [updateItem] = useMutation(UpdateItem)
  const [deleteItem] = useMutation(DeleteItem)

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

  const handleDelete = async () => {
    try {
      await deleteItem({
        variables: { id }
      })
      onDelete?.(item)
    } catch (error) {
      console.error('Failed to delete item:', error)
    }
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      }
    >
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
