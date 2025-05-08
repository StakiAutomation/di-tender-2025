import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalRegistryModule } from './national-registry/national-registry.module';
import { dataSourceOptions } from '@national-registry-api/data/config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), NationalRegistryModule],
})
export class AppModule {}
