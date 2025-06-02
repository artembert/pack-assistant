import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
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
const defaultOptions = {} as const
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
  done: Scalars['Int']['output']
  id: Scalars['ID']['output']
  items: Array<Item>
  name: Scalars['String']['output']
  total: Scalars['Int']['output']
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
  input: TripFilterInput
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

export type TripFilterInput = {
  id: Scalars['ID']['input']
  showUnchecked?: InputMaybe<Scalars['Boolean']['input']>
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

export type UpdateItemMutationVariables = Exact<{
  id: Scalars['ID']['input']
  input: UpdateItemInput
}>

export type UpdateItemMutation = {
  __typename?: 'Mutation'
  updateItem: {
    __typename?: 'Item'
    id: string
    name: string
    quantity: number
    packed: boolean
    recommended?: boolean | null
    notes?: string | null
  }
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
  input: TripFilterInput
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
    itemGroups: Array<{
      __typename?: 'ItemGroup'
      id: string
      name: string
      total: number
      done: number
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

export const UpdateItemDocument = gql`
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
export type UpdateItemMutationFn = Apollo.MutationFunction<
  UpdateItemMutation,
  UpdateItemMutationVariables
>

/**
 * __useUpdateItemMutation__
 *
 * To run a mutation, you first call `useUpdateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateItemMutation, { data, loading, error }] = useUpdateItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateItemMutation,
    UpdateItemMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateItemMutation, UpdateItemMutationVariables>(
    UpdateItemDocument,
    options
  )
}
export type UpdateItemMutationHookResult = ReturnType<
  typeof useUpdateItemMutation
>
export type UpdateItemMutationResult = Apollo.MutationResult<UpdateItemMutation>
export type UpdateItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateItemMutation,
  UpdateItemMutationVariables
>
export const GetTripsDocument = gql`
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

/**
 * __useGetTripsQuery__
 *
 * To run a query within a React component, call `useGetTripsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTripsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetTripsQuery, GetTripsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTripsQuery, GetTripsQueryVariables>(
    GetTripsDocument,
    options
  )
}
export function useGetTripsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTripsQuery,
    GetTripsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTripsQuery, GetTripsQueryVariables>(
    GetTripsDocument,
    options
  )
}
export function useGetTripsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTripsQuery, GetTripsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetTripsQuery, GetTripsQueryVariables>(
    GetTripsDocument,
    options
  )
}
export type GetTripsQueryHookResult = ReturnType<typeof useGetTripsQuery>
export type GetTripsLazyQueryHookResult = ReturnType<
  typeof useGetTripsLazyQuery
>
export type GetTripsSuspenseQueryHookResult = ReturnType<
  typeof useGetTripsSuspenseQuery
>
export type GetTripsQueryResult = Apollo.QueryResult<
  GetTripsQuery,
  GetTripsQueryVariables
>
export const GetTripDocument = gql`
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

/**
 * __useGetTripQuery__
 *
 * To run a query within a React component, call `useGetTripQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTripQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTripQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetTripQuery(
  baseOptions: Apollo.QueryHookOptions<GetTripQuery, GetTripQueryVariables> &
    ({ variables: GetTripQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTripQuery, GetTripQueryVariables>(
    GetTripDocument,
    options
  )
}
export function useGetTripLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetTripQuery, GetTripQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetTripQuery, GetTripQueryVariables>(
    GetTripDocument,
    options
  )
}
export function useGetTripSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetTripQuery, GetTripQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetTripQuery, GetTripQueryVariables>(
    GetTripDocument,
    options
  )
}
export type GetTripQueryHookResult = ReturnType<typeof useGetTripQuery>
export type GetTripLazyQueryHookResult = ReturnType<typeof useGetTripLazyQuery>
export type GetTripSuspenseQueryHookResult = ReturnType<
  typeof useGetTripSuspenseQuery
>
export type GetTripQueryResult = Apollo.QueryResult<
  GetTripQuery,
  GetTripQueryVariables
>
