import {CreateTaxReturnDto} from "../create-tax-return-dto";
import { TaxReturnDto } from "../taxreturns.model";

export class TaxReturnMapper {
  static toDto(entity: TaxReturnDto): CreateTaxReturnDto {
    return {
      kennitala: entity.skattgreidandi.kennitala,
      ar: entity.ar,
      eitt_uppgjor: entity.eitt_uppgjor,
      slysatrygging_heimilisstorf: entity.slysatrygging_heimilisstorf,
      fjolskyldumerking: entity.fjolskyldumerking,
      eignir: entity.eignir.map((eign) => ({
        tegund_id: eign.tegund?.id ?? 1,
        titill: eign.titill,
        numer: eign.numer,
        heimilisfang: eign.heimilisfang,
        kaupar: eign.kaupar,
        upphaed: eign.upphaed,
        reitur_number: eign.reitur.numer

      })),
      tekjur: entity.tekjur.map((tekja) => ({
        titill: tekja.titill,
        upphaed: tekja.upphaed,
        reitur_number: tekja.reitur.numer,
        kennitala_greidanda: tekja.kennitala_greidanda,
      })),
      skuldir: entity.skuldir?.map((skuld) => ({
        skuldategund_id : skuld.tegund.id ?? 1,
        titill: skuld.titill,
        vaxtagjold: skuld.vaxtagjold,
        eftirstodvar: skuld.eftirstodvar,
        kaupar: skuld.kaupar,
        stadsetning: skuld.stadsetning,
        fastanumer: skuld.fastanumer,
        kennitala_lanveitanda: skuld.kennitala_lanveitanda,
        lansnumer: skuld.lansnumer,
        lantokudagur: skuld.lantokudagur ? new Date(skuld.lantokudagur) : new Date(),
        lanstimi_i_arum: skuld.lanstimi_i_arum,
        heildargreidslur_arsins: skuld.heildargreidslur_arsins,
        afborgun_nafnverd: skuld.afborgun_nafnverd,
      })),
    };
  }
}
