import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateExplicitDiscountCodeMutationVariables = Types.Exact<{
  input: Types.AirDiscountSchemeCreateExplicitDiscountCodeInput
}>

export type CreateExplicitDiscountCodeMutation = {
  __typename?: 'Mutation'
  createAirDiscountSchemeExplicitDiscountCode?: Array<{
    __typename?: 'AirDiscountSchemeDiscount'
    discountCode?: string | null
    connectionDiscountCodes: Array<{
      __typename?: 'AirDiscountSchemeConnectionDiscountCode'
      code: string
    }>
  }> | null
}

export const CreateExplicitDiscountCodeDocument = gql`
  mutation CreateExplicitDiscountCode(
    $input: AirDiscountSchemeCreateExplicitDiscountCodeInput!
  ) {
    createAirDiscountSchemeExplicitDiscountCode(input: $input) {
      discountCode
      connectionDiscountCodes {
        code
      }
    }
  }
`
export type CreateExplicitDiscountCodeMutationFn = Apollo.MutationFunction<
  CreateExplicitDiscountCodeMutation,
  CreateExplicitDiscountCodeMutationVariables
>

/**
 * __useCreateExplicitDiscountCodeMutation__
 *
 * To run a mutation, you first call `useCreateExplicitDiscountCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExplicitDiscountCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExplicitDiscountCodeMutation, { data, loading, error }] = useCreateExplicitDiscountCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExplicitDiscountCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateExplicitDiscountCodeMutation,
    CreateExplicitDiscountCodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateExplicitDiscountCodeMutation,
    CreateExplicitDiscountCodeMutationVariables
  >(CreateExplicitDiscountCodeDocument, options)
}
export type CreateExplicitDiscountCodeMutationHookResult = ReturnType<
  typeof useCreateExplicitDiscountCodeMutation
>
export type CreateExplicitDiscountCodeMutationResult = Apollo.MutationResult<CreateExplicitDiscountCodeMutation>
export type CreateExplicitDiscountCodeMutationOptions = Apollo.BaseMutationOptions<
  CreateExplicitDiscountCodeMutation,
  CreateExplicitDiscountCodeMutationVariables
>
