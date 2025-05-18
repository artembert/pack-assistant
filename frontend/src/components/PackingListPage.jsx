import { Box } from '@mui/material'
import { HeaderBar } from './HeaderBar'
import { TripInfo } from './TripInfo'
import { AddItemRow } from './AddItemRow'
import { CategorySection } from './CategorySection'
import { ShowUncheckedRow } from './ShowUncheckedRow'
import { FloatingAddButton } from './FloatingAddButton'

const clothingItems = [
  { label: 'Suit', checked: true },
  { label: 'Dress shirt', checked: false },
  { label: 'Trousers', checked: true, recommended: true },
  { label: 'Socks', checked: true },
  { label: 'Belt', checked: true },
  { label: 'Sweater', checked: false }
]

export function PackingListPage() {
  return (
    <Box
      sx={{
        maxWidth: 375,
        mx: 'auto',
        my: 4,
        p: 2,
        borderRadius: 4,
        boxShadow: 3,
        bgcolor: '#fff',
        minHeight: '90vh',
        position: 'relative'
      }}
    >
      <HeaderBar />
      <TripInfo />
      <AddItemRow />
      <CategorySection
        title="Clothing"
        count={3}
        total={6}
        items={clothingItems}
      />
      <CategorySection title="Toiletries" count={1} total={4} />
      <CategorySection title="Electronics" count={0} total={2} />
      <ShowUncheckedRow />
      <FloatingAddButton />
    </Box>
  )
}
