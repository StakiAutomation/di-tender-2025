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
/**
 * Detailed error message
 * @export
 * @interface ErrorDetails
 */
export interface ErrorDetails {
    /**
     * HTTP status code
     * @type {number}
     * @memberof ErrorDetails
     */
    code?: number;
    /**
     * Message describing the error
     * @type {string}
     * @memberof ErrorDetails
     */
    message?: string | null;
    /**
     * URL to a page explaining the error and possible solutions
     * @type {string}
     * @memberof ErrorDetails
     */
    help?: string | null;
    /**
     * Identifier for mapping failures to service internal codes
     * @type {string}
     * @memberof ErrorDetails
     */
    trackingId?: string | null;
    /**
     * Name of the parameter which was incorrect
     * @type {string}
     * @memberof ErrorDetails
     */
    param?: string | null;
}

export function ErrorDetailsFromJSON(json: any): ErrorDetails {
    return ErrorDetailsFromJSONTyped(json, false);
}

export function ErrorDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'help': !exists(json, 'help') ? undefined : json['help'],
        'trackingId': !exists(json, 'trackingId') ? undefined : json['trackingId'],
        'param': !exists(json, 'param') ? undefined : json['param'],
    };
}

export function ErrorDetailsToJSON(value?: ErrorDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'message': value.message,
        'help': value.help,
        'trackingId': value.trackingId,
        'param': value.param,
    };
}


