import { Box, Typography, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function HeaderBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        Pack-Assistant
      </Typography>
      <IconButton>
        <AddIcon />
      </IconButton>
    </Box>
  )
}
