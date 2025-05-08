import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type StudentInfoQueryVariables = Types.Exact<{
  input: Types.UniversityCareersStudentInfoInput
}>

export type StudentInfoQuery = {
  __typename?: 'Query'
  universityCareersStudentTrackHistory: {
    __typename: 'UniversityCareersStudentTrackHistory'
    transcripts: Array<{
      __typename?: 'UniversityCareersStudentTrackTranscript'
      name: string
      nationalId?: string | null
      graduationDate: string
      trackNumber: number
      school: string
      faculty: string
      studyProgram?: string | null
      degree?: string | null
      institution: {
        __typename?: 'UniversityCareersInstitution'
        id: Types.UniversityCareersUniversityId
        displayName?: string | null
        logoUrl?: string | null
      }
    }>
    errors?: Array<{
      __typename?: 'UniversityCareersStudentTrackTranscriptError'
      error?: string | null
      institution: {
        __typename?: 'UniversityCareersInstitution'
        id: Types.UniversityCareersUniversityId
        displayName?: string | null
      }
    }> | null
  }
}

export const StudentInfoDocument = gql`
  query studentInfo($input: UniversityCareersStudentInfoInput!) {
    universityCareersStudentTrackHistory(input: $input) {
      __typename
      transcripts {
        name
        nationalId
        graduationDate
        trackNumber
        institution {
          id
          displayName
          logoUrl
        }
        school
        faculty
        studyProgram
        degree
      }
      errors {
        institution {
          id
          displayName
        }
        error
      }
    }
  }
`

/**
 * __useStudentInfoQuery__
 *
 * To run a query within a React component, call `useStudentInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentInfoQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStudentInfoQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentInfoQuery,
    StudentInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StudentInfoQuery, StudentInfoQueryVariables>(
    StudentInfoDocument,
    options,
  )
}
export function useStudentInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentInfoQuery,
    StudentInfoQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StudentInfoQuery, StudentInfoQueryVariables>(
    StudentInfoDocument,
    options,
  )
}
export type StudentInfoQueryHookResult = ReturnType<typeof useStudentInfoQuery>
export type StudentInfoLazyQueryHookResult = ReturnType<
  typeof useStudentInfoLazyQuery
>
export type StudentInfoQueryResult = Apollo.QueryResult<
  StudentInfoQuery,
  StudentInfoQueryVariables
>
