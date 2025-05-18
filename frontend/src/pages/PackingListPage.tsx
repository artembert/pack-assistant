import { TripName } from 'components/TripName'
import { AddItemRow } from '../components/AddItemRow'
import { CategorySection } from '../components/CategorySection'
import { FloatingAddButton } from '../components/FloatingAddButton'
import { HeaderBar } from '../components/HeaderBar'
import { PageLayout } from '../components/PageLayout'
import { ShowUncheckedRow } from '../components/ShowUncheckedRow'
import { Box, Typography } from '@mui/material'

interface ClothingItem {
  label: string
  checked: boolean
  recommended?: boolean
}

const clothingItems: ClothingItem[] = [
  { label: 'Suit', checked: true },
  { label: 'Dress shirt', checked: false },
  { label: 'Trousers', checked: true, recommended: true },
  { label: 'Socks', checked: true },
  { label: 'Belt', checked: true },
  { label: 'Sweater', checked: false }
]

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export const PackingListPage: React.FC = () => {
  return (
    <PageLayout>
      <HeaderBar />
      <TripName name={mockTrips[0].name} />
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Paris · Jul 15 – Jul 20
      </Typography>
      <Box sx={{ mt: 1 }}>
        <AddItemRow />
      </Box>
      <CategorySection
        title="Clothing"
        count={3}
        total={6}
        items={clothingItems}
      />
      <CategorySection title="Toiletries" count={1} total={4} items={[]} />
      <CategorySection title="Electronics" count={0} total={2} items={[]} />
      <ShowUncheckedRow />
      <FloatingAddButton />
    </PageLayout>
  )
}
