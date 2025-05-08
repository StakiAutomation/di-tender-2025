import {Field, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class PersonDto {
  @Field()
  kennitala!: string;

  @Field()
  nafn!: string;

  @Field()
  heimilisfang!: string;

  @Field()
  tegund!: string;
}

@ObjectType()
export class TaxPayerDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  kennitala!: string;

  @Field()
  netfang!: string;

  @Field()
  simanumer!: string;

  @Field()
  person!: PersonDto;
}

@ObjectType()
export class StatusDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  nafn!: string;

  @Field()
  kodi!: string;
}

@ObjectType()
export class AssetTypeDto {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  nafn?: string;
}

@ObjectType()
export class FormDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  numer!: string;

  @Field()
  nafn!: string;
}

@ObjectType()
export class FormFieldGroupDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  numer!: string;

  @Field()
  nafn?: string;

  @Field()
  eydublad?: FormDto;
}

@ObjectType()
export class FormFieldDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  numer!: string;

  @Field({nullable: true})
  nafn?: string;

  @Field({nullable: true})
  lysing?: string;

  @Field({nullable: true})
  hopur?: FormFieldGroupDto;
}

@ObjectType()
export class AssetDto {
  @Field({nullable: true})
  id?: number;

  @Field({nullable: true})
  tegund?: AssetTypeDto;

  @Field({nullable: true})
  titill?: string;

  @Field({nullable: true})
  numer?: string;

  @Field({nullable: true})
  heimilisfang?: string;

  @Field({nullable: true})
  kaupar?: string;

  @Field()
  upphaed!: number;

  @Field()
  reitur!: FormFieldDto;
}

@ObjectType()
export class IncomeDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  titill!: string;

  @Field()
  upphaed!: number;

  @Field()
  reitur!: FormFieldDto;

  @Field({nullable: true})
  kennitala_greidanda?: string;

  @Field({nullable: true})
  greidandi?: PersonDto;
}

@ObjectType()
export class DebtTypeDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  nafn!: string;
}

@ObjectType()
export class DebtDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  tegund!: DebtTypeDto;

  @Field({nullable: true})
  titill?: string;

  @Field()
  vaxtagjold!: number;

  @Field()
  eftirstodvar!: number;

  @Field({nullable: true})
  kaupar?: string;

  @Field({nullable: true})
  stadsetning?: string;

  @Field({nullable: true})
  fastanumer?: string;

  @Field({nullable: true})
  kennitala_lanveitanda?: string;

  @Field({nullable: true})
  lanveitandi?: PersonDto;

  @Field({nullable: true})
  lansnumer?: string;

  @Field({nullable: true})
  lantokudagur?: string;

  @Field({nullable: true})
  lanstimi_i_arum?: number;

  @Field({nullable: true})
  heildargreidslur_arsins?: number;

  @Field({nullable: true})
  afborgun_nafnverd?: number;
}

@ObjectType()
export class TaxReturnDto {
  @Field({nullable: true})
  id?: number;

  @Field()
  skattgreidandi!: TaxPayerDto;

  @Field({nullable: true})
  ar?: string;

  @Field()
  eitt_uppgjor!: boolean;

  @Field()
  slysatrygging_heimilisstorf!: boolean;

  @Field({nullable: true})
  fjolskyldumerking?: string;

  @Field()
  stada!: StatusDto;

  @Field(() => [AssetDto])
  eignir!: AssetDto[];

  @Field(() => [IncomeDto])
  tekjur!: IncomeDto[];

  @Field(() => [DebtDto])
  skuldir!: DebtDto[];
}
