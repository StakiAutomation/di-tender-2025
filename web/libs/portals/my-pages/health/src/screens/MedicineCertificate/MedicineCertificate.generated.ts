import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetCertificateByIdQueryVariables = Types.Exact<{
  input: Types.RightsPortalDrugCertificateInput
}>

export type GetCertificateByIdQuery = {
  __typename?: 'Query'
  rightsPortalGetCertificateById: {
    __typename?: 'RightsPortalDrugCertificate'
    id?: number | null
    atcCode?: string | null
    atcName?: string | null
    drugName?: string | null
    date?: string | null
    validFrom?: string | null
    validTo?: string | null
    doctor?: string | null
    processed?: boolean | null
    approved?: boolean | null
    rejected?: boolean | null
    expired?: boolean | null
    valid?: boolean | null
    comment?: string | null
    documentId?: number | null
    methylDoctors?: Array<{
      __typename?: 'RightsPortalMethylDoctor'
      name?: string | null
    }> | null
  }
}

export const GetCertificateByIdDocument = gql`
  query getCertificateById($input: RightsPortalDrugCertificateInput!) {
    rightsPortalGetCertificateById(input: $input) {
      id
      atcCode
      atcName
      drugName
      date
      validFrom
      validTo
      doctor
      processed
      approved
      rejected
      expired
      valid
      comment
      documentId
      methylDoctors {
        name
      }
    }
  }
`

/**
 * __useGetCertificateByIdQuery__
 *
 * To run a query within a React component, call `useGetCertificateByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCertificateByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCertificateByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetCertificateByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetCertificateByIdQuery,
    GetCertificateByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCertificateByIdQuery,
    GetCertificateByIdQueryVariables
  >(GetCertificateByIdDocument, options)
}
export function useGetCertificateByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCertificateByIdQuery,
    GetCertificateByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCertificateByIdQuery,
    GetCertificateByIdQueryVariables
  >(GetCertificateByIdDocument, options)
}
export type GetCertificateByIdQueryHookResult = ReturnType<
  typeof useGetCertificateByIdQuery
>
export type GetCertificateByIdLazyQueryHookResult = ReturnType<
  typeof useGetCertificateByIdLazyQuery
>
export type GetCertificateByIdQueryResult = Apollo.QueryResult<
  GetCertificateByIdQuery,
  GetCertificateByIdQueryVariables
>
