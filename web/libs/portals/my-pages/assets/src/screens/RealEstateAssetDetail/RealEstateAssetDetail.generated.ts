import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type AppraisalFragment = {
  __typename?: 'Appraisal'
  activeAppraisal?: number | null
  plannedAppraisal?: number | null
  activeStructureAppraisal?: number | null
  plannedStructureAppraisal?: number | null
  activePlotAssessment?: number | null
  plannedPlotAssessment?: number | null
  activeYear?: number | null
  plannedYear?: number | null
}

export type AddressFragment = {
  __typename?: 'PropertyLocation'
  locationNumber?: number | null
  postNumber?: number | null
  municipality?: string | null
  propertyNumber?: number | null
  display?: string | null
  displayShort?: string | null
}

export type OwnerFragment = {
  __typename?: 'PropertyOwner'
  name?: string | null
  ssn?: string | null
  ownership?: number | null
  purchaseDate?: string | null
  grantDisplay?: string | null
}

export type UnitsOfUseFragment = {
  __typename?: 'UnitOfUse'
  propertyNumber?: string | null
  unitOfUseNumber?: string | null
  marking?: string | null
  usageDisplay?: string | null
  displaySize?: number | null
  buildYearDisplay?: string | null
  fireAssessment?: number | null
  explanation?: string | null
  appraisal?: {
    __typename?: 'Appraisal'
    activeAppraisal?: number | null
    plannedAppraisal?: number | null
    activeStructureAppraisal?: number | null
    plannedStructureAppraisal?: number | null
    activePlotAssessment?: number | null
    plannedPlotAssessment?: number | null
    activeYear?: number | null
    plannedYear?: number | null
  } | null
  address?: {
    __typename?: 'PropertyLocation'
    locationNumber?: number | null
    postNumber?: number | null
    municipality?: string | null
    propertyNumber?: number | null
    display?: string | null
    displayShort?: string | null
  } | null
}

export type PagingFragment = {
  __typename?: 'PagingData'
  page?: number | null
  pageSize?: number | null
  totalPages?: number | null
  offset?: number | null
  total?: number | null
  hasPreviousPage?: boolean | null
  hasNextPage?: boolean | null
}

export type GetAssetsPropertyOwnersQueryVariables = Types.Exact<{
  input: Types.GetPagingTypes
}>

export type GetAssetsPropertyOwnersQuery = {
  __typename?: 'Query'
  assetsPropertyOwners?: {
    __typename?: 'PropertyOwnersModel'
    registeredOwners?: Array<{
      __typename?: 'PropertyOwner'
      name?: string | null
      ssn?: string | null
      ownership?: number | null
      purchaseDate?: string | null
      grantDisplay?: string | null
    }> | null
    paging?: {
      __typename?: 'PagingData'
      page?: number | null
      pageSize?: number | null
      totalPages?: number | null
      offset?: number | null
      total?: number | null
      hasPreviousPage?: boolean | null
      hasNextPage?: boolean | null
    } | null
  } | null
}

export type GetSingleRealEstateQueryVariables = Types.Exact<{
  input: Types.GetRealEstateInput
}>

export type GetSingleRealEstateQuery = {
  __typename?: 'Query'
  assetsDetail?: {
    __typename?: 'PropertyDetail'
    propertyNumber?: string | null
    defaultAddress?: {
      __typename?: 'PropertyLocation'
      locationNumber?: number | null
      postNumber?: number | null
      municipality?: string | null
      propertyNumber?: number | null
      display?: string | null
      displayShort?: string | null
    } | null
    appraisal?: {
      __typename?: 'Appraisal'
      activeAppraisal?: number | null
      plannedAppraisal?: number | null
      activeStructureAppraisal?: number | null
      plannedStructureAppraisal?: number | null
      activePlotAssessment?: number | null
      plannedPlotAssessment?: number | null
      activeYear?: number | null
      plannedYear?: number | null
    } | null
    registeredOwners?: {
      __typename?: 'PropertyOwnersModel'
      registeredOwners?: Array<{
        __typename?: 'PropertyOwner'
        name?: string | null
        ssn?: string | null
        ownership?: number | null
        purchaseDate?: string | null
        grantDisplay?: string | null
      }> | null
    } | null
    land?: {
      __typename?: 'LandModel'
      landNumber?: string | null
      landAppraisal?: number | null
      useDisplay?: string | null
      area?: string | null
      areaUnit?: string | null
    } | null
    unitsOfUse?: { __typename?: 'UnitsOfUseModel' } | null
  } | null
}

