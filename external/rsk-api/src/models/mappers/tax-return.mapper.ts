import { TaxReturn } from '@rsk-api/entities';
import { TaxReturnDto } from '../tax-return-dto';

export class TaxReturnMapper {
  static toDto(entity: TaxReturn): TaxReturnDto {
    return {
      id: entity.id,
      skattgreidandi: {
        id: entity.skattgreidandi.id,
        kennitala: entity.skattgreidandi.kennitala,
        netfang: entity.skattgreidandi.netfang,
        simanumer: entity.skattgreidandi.simanumer,
        person: {
          kennitala: entity.skattgreidandi.person.kennitala,
          nafn: entity.skattgreidandi.person.nafn,
          heimilisfang: entity.skattgreidandi.person.heimilisfang,
          tegund: entity.skattgreidandi.person.tegund,
        },
      },
      ar: entity.ar,
      dags_stofnad: entity.dags_stofnad,
      eitt_uppgjor: entity.eitt_uppgjor,
      slysatrygging_heimilisstorf: entity.slysatrygging_heimilisstorf,
      fjolskyldumerking: entity.fjolskyldumerking,
      stada: {
        id: entity.stada.id,
        nafn: entity.stada.nafn,
        kodi: entity.stada.kodi,
      },
      eignir: entity.eignir.map((eign) => ({
        id: eign.id,
        tegund: {
          id: eign.tegund.id,
          nafn: eign.tegund.nafn,
        },
        titill: eign.titill,
        numer: eign.numer,
        heimilisfang: eign.heimilisfang,
        kaupar: eign.kaupar,
        upphaed: eign.upphaed,
        reitur: {
          id: eign.reitur.id,
          numer: eign.reitur.numer,
          nafn: eign.reitur.nafn,
          lysing: eign.reitur.lysing,
          hopur: {
            id: eign.reitur.hopur.id,
            numer: eign.reitur.hopur.numer,
            nafn: eign.reitur.hopur.nafn,
            eydublad: {
              id: eign.reitur.hopur.eydublad.id,
              numer: eign.reitur.hopur.eydublad.numer,
              nafn: eign.reitur.hopur.eydublad.nafn,
            },
          },
        },
      })),
      tekjur: entity.tekjur.map((tekja) => ({
        id: tekja.id,
        titill: tekja.titill,
        upphaed: tekja.upphaed,
        reitur: {
          id: tekja.reitur.id,
          numer: tekja.reitur.numer,
          nafn: tekja.reitur.nafn,
          lysing: tekja.reitur.lysing,
          hopur: {
            id: tekja.reitur.hopur?.id,
            numer: tekja.reitur.hopur?.numer,
            nafn: tekja.reitur.hopur?.nafn,
            eydublad: {
              id: tekja.reitur.hopur?.eydublad.id,
              numer: tekja.reitur.hopur?.eydublad.numer,
              nafn: tekja.reitur.hopur?.eydublad.nafn,
            },
          },
        },
        kennitala_greidanda: tekja.kennitala_greidanda,
        greidandi: tekja.greidandi
          ? {
              kennitala: tekja.greidandi.kennitala,
              nafn: tekja.greidandi.nafn,
              heimilisfang: tekja.greidandi.heimilisfang,
              tegund: tekja.greidandi.tegund,
            }
          : undefined,
      })),
      skuldir: entity.skuldir.map((skuld) => ({
        id: skuld.id,
        tegund: {
          id: skuld.tegund.id,
          nafn: skuld.tegund.nafn,
        },
        titill: skuld.titill,
        vaxtagjold: skuld.vaxtagjold,
        eftirstodvar: skuld.eftirstodvar,
        kaupar: skuld.kaupar,
        stadsetning: skuld.stadsetning,
        fastanumer: skuld.fastanumer,
        kennitala_lanveitanda: skuld.kennitala_lanveitanda,
        lanveitandi: skuld.lanveitandi
          ? {
              kennitala: skuld.lanveitandi.kennitala,
              nafn: skuld.lanveitandi.nafn,
              heimilisfang: skuld.lanveitandi.heimilisfang,
              tegund: skuld.lanveitandi.tegund,
            }
          : undefined,
        lansnumer: skuld.lansnumer,
        lantokudagur: skuld.lantokudagur,
        lanstimi_i_arum: skuld.lanstimi_i_arum,
        heildargreidslur_arsins: skuld.heildargreidslur_arsins,
        afborgun_nafnverd: skuld.afborgun_nafnverd,
      })),
    };
  }
}
