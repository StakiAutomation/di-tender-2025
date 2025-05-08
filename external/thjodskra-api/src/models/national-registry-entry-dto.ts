import { ApiProperty } from '@nestjs/swagger';

export class NationalRegistryEntryDto {
  @ApiProperty({ description: 'National ID (kennitala)' })
  nationalId: string;

  @ApiProperty({ description: 'Full name' })
  name: string;

  @ApiProperty({ description: 'Gender name' })
  genderName: string;

  @ApiProperty({ description: 'Gender code' })
  genderCode: string;

  @ApiProperty({ description: 'Street name' })
  streetName: string;

  @ApiProperty({ description: 'House number' })
  houseNumber: string;

  @ApiProperty({ description: 'Postal code' })
  postalCode: number;

  @ApiProperty({ description: 'Municipality' })
  municipality: string;

  @ApiProperty({ description: 'Country' })
  country: string;

  @ApiProperty({ description: 'Country code' })
  countryCode: string;

  @ApiProperty({ description: 'Type name' })
  typeName: string;

  @ApiProperty({ description: 'Type code' })
  typeCode: string;
}
