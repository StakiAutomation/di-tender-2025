import * as Types from '../../gen/schema'

import gql from 'graphql-tag'
export type GetTemplateByTemplateIdQueryVariables = Types.Exact<{
  templateId: Types.Scalars['String']
  locale: Types.Scalars['String']
}>

export type GetTemplateByTemplateIdQuery = {
  hnippTemplateCollection?: {
    items: Array<{
      templateId?: string | null
      clickActionUrl?: string | null
      args?: Array<string | null> | null
      title?: string | null
      externalBody?: string | null
      internalBody?: string | null
    } | null>
  } | null
}

export type GetTemplatesQueryVariables = Types.Exact<{
  locale: Types.Scalars['String']
}>

export type GetTemplatesQuery = {
  hnippTemplateCollection?: {
    items: Array<{
      templateId?: string | null
      clickActionUrl?: string | null
      args?: Array<string | null> | null
      title?: string | null
      externalBody?: string | null
      internalBody?: string | null
    } | null>
  } | null
}

export type GetOrganizationByNationalIdQueryVariables = Types.Exact<{
  nationalId: Types.Scalars['String']
  locale: Types.Scalars['String']
}>

export type GetOrganizationByNationalIdQuery = {
  organizationCollection?: {
    items: Array<{ title?: string | null } | null>
  } | null
}

export const GetTemplateByTemplateId = gql`
  query GetTemplateByTemplateId($templateId: String!, $locale: String!) {
    hnippTemplateCollection(
      where: { templateId: $templateId }
      locale: $locale
    ) {
      items {
        templateId
        title: notificationTitle
        externalBody: notificationBody
        internalBody: notificationDataCopy
        clickActionUrl
        args
      }
    }
  }
`
export const GetTemplates = gql`
  query GetTemplates($locale: String!) {
    hnippTemplateCollection(locale: $locale, limit: 1000) {
      items {
        templateId
        title: notificationTitle
        externalBody: notificationBody
        internalBody: notificationDataCopy
        clickActionUrl
        args
      }
    }
  }
`
export const GetOrganizationByNationalId = gql`
  query GetOrganizationByNationalId($nationalId: String!, $locale: String!) {
    organizationCollection(where: { kennitala: $nationalId }, locale: $locale) {
      items {
        title
      }
    }
  }
`
