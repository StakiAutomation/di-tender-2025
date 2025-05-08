import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import { TaxReturnsService } from "./taxreturns.service";
import { TaxReturnDto } from "./models/taxreturns.model";
import { TaxReturnInput } from "./models/taxreturns.inputmodel";




// @Authorize({
//   roles: [Role.developer, Role.recyclingCompany, Role.recyclingCompanyAdmin],
// })
@Resolver(() => TaxReturnDto)
export class TaxReturnsResolver {
  constructor(private taxReturnsService: TaxReturnsService) {}

  @Query(() => TaxReturnDto)
  async getCurrentTaxReturn(
    // @CurrentUser() user: User,
    // @Args('vehiclePermno') permno: string,
    @Args('kennitala') kennitala: string,
  ): Promise<TaxReturnDto> {
    return await this.taxReturnsService.getCurrentTaxReturnRest(kennitala);
  }

  @Query(() => [TaxReturnDto])
  async getPreviousTaxReturns(
      @Args('kennitala') kennitala: string,
  ): Promise<TaxReturnDto[]> {
    return await this.taxReturnsService.getPreviousTaxReturnsRest(kennitala);
  }


  @Mutation(() => Boolean)
  async updateCurrentTaxReturn(
      @Args({ name: 'taxReturn', type: () => TaxReturnInput })
      taxReturn: TaxReturnInput,

  ) {
    return await this.taxReturnsService.updateCurrentTaxReturn(taxReturn);
  }

  @Mutation(() => Boolean)
  async submitCurrentTaxReturn(
      @Args('kennitala') kennitala: string,
  ) {
    return await this.taxReturnsService.submitCurrentTaxReturn(kennitala);
  }
}
