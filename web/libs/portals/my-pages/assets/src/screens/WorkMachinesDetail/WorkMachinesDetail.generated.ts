import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetWorkMachineByIdQueryVariables = Types.Exact<{
  input: Types.WorkMachinesInput
}>

export type GetWorkMachineByIdQuery = {
  __typename?: 'Query'
  workMachine?: {
    __typename?: 'WorkMachine'
    type?: string | null
    status?: string | null
    category?: string | null
    subCategory?: string | null
    registrationNumber?: string | null
    registrationDate?: string | null
    ownerName?: string | null
    ownerNationalId?: string | null
    ownerAddress?: string | null
    ownerPostcode?: string | null
    supervisorName?: string | null
    supervisorNationalId?: string | null
    supervisorAddress?: string | null
    supervisorPostcode?: string | null
    productionNumber?: string | null
    productionCountry?: string | null
    productionYear?: number | null
    importer?: string | null
    insurer?: string | null
    licensePlateNumber?: string | null
    dateLastInspection?: string | null
    links?: Array<{
      __typename?: 'WorkMachinesLink'
      href?: string | null
      rel?: Types.WorkMachinesAction | null
      displayTitle?: string | null
    }> | null
    labels?: Array<{
      __typename?: 'WorkMachinesLabel'
      columnName?: string | null
      displayTitle?: string | null
    }> | null
  } | null
}

export const GetWorkMachineByIdDocument = gql`
  query GetWorkMachineById($input: WorkMachinesInput!) {
    workMachine(input: $input) {
      type
      status
      category
      subCategory
      registrationNumber
      registrationDate
      ownerName
      ownerNationalId
      ownerAddress
      ownerPostcode
      supervisorName
      supervisorNationalId
      supervisorAddress
      supervisorPostcode
      productionNumber
      productionCountry
      productionYear
      importer
      insurer
      licensePlateNumber
      dateLastInspection
      links {
        href
        rel
        displayTitle
      }
      labels {
        columnName
        displayTitle
      }
    }
  }
`

/**
 * __useGetWorkMachineByIdQuery__
 *
 * To run a query within a React component, call `useGetWorkMachineByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkMachineByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkMachineByIdQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetWorkMachineByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetWorkMachineByIdQuery,
    GetWorkMachineByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetWorkMachineByIdQuery,
    GetWorkMachineByIdQueryVariables
  >(GetWorkMachineByIdDocument, options)
}
export function useGetWorkMachineByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWorkMachineByIdQuery,
    GetWorkMachineByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetWorkMachineByIdQuery,
    GetWorkMachineByIdQueryVariables
  >(GetWorkMachineByIdDocument, options)
}
export type GetWorkMachineByIdQueryHookResult = ReturnType<
  typeof useGetWorkMachineByIdQuery
>
export type GetWorkMachineByIdLazyQueryHookResult = ReturnType<
  typeof useGetWorkMachineByIdLazyQuery
>
export type GetWorkMachineByIdQueryResult = Apollo.QueryResult<
  GetWorkMachineByIdQuery,
  GetWorkMachineByIdQueryVariables
>
