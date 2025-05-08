import { Test, TestingModule } from '@nestjs/testing';
import { TaxReturnsController } from './taxreturns.controller';
import { TaxReturnsService } from './taxreturns.service';
import { NotFoundException } from '@nestjs/common';
import { TaxReturnDto } from '@rsk-api/models/tax-return-dto';
import { CreateTaxReturnDto } from '@rsk-api/models/create-tax-return-dto';

describe('TaxReturnsController', () => {
  let controller: TaxReturnsController;
  let service: TaxReturnsService;

  // Mock data
  const mockNationalId = '1234567890';

  const mockTaxReturnDto: TaxReturnDto = {
    id: 1,
    ar: '2024',
    dags_stofnad: new Date('2024-03-15'),
    skattgreidandi: {
      id: 1,
      kennitala: mockNationalId,
      person: {
        id: 1,
        nafn: 'Jón Jónsson',
        kennitala: mockNationalId,
      },
    },
    stada: {
      id: 1,
      lysing: 'In Progress',
    },
    eignir: [],
    tekjur: [],
    skuldir: [],
  };

  const mockCreateTaxReturnDto: CreateTaxReturnDto = {
    kennitala: mockNationalId,
    ar: '2024',
    eitt_uppgjor: false,
    slysatrygging_heimilisstorf: true,
    eignir: [
      {
        tegund_id: 1,
        titill: 'Íbúð',
        upphaed: 55000000,
        reitur_number: '1.01',
      },
    ],
    tekjur: [
      {
        titill: 'Launatekjur',
        upphaed: 9500000,
        reitur_number: '2.01',
      },
    ],
    skuldir: [
      {
        skuldategund_id: 1,
        titill: 'Íbúðarlán',
        vaxtagjold: 450000,
        eftirstodvar: 42000000,
      },
    ],
  };

  // Mock service
  const mockTaxReturnsService = {
    getTaxReturns: jest.fn(),
    getCurrentTaxReturn: jest.fn(),
    receiveTaxReturnApplication: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxReturnsController],
      providers: [
        {
          provide: TaxReturnsService,
          useValue: mockTaxReturnsService,
        },
      ],
    }).compile();

    controller = module.get<TaxReturnsController>(TaxReturnsController);
    service = module.get<TaxReturnsService>(TaxReturnsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getTaxReturns', () => {
    it('should return an array of tax returns', async () => {
      const mockTaxReturns = [mockTaxReturnDto];
      jest.spyOn(service, 'getTaxReturns').mockResolvedValue(mockTaxReturns);

      const result = await controller.getTaxReturns(mockNationalId);

      expect(result).toBe(mockTaxReturns);
      expect(service.getTaxReturns).toHaveBeenCalledWith(mockNationalId);
      expect(service.getTaxReturns).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException when no tax returns found', async () => {
      jest
        .spyOn(service, 'getTaxReturns')
        .mockRejectedValue(
          new NotFoundException(
            `Tax payer not found with national id ${mockNationalId}`,
          ),
        );

      await expect(controller.getTaxReturns(mockNationalId)).rejects.toThrow(
        NotFoundException,
      );
      expect(service.getTaxReturns).toHaveBeenCalledWith(mockNationalId);
    });
  });

  describe('getCurrentTaxReturn', () => {
    it('should return the current tax return', async () => {
      jest
        .spyOn(service, 'getCurrentTaxReturn')
        .mockResolvedValue(mockTaxReturnDto);

      const result = await controller.getCurrentTaxReturn(mockNationalId);

      expect(result).toBe(mockTaxReturnDto);
      expect(service.getCurrentTaxReturn).toHaveBeenCalledWith(mockNationalId);
      expect(service.getCurrentTaxReturn).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException when current tax return not found', async () => {
      jest
        .spyOn(service, 'getCurrentTaxReturn')
        .mockRejectedValue(
          new NotFoundException(
            `Tax return for year ${new Date().getFullYear()} not found`,
          ),
        );

      await expect(
        controller.getCurrentTaxReturn(mockNationalId),
      ).rejects.toThrow(NotFoundException);
      expect(service.getCurrentTaxReturn).toHaveBeenCalledWith(mockNationalId);
    });
  });

  describe('receiveTaxReturnApplication', () => {
    it('should create a new tax return', async () => {
      jest
        .spyOn(service, 'receiveTaxReturnApplication')
        .mockResolvedValue(mockTaxReturnDto);

      const result = await controller.receiveTaxReturnApplication(
        mockCreateTaxReturnDto,
      );

      expect(result).toBe(mockTaxReturnDto);
      expect(service.receiveTaxReturnApplication).toHaveBeenCalledWith(
        mockCreateTaxReturnDto,
      );
      expect(service.receiveTaxReturnApplication).toHaveBeenCalledTimes(1);
    });

    it('should throw NotFoundException when taxpayer not found', async () => {
      jest
        .spyOn(service, 'receiveTaxReturnApplication')
        .mockRejectedValue(new NotFoundException('Taxpayer not found'));

      await expect(
        controller.receiveTaxReturnApplication(mockCreateTaxReturnDto),
      ).rejects.toThrow(NotFoundException);
      expect(service.receiveTaxReturnApplication).toHaveBeenCalledWith(
        mockCreateTaxReturnDto,
      );
    });
  });
});
