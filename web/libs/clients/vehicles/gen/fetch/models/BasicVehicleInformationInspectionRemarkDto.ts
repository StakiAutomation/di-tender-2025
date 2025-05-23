/* tslint:disable */
/* eslint-disable */
/**
 * SamgÃ¶ngustofa
 * Leitar eftir Ã¶kutÃ¦kjum Ãºt frÃ¡ fastanÃºmeri, skrï¿½ningarnÃºmeri eÃ°a verksmiÃ°junÃºmeri - Release-46 : 20241106.1
 *
 * The version of the OpenAPI document: v1
 * Contact: samgongustofa@samgongustofa.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BasicVehicleInformationInspectionRemarkDto
 */
export interface BasicVehicleInformationInspectionRemarkDto {
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    itemcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    itemname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    resultcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    resultname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    nr?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    inspectionItemDescription?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationInspectionRemarkDto
     */
    explanation?: string | null;
}

export function BasicVehicleInformationInspectionRemarkDtoFromJSON(json: any): BasicVehicleInformationInspectionRemarkDto {
    return BasicVehicleInformationInspectionRemarkDtoFromJSONTyped(json, false);
}

export function BasicVehicleInformationInspectionRemarkDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicVehicleInformationInspectionRemarkDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemcode': !exists(json, 'itemcode') ? undefined : json['itemcode'],
        'itemname': !exists(json, 'itemname') ? undefined : json['itemname'],
        'resultcode': !exists(json, 'resultcode') ? undefined : json['resultcode'],
        'resultname': !exists(json, 'resultname') ? undefined : json['resultname'],
        'nr': !exists(json, 'nr') ? undefined : json['nr'],
        'inspectionItemDescription': !exists(json, 'inspectionItemDescription') ? undefined : json['inspectionItemDescription'],
        'explanation': !exists(json, 'explanation') ? undefined : json['explanation'],
    };
}

export function BasicVehicleInformationInspectionRemarkDtoToJSON(value?: BasicVehicleInformationInspectionRemarkDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemcode': value.itemcode,
        'itemname': value.itemname,
        'resultcode': value.resultcode,
        'resultname': value.resultname,
        'nr': value.nr,
        'inspectionItemDescription': value.inspectionItemDescription,
        'explanation': value.explanation,
    };
}


