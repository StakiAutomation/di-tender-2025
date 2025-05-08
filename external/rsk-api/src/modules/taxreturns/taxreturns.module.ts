import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  TaxReturn,
  TaxPayer,
  Asset,
  Income,
  Debt,
  FormField,
} from '@rsk-api/entities';
import { TaxReturnsController } from './taxreturns.controller';
import { TaxReturnsService } from './taxreturns.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TaxReturn,
      TaxPayer,
      Asset,
      Income,
      Debt,
      FormField,
    ]),
  ],
  controllers: [TaxReturnsController],
  providers: [TaxReturnsService],
})
export class TaxReturnsModule {}
