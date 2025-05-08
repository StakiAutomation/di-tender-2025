import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCourtCaseQueryVariables = Types.Exact<{
  input: Types.LawAndOrderCourtCaseInput
  locale: Types.Scalars['String']
}>

export type GetCourtCaseQuery = {
  __typename?: 'Query'
  lawAndOrderCourtCaseDetail?: {
    __typename?: 'LawAndOrderCourtCase'
    texts?: {
      __typename?: 'LawAndOrderCourtCaseText'
      intro?: string | null
      footnote?: string | null
    } | null
    data?: {
      __typename?: 'LawAndOrderCourtCaseData'
      id: string
      hasBeenServed?: boolean | null
      caseNumberTitle?: string | null
      groups?: Array<{
        __typename?: 'LawAndOrderGroup'
        label?: string | null
        items?: Array<{
          __typename?: 'LawAndOrderSubpoenaItem'
          label?: string | null
          value?: string | null
          link?: string | null
          action?: {
            __typename?: 'LawAndOrderAction'
            type?: Types.LawAndOrderActionTypeEnum | null
            title?: string | null
            data?: string | null
          } | null
        }> | null
      }> | null
    } | null
  } | null
}

export const GetCourtCaseDocument = gql`
  query GetCourtCase($input: LawAndOrderCourtCaseInput!, $locale: String!) {
    lawAndOrderCourtCaseDetail(input: $input, locale: $locale) {
      texts {
        intro
        footnote
      }
      data {
        id
        hasBeenServed
        caseNumberTitle
        groups {
          label
          items {
            label
            value
            link
            action {
              type
              title
              data
            }
          }
        }
      }
    }
  }
`

/**
 * __useGetCourtCaseQuery__
 *
 * To run a query within a React component, call `useGetCourtCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCourtCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCourtCaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetCourtCaseQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCourtCaseQuery,
    GetCourtCaseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCourtCaseQuery, GetCourtCaseQueryVariables>(
    GetCourtCaseDocument,
    options,
  )
}
export function useGetCourtCaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCourtCaseQuery,
    GetCourtCaseQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCourtCaseQuery, GetCourtCaseQueryVariables>(
    GetCourtCaseDocument,
    options,
  )
}
export type GetCourtCaseQueryHookResult = ReturnType<
  typeof useGetCourtCaseQuery
>
export type GetCourtCaseLazyQueryHookResult = ReturnType<
  typeof useGetCourtCaseLazyQuery
>
export type GetCourtCaseQueryResult = Apollo.QueryResult<
  GetCourtCaseQuery,
  GetCourtCaseQueryVariables
>
