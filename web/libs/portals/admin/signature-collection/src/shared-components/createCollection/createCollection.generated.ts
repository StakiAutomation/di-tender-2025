import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateCollectionMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionListInput
}>

export type CreateCollectionMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminCreate: {
    __typename?: 'SignatureCollectionSlug'
    slug: string
  }
}

export const CreateCollectionDocument = gql`
  mutation CreateCollection($input: SignatureCollectionListInput!) {
    signatureCollectionAdminCreate(input: $input) {
      slug
    }
  }
`
export type CreateCollectionMutationFn = Apollo.MutationFunction<
  CreateCollectionMutation,
  CreateCollectionMutationVariables
>

/**
 * __useCreateCollectionMutation__
 *
 * To run a mutation, you first call `useCreateCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCollectionMutation, { data, loading, error }] = useCreateCollectionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCollectionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCollectionMutation,
    CreateCollectionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateCollectionMutation,
    CreateCollectionMutationVariables
  >(CreateCollectionDocument, options)
}
export type CreateCollectionMutationHookResult = ReturnType<
  typeof useCreateCollectionMutation
>
export type CreateCollectionMutationResult = Apollo.MutationResult<CreateCollectionMutation>
export type CreateCollectionMutationOptions = Apollo.BaseMutationOptions<
  CreateCollectionMutation,
  CreateCollectionMutationVariables
>
