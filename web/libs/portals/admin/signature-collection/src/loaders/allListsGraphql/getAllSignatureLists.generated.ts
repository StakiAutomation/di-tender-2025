import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AllListsQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionIdInput
}>

export type AllListsQuery = {
  __typename?: 'Query'
  signatureCollectionAdminLists: Array<{
    __typename?: 'SignatureCollectionList'
    id: string
    title: string
    endTime: string
    startTime: string
    active?: boolean | null
    collectionId: string
    slug: string
    numberOfSignatures?: number | null
    maxReached: boolean
    reviewed: boolean
    area: {
      __typename?: 'SignatureCollectionArea'
      id: string
      name: string
      min: number
      max?: number | null
    }
    candidate: {
      __typename?: 'SignatureCollectionCandidate'
      id: string
      nationalId: string
      name: string
      phone?: string | null
      email?: string | null
    }
    collectors?: Array<{
      __typename?: 'SignatureCollectionCollector'
      nationalId: string
      name: string
    }> | null
  }>
}

export const AllListsDocument = gql`
  query allLists($input: SignatureCollectionIdInput!) {
    signatureCollectionAdminLists(input: $input) {
      id
      title
      area {
        id
        name
        min
        max
      }
      endTime
      startTime
      candidate {
        id
        nationalId
        name
        phone
        email
      }
      collectors {
        nationalId
        name
      }
      active
      collectionId
      slug
      numberOfSignatures
      maxReached
      reviewed
    }
  }
`

/**
 * __useAllListsQuery__
 *
 * To run a query within a React component, call `useAllListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllListsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAllListsQuery(
  baseOptions: Apollo.QueryHookOptions<AllListsQuery, AllListsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllListsQuery, AllListsQueryVariables>(
    AllListsDocument,
    options,
  )
}
export function useAllListsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllListsQuery,
    AllListsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllListsQuery, AllListsQueryVariables>(
    AllListsDocument,
    options,
  )
}
export type AllListsQueryHookResult = ReturnType<typeof useAllListsQuery>
export type AllListsLazyQueryHookResult = ReturnType<
  typeof useAllListsLazyQuery
>
export type AllListsQueryResult = Apollo.QueryResult<
  AllListsQuery,
  AllListsQueryVariables
>
