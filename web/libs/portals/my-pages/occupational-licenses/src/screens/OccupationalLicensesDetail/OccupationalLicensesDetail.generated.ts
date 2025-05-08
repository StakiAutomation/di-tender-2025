import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetOccupationalLicenseByIdQueryVariables = Types.Exact<{
  input: Types.OccupationalLicensesLicenseInput
}>

export type GetOccupationalLicenseByIdQuery = {
  __typename?: 'Query'
  occupationalLicense?: {
    __typename: 'OccupationalLicensesLicenseResponse'
    headerText?: string | null
    footerText?: string | null
    license: {
      __typename: 'OccupationalLicense'
      type: Types.OccupationalLicenseLicenseType
      licenseId: string
      licenseNumber?: string | null
      profession?: string | null
      licenseHolderName?: string | null
      dateOfBirth?: string | null
      validFrom: string
      issuer?: string | null
      issuerTitle?: string | null
      status: Types.OccupationalLicenseStatus
      permit?: string | null
      title?: string | null
      genericFields?: Array<{
        __typename?: 'OccupationalLicensesGenericField'
        title: string
        value: string
      }> | null
    }
    actions?: Array<{
      __typename?: 'OccupationalLicensesLink'
      text: string
      type: Types.OccupationalLicensesLinkType
      url: string
    }> | null
  } | null
}

export const GetOccupationalLicenseByIdDocument = gql`
  query getOccupationalLicenseById($input: OccupationalLicensesLicenseInput!) {
    occupationalLicense(input: $input) {
      __typename
      license {
        __typename
        type
        licenseId
        licenseNumber
        profession
        licenseHolderName
        dateOfBirth
        validFrom
        issuer
        issuerTitle
        status
        issuer
        permit
        title
        genericFields {
          title
          value
        }
      }
      headerText
      footerText
      actions {
        text
        type
        url
      }
    }
  }
`

/**
 * __useGetOccupationalLicenseByIdQuery__
 *
 * To run a query within a React component, call `useGetOccupationalLicenseByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOccupationalLicenseByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOccupationalLicenseByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetOccupationalLicenseByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetOccupationalLicenseByIdQuery,
    GetOccupationalLicenseByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetOccupationalLicenseByIdQuery,
    GetOccupationalLicenseByIdQueryVariables
  >(GetOccupationalLicenseByIdDocument, options)
}
export function useGetOccupationalLicenseByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOccupationalLicenseByIdQuery,
    GetOccupationalLicenseByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOccupationalLicenseByIdQuery,
    GetOccupationalLicenseByIdQueryVariables
  >(GetOccupationalLicenseByIdDocument, options)
}
export type GetOccupationalLicenseByIdQueryHookResult = ReturnType<
  typeof useGetOccupationalLicenseByIdQuery
>
export type GetOccupationalLicenseByIdLazyQueryHookResult = ReturnType<
  typeof useGetOccupationalLicenseByIdLazyQuery
>
export type GetOccupationalLicenseByIdQueryResult = Apollo.QueryResult<
  GetOccupationalLicenseByIdQuery,
  GetOccupationalLicenseByIdQueryVariables
>
