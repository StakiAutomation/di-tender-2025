/* tslint:disable */
/* eslint-disable */
/**
 * Financial Aid Backend
 * This is the backend for the financial aid.
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
 * @interface CreateApiKeyDto
 */
export interface CreateApiKeyDto {
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyDto
     */
    apiKey: string;
    /**
     * 
     * @type {string}
     * @memberof CreateApiKeyDto
     */
    municipalityCode: string;
}

export function CreateApiKeyDtoFromJSON(json: any): CreateApiKeyDto {
    return CreateApiKeyDtoFromJSONTyped(json, false);
}

export function CreateApiKeyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApiKeyDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'apiKey': json['apiKey'],
        'municipalityCode': json['municipalityCode'],
    };
}

export function CreateApiKeyDtoToJSON(value?: CreateApiKeyDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'apiKey': value.apiKey,
        'municipalityCode': value.municipalityCode,
    };
}


