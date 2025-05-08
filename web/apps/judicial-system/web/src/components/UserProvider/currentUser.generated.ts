import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never }>

export type CurrentUserQuery = {
  __typename?: 'Query'
  currentUser?: {
    __typename?: 'CurrentUserResponse'
    user?: {
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      active?: boolean | null
      name?: string | null
      title?: string | null
      role?: Types.UserRole | null
      email?: string | null
      mobileNumber?: string | null
      nationalId?: string | null
      canConfirmIndictment?: boolean | null
      institution?: {
        __typename?: 'Institution'
        id: string
        type?: Types.InstitutionType | null
        name?: string | null
        defaultCourtId?: string | null
        policeCaseNumberPrefix?: string | null
      } | null
    } | null
    eligibleUsers: Array<{
      __typename?: 'User'
      id: string
      created?: string | null
      modified?: string | null
      active?: boolean | null
      name?: string | null
      title?: string | null
      role?: Types.UserRole | null
      email?: string | null
      mobileNumber?: string | null
      nationalId?: string | null
      canConfirmIndictment?: boolean | null
      institution?: {
        __typename?: 'Institution'
        id: string
        type?: Types.InstitutionType | null
        name?: string | null
        defaultCourtId?: string | null
        policeCaseNumberPrefix?: string | null
      } | null
    }>
  } | null
}

export const CurrentUserDocument = gql`
  query CurrentUser {
    currentUser {
      user {
        id
        created
        modified
        active
        name
        title
        role
        email
        mobileNumber
        nationalId
        canConfirmIndictment
        institution {
          id
          type
          name
          defaultCourtId
          policeCaseNumberPrefix
        }
      }
      eligibleUsers {
        id
        created
        modified
        active
        name
        title
        role
        email
        mobileNumber
        nationalId
        canConfirmIndictment
        institution {
          id
          type
          name
          defaultCourtId
          policeCaseNumberPrefix
        }
      }
    }
  }
`

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  )
}
export function useCurrentUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQuery,
    CurrentUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(
    CurrentUserDocument,
    options,
  )
}
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>
export type CurrentUserLazyQueryHookResult = ReturnType<
  typeof useCurrentUserLazyQuery
>
export type CurrentUserQueryResult = Apollo.QueryResult<
  CurrentUserQuery,
  CurrentUserQueryVariables
>
