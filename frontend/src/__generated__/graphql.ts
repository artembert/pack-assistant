/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type CreateItemGroupInput = {
  name: Scalars['String']['input']
  tripId: Scalars['ID']['input']
}

export type CreateItemInput = {
  itemGroupId: Scalars['ID']['input']
  name: Scalars['String']['input']
  notes?: InputMaybe<Scalars['String']['input']>
  quantity: Scalars['Int']['input']
  recommended?: InputMaybe<Scalars['Boolean']['input']>
}

export type CreateTripInput = {
  destination?: InputMaybe<Scalars['String']['input']>
  endDate?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  startDate?: InputMaybe<Scalars['String']['input']>
  type: Scalars['String']['input']
}

export type Item = {
  __typename?: 'Item'
  id: Scalars['ID']['output']
  itemGroupId: Scalars['ID']['output']
  name: Scalars['String']['output']
  notes?: Maybe<Scalars['String']['output']>
  packed: Scalars['Boolean']['output']
  quantity: Scalars['Int']['output']
  recommended?: Maybe<Scalars['Boolean']['output']>
}

export type ItemGroup = {
  __typename?: 'ItemGroup'
  id: Scalars['ID']['output']
  items: Array<Item>
  name: Scalars['String']['output']
  packedCount: Scalars['Int']['output']
  totalCount: Scalars['Int']['output']
  tripId: Scalars['ID']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createItem: Item
  createItemGroup: ItemGroup
  createTrip: Trip
  deleteItem: Scalars['Boolean']['output']
  deleteItemGroup: Scalars['Boolean']['output']
  deleteTrip: Scalars['Boolean']['output']
  toggleItemPacked: Item
  updateItem: Item
  updateItemGroup: ItemGroup
  updateTrip: Trip
}

export type MutationCreateItemArgs = {
  input: CreateItemInput
}

export type MutationCreateItemGroupArgs = {
  input: CreateItemGroupInput
}

export type MutationCreateTripArgs = {
  input: CreateTripInput
}

export type MutationDeleteItemArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteItemGroupArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteTripArgs = {
  id: Scalars['ID']['input']
}

export type MutationToggleItemPackedArgs = {
  id: Scalars['ID']['input']
}

export type MutationUpdateItemArgs = {
  id: Scalars['ID']['input']
  input: UpdateItemInput
}

export type MutationUpdateItemGroupArgs = {
  id: Scalars['ID']['input']
  input: UpdateItemGroupInput
}

export type MutationUpdateTripArgs = {
  id: Scalars['ID']['input']
  input: UpdateTripInput
}

export type Query = {
  __typename?: 'Query'
  trip?: Maybe<Trip>
  trips: Array<Trip>
}

export type QueryTripArgs = {
  id: Scalars['ID']['input']
}

export type Trip = {
  __typename?: 'Trip'
  createdAt: Scalars['String']['output']
  destination: Scalars['String']['output']
  done: Scalars['Int']['output']
  endDate?: Maybe<Scalars['String']['output']>
  id: Scalars['ID']['output']
  itemGroups: Array<ItemGroup>
  name: Scalars['String']['output']
  startDate?: Maybe<Scalars['String']['output']>
  total: Scalars['Int']['output']
  type: Scalars['String']['output']
  updatedAt: Scalars['String']['output']
}

export type UpdateItemGroupInput = {
  name: Scalars['String']['input']
}

export type UpdateItemInput = {
  name?: InputMaybe<Scalars['String']['input']>
  notes?: InputMaybe<Scalars['String']['input']>
  packed?: InputMaybe<Scalars['Boolean']['input']>
  quantity?: InputMaybe<Scalars['Int']['input']>
  recommended?: InputMaybe<Scalars['Boolean']['input']>
}

export type UpdateTripInput = {
  destination?: InputMaybe<Scalars['String']['input']>
  endDate?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  startDate?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<Scalars['String']['input']>
}

export type GetTripsQueryVariables = Exact<{ [key: string]: never }>

export type GetTripsQuery = {
  __typename?: 'Query'
  trips: Array<{
    __typename?: 'Trip'
    id: string
    name: string
    destination: string
    type: string
    startDate?: string | null
    endDate?: string | null
    done: number
    total: number
  }>
}

export type GetTripQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetTripQuery = {
  __typename?: 'Query'
  trip?: {
    __typename?: 'Trip'
    id: string
    name: string
    destination: string
    type: string
    startDate?: string | null
    endDate?: string | null
    createdAt: string
    updatedAt: string
    itemGroups: Array<{
      __typename?: 'ItemGroup'
      id: string
      name: string
      packedCount: number
      totalCount: number
      items: Array<{
        __typename?: 'Item'
        id: string
        name: string
        quantity: number
        packed: boolean
        recommended?: boolean | null
        notes?: string | null
      }>
    }>
  } | null
}

export const GetTripsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTrips' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'trips' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destination' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'done' } },
                { kind: 'Field', name: { kind: 'Name', value: 'total' } }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetTripsQuery, GetTripsQueryVariables>
export const GetTripDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTrip' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } }
          }
        }
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'trip' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: { kind: 'Variable', name: { kind: 'Name', value: 'id' } }
              }
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'destination' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'startDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'endDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'itemGroups' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'packedCount' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalCount' }
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'packed' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'recommended' }
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'notes' }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
} as unknown as DocumentNode<GetTripQuery, GetTripQueryVariables>
