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

const mockTrips = [
  { id: 1, name: 'Summer Vacation', progress: 80 },
  { id: 2, name: 'Business Trip', progress: 40 },
  { id: 3, name: 'Weekend Getaway', progress: 60 }
]

export function TripListPage() {
  return (
    <Box sx={{ p: 3, position: 'relative', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom>
        My Trips
      </Typography>
      <List>
        {mockTrips.map((trip) => (
          <ListItem
            key={trip.id}
            sx={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <Typography
              component="div"
              sx={{
                fontFamily: 'Roboto Flex, sans-serif',
                fontSize: 48,
                color: 'primary.main',
                width: '100%',
                textAlign: 'center',
                lineHeight: 1.1,
                mb: 2,
                letterSpacing: -1,
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <CreativeTripName name={trip.name} />
            </Typography>
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
