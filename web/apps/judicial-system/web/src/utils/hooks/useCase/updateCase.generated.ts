import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type UpdateCaseMutationVariables = Types.Exact<{
  input: Types.UpdateCaseInput
}>

export type UpdateCaseMutation = {
  __typename?: 'Mutation'
  updateCase?: {
    __typename?: 'Case'
    id: string
    created?: string | null
    modified?: string | null
    type?: Types.CaseType | null
    indictmentSubtypes?: any | null
    description?: string | null
    state?: Types.CaseState | null
    policeCaseNumbers?: Array<string> | null
    publicProsecutorIsRegisteredInPoliceSystem?: boolean | null
    defenderName?: string | null
    defenderNationalId?: string | null
    defenderEmail?: string | null
    defenderPhoneNumber?: string | null
    requestSharedWithDefender?: Types.RequestSharedWithDefender | null
    isHeightenedSecurityLevel?: boolean | null
    leadInvestigator?: string | null
    arrestDate?: string | null
    requestedCourtDate?: string | null
    translator?: string | null
    requestedValidToDate?: string | null
    demands?: string | null
    lawsBroken?: string | null
    legalBasis?: string | null
    legalProvisions?: Array<Types.CaseLegalProvisions> | null
    requestedCustodyRestrictions?: Array<Types.CaseCustodyRestrictions> | null
    requestedOtherRestrictions?: string | null
    caseFacts?: string | null
    legalArguments?: string | null
    requestProsecutorOnlySession?: boolean | null
    prosecutorOnlySessionRequest?: string | null
    comments?: string | null
    caseFilesComments?: string | null
    courtCaseNumber?: string | null
    sessionArrangements?: Types.SessionArrangements | null
    courtLocation?: string | null
    courtStartDate?: string | null
    courtEndTime?: string | null
    isClosedCourtHidden?: boolean | null
    courtAttendees?: string | null
    prosecutorDemands?: string | null
    courtDocuments?: Array<any> | null
    sessionBookings?: string | null
    courtCaseFacts?: string | null
    introduction?: string | null
    courtLegalArguments?: string | null
    ruling?: string | null
    decision?: Types.CaseDecision | null
    validToDate?: string | null
    isValidToDateInThePast?: boolean | null
    isCustodyIsolation?: boolean | null
    isolationToDate?: string | null
    conclusion?: string | null
    endOfSessionBookings?: string | null
    accusedAppealDecision?: Types.CaseAppealDecision | null
    accusedAppealAnnouncement?: string | null
    prosecutorAppealDecision?: Types.CaseAppealDecision | null
    prosecutorAppealAnnouncement?: string | null
    accusedPostponedAppealDate?: string | null
    prosecutorPostponedAppealDate?: string | null
    rulingDate?: string | null
    rulingSignatureDate?: string | null
    courtRecordSignatureDate?: string | null
    isAppealDeadlineExpired?: boolean | null
    isAppealGracePeriodExpired?: boolean | null
    caseModifiedExplanation?: string | null
    rulingModifiedHistory?: string | null
    caseResentExplanation?: string | null
    origin?: Types.CaseOrigin | null
    openedByDefender?: string | null
    defendantWaivesRightToCounsel?: boolean | null
    crimeScenes?: any | null
    indictmentIntroduction?: string | null
    requestDriversLicenseSuspension?: boolean | null
    appealState?: Types.CaseAppealState | null
    isStatementDeadlineExpired?: boolean | null
    statementDeadline?: string | null
    canBeAppealed?: boolean | null
    hasBeenAppealed?: boolean | null
    appealedByRole?: Types.UserRole | null
    appealedDate?: string | null
    appealDeadline?: string | null
    prosecutorStatementDate?: string | null
    defendantStatementDate?: string | null
    appealReceivedByCourtDate?: string | null
    appealCaseNumber?: string | null
    appealConclusion?: string | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    appealRulingModifiedHistory?: string | null
    appealValidToDate?: string | null
    isAppealCustodyIsolation?: boolean | null
    appealIsolationToDate?: string | null
    requestAppealRulingNotToBePublished?: Array<Types.UserRole> | null
    indictmentDeniedExplanation?: string | null
    indictmentReturnedExplanation?: string | null
    indictmentDecision?: Types.IndictmentDecision | null
    defendants?: Array<{
      __typename?: 'Defendant'
      id: string
      noNationalId?: boolean | null
      nationalId?: string | null
      name?: string | null
      gender?: Types.Gender | null
      address?: string | null
      citizenship?: string | null
      defenderName?: string | null
      defenderNationalId?: string | null
      defenderEmail?: string | null
      defenderPhoneNumber?: string | null
      defenderChoice?: Types.DefenderChoice | null
      defendantPlea?: Types.DefendantPlea | null
      subpoenaType?: Types.SubpoenaType | null
    }> | null
    court?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
      type?: Types.InstitutionType | null
    } | null
    creatingProsecutor?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    prosecutor?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    sharedWithProsecutorsOffice?: {
      __typename?: 'Institution'
      id: string
      type?: Types.InstitutionType | null
      name?: string | null
    } | null
    judge?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    courtRecordSignatory?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    registrar?: {
      __typename?: 'User'
      id: string
      name?: string | null
      title?: string | null
    } | null
    parentCase?: {
      __typename?: 'Case'
      id: string
      state?: Types.CaseState | null
      validToDate?: string | null
      decision?: Types.CaseDecision | null
      courtCaseNumber?: string | null
      ruling?: string | null
      caseFiles?: Array<{
        __typename?: 'CaseFile'
        id: string
        created?: string | null
        name?: string | null
        state?: Types.CaseFileState | null
        key?: string | null
        size?: number | null
      }> | null
    } | null
    childCase?: { __typename?: 'Case'; id: string } | null
    notifications?: Array<{
      __typename?: 'Notification'
      created?: string | null
      type?: Types.NotificationType | null
      recipients?: Array<{
        __typename?: 'Recipient'
        success?: boolean | null
      }> | null
    }> | null
    caseFiles?: Array<{
      __typename?: 'CaseFile'
      id: string
      created?: string | null
      modified?: string | null
      name?: string | null
      type?: string | null
      category?: Types.CaseFileCategory | null
      state?: Types.CaseFileState | null
      key?: string | null
      size?: number | null
      policeCaseNumber?: string | null
      chapter?: number | null
      orderWithinChapter?: number | null
      userGeneratedFilename?: string | null
      displayDate?: string | null
      policeFileId?: string | null
    }> | null
    indictmentCounts?: Array<{
      __typename?: 'IndictmentCount'
      id: string
      caseId?: string | null
      policeCaseNumber?: string | null
      created?: string | null
      modified?: string | null
      vehicleRegistrationNumber?: string | null
      lawsBroken?: Array<Array<number>> | null
      incidentDescription?: string | null
      legalArguments?: string | null
    }> | null
    appealAssistant?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge1?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge2?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    appealJudge3?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    prosecutorsOffice?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
    } | null
    mergeCase?: { __typename?: 'Case'; id: string } | null
  } | null
}

