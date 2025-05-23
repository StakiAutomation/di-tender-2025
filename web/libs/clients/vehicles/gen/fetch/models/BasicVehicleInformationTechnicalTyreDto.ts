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
 * @interface BasicVehicleInformationTechnicalTyreDto
 */
export interface BasicVehicleInformationTechnicalTyreDto {
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationTechnicalTyreDto
     */
    tyreaxle1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationTechnicalTyreDto
     */
    tyreaxle2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationTechnicalTyreDto
     */
    tyreaxle3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationTechnicalTyreDto
     */
    tyreaxle4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BasicVehicleInformationTechnicalTyreDto
     */
    tyreaxle5?: string | null;
}

export function BasicVehicleInformationTechnicalTyreDtoFromJSON(json: any): BasicVehicleInformationTechnicalTyreDto {
    return BasicVehicleInformationTechnicalTyreDtoFromJSONTyped(json, false);
}

export function BasicVehicleInformationTechnicalTyreDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicVehicleInformationTechnicalTyreDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tyreaxle1': !exists(json, 'tyreaxle1') ? undefined : json['tyreaxle1'],
        'tyreaxle2': !exists(json, 'tyreaxle2') ? undefined : json['tyreaxle2'],
        'tyreaxle3': !exists(json, 'tyreaxle3') ? undefined : json['tyreaxle3'],
        'tyreaxle4': !exists(json, 'tyreaxle4') ? undefined : json['tyreaxle4'],
        'tyreaxle5': !exists(json, 'tyreaxle5') ? undefined : json['tyreaxle5'],
    };
}

export function BasicVehicleInformationTechnicalTyreDtoToJSON(value?: BasicVehicleInformationTechnicalTyreDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tyreaxle1': value.tyreaxle1,
        'tyreaxle2': value.tyreaxle2,
        'tyreaxle3': value.tyreaxle3,
        'tyreaxle4': value.tyreaxle4,
        'tyreaxle5': value.tyreaxle5,
    };
}


