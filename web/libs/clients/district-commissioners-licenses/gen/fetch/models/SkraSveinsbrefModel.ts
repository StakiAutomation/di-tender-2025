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
 * @interface SkraSveinsbrefModel
 */
export interface SkraSveinsbrefModel {
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    audkenni?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    kennitala?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    idngrein?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    profstadur?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    dagSveinsprof?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    burtfaraskyrteiniFra?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    dagsBurtfaraskyrteini?: string;
    /**
     * 
     * @type {string}
     * @memberof SkraSveinsbrefModel
     */
    dagsAfhendingarSveinsbref?: string;
    /**
     * 
     * @type {number}
     * @memberof SkraSveinsbrefModel
     */
    stadidFallid: number;
}

export function SkraSveinsbrefModelFromJSON(json: any): SkraSveinsbrefModel {
    return SkraSveinsbrefModelFromJSONTyped(json, false);
}

export function SkraSveinsbrefModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): SkraSveinsbrefModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audkenni': !exists(json, 'audkenni') ? undefined : json['audkenni'],
        'kennitala': !exists(json, 'kennitala') ? undefined : json['kennitala'],
        'idngrein': !exists(json, 'idngrein') ? undefined : json['idngrein'],
        'profstadur': !exists(json, 'profstadur') ? undefined : json['profstadur'],
        'dagSveinsprof': !exists(json, 'dagSveinsprof') ? undefined : json['dagSveinsprof'],
        'burtfaraskyrteiniFra': !exists(json, 'burtfaraskyrteiniFra') ? undefined : json['burtfaraskyrteiniFra'],
        'dagsBurtfaraskyrteini': !exists(json, 'dagsBurtfaraskyrteini') ? undefined : json['dagsBurtfaraskyrteini'],
        'dagsAfhendingarSveinsbref': !exists(json, 'dagsAfhendingarSveinsbref') ? undefined : json['dagsAfhendingarSveinsbref'],
        'stadidFallid': json['stadidFallid'],
    };
}

export function SkraSveinsbrefModelToJSON(value?: SkraSveinsbrefModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audkenni': value.audkenni,
        'kennitala': value.kennitala,
        'idngrein': value.idngrein,
        'profstadur': value.profstadur,
        'dagSveinsprof': value.dagSveinsprof,
        'burtfaraskyrteiniFra': value.burtfaraskyrteiniFra,
        'dagsBurtfaraskyrteini': value.dagsBurtfaraskyrteini,
        'dagsAfhendingarSveinsbref': value.dagsAfhendingarSveinsbref,
        'stadidFallid': value.stadidFallid,
    };
}


