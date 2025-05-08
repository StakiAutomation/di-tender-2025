import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetFinanceDocumentsListQueryVariables = Types.Exact<{
  input: Types.GetFinanceDocumentsListInput
}>

export type GetFinanceDocumentsListQuery = {
  __typename?: 'Query'
  getDocumentsList: {
    __typename?: 'FinanceDocumentsListModel'
    downloadServiceURL?: string | null
    documentsList: Array<{
      __typename?: 'FinanceDocumentsListItem'
      id: string
      date: string
      type: string
      note?: string | null
      sender: string
      dateOpen: string
      amount: number
    }>
  }
}

export const GetFinanceDocumentsListDocument = gql`
  query GetFinanceDocumentsList($input: GetFinanceDocumentsListInput!) {
    getDocumentsList(input: $input) {
      downloadServiceURL
      documentsList {
        id
        date
        type
        note
        sender
        dateOpen
        amount
      }
    }
  }
`

/**
 * __useGetFinanceDocumentsListQuery__
 *
 * To run a query within a React component, call `useGetFinanceDocumentsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFinanceDocumentsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFinanceDocumentsListQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetFinanceDocumentsListQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFinanceDocumentsListQuery,
    GetFinanceDocumentsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetFinanceDocumentsListQuery,
    GetFinanceDocumentsListQueryVariables
  >(GetFinanceDocumentsListDocument, options)
}
export function useGetFinanceDocumentsListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFinanceDocumentsListQuery,
    GetFinanceDocumentsListQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetFinanceDocumentsListQuery,
    GetFinanceDocumentsListQueryVariables
  >(GetFinanceDocumentsListDocument, options)
}
export type GetFinanceDocumentsListQueryHookResult = ReturnType<
  typeof useGetFinanceDocumentsListQuery
>
export type GetFinanceDocumentsListLazyQueryHookResult = ReturnType<
  typeof useGetFinanceDocumentsListLazyQuery
>
export type GetFinanceDocumentsListQueryResult = Apollo.QueryResult<
  GetFinanceDocumentsListQuery,
  GetFinanceDocumentsListQueryVariables
>
