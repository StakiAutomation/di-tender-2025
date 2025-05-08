import {Field, ObjectType} from "@nestjs/graphql";
import {ApiProperty} from "@nestjs/swagger";

//
// @ObjectType()
// export class NationalRegistryEntry {
//   constructor(entryDto: NationalRegistryEntryDto) {
//     this.entryDto = entryDto;
//   }
//
//   @Field(() => NationalRegistryEntryDto)
//   entryDto!: NationalRegistryEntryDto
// }

@ObjectType()
export class NationalRegistryEntryDto {
  @Field()
  nationalId: string = "";

  @Field()
  name: string = "";

  @Field()
  genderName: string = "";

  @Field()
  genderCode: string = "";

  @Field()
  streetName: string = "";

  @Field()
  houseNumber: string = "";

  @Field()
  postalCode: number = 0;

  @Field()
  municipality: string = "";

  @Field()
  country: string = "";

  @Field()
  countryCode: string = "";

  @Field()
  typeName: string = "";

  @Field()
  typeCode: string = "";
}
