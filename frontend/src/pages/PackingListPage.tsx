import { HeaderBar } from '../components/HeaderBar'
import { TripInfo } from '../components/TripInfo'
import { AddItemRow } from '../components/AddItemRow'
import { CategorySection } from '../components/CategorySection'
import { ShowUncheckedRow } from '../components/ShowUncheckedRow'
import { FloatingAddButton } from '../components/FloatingAddButton'
import { PageLayout } from '../components/PageLayout'

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

export const PackingListPage: React.FC = () => {
  return (
    <PageLayout>
      <HeaderBar />
      <TripInfo />
      <AddItemRow />
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
