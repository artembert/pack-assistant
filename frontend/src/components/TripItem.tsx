import { ListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { TripName } from './TripName'
import { Trip } from '../__generated__/graphql'
import { PackingProgress } from './PackingProgress'

type TripItemProps = Pick<Trip, 'id' | 'name' | 'done' | 'total'>

export function TripItem({ id, name, done, total }: TripItemProps) {
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
      <PackingProgress total={total} packed={done} />
    </ListItem>
  )
}
