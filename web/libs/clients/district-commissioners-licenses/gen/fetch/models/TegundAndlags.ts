/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 0 = Fasteign
 * 1 = Okutaeki
 * 2 = Skip
 * 3 = Lausafe
 * 4 = Loftfar
 * 5 = Oskrad
 * 6 = AdrarEignir
 * 7 = Hlutabref
 * 8 = InnistaedaIBanka
 * 9 = PeningarOgBankaholf
 * 10 = Skotvopn
 * 11 = VerdbrefOgKrofur
 * 12 = Utfarakostnadur
 * 13 = OpinberGjold
 * 14 = AdrarSkuldir
 * 15 = EignirIAtvinnurekstri
 * 16 = SkuldirIAtvinnurekstri
 * @export
 * @enum {string}
 */
export enum TegundAndlags {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_10 = 10,
    NUMBER_11 = 11,
    NUMBER_12 = 12,
    NUMBER_13 = 13,
    NUMBER_14 = 14,
    NUMBER_15 = 15,
    NUMBER_16 = 16
}

export function TegundAndlagsFromJSON(json: any): TegundAndlags {
    return TegundAndlagsFromJSONTyped(json, false);
}

export function TegundAndlagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TegundAndlags {
    return json as TegundAndlags;
}

export function TegundAndlagsToJSON(value?: TegundAndlags | null): any {
    return value as any;
}

