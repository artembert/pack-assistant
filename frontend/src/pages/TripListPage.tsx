import {
  Box,
  Typography,
  List,
  ListItem,
  LinearProgress,
  Fab
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { CreativeTripName } from '../components/CreativeTripName'
import { Link } from 'react-router-dom'
import { PageLayout } from '../components/PageLayout'

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export function TripListPage() {
  return (
    <PageLayout>
      <Typography variant="h4" gutterBottom>
        My Trips
      </Typography>
      <List sx={{ display: 'grid', gap: 2 }}>
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
              <CreativeTripName name={trip.name} />
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
