import AddIcon from '@mui/icons-material/Add'
import {
  Box,
  Fab,
  LinearProgress,
  List,
  ListItem,
  Typography
} from '@mui/material'
import { HeaderBar } from 'components/HeaderBar'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'
import { TripName } from '../components/TripName'
import { useQuery } from '@apollo/client'
import { GetTrips } from 'graphql/trips'

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export function TripListPage() {
  const { loading, error, data } = useQuery(GetTrips)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  console.log(data)

  return (
    <PageLayout>
      <HeaderBar title="My Trips" />
      <List sx={{ display: 'grid', mt: 2, p: 0, gap: 2 }}>
        {mockTrips.map((trip) => (
          <ListItem
            key={trip.id}
            sx={{
              p: 0,
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}
          >
            <Link
              to={`/trip/${trip.id}`}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <TripName name={trip.name} interactive />
            </Link>
            <Box sx={{ width: '100%', mt: 1 }}>
              <LinearProgress variant="determinate" value={trip.progress} />
              <Typography variant="caption" color="text.secondary">
                {trip.progress}% packed
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
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
