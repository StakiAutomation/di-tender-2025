import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDentistStatusQueryVariables = Types.Exact<{
  [key: string]: never
}>

export type GetDentistStatusQuery = {
  __typename?: 'Query'
  rightsPortalDentistStatus?: {
    __typename?: 'RightsPortalDentistStatus'
    canRegister?: boolean | null
    contractType?: string | null
  } | null
}

export type GetPaginatedDentistsQueryVariables = Types.Exact<{
  input: Types.RightsPortalDentistsInput
}>

export type GetPaginatedDentistsQuery = {
  __typename?: 'Query'
  response?: {
    __typename?: 'RightsPortalPaginatedDentists'
    totalCount: number
    pageInfo: {
      __typename?: 'PageInfoDto'
      hasNextPage: boolean
      hasPreviousPage?: boolean | null
      startCursor?: string | null
      endCursor?: string | null
    }
    dentists: Array<{
      __typename?: 'RightsPortalDentist'
      id: number
      name?: string | null
      practices?: Array<{
        __typename?: 'RightsPortalDentistPractice'
        practice?: string | null
        address?: string | null
        region?: string | null
        postalCode?: string | null
      }> | null
    }>
  } | null
  current?: {
    __typename?: 'RightsPortalUserDentistRegistration'
    dentist?: {
      __typename?: 'RightsPortalUserDentistInformation'
      id?: number | null
      name?: string | null
    } | null
  } | null
}

export type RegisterDentistMutationVariables = Types.Exact<{
  input: Types.RightsPortalDentistRegisterInput
}>

export type RegisterDentistMutation = {
  __typename?: 'Mutation'
  rightsPortalRegisterDentist: {
    __typename?: 'RightsPortalDentistRegisterResponse'
    success: boolean
  }
}

export const GetDentistStatusDocument = gql`
  query getDentistStatus {
    rightsPortalDentistStatus {
      canRegister
      contractType
    }
  }
`

/**
 * __useGetDentistStatusQuery__
 *
 * To run a query within a React component, call `useGetDentistStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDentistStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDentistStatusQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDentistStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDentistStatusQuery,
    GetDentistStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDentistStatusQuery, GetDentistStatusQueryVariables>(
    GetDentistStatusDocument,
    options,
  )
}
export function useGetDentistStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDentistStatusQuery,
    GetDentistStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetDentistStatusQuery,
    GetDentistStatusQueryVariables
  >(GetDentistStatusDocument, options)
}
export type GetDentistStatusQueryHookResult = ReturnType<
  typeof useGetDentistStatusQuery
>
export type GetDentistStatusLazyQueryHookResult = ReturnType<
  typeof useGetDentistStatusLazyQuery
>
export type GetDentistStatusQueryResult = Apollo.QueryResult<
  GetDentistStatusQuery,
  GetDentistStatusQueryVariables
>
export const GetPaginatedDentistsDocument = gql`
  query getPaginatedDentists($input: RightsPortalDentistsInput!) {
    response: rightsPortalPaginatedDentists(input: $input) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      dentists: data {
        id
        name
        practices {
          practice
          address
          region
          postalCode
        }
      }
    }
    current: rightsPortalUserDentistRegistration {
      dentist {
        id
        name
      }
    }
  }
`

/**
 * __useGetPaginatedDentistsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedDentistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedDentistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedDentistsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetPaginatedDentistsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetPaginatedDentistsQuery,
    GetPaginatedDentistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetPaginatedDentistsQuery,
    GetPaginatedDentistsQueryVariables
  >(GetPaginatedDentistsDocument, options)
}
export function useGetPaginatedDentistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetPaginatedDentistsQuery,
    GetPaginatedDentistsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetPaginatedDentistsQuery,
    GetPaginatedDentistsQueryVariables
  >(GetPaginatedDentistsDocument, options)
}
export type GetPaginatedDentistsQueryHookResult = ReturnType<
  typeof useGetPaginatedDentistsQuery
>
export type GetPaginatedDentistsLazyQueryHookResult = ReturnType<
  typeof useGetPaginatedDentistsLazyQuery
>
export type GetPaginatedDentistsQueryResult = Apollo.QueryResult<
  GetPaginatedDentistsQuery,
  GetPaginatedDentistsQueryVariables
>
export const RegisterDentistDocument = gql`
  mutation registerDentist($input: RightsPortalDentistRegisterInput!) {
    rightsPortalRegisterDentist(input: $input) {
      success
    }
  }
`
export type RegisterDentistMutationFn = Apollo.MutationFunction<
  RegisterDentistMutation,
  RegisterDentistMutationVariables
>

/**
 * __useRegisterDentistMutation__
 *
 * To run a mutation, you first call `useRegisterDentistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterDentistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerDentistMutation, { data, loading, error }] = useRegisterDentistMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterDentistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterDentistMutation,
    RegisterDentistMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    RegisterDentistMutation,
    RegisterDentistMutationVariables
  >(RegisterDentistDocument, options)
}
export type RegisterDentistMutationHookResult = ReturnType<
  typeof useRegisterDentistMutation
>
export type RegisterDentistMutationResult = Apollo.MutationResult<RegisterDentistMutation>
export type RegisterDentistMutationOptions = Apollo.BaseMutationOptions<
  RegisterDentistMutation,
  RegisterDentistMutationVariables
>
