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

export const CreateItem = gql`
  mutation CreateItem($input: CreateItemInput!) {
    createItem(input: $input) {
      id
      name
      quantity
      packed
      recommended
      notes
    }
  }
`

export const DeleteItem = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id)
  }
`
