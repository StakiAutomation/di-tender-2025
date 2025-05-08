import { Test, TestingModule } from '@nestjs/testing';
import { NationalRegistryService } from './national-registry.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NationalRegistry } from '@national-registry-api/entities/national-registry.entity';
import { Repository } from 'typeorm';
import { NationalRegistryEntryMapper } from '@national-registry-api/models/mappers/national-registry-entry.mapper';
import { NationalRegistryEntryDto } from '@national-registry-api/models/national-registry-entry-dto';

describe('NationalRegistryService', () => {
  let service: NationalRegistryService;
  let repository: MockType<Repository<NationalRegistry>>;

  // Create a mock type for Repository
  type MockType<T> = {
    [P in keyof T]?: jest.Mock;
  };

  // Mock data
  const mockNationalRegistryEntry = {
    id: 1,
    kennitala: '1234567890',
    nafn: 'Jón Jónsson',
    gender: {
      id: 1,
      lysing: 'Karl',
    },
    address: {
      id: 1,
      heimilisfang: 'Laugavegur 1',
      postnumer: '101',
      stadur: 'Reykjavík',
    },
    type: {
      id: 1,
      lysing: 'Einstaklingur',
    },
  };

  const mockNationalRegistryEntryDto: NationalRegistryEntryDto = {
    nationalId: '1234567890',
    name: 'Jón Jónsson',
    genderName: 'Karl',
    streetName: 'Laugavegur',
    houseNumber: '1',
    postalCode: 101,
    municipality: 'Reykjavík',
    typeName: 'Einstaklingur',
    genderCode: 'KK',
    country: 'Ísland',
    countryCode: 'ISK',
    typeCode: 'einstaklingur',
  };

  // Create repository mock factory
  const repositoryMockFactory: () => MockType<Repository<NationalRegistry>> =
    jest.fn(() => ({
      find: jest.fn(),
      createQueryBuilder: jest.fn(),
    }));

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NationalRegistryService,
        {
          provide: getRepositoryToken(NationalRegistry),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<NationalRegistryService>(NationalRegistryService);
    repository = module.get(getRepositoryToken(NationalRegistry));
  });

  describe('getCopyOfNationalRegistry', () => {
    it('should return all national registry entries', async () => {
      const mockEntries = [mockNationalRegistryEntry];
      repository.find!.mockResolvedValue(mockEntries);

      jest
        .spyOn(NationalRegistryEntryMapper, 'toDto')
        .mockReturnValue(mockNationalRegistryEntryDto);

      const result = await service.getCopyOfNationalRegistry();

      expect(result).toEqual([mockNationalRegistryEntryDto]);
      expect(repository.find).toHaveBeenCalledWith({
        relations: {
          gender: true,
          address: true,
          type: true,
        },
      });
    });

    it('should return empty array when no entries exist', async () => {
      repository.find!.mockResolvedValue([]);

      const result = await service.getCopyOfNationalRegistry();

      expect(result).toEqual([]);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('getEntryByFilter', () => {
    const mockQueryBuilder = {
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      orWhere: jest.fn().mockReturnThis(),
      getOne: jest.fn(),
    };

    beforeEach(() => {
      repository.createQueryBuilder!.mockReturnValue(mockQueryBuilder);
    });

    it('should return entry when searching by kennitala', async () => {
      const filter = '1234567890';
      mockQueryBuilder.getOne.mockResolvedValue(mockNationalRegistryEntry);

      jest
        .spyOn(NationalRegistryEntryMapper, 'toDto')
        .mockReturnValue(mockNationalRegistryEntryDto);

      const result = await service.getEntriesByFilter(filter);

      expect(result).toEqual(mockNationalRegistryEntryDto);
      expect(repository.createQueryBuilder).toHaveBeenCalledWith('registry');
      expect(mockQueryBuilder.where).toHaveBeenCalledWith(
        'registry.kennitala LIKE :kennitalaFilter',
        { kennitalaFilter: `%${filter}%` },
      );
      expect(mockQueryBuilder.orWhere).toHaveBeenCalledWith(
        'LOWER(registry.nafn) LIKE LOWER(:nameFilter)',
        { nameFilter: `%${filter}%` },
      );
    });

    it('should return entry when searching by name', async () => {
      const filter = 'Jón';
      mockQueryBuilder.getOne.mockResolvedValue(mockNationalRegistryEntry);

      jest
        .spyOn(NationalRegistryEntryMapper, 'toDto')
        .mockReturnValue(mockNationalRegistryEntryDto);

      const result = await service.getEntriesByFilter(filter);

      expect(result).toEqual(mockNationalRegistryEntryDto);
      expect(mockQueryBuilder.orWhere).toHaveBeenCalledWith(
        'LOWER(registry.nafn) LIKE LOWER(:nameFilter)',
        { nameFilter: `%${filter}%` },
      );
    });

    it('should handle case-insensitive name search', async () => {
      const filter = 'jón';
      mockQueryBuilder.getOne.mockResolvedValue(mockNationalRegistryEntry);

      await service.getEntriesByFilter(filter);

      expect(mockQueryBuilder.orWhere).toHaveBeenCalledWith(
        'LOWER(registry.nafn) LIKE LOWER(:nameFilter)',
        { nameFilter: `%${filter}%` },
      );
    });
  });

  // Additional test for error handling
  describe('error handling', () => {
    it('should handle repository errors in getCopyOfNationalRegistry', async () => {
      repository.find!.mockRejectedValue(new Error('Database error'));

      await expect(service.getCopyOfNationalRegistry()).rejects.toThrow(
        'Database error',
      );
    });

    it('should handle repository errors in getEntryByFilter', async () => {
      const mockQueryBuilder = {
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        where: jest.fn().mockReturnThis(),
        orWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockRejectedValue(new Error('Database error')),
      };

      repository.createQueryBuilder!.mockReturnValue(mockQueryBuilder);

      await expect(service.getEntriesByFilter('test')).rejects.toThrow(
        'Database error',
      );
    });
  });
});
