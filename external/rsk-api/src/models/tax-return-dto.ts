import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {
  @ApiProperty({ description: 'National ID (kennitala)' })
  kennitala: string;

  @ApiProperty({ description: 'Full name' })
  nafn: string;

  @ApiProperty({ description: 'Address' })
  heimilisfang: string;

  @ApiProperty({ description: 'Type of person' })
  tegund: string;
}

export class TaxPayerDto {
  @ApiProperty({ description: 'Tax payer ID' })
  id: number;

  @ApiProperty({ description: 'National ID (kennitala)' })
  kennitala: string;

  @ApiProperty({ description: 'Email address' })
  netfang: string;

  @ApiProperty({ description: 'Phone number' })
  simanumer: string;

  @ApiProperty({ type: PersonDto, description: 'Person details' })
  person: PersonDto;
}

export class StatusDto {
  @ApiProperty({ description: 'Status ID' })
  id: number;

  @ApiProperty({ description: 'Status name' })
  nafn: string;

  @ApiProperty({ description: 'Status code' })
  kodi: string;
}

export class AssetTypeDto {
  @ApiProperty({ description: 'Asset type ID' })
  id: number;

  @ApiProperty({ description: 'Asset type name' })
  nafn: string;
}

export class FormDto {
  @ApiProperty({ description: 'Form ID' })
  id: number;

  @ApiProperty({ description: 'Form number' })
  numer: string;

  @ApiProperty({ description: 'Form name' })
  nafn: string;
}

export class FormFieldGroupDto {
  @ApiProperty({ description: 'Field group ID' })
  id: number;

  @ApiProperty({ description: 'Group number' })
  numer: string;

  @ApiProperty({ description: 'Group name' })
  nafn: string;

  @ApiProperty({ type: FormDto, description: 'Form details' })
  eydublad: FormDto;
}

export class FormFieldDto {
  @ApiProperty({ description: 'Field ID' })
  id: number;

  @ApiProperty({ description: 'Field number' })
  numer: string;

  @ApiProperty({ description: 'Field name' })
  nafn: string;

  @ApiProperty({ required: false, description: 'Field description' })
  lysing?: string;

  @ApiProperty({ type: FormFieldGroupDto, description: 'Field group details' })
  hopur: FormFieldGroupDto;
}

export class AssetDto {
  @ApiProperty({ description: 'Asset ID' })
  id: number;

  @ApiProperty({ type: AssetTypeDto, description: 'Asset type details' })
  tegund: AssetTypeDto;

  @ApiProperty({ required: false, description: 'Asset title' })
  titill?: string;

  @ApiProperty({ required: false, description: 'Asset number' })
  numer?: string;

  @ApiProperty({ required: false, description: 'Asset address' })
  heimilisfang?: string;

  @ApiProperty({ required: false, description: 'Purchase date' })
  kaupar?: string;

  @ApiProperty({ description: 'Asset value' })
  upphaed: number;

  @ApiProperty({ type: FormFieldDto, description: 'Form field details' })
  reitur: FormFieldDto;
}

export class IncomeDto {
  @ApiProperty({ description: 'Income ID' })
  id: number;

  @ApiProperty({ description: 'Income title' })
  titill: string;

  @ApiProperty({ description: 'Income amount' })
  upphaed: number;

  @ApiProperty({ type: FormFieldDto, description: 'Form field details' })
  reitur: FormFieldDto;

  @ApiProperty({ required: false, description: 'Payer national ID' })
  kennitala_greidanda?: string;

  @ApiProperty({
    type: PersonDto,
    required: false,
    description: 'Payer details',
  })
  greidandi?: PersonDto;
}

export class DebtTypeDto {
  @ApiProperty({ description: 'Debt type ID' })
  id: number;

  @ApiProperty({ description: 'Debt type name' })
  nafn: string;
}

export class DebtDto {
  @ApiProperty({ description: 'Debt ID' })
  id: number;

  @ApiProperty({ type: DebtTypeDto, description: 'Debt type details' })
  tegund: DebtTypeDto;

  @ApiProperty({ required: false, description: 'Debt title' })
  titill?: string;

  @ApiProperty({ description: 'Interest paid' })
  vaxtagjold: number;

  @ApiProperty({ description: 'Remaining balance' })
  eftirstodvar: number;

  @ApiProperty({ required: false, description: 'Purchase date' })
  kaupar?: string;

  @ApiProperty({ required: false, description: 'Location' })
  stadsetning?: string;

  @ApiProperty({ required: false, description: 'Property number' })
  fastanumer?: string;

  @ApiProperty({ required: false, description: 'Lender national ID' })
  kennitala_lanveitanda?: string;

  @ApiProperty({
    type: PersonDto,
    required: false,
    description: 'Lender details',
  })
  lanveitandi?: PersonDto;

  @ApiProperty({ required: false, description: 'Loan number' })
  lansnumer?: string;

  @ApiProperty({ required: false, description: 'Loan date' })
  lantokudagur?: Date;

  @ApiProperty({ required: false, description: 'Loan term in years' })
  lanstimi_i_arum?: number;

  @ApiProperty({ required: false, description: 'Total payments for the year' })
  heildargreidslur_arsins?: number;

  @ApiProperty({ required: false, description: 'Principal payments' })
  afborgun_nafnverd?: number;
}

export class TaxReturnDto {
  @ApiProperty({ description: 'Tax return ID' })
  id: number;

  @ApiProperty({ type: TaxPayerDto, description: 'Tax payer details' })
  skattgreidandi: TaxPayerDto;

  @ApiProperty({ required: false, description: 'Year' })
  ar?: string;

  @ApiProperty({ required: false, description: 'Date of submission' })
  dags_stofnad?: Date;

  @ApiProperty({ description: 'Single settlement' })
  eitt_uppgjor: boolean;

  @ApiProperty({ description: 'Home accident insurance' })
  slysatrygging_heimilisstorf: boolean;

  @ApiProperty({ required: false, description: 'Family marking' })
  fjolskyldumerking?: string;

  @ApiProperty({ type: StatusDto, description: 'Status details' })
  stada: StatusDto;

  @ApiProperty({ type: [AssetDto], description: 'Assets' })
  eignir: AssetDto[];

  @ApiProperty({ type: [IncomeDto], description: 'Income' })
  tekjur: IncomeDto[];

  @ApiProperty({ type: [DebtDto], description: 'Debts' })
  skuldir: DebtDto[];
}
