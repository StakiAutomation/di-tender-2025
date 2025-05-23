/* tslint:disable */
/* eslint-disable */
/**
 * University Gateway
 * API for communication between island.is application system and university gateway DB, and between university gateway DB and universities system (MySchool and Ugla)
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
 * @interface CreateApplicationFileDto
 */
export interface CreateApplicationFileDto {
    /**
     * File name
     * @type {string}
     * @memberof CreateApplicationFileDto
     */
    fileName: string;
    /**
     * A public download link to a s3 file
     * @type {string}
     * @memberof CreateApplicationFileDto
     */
    fileUrl: string;
}

export function CreateApplicationFileDtoFromJSON(json: any): CreateApplicationFileDto {
    return CreateApplicationFileDtoFromJSONTyped(json, false);
}

export function CreateApplicationFileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateApplicationFileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileName': json['fileName'],
        'fileUrl': json['fileUrl'],
    };
}

export function CreateApplicationFileDtoToJSON(value?: CreateApplicationFileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileName': value.fileName,
        'fileUrl': value.fileUrl,
    };
}


