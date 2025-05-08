/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import {
  TaxReturn,
  TaxPayer,
  Asset,
  Income,
  Debt,
  FormField,
} from '@rsk-api/entities';
import { Repository } from 'typeorm';
import { CreateTaxReturnDto } from '@rsk-api/models/create-tax-return-dto';
import { TaxReturnMapper } from '@rsk-api/models/mappers/tax-return.mapper';
import { TaxReturnsService } from './taxreturns.service';

describe('TaxReturnsService', () => {
  let service: TaxReturnsService;
  let taxReturnRepository: MockType<Repository<TaxReturn>>;
  let taxPayerRepository: MockType<Repository<TaxPayer>>;
  let assetRepository: MockType<Repository<Asset>>;
  let incomeRepository: MockType<Repository<Income>>;
  let debtRepository: MockType<Repository<Debt>>;
  let formFieldRepository: MockType<Repository<FormField>>;

  // Create a mock type for Repository
  type MockType<T> = {
    [P in keyof T]?: jest.Mock;
  };

  // Create repository mock factory
  const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
    () => ({
      findOne: jest.fn(),
      find: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      createQueryBuilder: jest.fn(),
    }),
  );

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaxReturnsService,
        {
          provide: getRepositoryToken(TaxReturn),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(TaxPayer),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Asset),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Income),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Debt),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(FormField),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<TaxReturnsService>(TaxReturnsService);
    taxReturnRepository = module.get(getRepositoryToken(TaxReturn));
    taxPayerRepository = module.get(getRepositoryToken(TaxPayer));
    assetRepository = module.get(getRepositoryToken(Asset));
    incomeRepository = module.get(getRepositoryToken(Income));
    debtRepository = module.get(getRepositoryToken(Debt));
    formFieldRepository = module.get(getRepositoryToken(FormField));
  });

  describe('getTaxReturns', () => {
    const mockNationalId = '1234567890';
    const mockTaxPayer = { id: 1, kennitala: mockNationalId };
    const mockQueryBuilder = {
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      addOrderBy: jest.fn().mockReturnThis(),
      subQuery: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      from: jest.fn().mockReturnThis(),
      getQuery: jest.fn().mockReturnThis(),
      getMany: jest.fn(),
    };

    it('should throw NotFoundException when taxpayer not found', async () => {
      taxPayerRepository.findOne!.mockResolvedValue(null);

      await expect(service.getTaxReturns(mockNationalId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return tax returns for valid taxpayer', async () => {
      const mockTaxReturns = [
        { id: 1, ar: '2024' },
        { id: 2, ar: '2023' },
      ];

      taxPayerRepository.findOne!.mockResolvedValue(mockTaxPayer);
      taxReturnRepository.createQueryBuilder!.mockReturnValue(mockQueryBuilder);
      mockQueryBuilder.getMany.mockResolvedValue(mockTaxReturns);

      jest
        .spyOn(TaxReturnMapper, 'toDto')
        .mockImplementation((tr) => tr as any);

      const result = await service.getTaxReturns(mockNationalId);

      expect(result).toEqual(mockTaxReturns);
      expect(taxPayerRepository.findOne).toHaveBeenCalledWith({
        where: { kennitala: mockNationalId },
      });
    });
  });

  describe('getCurrentTaxReturn', () => {
    const mockNationalId = '1234567890';
    const mockTaxPayer = { id: 1, kennitala: mockNationalId };
    const currentYear = new Date().getFullYear().toString();
    const mockQueryBuilder = {
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      take: jest.fn().mockReturnThis(),
      getOne: jest.fn(),
    };

    it('should throw NotFoundException when taxpayer not found', async () => {
      taxPayerRepository.findOne!.mockResolvedValue(null);

      await expect(service.getCurrentTaxReturn(mockNationalId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw NotFoundException when current year tax return not found', async () => {
      taxPayerRepository.findOne!.mockResolvedValue(mockTaxPayer);
      taxReturnRepository.createQueryBuilder!.mockReturnValue(mockQueryBuilder);
      mockQueryBuilder.getOne.mockResolvedValue(null);

      await expect(service.getCurrentTaxReturn(mockNationalId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should return current year tax return when found', async () => {
      const mockTaxReturn = { id: 1, ar: currentYear };

      taxPayerRepository.findOne!.mockResolvedValue(mockTaxPayer);
      taxReturnRepository.createQueryBuilder!.mockReturnValue(mockQueryBuilder);
      mockQueryBuilder.getOne.mockResolvedValue(mockTaxReturn);

      jest
        .spyOn(TaxReturnMapper, 'toDto')
        .mockImplementation((tr) => tr as any);

      const result = await service.getCurrentTaxReturn(mockNationalId);

      expect(result).toEqual(mockTaxReturn);
    });
  });

  describe('receiveTaxReturnApplication', () => {
    const mockCreateTaxReturnDto: CreateTaxReturnDto = {
      kennitala: '1234567890',
      ar: '2024',
      eitt_uppgjor: false,
      slysatrygging_heimilisstorf: true,
      fjolskyldumerking: 'M',
      eignir: [
        {
          tegund_id: 1,
          titill: 'Íbúð',
          numer: 'F2245789',
          heimilisfang: 'Laugavegur 1, 101 Reykjavík',
          kaupar: '2023-06-15',
          upphaed: 55000000,
          reitur_number: '1.01',
        },
        {
          tegund_id: 2,
          titill: 'Bifreið',
          numer: 'AB123',
          kaupar: '2024-01-10',
          upphaed: 8500000,
          reitur_number: '1.02',
        },
      ],
      tekjur: [
        {
          titill: 'Launatekjur',
          upphaed: 9500000,
          reitur_number: '2.01',
          kennitala_greidanda: '5707697899',
        },
        {
          titill: 'Verktakagreiðslur',
          upphaed: 1500000,
          reitur_number: '2.02',
          kennitala_greidanda: '4102697899',
        },
      ],
      skuldir: [
        {
          skuldategund_id: 1,
          titill: 'Íbúðarlán',
          vaxtagjold: 450000,
          eftirstodvar: 42000000,
          kennitala_lanveitanda: '5707697899',
          lansnumer: 'L123456',
          lantokudagur: new Date('2023-06-15'),
          lanstimi_i_arum: 40,
          heildargreidslur_arsins: 2400000,
          afborgun_nafnverd: 1950000,
        },
        {
          skuldategund_id: 2,
          titill: 'Bílalán',
          vaxtagjold: 180000,
          eftirstodvar: 6500000,
          kennitala_lanveitanda: '5707697899',
          lansnumer: 'B789012',
          lantokudagur: new Date('2024-01-10'),
          lanstimi_i_arum: 7,
          heildargreidslur_arsins: 1200000,
          afborgun_nafnverd: 1020000,
        },
      ],
    };

    const mockTaxPayer = {
      id: 1,
      kennitala: mockCreateTaxReturnDto.kennitala,
      person: {},
    };

    it('should throw NotFoundException when taxpayer not found', async () => {
      taxPayerRepository.findOne!.mockResolvedValue(null);

      await expect(
        service.receiveTaxReturnApplication(mockCreateTaxReturnDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should successfully create new tax return', async () => {
      const mockSavedTaxReturn = { id: 1, ...mockCreateTaxReturnDto };
      const mockFormFields = [
        { id: 1, numer: '1.01' },
        { id: 2, numer: '2.01' },
      ];

      taxPayerRepository.findOne!.mockResolvedValue(mockTaxPayer);
      formFieldRepository.find!.mockResolvedValue(mockFormFields);
      taxReturnRepository.create!.mockReturnValue(mockSavedTaxReturn);
      taxReturnRepository.save!.mockResolvedValue(mockSavedTaxReturn);
      taxReturnRepository.findOne!.mockResolvedValue(mockSavedTaxReturn);

      jest
        .spyOn(TaxReturnMapper, 'toDto')
        .mockImplementation((tr) => tr as any);

      const result = await service.receiveTaxReturnApplication(
        mockCreateTaxReturnDto,
      );

      expect(result).toBeDefined();
      expect(taxReturnRepository.save).toHaveBeenCalled();
      expect(assetRepository.save).toHaveBeenCalled();
      expect(incomeRepository.save).toHaveBeenCalled();
      expect(debtRepository.save).toHaveBeenCalled();
    });
  });
});
