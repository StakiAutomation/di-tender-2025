import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetLawyersQueryVariables = Types.Exact<{
  locale: Types.Scalars['String']
}>

export type GetLawyersQuery = {
  __typename?: 'Query'
  lawAndOrderLawyers?: {
    __typename?: 'LawAndOrderLawyers'
    lawyers?: Array<{
      __typename?: 'LawAndOrderLawyer'
      title?: string | null
      nationalId?: string | null
    }> | null
    choices?: Array<{
      __typename?: 'LawAndOrderLawyerChoices'
      id?: string | null
      label?: string | null
    }> | null
  } | null
}

export type PostDefenseChoiceMutationVariables = Types.Exact<{
  input: Types.LawAndOrderDefenseChoiceInput
  locale: Types.Scalars['String']
}>

export type PostDefenseChoiceMutation = {
  __typename?: 'Mutation'
  lawAndOrderDefenseChoicePost?: {
    __typename?: 'LawAndOrderDefenseChoice'
    caseId: string
  } | null
}

export const GetLawyersDocument = gql`
  query GetLawyers($locale: String!) {
    lawAndOrderLawyers(locale: $locale) {
      lawyers {
        title
        nationalId
      }
      choices {
        id
        label
      }
    }
  }
`

/**
 * __useGetLawyersQuery__
 *
 * To run a query within a React component, call `useGetLawyersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLawyersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLawyersQuery({
 *   variables: {
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function useGetLawyersQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLawyersQuery,
    GetLawyersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetLawyersQuery, GetLawyersQueryVariables>(
    GetLawyersDocument,
    options,
  )
}
export function useGetLawyersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLawyersQuery,
    GetLawyersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetLawyersQuery, GetLawyersQueryVariables>(
    GetLawyersDocument,
    options,
  )
}
export type GetLawyersQueryHookResult = ReturnType<typeof useGetLawyersQuery>
export type GetLawyersLazyQueryHookResult = ReturnType<
  typeof useGetLawyersLazyQuery
>
export type GetLawyersQueryResult = Apollo.QueryResult<
  GetLawyersQuery,
  GetLawyersQueryVariables
>
export const PostDefenseChoiceDocument = gql`
  mutation PostDefenseChoice(
    $input: LawAndOrderDefenseChoiceInput!
    $locale: String!
  ) {
    lawAndOrderDefenseChoicePost(input: $input, locale: $locale) {
      caseId
    }
  }
`
export type PostDefenseChoiceMutationFn = Apollo.MutationFunction<
  PostDefenseChoiceMutation,
  PostDefenseChoiceMutationVariables
>

/**
 * __usePostDefenseChoiceMutation__
 *
 * To run a mutation, you first call `usePostDefenseChoiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDefenseChoiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDefenseChoiceMutation, { data, loading, error }] = usePostDefenseChoiceMutation({
 *   variables: {
 *      input: // value for 'input'
 *      locale: // value for 'locale'
 *   },
 * });
 */
export function usePostDefenseChoiceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostDefenseChoiceMutation,
    PostDefenseChoiceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostDefenseChoiceMutation,
    PostDefenseChoiceMutationVariables
  >(PostDefenseChoiceDocument, options)
}
export type PostDefenseChoiceMutationHookResult = ReturnType<
  typeof usePostDefenseChoiceMutation
>
export type PostDefenseChoiceMutationResult = Apollo.MutationResult<PostDefenseChoiceMutation>
export type PostDefenseChoiceMutationOptions = Apollo.BaseMutationOptions<
  PostDefenseChoiceMutation,
  PostDefenseChoiceMutationVariables
>
