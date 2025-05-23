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
import {
    TegundAndlags,
    TegundAndlagsFromJSON,
    TegundAndlagsFromJSONTyped,
    TegundAndlagsToJSON,
} from './';

/**
 * 
 * @export
 * @interface EignirDanarbusErfdafjarskatt
 */
export interface EignirDanarbusErfdafjarskatt {
    /**
     * 
     * @type {TegundAndlags}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    tegundAngalgs?: TegundAndlags;
    /**
     * 
     * @type {string}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    fastanumer?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    lysing?: string | null;
    /**
     * 
     * @type {number}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    eignarhlutfall?: number;
    /**
     * 
     * @type {string}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    fasteignamat?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    upphaed?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EignirDanarbusErfdafjarskatt
     */
    gengiVextir?: string | null;
}

export function EignirDanarbusErfdafjarskattFromJSON(json: any): EignirDanarbusErfdafjarskatt {
    return EignirDanarbusErfdafjarskattFromJSONTyped(json, false);
}

export function EignirDanarbusErfdafjarskattFromJSONTyped(json: any, ignoreDiscriminator: boolean): EignirDanarbusErfdafjarskatt {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tegundAngalgs': !exists(json, 'tegundAngalgs') ? undefined : TegundAndlagsFromJSON(json['tegundAngalgs']),
        'fastanumer': !exists(json, 'fastanumer') ? undefined : json['fastanumer'],
        'lysing': !exists(json, 'lysing') ? undefined : json['lysing'],
        'eignarhlutfall': !exists(json, 'eignarhlutfall') ? undefined : json['eignarhlutfall'],
        'fasteignamat': !exists(json, 'fasteignamat') ? undefined : json['fasteignamat'],
        'upphaed': !exists(json, 'upphaed') ? undefined : json['upphaed'],
        'gengiVextir': !exists(json, 'gengiVextir') ? undefined : json['gengiVextir'],
    };
}

export function EignirDanarbusErfdafjarskattToJSON(value?: EignirDanarbusErfdafjarskatt | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tegundAngalgs': TegundAndlagsToJSON(value.tegundAngalgs),
        'fastanumer': value.fastanumer,
        'lysing': value.lysing,
        'eignarhlutfall': value.eignarhlutfall,
        'fasteignamat': value.fasteignamat,
        'upphaed': value.upphaed,
        'gengiVextir': value.gengiVextir,
    };
}


