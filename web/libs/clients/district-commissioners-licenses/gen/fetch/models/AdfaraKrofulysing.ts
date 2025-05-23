/* tslint:disable */
/* eslint-disable */
/**
 * Þjónustugátt starfskerfa sýslumanna
 * Rafrænn aðgengi að gögnum og aðgerðum starfskerfis sýslumanna
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
 * @interface AdfaraKrofulysing
 */
export interface AdfaraKrofulysing {
    /**
     * 
     * @type {string}
     * @memberof AdfaraKrofulysing
     */
    lysing?: string;
    /**
     * 
     * @type {number}
     * @memberof AdfaraKrofulysing
     */
    upphaed: number;
}

export function AdfaraKrofulysingFromJSON(json: any): AdfaraKrofulysing {
    return AdfaraKrofulysingFromJSONTyped(json, false);
}

export function AdfaraKrofulysingFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdfaraKrofulysing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lysing': !exists(json, 'lysing') ? undefined : json['lysing'],
        'upphaed': json['upphaed'],
    };
}

export function AdfaraKrofulysingToJSON(value?: AdfaraKrofulysing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lysing': value.lysing,
        'upphaed': value.upphaed,
    };
}


