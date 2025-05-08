import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetPaperMailListQueryVariables = Types.Exact<{
  input: Types.DocumentProviderPaperMailInput
}>

export type GetPaperMailListQuery = {
  __typename?: 'Query'
  documentProviderPaperMailList: {
    __typename?: 'DocumentProviderPaperMailResponse'
    totalCount: number
    paperMail: Array<{
      __typename?: 'DocumentProviderPaperMail'
      nationalId: string
      origin: string
      wantsPaper: boolean
      dateAdded?: string | null
      dateUpdated?: string | null
    }>
  }
}

export const GetPaperMailListDocument = gql`
  query GetPaperMailList($input: DocumentProviderPaperMailInput!) {
    documentProviderPaperMailList(input: $input) {
      paperMail {
        nationalId
        origin
        wantsPaper
        dateAdded
        dateUpdated
      }
      totalCount
    }
  }
`

/**
 * __useGetPaperMailListQuery__
 *
 * To run a query within a React component, call `useGetPaperMailListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaperMailListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaperMailListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaperMailListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaperMailListQuery,
    GetPaperMailListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetPaperMailListQuery, GetPaperMailListQueryVariables>(
    GetPaperMailListDocument,
    options,
  )
}
export function useGetPaperMailListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaperMailListQuery,
    GetPaperMailListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaperMailListQuery,
    GetPaperMailListQueryVariables
  >(GetPaperMailListDocument, options)
}
export type GetPaperMailListQueryHookResult = ReturnType<
  typeof useGetPaperMailListQuery
>
export type GetPaperMailListLazyQueryHookResult = ReturnType<
  typeof useGetPaperMailListLazyQuery
>
export type GetPaperMailListQueryResult = Apollo.QueryResult<
  GetPaperMailListQuery,
  GetPaperMailListQueryVariables
>
