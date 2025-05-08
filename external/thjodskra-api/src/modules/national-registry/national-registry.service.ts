import { NationalRegistry } from '@national-registry-api/entities/national-registry.entity';
import { NationalRegistryEntryMapper } from '@national-registry-api/models/mappers/national-registry-entry.mapper';
import { NationalRegistryEntryDto } from '@national-registry-api/models/national-registry-entry-dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NationalRegistryService {
  constructor(
    @InjectRepository(NationalRegistry)
    private nationalRegistryRepository: Repository<NationalRegistry>,
  ) {}

  async getCopyOfNationalRegistry(): Promise<NationalRegistryEntryDto[]> {
    const entries = await this.nationalRegistryRepository.find({
      relations: {
        gender: true,
        address: true,
        type: true,
      },
    });

    return entries.map((entry) => NationalRegistryEntryMapper.toDto(entry));
  }

  async getEntriesByFilter(
    filter: string,
  ): Promise<NationalRegistryEntryDto[]> {
    const entries = await this.nationalRegistryRepository
      .createQueryBuilder('registry')
      .leftJoinAndSelect('registry.gender', 'gender')
      .leftJoinAndSelect('registry.address', 'address')
      .leftJoinAndSelect('registry.type', 'type')
      .where('registry.kennitala LIKE :kennitalaFilter', {
        kennitalaFilter: `%${filter}%`,
      })
      .orWhere('LOWER(registry.nafn) LIKE LOWER(:nameFilter)', {
        nameFilter: `%${filter}%`,
      })
      .getMany();

    return entries.map((e) => NationalRegistryEntryMapper.toDto(e));
  }
}
