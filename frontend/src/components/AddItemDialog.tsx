import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Box
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CreateItem } from 'graphql/items'
import { ItemGroup } from '__generated__/graphql'

interface AddItemDialogProps {
  open: boolean
  onClose: () => void
  itemGroups: Pick<ItemGroup, 'id' | 'name'>[]
  onItemCreated: () => void
}

export const AddItemDialog: React.FC<AddItemDialogProps> = ({
  open,
  onClose,
  itemGroups,
  onItemCreated
}) => {
  const [name, setName] = useState('')
  const [selectedGroup, setSelectedGroup] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [notes, setNotes] = useState('')
  const [recommended, setRecommended] = useState(false)

  const [createItem] = useMutation(CreateItem)

  const handleSubmit = async () => {
    if (!name || !selectedGroup) return

    try {
      await createItem({
        variables: {
          input: {
            name,
            itemGroupId: selectedGroup,
            quantity,
            notes: notes || undefined,
            recommended
          }
        }
      })
      onItemCreated()
      onClose()
      // Reset form
      setName('')
      setSelectedGroup('')
      setQuantity(1)
      setNotes('')
      setRecommended(false)
    } catch (error) {
      console.error('Error creating item:', error)
    }
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Item</DialogTitle>
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
            label="Quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            inputProps={{ min: 1 }}
            fullWidth
          />

          <TextField
            label="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            multiline
            rows={2}
            fullWidth
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={recommended}
                onChange={(e) => setRecommended(e.target.checked)}
              />
            }
            label="Recommended item"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={!name || !selectedGroup}
        >
          Add Item
        </Button>
      </DialogActions>
    </Dialog>
  )
}
