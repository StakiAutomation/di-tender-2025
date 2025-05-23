/* tslint:disable */
/* eslint-disable */
/**
 * Gagnaveita Fiskistofu
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: olafur.palmi.gudnason@fiskistofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface AflamarkSkipsKvotaParamsDTO
 */
export interface AflamarkSkipsKvotaParamsDTO {
    /**
     * Númer kvótategundar sem skal breyta.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    kvotategund?: number;
    /**
     * Heiti kvótategundar.
     * @type {string}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    kvotategundHeiti?: string | null;
    /**
     * Þorskígildisstuðull kvótategundar.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    thorskigildi?: number;
    /**
     * Magn heildaraflamarks fyrir kvótategund.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    heildarAflamark?: number;
    /**
     * Breytt hlutdeild fyrir kvótategund.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    hlutdeildBreytt?: number;
    /**
     * Breytt úthlutað aflamark (Kg) fyrir kvótategund.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    uthlutadAflamarkBreytt?: number;
    /**
     * Breytt magn (Kg) sem leyfilegt er að setja á næsta ár.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    aNaestaArKvotiBreytt?: number;
    /**
     * Breytt magn (Kg) sem er leyfilegt að taka af næsta ári.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    afNaestaAriKvotiBreytt?: number;
    /**
     * Prósenta sem er leyfilegt að flytja frá fyrir kvótategund (Gefið í heiltölu, 25 => 0,25 eða 25%).
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    prosentaAflamarkFra?: number;
    /**
     * Prósenta sem er leyfilegt að flytja til fyrirkvótategund (Gefið í heiltölu, 25 => 0,25 eða 25%).
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    prosentaAflamarkTil?: number;
    /**
     * Breytt magn (Kg) sem er sett á næsta ár skv. aflamarksreikni.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    aNaestaArAflamark?: number;
    /**
     * Ný staða kvótategundar tekið tillit til afla og tilfærslu.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    nyStada?: number;
    /**
     * Breyttur umframafli miðað við breyttar niðurstöður kvótaParams.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    umframafli?: number;
    /**
     * Breytt ónotað miðað við breyttar niðurstöður kvótaParams.
     * @type {number}
     * @memberof AflamarkSkipsKvotaParamsDTO
     */
    onotad?: number;
}

export function AflamarkSkipsKvotaParamsDTOFromJSON(json: any): AflamarkSkipsKvotaParamsDTO {
    return AflamarkSkipsKvotaParamsDTOFromJSONTyped(json, false);
}

export function AflamarkSkipsKvotaParamsDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): AflamarkSkipsKvotaParamsDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kvotategund': !exists(json, 'kvotategund') ? undefined : json['kvotategund'],
        'kvotategundHeiti': !exists(json, 'kvotategundHeiti') ? undefined : json['kvotategundHeiti'],
        'thorskigildi': !exists(json, 'thorskigildi') ? undefined : json['thorskigildi'],
        'heildarAflamark': !exists(json, 'heildarAflamark') ? undefined : json['heildarAflamark'],
        'hlutdeildBreytt': !exists(json, 'hlutdeildBreytt') ? undefined : json['hlutdeildBreytt'],
        'uthlutadAflamarkBreytt': !exists(json, 'uthlutadAflamarkBreytt') ? undefined : json['uthlutadAflamarkBreytt'],
        'aNaestaArKvotiBreytt': !exists(json, 'aNaestaArKvotiBreytt') ? undefined : json['aNaestaArKvotiBreytt'],
        'afNaestaAriKvotiBreytt': !exists(json, 'afNaestaAriKvotiBreytt') ? undefined : json['afNaestaAriKvotiBreytt'],
        'prosentaAflamarkFra': !exists(json, 'prosentaAflamarkFra') ? undefined : json['prosentaAflamarkFra'],
        'prosentaAflamarkTil': !exists(json, 'prosentaAflamarkTil') ? undefined : json['prosentaAflamarkTil'],
        'aNaestaArAflamark': !exists(json, 'aNaestaArAflamark') ? undefined : json['aNaestaArAflamark'],
        'nyStada': !exists(json, 'nyStada') ? undefined : json['nyStada'],
        'umframafli': !exists(json, 'umframafli') ? undefined : json['umframafli'],
        'onotad': !exists(json, 'onotad') ? undefined : json['onotad'],
    };
}

export function AflamarkSkipsKvotaParamsDTOToJSON(value?: AflamarkSkipsKvotaParamsDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kvotategund': value.kvotategund,
        'kvotategundHeiti': value.kvotategundHeiti,
        'thorskigildi': value.thorskigildi,
        'heildarAflamark': value.heildarAflamark,
        'hlutdeildBreytt': value.hlutdeildBreytt,
        'uthlutadAflamarkBreytt': value.uthlutadAflamarkBreytt,
        'aNaestaArKvotiBreytt': value.aNaestaArKvotiBreytt,
        'afNaestaAriKvotiBreytt': value.afNaestaAriKvotiBreytt,
        'prosentaAflamarkFra': value.prosentaAflamarkFra,
        'prosentaAflamarkTil': value.prosentaAflamarkTil,
        'aNaestaArAflamark': value.aNaestaArAflamark,
        'nyStada': value.nyStada,
        'umframafli': value.umframafli,
        'onotad': value.onotad,
    };
}


