import { gql } from '@apollo/client'

export const GetTrips = gql`
  query GetTrips {
    trips {
      id
      name
      destination
      type
      startDate
      endDate
      done
      total
    }
  }
`

export const GetTripById = gql`
  query GetTrip($input: TripFilterInput!) {
    trip(input: $input) {
      id
      name
      destination
      type
      startDate
      endDate
      itemGroups {
        id
        name
        total
        done
        items {
          id
          name
          quantity
          packed
          recommended
          notes
        }
      }
    }
  }
`
