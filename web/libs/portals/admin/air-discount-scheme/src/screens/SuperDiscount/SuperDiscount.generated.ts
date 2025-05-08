import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateSuperExplicitDiscountCodeMutationVariables = Types.Exact<{
  input: Types.AirDiscountSchemeCreateExplicitDiscountCodeInput
}>

export type CreateSuperExplicitDiscountCodeMutation = {
  __typename?: 'Mutation'
  createAirDiscountSchemeSuperExplicitDiscountCode?: Array<{
    __typename?: 'AirDiscountSchemeDiscount'
    discountCode?: string | null
    connectionDiscountCodes: Array<{
      __typename?: 'AirDiscountSchemeConnectionDiscountCode'
      code: string
    }>
  }> | null
}

export const CreateSuperExplicitDiscountCodeDocument = gql`
  mutation CreateSuperExplicitDiscountCode(
    $input: AirDiscountSchemeCreateExplicitDiscountCodeInput!
  ) {
    createAirDiscountSchemeSuperExplicitDiscountCode(input: $input) {
      discountCode
      connectionDiscountCodes {
        code
      }
    }
  }
`
export type CreateSuperExplicitDiscountCodeMutationFn = Apollo.MutationFunction<
  CreateSuperExplicitDiscountCodeMutation,
  CreateSuperExplicitDiscountCodeMutationVariables
>

/**
 * __useCreateSuperExplicitDiscountCodeMutation__
 *
 * To run a mutation, you first call `useCreateSuperExplicitDiscountCodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSuperExplicitDiscountCodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSuperExplicitDiscountCodeMutation, { data, loading, error }] = useCreateSuperExplicitDiscountCodeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSuperExplicitDiscountCodeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSuperExplicitDiscountCodeMutation,
    CreateSuperExplicitDiscountCodeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateSuperExplicitDiscountCodeMutation,
    CreateSuperExplicitDiscountCodeMutationVariables
  >(CreateSuperExplicitDiscountCodeDocument, options)
}
export type CreateSuperExplicitDiscountCodeMutationHookResult = ReturnType<
  typeof useCreateSuperExplicitDiscountCodeMutation
>
export type CreateSuperExplicitDiscountCodeMutationResult = Apollo.MutationResult<CreateSuperExplicitDiscountCodeMutation>
export type CreateSuperExplicitDiscountCodeMutationOptions = Apollo.BaseMutationOptions<
  CreateSuperExplicitDiscountCodeMutation,
  CreateSuperExplicitDiscountCodeMutationVariables
>
