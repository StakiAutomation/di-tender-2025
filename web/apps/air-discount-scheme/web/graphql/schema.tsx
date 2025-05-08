import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type AccordionSlice = {
  __typename?: 'AccordionSlice'
  accordionItems?: Maybe<Array<OneColumnText>>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  titleHeadingLevel?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type AlertBanner = {
  __typename?: 'AlertBanner'
  bannerVariant: Scalars['String']
  description?: Maybe<Scalars['String']>
  dismissedForDays: Scalars['Int']
  id: Scalars['ID']
  isDismissable: Scalars['Boolean']
  link?: Maybe<ReferenceLink>
  linkTitle?: Maybe<Scalars['String']>
  servicePortalPaths?: Maybe<Array<Scalars['String']>>
  showAlertBanner: Scalars['Boolean']
  title?: Maybe<Scalars['String']>
}

export type AnchorPage = {
  __typename?: 'AnchorPage'
  category?: Maybe<ArticleCategory>
  content: Array<Slice>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Scalars['String']>
  pageType?: Maybe<Scalars['String']>
  seeMoreText?: Maybe<Scalars['String']>
  shortIntro?: Maybe<Scalars['String']>
  shortTitle?: Maybe<Scalars['String']>
  slug: Scalars['String']
  thumbnail?: Maybe<Image>
  tinyThumbnail?: Maybe<Image>
  title: Scalars['String']
}

export type AnchorPageListSlice = {
  __typename?: 'AnchorPageListSlice'
  id: Scalars['ID']
  pages: Array<AnchorPage>
  title: Scalars['String']
}

export type Article = {
  __typename?: 'Article'
  activeTranslations?: Maybe<Scalars['JSON']>
  alertBanner?: Maybe<AlertBanner>
  body: Array<Slice>
  category?: Maybe<ArticleCategory>
  featuredImage?: Maybe<Image>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  importance?: Maybe<Scalars['Float']>
  intro?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Scalars['String']>>
  organization?: Maybe<Array<Organization>>
  otherCategories?: Maybe<Array<ArticleCategory>>
  otherGroups?: Maybe<Array<ArticleGroup>>
  otherSubgroups?: Maybe<Array<ArticleSubgroup>>
  processEntry?: Maybe<ProcessEntry>
  processEntryButtonText?: Maybe<Scalars['String']>
  relatedArticles?: Maybe<Array<Article>>
  relatedContent?: Maybe<Array<Link>>
  relatedOrganization?: Maybe<Array<Organization>>
  responsibleParty?: Maybe<Array<Organization>>
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents?: Maybe<Scalars['Boolean']>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  subArticles: Array<SubArticle>
  subgroup?: Maybe<ArticleSubgroup>
  title: Scalars['String']
}

export type ArticleCategory = {
  __typename?: 'ArticleCategory'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleGroup = {
  __typename?: 'ArticleGroup'
  description?: Maybe<Scalars['String']>
  importance?: Maybe<Scalars['Float']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleReference = {
  __typename?: 'ArticleReference'
  category?: Maybe<ArticleCategory>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  intro: Scalars['String']
  organization?: Maybe<Array<Organization>>
  processEntry?: Maybe<ProcessEntry>
  processEntryButtonText: Scalars['String']
  slug: Scalars['String']
  title: Scalars['String']
}

export type ArticleSubgroup = {
  __typename?: 'ArticleSubgroup'
  importance?: Maybe<Scalars['Float']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type Asset = {
  __typename?: 'Asset'
  contentType: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
  typename: Scalars['String']
  url: Scalars['String']
}

export type Auction = {
  __typename?: 'Auction'
  content?: Maybe<Array<Slice>>
  date: Scalars['String']
  id: Scalars['ID']
  organization: Organization
  title: Scalars['String']
  type: Scalars['String']
  updatedAt: Scalars['String']
}

export type BloodDonationRestrictionDetails = {
  __typename?: 'BloodDonationRestrictionDetails'
  cardText: Array<Slice>
  description: Scalars['String']
  detailedText: Array<Slice>
  hasCardText: Scalars['Boolean']
  hasDetailedText: Scalars['Boolean']
  id: Scalars['ID']
  keywordsText: Scalars['String']
  title: Scalars['String']
}

export type BloodDonationRestrictionGenericTag = {
  __typename?: 'BloodDonationRestrictionGenericTag'
  key: Scalars['ID']
  label: Scalars['String']
}

export type BloodDonationRestrictionGenericTagList = {
  __typename?: 'BloodDonationRestrictionGenericTagList'
  items: Array<BloodDonationRestrictionGenericTag>
  total: Scalars['Int']
}

export type BloodDonationRestrictionList = {
  __typename?: 'BloodDonationRestrictionList'
  input: GetBloodDonationRestrictionsInputModel
  items: Array<BloodDonationRestrictionListItem>
  total: Scalars['Int']
}

export type BloodDonationRestrictionListItem = {
  __typename?: 'BloodDonationRestrictionListItem'
  cardText: Array<Slice>
  description: Scalars['String']
  hasCardText: Scalars['Boolean']
  hasDetailedText: Scalars['Boolean']
  id: Scalars['ID']
  keywordsText: Scalars['String']
  title: Scalars['String']
}

export type BulletEntry = IconBullet | NumberBulletGroup

export type BulletListSlice = {
  __typename?: 'BulletListSlice'
  bullets: Array<BulletEntry>
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
}

export type CategoryPage = Article | Manual

export type Chart = {
  __typename?: 'Chart'
  alternativeDescription: Scalars['String']
  chartDescription: Scalars['String']
  components: Array<ChartComponent>
  customStyleConfig?: Maybe<Scalars['String']>
  dateFrom?: Maybe<Scalars['String']>
  dateTo?: Maybe<Scalars['String']>
  displayAsCard: Scalars['Boolean']
  flipAxis?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  numberOfDataPoints?: Maybe<Scalars['Float']>
  reduceAndRoundValue?: Maybe<Scalars['Boolean']>
  sourceData?: Maybe<Scalars['String']>
  startExpanded: Scalars['Boolean']
  title: Scalars['String']
  xAxisFormat?: Maybe<Scalars['String']>
  xAxisKey?: Maybe<Scalars['String']>
  xAxisValueType?: Maybe<Scalars['String']>
  yAxisLabel?: Maybe<Scalars['String']>
}

export type ChartComponent = {
  __typename?: 'ChartComponent'
  id: Scalars['ID']
  interval?: Maybe<Scalars['Float']>
  label: Scalars['String']
  sourceDataKey: Scalars['String']
  stackId?: Maybe<Scalars['String']>
  type: Scalars['String']
  values?: Maybe<Scalars['String']>
}

export type ChartNumberBox = {
  __typename?: 'ChartNumberBox'
  displayChangeMonthOverMonth: Scalars['Boolean']
  displayChangeYearOverYear: Scalars['Boolean']
  displayTimestamp?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  numberBoxDate?: Maybe<Scalars['String']>
  numberBoxDescription: Scalars['String']
  reduceAndRoundValue?: Maybe<Scalars['Boolean']>
  sourceDataKey: Scalars['String']
  title: Scalars['String']
  valueType: Scalars['String']
}

export type ConfirmInvoiceInput = {
  age?: InputMaybe<Range>
  airline?: InputMaybe<Scalars['String']>
  flightLeg?: InputMaybe<Travel>
  gender?: InputMaybe<Scalars['String']>
  isExplicit?: InputMaybe<Scalars['Boolean']>
  nationalId?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Period>
  postalCode?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Array<Scalars['String']>>
}

export type ConnectedComponent = {
  __typename?: 'ConnectedComponent'
  configJson?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  json?: Maybe<Scalars['JSON']>
  title: Scalars['String']
  translationStrings?: Maybe<Scalars['JSONObject']>
  type?: Maybe<Scalars['String']>
}

export type ConnectionDiscountCode = {
  __typename?: 'ConnectionDiscountCode'
  code: Scalars['ID']
  flightDesc: Scalars['String']
  flightId: Scalars['String']
  validUntil: Scalars['String']
}

export type ContactUs = {
  __typename?: 'ContactUs'
  errorMessage: Scalars['String']
  id: Scalars['ID']
  invalidEmail: Scalars['String']
  invalidPhone: Scalars['String']
  labelEmail: Scalars['String']
  labelMessage: Scalars['String']
  labelName: Scalars['String']
  labelPhone: Scalars['String']
  labelSubject: Scalars['String']
  required: Scalars['String']
  submitButtonText: Scalars['String']
  successMessage: Scalars['String']
  title: Scalars['String']
}

export type ContentSlug = {
  __typename?: 'ContentSlug'
  activeTranslations?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  slug?: Maybe<TextFieldLocales>
  title?: Maybe<TextFieldLocales>
  type: Scalars['String']
  url?: Maybe<TextFieldLocales>
}

export type CreateExplicitDiscountCodeInput = {
  comment: Scalars['String']
  nationalId: Scalars['String']
  postalcode: Scalars['Int']
}

export type CustomPage = {
  __typename?: 'CustomPage'
  alertBanner?: Maybe<AlertBanner>
  configJson?: Maybe<Scalars['JSONObject']>
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  ogDescription?: Maybe<Scalars['String']>
  ogImage?: Maybe<Image>
  ogTitle?: Maybe<Scalars['String']>
  translationStrings: Scalars['JSONObject']
  uniqueIdentifier: Scalars['String']
}

export enum CustomPageUniqueIdentifier {
  BloodDonationRestrictions = 'BloodDonationRestrictions',
  DirectorateOfLabourMyPages = 'DirectorateOfLabourMyPages',
  Grants = 'Grants',
  OfficialJournalOfIceland = 'OfficialJournalOfIceland',
  OfficialJournalOfIcelandHelp = 'OfficialJournalOfIcelandHelp',
  PensionCalculator = 'PensionCalculator',
  Vacancies = 'Vacancies',
  Verdicts = 'Verdicts',
}

export type Discount = {
  __typename?: 'Discount'
  connectionDiscountCodes: Array<ConnectionDiscountCode>
  discountCode: Scalars['String']
  expiresIn: Scalars['Float']
  nationalId: Scalars['ID']
  user: User
}

export type Districts = {
  __typename?: 'Districts'
  description?: Maybe<Scalars['String']>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  image?: Maybe<Image>
  links: Array<Link>
  title: Scalars['String']
}

export type EmailSignup = {
  __typename?: 'EmailSignup'
  configuration?: Maybe<Scalars['JSON']>
  description?: Maybe<Scalars['String']>
  formFields?: Maybe<Array<FormField>>
  id: Scalars['ID']
  signupType?: Maybe<Scalars['String']>
  title: Scalars['String']
  translations?: Maybe<Scalars['JSON']>
}

export type Embed = {
  __typename?: 'Embed'
  altText?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['String']>
  embedUrl?: Maybe<Scalars['String']>
  id: Scalars['ID']
  title: Scalars['String']
}

export type EmbeddedVideo = {
  __typename?: 'EmbeddedVideo'
  id: Scalars['ID']
  thumbnailImageUrl?: Maybe<Scalars['String']>
  title: Scalars['String']
  url: Scalars['String']
}

export type EnhancedAsset = {
  __typename?: 'EnhancedAsset'
  description: Scalars['String']
  file?: Maybe<Asset>
  genericTags: Array<GenericTag>
  id: Scalars['ID']
  organization: Organization
  releaseDate?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type EnhancedAssetSearchResult = {
  __typename?: 'EnhancedAssetSearchResult'
  items: Array<EnhancedAsset>
  total: Scalars['Float']
}

export type EntryTitle = {
  __typename?: 'EntryTitle'
  title: Scalars['String']
}

export type ErrorPage = {
  __typename?: 'ErrorPage'
  description?: Maybe<Html>
  errorCode: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type Event = {
  __typename?: 'Event'
  content?: Maybe<Array<Slice>>
  contentImage?: Maybe<Image>
  endDate: Scalars['String']
  featuredImage?: Maybe<Image>
  firstPublishedAt?: Maybe<Scalars['String']>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  location: EventLocation
  organization?: Maybe<Organization>
  slug: Scalars['String']
  startDate: Scalars['String']
  thumbnailImage?: Maybe<Image>
  time: EventTime
  title: Scalars['String']
  video?: Maybe<EmbeddedVideo>
}

export type EventList = {
  __typename?: 'EventList'
  items: Array<Event>
  total: Scalars['Int']
}

export type EventLocation = {
  __typename?: 'EventLocation'
  floor?: Maybe<Scalars['String']>
  freeText?: Maybe<Scalars['String']>
  postalCode?: Maybe<Scalars['String']>
  streetAddress?: Maybe<Scalars['String']>
  useFreeText?: Maybe<Scalars['Boolean']>
}

export type EventSlice = {
  __typename?: 'EventSlice'
  backgroundImage?: Maybe<Image>
  date: Scalars['String']
  id: Scalars['ID']
  link?: Maybe<Link>
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type EventTime = {
  __typename?: 'EventTime'
  endTime?: Maybe<Scalars['String']>
  startTime?: Maybe<Scalars['String']>
}

export type FaqList = {
  __typename?: 'FaqList'
  id: Scalars['ID']
  questions: Array<QuestionAndAnswer>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
}

export type Featured = {
  __typename?: 'Featured'
  attention: Scalars['Boolean']
  thing?: Maybe<ReferenceLink>
  title: Scalars['String']
}

export type FeaturedArticles = {
  __typename?: 'FeaturedArticles'
  articles: Array<ArticleReference>
  automaticallyFetchArticles?: Maybe<Scalars['Boolean']>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  image?: Maybe<Image>
  introText?: Maybe<Array<Slice>>
  link?: Maybe<Link>
  resolvedArticles: Array<Article>
  sortBy: Scalars['String']
  title: Scalars['String']
}

export type FeaturedEvents = {
  __typename?: 'FeaturedEvents'
  id: Scalars['ID']
  namespace: Scalars['JSONObject']
  noEventsFoundText?: Maybe<Array<Slice>>
  organization?: Maybe<Scalars['String']>
  resolvedEventList: EventList
}

export type FeaturedLinks = {
  __typename?: 'FeaturedLinks'
  featuredLinks?: Maybe<Array<Featured>>
  id: Scalars['ID']
  title: Scalars['String']
}

export type FeaturedSupportQnAs = {
  __typename?: 'FeaturedSupportQNAs'
  automaticallyFetchSupportQNAs?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  renderedTitle?: Maybe<Scalars['String']>
  resolvedSupportQNAs: Array<SupportQna>
  supportQNAs?: Maybe<Array<SupportQna>>
}

export type Flight = {
  __typename?: 'Flight'
  bookingDate: Scalars['String']
  flightLegs: Array<FlightLeg>
  id: Scalars['ID']
  user: User
  userInfo: UserInfo
}

export type FlightLeg = {
  __typename?: 'FlightLeg'
  airline: Scalars['String']
  cooperation?: Maybe<Scalars['String']>
  discountPrice: Scalars['Float']
  financialState: Scalars['String']
  flight: Flight
  id: Scalars['ID']
  originalPrice: Scalars['Float']
  travel: Scalars['String']
}

export type FlightLegsInput = {
  age?: InputMaybe<Range>
  airline?: InputMaybe<Scalars['String']>
  flightLeg?: InputMaybe<Travel>
  gender?: InputMaybe<Scalars['String']>
  isExplicit?: InputMaybe<Scalars['Boolean']>
  nationalId?: InputMaybe<Scalars['String']>
  period?: InputMaybe<Period>
  postalCode?: InputMaybe<Scalars['Int']>
  state?: InputMaybe<Array<Scalars['String']>>
}

export type FooterItem = {
  __typename?: 'FooterItem'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  link?: Maybe<Link>
  serviceWebContent?: Maybe<Array<Slice>>
  title: Scalars['String']
}

export type Form = {
  __typename?: 'Form'
  aboutYouHeadingText: Scalars['String']
  defaultFieldNamespace?: Maybe<Scalars['JSON']>
  fields: Array<FormField>
  id: Scalars['ID']
  intro: Scalars['String']
  questionsHeadingText: Scalars['String']
  recipientFormFieldDecider?: Maybe<FormField>
  recipientList?: Maybe<Array<Scalars['String']>>
  successText: Scalars['String']
  title: Scalars['String']
}

export type FormField = {
  __typename?: 'FormField'
  emailConfig?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  informationText?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  options: Array<Scalars['String']>
  placeholder: Scalars['String']
  required: Scalars['Boolean']
  title: Scalars['String']
  type: Scalars['String']
}

export type Frontpage = {
  __typename?: 'Frontpage'
  featured: Array<Featured>
  heading?: Maybe<Scalars['String']>
  id: Scalars['ID']
  image?: Maybe<Image>
  imageAlternativeText?: Maybe<Scalars['String']>
  imageMobile?: Maybe<Image>
  lifeEvents: Array<LifeEventPage>
  linkList?: Maybe<LinkList>
  namespace?: Maybe<Namespace>
  slides: Array<FrontpageSlider>
  title?: Maybe<Scalars['String']>
  videos?: Maybe<Array<Image>>
  videosMobile?: Maybe<Array<Image>>
}

export type FrontpageSlider = {
  __typename?: 'FrontpageSlider'
  animationJsonAsset?: Maybe<Asset>
  content: Scalars['String']
  intro?: Maybe<Html>
  link?: Maybe<Scalars['String']>
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type Fund = {
  __typename?: 'Fund'
  credit: Scalars['Float']
  total: Scalars['Float']
  used: Scalars['Float']
}

export type GenericList = {
  __typename?: 'GenericList'
  defaultOrder?: Maybe<GetGenericListItemsInputOrderBy>
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  itemType?: Maybe<GenericListItemType>
  searchInputPlaceholder?: Maybe<Scalars['String']>
  showSearchInput?: Maybe<Scalars['Boolean']>
}

export type GenericListItem = {
  __typename?: 'GenericListItem'
  assetUrl?: Maybe<Scalars['String']>
  cardIntro: Array<Slice>
  content?: Maybe<Array<Slice>>
  date?: Maybe<Scalars['String']>
  externalUrl?: Maybe<Scalars['String']>
  filterTags?: Maybe<Array<GenericTag>>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  genericList?: Maybe<GenericList>
  id: Scalars['ID']
  image?: Maybe<Image>
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type GenericListItemResponse = {
  __typename?: 'GenericListItemResponse'
  input: GenericListItemResponseInput
  items: Array<GenericListItem>
  total: Scalars['Int']
}

export type GenericListItemResponseInput = {
  __typename?: 'GenericListItemResponseInput'
  genericListId: Scalars['String']
  lang: Scalars['String']
  orderBy?: Maybe<GetGenericListItemsInputOrderBy>
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  tagGroups?: Maybe<Scalars['JSON']>
  tags?: Maybe<Array<Scalars['String']>>
}

export enum GenericListItemType {
  Clickable = 'Clickable',
  NonClickable = 'NonClickable',
}

export type GenericOverviewPage = {
  __typename?: 'GenericOverviewPage'
  id: Scalars['ID']
  intro?: Maybe<Html>
  navigation: Menu
  overviewLinks: Array<IntroLinkImage>
  pageIdentifier: Scalars['String']
  title: Scalars['String']
}

export type GenericPage = {
  __typename?: 'GenericPage'
  intro?: Maybe<Scalars['String']>
  mainContent?: Maybe<Scalars['String']>
  misc?: Maybe<Scalars['String']>
  sidebar?: Maybe<Scalars['String']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type GenericTag = {
  __typename?: 'GenericTag'
  genericTagGroup?: Maybe<GenericTagGroup>
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type GenericTagGroup = {
  __typename?: 'GenericTagGroup'
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type GetAlertBannerInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAnchorPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetAnchorPagesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetArticleCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetArticlesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetAuctionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetAuctionsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Float']>
  organization?: InputMaybe<Scalars['String']>
  year?: InputMaybe<Scalars['Float']>
}

export type GetBloodDonationRestrictionDetailsInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionGenericTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetBloodDonationRestrictionsInput = {
  lang?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  tagKeys?: InputMaybe<Array<Scalars['String']>>
}

export type GetBloodDonationRestrictionsInputModel = {
  __typename?: 'GetBloodDonationRestrictionsInputModel'
  lang: Scalars['String']
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  tagKeys?: Maybe<Array<Scalars['String']>>
}

export type GetCategoryPagesInput = {
  category?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortField>
  subgroup?: InputMaybe<Scalars['String']>
}

export type GetContentSlugInput = {
  id: Scalars['String']
}

export type GetCustomPageInput = {
  lang?: InputMaybe<Scalars['String']>
  uniqueIdentifier: CustomPageUniqueIdentifier
}

export type GetCustomSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  parentPageId: Scalars['String']
  slug: Scalars['String']
}

export type GetErrorPageInput = {
  errorCode: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetEventsInput = {
  lang?: InputMaybe<Scalars['String']>
  onlyIncludePastEvents?: InputMaybe<Scalars['Boolean']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
}

export type GetFeaturedSupportQnAsInput = {
  category?: InputMaybe<Scalars['String']>
  lang?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  subCategory?: InputMaybe<Scalars['String']>
}

export type GetFrontpageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericListItemBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericListItemsInput = {
  genericListId: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetGenericListItemsInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export enum GetGenericListItemsInputOrderBy {
  Date = 'DATE',
  PublishDate = 'PUBLISH_DATE',
  Title = 'TITLE',
}

export type GetGenericOverviewPageInput = {
  lang?: InputMaybe<Scalars['String']>
  pageIdentifier: Scalars['String']
}

export type GetGenericPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagBySlugInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetGenericTagsInTagGroupsInput = {
  lang?: InputMaybe<Scalars['String']>
  tagGroupSlugs?: InputMaybe<Array<Scalars['String']>>
}

export type GetGrantsInput = {
  categories?: InputMaybe<Array<Scalars['String']>>
  funds?: InputMaybe<Array<Scalars['String']>>
  lang?: InputMaybe<Scalars['String']>
  organizations?: InputMaybe<Array<Scalars['String']>>
  page?: InputMaybe<Scalars['Int']>
  search?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<GetGrantsInputSortByEnum>
  status?: InputMaybe<GetGrantsInputAvailabilityStatusEnum>
  types?: InputMaybe<Array<Scalars['String']>>
}

export enum GetGrantsInputAvailabilityStatusEnum {
  Closed = 'CLOSED',
  Open = 'OPEN',
}

export enum GetGrantsInputSortByEnum {
  Alphabetical = 'ALPHABETICAL',
  RecentlyUpdated = 'RECENTLY_UPDATED',
}

export type GetLifeEventPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetLifeEventsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetMenuInput = {
  lang?: InputMaybe<Scalars['String']>
  name: Scalars['String']
}

export type GetNamespaceInput = {
  lang?: InputMaybe<Scalars['String']>
  namespace?: InputMaybe<Scalars['String']>
}

export type GetNewsDatesInput = {
  lang?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<Scalars['String']>>
}

export type GetNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  month?: InputMaybe<Scalars['Int']>
  order?: InputMaybe<Scalars['String']>
  organization?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  size?: InputMaybe<Scalars['Int']>
  tags?: InputMaybe<Array<Scalars['String']>>
  year?: InputMaybe<Scalars['Int']>
}

export type GetOpenDataPageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOpenDataSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationByNationalIdInput = {
  lang?: InputMaybe<Scalars['String']>
  nationalId: Scalars['String']
}

export type GetOrganizationByTitleInput = {
  lang?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type GetOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
}

export type GetOrganizationPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel1Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
}

export type GetOrganizationPageStandaloneSitemapLevel2Input = {
  categorySlug: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  subcategorySlug: Scalars['String']
}

export type GetOrganizationParentSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationPageSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationSubpageByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationSubpageInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug: Scalars['String']
  slug: Scalars['String']
}

export type GetOrganizationTagsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetOrganizationsInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationTitles?: InputMaybe<Array<Scalars['String']>>
  perPage?: InputMaybe<Scalars['Int']>
  referenceIdentifiers?: InputMaybe<Array<Scalars['String']>>
}

export type GetPowerBiEmbedPropsFromServerResponse = {
  __typename?: 'GetPowerBiEmbedPropsFromServerResponse'
  accessToken?: Maybe<Scalars['String']>
  embedUrl?: Maybe<Scalars['String']>
}

export type GetProjectPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetPublishedMaterialInput = {
  lang?: InputMaybe<Scalars['String']>
  organizationSlug?: InputMaybe<Scalars['String']>
  page?: InputMaybe<Scalars['Int']>
  searchString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  sort: Scalars['JSON']
  tagGroups: Scalars['JSON']
  tags: Array<Scalars['String']>
}

export type GetServicePortalAlertBannersInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetServiceWebPageInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleArticleInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleEntryTitleByIdInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleEventInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleGrantInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleManualInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleMenuInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSingleNewsInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSingleSupportQnaInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSubpageHeaderInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoriesInOrganizationInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportCategoriesInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetSupportCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInCategoryInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type GetSupportQnAsInput = {
  lang?: InputMaybe<Scalars['String']>
}

export type GetTabSectionInput = {
  id: Scalars['String']
  lang?: InputMaybe<Scalars['String']>
}

export type GetTeamMembersInput = {
  lang?: InputMaybe<Scalars['String']>
  orderBy?: InputMaybe<GetTeamMembersInputOrderBy>
  page?: InputMaybe<Scalars['Int']>
  queryString?: InputMaybe<Scalars['String']>
  size?: InputMaybe<Scalars['Int']>
  tagGroups?: InputMaybe<Scalars['JSON']>
  tags?: InputMaybe<Array<Scalars['String']>>
  teamListId: Scalars['String']
}

export enum GetTeamMembersInputOrderBy {
  Manual = 'Manual',
  Name = 'Name',
}

export type GetUrlInput = {
  lang?: InputMaybe<Scalars['String']>
  slug: Scalars['String']
}

export type Grant = {
  __typename?: 'Grant'
  answeringQuestions: Array<Slice>
  applicationButtonLabel?: Maybe<Scalars['String']>
  applicationHints: Array<Slice>
  applicationId?: Maybe<Scalars['String']>
  applicationUrl?: Maybe<ReferenceLink>
  categoryTags?: Maybe<Array<GenericTag>>
  dateFrom?: Maybe<Scalars['String']>
  dateTo?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  files?: Maybe<Array<Asset>>
  fund?: Maybe<OrganizationFund>
  howToApply: Array<Slice>
  id: Scalars['ID']
  lastUpdateTimestamp: Scalars['String']
  name: Scalars['String']
  specialEmphasis: Array<Slice>
  status?: Maybe<GrantStatus>
  statusText?: Maybe<Scalars['String']>
  supportLinks?: Maybe<Array<Link>>
  typeTag?: Maybe<GenericTag>
  whoCanApply: Array<Slice>
}

export type GrantCardsList = {
  __typename?: 'GrantCardsList'
  displayTitle?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  maxNumberOfCards?: Maybe<Scalars['Int']>
  namespace: Scalars['JSONObject']
  resolvedGrantsList?: Maybe<GrantList>
  sorting?: Maybe<GrantCardsListSorting>
  title: Scalars['String']
}

export enum GrantCardsListSorting {
  Alphabetical = 'ALPHABETICAL',
  MostRecentlyUpdatedFirst = 'MOST_RECENTLY_UPDATED_FIRST',
}

export type GrantList = {
  __typename?: 'GrantList'
  items: Array<Grant>
  total: Scalars['Int']
}

export enum GrantStatus {
  AlwaysOpen = 'ALWAYS_OPEN',
  Closed = 'CLOSED',
  ClosedOpeningSoon = 'CLOSED_OPENING_SOON',
  ClosedOpeningSoonWithEstimation = 'CLOSED_OPENING_SOON_WITH_ESTIMATION',
  ClosedWithNote = 'CLOSED_WITH_NOTE',
  Invalid = 'INVALID',
  Open = 'OPEN',
  OpenWithNote = 'OPEN_WITH_NOTE',
  Unknown = 'UNKNOWN',
}

export type GraphCard = {
  __typename?: 'GraphCard'
  data: Scalars['String']
  datakeys: Scalars['String']
  displayAsCard: Scalars['Boolean']
  graphDescription: Scalars['String']
  graphTitle: Scalars['String']
  id: Scalars['ID']
  organization?: Maybe<Scalars['String']>
  organizationLogo?: Maybe<Image>
  type: Scalars['String']
}

export type GroupedMenu = {
  __typename?: 'GroupedMenu'
  id: Scalars['ID']
  menus: Array<Menu>
  title: Scalars['String']
}

export type HeadingSlice = {
  __typename?: 'HeadingSlice'
  body: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type Html = {
  __typename?: 'Html'
  document: Scalars['JSON']
  id: Scalars['ID']
  typename: Scalars['String']
}

export type IconBullet = {
  __typename?: 'IconBullet'
  body: Scalars['String']
  icon: Image
  id: Scalars['ID']
  linkText?: Maybe<Scalars['String']>
  title: Scalars['String']
  url?: Maybe<Scalars['String']>
}

export type Image = {
  __typename?: 'Image'
  contentType: Scalars['String']
  description?: Maybe<Scalars['String']>
  height: Scalars['Int']
  id: Scalars['ID']
  title: Scalars['String']
  url: Scalars['String']
  width: Scalars['Int']
}

export type IntroLinkImage = {
  __typename?: 'IntroLinkImage'
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Html>
  introHtml?: Maybe<Html>
  leftImage: Scalars['Boolean']
  link?: Maybe<ReferenceLink>
  linkTitle: Scalars['String']
  openLinkInNewTab: Scalars['Boolean']
  title: Scalars['String']
}

export type LatestEventsSlice = {
  __typename?: 'LatestEventsSlice'
  events: Array<Event>
  id: Scalars['ID']
  title: Scalars['String']
}

export type LatestGenericListItems = {
  __typename?: 'LatestGenericListItems'
  genericList?: Maybe<GenericList>
  id: Scalars['ID']
  itemResponse?: Maybe<GenericListItemResponse>
  seeMoreLinkText: Scalars['String']
  seeMorePage?: Maybe<Page>
  title: Scalars['String']
}

export type LatestNewsSlice = {
  __typename?: 'LatestNewsSlice'
  id: Scalars['ID']
  news: Array<News>
  readMoreLink?: Maybe<Link>
  readMoreText: Scalars['String']
  tag: Scalars['String']
  title: Scalars['String']
}

export type LifeEventPage = {
  __typename?: 'LifeEventPage'
  category?: Maybe<ArticleCategory>
  content: Array<Slice>
  featured: Array<Featured>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  image?: Maybe<Image>
  intro?: Maybe<Scalars['String']>
  organizations: Array<Organization>
  relatedLifeEvents: Array<LifeEventPage>
  seeMoreText?: Maybe<Scalars['String']>
  shortIntro?: Maybe<Scalars['String']>
  shortTitle?: Maybe<Scalars['String']>
  slug: Scalars['String']
  thumbnail?: Maybe<Image>
  tinyThumbnail?: Maybe<Image>
  title: Scalars['String']
}

export type Link = {
  __typename?: 'Link'
  date: Scalars['String']
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  labels?: Maybe<Array<Scalars['String']>>
  text: Scalars['String']
  url: Scalars['String']
}

export type LinkCard = {
  __typename?: 'LinkCard'
  body: Scalars['String']
  id: Scalars['ID']
  linkText?: Maybe<Scalars['String']>
  linkUrl: Scalars['String']
  title: Scalars['String']
}

export type LinkCardSection = {
  __typename?: 'LinkCardSection'
  cards: Array<LinkCard>
  id: Scalars['ID']
  title: Scalars['String']
}

export type LinkGroup = {
  __typename?: 'LinkGroup'
  childrenLinks: Array<Link>
  id: Scalars['ID']
  name: Scalars['String']
  primaryLink?: Maybe<Link>
}

export type LinkList = {
  __typename?: 'LinkList'
  links: Array<Link>
  title: Scalars['String']
}

export type LogoListSlice = {
  __typename?: 'LogoListSlice'
  body: Scalars['String']
  id: Scalars['ID']
  images: Array<Image>
  title: Scalars['String']
}

export type Manual = {
  __typename?: 'Manual'
  category?: Maybe<ArticleCategory>
  chapters: Array<ManualChapter>
  description?: Maybe<Array<Slice>>
  group?: Maybe<ArticleGroup>
  id: Scalars['ID']
  importance?: Maybe<Scalars['Float']>
  info?: Maybe<Array<Slice>>
  organization?: Maybe<Organization>
  otherCategories?: Maybe<Array<ArticleCategory>>
  otherGroups?: Maybe<Array<ArticleGroup>>
  otherSubgroups?: Maybe<Array<ArticleSubgroup>>
  slug: Scalars['String']
  subgroup?: Maybe<ArticleSubgroup>
  title: Scalars['String']
}

export type ManualChapter = {
  __typename?: 'ManualChapter'
  changelog?: Maybe<ManualChapterChangelog>
  chapterItems: Array<ManualChapterItem>
  description?: Maybe<Array<Slice>>
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  slug: Scalars['String']
  title: Scalars['String']
}

export type ManualChapterChangelog = {
  __typename?: 'ManualChapterChangelog'
  items: Array<ManualChapterChangelogItem>
}

export type ManualChapterChangelogItem = {
  __typename?: 'ManualChapterChangelogItem'
  dateOfChange: Scalars['String']
  textualDescription: Scalars['String']
}

export type ManualChapterItem = {
  __typename?: 'ManualChapterItem'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  manual: ManualPageData
  manualChapter: ManualPageData
  title: Scalars['String']
}

export type ManualPageData = {
  __typename?: 'ManualPageData'
  id: Scalars['ID']
  slug: Scalars['String']
  title: Scalars['String']
}

export type Menu = {
  __typename?: 'Menu'
  id: Scalars['ID']
  links: Array<Link>
  menuLinks: Array<MenuLinkWithChildren>
  title: Scalars['String']
}

export type MenuLink = {
  __typename?: 'MenuLink'
  link: ReferenceLink
  title: Scalars['String']
}

export type MenuLinkWithChildren = {
  __typename?: 'MenuLinkWithChildren'
  childLinks: Array<MenuLink>
  link?: Maybe<ReferenceLink>
  title: Scalars['String']
}

export type MultipleStatistics = {
  __typename?: 'MultipleStatistics'
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  statistics: Array<Statistics>
  title: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  confirmInvoice: Array<FlightLeg>
  createExplicitDiscountCode?: Maybe<Array<Discount>>
}

export type MutationConfirmInvoiceArgs = {
  input: ConfirmInvoiceInput
}

export type MutationCreateExplicitDiscountCodeArgs = {
  input: CreateExplicitDiscountCodeInput
}

export type Namespace = {
  __typename?: 'Namespace'
  fields: Scalars['String']
  namespace: Scalars['String']
}

export type News = {
  __typename?: 'News'
  content?: Maybe<Array<Slice>>
  date: Scalars['String']
  featuredImage?: Maybe<Image>
  fullWidthImageInContent?: Maybe<Scalars['Boolean']>
  genericTags: Array<GenericTag>
  id: Scalars['ID']
  image?: Maybe<Image>
  initialPublishDate?: Maybe<Scalars['String']>
  intro?: Maybe<Scalars['String']>
  organization?: Maybe<Organization>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type NewsList = {
  __typename?: 'NewsList'
  items: Array<News>
  total: Scalars['Int']
}

export type NumberBullet = {
  __typename?: 'NumberBullet'
  body: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type NumberBulletGroup = {
  __typename?: 'NumberBulletGroup'
  bullets: Array<NumberBullet>
  defaultVisible: Scalars['Int']
  id: Scalars['ID']
}

export type OneColumnText = {
  __typename?: 'OneColumnText'
  content?: Maybe<Array<Slice>>
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
}

export type OpenDataPage = {
  __typename?: 'OpenDataPage'
  chartSectionTitle: Scalars['String']
  externalLinkCardSelection: LinkCardSection
  externalLinkSectionDescription: Scalars['String']
  externalLinkSectionImage?: Maybe<Image>
  externalLinkSectionTitle: Scalars['String']
  graphCards: Array<GraphCard>
  id: Scalars['ID']
  link: Scalars['String']
  linkTitle: Scalars['String']
  pageDescription: Scalars['String']
  pageHeaderGraph: GraphCard
  pageTitle: Scalars['String']
  statisticsCardsSection: Array<StatisticsCard>
}

export type OpenDataSubpage = {
  __typename?: 'OpenDataSubpage'
  fundDescription: Scalars['String']
  fundTitle: Scalars['String']
  graphCards: Array<GraphCard>
  id: Scalars['ID']
  organizationLogo?: Maybe<Image>
  pageTitle: Scalars['String']
  statisticsCards: Array<StatisticsCard>
}

export type Organization = {
  __typename?: 'Organization'
  description?: Maybe<Scalars['String']>
  email: Scalars['String']
  footerConfig?: Maybe<Scalars['JSON']>
  footerItems: Array<FooterItem>
  hasALandingPage?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Scalars['String']>
  logo?: Maybe<Image>
  namespace?: Maybe<Namespace>
  newsBottomSlices?: Maybe<Array<EmailSignup>>
  phone: Scalars['String']
  publishedMaterialSearchFilterGenericTags: Array<GenericTag>
  referenceIdentifier?: Maybe<Scalars['String']>
  serviceWebEnabled?: Maybe<Scalars['Boolean']>
  serviceWebFeaturedImage?: Maybe<Image>
  serviceWebPopularQuestionCount?: Maybe<Scalars['Float']>
  serviceWebTitle?: Maybe<Scalars['String']>
  shortTitle: Scalars['String']
  showsUpOnTheOrganizationsPage?: Maybe<Scalars['Boolean']>
  slug: Scalars['String']
  tag: Array<OrganizationTag>
  title: Scalars['String']
  trackingDomain?: Maybe<Scalars['String']>
}

export type OrganizationFund = {
  __typename?: 'OrganizationFund'
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  link?: Maybe<ReferenceLink>
  parentOrganization: Organization
  title: Scalars['String']
}

export type OrganizationPage = {
  __typename?: 'OrganizationPage'
  alertBanner?: Maybe<AlertBanner>
  bottomSlices: Array<Slice>
  canBeFoundInSearchResults?: Maybe<Scalars['Boolean']>
  defaultHeaderImage?: Maybe<Image>
  description: Scalars['String']
  externalLinks?: Maybe<Array<Link>>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  menuLinks: Array<LinkGroup>
  organization?: Maybe<Organization>
  secondaryMenu?: Maybe<LinkGroup>
  secondaryNewsTags?: Maybe<Array<GenericTag>>
  showPastEventsOption?: Maybe<Scalars['Boolean']>
  sidebarCards?: Maybe<Array<Slice>>
  slices: Array<Slice>
  slug: Scalars['String']
  theme: Scalars['String']
  themeProperties: OrganizationTheme
  title: Scalars['String']
  topLevelNavigation?: Maybe<OrganizationPageTopLevelNavigation>
}

export type OrganizationPageStandaloneSitemap = {
  __typename?: 'OrganizationPageStandaloneSitemap'
  childLinks: Array<OrganizationPageStandaloneSitemapLink>
}

export type OrganizationPageStandaloneSitemapLevel2 = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2'
  childCategories: Array<OrganizationPageStandaloneSitemapLevel2Category>
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLevel2Category = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2Category'
  childLinks: Array<OrganizationPageStandaloneSitemapLevel2Link>
  href?: Maybe<Scalars['String']>
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLevel2Link = {
  __typename?: 'OrganizationPageStandaloneSitemapLevel2Link'
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationPageStandaloneSitemapLink = {
  __typename?: 'OrganizationPageStandaloneSitemapLink'
  description?: Maybe<Scalars['String']>
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationPageTopLevelNavigation = {
  __typename?: 'OrganizationPageTopLevelNavigation'
  links: Array<OrganizationPageTopLevelNavigationLink>
}

export type OrganizationPageTopLevelNavigationLink = {
  __typename?: 'OrganizationPageTopLevelNavigationLink'
  href: Scalars['String']
  label: Scalars['String']
}

export type OrganizationParentSubpage = {
  __typename?: 'OrganizationParentSubpage'
  childLinks: Array<OrganizationSubpageLink>
  id: Scalars['ID']
  title: Scalars['String']
}

export type OrganizationParentSubpageList = {
  __typename?: 'OrganizationParentSubpageList'
  id: Scalars['ID']
  pageLinkVariant: OrganizationParentSubpageListVariant
  pageLinks: Array<OrganizationParentSubpageListPageLink>
  seeMoreLink?: Maybe<Link>
  title: Scalars['String']
}

export type OrganizationParentSubpageListPageLink = {
  __typename?: 'OrganizationParentSubpageListPageLink'
  href: Scalars['String']
  id: Scalars['ID']
  label: Scalars['String']
  pageLinkIntro: Scalars['String']
  thumbnailImageHref?: Maybe<Scalars['String']>
  tinyThumbnailImageHref?: Maybe<Scalars['String']>
}

export enum OrganizationParentSubpageListVariant {
  ProfileCardWithTitleAbove = 'ProfileCardWithTitleAbove',
  ServiceCard = 'ServiceCard',
}

export type OrganizationSubpage = {
  __typename?: 'OrganizationSubpage'
  bottomSlices?: Maybe<Array<Slice>>
  description?: Maybe<Array<Slice>>
  featuredImage?: Maybe<Image>
  id: Scalars['ID']
  intro?: Maybe<Scalars['String']>
  links?: Maybe<Array<Link>>
  organizationPage: OrganizationPage
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents: Scalars['Boolean']
  signLanguageVideo?: Maybe<EmbeddedVideo>
  sliceCustomRenderer?: Maybe<Scalars['String']>
  sliceExtraText?: Maybe<Scalars['String']>
  slices?: Maybe<Array<Slice>>
  slug: Scalars['String']
  title: Scalars['String']
  url: Array<Scalars['String']>
}

export type OrganizationSubpageLink = {
  __typename?: 'OrganizationSubpageLink'
  href: Scalars['String']
  id?: Maybe<Scalars['String']>
  label: Scalars['String']
}

export type OrganizationTag = {
  __typename?: 'OrganizationTag'
  id: Scalars['ID']
  title: Scalars['String']
}

export type OrganizationTags = {
  __typename?: 'OrganizationTags'
  items: Array<OrganizationTag>
}

export type OrganizationTheme = {
  __typename?: 'OrganizationTheme'
  backgroundColor?: Maybe<Scalars['String']>
  fullWidth?: Maybe<Scalars['Boolean']>
  gradientEndColor: Scalars['String']
  gradientStartColor: Scalars['String']
  imageIsFullHeight?: Maybe<Scalars['Boolean']>
  imageObjectFit?: Maybe<Scalars['String']>
  imageObjectPosition?: Maybe<Scalars['String']>
  imagePadding?: Maybe<Scalars['String']>
  mobileBackgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  titleSectionPaddingLeft?: Maybe<Scalars['Int']>
  useGradientColor?: Maybe<Scalars['Boolean']>
}

export type Organizations = {
  __typename?: 'Organizations'
  items: Array<Organization>
}

export type OverviewLinks = {
  __typename?: 'OverviewLinks'
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  link?: Maybe<Link>
  linkData?: Maybe<OverviewLinksLinkData>
  overviewLinks: Array<IntroLinkImage>
  titleAbove?: Maybe<Scalars['String']>
}

export type OverviewLinksLinkData = {
  __typename?: 'OverviewLinksLinkData'
  categoryCardItems: Array<OverviewLinksLinkDataCategoryCardItem>
  variant: OverviewLinksLinkDataVariant
}

export type OverviewLinksLinkDataCategoryCardItem = {
  __typename?: 'OverviewLinksLinkDataCategoryCardItem'
  description: Scalars['String']
  href: Scalars['String']
  title: Scalars['String']
}

export enum OverviewLinksLinkDataVariant {
  CategoryCard = 'CategoryCard',
  IntroLinkImage = 'IntroLinkImage',
}

export type Page =
  | AnchorPage
  | Article
  | ArticleCategory
  | LifeEventPage
  | News
  | OrganizationPage
  | OrganizationSubpage
  | ProjectPage
  | SubArticle

export type Period = {
  from: Scalars['DateTime']
  to: Scalars['DateTime']
}

export type PowerBiSlice = {
  __typename?: 'PowerBiSlice'
  id: Scalars['ID']
  owner?: Maybe<Scalars['String']>
  powerBiEmbedProps?: Maybe<Scalars['JSON']>
  powerBiEmbedPropsFromServer?: Maybe<GetPowerBiEmbedPropsFromServerResponse>
  reportId?: Maybe<Scalars['String']>
  title: Scalars['String']
  workspaceId?: Maybe<Scalars['String']>
}

export type ProcessEntry = {
  __typename?: 'ProcessEntry'
  buttonText: Scalars['String']
  id: Scalars['ID']
  openLinkInModal?: Maybe<Scalars['Boolean']>
  processLink: Scalars['String']
  processTitle: Scalars['String']
}

export type ProjectPage = {
  __typename?: 'ProjectPage'
  alertBanner?: Maybe<AlertBanner>
  backLink?: Maybe<Link>
  bottomSlices: Array<Slice>
  content?: Maybe<Array<Slice>>
  contentIsFullWidth?: Maybe<Scalars['Boolean']>
  defaultHeaderBackgroundColor: Scalars['String']
  defaultHeaderImage?: Maybe<Image>
  featuredDescription: Scalars['String']
  featuredImage?: Maybe<Image>
  footerConfig?: Maybe<Scalars['JSON']>
  footerItems?: Maybe<Array<FooterItem>>
  id: Scalars['ID']
  intro: Scalars['String']
  namespace?: Maybe<Namespace>
  newsTag?: Maybe<GenericTag>
  projectSubpages: Array<ProjectSubpage>
  secondarySidebar?: Maybe<LinkGroup>
  sidebar: Scalars['Boolean']
  sidebarLinks: Array<LinkGroup>
  slices: Array<Slice>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  subtitle: Scalars['String']
  theme: Scalars['String']
  themeProperties?: Maybe<ProjectPageThemeProperties>
  title: Scalars['String']
}

export type ProjectPageThemeProperties = {
  __typename?: 'ProjectPageThemeProperties'
  backgroundColor?: Maybe<Scalars['String']>
  fullWidth?: Maybe<Scalars['Boolean']>
  gradientEndColor: Scalars['String']
  gradientStartColor: Scalars['String']
  imageIsFullHeight?: Maybe<Scalars['Boolean']>
  imageObjectFit?: Maybe<Scalars['String']>
  imageObjectPosition?: Maybe<Scalars['String']>
  imagePadding?: Maybe<Scalars['String']>
  mobileBackgroundColor?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
  titleSectionPaddingLeft?: Maybe<Scalars['Int']>
  useGradientColor?: Maybe<Scalars['Boolean']>
}

export type ProjectSubpage = {
  __typename?: 'ProjectSubpage'
  bottomSlices?: Maybe<Array<Slice>>
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  renderSlicesAsTabs: Scalars['Boolean']
  shortTitle?: Maybe<Scalars['String']>
  showTableOfContents: Scalars['Boolean']
  slices: Array<Slice>
  slug: Scalars['String']
  title: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  discounts?: Maybe<Array<Discount>>
  flightLegs: Array<FlightLeg>
  getAlertBanner?: Maybe<AlertBanner>
  getAnchorPage?: Maybe<AnchorPage>
  getAnchorPages: Array<AnchorPage>
  getArticleCategories: Array<ArticleCategory>
  getArticles: Array<Article>
  getAuction: Auction
  getAuctions: Array<Auction>
  getBloodDonationRestrictionDetails?: Maybe<BloodDonationRestrictionDetails>
  getBloodDonationRestrictionGenericTags: BloodDonationRestrictionGenericTagList
  getBloodDonationRestrictions: BloodDonationRestrictionList
  getCategoryPages?: Maybe<Array<CategoryPage>>
  getContentSlug?: Maybe<ContentSlug>
  getCustomPage?: Maybe<CustomPage>
  getCustomSubpage?: Maybe<CustomPage>
  getErrorPage?: Maybe<ErrorPage>
  getEvents: EventList
  getFeaturedSupportQNAs: Array<SupportQna>
  getFrontpage?: Maybe<Frontpage>
  getGenericListItemBySlug?: Maybe<GenericListItem>
  getGenericListItems?: Maybe<GenericListItemResponse>
  getGenericOverviewPage?: Maybe<GenericOverviewPage>
  getGenericPage?: Maybe<GenericPage>
  getGenericTagBySlug?: Maybe<GenericTag>
  getGenericTagsInTagGroups?: Maybe<Array<GenericTag>>
  getGrants: GrantList
  getGroupedMenu?: Maybe<GroupedMenu>
  getLifeEventPage?: Maybe<LifeEventPage>
  getLifeEventsForOverview: Array<LifeEventPage>
  getLifeEventsInCategory: Array<LifeEventPage>
  getMenu?: Maybe<Menu>
  getNamespace?: Maybe<Namespace>
  getNews: NewsList
  getNewsDates: Array<Scalars['String']>
  getOpenDataPage: OpenDataPage
  getOpenDataSubpage: OpenDataSubpage
  getOrganization?: Maybe<Organization>
  getOrganizationByNationalId?: Maybe<Organization>
  getOrganizationByTitle?: Maybe<Organization>
  getOrganizationPage?: Maybe<OrganizationPage>
  getOrganizationPageStandaloneSitemapLevel1?: Maybe<OrganizationPageStandaloneSitemap>
  getOrganizationPageStandaloneSitemapLevel2?: Maybe<OrganizationPageStandaloneSitemapLevel2>
  getOrganizationParentSubpage?: Maybe<OrganizationParentSubpage>
  getOrganizationSubpage?: Maybe<OrganizationSubpage>
  getOrganizationSubpageById?: Maybe<OrganizationSubpage>
  getOrganizationTags?: Maybe<OrganizationTags>
  getOrganizations: Organizations
  getProjectPage?: Maybe<ProjectPage>
  getPublishedMaterial: EnhancedAssetSearchResult
  getServicePortalAlertBanners?: Maybe<Array<AlertBanner>>
  getServiceWebPage?: Maybe<ServiceWebPage>
  getSingleArticle?: Maybe<Article>
  getSingleEntryTitleById?: Maybe<EntryTitle>
  getSingleEvent?: Maybe<Event>
  getSingleGrant?: Maybe<Grant>
  getSingleManual?: Maybe<Manual>
  getSingleNews?: Maybe<News>
  getSingleSupportQNA?: Maybe<SupportQna>
  getSubpageHeader?: Maybe<SubpageHeader>
  getSupportCategories: Array<SupportCategory>
  getSupportCategoriesInOrganization: Array<SupportCategory>
  getSupportCategory?: Maybe<SupportCategory>
  getSupportQNAs: Array<SupportQna>
  getSupportQNAsInCategory: Array<SupportQna>
  getTabSection?: Maybe<TabSection>
  getTeamMembers?: Maybe<TeamMemberResponse>
  getUrl?: Maybe<Url>
  user?: Maybe<User>
}

export type QueryFlightLegsArgs = {
  input: FlightLegsInput
}

export type QueryGetAlertBannerArgs = {
  input: GetAlertBannerInput
}

export type QueryGetAnchorPageArgs = {
  input: GetAnchorPageInput
}

export type QueryGetAnchorPagesArgs = {
  input: GetAnchorPagesInput
}

export type QueryGetArticleCategoriesArgs = {
  input: GetArticleCategoriesInput
}

export type QueryGetArticlesArgs = {
  input: GetArticlesInput
}

export type QueryGetAuctionArgs = {
  input: GetAuctionInput
}

export type QueryGetAuctionsArgs = {
  input: GetAuctionsInput
}

export type QueryGetBloodDonationRestrictionDetailsArgs = {
  input: GetBloodDonationRestrictionDetailsInput
}

export type QueryGetBloodDonationRestrictionGenericTagsArgs = {
  input: GetBloodDonationRestrictionGenericTagsInput
}

export type QueryGetBloodDonationRestrictionsArgs = {
  input: GetBloodDonationRestrictionsInput
}

export type QueryGetCategoryPagesArgs = {
  input: GetCategoryPagesInput
}

export type QueryGetContentSlugArgs = {
  input: GetContentSlugInput
}

export type QueryGetCustomPageArgs = {
  input: GetCustomPageInput
}

export type QueryGetCustomSubpageArgs = {
  input: GetCustomSubpageInput
}

export type QueryGetErrorPageArgs = {
  input: GetErrorPageInput
}

export type QueryGetEventsArgs = {
  input: GetEventsInput
}

export type QueryGetFeaturedSupportQnAsArgs = {
  input: GetFeaturedSupportQnAsInput
}

export type QueryGetFrontpageArgs = {
  input: GetFrontpageInput
}

export type QueryGetGenericListItemBySlugArgs = {
  input: GetGenericListItemBySlugInput
}

export type QueryGetGenericListItemsArgs = {
  input: GetGenericListItemsInput
}

export type QueryGetGenericOverviewPageArgs = {
  input: GetGenericOverviewPageInput
}

export type QueryGetGenericPageArgs = {
  input: GetGenericPageInput
}

export type QueryGetGenericTagBySlugArgs = {
  input: GetGenericTagBySlugInput
}

export type QueryGetGenericTagsInTagGroupsArgs = {
  input: GetGenericTagsInTagGroupsInput
}

export type QueryGetGrantsArgs = {
  input: GetGrantsInput
}

export type QueryGetGroupedMenuArgs = {
  input: GetSingleMenuInput
}

export type QueryGetLifeEventPageArgs = {
  input: GetLifeEventPageInput
}

export type QueryGetLifeEventsForOverviewArgs = {
  input: GetLifeEventsInput
}

export type QueryGetLifeEventsInCategoryArgs = {
  input: GetLifeEventsInCategoryInput
}

export type QueryGetMenuArgs = {
  input: GetMenuInput
}

export type QueryGetNamespaceArgs = {
  input: GetNamespaceInput
}

export type QueryGetNewsArgs = {
  input: GetNewsInput
}

export type QueryGetNewsDatesArgs = {
  input: GetNewsDatesInput
}

export type QueryGetOpenDataPageArgs = {
  input: GetOpenDataPageInput
}

export type QueryGetOpenDataSubpageArgs = {
  input: GetOpenDataSubpageInput
}

export type QueryGetOrganizationArgs = {
  input: GetOrganizationInput
}

export type QueryGetOrganizationByNationalIdArgs = {
  input: GetOrganizationByNationalIdInput
}

export type QueryGetOrganizationByTitleArgs = {
  input: GetOrganizationByTitleInput
}

export type QueryGetOrganizationPageArgs = {
  input: GetOrganizationPageInput
}

export type QueryGetOrganizationPageStandaloneSitemapLevel1Args = {
  input: GetOrganizationPageStandaloneSitemapLevel1Input
}

export type QueryGetOrganizationPageStandaloneSitemapLevel2Args = {
  input: GetOrganizationPageStandaloneSitemapLevel2Input
}

export type QueryGetOrganizationParentSubpageArgs = {
  input: GetOrganizationParentSubpageInput
}

export type QueryGetOrganizationSubpageArgs = {
  input: GetOrganizationSubpageInput
}

export type QueryGetOrganizationSubpageByIdArgs = {
  input: GetOrganizationSubpageByIdInput
}

export type QueryGetOrganizationTagsArgs = {
  input: GetOrganizationTagsInput
}

export type QueryGetOrganizationsArgs = {
  input: InputMaybe<GetOrganizationsInput>
}

export type QueryGetProjectPageArgs = {
  input: GetProjectPageInput
}

export type QueryGetPublishedMaterialArgs = {
  input: GetPublishedMaterialInput
}

export type QueryGetServicePortalAlertBannersArgs = {
  input: GetServicePortalAlertBannersInput
}

export type QueryGetServiceWebPageArgs = {
  input: GetServiceWebPageInput
}

export type QueryGetSingleArticleArgs = {
  input: GetSingleArticleInput
}

export type QueryGetSingleEntryTitleByIdArgs = {
  input: GetSingleEntryTitleByIdInput
}

export type QueryGetSingleEventArgs = {
  input: GetSingleEventInput
}

export type QueryGetSingleGrantArgs = {
  input: GetSingleGrantInput
}

export type QueryGetSingleManualArgs = {
  input: GetSingleManualInput
}

export type QueryGetSingleNewsArgs = {
  input: GetSingleNewsInput
}

export type QueryGetSingleSupportQnaArgs = {
  input: GetSingleSupportQnaInput
}

export type QueryGetSubpageHeaderArgs = {
  input: GetSubpageHeaderInput
}

export type QueryGetSupportCategoriesArgs = {
  input: GetSupportCategoriesInput
}

export type QueryGetSupportCategoriesInOrganizationArgs = {
  input: GetSupportCategoriesInOrganizationInput
}

export type QueryGetSupportCategoryArgs = {
  input: GetSupportCategoryInput
}

export type QueryGetSupportQnAsArgs = {
  input: GetSupportQnAsInput
}

export type QueryGetSupportQnAsInCategoryArgs = {
  input: GetSupportQnAsInCategoryInput
}

export type QueryGetTabSectionArgs = {
  input: GetTabSectionInput
}

export type QueryGetTeamMembersArgs = {
  input: GetTeamMembersInput
}

export type QueryGetUrlArgs = {
  input: GetUrlInput
}

export type QuestionAndAnswer = {
  __typename?: 'QuestionAndAnswer'
  answer: Array<Slice>
  id: Scalars['ID']
  publishDate?: Maybe<Scalars['String']>
  question: Scalars['String']
}

export type Range = {
  from?: InputMaybe<Scalars['Int']>
  to?: InputMaybe<Scalars['Int']>
}

export type ReferenceLink = {
  __typename?: 'ReferenceLink'
  slug: Scalars['String']
  type: Scalars['String']
}

export type SectionWithImage = {
  __typename?: 'SectionWithImage'
  content?: Maybe<Array<Slice>>
  id: Scalars['ID']
  image?: Maybe<Image>
  title: Scalars['String']
}

export type SectionWithVideo = {
  __typename?: 'SectionWithVideo'
  html?: Maybe<Html>
  id: Scalars['ID']
  link?: Maybe<Link>
  locale: Scalars['String']
  showDividerOnTop?: Maybe<Scalars['Boolean']>
  showTitle?: Maybe<Scalars['Boolean']>
  title: Scalars['String']
  video?: Maybe<EmbeddedVideo>
}

export type ServiceWebPage = {
  __typename?: 'ServiceWebPage'
  alertBanner?: Maybe<AlertBanner>
  contactFormDisclaimer?: Maybe<Array<Slice>>
  emailConfig?: Maybe<ServiceWebPageEmailConfig>
  footerItems?: Maybe<Array<FooterItem>>
  id: Scalars['ID']
  organization?: Maybe<Organization>
  slices: Array<Slice>
  title: Scalars['String']
}

export type ServiceWebPageEmailConfig = {
  __typename?: 'ServiceWebPageEmailConfig'
  emails: Array<ServiceWebPageEmailConfigItem>
}

export type ServiceWebPageEmailConfigItem = {
  __typename?: 'ServiceWebPageEmailConfigItem'
  emailList: Array<Scalars['String']>
  supportCategoryId: Scalars['String']
}

export type SidebarCard = {
  __typename?: 'SidebarCard'
  contentString: Scalars['String']
  id: Scalars['ID']
  image?: Maybe<Image>
  link?: Maybe<Link>
  title: Scalars['String']
  type: Scalars['String']
}

export type Slice =
  | AccordionSlice
  | AnchorPageListSlice
  | Asset
  | BulletListSlice
  | Chart
  | ChartComponent
  | ChartNumberBox
  | ConnectedComponent
  | ContactUs
  | Districts
  | EmailSignup
  | Embed
  | EmbeddedVideo
  | EventSlice
  | FaqList
  | FeaturedArticles
  | FeaturedEvents
  | FeaturedLinks
  | FeaturedSupportQnAs
  | Form
  | GenericList
  | GrantCardsList
  | GraphCard
  | HeadingSlice
  | Html
  | Image
  | IntroLinkImage
  | LatestEventsSlice
  | LatestGenericListItems
  | LatestNewsSlice
  | LinkCard
  | LinkCardSection
  | LogoListSlice
  | MultipleStatistics
  | OneColumnText
  | OrganizationParentSubpageList
  | OverviewLinks
  | PowerBiSlice
  | ProcessEntry
  | SectionWithImage
  | SectionWithVideo
  | SidebarCard
  | SliceDropdown
  | Statistics
  | Stepper
  | StorySlice
  | TabSection
  | TableSlice
  | TeamList
  | TellUsAStory
  | TimelineSlice
  | TwoColumnText

export type SliceDropdown = {
  __typename?: 'SliceDropdown'
  alphabeticallyOrdered?: Maybe<Scalars['Boolean']>
  dropdownLabel?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slices: Array<OneColumnText>
}

export enum SortField {
  Popular = 'POPULAR',
  ReleaseDate = 'RELEASE_DATE',
  Title = 'TITLE',
}

export type Statistic = {
  __typename?: 'Statistic'
  id: Scalars['ID']
  label: Scalars['String']
  value: Scalars['String']
}

export type Statistics = {
  __typename?: 'Statistics'
  id: Scalars['ID']
  statistics: Array<Statistic>
  title: Scalars['String']
}

export type StatisticsCard = {
  __typename?: 'StatisticsCard'
  image?: Maybe<Image>
  statistic: Scalars['String']
  title: Scalars['String']
}

export type Step = {
  __typename?: 'Step'
  config?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug: Scalars['String']
  stepType?: Maybe<Scalars['String']>
  subtitle?: Maybe<Array<Slice>>
  title: Scalars['String']
}

export type Stepper = {
  __typename?: 'Stepper'
  config?: Maybe<Scalars['String']>
  id: Scalars['ID']
  steps?: Maybe<Array<Step>>
  title: Scalars['String']
}

export type Story = {
  __typename?: 'Story'
  body?: Maybe<Scalars['String']>
  date: Scalars['String']
  intro: Scalars['String']
  label: Scalars['String']
  link: Scalars['String']
  linkedPage?: Maybe<Scalars['String']>
  logo: Image
  readMoreText: Scalars['String']
  title: Scalars['String']
}

export type StorySlice = {
  __typename?: 'StorySlice'
  id: Scalars['ID']
  readMoreText: Scalars['String']
  stories: Array<Story>
}

export type SubArticle = {
  __typename?: 'SubArticle'
  body: Array<Slice>
  id: Scalars['ID']
  parent?: Maybe<ArticleReference>
  showTableOfContents?: Maybe<Scalars['Boolean']>
  signLanguageVideo?: Maybe<EmbeddedVideo>
  slug: Scalars['String']
  stepper?: Maybe<Stepper>
  title: Scalars['String']
}

export type SubpageHeader = {
  __typename?: 'SubpageHeader'
  body?: Maybe<Array<Slice>>
  featuredImage?: Maybe<Image>
  subpageId: Scalars['String']
  summary: Scalars['String']
  title: Scalars['String']
}

export type SupportCategory = {
  __typename?: 'SupportCategory'
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  importance: Scalars['Float']
  organization?: Maybe<Organization>
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export type SupportQna = {
  __typename?: 'SupportQNA'
  answer: Array<Slice>
  category?: Maybe<SupportCategory>
  contactLink: Scalars['String']
  id: Scalars['ID']
  importance: Scalars['Float']
  organization?: Maybe<Organization>
  relatedLinks: Array<Link>
  slug: Scalars['String']
  subCategory?: Maybe<SupportSubCategory>
  title: Scalars['String']
}

export type SupportSubCategory = {
  __typename?: 'SupportSubCategory'
  description?: Maybe<Scalars['String']>
  importance: Scalars['Float']
  slug?: Maybe<Scalars['String']>
  title: Scalars['String']
}

export type TabContent = {
  __typename?: 'TabContent'
  body?: Maybe<Array<Slice>>
  contentTitle?: Maybe<Scalars['String']>
  image?: Maybe<Image>
  tabTitle: Scalars['String']
}

export type TabSection = {
  __typename?: 'TabSection'
  id: Scalars['ID']
  tabs: Array<TabContent>
  title: Scalars['String']
}

export type TableSlice = {
  __typename?: 'TableSlice'
  id: Scalars['ID']
  tableContent?: Maybe<Scalars['JSON']>
  title: Scalars['String']
}

export type TeamList = {
  __typename?: 'TeamList'
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  showSearchInput?: Maybe<Scalars['Boolean']>
  teamMemberOrder?: Maybe<GetTeamMembersInputOrderBy>
  teamMembers: Array<TeamMember>
  variant?: Maybe<Scalars['String']>
}

export type TeamMember = {
  __typename?: 'TeamMember'
  createdAt?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  filterTags?: Maybe<Array<GenericTag>>
  id: Scalars['ID']
  image?: Maybe<Image>
  imageOnSelect?: Maybe<Image>
  intro?: Maybe<Array<Slice>>
  name: Scalars['String']
  phone?: Maybe<Scalars['String']>
  tagGroups?: Maybe<Array<TeamMemberTagGroup>>
  title: Scalars['String']
}

export type TeamMemberResponse = {
  __typename?: 'TeamMemberResponse'
  input: TeamMemberResponseInput
  items: Array<TeamMember>
  total: Scalars['Int']
}

export type TeamMemberResponseInput = {
  __typename?: 'TeamMemberResponseInput'
  lang: Scalars['String']
  orderBy?: Maybe<GetTeamMembersInputOrderBy>
  page?: Maybe<Scalars['Int']>
  queryString?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Int']>
  tagGroups?: Maybe<Scalars['JSON']>
  tags?: Maybe<Array<Scalars['String']>>
  teamListId: Scalars['String']
}

export type TeamMemberTagGroup = {
  __typename?: 'TeamMemberTagGroup'
  groupId: Scalars['String']
  groupLabel: Scalars['String']
  tagLabels: Array<Scalars['String']>
}

export type TellUsAStory = {
  __typename?: 'TellUsAStory'
  SuccessMessageTitle: Scalars['String']
  dateOfStoryInputErrorMessage: Scalars['String']
  dateOfStoryLabel: Scalars['String']
  dateOfStoryPlaceholder: Scalars['String']
  emailInputErrorMessage: Scalars['String']
  emailLabel: Scalars['String']
  emailPlaceholder: Scalars['String']
  errorMessage?: Maybe<Html>
  errorMessageTitle: Scalars['String']
  firstSectionTitle: Scalars['String']
  id: Scalars['ID']
  instructionsDescription?: Maybe<Html>
  instructionsImage: Image
  instructionsTitle: Scalars['String']
  introDescription?: Maybe<Html>
  introImage?: Maybe<Image>
  introTitle: Scalars['String']
  messageInputErrorMessage: Scalars['String']
  messageLabel: Scalars['String']
  messagePlaceholder: Scalars['String']
  nameInputErrorMessage: Scalars['String']
  nameLabel: Scalars['String']
  namePlaceholder: Scalars['String']
  organizationInputErrorMessage: Scalars['String']
  organizationLabel: Scalars['String']
  organizationPlaceholder: Scalars['String']
  publicationAllowedLabel: Scalars['String']
  secondSectionTitle: Scalars['String']
  subjectInputErrorMessage?: Maybe<Scalars['String']>
  subjectLabel: Scalars['String']
  subjectPlaceholder: Scalars['String']
  submitButtonTitle: Scalars['String']
  successMessage?: Maybe<Html>
  thirdSectionTitle: Scalars['String']
}

export type TextFieldLocales = {
  __typename?: 'TextFieldLocales'
  en: Scalars['String']
  is: Scalars['String']
}

export type TimelineEvent = {
  __typename?: 'TimelineEvent'
  body?: Maybe<Html>
  date: Scalars['String']
  denominator?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  label: Scalars['String']
  link: Scalars['String']
  numerator?: Maybe<Scalars['Int']>
  tags?: Maybe<Array<Scalars['String']>>
  title: Scalars['String']
}

export type TimelineSlice = {
  __typename?: 'TimelineSlice'
  events: Array<TimelineEvent>
  hasBorderAbove?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  intro: Scalars['String']
  title: Scalars['String']
}

export type Travel = {
  from?: InputMaybe<Scalars['String']>
  to?: InputMaybe<Scalars['String']>
}

export type TwoColumnText = {
  __typename?: 'TwoColumnText'
  dividerOnTop?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  leftContent?: Maybe<Array<Slice>>
  leftLink?: Maybe<Link>
  leftTitle?: Maybe<Scalars['String']>
  onlyUseOneTitle?: Maybe<Scalars['Boolean']>
  rightContent?: Maybe<Array<Slice>>
  rightLink?: Maybe<Link>
  rightTitle?: Maybe<Scalars['String']>
}

export type Url = {
  __typename?: 'Url'
  explicitRedirect?: Maybe<Scalars['String']>
  id: Scalars['ID']
  page?: Maybe<ReferenceLink>
  title?: Maybe<Scalars['String']>
  urlsList: Array<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  flightLegs: Array<FlightLeg>
  fund?: Maybe<Fund>
  meetsADSRequirements: Scalars['Boolean']
  mobile?: Maybe<Scalars['String']>
  name: Scalars['String']
  nationalId: Scalars['ID']
  role: Scalars['String']
}

export type UserInfo = {
  __typename?: 'UserInfo'
  age: Scalars['Float']
  gender: Scalars['String']
  postalCode: Scalars['Float']
}

export type GetMenuQueryVariables = Exact<{
  input: GetMenuInput
}>

export type GetMenuQuery = {
  __typename?: 'Query'
  getMenu?: {
    __typename?: 'Menu'
    title: string
    links: Array<{ __typename?: 'Link'; text: string; url: string }>
  } | null
}

export type GetNamespaceQueryVariables = Exact<{
  input: GetNamespaceInput
}>

export type GetNamespaceQuery = {
  __typename?: 'Query'
  getNamespace?: { __typename?: 'Namespace'; fields: string } | null
}

export type CurrentUserQueryQueryVariables = Exact<{ [key: string]: never }>

export type CurrentUserQueryQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    nationalId: string
    name: string
    mobile?: string | null
    role: string
  } | null
}

export type FlightLegsQueryQueryVariables = Exact<{
  input: FlightLegsInput
}>

export type FlightLegsQueryQuery = {
  __typename?: 'Query'
  flightLegs: Array<{
    __typename?: 'FlightLeg'
    id: string
    travel: string
    airline: string
    cooperation?: string | null
    originalPrice: number
    discountPrice: number
    financialState: string
    flight: {
      __typename?: 'Flight'
      id: string
      bookingDate: string
      userInfo: {
        __typename?: 'UserInfo'
        age: number
        gender: string
        postalCode: number
      }
    }
  }>
}

export type ConfirmInvoiceMutationMutationVariables = Exact<{
  input: ConfirmInvoiceInput
}>

export type ConfirmInvoiceMutationMutation = {
  __typename?: 'Mutation'
  confirmInvoice: Array<{
    __typename?: 'FlightLeg'
    id: string
    financialState: string
  }>
}

export type CreateExplicitDiscountCodeMutationMutationVariables = Exact<{
  input: CreateExplicitDiscountCodeInput
}>

export type CreateExplicitDiscountCodeMutationMutation = {
  __typename?: 'Mutation'
  createExplicitDiscountCode?: Array<{
    __typename?: 'Discount'
    discountCode: string
  }> | null
}

export type GetGenericPageQueryVariables = Exact<{
  input: GetGenericPageInput
}>

export type GetGenericPageQuery = {
  __typename?: 'Query'
  getGenericPage?: {
    __typename?: 'GenericPage'
    slug: string
    title: string
    intro?: string | null
    mainContent?: string | null
    sidebar?: string | null
    misc?: string | null
  } | null
}

export type GetGenericPageQueryQueryVariables = Exact<{
  input: GetGenericPageInput
}>

export type GetGenericPageQueryQuery = {
  __typename?: 'Query'
  getGenericPage?: {
    __typename?: 'GenericPage'
    slug: string
    title: string
    intro?: string | null
    mainContent?: string | null
    sidebar?: string | null
    misc?: string | null
  } | null
}

export type DiscountsQueryQueryVariables = Exact<{ [key: string]: never }>

export type DiscountsQueryQuery = {
  __typename?: 'Query'
  discounts?: Array<{
    __typename?: 'Discount'
    discountCode: string
    expiresIn: number
    nationalId: string
    connectionDiscountCodes: Array<{
      __typename?: 'ConnectionDiscountCode'
      code: string
      flightDesc: string
      validUntil: string
    }>
    user: {
      __typename?: 'User'
      nationalId: string
      name: string
      meetsADSRequirements: boolean
      fund?: {
        __typename?: 'Fund'
        used: number
        credit: number
        total: number
      } | null
    }
  }> | null
}

export type UserFlightLegsQueryQueryVariables = Exact<{ [key: string]: never }>

export type UserFlightLegsQueryQuery = {
  __typename?: 'Query'
  user?: {
    __typename?: 'User'
    nationalId: string
    flightLegs: Array<{
      __typename?: 'FlightLeg'
      id: string
      travel: string
      flight: {
        __typename?: 'Flight'
        id: string
        bookingDate: string
        user: { __typename?: 'User'; nationalId: string; name: string }
      }
    }>
  } | null
}

export const GetMenuDocument = gql`
  query GetMenu($input: GetMenuInput!) {
    getMenu(input: $input) {
      title
      links {
        text
        url
      }
    }
  }
`

/**
 * __useGetMenuQuery__
 *
 * To run a query within a React component, call `useGetMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMenuQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMenuQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetMenuQuery(
  baseOptions: Apollo.QueryHookOptions<GetMenuQuery, GetMenuQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options,
  )
}
export function useGetMenuLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMenuQuery,
    GetMenuQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetMenuQuery, GetMenuQueryVariables>(
    GetMenuDocument,
    options,
  )
}
export type GetMenuQueryHookResult = ReturnType<typeof useGetMenuQuery>
export type GetMenuLazyQueryHookResult = ReturnType<typeof useGetMenuLazyQuery>
export type GetMenuQueryResult = Apollo.QueryResult<
  GetMenuQuery,
  GetMenuQueryVariables
>
export const GetNamespaceDocument = gql`
  query GetNamespace($input: GetNamespaceInput!) {
    getNamespace(input: $input) {
      fields
    }
  }
`

/**
 * __useGetNamespaceQuery__
 *
 * To run a query within a React component, call `useGetNamespaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNamespaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNamespaceQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetNamespaceQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetNamespaceQuery,
    GetNamespaceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetNamespaceQuery, GetNamespaceQueryVariables>(
    GetNamespaceDocument,
    options,
  )
}
export function useGetNamespaceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNamespaceQuery,
    GetNamespaceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetNamespaceQuery, GetNamespaceQueryVariables>(
    GetNamespaceDocument,
    options,
  )
}
export type GetNamespaceQueryHookResult = ReturnType<
  typeof useGetNamespaceQuery
>
export type GetNamespaceLazyQueryHookResult = ReturnType<
  typeof useGetNamespaceLazyQuery
>
export type GetNamespaceQueryResult = Apollo.QueryResult<
  GetNamespaceQuery,
  GetNamespaceQueryVariables
>
export const CurrentUserQueryDocument = gql`
  query CurrentUserQuery {
    user {
      nationalId
      name
      mobile
      role
    }
  }
`

/**
 * __useCurrentUserQueryQuery__
 *
 * To run a query within a React component, call `useCurrentUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CurrentUserQueryQuery, CurrentUserQueryQueryVariables>(
    CurrentUserQueryDocument,
    options,
  )
}
export function useCurrentUserQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    CurrentUserQueryQuery,
    CurrentUserQueryQueryVariables
  >(CurrentUserQueryDocument, options)
}
export type CurrentUserQueryQueryHookResult = ReturnType<
  typeof useCurrentUserQueryQuery
>
export type CurrentUserQueryLazyQueryHookResult = ReturnType<
  typeof useCurrentUserQueryLazyQuery
>
export type CurrentUserQueryQueryResult = Apollo.QueryResult<
  CurrentUserQueryQuery,
  CurrentUserQueryQueryVariables
>
export const FlightLegsQueryDocument = gql`
  query FlightLegsQuery($input: FlightLegsInput!) {
    flightLegs(input: $input) {
      id
      travel
      airline
      cooperation
      originalPrice
      discountPrice
      financialState
      flight {
        id
        bookingDate
        userInfo {
          age
          gender
          postalCode
        }
      }
    }
  }
`

/**
 * __useFlightLegsQueryQuery__
 *
 * To run a query within a React component, call `useFlightLegsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlightLegsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlightLegsQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFlightLegsQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    FlightLegsQueryQuery,
    FlightLegsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FlightLegsQueryQuery, FlightLegsQueryQueryVariables>(
    FlightLegsQueryDocument,
    options,
  )
}
export function useFlightLegsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FlightLegsQueryQuery,
    FlightLegsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    FlightLegsQueryQuery,
    FlightLegsQueryQueryVariables
  >(FlightLegsQueryDocument, options)
}
export type FlightLegsQueryQueryHookResult = ReturnType<
  typeof useFlightLegsQueryQuery
>
export type FlightLegsQueryLazyQueryHookResult = ReturnType<
  typeof useFlightLegsQueryLazyQuery
>
export type FlightLegsQueryQueryResult = Apollo.QueryResult<
  FlightLegsQueryQuery,
  FlightLegsQueryQueryVariables
>
export const ConfirmInvoiceMutationDocument = gql`
  mutation ConfirmInvoiceMutation($input: ConfirmInvoiceInput!) {
    confirmInvoice(input: $input) {
      id
      financialState
    }
  }
`
export type ConfirmInvoiceMutationMutationFn = Apollo.MutationFunction<
  ConfirmInvoiceMutationMutation,
  ConfirmInvoiceMutationMutationVariables
>

/**
 * __useConfirmInvoiceMutationMutation__
 *
 * To run a mutation, you first call `useConfirmInvoiceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmInvoiceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmInvoiceMutationMutation, { data, loading, error }] = useConfirmInvoiceMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useConfirmInvoiceMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ConfirmInvoiceMutationMutation,
    ConfirmInvoiceMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    ConfirmInvoiceMutationMutation,
    ConfirmInvoiceMutationMutationVariables
  >(ConfirmInvoiceMutationDocument, options)
}
export type ConfirmInvoiceMutationMutationHookResult = ReturnType<
  typeof useConfirmInvoiceMutationMutation
>
export type ConfirmInvoiceMutationMutationResult = Apollo.MutationResult<ConfirmInvoiceMutationMutation>
export type ConfirmInvoiceMutationMutationOptions = Apollo.BaseMutationOptions<
  ConfirmInvoiceMutationMutation,
  ConfirmInvoiceMutationMutationVariables
>
export const CreateExplicitDiscountCodeMutationDocument = gql`
  mutation CreateExplicitDiscountCodeMutation(
    $input: CreateExplicitDiscountCodeInput!
  ) {
    createExplicitDiscountCode(input: $input) {
      discountCode
    }
  }
`
export type CreateExplicitDiscountCodeMutationMutationFn = Apollo.MutationFunction<
  CreateExplicitDiscountCodeMutationMutation,
  CreateExplicitDiscountCodeMutationMutationVariables
>

/**
 * __useCreateExplicitDiscountCodeMutationMutation__
 *
 * To run a mutation, you first call `useCreateExplicitDiscountCodeMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExplicitDiscountCodeMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExplicitDiscountCodeMutationMutation, { data, loading, error }] = useCreateExplicitDiscountCodeMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExplicitDiscountCodeMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateExplicitDiscountCodeMutationMutation,
    CreateExplicitDiscountCodeMutationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateExplicitDiscountCodeMutationMutation,
    CreateExplicitDiscountCodeMutationMutationVariables
  >(CreateExplicitDiscountCodeMutationDocument, options)
}
export type CreateExplicitDiscountCodeMutationMutationHookResult = ReturnType<
  typeof useCreateExplicitDiscountCodeMutationMutation
>
export type CreateExplicitDiscountCodeMutationMutationResult = Apollo.MutationResult<CreateExplicitDiscountCodeMutationMutation>
export type CreateExplicitDiscountCodeMutationMutationOptions = Apollo.BaseMutationOptions<
  CreateExplicitDiscountCodeMutationMutation,
  CreateExplicitDiscountCodeMutationMutationVariables
>
export const GetGenericPageDocument = gql`
  query getGenericPage($input: GetGenericPageInput!) {
    getGenericPage(input: $input) {
      slug
      title
      intro
      mainContent
      sidebar
      misc
    }
  }
`

/**
 * __useGetGenericPageQuery__
 *
 * To run a query within a React component, call `useGetGenericPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenericPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenericPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenericPageQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGenericPageQuery,
    GetGenericPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetGenericPageQuery, GetGenericPageQueryVariables>(
    GetGenericPageDocument,
    options,
  )
}
export function useGetGenericPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGenericPageQuery,
    GetGenericPageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetGenericPageQuery, GetGenericPageQueryVariables>(
    GetGenericPageDocument,
    options,
  )
}
export type GetGenericPageQueryHookResult = ReturnType<
  typeof useGetGenericPageQuery
>
export type GetGenericPageLazyQueryHookResult = ReturnType<
  typeof useGetGenericPageLazyQuery
>
export type GetGenericPageQueryResult = Apollo.QueryResult<
  GetGenericPageQuery,
  GetGenericPageQueryVariables
>
export const GetGenericPageQueryDocument = gql`
  query getGenericPageQuery($input: GetGenericPageInput!) {
    getGenericPage(input: $input) {
      slug
      title
      intro
      mainContent
      sidebar
      misc
    }
  }
`

/**
 * __useGetGenericPageQueryQuery__
 *
 * To run a query within a React component, call `useGetGenericPageQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenericPageQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenericPageQueryQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGenericPageQueryQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetGenericPageQueryQuery,
    GetGenericPageQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetGenericPageQueryQuery,
    GetGenericPageQueryQueryVariables
  >(GetGenericPageQueryDocument, options)
}
export function useGetGenericPageQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetGenericPageQueryQuery,
    GetGenericPageQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetGenericPageQueryQuery,
    GetGenericPageQueryQueryVariables
  >(GetGenericPageQueryDocument, options)
}
export type GetGenericPageQueryQueryHookResult = ReturnType<
  typeof useGetGenericPageQueryQuery
>
export type GetGenericPageQueryLazyQueryHookResult = ReturnType<
  typeof useGetGenericPageQueryLazyQuery
>
export type GetGenericPageQueryQueryResult = Apollo.QueryResult<
  GetGenericPageQueryQuery,
  GetGenericPageQueryQueryVariables
>
export const DiscountsQueryDocument = gql`
  query DiscountsQuery {
    discounts {
      connectionDiscountCodes {
        code
        flightDesc
        validUntil
      }
      discountCode
      expiresIn
      nationalId
      user {
        nationalId
        name
        fund {
          used
          credit
          total
        }
        meetsADSRequirements
      }
    }
  }
`

/**
 * __useDiscountsQueryQuery__
 *
 * To run a query within a React component, call `useDiscountsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useDiscountsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDiscountsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useDiscountsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    DiscountsQueryQuery,
    DiscountsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<DiscountsQueryQuery, DiscountsQueryQueryVariables>(
    DiscountsQueryDocument,
    options,
  )
}
export function useDiscountsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    DiscountsQueryQuery,
    DiscountsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<DiscountsQueryQuery, DiscountsQueryQueryVariables>(
    DiscountsQueryDocument,
    options,
  )
}
export type DiscountsQueryQueryHookResult = ReturnType<
  typeof useDiscountsQueryQuery
>
export type DiscountsQueryLazyQueryHookResult = ReturnType<
  typeof useDiscountsQueryLazyQuery
>
export type DiscountsQueryQueryResult = Apollo.QueryResult<
  DiscountsQueryQuery,
  DiscountsQueryQueryVariables
>
export const UserFlightLegsQueryDocument = gql`
  query UserFlightLegsQuery {
    user {
      nationalId
      flightLegs {
        id
        travel
        flight {
          id
          bookingDate
          user {
            nationalId
            name
          }
        }
      }
    }
  }
`

/**
 * __useUserFlightLegsQueryQuery__
 *
 * To run a query within a React component, call `useUserFlightLegsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserFlightLegsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserFlightLegsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserFlightLegsQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    UserFlightLegsQueryQuery,
    UserFlightLegsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    UserFlightLegsQueryQuery,
    UserFlightLegsQueryQueryVariables
  >(UserFlightLegsQueryDocument, options)
}
export function useUserFlightLegsQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UserFlightLegsQueryQuery,
    UserFlightLegsQueryQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    UserFlightLegsQueryQuery,
    UserFlightLegsQueryQueryVariables
  >(UserFlightLegsQueryDocument, options)
}
export type UserFlightLegsQueryQueryHookResult = ReturnType<
  typeof useUserFlightLegsQueryQuery
>
export type UserFlightLegsQueryLazyQueryHookResult = ReturnType<
  typeof useUserFlightLegsQueryLazyQuery
>
export type UserFlightLegsQueryQueryResult = Apollo.QueryResult<
  UserFlightLegsQueryQuery,
  UserFlightLegsQueryQueryVariables
>
