import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUsersVehiclesQueryVariables = Types.Exact<{
  input: Types.GetVehiclesForUserInput
}>

export type GetUsersVehiclesQuery = {
  __typename?: 'Query'
  vehiclesList?: {
    __typename?: 'VehiclesList'
    vehicleList?: Array<{
      __typename?: 'VehiclesVehicle'
      isCurrent?: boolean | null
      permno?: string | null
      regno?: string | null
      vin?: string | null
      type?: string | null
      color?: string | null
      firstRegDate?: string | null
      modelYear?: string | null
      productYear?: string | null
      registrationType?: string | null
      role?: string | null
      operatorStartDate?: string | null
      operatorEndDate?: string | null
      outOfUse?: boolean | null
      otherOwners?: boolean | null
      termination?: string | null
      buyerPersidno?: string | null
      ownerPersidno?: string | null
      vehicleStatus?: string | null
      useGroup?: string | null
      vehGroup?: string | null
      plateStatus?: string | null
      operatorNumber?: number | null
      primaryOperator?: boolean | null
      ownerSsid?: string | null
      ownerName?: string | null
      lastInspectionResult?: string | null
      lastInspectionDate?: string | null
      lastInspectionType?: string | null
      nextInspectionDate?: string | null
      nextInspection?: {
        __typename?: 'NextInspection'
        nextInspectionDate?: string | null
        nextInspectionDateIfPassedInspectionToday?: string | null
      } | null
    }> | null
    paging?: {
      __typename?: 'VehiclePaging'
      pageNumber?: number | null
      pageSize?: number | null
      totalPages?: number | null
      totalRecords?: number | null
    } | null
  } | null
}

export const GetUsersVehiclesDocument = gql`
  query GetUsersVehicles($input: GetVehiclesForUserInput!) {
    vehiclesList(input: $input) {
      vehicleList {
        isCurrent
        permno
        regno
        vin
        type
        color
        firstRegDate
        modelYear
        productYear
        registrationType
        role
        operatorStartDate
        operatorEndDate
        outOfUse
        otherOwners
        termination
        buyerPersidno
        ownerPersidno
        vehicleStatus
        useGroup
        vehGroup
        plateStatus
        nextInspection {
          nextInspectionDate
          nextInspectionDateIfPassedInspectionToday
        }
        operatorNumber
        primaryOperator
        ownerSsid
        ownerName
        lastInspectionResult
        lastInspectionDate
        lastInspectionType
        nextInspectionDate
      }
      paging {
        pageNumber
        pageSize
        totalPages
        totalRecords
      }
    }
  }
`

/**
 * __useGetUsersVehiclesQuery__
 *
 * To run a query within a React component, call `useGetUsersVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersVehiclesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersVehiclesQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetUsersVehiclesQuery,
    GetUsersVehiclesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersVehiclesQuery, GetUsersVehiclesQueryVariables>(
    GetUsersVehiclesDocument,
    options,
  )
}
export function useGetUsersVehiclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersVehiclesQuery,
    GetUsersVehiclesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUsersVehiclesQuery,
    GetUsersVehiclesQueryVariables
  >(GetUsersVehiclesDocument, options)
}
export type GetUsersVehiclesQueryHookResult = ReturnType<
  typeof useGetUsersVehiclesQuery
>
export type GetUsersVehiclesLazyQueryHookResult = ReturnType<
  typeof useGetUsersVehiclesLazyQuery
>
export type GetUsersVehiclesQueryResult = Apollo.QueryResult<
  GetUsersVehiclesQuery,
  GetUsersVehiclesQueryVariables
>
