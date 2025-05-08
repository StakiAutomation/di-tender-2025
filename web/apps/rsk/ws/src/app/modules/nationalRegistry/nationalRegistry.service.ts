import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";
import { NationalRegistryEntryDto } from "./nationalRegistry.model";

@Injectable()
export class NationalRegistryService {
  constructor(
    private httpService: HttpService
  ) {
  }

  async getInfoForKennitala(kennitala: string) {
    try {
      const restUrl = "https://di-tender-national-registry-api-eu.azurewebsites.net/filter?filter=" + kennitala;

      const headersRequest = {
        'Content-Type': 'application/json',
      }
      const response = await lastValueFrom(
        this.httpService.get(restUrl, { headers: headersRequest }),
      )
      if (!response) {
        throw new Error(
          `Failed on RSK request with error: ${response}`,
        )
      }
      if (response.status < 300 && response.status > 199) {
        const responseString = JSON.stringify(response.data);
        const res: NationalRegistryEntryDto[] = JSON.parse(responseString);
        return res;
        // // console.log("got response", responseString);
        //
        // const sk = response.data["skattgreidandi"];
        // const sk2: PersonDto = JSON.parse(JSON.stringify(sk));
        // console.log("skattgreidandi", sk);
        // console.log("skattgreidandi2", sk2);
        //
        // const taxreturnDto:TaxReturnDto = JSON.parse(responseString);
        // return taxreturnDto;
        //
        // // console.log("got response", string);
        // return JSON.stringify(response.data);
      } else {
        throw new Error(
          `Failed on RSK request with status code: ${response.statusText}`,
        )
      }
    } catch (err) {
      throw new Error(`Failed on RSK request with error: ${err}`)
    }
  }
 }
