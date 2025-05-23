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
 * @interface AdfarabeidnirHeimildaflokkur
 */
export interface AdfarabeidnirHeimildaflokkur {
    /**
     * 
     * @type {number}
     * @memberof AdfarabeidnirHeimildaflokkur
     */
    numer?: number;
    /**
     * 
     * @type {string}
     * @memberof AdfarabeidnirHeimildaflokkur
     */
    heiti?: string | null;
}

export function AdfarabeidnirHeimildaflokkurFromJSON(json: any): AdfarabeidnirHeimildaflokkur {
    return AdfarabeidnirHeimildaflokkurFromJSONTyped(json, false);
}

export function AdfarabeidnirHeimildaflokkurFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdfarabeidnirHeimildaflokkur {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numer': !exists(json, 'numer') ? undefined : json['numer'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
    };
}

export function AdfarabeidnirHeimildaflokkurToJSON(value?: AdfarabeidnirHeimildaflokkur | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numer': value.numer,
        'heiti': value.heiti,
    };
}


