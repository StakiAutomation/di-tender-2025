import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetOccupationalLicensesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetOccupationalLicensesQuery = {
  __typename?: 'Query'
  occupationalLicenses?: {
    __typename: 'OccupationalLicensesLicenses'
    licenses: Array<
      | {
          __typename: 'OccupationalLicense'
          licenseId: string
          legalEntityId?: string | null
          issuer?: string | null
          type: Types.OccupationalLicenseLicenseType
          issuerTitle?: string | null
          profession?: string | null
          licenseHolderNationalId?: string | null
          dateOfBirth?: string | null
          validFrom: string
          title?: string | null
          status: Types.OccupationalLicenseStatus
        }
      | {
          __typename: 'OccupationalLicensesError'
          type: Types.OccupationalLicenseLicenseType
          error?: string | null
        }
    >
  } | null
}

export const GetOccupationalLicensesDocument = gql`
  query getOccupationalLicenses {
    occupationalLicenses {
      __typename
      licenses {
        ... on OccupationalLicense {
          __typename
          licenseId
          legalEntityId
          issuer
          type
          issuerTitle
          profession
          licenseHolderNationalId
          dateOfBirth
          validFrom
          title
          status
        }
        ... on OccupationalLicensesError {
          __typename
          type
          error
        }
      }
    }
  }
`

/**
 * __useGetOccupationalLicensesQuery__
 *
 * To run a query within a React component, call `useGetOccupationalLicensesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOccupationalLicensesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOccupationalLicensesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOccupationalLicensesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetOccupationalLicensesQuery,
    GetOccupationalLicensesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetOccupationalLicensesQuery,
    GetOccupationalLicensesQueryVariables
  >(GetOccupationalLicensesDocument, options)
}
export function useGetOccupationalLicensesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetOccupationalLicensesQuery,
    GetOccupationalLicensesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetOccupationalLicensesQuery,
    GetOccupationalLicensesQueryVariables
  >(GetOccupationalLicensesDocument, options)
}
export type GetOccupationalLicensesQueryHookResult = ReturnType<
  typeof useGetOccupationalLicensesQuery
>
export type GetOccupationalLicensesLazyQueryHookResult = ReturnType<
  typeof useGetOccupationalLicensesLazyQuery
>
export type GetOccupationalLicensesQueryResult = Apollo.QueryResult<
  GetOccupationalLicensesQuery,
  GetOccupationalLicensesQueryVariables
>
