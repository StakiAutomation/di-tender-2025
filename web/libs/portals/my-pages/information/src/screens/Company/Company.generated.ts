import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CompanyRegistryCompanyQueryVariables = Types.Exact<{
  input: Types.RskCompanyInfoInput
}>

export type CompanyRegistryCompanyQuery = {
  __typename?: 'Query'
  companyRegistryCompany?: {
    __typename?: 'RskCompany'
    name: string
    nationalId: string
    dateOfRegistration?: string | null
    companyInfo?: {
      __typename?: 'RskCompanyInfo'
      formOfOperation: Array<{
        __typename?: 'RskCompanyFormOfOperation'
        type: string
        name: string
      }>
      vat: Array<{
        __typename?: 'RskCompanyVat'
        vatNumber?: string | null
        dateOfDeregistration?: string | null
        classification?: Array<{
          __typename?: 'RskCompanyClassification'
          type: string
          classificationSystem: string
          number: string
          name: string
        }> | null
      }>
      address?: {
        __typename?: 'RskCompanyAddress'
        streetAddress?: string | null
        postalCode?: string | null
        locality?: string | null
        municipalityNumber?: string | null
        country?: string | null
      } | null
    } | null
  } | null
}

export const CompanyRegistryCompanyDocument = gql`
  query companyRegistryCompany($input: RskCompanyInfoInput!) {
    companyRegistryCompany(input: $input) {
      name
      nationalId
      dateOfRegistration
      companyInfo {
        formOfOperation {
          type
          name
        }
        vat {
          vatNumber
          dateOfDeregistration
          classification {
            type
            classificationSystem
            number
            name
          }
        }
        address {
          streetAddress
          postalCode
          locality
          municipalityNumber
          country
        }
      }
    }
  }
`

/**
 * __useCompanyRegistryCompanyQuery__
 *
 * To run a query within a React component, call `useCompanyRegistryCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useCompanyRegistryCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCompanyRegistryCompanyQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCompanyRegistryCompanyQuery(
  baseOptions: Apollo.QueryHookOptions<
    CompanyRegistryCompanyQuery,
    CompanyRegistryCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    CompanyRegistryCompanyQuery,
    CompanyRegistryCompanyQueryVariables
  >(CompanyRegistryCompanyDocument, options)
}
export function useCompanyRegistryCompanyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CompanyRegistryCompanyQuery,
    CompanyRegistryCompanyQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CompanyRegistryCompanyQuery,
    CompanyRegistryCompanyQueryVariables
  >(CompanyRegistryCompanyDocument, options)
}
export type CompanyRegistryCompanyQueryHookResult = ReturnType<
  typeof useCompanyRegistryCompanyQuery
>
export type CompanyRegistryCompanyLazyQueryHookResult = ReturnType<
  typeof useCompanyRegistryCompanyLazyQuery
>
export type CompanyRegistryCompanyQueryResult = Apollo.QueryResult<
  CompanyRegistryCompanyQuery,
  CompanyRegistryCompanyQueryVariables
>
