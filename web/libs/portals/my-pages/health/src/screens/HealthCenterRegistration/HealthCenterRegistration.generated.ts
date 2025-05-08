import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetHealthCenterQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetHealthCenterQuery = {
  __typename?: 'Query'
  rightsPortalPaginatedHealthCenters?: {
    __typename?: 'RightsPortalPaginatedHealthCenters'
    totalCount: number
    data: Array<{
      __typename?: 'RightsPortalHealthCenter'
      id: string
      name?: string | null
      region?: string | null
      canRegister?: boolean | null
      address?: {
        __typename?: 'RightsPortalAddress'
        postalCode?: string | null
        municipality?: string | null
        streetAddress?: string | null
      } | null
    }>
  } | null
}

export type GetHealthCenterDoctorsQueryVariables = Types.Exact<{
  input: Types.RightsPortalHealthCenterDoctorsInput
}>

export type GetHealthCenterDoctorsQuery = {
  __typename?: 'Query'
  rightsPortalHealthCenterDoctors?: Array<{
    __typename?: 'RightsPortalHealthCenterDoctors'
    id?: number | null
    name?: string | null
    availableFrom?: string | null
    availableTo?: string | null
  }> | null
}

export type RightsPortalTransferHealthCenterMutationVariables = Types.Exact<{
  input: Types.RightsPortalHealthCenterRegisterInput
}>

export type RightsPortalTransferHealthCenterMutation = {
  __typename?: 'Mutation'
  rightsPortalRegisterHealthCenter: {
    __typename?: 'RightsPortalHealthCenterRegisterResponse'
    success: boolean
  }
}

export const GetHealthCenterDocument = gql`
  query getHealthCenter {
    rightsPortalPaginatedHealthCenters {
      data {
        id
        name
        region
        address {
          postalCode
          municipality
          streetAddress
        }
        canRegister
      }
      totalCount
    }
  }
`

/**
 * __useGetHealthCenterQuery__
 *
 * To run a query within a React component, call `useGetHealthCenterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthCenterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthCenterQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHealthCenterQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHealthCenterQuery, GetHealthCenterQueryVariables>(
    GetHealthCenterDocument,
    options,
  )
}
export function useGetHealthCenterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHealthCenterQuery,
    GetHealthCenterQueryVariables
  >(GetHealthCenterDocument, options)
}
export type GetHealthCenterQueryHookResult = ReturnType<
  typeof useGetHealthCenterQuery
>
export type GetHealthCenterLazyQueryHookResult = ReturnType<
  typeof useGetHealthCenterLazyQuery
>
export type GetHealthCenterQueryResult = Apollo.QueryResult<
  GetHealthCenterQuery,
  GetHealthCenterQueryVariables
>
export const GetHealthCenterDoctorsDocument = gql`
  query getHealthCenterDoctors($input: RightsPortalHealthCenterDoctorsInput!) {
    rightsPortalHealthCenterDoctors(input: $input) {
      id
      name
      availableFrom
      availableTo
    }
  }
`

/**
 * __useGetHealthCenterDoctorsQuery__
 *
 * To run a query within a React component, call `useGetHealthCenterDoctorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHealthCenterDoctorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHealthCenterDoctorsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetHealthCenterDoctorsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetHealthCenterDoctorsQuery,
    GetHealthCenterDoctorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetHealthCenterDoctorsQuery,
    GetHealthCenterDoctorsQueryVariables
  >(GetHealthCenterDoctorsDocument, options)
}
export function useGetHealthCenterDoctorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHealthCenterDoctorsQuery,
    GetHealthCenterDoctorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHealthCenterDoctorsQuery,
    GetHealthCenterDoctorsQueryVariables
  >(GetHealthCenterDoctorsDocument, options)
}
export type GetHealthCenterDoctorsQueryHookResult = ReturnType<
  typeof useGetHealthCenterDoctorsQuery
>
export type GetHealthCenterDoctorsLazyQueryHookResult = ReturnType<
  typeof useGetHealthCenterDoctorsLazyQuery
>
export type GetHealthCenterDoctorsQueryResult = Apollo.QueryResult<
  GetHealthCenterDoctorsQuery,
  GetHealthCenterDoctorsQueryVariables
>
export const RightsPortalTransferHealthCenterDocument = gql`
  mutation rightsPortalTransferHealthCenter(
    $input: RightsPortalHealthCenterRegisterInput!
  ) {
    rightsPortalRegisterHealthCenter(input: $input) {
      success
    }
  }
`
export type RightsPortalTransferHealthCenterMutationFn = Apollo.MutationFunction<
  RightsPortalTransferHealthCenterMutation,
  RightsPortalTransferHealthCenterMutationVariables
>

/**
 * __useRightsPortalTransferHealthCenterMutation__
 *
 * To run a mutation, you first call `useRightsPortalTransferHealthCenterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRightsPortalTransferHealthCenterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rightsPortalTransferHealthCenterMutation, { data, loading, error }] = useRightsPortalTransferHealthCenterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRightsPortalTransferHealthCenterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RightsPortalTransferHealthCenterMutation,
    RightsPortalTransferHealthCenterMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RightsPortalTransferHealthCenterMutation,
    RightsPortalTransferHealthCenterMutationVariables
  >(RightsPortalTransferHealthCenterDocument, options)
}
export type RightsPortalTransferHealthCenterMutationHookResult = ReturnType<
  typeof useRightsPortalTransferHealthCenterMutation
>
export type RightsPortalTransferHealthCenterMutationResult = Apollo.MutationResult<RightsPortalTransferHealthCenterMutation>
export type RightsPortalTransferHealthCenterMutationOptions = Apollo.BaseMutationOptions<
  RightsPortalTransferHealthCenterMutation,
  RightsPortalTransferHealthCenterMutationVariables
>
