import { Box, Typography, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ItemList } from './ItemList'
import { PackingItem } from 'entities/item'

export interface CategorySectionProps {
  title: string
  count: number
  total: number
  items: PackingItem[]
  onCheck: (item: PackingItem) => void
}

export function CategorySection({
  title,
  count,
  total,
  items,
  onCheck
}: CategorySectionProps) {
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
      {items && <ItemList items={items} onCheck={onCheck} />}
    </Box>
  )
}
