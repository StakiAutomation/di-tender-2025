import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ListbyidQueryVariables = Types.Exact<{
  input: Types.SignatureCollectionListIdInput
}>

export type ListbyidQuery = {
  __typename?: 'Query'
  signatureCollectionAdminList: {
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
  }
}

export const ListbyidDocument = gql`
  query listbyid($input: SignatureCollectionListIdInput!) {
    signatureCollectionAdminList(input: $input) {
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
 * __useListbyidQuery__
 *
 * To run a query within a React component, call `useListbyidQuery` and pass it any options that fit your needs.
 * When your component renders, `useListbyidQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListbyidQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useListbyidQuery(
  baseOptions: Apollo.QueryHookOptions<ListbyidQuery, ListbyidQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ListbyidQuery, ListbyidQueryVariables>(
    ListbyidDocument,
    options,
  )
}
export function useListbyidLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ListbyidQuery,
    ListbyidQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ListbyidQuery, ListbyidQueryVariables>(
    ListbyidDocument,
    options,
  )
}
export type ListbyidQueryHookResult = ReturnType<typeof useListbyidQuery>
export type ListbyidLazyQueryHookResult = ReturnType<
  typeof useListbyidLazyQuery
>
export type ListbyidQueryResult = Apollo.QueryResult<
  ListbyidQuery,
  ListbyidQueryVariables
>
