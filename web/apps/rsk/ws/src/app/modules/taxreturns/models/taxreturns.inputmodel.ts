import {Field, InputType} from "@nestjs/graphql";
import {AssetTypeDto, FormFieldDto} from "./taxreturns.model";


@InputType()
export class TaxReturnInput {
  @Field()
  kennitala!: string;

  @Field()
  eitt_uppgjor!: boolean;

  @Field()
  slysatrygging_heimilisstorf!: boolean;

  @Field(() => [IncomeInput], {nullable: true})
  tekjur?: IncomeInput[];

  @Field(() => [AssetInput], {nullable: true})
  eignir?: AssetInput[];

  @Field(() => [DebtInput], {nullable: true})
  skuldir?: DebtInput[];


}
@InputType()
export class IncomeInput {
  @Field()
  titill!: string;

  @Field()
  upphaed!: number;

  @Field()
  reitur!: string;

  @Field({nullable: true})
  kennitala_greidanda?: string;

  @Field({nullable: true})
  greidandi?: string;
}


@InputType()
export class AssetInput {
  @Field({nullable: true})
  tegund_id?: number;

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
  reitur!: string;
}

@InputType()
export class DebtInput {
  @Field()
  id?: number;

  @Field()
  titill!: string;

  @Field()
  upphaed!: number;

  @Field()
  reitur!: string;

  @Field({nullable: true})
  kennitala_greidanda?: string;

  @Field({nullable: true})
  greidandi?: string;
}
