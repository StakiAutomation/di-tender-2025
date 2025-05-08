import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetDonorStatusQueryVariables = Types.Exact<{
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type GetDonorStatusQuery = {
  __typename?: 'Query'
  healthDirectorateOrganDonation: {
    __typename?: 'HealthDirectorateOrganDonation'
    donor?: {
      __typename?: 'HealthDirectorateOrganDonor'
      isDonor: boolean
      isMinor: boolean
      isTemporaryResident: boolean
      limitations?: {
        __typename?: 'HealthDirectorateOrganDonationLimitations'
        hasLimitations: boolean
        comment?: string | null
        limitedOrgansList?: Array<{
          __typename?: 'HealthDirectorateOrganDonationOrgan'
          id: string
          name: string
        }> | null
      } | null
    } | null
    organList?: Array<{
      __typename?: 'HealthDirectorateOrganDonationOrgan'
      id: string
      name: string
    }> | null
  }
}

export type UpdateOrganDonationInfoMutationVariables = Types.Exact<{
  input: Types.HealthDirectorateOrganDonorInput
  locale?: Types.InputMaybe<Types.Scalars['String']>
}>

export type UpdateOrganDonationInfoMutation = {
  __typename?: 'Mutation'
  healthDirectorateOrganDonationUpdateDonorStatus?: boolean | null
}

export const GetDonorStatusDocument = gql`
  query getDonorStatus($locale: String) {
    healthDirectorateOrganDonation(locale: $locale) {
      donor {
        isDonor
        limitations {
          hasLimitations
          limitedOrgansList {
            id
            name
          }
          comment
        }
        isMinor
        isTemporaryResident
      }
      organList {
        id
        name
      }
    }
  }
`

/**
 * __useGetDonorStatusQuery__
 *
 * To run a query within a React component, call `useGetDonorStatusQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDonorStatusQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDonorStatusQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetDonorStatusQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetDonorStatusQuery,
    GetDonorStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetDonorStatusQuery, GetDonorStatusQueryVariables>(
    GetDonorStatusDocument,
    options,
  )
}
export function useGetDonorStatusLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetDonorStatusQuery,
    GetDonorStatusQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetDonorStatusQuery, GetDonorStatusQueryVariables>(
    GetDonorStatusDocument,
    options,
  )
}
export type GetDonorStatusQueryHookResult = ReturnType<
  typeof useGetDonorStatusQuery
>
export type GetDonorStatusLazyQueryHookResult = ReturnType<
  typeof useGetDonorStatusLazyQuery
>
export type GetDonorStatusQueryResult = Apollo.QueryResult<
  GetDonorStatusQuery,
  GetDonorStatusQueryVariables
>
export const UpdateOrganDonationInfoDocument = gql`
  mutation updateOrganDonationInfo(
    $input: HealthDirectorateOrganDonorInput!
    $locale: String
  ) {
    healthDirectorateOrganDonationUpdateDonorStatus(
      input: $input
      locale: $locale
    )
  }
`
export type UpdateOrganDonationInfoMutationFn = Apollo.MutationFunction<
  UpdateOrganDonationInfoMutation,
  UpdateOrganDonationInfoMutationVariables
>

/**
 * __useUpdateOrganDonationInfoMutation__
 *
 * To run a mutation, you first call `useUpdateOrganDonationInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrganDonationInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrganDonationInfoMutation, { data, loading, error }] = useUpdateOrganDonationInfoMutation({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useUpdateOrganDonationInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrganDonationInfoMutation,
    UpdateOrganDonationInfoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateOrganDonationInfoMutation,
    UpdateOrganDonationInfoMutationVariables
  >(UpdateOrganDonationInfoDocument, options)
}
export type UpdateOrganDonationInfoMutationHookResult = ReturnType<
  typeof useUpdateOrganDonationInfoMutation
>
export type UpdateOrganDonationInfoMutationResult = Apollo.MutationResult<UpdateOrganDonationInfoMutation>
export type UpdateOrganDonationInfoMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrganDonationInfoMutation,
  UpdateOrganDonationInfoMutationVariables
>
