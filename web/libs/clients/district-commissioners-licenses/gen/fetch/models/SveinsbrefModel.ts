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
 * @interface SveinsbrefModel
 */
export interface SveinsbrefModel {
    /**
     * 
     * @type {string}
     * @memberof SveinsbrefModel
     */
    nafn?: string;
    /**
     * 
     * @type {string}
     * @memberof SveinsbrefModel
     */
    idngrein?: string;
    /**
     * 
     * @type {Date}
     * @memberof SveinsbrefModel
     */
    gildirFra?: Date;
}

export function SveinsbrefModelFromJSON(json: any): SveinsbrefModel {
    return SveinsbrefModelFromJSONTyped(json, false);
}

export function SveinsbrefModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SveinsbrefModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nafn': !exists(json, 'nafn') ? undefined : json['nafn'],
        'idngrein': !exists(json, 'idngrein') ? undefined : json['idngrein'],
        'gildirFra': !exists(json, 'gildirFra') ? undefined : (new Date(json['gildirFra'])),
    };
}

export function SveinsbrefModelToJSON(value?: SveinsbrefModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nafn': value.nafn,
        'idngrein': value.idngrein,
        'gildirFra': value.gildirFra === undefined ? undefined : (value.gildirFra.toISOString()),
    };
}


