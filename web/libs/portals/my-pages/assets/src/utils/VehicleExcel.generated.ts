import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetExcelVehiclesQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetExcelVehiclesQuery = {
  __typename?: 'Query'
  getExcelVehicles?: {
    __typename: 'VehiclesExcel'
    persidno?: string | null
    name?: string | null
    vehicles?: Array<{
      __typename?: 'VehiclesDetail'
      downloadServiceURL?: string | null
      mainInfo?: {
        __typename?: 'VehiclesMainInfo'
        model?: string | null
        subModel?: string | null
        regno?: string | null
        year?: number | null
        co2?: number | null
        weightedCo2?: number | null
        co2Wltp?: number | null
        weightedCo2Wltp?: number | null
        cubicCapacity?: number | null
        trailerWithBrakesWeight?: number | null
        trailerWithoutBrakesWeight?: number | null
      } | null
      basicInfo?: {
        __typename?: 'VehiclesBasicInfo'
        model?: string | null
        regno?: string | null
        subModel?: string | null
        permno?: string | null
        verno?: string | null
        year?: number | null
        country?: string | null
        preregDateYear?: string | null
        formerCountry?: string | null
        importStatus?: string | null
        vehicleStatus?: string | null
      } | null
      registrationInfo?: {
        __typename?: 'VehiclesRegistrationInfo'
        firstRegistrationDate?: string | null
        preRegistrationDate?: string | null
        newRegistrationDate?: string | null
        vehicleGroup?: string | null
        color?: string | null
        reggroup?: string | null
        reggroupName?: string | null
        passengers?: number | null
        useGroup?: string | null
        driversPassengers?: number | null
        standingPassengers?: number | null
        plateLocation?: string | null
        specialName?: string | null
        plateStatus?: string | null
      } | null
      currentOwnerInfo?: {
        __typename?: 'VehiclesCurrentOwnerInfo'
        owner?: string | null
        nationalId?: string | null
        address?: string | null
        postalcode?: string | null
        city?: string | null
        dateOfPurchase?: string | null
      } | null
      inspectionInfo?: {
        __typename?: 'VehiclesInspectionInfo'
        type?: string | null
        date?: string | null
        result?: string | null
        odometer?: string | null
        nextInspectionDate?: string | null
        lastInspectionDate?: string | null
        insuranceStatus?: boolean | null
        mortages?: number | null
        carTax?: number | null
        inspectionFine?: number | null
      } | null
      technicalInfo?: {
        __typename?: 'VehiclesTechnicalInfo'
        engine?: string | null
        totalWeight?: string | null
        cubicCapacity?: string | null
        capacityWeight?: number | null
        length?: number | null
        vehicleWeight?: number | null
        width?: number | null
        trailerWithoutBrakesWeight?: number | null
        horsepower?: number | null
        trailerWithBrakesWeight?: number | null
        carryingCapacity?: number | null
        axleTotalWeight?: number | null
        axles?: Array<{
          __typename?: 'VehiclesAxle'
          axleMaxWeight?: number | null
          wheelAxle?: string | null
        }> | null
        tyres?: {
          __typename?: 'Tyres'
          axle1?: string | null
          axle2?: string | null
          axle3?: string | null
          axle4?: string | null
          axle5?: string | null
        } | null
      } | null
      ownersInfo?: Array<{
        __typename?: 'VehiclesOwners'
        name?: string | null
        address?: string | null
        dateOfPurchase: string
      }> | null
      coOwners?: Array<{
        __typename?: 'VehiclesCurrentOwnerInfo'
        nationalId?: string | null
        owner?: string | null
        address?: string | null
        postalcode?: string | null
        city?: string | null
        dateOfPurchase?: string | null
      }> | null
      operators?: Array<{
        __typename?: 'VehiclesOperator'
        nationalId?: string | null
        name?: string | null
        address?: string | null
        postalcode?: string | null
        city?: string | null
        startDate?: string | null
        endDate?: string | null
        mainoperator?: boolean | null
        serial?: number | null
      }> | null
    }> | null
  } | null
}

export const GetExcelVehiclesDocument = gql`
  query GetExcelVehicles {
    getExcelVehicles {
      __typename
      persidno
      name
      vehicles {
        mainInfo {
          model
          subModel
          regno
          year
          co2
          weightedCo2
          co2Wltp
          weightedCo2Wltp
          cubicCapacity
          trailerWithBrakesWeight
          trailerWithoutBrakesWeight
        }
        basicInfo {
          model
          regno
          subModel
          permno
          verno
          year
          country
          preregDateYear
          formerCountry
          importStatus
          vehicleStatus
        }
        registrationInfo {
          firstRegistrationDate
          preRegistrationDate
          newRegistrationDate
          vehicleGroup
          color
          reggroup
          reggroupName
          passengers
          useGroup
          driversPassengers
          standingPassengers
          plateLocation
          specialName
          plateStatus
        }
        currentOwnerInfo {
          owner
          nationalId
          address
          postalcode
          city
          dateOfPurchase
        }
        inspectionInfo {
          type
          date
          result
          odometer
          nextInspectionDate
          lastInspectionDate
          insuranceStatus
          mortages
          carTax
          inspectionFine
        }
        technicalInfo {
          engine
          totalWeight
          cubicCapacity
          capacityWeight
          length
          vehicleWeight
          width
          trailerWithoutBrakesWeight
          horsepower
          trailerWithBrakesWeight
          carryingCapacity
          axleTotalWeight
          axles {
            axleMaxWeight
            wheelAxle
          }
          tyres {
            axle1
            axle2
            axle3
            axle4
            axle5
          }
        }
        ownersInfo {
          name
          address
          dateOfPurchase
        }
        coOwners {
          nationalId
          owner
          address
          postalcode
          city
          dateOfPurchase
        }
        operators {
          nationalId
          name
          address
          postalcode
          city
          startDate
          endDate
          mainoperator
          serial
        }
        downloadServiceURL
      }
    }
  }
`

/**
 * __useGetExcelVehiclesQuery__
 *
 * To run a query within a React component, call `useGetExcelVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExcelVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExcelVehiclesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExcelVehiclesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetExcelVehiclesQuery,
    GetExcelVehiclesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetExcelVehiclesQuery, GetExcelVehiclesQueryVariables>(
    GetExcelVehiclesDocument,
    options,
  )
}
export function useGetExcelVehiclesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExcelVehiclesQuery,
    GetExcelVehiclesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetExcelVehiclesQuery,
    GetExcelVehiclesQueryVariables
  >(GetExcelVehiclesDocument, options)
}
export type GetExcelVehiclesQueryHookResult = ReturnType<
  typeof useGetExcelVehiclesQuery
>
export type GetExcelVehiclesLazyQueryHookResult = ReturnType<
  typeof useGetExcelVehiclesLazyQuery
>
export type GetExcelVehiclesQueryResult = Apollo.QueryResult<
  GetExcelVehiclesQuery,
  GetExcelVehiclesQueryVariables
>
