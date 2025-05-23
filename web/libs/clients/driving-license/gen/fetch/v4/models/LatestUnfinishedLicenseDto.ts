/* tslint:disable */
/* eslint-disable */
/**
 * RLS driver licence Rest API
 * RESTFul services for driver licences. Programmed in ASP.NET Core 3 API 
 *
 * The version of the OpenAPI document: 4.0
 * Contact: tmd@tmd.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Dto Class for latest unfinished/unpublished license
 * @export
 * @interface LatestUnfinishedLicenseDto
 */
export interface LatestUnfinishedLicenseDto {
    /**
     * Person social security numer
     * @type {string}
     * @memberof LatestUnfinishedLicenseDto
     */
    ssn?: string | null;
    /**
     * License id
     * @type {number}
     * @memberof LatestUnfinishedLicenseDto
     */
    licenseId?: number | null;
    /**
     * List of categories on license
     * @type {string}
     * @memberof LatestUnfinishedLicenseDto
     */
    categoriesOnLicense?: string | null;
    /**
     * Is this a temporary license
     * @type {number}
     * @memberof LatestUnfinishedLicenseDto
     */
    temporaryLicense?: number | null;
    /**
     * Result
     * @type {number}
     * @memberof LatestUnfinishedLicenseDto
     */
    result?: number | null;
    /**
     * Error code
     * @type {string}
     * @memberof LatestUnfinishedLicenseDto
     */
    errorCode?: string | null;
}

export function LatestUnfinishedLicenseDtoFromJSON(json: any): LatestUnfinishedLicenseDto {
    return LatestUnfinishedLicenseDtoFromJSONTyped(json, false);
}

export function LatestUnfinishedLicenseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LatestUnfinishedLicenseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'licenseId': !exists(json, 'licenseId') ? undefined : json['licenseId'],
        'categoriesOnLicense': !exists(json, 'categoriesOnLicense') ? undefined : json['categoriesOnLicense'],
        'temporaryLicense': !exists(json, 'temporaryLicense') ? undefined : json['temporaryLicense'],
        'result': !exists(json, 'result') ? undefined : json['result'],
        'errorCode': !exists(json, 'errorCode') ? undefined : json['errorCode'],
    };
}

export function LatestUnfinishedLicenseDtoToJSON(value?: LatestUnfinishedLicenseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ssn': value.ssn,
        'licenseId': value.licenseId,
        'categoriesOnLicense': value.categoriesOnLicense,
        'temporaryLicense': value.temporaryLicense,
        'result': value.result,
        'errorCode': value.errorCode,
    };
}


