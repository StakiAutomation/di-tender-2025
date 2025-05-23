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
 * @interface BasicVehicleInformationTechnicalMassDto
 */
export interface BasicVehicleInformationTechnicalMassDto {
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massinro?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massofveh?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massdaxle1?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massdaxle2?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massdaxle3?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massdaxle4?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massdaxle5?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massmaxle1?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massmaxle2?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massmaxle3?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massmaxle4?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massmaxle5?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massladen?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massoftrbr?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massoftrunbr?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massofcomb?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    massatcoup?: number | null;
    /**
     * 
     * @type {number}
     * @memberof BasicVehicleInformationTechnicalMassDto
     */
    masscapacity?: number | null;
}

export function BasicVehicleInformationTechnicalMassDtoFromJSON(json: any): BasicVehicleInformationTechnicalMassDto {
    return BasicVehicleInformationTechnicalMassDtoFromJSONTyped(json, false);
}

export function BasicVehicleInformationTechnicalMassDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicVehicleInformationTechnicalMassDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'massinro': !exists(json, 'massinro') ? undefined : json['massinro'],
        'massofveh': !exists(json, 'massofveh') ? undefined : json['massofveh'],
        'massdaxle1': !exists(json, 'massdaxle1') ? undefined : json['massdaxle1'],
        'massdaxle2': !exists(json, 'massdaxle2') ? undefined : json['massdaxle2'],
        'massdaxle3': !exists(json, 'massdaxle3') ? undefined : json['massdaxle3'],
        'massdaxle4': !exists(json, 'massdaxle4') ? undefined : json['massdaxle4'],
        'massdaxle5': !exists(json, 'massdaxle5') ? undefined : json['massdaxle5'],
        'massmaxle1': !exists(json, 'massmaxle1') ? undefined : json['massmaxle1'],
        'massmaxle2': !exists(json, 'massmaxle2') ? undefined : json['massmaxle2'],
        'massmaxle3': !exists(json, 'massmaxle3') ? undefined : json['massmaxle3'],
        'massmaxle4': !exists(json, 'massmaxle4') ? undefined : json['massmaxle4'],
        'massmaxle5': !exists(json, 'massmaxle5') ? undefined : json['massmaxle5'],
        'massladen': !exists(json, 'massladen') ? undefined : json['massladen'],
        'massoftrbr': !exists(json, 'massoftrbr') ? undefined : json['massoftrbr'],
        'massoftrunbr': !exists(json, 'massoftrunbr') ? undefined : json['massoftrunbr'],
        'massofcomb': !exists(json, 'massofcomb') ? undefined : json['massofcomb'],
        'massatcoup': !exists(json, 'massatcoup') ? undefined : json['massatcoup'],
        'masscapacity': !exists(json, 'masscapacity') ? undefined : json['masscapacity'],
    };
}

export function BasicVehicleInformationTechnicalMassDtoToJSON(value?: BasicVehicleInformationTechnicalMassDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'massinro': value.massinro,
        'massofveh': value.massofveh,
        'massdaxle1': value.massdaxle1,
        'massdaxle2': value.massdaxle2,
        'massdaxle3': value.massdaxle3,
        'massdaxle4': value.massdaxle4,
        'massdaxle5': value.massdaxle5,
        'massmaxle1': value.massmaxle1,
        'massmaxle2': value.massmaxle2,
        'massmaxle3': value.massmaxle3,
        'massmaxle4': value.massmaxle4,
        'massmaxle5': value.massmaxle5,
        'massladen': value.massladen,
        'massoftrbr': value.massoftrbr,
        'massoftrunbr': value.massoftrunbr,
        'massofcomb': value.massofcomb,
        'massatcoup': value.massatcoup,
        'masscapacity': value.masscapacity,
    };
}


