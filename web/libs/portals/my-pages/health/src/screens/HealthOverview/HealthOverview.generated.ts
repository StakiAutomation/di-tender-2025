import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetInsuranceOverviewQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetInsuranceOverviewQuery = {
  __typename?: 'Query'
  rightsPortalInsuranceOverview?: {
    __typename?: 'RightsPortalInsuranceOverview'
    isInsured: boolean
    explanation?: string | null
    from?: string | null
    maximumPayment?: number | null
    ehicCardExpiryDate?: string | null
    status?: {
      __typename?: 'RightsPortalInsuranceStatus'
      display?: string | null
      code?: Types.RightsPortalInsuranceStatusType | null
    } | null
  } | null
}

export type GetInsuranceConfirmationQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetInsuranceConfirmationQuery = {
  __typename?: 'Query'
  rightsPortalInsuranceConfirmation?: {
    __typename?: 'RightsPortalInsuranceConfirmation'
    fileName: string
    contentType: string
    data: string
  } | null
}

export const GetInsuranceOverviewDocument = gql`
  query getInsuranceOverview {
    rightsPortalInsuranceOverview {
      isInsured
      explanation
      from
      status {
        display
        code
      }
      maximumPayment
      ehicCardExpiryDate
    }
  }
`

/**
 * __useGetInsuranceOverviewQuery__
 *
 * To run a query within a React component, call `useGetInsuranceOverviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInsuranceOverviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInsuranceOverviewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInsuranceOverviewQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInsuranceOverviewQuery,
    GetInsuranceOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetInsuranceOverviewQuery,
    GetInsuranceOverviewQueryVariables
  >(GetInsuranceOverviewDocument, options)
}
export function useGetInsuranceOverviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInsuranceOverviewQuery,
    GetInsuranceOverviewQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInsuranceOverviewQuery,
    GetInsuranceOverviewQueryVariables
  >(GetInsuranceOverviewDocument, options)
}
export type GetInsuranceOverviewQueryHookResult = ReturnType<
  typeof useGetInsuranceOverviewQuery
>
export type GetInsuranceOverviewLazyQueryHookResult = ReturnType<
  typeof useGetInsuranceOverviewLazyQuery
>
export type GetInsuranceOverviewQueryResult = Apollo.QueryResult<
  GetInsuranceOverviewQuery,
  GetInsuranceOverviewQueryVariables
>
export const GetInsuranceConfirmationDocument = gql`
  query getInsuranceConfirmation {
    rightsPortalInsuranceConfirmation {
      fileName
      contentType
      data
    }
  }
`

/**
 * __useGetInsuranceConfirmationQuery__
 *
 * To run a query within a React component, call `useGetInsuranceConfirmationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetInsuranceConfirmationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetInsuranceConfirmationQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetInsuranceConfirmationQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetInsuranceConfirmationQuery,
    GetInsuranceConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetInsuranceConfirmationQuery,
    GetInsuranceConfirmationQueryVariables
  >(GetInsuranceConfirmationDocument, options)
}
export function useGetInsuranceConfirmationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetInsuranceConfirmationQuery,
    GetInsuranceConfirmationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetInsuranceConfirmationQuery,
    GetInsuranceConfirmationQueryVariables
  >(GetInsuranceConfirmationDocument, options)
}
export type GetInsuranceConfirmationQueryHookResult = ReturnType<
  typeof useGetInsuranceConfirmationQuery
>
export type GetInsuranceConfirmationLazyQueryHookResult = ReturnType<
  typeof useGetInsuranceConfirmationLazyQuery
>
export type GetInsuranceConfirmationQueryResult = Apollo.QueryResult<
  GetInsuranceConfirmationQuery,
  GetInsuranceConfirmationQueryVariables
>
