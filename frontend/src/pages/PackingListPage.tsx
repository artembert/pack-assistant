import { Box, Typography } from '@mui/material'
import { TripName } from 'components/TripName'
import { PackingItem } from 'entities/item'
import { useNavigate } from 'react-router-dom'
import { AddItemRow } from '../components/AddItemRow'
import { CategorySection } from '../components/CategorySection'
import { FloatingAddButton } from '../components/FloatingAddButton'
import { HeaderBar } from '../components/HeaderBar'
import { PageLayout } from '../components/PageLayout'
import { ShowUncheckedRow } from '../components/ShowUncheckedRow'

const clothingItems: PackingItem[] = [
  { id: '1', label: 'Suit', checked: true },
  { id: '2', label: 'Dress shirt', checked: false },
  { id: '3', label: 'Trousers', checked: true, recommended: true },
  { id: '4', label: 'Socks', checked: true },
  { id: '5', label: 'Belt', checked: true },
  { id: '6', label: 'Sweater', checked: false }
]

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export const PackingListPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <PageLayout>
      <HeaderBar onBackButtonClick={() => navigate('/')} hasBackButton />
      <Box sx={{ mt: 2 }}>
        <TripName name={mockTrips[0].name} />
      </Box>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Paris · Jul 15 – Jul 20
      </Typography>
      <Box sx={{ mt: 2 }}>
        <AddItemRow />
      </Box>
      <Box sx={{ mt: 1 }}>
        <CategorySection
          title="Clothing"
          count={3}
          total={6}
          items={clothingItems}
          onCheck={() => {}}
        />
        <CategorySection
          title="Toiletries"
          count={1}
          total={4}
          items={[]}
          onCheck={() => {}}
        />
        <CategorySection
          title="Electronics"
          count={0}
          total={2}
          items={[]}
          onCheck={() => {}}
        />
      </Box>
      <ShowUncheckedRow />
      <FloatingAddButton />
    </PageLayout>
  )
}
