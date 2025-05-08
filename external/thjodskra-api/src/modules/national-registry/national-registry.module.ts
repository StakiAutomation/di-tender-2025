import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NationalRegistryController } from './national-registry.controller';
import { NationalRegistryService } from './national-registry.service';
import { NationalRegistry } from '@national-registry-api/entities/national-registry.entity';
import { Address } from '@national-registry-api/entities/address.entity';
import { Type } from '@national-registry-api/entities/type.entity';
import { Gender } from '@national-registry-api/entities/gender.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([NationalRegistry, Address, Type, Gender]),
  ],
  controllers: [NationalRegistryController],
  providers: [NationalRegistryService],
})
export class NationalRegistryModule {}
