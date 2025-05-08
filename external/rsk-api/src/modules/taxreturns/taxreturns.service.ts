import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  TaxReturn,
  TaxPayer,
  Asset,
  Income,
  Debt,
  FormField,
} from '@rsk-api/entities';
import { CreateTaxReturnDto } from '@rsk-api/models/create-tax-return-dto';
import { TaxReturnMapper } from '@rsk-api/models/mappers/tax-return.mapper';
import { TaxReturnDto } from '@rsk-api/models/tax-return-dto';
import { In, Repository } from 'typeorm';

@Injectable()
export class TaxReturnsService {
  constructor(
    @InjectRepository(TaxReturn)
    private taxReturnRepository: Repository<TaxReturn>,
    @InjectRepository(TaxPayer)
    private taxPayerRepository: Repository<TaxPayer>,
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
    @InjectRepository(Income)
    private incomeRepository: Repository<Income>,
    @InjectRepository(Debt)
    private debtRepository: Repository<Debt>,
    @InjectRepository(FormField)
    private formFieldRepository: Repository<FormField>,
  ) {}

  async getTaxReturns(nationalId: string): Promise<TaxReturnDto[]> {
    const taxPayer = await this.taxPayerRepository.findOne({
      where: { kennitala: nationalId },
    });
    if (!taxPayer) {
      throw new NotFoundException(
        `Tax payer not found with national id ${nationalId}`,
      );
    }

    const taxReturns = await this.taxReturnRepository
      .createQueryBuilder('taxReturn')
      .leftJoinAndSelect('taxReturn.skattgreidandi', 'skattgreidandi')
      .leftJoinAndSelect('skattgreidandi.person', 'person')
      .leftJoinAndSelect('taxReturn.stada', 'stada')
      .leftJoinAndSelect('taxReturn.eignir', 'eignir')
      .leftJoinAndSelect('eignir.tegund', 'eignirTegund')
      .leftJoinAndSelect('eignir.reitur', 'eignirReitur')
      .leftJoinAndSelect('eignirReitur.hopur', 'eignirHopur')
      .leftJoinAndSelect('eignirHopur.eydublad', 'eignirEydublad')
      .leftJoinAndSelect('taxReturn.tekjur', 'tekjur')
      .leftJoinAndSelect('tekjur.reitur', 'tekjurReitur')
      .leftJoinAndSelect('tekjurReitur.hopur', 'tekjurHopur')
      .leftJoinAndSelect('tekjurHopur.eydublad', 'tekjurEydublad')
      .leftJoinAndSelect('tekjur.greidandi', 'greidandi')
      .leftJoinAndSelect('taxReturn.skuldir', 'skuldir')
      .leftJoinAndSelect('skuldir.tegund', 'skuldirTegund')
      .leftJoinAndSelect('skuldir.lanveitandi', 'lanveitandi')
      .where((qb) => {
        const subQuery = qb
          .subQuery()
          .select('DISTINCT ON (f.ar) f.id')
          .from('FRAMTAL', 'f')
          .where('f.skattgreidandi_id = :taxPayerId', {
            taxPayerId: taxPayer.id,
          })
          .orderBy('f.ar')
          .addOrderBy('f.dags_stofnad', 'DESC')
          .getQuery();
        return 'taxReturn.id IN ' + subQuery;
      })
      .orderBy('taxReturn.ar', 'DESC')
      .getMany();

    return taxReturns.map((t) => TaxReturnMapper.toDto(t));
  }

