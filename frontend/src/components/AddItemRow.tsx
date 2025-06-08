import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import { useState } from 'react'
import { AddItemDialog } from './AddItemDialog'
import { ItemGroup } from '__generated__/graphql'

interface AddItemRowProps {
  itemGroups: Pick<ItemGroup, 'id' | 'name'>[]
  onItemCreated: () => void
}

export function AddItemRow({ itemGroups, onItemCreated }: AddItemRowProps) {
  const [open, setOpen] = useState(false)
  const handleCreated = () => {
    setOpen(false)
    onItemCreated()
  }

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ bgcolor: '#f3f7fb', borderRadius: 4, textTransform: 'none' }}
        onClick={() => setOpen(true)}
      >
        Add item
      </Button>
      <AddItemDialog
        open={open}
        onClose={() => setOpen(false)}
        itemGroups={itemGroups}
        onItemCreated={handleCreated}
      />
    </>
  )
}
