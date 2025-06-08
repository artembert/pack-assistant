import { useMutation } from '@apollo/client'
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SwipeableDrawer,
  TextField,
  Typography
} from '@mui/material'
import { ItemGroup } from '__generated__/graphql'
import { CreateItem } from 'graphql/items'
import { useState } from 'react'

interface AddItemDialogProps {
  open: boolean
  onClose: () => void
  itemGroups: Pick<ItemGroup, 'id' | 'name'>[]
  onItemCreated: () => void
}

const container =
  typeof window !== 'undefined' ? window.document.body : undefined

export const AddItemDialog: React.FC<AddItemDialogProps> = ({
  open,
  onClose,
  itemGroups,
  onItemCreated
}) => {
  const [name, setName] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('')
  const [notes, setNotes] = useState('')

  const [createItem] = useMutation(CreateItem)

  const handleSubmit = async () => {
    if (!name || !selectedGroup) return

    try {
      await createItem({
        variables: {
          input: {
            name,
            itemGroupId: selectedGroup,
            quantity: 1,
            notes: notes || undefined,
            recommended: false
          }
        }
      })
      onItemCreated()
      onClose()
      // Reset form
      setName('')
      setSelectedGroup('')
      setNotes('')
    } catch (error) {
      console.error('Error creating item:', error)
    }
  }

  return (
    <SwipeableDrawer
      container={container}
      anchor="bottom"
      open={open}
      onClose={onClose}
      swipeAreaWidth={56}
      disableSwipeToOpen={true}
      onOpen={() => {}}
      slotProps={{
        paper: {
          sx: {
            borderTopLeftRadius: '28px',
            borderTopRightRadius: '28px'
          }
        }
      }}
    >
      <div className="absolute left-1/2 top-2 h-[6px] w-[30px] -translate-x-1/2 rounded-[3px] bg-gray-300 dark:bg-gray-900" />
      <DialogTitle>
        <Typography variant="h6" fontWeight="bold">
          Add New Item
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
          <TextField
            label="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />

          <FormControl fullWidth required>
            <InputLabel>Category</InputLabel>
            <Select
              value={selectedGroup}
              label="Category"
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              {itemGroups.map((group) => (
                <MenuItem key={group.id} value={group.id}>
                  {group.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            multiline
            rows={2}
            fullWidth
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button variant="text" sx={{ textTransform: 'none' }} onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="outlined"
          sx={{ bgcolor: '#f3f7fb', borderRadius: 4, textTransform: 'none' }}
          onClick={handleSubmit}
          disabled={!name || !selectedGroup}
        >
          Add Item
        </Button>
      </DialogActions>
    </SwipeableDrawer>
  )
}
