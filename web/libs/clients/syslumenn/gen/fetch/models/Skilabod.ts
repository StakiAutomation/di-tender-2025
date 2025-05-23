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
 * @interface Skilabod
 */
export interface Skilabod {
    /**
     * 
     * @type {string}
     * @memberof Skilabod
     */
    skilabod?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Skilabod
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Skilabod
     */
    malsnumer?: string | null;
}

export function SkilabodFromJSON(json: any): Skilabod {
    return SkilabodFromJSONTyped(json, false);
}

export function SkilabodFromJSONTyped(json: any, ignoreDiscriminator: boolean): Skilabod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'skilabod': !exists(json, 'skilabod') ? undefined : json['skilabod'],
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'malsnumer': !exists(json, 'malsnumer') ? undefined : json['malsnumer'],
    };
}

export function SkilabodToJSON(value?: Skilabod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'skilabod': value.skilabod,
        'audkenni': value.audkenni,
        'malsnumer': value.malsnumer,
    };
}


