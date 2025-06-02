/* eslint-disable */
import * as types from './graphql'
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  '\n  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {\n    updateItem(id: $id, input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n    }\n  }\n': typeof types.UpdateItemDocument
  '\n  mutation CreateItem($input: CreateItemInput!) {\n    createItem(input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n      itemGroupId\n    }\n  }\n': typeof types.CreateItemDocument
  '\n  query GetTrips {\n    trips {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n    }\n  }\n': typeof types.GetTripsDocument
  '\n  query GetTrip($input: TripFilterInput!) {\n    trip(input: $input) {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n      itemGroups {\n        id\n        name\n        total\n        done\n        items {\n          id\n          name\n          quantity\n          packed\n          recommended\n          notes\n        }\n      }\n    }\n  }\n': typeof types.GetTripDocument
}
const documents: Documents = {
  '\n  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {\n    updateItem(id: $id, input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n    }\n  }\n':
    types.UpdateItemDocument,
  '\n  mutation CreateItem($input: CreateItemInput!) {\n    createItem(input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n      itemGroupId\n    }\n  }\n':
    types.CreateItemDocument,
  '\n  query GetTrips {\n    trips {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n    }\n  }\n':
    types.GetTripsDocument,
  '\n  query GetTrip($input: TripFilterInput!) {\n    trip(input: $input) {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n      itemGroups {\n        id\n        name\n        total\n        done\n        items {\n          id\n          name\n          quantity\n          packed\n          recommended\n          notes\n        }\n      }\n    }\n  }\n':
    types.GetTripDocument
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {\n    updateItem(id: $id, input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdateItem($id: ID!, $input: UpdateItemInput!) {\n    updateItem(id: $id, input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation CreateItem($input: CreateItemInput!) {\n    createItem(input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n      itemGroupId\n    }\n  }\n'
): (typeof documents)['\n  mutation CreateItem($input: CreateItemInput!) {\n    createItem(input: $input) {\n      id\n      name\n      quantity\n      packed\n      recommended\n      notes\n      itemGroupId\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetTrips {\n    trips {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n    }\n  }\n'
): (typeof documents)['\n  query GetTrips {\n    trips {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n    }\n  }\n']
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetTrip($input: TripFilterInput!) {\n    trip(input: $input) {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n      itemGroups {\n        id\n        name\n        total\n        done\n        items {\n          id\n          name\n          quantity\n          packed\n          recommended\n          notes\n        }\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetTrip($input: TripFilterInput!) {\n    trip(input: $input) {\n      id\n      name\n      destination\n      type\n      startDate\n      endDate\n      done\n      total\n      itemGroups {\n        id\n        name\n        total\n        done\n        items {\n          id\n          name\n          quantity\n          packed\n          recommended\n          notes\n        }\n      }\n    }\n  }\n']

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
