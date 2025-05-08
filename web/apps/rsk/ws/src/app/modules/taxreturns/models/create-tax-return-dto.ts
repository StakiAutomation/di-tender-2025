import { ApiProperty } from '@nestjs/swagger';

class CreateAssetDto {
  @ApiProperty({ description: 'Asset type ID' })
  tegund_id!: number;

  @ApiProperty({ required: false, description: 'Asset title' })
  titill?: string;

  @ApiProperty({ required: false, description: 'Asset number' })
  numer?: string;

  @ApiProperty({ required: false, description: 'Asset address' })
  heimilisfang?: string;

  @ApiProperty({ required: false, description: 'Purchase date' })
  kaupar?: string;

  @ApiProperty({ description: 'Asset value' })
  upphaed!: number;

  @ApiProperty({ description: 'Form field number' })
  reitur_number!: string;
}

class CreateIncomeDto {
  @ApiProperty({ description: 'Income title' })
  titill!: string;

  @ApiProperty({ description: 'Income amount' })
  upphaed!: number;

  @ApiProperty({ description: 'Form field number' })
  reitur_number!: string;

  @ApiProperty({ required: false, description: 'Payer national ID' })
  kennitala_greidanda?: string;
}

class CreateDebtDto {
  @ApiProperty({ description: 'Debt type ID' })
  skuldategund_id!: number;

  @ApiProperty({ required: false, description: 'Debt title' })
  titill?: string;

  @ApiProperty({ description: 'Interest paid' })
  vaxtagjold!: number;

  @ApiProperty({ description: 'Remaining balance' })
  eftirstodvar!: number;

  @ApiProperty({ required: false, description: 'Purchase date' })
  kaupar?: string;

  @ApiProperty({ required: false, description: 'Location' })
  stadsetning?: string;

  @ApiProperty({ required: false, description: 'Property number' })
  fastanumer?: string;

  @ApiProperty({ required: false, description: 'Lender national ID' })
  kennitala_lanveitanda?: string;

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

export class CreateTaxReturnDto {
  @ApiProperty({ description: 'Tax payer national id' })
  kennitala!: string;

  @ApiProperty({ required: false, description: 'Year' })
  ar?: string;

  @ApiProperty({ description: 'Single settlement' })
  eitt_uppgjor!: boolean;

  @ApiProperty({ description: 'Home accident insurance' })
  slysatrygging_heimilisstorf!: boolean;

  @ApiProperty({ required: false, description: 'Family marking' })
  fjolskyldumerking?: string;

  @ApiProperty({
    type: () => [CreateAssetDto],
    required: false,
    description: 'Assets',
  })
  eignir?: CreateAssetDto[];

  @ApiProperty({
    type: () => [CreateIncomeDto],
    required: false,
    description: 'Income',
  })
  tekjur?: CreateIncomeDto[];

  @ApiProperty({
    type: () => [CreateDebtDto],
    required: false,
    description: 'Debts',
  })
  skuldir?: CreateDebtDto[];
}
