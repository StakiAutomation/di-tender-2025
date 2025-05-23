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
 * @interface MinarsidurAPIModelsApplicationApplicationFilesContent
 */
export interface MinarsidurAPIModelsApplicationApplicationFilesContent {
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsApplicationApplicationFilesContent
     */
    fileID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsApplicationApplicationFilesContent
     */
    applicationID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MinarsidurAPIModelsApplicationApplicationFilesContent
     */
    content?: string | null;
}

export function MinarsidurAPIModelsApplicationApplicationFilesContentFromJSON(json: any): MinarsidurAPIModelsApplicationApplicationFilesContent {
    return MinarsidurAPIModelsApplicationApplicationFilesContentFromJSONTyped(json, false);
}

export function MinarsidurAPIModelsApplicationApplicationFilesContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): MinarsidurAPIModelsApplicationApplicationFilesContent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fileID': !exists(json, 'fileID') ? undefined : json['fileID'],
        'applicationID': !exists(json, 'applicationID') ? undefined : json['applicationID'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function MinarsidurAPIModelsApplicationApplicationFilesContentToJSON(value?: MinarsidurAPIModelsApplicationApplicationFilesContent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fileID': value.fileID,
        'applicationID': value.applicationID,
        'content': value.content,
    };
}


