import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CreateIndictmentCountMutationVariables = Types.Exact<{
  input: Types.CreateIndictmentCountInput
}>

export type CreateIndictmentCountMutation = {
  __typename?: 'Mutation'
  createIndictmentCount?: {
    __typename?: 'IndictmentCount'
    id: string
    created?: string | null
    modified?: string | null
    caseId?: string | null
    policeCaseNumber?: string | null
    vehicleRegistrationNumber?: string | null
    legalArguments?: string | null
    lawsBroken?: Array<Array<number>> | null
    incidentDescription?: string | null
  } | null
}

export const CreateIndictmentCountDocument = gql`
  mutation CreateIndictmentCount($input: CreateIndictmentCountInput!) {
    createIndictmentCount(input: $input) {
      id
      created
      modified
      caseId
      policeCaseNumber
      vehicleRegistrationNumber
      legalArguments
      lawsBroken
      incidentDescription
    }
  }
`
export type CreateIndictmentCountMutationFn = Apollo.MutationFunction<
  CreateIndictmentCountMutation,
  CreateIndictmentCountMutationVariables
>

/**
 * __useCreateIndictmentCountMutation__
 *
 * To run a mutation, you first call `useCreateIndictmentCountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIndictmentCountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIndictmentCountMutation, { data, loading, error }] = useCreateIndictmentCountMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIndictmentCountMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateIndictmentCountMutation,
    CreateIndictmentCountMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateIndictmentCountMutation,
    CreateIndictmentCountMutationVariables
  >(CreateIndictmentCountDocument, options)
}
export type CreateIndictmentCountMutationHookResult = ReturnType<
  typeof useCreateIndictmentCountMutation
>
export type CreateIndictmentCountMutationResult = Apollo.MutationResult<CreateIndictmentCountMutation>
export type CreateIndictmentCountMutationOptions = Apollo.BaseMutationOptions<
  CreateIndictmentCountMutation,
  CreateIndictmentCountMutationVariables
>
