import { Controller, Get, Query } from '@nestjs/common';
import { NationalRegistryService } from './national-registry.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { NationalRegistryEntryDto } from '@national-registry-api/models/national-registry-entry-dto';

@Controller('')
export class NationalRegistryController {
  constructor(
    private readonly nationalRegistryService: NationalRegistryService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get a copy of national registry' })
  @ApiResponse({
    status: 200,
    description: 'Returns all entries from national registry',
    type: [NationalRegistryEntryDto],
  })
  getCopyOfNationalRegistry() {
    return this.nationalRegistryService.getCopyOfNationalRegistry();
  }

  @Get('filter')
  @ApiOperation({ summary: 'Get entries in national registry by filter' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of entries which matches a filter',
    type: NationalRegistryEntryDto,
  })
  getEntriesByFilter(@Query('filter') filter: string) {
    return this.nationalRegistryService.getEntriesByFilter(filter);
  }
}
