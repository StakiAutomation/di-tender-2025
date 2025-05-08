import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetVehiclesSearchQueryVariables = Types.Exact<{
  input: Types.GetVehicleSearchInput
}>

export type GetVehiclesSearchQuery = {
  __typename?: 'Query'
  vehiclesSearch?: {
    __typename?: 'VehiclesVehicleSearch'
    permno?: string | null
    regno?: string | null
    vin?: string | null
    type?: string | null
    color?: string | null
    firstregdate?: string | null
    latestregistration?: string | null
    currentOwner?: string | null
    currentOwnerAddress?: string | null
    currentOwnerIsAnonymous?: boolean | null
    useGroup?: string | null
    regtype?: string | null
    mass?: number | null
    massLaden?: number | null
    vehicleStatus?: string | null
    co?: number | null
    co2Wltp?: number | null
    weightedco2Wltp?: number | null
    engine?: string | null
    operatorNames?: Array<string> | null
    operatorAnonymityStatus: Types.OperatorAnonymityStatus
    nextInspection?: {
      __typename?: 'VehiclesVehicleSearchNextInspection'
      nextinspectiondate?: string | null
      nextinspectiondateIfPassedInspectionToday?: string | null
    } | null
  } | null
}

export type GetUsersVehiclesSearchLimitQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetUsersVehiclesSearchLimitQuery = {
  __typename?: 'Query'
  vehiclesSearchLimit?: number | null
}

export const GetVehiclesSearchDocument = gql`
  query GetVehiclesSearch($input: GetVehicleSearchInput!) {
    vehiclesSearch(input: $input) {
      permno
      regno
      vin
      type
      color
      firstregdate
      latestregistration
      nextInspection {
        nextinspectiondate
        nextinspectiondateIfPassedInspectionToday
      }
      currentOwner
      currentOwnerAddress
      currentOwnerIsAnonymous
      useGroup
      regtype
      mass
      massLaden
      vehicleStatus
      co
      co2Wltp
      weightedco2Wltp
      engine
      operatorNames
      operatorAnonymityStatus
    }
  }
`

/**
 * __useGetVehiclesSearchQuery__
 *
 * To run a query within a React component, call `useGetVehiclesSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehiclesSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehiclesSearchQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetVehiclesSearchQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetVehiclesSearchQuery,
    GetVehiclesSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetVehiclesSearchQuery,
    GetVehiclesSearchQueryVariables
  >(GetVehiclesSearchDocument, options)
}
export function useGetVehiclesSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetVehiclesSearchQuery,
    GetVehiclesSearchQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetVehiclesSearchQuery,
    GetVehiclesSearchQueryVariables
  >(GetVehiclesSearchDocument, options)
}
export type GetVehiclesSearchQueryHookResult = ReturnType<
  typeof useGetVehiclesSearchQuery
>
export type GetVehiclesSearchLazyQueryHookResult = ReturnType<
  typeof useGetVehiclesSearchLazyQuery
>
export type GetVehiclesSearchQueryResult = Apollo.QueryResult<
  GetVehiclesSearchQuery,
  GetVehiclesSearchQueryVariables
>
export const GetUsersVehiclesSearchLimitDocument = gql`
  query GetUsersVehiclesSearchLimit {
    vehiclesSearchLimit
  }
`

/**
 * __useGetUsersVehiclesSearchLimitQuery__
 *
 * To run a query within a React component, call `useGetUsersVehiclesSearchLimitQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersVehiclesSearchLimitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersVehiclesSearchLimitQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersVehiclesSearchLimitQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUsersVehiclesSearchLimitQuery,
    GetUsersVehiclesSearchLimitQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUsersVehiclesSearchLimitQuery,
    GetUsersVehiclesSearchLimitQueryVariables
  >(GetUsersVehiclesSearchLimitDocument, options)
}
export function useGetUsersVehiclesSearchLimitLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersVehiclesSearchLimitQuery,
    GetUsersVehiclesSearchLimitQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUsersVehiclesSearchLimitQuery,
    GetUsersVehiclesSearchLimitQueryVariables
  >(GetUsersVehiclesSearchLimitDocument, options)
}
export type GetUsersVehiclesSearchLimitQueryHookResult = ReturnType<
  typeof useGetUsersVehiclesSearchLimitQuery
>
export type GetUsersVehiclesSearchLimitLazyQueryHookResult = ReturnType<
  typeof useGetUsersVehiclesSearchLimitLazyQuery
>
export type GetUsersVehiclesSearchLimitQueryResult = Apollo.QueryResult<
  GetUsersVehiclesSearchLimitQuery,
  GetUsersVehiclesSearchLimitQueryVariables
>