export const UpdateCaseDocument = gql`
  mutation UpdateCase($input: UpdateCaseInput!) {
    updateCase(input: $input) {
      id
      created
      modified
      type
      indictmentSubtypes
      description
      state
      policeCaseNumbers
      publicProsecutorIsRegisteredInPoliceSystem
      defendants {
        id
        noNationalId
        nationalId
        name
        gender
        address
        citizenship
        defenderName
        defenderNationalId
        defenderEmail
        defenderPhoneNumber
        defenderChoice
        defendantPlea
        subpoenaType
      }
      defenderName
      defenderNationalId
      defenderEmail
      defenderPhoneNumber
      requestSharedWithDefender
      isHeightenedSecurityLevel
      court {
        id
        name
        type
      }
      leadInvestigator
      arrestDate
      requestedCourtDate
      translator
      requestedValidToDate
      demands
      lawsBroken
      legalBasis
      legalProvisions
      requestedCustodyRestrictions
      requestedOtherRestrictions
      caseFacts
      legalArguments
      requestProsecutorOnlySession
      prosecutorOnlySessionRequest
      comments
      caseFilesComments
      creatingProsecutor {
        id
        name
        title
      }
      prosecutor {
        id
        name
        title
      }
      sharedWithProsecutorsOffice {
        id
        type
        name
      }
      courtCaseNumber
      sessionArrangements
      courtLocation
      courtStartDate
      courtEndTime
      isClosedCourtHidden
      courtAttendees
      prosecutorDemands
      courtDocuments
      sessionBookings
      courtCaseFacts
      introduction
      courtLegalArguments
      ruling
      decision
      validToDate
      isValidToDateInThePast
      isCustodyIsolation
      isolationToDate
      conclusion
      endOfSessionBookings
      accusedAppealDecision
      accusedAppealAnnouncement
      prosecutorAppealDecision
      prosecutorAppealAnnouncement
      accusedPostponedAppealDate
      prosecutorPostponedAppealDate
      rulingDate
      rulingSignatureDate
      judge {
        id
        name
        title
      }
      courtRecordSignatory {
        id
        name
        title
      }
      courtRecordSignatureDate
      registrar {
        id
        name
        title
      }
      parentCase {
        id
        state
        validToDate
        decision
        courtCaseNumber
        ruling
        caseFiles {
          id
          created
          name
          state
          key
          size
        }
      }
      childCase {
        id
      }
      notifications {
        created
        type
        recipients {
          success
        }
      }
      caseFiles {
        id
        created
        modified
        name
        type
        category
        state
        key
        size
        policeCaseNumber
        chapter
        orderWithinChapter
        userGeneratedFilename
        displayDate
        policeFileId
      }
      isAppealDeadlineExpired
      isAppealGracePeriodExpired
      caseModifiedExplanation
      rulingModifiedHistory
      caseResentExplanation
      origin
      openedByDefender
      defendantWaivesRightToCounsel
      crimeScenes
      indictmentIntroduction
      indictmentCounts {
        id
        caseId
        policeCaseNumber
        created
        modified
        vehicleRegistrationNumber
        lawsBroken
        incidentDescription
        legalArguments
      }
      requestDriversLicenseSuspension
      appealState
      isStatementDeadlineExpired
      statementDeadline
      canBeAppealed
      hasBeenAppealed
      appealedByRole
      appealedDate
      appealDeadline
      prosecutorStatementDate
      defendantStatementDate
      appealReceivedByCourtDate
      appealCaseNumber
      appealAssistant {
        id
        name
      }
      appealJudge1 {
        id
        name
      }
      appealJudge2 {
        id
        name
      }
      appealJudge3 {
        id
        name
      }
      appealConclusion
      appealRulingDecision
      appealRulingModifiedHistory
      appealValidToDate
      isAppealCustodyIsolation
      appealIsolationToDate
      requestAppealRulingNotToBePublished
      prosecutorsOffice {
        id
        name
      }
      indictmentDeniedExplanation
      indictmentReturnedExplanation
      indictmentDecision
      mergeCase {
        id
      }
    }
  }
`
export type UpdateCaseMutationFn = Apollo.MutationFunction<
  UpdateCaseMutation,
  UpdateCaseMutationVariables
>

/**
 * __useUpdateCaseMutation__
 *
 * To run a mutation, you first call `useUpdateCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCaseMutation, { data, loading, error }] = useUpdateCaseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCaseMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCaseMutation,
    UpdateCaseMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateCaseMutation, UpdateCaseMutationVariables>(
    UpdateCaseDocument,
    options,
  )
}
export type UpdateCaseMutationHookResult = ReturnType<
  typeof useUpdateCaseMutation
>
export type UpdateCaseMutationResult = Apollo.MutationResult<UpdateCaseMutation>
export type UpdateCaseMutationOptions = Apollo.BaseMutationOptions<
  UpdateCaseMutation,
  UpdateCaseMutationVariables
>
