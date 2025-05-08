export type Query = {
  taxReturn: TaxReturn | null
}

export type TaxReturn = {
  id: string
  skattgreidandi: Skattgreidandi
  ar: string
  eitt_uppgjor: boolean
  slysatrygging_heimilisstorf: boolean
  fjolskyldumerking: string
  stada: Stada
  eignir: Eign[]
  tekjur: Tekjur[]
  skuldir: Skuld[]
}

export type Skattgreidandi = {
  id: string
  kennitala: string
  netfang: string
  simanumer: string
  person: Person
}

export type Person = {
  kennitala: string
  nafn: string
  heimilisfang: string
  tegund: string
}

export type Stada = {
  id: string
  nafn: string
  kodi: string
}

export type Eign = {
  id: string
  tegund: Tegund
  titill: string | null
  numer: string | null
  heimilisfang: string | null
  kaupar: string | null
  upphaed: number
  reitur: Reitur
}

export type Tegund = {
  id: string
  nafn: string
}

export type Reitur = {
  id: string
  numer: string
  nafn: string | null
  lysing: string | null
  hopur: Hopur
}

export type Hopur = {
  id: string
  numer: string
  nafn: string
  eydublad: Eydublad
}

export type Eydublad = {
  id: string
  numer: string
  nafn: string
}

export type Tekjur = {
  id: string
  titill: string
  upphaed: number
  reitur: Reitur
  kennitala_greidanda: string | null
  greidandi: Greidandi | null
}

export type Greidandi = {
  kennitala: string
  nafn: string
  heimilisfang: string
  tegund: string
}

export type Skuld = {
  id: string
  tegund: Tegund
  titill: string | null
  vaxtagjold: number | null
  eftirstodvar: number | null
  kaupar: string | null
  stadsetning: string | null
  fastanumer: string | null
  kennitala_lanveitanda: string | null
  lanveitandi: Lanveitandi | null
  lansnumer: string | null
  lantokudagur: string | null
  lanstimi_i_arum: number | null
  heildargreidslur_arsins: number | null
  afborgun_nafnverd: number | null
}

export type Lanveitandi = {
  kennitala: string
  nafn: string
  heimilisfang: string
  tegund: string
}

export type FieldType = {
  fieldNo: string
  title: string
  value: string
  text?: string
}

export class TaxReturnDto {
  kennitala!: string
  eitt_uppgjor!: boolean
  slysatrygging_heimilisstorf!: boolean
  tekjur?: IncomeDto[]
  eignir?: AssetDto[]
  skuldir?: DebtDto[]
}

export class IncomeDto {
  titill!: string
  upphaed!: number
  reitur!: string
  kennitala_greidanda?: string
  greidandi?: string
}

export class AssetDto {
  titill!: string
  upphaed!: number
  reitur!: number
}

export class DebtDto {
  id?: number
  titill!: string
  upphaed!: number
  reitur!: number
  kennitala_greidanda?: string
  greidandi?: string
}
