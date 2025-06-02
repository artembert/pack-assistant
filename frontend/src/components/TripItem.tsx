import { Box, ListItem, LinearProgress, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { TripName } from './TripName'
import { Trip } from '../__generated__/graphql'

type TripItemProps = Pick<Trip, 'id' | 'name' | 'done' | 'total'>

export function TripItem({ id, name, done, total }: TripItemProps) {
  const progress = total > 0 ? (done / total) * 100 : 0
  return (
    <ListItem
      sx={{
        p: 0,
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}
    >
      <Link
        to={`/trip/${id}`}
        style={{ textDecoration: 'none', width: '100%' }}
      >
        <TripName name={name} interactive />
      </Link>
      <Box sx={{ width: '100%', mt: 1 }}>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="caption" color="text.secondary">
          {progress}% packed
        </Typography>
      </Box>
    </ListItem>
  )
}
