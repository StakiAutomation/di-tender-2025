/* tslint:disable */
/* eslint-disable */
/**
 * Digital DrivingLicenceBook API
 * Vefþjónusta fyrir rafræna ökunámsbók - f9a51338fc6bb51bf829cfc1123ddd104a8439cd-20240530.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents a data transfer object for a school test result type.
 * @export
 * @interface SchoolTestResultType
 */
export interface SchoolTestResultType {
    /**
     * Gets or sets the type of driving school (1, 2, 3).
     * @type {number}
     * @memberof SchoolTestResultType
     */
    schoolTypeId?: number;
    /**
     * Gets or sets the name of the driving school type.
     * @type {string}
     * @memberof SchoolTestResultType
     */
    schoolTypeName?: string | null;
    /**
     * Gets or sets the code for the driving school type.
     * @type {string}
     * @memberof SchoolTestResultType
     */
    schoolTypeCode?: string | null;
    /**
     * Gets or sets the type of driving license.
     * @type {string}
     * @memberof SchoolTestResultType
     */
    licenseCategory?: string | null;
}

export function SchoolTestResultTypeFromJSON(json: any): SchoolTestResultType {
    return SchoolTestResultTypeFromJSONTyped(json, false);
}

export function SchoolTestResultTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolTestResultType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schoolTypeId': !exists(json, 'schoolTypeId') ? undefined : json['schoolTypeId'],
        'schoolTypeName': !exists(json, 'schoolTypeName') ? undefined : json['schoolTypeName'],
        'schoolTypeCode': !exists(json, 'schoolTypeCode') ? undefined : json['schoolTypeCode'],
        'licenseCategory': !exists(json, 'licenseCategory') ? undefined : json['licenseCategory'],
    };
}

export function SchoolTestResultTypeToJSON(value?: SchoolTestResultType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schoolTypeId': value.schoolTypeId,
        'schoolTypeName': value.schoolTypeName,
        'schoolTypeCode': value.schoolTypeCode,
        'licenseCategory': value.licenseCategory,
    };
}


