import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CompanyRelationshipsQueryVariables = Types.Exact<{
  input: Types.RskCompanyInfoInput
}>

export type CompanyRelationshipsQuery = {
  __typename?: 'Query'
  companyRegistryCompany?: {
    __typename?: 'RskCompany'
    name: string
    nationalId: string
    companyInfo?: {
      __typename?: 'RskCompanyInfo'
      relationships?: Array<{
        __typename?: 'RskCompanyRelatedParty'
        name: string
        nationalId: string
      }> | null
    } | null
  } | null
}

export const CompanyRelationshipsDocument = gql`
  query CompanyRelationships($input: RskCompanyInfoInput!) {
    companyRegistryCompany(input: $input) {
      name
      nationalId
      companyInfo {
        relationships {
          name
          nationalId
        }
      }
    }
  }
`

/**
 * __useCompanyRelationshipsQuery__
 *
 * To run a query within a React component, call `useCompanyRelationshipsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyRelationshipsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyRelationshipsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompanyRelationshipsQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyRelationshipsQuery,
    CompanyRelationshipsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CompanyRelationshipsQuery,
    CompanyRelationshipsQueryVariables
  >(CompanyRelationshipsDocument, options)
}
export function useCompanyRelationshipsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyRelationshipsQuery,
    CompanyRelationshipsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CompanyRelationshipsQuery,
    CompanyRelationshipsQueryVariables
  >(CompanyRelationshipsDocument, options)
}
export type CompanyRelationshipsQueryHookResult = ReturnType<
  typeof useCompanyRelationshipsQuery
>
export type CompanyRelationshipsLazyQueryHookResult = ReturnType<
  typeof useCompanyRelationshipsLazyQuery
>
export type CompanyRelationshipsQueryResult = Apollo.QueryResult<
  CompanyRelationshipsQuery,
  CompanyRelationshipsQueryVariables
>
