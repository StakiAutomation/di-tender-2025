/* tslint:disable */
/* eslint-disable */
/**
 * Fasteignir-Xroad
 * Uppfletting í fasteignaskrá.
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ErrorDetails,
    ErrorDetailsFromJSON,
    ErrorDetailsFromJSONTyped,
    ErrorDetailsToJSON,
} from './';

/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * HTTP status code
     * @type {number}
     * @memberof ModelError
     */
    code: number;
    /**
     * Message describing the error
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Detailed information of errors
     * @type {Array<ErrorDetails>}
     * @memberof ModelError
     */
    errors?: Array<ErrorDetails> | null;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
        'errors': !exists(json, 'errors') ? undefined : (json['errors'] === null ? null : (json['errors'] as Array<any>).map(ErrorDetailsFromJSON)),
    };
}

export function ModelErrorToJSON(value?: ModelError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'errors': value.errors === undefined ? undefined : (value.errors === null ? null : (value.errors as Array<any>).map(ErrorDetailsToJSON)),
    };
}


