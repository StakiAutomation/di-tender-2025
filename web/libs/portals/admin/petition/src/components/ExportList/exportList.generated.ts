import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ExportListMutationVariables = Types.Exact<{
  input: Types.ExportEndorsementListInput
}>

export type ExportListMutation = {
  __typename?: 'Mutation'
  endorsementSystemExportList: { __typename?: 'ExportUrlResponse'; url: string }
}

export const ExportListDocument = gql`
  mutation ExportList($input: ExportEndorsementListInput!) {
    endorsementSystemExportList(input: $input) {
      url
    }
  }
`
export type ExportListMutationFn = Apollo.MutationFunction<
  ExportListMutation,
  ExportListMutationVariables
>

/**
 * __useExportListMutation__
 *
 * To run a mutation, you first call `useExportListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExportListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exportListMutation, { data, loading, error }] = useExportListMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExportListMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExportListMutation,
    ExportListMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ExportListMutation, ExportListMutationVariables>(
    ExportListDocument,
    options,
  )
}
export type ExportListMutationHookResult = ReturnType<
  typeof useExportListMutation
>
export type ExportListMutationResult = Apollo.MutationResult<ExportListMutation>
export type ExportListMutationOptions = Apollo.BaseMutationOptions<
  ExportListMutation,
  ExportListMutationVariables
>
