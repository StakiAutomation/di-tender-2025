import * as Types from '@island.is/api/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type StudentTrackQueryVariables = Types.Exact<{
  input: Types.UniversityCareersStudentInfoByUniversityInput
}>

export type StudentTrackQuery = {
  __typename?: 'Query'
  universityCareersStudentTrack?: {
    __typename?: 'UniversityCareersStudentTrack'
    downloadServiceURL?: string | null
    transcript: {
      __typename?: 'UniversityCareersStudentTrackTranscript'
      degree?: string | null
      faculty: string
      graduationDate: string
      name: string
      nationalId?: string | null
      school: string
      studyProgram?: string | null
      trackNumber: number
      institution: {
        __typename?: 'UniversityCareersInstitution'
        id: Types.UniversityCareersUniversityId
        shortId: string
        displayName?: string | null
      }
    }
    files: Array<{
      __typename?: 'UniversityCareersStudentFile'
      type: string
      locale: string
      displayName: string
      fileName: string
    }>
    metadata: {
      __typename?: 'UniversityCareersStudentTrackMetadata'
      description: string
      footer: string
      unconfirmedData?: string | null
    }
  } | null
}

export const StudentTrackDocument = gql`
  query studentTrack($input: UniversityCareersStudentInfoByUniversityInput!) {
    universityCareersStudentTrack(input: $input) {
      transcript {
        degree
        faculty
        graduationDate
        institution {
          id
          shortId
          displayName
        }
        name
        nationalId
        school
        studyProgram
        trackNumber
      }
      files {
        type
        locale
        displayName
        fileName
      }
      metadata {
        description
        footer
        unconfirmedData
      }
      downloadServiceURL
    }
  }
`

/**
 * __useStudentTrackQuery__
 *
 * To run a query within a React component, call `useStudentTrackQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentTrackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentTrackQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useStudentTrackQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentTrackQuery,
    StudentTrackQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StudentTrackQuery, StudentTrackQueryVariables>(
    StudentTrackDocument,
    options,
  )
}
export function useStudentTrackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentTrackQuery,
    StudentTrackQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StudentTrackQuery, StudentTrackQueryVariables>(
    StudentTrackDocument,
    options,
  )
}
export type StudentTrackQueryHookResult = ReturnType<
  typeof useStudentTrackQuery
>
export type StudentTrackLazyQueryHookResult = ReturnType<
  typeof useStudentTrackLazyQuery
>
export type StudentTrackQueryResult = Apollo.QueryResult<
  StudentTrackQuery,
  StudentTrackQueryVariables
>
