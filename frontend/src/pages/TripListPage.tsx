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

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export function TripListPage() {
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
      {/* <Box sx={{ p: 3, position: 'relative', minHeight: '100vh' }}> */}
      <Typography variant="h4" gutterBottom>
        My Trips
      </Typography>
      <List>
        {mockTrips.map((trip) => (
          <ListItem
            key={trip.id}
            sx={{
              p: 0,
              my: 3,
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
    </Box>
  )
}
