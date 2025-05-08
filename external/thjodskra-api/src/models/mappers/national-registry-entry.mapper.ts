/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NationalRegistry } from '@national-registry-api/entities/national-registry.entity';
import { NationalRegistryEntryDto } from '../national-registry-entry-dto';

export class NationalRegistryEntryMapper {
  static toDto(entity: NationalRegistry): NationalRegistryEntryDto {
    return {
      nationalId: entity.kennitala,
      name: entity.nafn,
      genderName: entity.gender.nafn,
      genderCode: entity.gender.kodi,
      streetName: entity.address.gotuheiti,
      houseNumber: entity.address.husnumer,
      postalCode: entity.address.postnumer,
      municipality: entity.address.baejarfelag,
      country: entity.address.land,
      countryCode: entity.address.landkodi,
      typeName: entity.type.nafn,
      typeCode: entity.type.kodi,
    };
  }
}
