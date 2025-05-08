import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PutDocumentProvidedTypeMutationVariables = Types.Exact<{
  input: Types.DocumentProviderCategoriesAndTypesPutInput
}>

export type PutDocumentProvidedTypeMutation = {
  __typename?: 'Mutation'
  documentProviderPutProvidedType: {
    __typename?: 'DocumentProviderType'
    id: number
    name?: string | null
    active?: boolean | null
  }
}

export type PostDocumentProvidedTypeMutationVariables = Types.Exact<{
  input: Types.DocumentProviderCategoriesAndTypesPostInput
}>

export type PostDocumentProvidedTypeMutation = {
  __typename?: 'Mutation'
  documentProviderPostProvidedType: {
    __typename?: 'DocumentProviderType'
    id: number
    name?: string | null
    active?: boolean | null
  }
}

export type PutDocumentProvidedCategoryMutationVariables = Types.Exact<{
  input: Types.DocumentProviderCategoriesAndTypesPutInput
}>

export type PutDocumentProvidedCategoryMutation = {
  __typename?: 'Mutation'
  documentProviderPutProvidedCategory: {
    __typename?: 'DocumentProviderCategory'
    id: number
    name?: string | null
    active?: boolean | null
  }
}

export type PostDocumentProvidedCategoryMutationVariables = Types.Exact<{
  input: Types.DocumentProviderCategoriesAndTypesPostInput
}>

export type PostDocumentProvidedCategoryMutation = {
  __typename?: 'Mutation'
  documentProviderPostProvidedCategory: {
    __typename?: 'DocumentProviderCategory'
    id: number
    name?: string | null
    active?: boolean | null
  }
}

export const PutDocumentProvidedTypeDocument = gql`
  mutation PutDocumentProvidedType(
    $input: DocumentProviderCategoriesAndTypesPutInput!
  ) {
    documentProviderPutProvidedType(input: $input) {
      id
      name
      active
    }
  }
`
export type PutDocumentProvidedTypeMutationFn = Apollo.MutationFunction<
  PutDocumentProvidedTypeMutation,
  PutDocumentProvidedTypeMutationVariables
>

/**
 * __usePutDocumentProvidedTypeMutation__
 *
 * To run a mutation, you first call `usePutDocumentProvidedTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutDocumentProvidedTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putDocumentProvidedTypeMutation, { data, loading, error }] = usePutDocumentProvidedTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePutDocumentProvidedTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PutDocumentProvidedTypeMutation,
    PutDocumentProvidedTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PutDocumentProvidedTypeMutation,
    PutDocumentProvidedTypeMutationVariables
  >(PutDocumentProvidedTypeDocument, options)
}
export type PutDocumentProvidedTypeMutationHookResult = ReturnType<
  typeof usePutDocumentProvidedTypeMutation
>
export type PutDocumentProvidedTypeMutationResult = Apollo.MutationResult<PutDocumentProvidedTypeMutation>
export type PutDocumentProvidedTypeMutationOptions = Apollo.BaseMutationOptions<
  PutDocumentProvidedTypeMutation,
  PutDocumentProvidedTypeMutationVariables
>
export const PostDocumentProvidedTypeDocument = gql`
  mutation PostDocumentProvidedType(
    $input: DocumentProviderCategoriesAndTypesPostInput!
  ) {
    documentProviderPostProvidedType(input: $input) {
      id
      name
      active
    }
  }
`
export type PostDocumentProvidedTypeMutationFn = Apollo.MutationFunction<
  PostDocumentProvidedTypeMutation,
  PostDocumentProvidedTypeMutationVariables
>

/**
 * __usePostDocumentProvidedTypeMutation__
 *
 * To run a mutation, you first call `usePostDocumentProvidedTypeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDocumentProvidedTypeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDocumentProvidedTypeMutation, { data, loading, error }] = usePostDocumentProvidedTypeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostDocumentProvidedTypeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostDocumentProvidedTypeMutation,
    PostDocumentProvidedTypeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostDocumentProvidedTypeMutation,
    PostDocumentProvidedTypeMutationVariables
  >(PostDocumentProvidedTypeDocument, options)
}
export type PostDocumentProvidedTypeMutationHookResult = ReturnType<
  typeof usePostDocumentProvidedTypeMutation
>
export type PostDocumentProvidedTypeMutationResult = Apollo.MutationResult<PostDocumentProvidedTypeMutation>
export type PostDocumentProvidedTypeMutationOptions = Apollo.BaseMutationOptions<
  PostDocumentProvidedTypeMutation,
  PostDocumentProvidedTypeMutationVariables
>
export const PutDocumentProvidedCategoryDocument = gql`
  mutation PutDocumentProvidedCategory(
    $input: DocumentProviderCategoriesAndTypesPutInput!
  ) {
    documentProviderPutProvidedCategory(input: $input) {
      id
      name
      active
    }
  }
`
export type PutDocumentProvidedCategoryMutationFn = Apollo.MutationFunction<
  PutDocumentProvidedCategoryMutation,
  PutDocumentProvidedCategoryMutationVariables
>

/**
 * __usePutDocumentProvidedCategoryMutation__
 *
 * To run a mutation, you first call `usePutDocumentProvidedCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePutDocumentProvidedCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [putDocumentProvidedCategoryMutation, { data, loading, error }] = usePutDocumentProvidedCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePutDocumentProvidedCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PutDocumentProvidedCategoryMutation,
    PutDocumentProvidedCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PutDocumentProvidedCategoryMutation,
    PutDocumentProvidedCategoryMutationVariables
  >(PutDocumentProvidedCategoryDocument, options)
}
export type PutDocumentProvidedCategoryMutationHookResult = ReturnType<
  typeof usePutDocumentProvidedCategoryMutation
>
export type PutDocumentProvidedCategoryMutationResult = Apollo.MutationResult<PutDocumentProvidedCategoryMutation>
export type PutDocumentProvidedCategoryMutationOptions = Apollo.BaseMutationOptions<
  PutDocumentProvidedCategoryMutation,
  PutDocumentProvidedCategoryMutationVariables
>
export const PostDocumentProvidedCategoryDocument = gql`
  mutation PostDocumentProvidedCategory(
    $input: DocumentProviderCategoriesAndTypesPostInput!
  ) {
    documentProviderPostProvidedCategory(input: $input) {
      id
      name
      active
    }
  }
`
export type PostDocumentProvidedCategoryMutationFn = Apollo.MutationFunction<
  PostDocumentProvidedCategoryMutation,
  PostDocumentProvidedCategoryMutationVariables
>

/**
 * __usePostDocumentProvidedCategoryMutation__
 *
 * To run a mutation, you first call `usePostDocumentProvidedCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostDocumentProvidedCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postDocumentProvidedCategoryMutation, { data, loading, error }] = usePostDocumentProvidedCategoryMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function usePostDocumentProvidedCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PostDocumentProvidedCategoryMutation,
    PostDocumentProvidedCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    PostDocumentProvidedCategoryMutation,
    PostDocumentProvidedCategoryMutationVariables
  >(PostDocumentProvidedCategoryDocument, options)
}
export type PostDocumentProvidedCategoryMutationHookResult = ReturnType<
  typeof usePostDocumentProvidedCategoryMutation
>
export type PostDocumentProvidedCategoryMutationResult = Apollo.MutationResult<PostDocumentProvidedCategoryMutation>
export type PostDocumentProvidedCategoryMutationOptions = Apollo.BaseMutationOptions<
  PostDocumentProvidedCategoryMutation,
  PostDocumentProvidedCategoryMutationVariables
>
