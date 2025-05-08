import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetIntellectualPropertiesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetIntellectualPropertiesQuery = {
  __typename?: 'Query'
  intellectualProperties?: {
    __typename: 'IntellectualPropertiesResponse'
    totalCount: number
    items?: Array<
      | {
          __typename: 'IntellectualPropertiesDesign'
          applicationNumber?: string | null
          id: string
          status?: string | null
          specification?: {
            __typename?: 'IntellectualPropertiesSpecification'
            description?: string | null
          } | null
        }
      | {
          __typename: 'IntellectualPropertiesPatentEP'
          applicationNumber?: string | null
          name: string
          statusText?: string | null
          lifecycle?: {
            __typename?: 'IntellectualPropertiesApplicationLifecycle'
            applicationDate?: string | null
          } | null
        }
      | {
          __typename: 'IntellectualPropertiesPatentIS'
          applicationNumber?: string | null
          name: string
          statusText?: string | null
          lifecycle?: {
            __typename?: 'IntellectualPropertiesApplicationLifecycle'
            applicationDate?: string | null
          } | null
        }
      | {
          __typename: 'IntellectualPropertiesSPC'
          applicationNumber?: string | null
          name: string
          statusText?: string | null
          lifecycle?: {
            __typename?: 'IntellectualPropertiesApplicationLifecycle'
            applicationDate?: string | null
          } | null
        }
      | {
          __typename: 'IntellectualPropertiesTrademark'
          text?: string | null
          typeReadable?: string | null
          status?: string | null
          id: string
        }
    > | null
  } | null
}

export const GetIntellectualPropertiesDocument = gql`
  query GetIntellectualProperties {
    intellectualProperties {
      __typename
      totalCount
      items {
        ... on IntellectualPropertiesPatentIS {
          __typename
          applicationNumber
          name
          statusText
          lifecycle {
            applicationDate
          }
        }
        ... on IntellectualPropertiesPatentEP {
          __typename
          applicationNumber
          name
          statusText
          lifecycle {
            applicationDate
          }
        }
        ... on IntellectualPropertiesSPC {
          __typename
          applicationNumber
          name
          statusText
          lifecycle {
            applicationDate
          }
        }
        ... on IntellectualPropertiesTrademark {
          __typename
          text
          typeReadable
          status
          id
        }
        ... on IntellectualPropertiesDesign {
          __typename
          applicationNumber
          id
          status
          specification {
            description
          }
        }
      }
    }
  }
`

/**
 * __useGetIntellectualPropertiesQuery__
 *
 * To run a query within a React component, call `useGetIntellectualPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntellectualPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntellectualPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIntellectualPropertiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetIntellectualPropertiesQuery,
    GetIntellectualPropertiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetIntellectualPropertiesQuery,
    GetIntellectualPropertiesQueryVariables
  >(GetIntellectualPropertiesDocument, options)
}
export function useGetIntellectualPropertiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIntellectualPropertiesQuery,
    GetIntellectualPropertiesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetIntellectualPropertiesQuery,
    GetIntellectualPropertiesQueryVariables
  >(GetIntellectualPropertiesDocument, options)
}
export type GetIntellectualPropertiesQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesQuery
>
export type GetIntellectualPropertiesLazyQueryHookResult = ReturnType<
  typeof useGetIntellectualPropertiesLazyQuery
>
export type GetIntellectualPropertiesQueryResult = Apollo.QueryResult<
  GetIntellectualPropertiesQuery,
  GetIntellectualPropertiesQueryVariables
>
