import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type BulkUploadMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionListBulkUploadInput
}>

export type BulkUploadMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminBulkUploadSignatures: {
    __typename?: 'SignatureCollectionBulk'
    success: Array<{
      __typename?: 'SignatureCollectionNationalIds'
      nationalId: string
    }>
    failed: Array<{
      __typename?: 'SignatureCollectionNationalIds'
      nationalId: string
      reason?: string | null
    }>
  }
}

export const BulkUploadDocument = gql`
  mutation BulkUpload($input: SignatureCollectionListBulkUploadInput!) {
    signatureCollectionAdminBulkUploadSignatures(input: $input) {
      success {
        nationalId
      }
      failed {
        nationalId
        reason
      }
    }
  }
`
export type BulkUploadMutationFn = Apollo.MutationFunction<
  BulkUploadMutation,
  BulkUploadMutationVariables
>

/**
 * __useBulkUploadMutation__
 *
 * To run a mutation, you first call `useBulkUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkUploadMutation, { data, loading, error }] = useBulkUploadMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkUploadMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BulkUploadMutation,
    BulkUploadMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<BulkUploadMutation, BulkUploadMutationVariables>(
    BulkUploadDocument,
    options,
  )
}
export type BulkUploadMutationHookResult = ReturnType<
  typeof useBulkUploadMutation
>
export type BulkUploadMutationResult = Apollo.MutationResult<BulkUploadMutation>
export type BulkUploadMutationOptions = Apollo.BaseMutationOptions<
  BulkUploadMutation,
  BulkUploadMutationVariables
>
