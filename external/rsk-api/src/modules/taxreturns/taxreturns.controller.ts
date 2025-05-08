import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TaxReturnsService } from './taxreturns.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { TaxReturnDto } from '@rsk-api/models/tax-return-dto';
import { CreateTaxReturnDto } from '@rsk-api/models/create-tax-return-dto';

@Controller('taxreturns')
export class TaxReturnsController {
  constructor(private readonly taxReturnsService: TaxReturnsService) {}

  @Get(':nationalId')
  @ApiOperation({ summary: 'Get all tax returns' })
  @ApiResponse({
    status: 200,
    description: 'Returns all tax returns',
    type: [TaxReturnDto],
  })
  getTaxReturns(@Param('nationalId') nationalId: string) {
    return this.taxReturnsService.getTaxReturns(nationalId);
  }

  @Get('current/:nationalId')
  @ApiOperation({ summary: 'Get current tax return' })
  @ApiResponse({
    status: 200,
    description: 'Returns the current tax return',
    type: TaxReturnDto,
  })
  @ApiResponse({ status: 404, description: 'Tax return not found' })
  getCurrentTaxReturn(@Param('nationalId') nationalId: string) {
    return this.taxReturnsService.getCurrentTaxReturn(nationalId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a tax return' })
  @ApiResponse({
    status: 201,
    description: 'The tax return has been created',
    type: TaxReturnDto,
  })
  receiveTaxReturnApplication(@Body() createTaxReturnDto: CreateTaxReturnDto) {
    return this.taxReturnsService.receiveTaxReturnApplication(
      createTaxReturnDto,
    );
  }
}
