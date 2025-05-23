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
 * @interface MedalverdFisksDTO
 */
export interface MedalverdFisksDTO {
    /**
     * Heildarverðmæti/heildarmagn allra viðskipta bæði í beinni sölu og gegnum fiskmarkaði/uppboðsmarkaði.
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    vegidMedalverd?: number | null;
    /**
     * Meðalverð afurða í viðskiptum sem að fara í gegnum fiskmarkaði/uppboðsmarkaði.
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    markadsVerd?: number | null;
    /**
     * Selt magn í kg sem að fer fram í viðskiptum gegnum fiskmarkaði/uppboðsmarkaði.
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    markadsSala?: number | null;
    /**
     * Löndunardagur
     * @type {Date}
     * @memberof MedalverdFisksDTO
     */
    londunardagur?: Date;
    /**
     * Heiti frágangs (óslægt, slægt, heill o.s.frv.)
     * @type {string}
     * @memberof MedalverdFisksDTO
     */
    fragangurHeiti?: string | null;
    /**
     * Númer frágangs
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    fragang?: number;
    /**
     * Heiti fisktegundar
     * @type {string}
     * @memberof MedalverdFisksDTO
     */
    fisktegundHeiti?: string | null;
    /**
     * Númer fisktegundar
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    fisktegund?: number;
    /**
     * Meðalverð í beinum viðskiptum
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    beintVerd?: number | null;
    /**
     * Selt magn í kg í beinum viðskiptum
     * @type {number}
     * @memberof MedalverdFisksDTO
     */
    beinSala?: number | null;
}

export function MedalverdFisksDTOFromJSON(json: any): MedalverdFisksDTO {
    return MedalverdFisksDTOFromJSONTyped(json, false);
}

export function MedalverdFisksDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedalverdFisksDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vegidMedalverd': !exists(json, 'vegidMedalverd') ? undefined : json['vegidMedalverd'],
        'markadsVerd': !exists(json, 'markadsVerd') ? undefined : json['markadsVerd'],
        'markadsSala': !exists(json, 'markadsSala') ? undefined : json['markadsSala'],
        'londunardagur': !exists(json, 'londunardagur') ? undefined : (new Date(json['londunardagur'])),
        'fragangurHeiti': !exists(json, 'fragangurHeiti') ? undefined : json['fragangurHeiti'],
        'fragang': !exists(json, 'fragang') ? undefined : json['fragang'],
        'fisktegundHeiti': !exists(json, 'fisktegundHeiti') ? undefined : json['fisktegundHeiti'],
        'fisktegund': !exists(json, 'fisktegund') ? undefined : json['fisktegund'],
        'beintVerd': !exists(json, 'beintVerd') ? undefined : json['beintVerd'],
        'beinSala': !exists(json, 'beinSala') ? undefined : json['beinSala'],
    };
}

export function MedalverdFisksDTOToJSON(value?: MedalverdFisksDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vegidMedalverd': value.vegidMedalverd,
        'markadsVerd': value.markadsVerd,
        'markadsSala': value.markadsSala,
        'londunardagur': value.londunardagur === undefined ? undefined : (value.londunardagur.toISOString()),
        'fragangurHeiti': value.fragangurHeiti,
        'fragang': value.fragang,
        'fisktegundHeiti': value.fisktegundHeiti,
        'fisktegund': value.fisktegund,
        'beintVerd': value.beintVerd,
        'beinSala': value.beinSala,
    };
}


