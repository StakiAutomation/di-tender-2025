import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaxReturnsModule } from './taxreturns/taxreturns.module';
import { dataSourceOptions } from '@rsk-api/data/config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), TaxReturnsModule],
})
export class AppModule {}
