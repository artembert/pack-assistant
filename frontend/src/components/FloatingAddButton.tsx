import { Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function FloatingAddButton() {
  return (
    <Fab
      color="primary"
      sx={{
        position: 'absolute',
        bottom: 24,
        right: 24,
        bgcolor: '#e3effc',
        color: '#3b3561',
        '&:hover': { bgcolor: '#d0e7fa' }
      }}
    >
      <AddIcon />
    </Fab>
  )
}
