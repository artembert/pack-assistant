import { Box, Button, Link } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function AddItemRow() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Link href="#" underline="hover" sx={{ mr: 2 }}>
        Add item
      </Link>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        sx={{ bgcolor: '#f3f7fb', borderRadius: 4, textTransform: 'none' }}
      >
        Add item
      </Button>
    </Box>
  )
}
