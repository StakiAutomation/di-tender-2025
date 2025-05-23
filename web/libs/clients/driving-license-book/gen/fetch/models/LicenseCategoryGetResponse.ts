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
import {
    LicenseCategory,
    LicenseCategoryFromJSON,
    LicenseCategoryFromJSONTyped,
    LicenseCategoryToJSON,
} from './';

/**
 * Response structure for retrieving license categories
 * @export
 * @interface LicenseCategoryGetResponse
 */
export interface LicenseCategoryGetResponse {
    /**
     * List of license categories retrieved
     * @type {Array<LicenseCategory>}
     * @memberof LicenseCategoryGetResponse
     */
    data?: Array<LicenseCategory> | null;
}

export function LicenseCategoryGetResponseFromJSON(json: any): LicenseCategoryGetResponse {
    return LicenseCategoryGetResponseFromJSONTyped(json, false);
}

export function LicenseCategoryGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LicenseCategoryGetResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(LicenseCategoryFromJSON)),
    };
}

export function LicenseCategoryGetResponseToJSON(value?: LicenseCategoryGetResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(LicenseCategoryToJSON)),
    };
}


