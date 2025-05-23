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
    HeimagistingDetail,
    HeimagistingDetailFromJSON,
    HeimagistingDetailFromJSONTyped,
    HeimagistingDetailToJSON,
} from './';

/**
 * 
 * @export
 * @interface HeimagistingarModel
 */
export interface HeimagistingarModel {
    /**
     * 
     * @type {Array<HeimagistingDetail>}
     * @memberof HeimagistingarModel
     */
    leyfi?: Array<HeimagistingDetail> | null;
}

export function HeimagistingarModelFromJSON(json: any): HeimagistingarModel {
    return HeimagistingarModelFromJSONTyped(json, false);
}

export function HeimagistingarModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeimagistingarModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'leyfi': !exists(json, 'leyfi') ? undefined : (json['leyfi'] === null ? null : (json['leyfi'] as Array<any>).map(HeimagistingDetailFromJSON)),
    };
}

export function HeimagistingarModelToJSON(value?: HeimagistingarModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'leyfi': value.leyfi === undefined ? undefined : (value.leyfi === null ? null : (value.leyfi as Array<any>).map(HeimagistingDetailToJSON)),
    };
}


