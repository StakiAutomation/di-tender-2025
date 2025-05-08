import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CollectionQueryVariables = Types.Exact<{ [key: string]: never }>

export type CollectionQuery = {
  __typename?: 'Query'
  signatureCollectionAdminCurrent: {
    __typename?: 'SignatureCollection'
    id: string
    endTime: string
    startTime: string
    isActive: boolean
    collectionType: Types.SignatureCollectionCollectionType
    name: string
    status: Types.CollectionStatus
    areas: Array<{
      __typename?: 'SignatureCollectionArea'
      id: string
      name: string
      min: number
      max?: number | null
    }>
    candidates: Array<{
      __typename?: 'SignatureCollectionCandidate'
      id: string
      nationalId: string
      name: string
      phone?: string | null
      email?: string | null
      collectionId?: string | null
    }>
  }
}

export const CollectionDocument = gql`
  query collection {
    signatureCollectionAdminCurrent {
      id
      endTime
      startTime
      isActive
      collectionType
      name
      status
      areas {
        id
        name
        min
        max
      }
      candidates {
        id
        nationalId
        name
        phone
        email
        collectionId
      }
    }
  }
`

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CollectionQuery,
    CollectionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(
    CollectionDocument,
    options,
  )
}
export function useCollectionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CollectionQuery,
    CollectionQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CollectionQuery, CollectionQueryVariables>(
    CollectionDocument,
    options,
  )
}
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>
export type CollectionLazyQueryHookResult = ReturnType<
  typeof useCollectionLazyQuery
>
export type CollectionQueryResult = Apollo.QueryResult<
  CollectionQuery,
  CollectionQueryVariables
>
