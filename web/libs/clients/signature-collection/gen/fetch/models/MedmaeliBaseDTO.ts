/* tslint:disable */
/* eslint-disable */
/**
 * MedmaeliRestAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MedmaeliBaseDTO
 */
export interface MedmaeliBaseDTO {
    /**
     * 
     * @type {number}
     * @memberof MedmaeliBaseDTO
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof MedmaeliBaseDTO
     */
    medmaelalistiID?: number;
    /**
     * 
     * @type {string}
     * @memberof MedmaeliBaseDTO
     */
    kennitala: string;
    /**
     * 
     * @type {string}
     * @memberof MedmaeliBaseDTO
     */
    nafn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MedmaeliBaseDTO
     */
    heimilisfang?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MedmaeliBaseDTO
     */
    medmaeliTegund?: string | null;
    /**
     * 
     * @type {number}
     * @memberof MedmaeliBaseDTO
     */
    medmaeliTegundNr?: number;
    /**
     * 
     * @type {number}
     * @memberof MedmaeliBaseDTO
     */
    bladsidaNr?: number;
    /**
     * 
     * @type {Date}
     * @memberof MedmaeliBaseDTO
     */
    dagsetning?: Date;
}

export function MedmaeliBaseDTOFromJSON(json: any): MedmaeliBaseDTO {
    return MedmaeliBaseDTOFromJSONTyped(json, false);
}

export function MedmaeliBaseDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MedmaeliBaseDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'medmaelalistiID': !exists(json, 'medmaelalistiID') ? undefined : json['medmaelalistiID'],
        'kennitala': json['kennitala'],
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'heimilisfang': !exists(json, 'heimilisfang') ? undefined : json['heimilisfang'],
        'medmaeliTegund': !exists(json, 'medmaeliTegund') ? undefined : json['medmaeliTegund'],
        'medmaeliTegundNr': !exists(json, 'medmaeliTegundNr') ? undefined : json['medmaeliTegundNr'],
        'bladsidaNr': !exists(json, 'bladsidaNr') ? undefined : json['bladsidaNr'],
        'dagsetning': !exists(json, 'dagsetning') ? undefined : (new Date(json['dagsetning'])),
    };
}

export function MedmaeliBaseDTOToJSON(value?: MedmaeliBaseDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'medmaelalistiID': value.medmaelalistiID,
        'kennitala': value.kennitala,
        'nafn': value.nafn,
        'heimilisfang': value.heimilisfang,
        'medmaeliTegund': value.medmaeliTegund,
        'medmaeliTegundNr': value.medmaeliTegundNr,
        'bladsidaNr': value.bladsidaNr,
        'dagsetning': value.dagsetning === undefined ? undefined : (value.dagsetning.toISOString()),
    };
}


