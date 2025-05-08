import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type GetWorkMachinesQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.WorkMachinesCollectionInput>
}>

export type GetWorkMachinesQuery = {
  __typename?: 'Query'
  workMachinesPaginatedCollection?: {
    __typename?: 'WorkMachinesPaginatedCollection'
    totalCount: number
    data: Array<{
      __typename?: 'WorkMachine'
      id?: string | null
      registrationNumber?: string | null
      type?: string | null
      status?: string | null
      dateLastInspection?: string | null
    }>
    links?: Array<{
      __typename?: 'WorkMachinesCollectionLink'
      rel?: Types.WorkMachinesExternalLink | null
    }> | null
  } | null
}

export type GetWorkMachineDocumentQueryVariables = Types.Exact<{
  input?: Types.InputMaybe<Types.WorkMachinesCollectionDocumentInput>
}>

export type GetWorkMachineDocumentQuery = {
  __typename?: 'Query'
  workMachinesCollectionDocument?: {
    __typename?: 'WorkMachinesCollectionDocument'
    downloadUrl?: string | null
  } | null
}

export const GetWorkMachinesDocument = gql`
  query GetWorkMachines($input: WorkMachinesCollectionInput) {
    workMachinesPaginatedCollection(input: $input) {
      data {
        id
        registrationNumber
        type
        status
        dateLastInspection
      }
      links {
        rel
      }
      totalCount
    }
  }
`

/**
 * __useGetWorkMachinesQuery__
 *
 * To run a query within a React component, call `useGetWorkMachinesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkMachinesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkMachinesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetWorkMachinesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWorkMachinesQuery,
    GetWorkMachinesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetWorkMachinesQuery, GetWorkMachinesQueryVariables>(
    GetWorkMachinesDocument,
    options,
  )
}
export function useGetWorkMachinesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWorkMachinesQuery,
    GetWorkMachinesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetWorkMachinesQuery,
    GetWorkMachinesQueryVariables
  >(GetWorkMachinesDocument, options)
}
export type GetWorkMachinesQueryHookResult = ReturnType<
  typeof useGetWorkMachinesQuery
>
export type GetWorkMachinesLazyQueryHookResult = ReturnType<
  typeof useGetWorkMachinesLazyQuery
>
export type GetWorkMachinesQueryResult = Apollo.QueryResult<
  GetWorkMachinesQuery,
  GetWorkMachinesQueryVariables
>
export const GetWorkMachineDocumentDocument = gql`
  query GetWorkMachineDocument($input: WorkMachinesCollectionDocumentInput) {
    workMachinesCollectionDocument(input: $input) {
      downloadUrl
    }
  }
`

/**
 * __useGetWorkMachineDocumentQuery__
 *
 * To run a query within a React component, call `useGetWorkMachineDocumentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkMachineDocumentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkMachineDocumentQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetWorkMachineDocumentQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetWorkMachineDocumentQuery,
    GetWorkMachineDocumentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetWorkMachineDocumentQuery,
    GetWorkMachineDocumentQueryVariables
  >(GetWorkMachineDocumentDocument, options)
}
export function useGetWorkMachineDocumentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWorkMachineDocumentQuery,
    GetWorkMachineDocumentQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetWorkMachineDocumentQuery,
    GetWorkMachineDocumentQueryVariables
  >(GetWorkMachineDocumentDocument, options)
}
export type GetWorkMachineDocumentQueryHookResult = ReturnType<
  typeof useGetWorkMachineDocumentQuery
>
export type GetWorkMachineDocumentLazyQueryHookResult = ReturnType<
  typeof useGetWorkMachineDocumentLazyQuery
>
export type GetWorkMachineDocumentQueryResult = Apollo.QueryResult<
  GetWorkMachineDocumentQuery,
  GetWorkMachineDocumentQueryVariables
>
