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
    DigitalBookCreateResponseData,
    DigitalBookCreateResponseDataFromJSON,
    DigitalBookCreateResponseDataFromJSONTyped,
    DigitalBookCreateResponseDataToJSON,
} from './';

/**
 * Represents the response for creating a digital driving license book.
 * @export
 * @interface DigitalBookCreateResponse
 */
export interface DigitalBookCreateResponse {
    /**
     * 
     * @type {DigitalBookCreateResponseData}
     * @memberof DigitalBookCreateResponse
     */
    data?: DigitalBookCreateResponseData;
}

export function DigitalBookCreateResponseFromJSON(json: any): DigitalBookCreateResponse {
    return DigitalBookCreateResponseFromJSONTyped(json, false);
}

export function DigitalBookCreateResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DigitalBookCreateResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : DigitalBookCreateResponseDataFromJSON(json['data']),
    };
}

export function DigitalBookCreateResponseToJSON(value?: DigitalBookCreateResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': DigitalBookCreateResponseDataToJSON(value.data),
    };
}


