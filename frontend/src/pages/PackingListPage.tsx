import { Box, Button, Typography } from '@mui/material'
import { TripName } from 'components/TripName'
import { useNavigate, useParams } from 'react-router-dom'
import { AddItemRow } from '../components/AddItemRow'
import { CategorySection } from '../components/CategorySection'
import { FloatingAddButton } from '../components/FloatingAddButton'
import { HeaderBar } from '../components/HeaderBar'
import { PageLayout } from '../components/PageLayout'
import { GetTripQuery, QueryTripArgs } from '__generated__/graphql'
import { GetTripById } from 'graphql/trips'
import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { PackingProgress } from 'components/PackingProgress'

const formatDayMonth = (date: string) => {
  return Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}

export const PackingListPage: React.FC = () => {
  const [showUnchecked, setShowUnchecked] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()
  const { error, data, refetch } = useQuery<GetTripQuery, QueryTripArgs>(
    GetTripById,
    {
      variables: { input: { id: id!, showUnchecked: showUnchecked } }
    }
  )

  return (
    <PageLayout>
      <HeaderBar onBackButtonClick={() => navigate('/')} hasBackButton />
      {error && <div>Error: {error.message}</div>}
      {data?.trip && (
        <>
          <Box sx={{ mt: 2 }}>
            <TripName name={data.trip.name} />
          </Box>
          <PackingProgress total={data.trip.total} packed={data.trip.done} />
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            {data.trip.destination} ·{' '}
            {data.trip.startDate ? formatDayMonth(data.trip.startDate) : ''} –{' '}
            {data.trip.endDate ? formatDayMonth(data.trip.endDate) : ''}
          </Typography>
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <AddItemRow />
            <Button
              variant="text"
              color="primary"
              onClick={() => setShowUnchecked(!showUnchecked)}
              startIcon={showUnchecked ? <VisibilityOff /> : <Visibility />}
            >
              {showUnchecked ? 'Hide checked' : 'Show checked'}
            </Button>
          </Box>
          <Box sx={{ mt: 1 }}>
            {data.trip.itemGroups.map((itemGroup) => (
              <CategorySection
                key={itemGroup.id}
                title={itemGroup.name}
                count={itemGroup.done}
                total={itemGroup.total}
                items={itemGroup.items}
                onCheck={() => refetch()}
              />
            ))}
          </Box>
        </>
      )}

      <FloatingAddButton />
    </PageLayout>
  )
}
