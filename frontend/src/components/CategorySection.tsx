import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Collapse, Typography } from '@mui/material'
import { PackingItem } from 'entities/item'
import { useState } from 'react'
import { ItemList } from './ItemList'

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
  const [expanded, setExpanded] = useState(true)

  const handleToggle = () => setExpanded((prev) => !prev)

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          cursor: 'pointer',
          borderRadius: 1,
          transition: 'background 0.2s',
          px: 0,
          py: 1,
          '&:hover': { background: '#f5f5fa' }
        }}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleToggle()
          }
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mr: 1 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {count}/{total}
        </Typography>
        <ExpandMoreIcon
          sx={{
            alignSelf: 'center',
            ml: 'auto',
            transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: 'transform 0.2s'
          }}
        />
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {items && <ItemList items={items} onCheck={onCheck} />}
      </Collapse>
    </Box>
  )
}
