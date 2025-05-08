import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type BulkCompareMutationVariables = Types.Exact<{
  input: Types.SignatureCollectionNationalIdsInput
}>

export type BulkCompareMutation = {
  __typename?: 'Mutation'
  signatureCollectionAdminBulkCompareSignaturesAllLists: Array<{
    __typename?: 'SignatureCollectionSignature'
    id: string
    listId: string
    listTitle?: string | null
    isDigital: boolean
    valid?: boolean | null
    created: string
    signee: {
      __typename?: 'SignatureCollectionSigneeBase'
      name: string
      nationalId: string
      address?: string | null
    }
  }>
}

export const BulkCompareDocument = gql`
  mutation BulkCompare($input: SignatureCollectionNationalIdsInput!) {
    signatureCollectionAdminBulkCompareSignaturesAllLists(input: $input) {
      id
      listId
      listTitle
      signee {
        name
        nationalId
        address
      }
      isDigital
      valid
      created
    }
  }
`
export type BulkCompareMutationFn = Apollo.MutationFunction<
  BulkCompareMutation,
  BulkCompareMutationVariables
>

/**
 * __useBulkCompareMutation__
 *
 * To run a mutation, you first call `useBulkCompareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBulkCompareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bulkCompareMutation, { data, loading, error }] = useBulkCompareMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useBulkCompareMutation(
  baseOptions?: Apollo.MutationHookOptions<
    BulkCompareMutation,
    BulkCompareMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<BulkCompareMutation, BulkCompareMutationVariables>(
    BulkCompareDocument,
    options,
  )
}
export type BulkCompareMutationHookResult = ReturnType<
  typeof useBulkCompareMutation
>
export type BulkCompareMutationResult = Apollo.MutationResult<BulkCompareMutation>
export type BulkCompareMutationOptions = Apollo.BaseMutationOptions<
  BulkCompareMutation,
  BulkCompareMutationVariables
>
