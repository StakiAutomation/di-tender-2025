import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type ExtendCaseMutationVariables = Types.Exact<{
  input: Types.ExtendCaseInput
}>

export type ExtendCaseMutation = {
  __typename?: 'Mutation'
  extendCase?: {
    __typename?: 'Case'
    id: string
    type?: Types.CaseType | null
  } | null
}

export const ExtendCaseDocument = gql`
  mutation ExtendCase($input: ExtendCaseInput!) {
    extendCase(input: $input) {
      id
      type
    }
  }
`
export type ExtendCaseMutationFn = Apollo.MutationFunction<
  ExtendCaseMutation,
  ExtendCaseMutationVariables
>

/**
 * __useExtendCaseMutation__
 *
 * To run a mutation, you first call `useExtendCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExtendCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [extendCaseMutation, { data, loading, error }] = useExtendCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExtendCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ExtendCaseMutation,
    ExtendCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<ExtendCaseMutation, ExtendCaseMutationVariables>(
    ExtendCaseDocument,
    options,
  )
}
export type ExtendCaseMutationHookResult = ReturnType<
  typeof useExtendCaseMutation
>
export type ExtendCaseMutationResult = Apollo.MutationResult<ExtendCaseMutation>
export type ExtendCaseMutationOptions = Apollo.BaseMutationOptions<
  ExtendCaseMutation,
  ExtendCaseMutationVariables
>
