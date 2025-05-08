import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetUsersVehiclesV2QueryVariables = Types.Exact<{
  input: Types.GetVehiclesListV2Input
}>

export type GetUsersVehiclesV2Query = {
  __typename?: 'Query'
  vehiclesListV2?: {
    __typename?: 'VehiclesListV2'
    downloadServiceURL?: string | null
    vehicleList?: Array<{
      __typename?: 'VehicleListed'
      permno?: string | null
      regno?: string | null
      make?: string | null
      colorName?: string | null
      modelYear?: string | null
      requiresMileageRegistration?: boolean | null
      canRegisterMileage?: boolean | null
      nextMainInspection?: string | null
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

export const GetUsersVehiclesV2Document = gql`
  query GetUsersVehiclesV2($input: GetVehiclesListV2Input!) {
    vehiclesListV2(input: $input) {
      vehicleList {
        permno
        regno
        make
        colorName
        modelYear
        requiresMileageRegistration
        canRegisterMileage
        nextMainInspection
      }
      paging {
        pageNumber
        pageSize
        totalPages
        totalRecords
      }
      downloadServiceURL
    }
  }
`

/**
 * __useGetUsersVehiclesV2Query__
 *
 * To run a query within a React component, call `useGetUsersVehiclesV2Query` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersVehiclesV2Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersVehiclesV2Query({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetUsersVehiclesV2Query(
  baseOptions: Apollo.QueryHookOptions<
    GetUsersVehiclesV2Query,
    GetUsersVehiclesV2QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetUsersVehiclesV2Query,
    GetUsersVehiclesV2QueryVariables
  >(GetUsersVehiclesV2Document, options)
}
export function useGetUsersVehiclesV2LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersVehiclesV2Query,
    GetUsersVehiclesV2QueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetUsersVehiclesV2Query,
    GetUsersVehiclesV2QueryVariables
  >(GetUsersVehiclesV2Document, options)
}
export type GetUsersVehiclesV2QueryHookResult = ReturnType<
  typeof useGetUsersVehiclesV2Query
>
export type GetUsersVehiclesV2LazyQueryHookResult = ReturnType<
  typeof useGetUsersVehiclesV2LazyQuery
>
export type GetUsersVehiclesV2QueryResult = Apollo.QueryResult<
  GetUsersVehiclesV2Query,
  GetUsersVehiclesV2QueryVariables
>
