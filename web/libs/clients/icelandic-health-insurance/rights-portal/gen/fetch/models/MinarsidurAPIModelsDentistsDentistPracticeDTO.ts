/* tslint:disable */
/* eslint-disable */
/**
 * Minarsidur
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
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
 * @interface MinarsidurAPIModelsDentistsDentistPracticeDTO
 */
export interface MinarsidurAPIModelsDentistsDentistPracticeDTO {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDentistsDentistPracticeDTO
     */
    practice?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDentistsDentistPracticeDTO
     */
    region?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDentistsDentistPracticeDTO
     */
    postalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsDentistsDentistPracticeDTO
     */
    address?: string | null;
}

export function MinarsidurAPIModelsDentistsDentistPracticeDTOFromJSON(json: any): MinarsidurAPIModelsDentistsDentistPracticeDTO {
    return MinarsidurAPIModelsDentistsDentistPracticeDTOFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsDentistsDentistPracticeDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsDentistsDentistPracticeDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'practice': !exists(json, 'practice') ? undefined : json['practice'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'address': !exists(json, 'address') ? undefined : json['address'],
    };
}

export function MinarsidurAPIModelsDentistsDentistPracticeDTOToJSON(value?: MinarsidurAPIModelsDentistsDentistPracticeDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'practice': value.practice,
        'region': value.region,
        'postalCode': value.postalCode,
        'address': value.address,
    };
}


