import { gql } from '@apollo/client'

export const UpdateItem = gql`
  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {
    updateItem(id: $id, input: $input) {
      id
      name
      quantity
      packed
      recommended
      notes
    }
  }
`