export const OwnerFragmentDoc = gql`
  fragment Owner on PropertyOwner {
    name
    ssn
    ownership
    purchaseDate
    grantDisplay
  }
`
export const AppraisalFragmentDoc = gql`
  fragment Appraisal on Appraisal {
    activeAppraisal
    plannedAppraisal
    activeStructureAppraisal
    plannedStructureAppraisal
    activePlotAssessment
    plannedPlotAssessment
    activeYear
    plannedYear
  }
`
export const AddressFragmentDoc = gql`
  fragment Address on PropertyLocation {
    locationNumber
    postNumber
    municipality
    propertyNumber
    display
    displayShort
  }
`
export const UnitsOfUseFragmentDoc = gql`
  fragment UnitsOfUse on UnitOfUse {
    propertyNumber
    unitOfUseNumber
    marking
    usageDisplay
    displaySize
    buildYearDisplay
    fireAssessment
    explanation
    appraisal {
      ...Appraisal
    }
    address {
      ...Address
    }
  }
  ${AppraisalFragmentDoc}
  ${AddressFragmentDoc}
`
export const PagingFragmentDoc = gql`
  fragment Paging on PagingData {
    page
    pageSize
    totalPages
    offset
    total
    hasPreviousPage
    hasNextPage
  }
`
export const GetAssetsPropertyOwnersDocument = gql`
  query GetAssetsPropertyOwners($input: GetPagingTypes!) {
    assetsPropertyOwners(input: $input) {
      registeredOwners {
        ...Owner
      }
      paging {
        ...Paging
      }
    }
  }
  ${OwnerFragmentDoc}
  ${PagingFragmentDoc}
`

/**
 * __useGetAssetsPropertyOwnersQuery__
 *
 * To run a query within a React component, call `useGetAssetsPropertyOwnersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAssetsPropertyOwnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAssetsPropertyOwnersQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetAssetsPropertyOwnersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAssetsPropertyOwnersQuery,
    GetAssetsPropertyOwnersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetAssetsPropertyOwnersQuery,
    GetAssetsPropertyOwnersQueryVariables
  >(GetAssetsPropertyOwnersDocument, options)
}
export function useGetAssetsPropertyOwnersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAssetsPropertyOwnersQuery,
    GetAssetsPropertyOwnersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetAssetsPropertyOwnersQuery,
    GetAssetsPropertyOwnersQueryVariables
  >(GetAssetsPropertyOwnersDocument, options)
}
export type GetAssetsPropertyOwnersQueryHookResult = ReturnType<
  typeof useGetAssetsPropertyOwnersQuery
>
export type GetAssetsPropertyOwnersLazyQueryHookResult = ReturnType<
  typeof useGetAssetsPropertyOwnersLazyQuery
>
export type GetAssetsPropertyOwnersQueryResult = Apollo.QueryResult<
  GetAssetsPropertyOwnersQuery,
  GetAssetsPropertyOwnersQueryVariables
>
export const GetSingleRealEstateDocument = gql`
  query GetSingleRealEstate($input: GetRealEstateInput!) {
    assetsDetail(input: $input) {
      propertyNumber
      defaultAddress {
        ...Address
      }
      appraisal {
        ...Appraisal
      }
      registeredOwners {
        registeredOwners {
          ...Owner
        }
      }
      land {
        landNumber
        landAppraisal
        useDisplay
        area
        areaUnit
      }
      unitsOfUse {
        ...UnitsOfUse
      }
    }
  }
  ${AddressFragmentDoc}
  ${AppraisalFragmentDoc}
  ${OwnerFragmentDoc}
  ${UnitsOfUseFragmentDoc}
`

/**
 * __useGetSingleRealEstateQuery__
 *
 * To run a query within a React component, call `useGetSingleRealEstateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSingleRealEstateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSingleRealEstateQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetSingleRealEstateQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSingleRealEstateQuery,
    GetSingleRealEstateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetSingleRealEstateQuery,
    GetSingleRealEstateQueryVariables
  >(GetSingleRealEstateDocument, options)
}
export function useGetSingleRealEstateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSingleRealEstateQuery,
    GetSingleRealEstateQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetSingleRealEstateQuery,
    GetSingleRealEstateQueryVariables
  >(GetSingleRealEstateDocument, options)
}
export type GetSingleRealEstateQueryHookResult = ReturnType<
  typeof useGetSingleRealEstateQuery
>
export type GetSingleRealEstateLazyQueryHookResult = ReturnType<
  typeof useGetSingleRealEstateLazyQuery
>
export type GetSingleRealEstateQueryResult = Apollo.QueryResult<
  GetSingleRealEstateQuery,
  GetSingleRealEstateQueryVariables
>
