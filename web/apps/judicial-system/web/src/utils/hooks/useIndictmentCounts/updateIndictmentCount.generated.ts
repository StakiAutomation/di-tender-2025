import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateIndictmentCountMutationVariables = Types.Exact<{
  input: Types.UpdateIndictmentCountInput
}>

export type UpdateIndictmentCountMutation = {
  __typename?: 'Mutation'
  updateIndictmentCount?: {
    __typename?: 'IndictmentCount'
    id: string
    created?: string | null
    modified?: string | null
    caseId?: string | null
    policeCaseNumber?: string | null
    vehicleRegistrationNumber?: string | null
    lawsBroken?: Array<Array<number>> | null
    incidentDescription?: string | null
    legalArguments?: string | null
    indictmentCountSubtypes?: Array<Types.IndictmentSubtype> | null
    recordedSpeed?: number | null
    offenses?: Array<{
      __typename?: 'Offense'
      id: string
      indictmentCountId?: string | null
      created?: string | null
      modified?: string | null
      offense: Types.IndictmentCountOffense
      substances?: any | null
    }> | null
  } | null
}

export const UpdateIndictmentCountDocument = gql`
  mutation UpdateIndictmentCount($input: UpdateIndictmentCountInput!) {
    updateIndictmentCount(input: $input) {
      id
      created
      modified
      caseId
      policeCaseNumber
      vehicleRegistrationNumber
      lawsBroken
      incidentDescription
      legalArguments
      indictmentCountSubtypes
      recordedSpeed
      offenses {
        id
        indictmentCountId
        created
        modified
        offense
        substances
      }
    }
  }
`
export type UpdateIndictmentCountMutationFn = Apollo.MutationFunction<
  UpdateIndictmentCountMutation,
  UpdateIndictmentCountMutationVariables
>

/**
 * __useUpdateIndictmentCountMutation__
 *
 * To run a mutation, you first call `useUpdateIndictmentCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIndictmentCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIndictmentCountMutation, { data, loading, error }] = useUpdateIndictmentCountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIndictmentCountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateIndictmentCountMutation,
    UpdateIndictmentCountMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateIndictmentCountMutation,
    UpdateIndictmentCountMutationVariables
  >(UpdateIndictmentCountDocument, options)
}
export type UpdateIndictmentCountMutationHookResult = ReturnType<
  typeof useUpdateIndictmentCountMutation
>
export type UpdateIndictmentCountMutationResult = Apollo.MutationResult<UpdateIndictmentCountMutation>
export type UpdateIndictmentCountMutationOptions = Apollo.BaseMutationOptions<
  UpdateIndictmentCountMutation,
  UpdateIndictmentCountMutationVariables
>