  async getCurrentTaxReturn(nationalId: string): Promise<TaxReturnDto> {
    const currentYear = new Date().getFullYear().toString();

    const taxPayer = await this.taxPayerRepository.findOne({
      where: { kennitala: nationalId },
    });
    if (!taxPayer) {
      throw new NotFoundException(
        `Tax payer not found with national id ${nationalId}`,
      );
    }

    const taxReturn = await this.taxReturnRepository
      .createQueryBuilder('taxReturn')
      .leftJoinAndSelect('taxReturn.skattgreidandi', 'skattgreidandi')
      .leftJoinAndSelect('skattgreidandi.person', 'person')
      .leftJoinAndSelect('taxReturn.stada', 'stada')
      .leftJoinAndSelect('taxReturn.eignir', 'eignir')
      .leftJoinAndSelect('eignir.tegund', 'eignirTegund')
      .leftJoinAndSelect('eignir.reitur', 'eignirReitur')
      .leftJoinAndSelect('eignirReitur.hopur', 'eignirHopur')
      .leftJoinAndSelect('eignirHopur.eydublad', 'eignirEydublad')
      .leftJoinAndSelect('taxReturn.tekjur', 'tekjur')
      .leftJoinAndSelect('tekjur.reitur', 'tekjurReitur')
      .leftJoinAndSelect('tekjurReitur.hopur', 'tekjurHopur')
      .leftJoinAndSelect('tekjurHopur.eydublad', 'tekjurEydublad')
      .leftJoinAndSelect('tekjur.greidandi', 'greidandi')
      .leftJoinAndSelect('taxReturn.skuldir', 'skuldir')
      .leftJoinAndSelect('skuldir.tegund', 'skuldirTegund')
      .leftJoinAndSelect('skuldir.lanveitandi', 'lanveitandi')
      .where('taxReturn.skattgreidandi_id = :taxPayerId', {
        taxPayerId: taxPayer.id,
      })
      .andWhere('taxReturn.ar = :currentYear', { currentYear })
      .orderBy('taxReturn.dags_stofnad', 'DESC')
      .take(1)
      .getOne();

    if (!taxReturn) {
      throw new NotFoundException(
        `Tax return for year ${currentYear} not found`,
      );
    }

    return TaxReturnMapper.toDto(taxReturn);
  }

  async receiveTaxReturnApplication(taxReturnData: CreateTaxReturnDto) {
    // First check if taxpayer exists
    const taxPayer = await this.taxPayerRepository.findOne({
      where: { kennitala: taxReturnData.kennitala },
      relations: ['person'],
    });

    if (!taxPayer) {
      throw new NotFoundException('Taxpayer not found');
    }

    const formFieldNumbers: string[] = [
      ...(taxReturnData.eignir?.map((e) => e.reitur_number) || []),
      ...(taxReturnData.tekjur?.map((t) => t.reitur_number) || []),
    ];

    const formFields = await this.formFieldRepository.find({
      where: {
        numer: In(formFieldNumbers),
      },
    });

    const newTaxReturn = this.taxReturnRepository.create({
      ...taxReturnData,
      skattgreidandi_id: taxPayer.id,
      ar: taxReturnData.ar,
      stada_id: 1,
      eitt_uppgjor: taxReturnData.eitt_uppgjor ?? false,
      slysatrygging_heimilisstorf:
        taxReturnData.slysatrygging_heimilisstorf ?? false,
    });

    const savedTaxReturn = await this.taxReturnRepository.save(newTaxReturn);

    if (taxReturnData.eignir?.length) {
      const assets = taxReturnData.eignir.map((asset) => ({
        ...asset,
        reitur_id: formFields.find((f) => f.numer === asset.reitur_number)?.id,
        framtal_id: savedTaxReturn.id,
      }));
      await this.assetRepository.save(assets);
    }

    if (taxReturnData.tekjur?.length) {
      const income = taxReturnData.tekjur.map((income) => ({
        ...income,
        reitur_id: formFields.find((f) => f.numer === income.reitur_number)?.id,
        framtal_id: savedTaxReturn.id,
      }));
      await this.incomeRepository.save(income);
    }

    if (taxReturnData.skuldir?.length) {
      const debts = taxReturnData.skuldir.map((debt) => ({
        ...debt,
        framtal_id: savedTaxReturn.id,
      }));
      await this.debtRepository.save(debts);
    }

    const taxReturn = await this.taxReturnRepository.findOne({
      where: { id: savedTaxReturn.id },
      relations: {
        skattgreidandi: {
          person: true,
        },
        stada: true,
        eignir: {
          tegund: true,
          reitur: {
            hopur: {
              eydublad: true,
            },
          },
        },
        tekjur: {
          reitur: {
            hopur: {
              eydublad: true,
            },
          },
          greidandi: true,
        },
        skuldir: {
          tegund: true,
          lanveitandi: true,
        },
      },
    });

    if (!taxReturn) {
      return null;
    }

    return TaxReturnMapper.toDto(taxReturn);
  }
}
