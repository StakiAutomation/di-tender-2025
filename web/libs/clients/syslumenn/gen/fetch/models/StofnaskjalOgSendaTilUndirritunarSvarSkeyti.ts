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
 * @interface StofnaskjalOgSendaTilUndirritunarSvarSkeyti
 */
export interface StofnaskjalOgSendaTilUndirritunarSvarSkeyti {
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSvarSkeyti
     */
    audkenni?: string | null;
    /**
     * 
     * @type {string}
     * @memberof StofnaskjalOgSendaTilUndirritunarSvarSkeyti
     */
    skilabod?: string | null;
}

export function StofnaskjalOgSendaTilUndirritunarSvarSkeytiFromJSON(json: any): StofnaskjalOgSendaTilUndirritunarSvarSkeyti {
    return StofnaskjalOgSendaTilUndirritunarSvarSkeytiFromJSONTyped(json, false);
}

export function StofnaskjalOgSendaTilUndirritunarSvarSkeytiFromJSONTyped(json: any, ignoreDiscriminator: boolean): StofnaskjalOgSendaTilUndirritunarSvarSkeyti {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'skilabod': !exists(json, 'skilabod') ? undefined : json['skilabod'],
    };
}

export function StofnaskjalOgSendaTilUndirritunarSvarSkeytiToJSON(value?: StofnaskjalOgSendaTilUndirritunarSvarSkeyti | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'skilabod': value.skilabod,
    };
}


