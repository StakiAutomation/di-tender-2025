/* tslint:disable */
/* eslint-disable */
/**
 * Tengill Application API
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
import {
    ApplicationFileTypes,
    ApplicationFileTypesFromJSON,
    ApplicationFileTypesFromJSONTyped,
    ApplicationFileTypesToJSON,
} from './';

/**
 * 
 * @export
 * @interface ApplicationFiles
 */
export interface ApplicationFiles {
    /**
     * 
     * @type {ApplicationFileTypes}
     * @memberof ApplicationFiles
     */
    flokkur?: ApplicationFileTypes;
    /**
     * 
     * @type {string}
     * @memberof ApplicationFiles
     */
    heiti?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ApplicationFiles
     */
    dags?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationFiles
     */
    tegund?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationFiles
     */
    fileID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationFiles
     */
    ending?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationFiles
     */
    sharepointFileId?: string | null;
}

export function ApplicationFilesFromJSON(json: any): ApplicationFiles {
    return ApplicationFilesFromJSONTyped(json, false);
}

export function ApplicationFilesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplicationFiles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'flokkur': !exists(json, 'flokkur') ? undefined : ApplicationFileTypesFromJSON(json['flokkur']),
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'dags': !exists(json, 'dags') ? undefined : (json['dags'] === null ? null : new Date(json['dags'])),
        'tegund': !exists(json, 'tegund') ? undefined : json['tegund'],
        'fileID': !exists(json, 'fileID') ? undefined : json['fileID'],
        'ending': !exists(json, 'ending') ? undefined : json['ending'],
        'sharepointFileId': !exists(json, 'sharepointFileId') ? undefined : json['sharepointFileId'],
    };
}

export function ApplicationFilesToJSON(value?: ApplicationFiles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'flokkur': ApplicationFileTypesToJSON(value.flokkur),
        'heiti': value.heiti,
        'dags': value.dags === undefined ? undefined : (value.dags === null ? null : value.dags.toISOString()),
        'tegund': value.tegund,
        'fileID': value.fileID,
        'ending': value.ending,
        'sharepointFileId': value.sharepointFileId,
    };
}


