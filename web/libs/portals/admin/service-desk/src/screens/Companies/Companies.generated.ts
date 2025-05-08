import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type SearchCompaniesQueryVariables = Types.Exact<{
  input: Types.RskCompanyInfoSearchInput
}>

export type SearchCompaniesQuery = {
  __typename?: 'Query'
  companyRegistryCompanies: {
    __typename?: 'RskCompanySearchItems'
    data: Array<{ __typename?: 'RskCompany'; name: string; nationalId: string }>
  }
}

export const SearchCompaniesDocument = gql`
  query SearchCompanies($input: RskCompanyInfoSearchInput!) {
    companyRegistryCompanies(input: $input) {
      data {
        name
        nationalId
      }
    }
  }
`

/**
 * __useSearchCompaniesQuery__
 *
 * To run a query within a React component, call `useSearchCompaniesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCompaniesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCompaniesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchCompaniesQuery(
  baseOptions: Apollo.QueryHookOptions<
    SearchCompaniesQuery,
    SearchCompaniesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SearchCompaniesQuery, SearchCompaniesQueryVariables>(
    SearchCompaniesDocument,
    options,
  )
}
export function useSearchCompaniesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchCompaniesQuery,
    SearchCompaniesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SearchCompaniesQuery,
    SearchCompaniesQueryVariables
  >(SearchCompaniesDocument, options)
}
export type SearchCompaniesQueryHookResult = ReturnType<
  typeof useSearchCompaniesQuery
>
export type SearchCompaniesLazyQueryHookResult = ReturnType<
  typeof useSearchCompaniesLazyQuery
>
export type SearchCompaniesQueryResult = Apollo.QueryResult<
  SearchCompaniesQuery,
  SearchCompaniesQueryVariables
>
