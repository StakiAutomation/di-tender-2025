import {Injectable} from '@nestjs/common';
import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";
import {ApplicationModel} from '../../dbmodels/application.model';
import {AssetDto, AssetTypeDto, FormFieldDto, IncomeDto, PersonDto, TaxReturnDto} from './models/taxreturns.model';
import {TaxReturnInput} from './models/taxreturns.inputmodel';
import {v4 as uuidv4} from 'uuid';
import {Field} from "@nestjs/graphql";
import { TaxReturnMapper } from './models/mappers/tax-return.mapper';


@Injectable()
export class TaxReturnsService {
  constructor(
    private httpService: HttpService
  ) {
  }

  async getCurrentTaxReturnRest(kennitala: string): Promise<TaxReturnDto> {
    try {
      const restUrl = "https://di-tender-rsk-api-eu.azurewebsites.net/taxreturns/current/" + kennitala;

      const headersRequest = {
        'Content-Type': 'application/json',
      }
      const response = await lastValueFrom(
        this.httpService.get(restUrl, {headers: headersRequest}),
      )
      if (!response) {
        throw new Error(
          `Failed on RSK request with error: ${response}`,
        )
      }
      if (response.status < 300 && response.status > 199) {
        const oldApplication = await this.findApplicationByKennitala(kennitala);
        if (oldApplication) {
          const taxReturnString = oldApplication.external_data;
          const taxReturns: TaxReturnDto = JSON.parse(taxReturnString);
          return taxReturns;
        } else {
          const taxReturnString = JSON.stringify(response.data);
          await this.storeTaxReturnForKennitala(taxReturnString, kennitala)
          const taxReturns: TaxReturnDto = JSON.parse(taxReturnString);
          return taxReturns;
        }

      } else {
        throw new Error(
          `Failed on RSK request with status code: ${response.statusText}`,
        )
      }
    } catch (err) {
      throw new Error(`Failed on RSK request with error: ${err}`)
    }
  }

  async getPreviousTaxReturnsRest(kennitala: string): Promise<TaxReturnDto[]> {
    try {
      const restUrl = "https://di-tender-rsk-api-eu.azurewebsites.net/taxreturns/" + kennitala;

      const headersRequest = {
        'Content-Type': 'application/json',
      }
      const response = await lastValueFrom(
        this.httpService.get(restUrl, {headers: headersRequest}),
      )
      if (!response) {
        throw new Error(
          `Failed on RSK request with error: ${response}`,
        )
      }
      if (response.status < 300 && response.status > 199) {
        const responseString = JSON.stringify(response.data);
        const taxReturns: TaxReturnDto[] = JSON.parse(responseString);
        return taxReturns;

      } else {
        throw new Error(
          `Failed on RSK request with status code: ${response.statusText}`,
        )
      }
    } catch (err) {
      throw new Error(`Failed on RSK request with error: ${err}`)
    }
  }

  async updateCurrentTaxReturn(taxReturnInput: TaxReturnInput) {
    const kennitala = taxReturnInput.kennitala
    const application = await this.findApplicationByKennitala(kennitala);
    if (application) {
      const taxReturnString = application.external_data;
      var taxReturns: TaxReturnDto = JSON.parse(taxReturnString);
      taxReturns.eitt_uppgjor = taxReturnInput.eitt_uppgjor;
      taxReturns.slysatrygging_heimilisstorf = taxReturnInput.slysatrygging_heimilisstorf;
      if (taxReturnInput.tekjur != null) {
        taxReturns.tekjur = [];
        for (const tekjur of taxReturnInput.tekjur ?? []) {
          const incomeDTO: IncomeDto = {
            id: 0,
            titill: tekjur.titill,
            upphaed: tekjur.upphaed,
            reitur: {numer: tekjur.reitur},
            kennitala_greidanda: tekjur.kennitala_greidanda,
          };
          taxReturns.tekjur.push(incomeDTO);
        }
      }
      // if (taxReturnInput.eignir != null) {
      //   taxReturns.eignir = [];
      //   for (const eign of taxReturnInput.eignir ?? []) {
      //     const assetDto: AssetDto = {
      //       id: 0,
      //       tegund: {id: eign.tegund_id} as AssetTypeDto,
      //       titill: eign.titill,
      //       numer: eign.numer,
      //       heimilisfang: eign.heimilisfang,
      //       kaupar: eign.kaupar,
      //       upphaed: eign.upphaed,
      //       reitur: {numer: eign.reitur} as FormFieldDto,
      //
      //     };
      //     taxReturns.eignir.push(assetDto);
      //   }
      // }

      const newReturnString = JSON.stringify(taxReturns);
      await this.storeTaxReturnForKennitala(newReturnString, kennitala);
      return true;
    } else {
      throw new Error(`No taxReturn found for  ${taxReturnInput.kennitala}`);
      return false;
    }
  }


  async submitCurrentTaxReturn(kennitala: string) {
    const application = await this.findApplicationByKennitala(kennitala);
    if (application) {
      const taxReturnString = application.external_data;
      var taxReturns: TaxReturnDto = JSON.parse(taxReturnString);
      var postValue = TaxReturnMapper.toDto(taxReturns);

      const restUrl = "https://di-tender-rsk-api-eu.azurewebsites.net/taxreturns";

      const headersRequest = {
        'Content-Type': 'application/json',
      }
      const response = await lastValueFrom(
          this.httpService.post(restUrl, postValue, {headers: headersRequest}),
      )
      if (!response) {
        throw new Error(
            `Failed on RSK post request with error: ${response}`,
        )
      }
      if (response.status < 300 && response.status > 199) {
        await this.setApplicationStatusForKennitala(kennitala, "submitted")
        return true;
      } else {
        throw new Error(
            `Failed on RSK request with status code: ${response.statusText}`,
        )
      }
    } else {
      throw new Error(`No taxReturn found for  ${kennitala}`);
      return false;
    }
  }

  async findApplicationByKennitala(kennitala: string): Promise<ApplicationModel | null> {
    try {
      const model = await ApplicationModel.findOne({
        where: {
          applicant: kennitala
        },
      })
      return model;
    } catch (error) {
      throw new Error('Failed on find application request with error:' + error)
    }
  }

  async storeTaxReturnForKennitala(taxReturn: string, kennitala: string): Promise<boolean> {
    try {
      const model = await ApplicationModel.findOne({
        where: {
          applicant: kennitala
        },
      })
      if (model) {
        model.external_data = taxReturn;
        model.updatedAt = new Date();
        model.save();
      } else {
        const uuid = uuidv4();
        const application = await ApplicationModel.create({
          id: uuid,
          applicant: kennitala,
          answers: "",
          external_data: taxReturn,
        });
      }

      return true;
    } catch (error) {
      throw new Error('Failed on save application request with error:' + error)
      return false;
    }
  }

  async setApplicationStatusForKennitala(kennitala: string, status: string): Promise<boolean> {
    try {
      const model = await ApplicationModel.findOne({
        where: {
          applicant: kennitala
        },
      })
      if (model) {
        model.status = status;
        model.state = status;
        model.save();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error('Failed on save application request with error:' + error)
      return false;
    }
  }

}
