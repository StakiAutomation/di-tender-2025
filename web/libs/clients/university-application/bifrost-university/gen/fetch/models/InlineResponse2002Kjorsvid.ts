/* tslint:disable */
/* eslint-disable */
/**
 * University Gateway
 * API description
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface InlineResponse2002Kjorsvid
 */
export interface InlineResponse2002Kjorsvid {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2002Kjorsvid
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Kjorsvid
     */
    heiti?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse2002Kjorsvid
     */
    heitiEn?: string;
}

export function InlineResponse2002KjorsvidFromJSON(json: any): InlineResponse2002Kjorsvid {
    return InlineResponse2002KjorsvidFromJSONTyped(json, false);
}

export function InlineResponse2002KjorsvidFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2002Kjorsvid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'heitiEn': !exists(json, 'heiti_en') ? undefined : json['heiti_en'],
    };
}

export function InlineResponse2002KjorsvidToJSON(value?: InlineResponse2002Kjorsvid | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'heiti': value.heiti,
        'heiti_en': value.heitiEn,
    };
}


