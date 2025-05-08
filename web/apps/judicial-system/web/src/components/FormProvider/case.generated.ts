import * as Types from '@island.is/judicial-system-web/src/graphql/schema'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type CaseQueryVariables = Types.Exact<{
  input: Types.CaseQueryInput
}>

export type CaseQuery = {
  __typename?: 'Query'
  case?: {
    __typename?: 'Case'
    id: string
    created?: string | null
    modified?: string | null
    type?: Types.CaseType | null
    indictmentSubtypes?: any | null
    description?: string | null
    state?: Types.CaseState | null
    policeCaseNumbers?: Array<string> | null
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
    publicProsecutorIsRegisteredInPoliceSystem?: boolean | null
    requestDriversLicenseSuspension?: boolean | null
    appealState?: Types.CaseAppealState | null
    isStatementDeadlineExpired?: boolean | null
    statementDeadline?: string | null
    canBeAppealed?: boolean | null
    canProsecutorAppeal?: boolean | null
    hasBeenAppealed?: boolean | null
    appealedByRole?: Types.UserRole | null
    appealedDate?: string | null
    appealDeadline?: string | null
    prosecutorStatementDate?: string | null
    defendantStatementDate?: string | null
    appealReceivedByCourtDate?: string | null
    appealConclusion?: string | null
    appealRulingDecision?: Types.CaseAppealRulingDecision | null
    appealCaseNumber?: string | null
    appealRulingModifiedHistory?: string | null
    appealValidToDate?: string | null
    isAppealCustodyIsolation?: boolean | null
    appealIsolationToDate?: string | null
    requestAppealRulingNotToBePublished?: Array<Types.UserRole> | null
    indictmentDeniedExplanation?: string | null
    indictmentReturnedExplanation?: string | null
    postponedIndefinitelyExplanation?: string | null
    indictmentRulingDecision?: Types.CaseIndictmentRulingDecision | null
    indictmentAppealDeadline?: string | null
    indictmentVerdictViewedByAll?: boolean | null
    indictmentVerdictAppealDeadlineExpired?: boolean | null
    indictmentDecision?: Types.IndictmentDecision | null
    indictmentReviewDecision?: Types.IndictmentCaseReviewDecision | null
    courtSessionType?: Types.CourtSessionType | null
    mergeCaseNumber?: string | null
    civilDemands?: string | null
    hasCivilClaims?: boolean | null
    isCompletedWithoutRuling?: boolean | null
    caseSentToCourtDate?: string | null
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
      requestedDefenderChoice?: Types.DefenderChoice | null
      requestedDefenderNationalId?: string | null
      requestedDefenderName?: string | null
      isDefenderChoiceConfirmed?: boolean | null
      caseFilesSharedWithDefender?: boolean | null
      serviceRequirement?: Types.ServiceRequirement | null
      verdictViewDate?: string | null
      verdictAppealDeadline?: string | null
      verdictAppealDecision?: Types.VerdictAppealDecision | null
      verdictAppealDate?: string | null
      isVerdictAppealDeadlineExpired?: boolean | null
      subpoenaType?: Types.SubpoenaType | null
      isSentToPrisonAdmin?: boolean | null
      sentToPrisonAdminDate?: string | null
      openedByPrisonAdminDate?: string | null
      punishmentType?: Types.PunishmentType | null
      isAlternativeService?: boolean | null
      alternativeServiceDescription?: string | null
      subpoenas?: Array<{
        __typename?: 'Subpoena'
        id: string
        created?: string | null
        serviceStatus?: Types.ServiceStatus | null
        serviceDate?: string | null
        servedBy?: string | null
        comment?: string | null
        defenderNationalId?: string | null
        caseId?: string | null
        defendantId?: string | null
        policeSubpoenaId?: string | null
      }> | null
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
      email?: string | null
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
      email?: string | null
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
      email?: string | null
    } | null
    parentCase?: {
      __typename?: 'Case'
      id: string
      created?: string | null
      modified?: string | null
      type?: Types.CaseType | null
      origin?: Types.CaseOrigin | null
      policeCaseNumbers?: Array<string> | null
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
    childCase?: {
      __typename?: 'Case'
      id: string
      created?: string | null
      modified?: string | null
      type?: Types.CaseType | null
      origin?: Types.CaseOrigin | null
      policeCaseNumbers?: Array<string> | null
    } | null
    notifications?: Array<{
      __typename?: 'Notification'
      id: string
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
      submittedBy?: string | null
      submissionDate?: string | null
      fileRepresentative?: string | null
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
      indictmentCountSubtypes?: Array<Types.IndictmentSubtype> | null
      recordedSpeed?: number | null
      speedLimit?: number | null
      offenses?: Array<{
        __typename?: 'Offense'
        id: string
        indictmentCountId?: string | null
        created?: string | null
        modified?: string | null
        offense: Types.IndictmentCountOffense
        substances?: any | null
      }> | null
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
    eventLogs?: Array<{
      __typename?: 'EventLog'
      id: string
      created?: string | null
      caseId?: string | null
      eventType?: Types.EventType | null
      nationalId?: string | null
      userRole?: Types.UserRole | null
    }> | null
    arraignmentDate?: {
      __typename?: 'DateLog'
      date?: string | null
      location?: string | null
    } | null
    courtDate?: {
      __typename?: 'DateLog'
      date?: string | null
      location?: string | null
    } | null
    prosecutorsOffice?: {
      __typename?: 'Institution'
      id: string
      name?: string | null
      policeCaseNumberPrefix?: string | null
    } | null
    indictmentReviewer?: {
      __typename?: 'User'
      id: string
      name?: string | null
    } | null
    mergeCase?: {
      __typename?: 'Case'
      id: string
      courtCaseNumber?: string | null
    } | null
    mergedCases?: Array<{
      __typename?: 'Case'
      id: string
      courtCaseNumber?: string | null
      type?: Types.CaseType | null
      policeCaseNumbers?: Array<string> | null
      indictmentSubtypes?: any | null
      court?: {
        __typename?: 'Institution'
        id: string
        name?: string | null
      } | null
      judge?: {
        __typename?: 'User'
        id: string
        name?: string | null
        title?: string | null
        email?: string | null
      } | null
      prosecutor?: {
        __typename?: 'User'
        id: string
        name?: string | null
        email?: string | null
      } | null
      prosecutorsOffice?: {
        __typename?: 'Institution'
        id: string
        name?: string | null
      } | null
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
        requestedDefenderChoice?: Types.DefenderChoice | null
        requestedDefenderNationalId?: string | null
        requestedDefenderName?: string | null
        isDefenderChoiceConfirmed?: boolean | null
        caseFilesSharedWithDefender?: boolean | null
        serviceRequirement?: Types.ServiceRequirement | null
        verdictViewDate?: string | null
        verdictAppealDeadline?: string | null
        verdictAppealDate?: string | null
        isVerdictAppealDeadlineExpired?: boolean | null
        subpoenaType?: Types.SubpoenaType | null
        punishmentType?: Types.PunishmentType | null
        subpoenas?: Array<{
          __typename?: 'Subpoena'
          id: string
          created?: string | null
          serviceStatus?: Types.ServiceStatus | null
          serviceDate?: string | null
          servedBy?: string | null
          comment?: string | null
          defenderNationalId?: string | null
          caseId?: string | null
          policeSubpoenaId?: string | null
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
        userGeneratedFilename?: string | null
        displayDate?: string | null
        submittedBy?: string | null
      }> | null
    }> | null
    civilClaimants?: Array<{
      __typename?: 'CivilClaimant'
      id: string
      caseId?: string | null
      name?: string | null
      nationalId?: string | null
      noNationalId?: boolean | null
      hasSpokesperson?: boolean | null
      spokespersonIsLawyer?: boolean | null
      spokespersonNationalId?: string | null
      spokespersonName?: string | null
      spokespersonEmail?: string | null
      spokespersonPhoneNumber?: string | null
      caseFilesSharedWithSpokesperson?: boolean | null
      isSpokespersonConfirmed?: boolean | null
    }> | null
    victims?: Array<{
      __typename?: 'Victim'
      id: string
      name?: string | null
      hasNationalId?: boolean | null
      nationalId?: string | null
      hasLawyer?: boolean | null
      lawyerNationalId?: string | null
      lawyerName?: string | null
      lawyerEmail?: string | null
      lawyerPhoneNumber?: string | null
      lawyerAccessToRequest?: Types.RequestSharedWhen | null
    }> | null
    caseRepresentatives?: Array<{
      __typename?: 'CaseRepresentative'
      name: string
      nationalId?: string | null
      caseFileCategory: Types.CaseFileCategory
    }> | null
  } | null
}

export const CaseDocument = gql`
  query Case($input: CaseQueryInput!) {
    case(input: $input) {
      id
      created
      modified
      type
      indictmentSubtypes
      description
      state
      policeCaseNumbers
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
        requestedDefenderChoice
        requestedDefenderNationalId
        requestedDefenderName
        isDefenderChoiceConfirmed
        caseFilesSharedWithDefender
        serviceRequirement
        verdictViewDate
        verdictAppealDeadline
        verdictAppealDecision
        verdictAppealDate
        isVerdictAppealDeadlineExpired
        subpoenaType
        isSentToPrisonAdmin
        sentToPrisonAdminDate
        openedByPrisonAdminDate
        punishmentType
        isAlternativeService
        alternativeServiceDescription
        subpoenas {
          id
          created
          serviceStatus
          serviceDate
          servedBy
          comment
          defenderNationalId
          caseId
          defendantId
          policeSubpoenaId
        }
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
        email
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
        email
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
        email
      }
      parentCase {
        id
        created
        modified
        type
        origin
        policeCaseNumbers
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
        created
        modified
        type
        origin
        policeCaseNumbers
      }
      notifications {
        id
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
        submittedBy
        submissionDate
        fileRepresentative
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
      publicProsecutorIsRegisteredInPoliceSystem
      indictmentCounts {
        id
        caseId
        policeCaseNumber
        created
        modified
        vehicleRegistrationNumber
        offenses {
          id
          indictmentCountId
          created
          modified
          offense
          substances
        }
        lawsBroken
        incidentDescription
        legalArguments
        indictmentCountSubtypes
        recordedSpeed
        speedLimit
      }
      requestDriversLicenseSuspension
      appealState
      isStatementDeadlineExpired
      statementDeadline
      canBeAppealed
      canProsecutorAppeal
      hasBeenAppealed
      appealedByRole
      appealedDate
      appealDeadline
      prosecutorStatementDate
      defendantStatementDate
      appealReceivedByCourtDate
      appealConclusion
      appealRulingDecision
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
      appealRulingModifiedHistory
      appealValidToDate
      isAppealCustodyIsolation
      appealIsolationToDate
      requestAppealRulingNotToBePublished
      indictmentDeniedExplanation
      indictmentReturnedExplanation
      eventLogs {
        id
        created
        caseId
        eventType
        nationalId
        userRole
      }
      arraignmentDate {
        date
        location
      }
      courtDate {
        date
        location
      }
      prosecutorsOffice {
        id
        name
        policeCaseNumberPrefix
      }
      postponedIndefinitelyExplanation
      indictmentRulingDecision
      indictmentReviewer {
        id
        name
      }
      indictmentAppealDeadline
      indictmentVerdictViewedByAll
      indictmentVerdictAppealDeadlineExpired
      indictmentDecision
      indictmentReviewDecision
      courtSessionType
      mergeCase {
        id
        courtCaseNumber
      }
      mergedCases {
        id
        courtCaseNumber
        type
        court {
          id
          name
        }
        judge {
          id
          name
          title
          email
        }
        prosecutor {
          id
          name
          email
        }
        prosecutorsOffice {
          id
          name
        }
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
          requestedDefenderChoice
          requestedDefenderNationalId
          requestedDefenderName
          isDefenderChoiceConfirmed
          caseFilesSharedWithDefender
          serviceRequirement
          verdictViewDate
          verdictAppealDeadline
          verdictAppealDate
          isVerdictAppealDeadlineExpired
          subpoenaType
          punishmentType
          subpoenas {
            id
            created
            serviceStatus
            serviceDate
            servedBy
            comment
            defenderNationalId
            caseId
            policeSubpoenaId
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
          userGeneratedFilename
          displayDate
          submittedBy
        }
        policeCaseNumbers
        indictmentSubtypes
      }
      civilClaimants {
        id
        caseId
        name
        nationalId
        noNationalId
        hasSpokesperson
        spokespersonIsLawyer
        spokespersonNationalId
        spokespersonName
        spokespersonEmail
        spokespersonPhoneNumber
        caseFilesSharedWithSpokesperson
        isSpokespersonConfirmed
      }
      victims {
        id
        name
        hasNationalId
        nationalId
        hasLawyer
        lawyerNationalId
        lawyerName
        lawyerEmail
        lawyerPhoneNumber
        lawyerAccessToRequest
      }
      mergeCaseNumber
      civilDemands
      hasCivilClaims
      isCompletedWithoutRuling
      caseSentToCourtDate
      caseRepresentatives {
        name
        nationalId
        caseFileCategory
      }
    }
  }
`

/**
 * __useCaseQuery__
 *
 * To run a query within a React component, call `useCaseQuery` and pass it any options that fit your needs.
 * When your component renders, `useCaseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCaseQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCaseQuery(
  baseOptions: Apollo.QueryHookOptions<CaseQuery, CaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CaseQuery, CaseQueryVariables>(CaseDocument, options)
}
export function useCaseLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CaseQuery, CaseQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CaseQuery, CaseQueryVariables>(
    CaseDocument,
    options,
  )
}
export type CaseQueryHookResult = ReturnType<typeof useCaseQuery>
export type CaseLazyQueryHookResult = ReturnType<typeof useCaseLazyQuery>
export type CaseQueryResult = Apollo.QueryResult<CaseQuery, CaseQueryVariables>
