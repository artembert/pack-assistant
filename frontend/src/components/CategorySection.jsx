import { Box, Typography, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ItemList } from './ItemList'

export function CategorySection({ title, count, total, items }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {count}/{total}
        </Typography>
        <IconButton size="small" sx={{ ml: 'auto' }}>
          <ExpandMoreIcon />
        </IconButton>
      </Box>
      {items && <ItemList items={items} />}
    </Box>
  )
}
