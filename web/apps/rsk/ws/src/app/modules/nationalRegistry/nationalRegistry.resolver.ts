import {Args, Query, Resolver} from "@nestjs/graphql";
import {NationalRegistryEntryDto} from "./nationalRegistry.model";
import { NationalRegistryService } from "./nationalRegistry.service";

@Resolver(() => NationalRegistryEntryDto)
export class NationalRegistryResolver {
  constructor(private nationalRegistryService: NationalRegistryService) {}

  @Query(() => [NationalRegistryEntryDto])
  async getFromNationalRegistry(
    // @CurrentUser() user: User,
    // @Args('vehiclePermno') permno: string,
    @Args('kennitala') kennitala: string,
  ): Promise<NationalRegistryEntryDto[]> {

    const dto = await this.nationalRegistryService.getInfoForKennitala(kennitala);
    return dto;
    // const entry = new NationalRegistryEntry(dto);
    // return entry;
  }
}
