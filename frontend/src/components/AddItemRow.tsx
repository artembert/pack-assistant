import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'

export function AddItemRow() {
  return (
    <Button
      variant="outlined"
      startIcon={<AddIcon />}
      sx={{ bgcolor: '#f3f7fb', borderRadius: 4, textTransform: 'none' }}
    >
      Add item
    </Button>
  )
}
