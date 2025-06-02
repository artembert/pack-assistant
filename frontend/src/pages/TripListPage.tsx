import AddIcon from '@mui/icons-material/Add'
import { Fab, List } from '@mui/material'
import { HeaderBar } from 'components/HeaderBar'
import { PageLayout } from '../components/PageLayout'
import { useQuery } from '@apollo/client'
import { GetTrips } from 'graphql/trips'
import { TripItem } from '../components/TripItem'
import { GetTripsQuery } from '__generated__/graphql'

export function TripListPage() {
  const { loading, error, data } = useQuery<GetTripsQuery>(GetTrips)

  return (
    <PageLayout>
      <HeaderBar title="My Trips" />

      {loading && <p>Loading trips...</p>}
      {error && <p>Error loading trips: {error?.message}</p>}
      {data?.trips && (
        <List sx={{ display: 'grid', mt: 2, p: 0, gap: 2 }}>
          {data.trips.map((trip) => (
            <TripItem
              key={trip.id}
              id={trip.id}
              name={trip.name}
              done={trip.done}
              total={trip.total}
            />
          ))}
        </List>
      )}
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
      >
        <AddIcon />
      </Fab>
    </PageLayout>
  )
}
