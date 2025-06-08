import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Typography,
  Box,
  IconButton,
  TextField
} from '@mui/material'
import { PackingItem } from 'entities/item'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import ClearIcon from '@mui/icons-material/Clear'
import { useMutation } from '@apollo/client'
import { UpdateItem, DeleteItem } from 'graphql/items'
import { useState, useRef, useEffect } from 'react'

export interface ItemRowProps {
  item: PackingItem
  onCheck: (item: PackingItem) => void
  onDelete?: (item: PackingItem) => void
}

export function ItemRow({ item, onCheck, onDelete }: ItemRowProps) {
  const { id, name, packed, recommended, notes, quantity } = item
  const [updateItem] = useMutation(UpdateItem)
  const [deleteItem] = useMutation(DeleteItem)
  const [isEditing, setIsEditing] = useState(false)
  const [editedName, setEditedName] = useState(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

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

  const handleEdit = async () => {
    if (editedName.trim() === '') return

    try {
      await updateItem({
        variables: {
          id,
          input: {
            name: editedName,
            quantity,
            recommended,
            notes,
            packed
          }
        }
      })
      setIsEditing(false)
    } catch (error) {
      console.error('Failed to update item:', error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleEdit()
    } else if (e.key === 'Escape') {
      setEditedName(name)
      setIsEditing(false)
    }
  }

  return (
    <ListItem
      disablePadding
      secondaryAction={
        isEditing ? (
          <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
        ) : null
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
          <Box
            display="flex"
            alignItems="baseline"
            gap={1}
            onClick={() => setIsEditing(true)}
            sx={{ cursor: 'text', pr: 5 }}
          >
            {isEditing ? (
              <TextField
                inputRef={inputRef}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
                onBlur={handleEdit}
                onKeyDown={handleKeyDown}
                size="small"
                fullWidth
                variant="standard"
                sx={{
                  '& .MuiInput-input': {
                    pt: 0,
                    pb: 0
                  },
                  '& .MuiInputBase-root': {
                    fontSize: 'inherit',
                    fontWeight: 'inherit'
                  },
                  '& .MuiInput-underline:before': {
                    borderBottom: 'none'
                  },
                  '& .MuiInput-underline:after': {
                    borderBottom: 'none'
                  },
                  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none'
                  }
                }}
              />
            ) : (
              <>
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
              </>
            )}
          </Box>
        }
      />
    </ListItem>
  )
}
