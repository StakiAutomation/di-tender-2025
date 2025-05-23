/* tslint:disable */
/* eslint-disable */
/**
 * Tilkynna vinnuslys
 * Vefþjónusta til þess að senda inn tilkynningar um vinnuslys.
 *
 * The version of the OpenAPI document: v1
 * Contact: ut@vinnueftirlit.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface VictimForCreationDto
 */
export interface VictimForCreationDto {
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    victimsSSN?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    employmentStatusOfVictim?: number;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    employmentAgencySSN?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof VictimForCreationDto
     */
    startedEmploymentForCompany?: Date;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    lengthOfEmployment?: number;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    percentageOfFullWorkTime?: number;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    workhourArrangement?: number;
    /**
     * 
     * @type {Date}
     * @memberof VictimForCreationDto
     */
    startOfWorkingDay?: Date;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    workStation?: number;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    victimsOccupation?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VictimForCreationDto
     */
    absenceDueToAccident?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof VictimForCreationDto
     */
    specificPhysicalActivities?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    specificPhysicalActivityMostSevere?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VictimForCreationDto
     */
    workDeviations?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    workDeviationMostSevere?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VictimForCreationDto
     */
    contactModeOfInjuries?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    contactModeOfInjuryMostSevere?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VictimForCreationDto
     */
    partsOfBodyInjured?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    partOfBodyInjuredMostSevere?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof VictimForCreationDto
     */
    typesOfInjury?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof VictimForCreationDto
     */
    typeOfInjuryMostSevere?: string | null;
}

export function VictimForCreationDtoFromJSON(json: any): VictimForCreationDto {
    return VictimForCreationDtoFromJSONTyped(json, false);
}

export function VictimForCreationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VictimForCreationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'victimsSSN': !exists(json, 'victimsSSN') ? undefined : json['victimsSSN'],
        'employmentStatusOfVictim': !exists(json, 'employmentStatusOfVictim') ? undefined : json['employmentStatusOfVictim'],
        'employmentAgencySSN': !exists(json, 'employmentAgencySSN') ? undefined : json['employmentAgencySSN'],
        'startedEmploymentForCompany': !exists(json, 'startedEmploymentForCompany') ? undefined : (new Date(json['startedEmploymentForCompany'])),
        'lengthOfEmployment': !exists(json, 'lengthOfEmployment') ? undefined : json['lengthOfEmployment'],
        'percentageOfFullWorkTime': !exists(json, 'percentageOfFullWorkTime') ? undefined : json['percentageOfFullWorkTime'],
        'workhourArrangement': !exists(json, 'workhourArrangement') ? undefined : json['workhourArrangement'],
        'startOfWorkingDay': !exists(json, 'startOfWorkingDay') ? undefined : (new Date(json['startOfWorkingDay'])),
        'workStation': !exists(json, 'workStation') ? undefined : json['workStation'],
        'victimsOccupation': !exists(json, 'victimsOccupation') ? undefined : json['victimsOccupation'],
        'absenceDueToAccident': !exists(json, 'absenceDueToAccident') ? undefined : json['absenceDueToAccident'],
        'specificPhysicalActivities': !exists(json, 'specificPhysicalActivities') ? undefined : json['specificPhysicalActivities'],
        'specificPhysicalActivityMostSevere': !exists(json, 'specificPhysicalActivityMostSevere') ? undefined : json['specificPhysicalActivityMostSevere'],
        'workDeviations': !exists(json, 'workDeviations') ? undefined : json['workDeviations'],
        'workDeviationMostSevere': !exists(json, 'workDeviationMostSevere') ? undefined : json['workDeviationMostSevere'],
        'contactModeOfInjuries': !exists(json, 'contactModeOfInjuries') ? undefined : json['contactModeOfInjuries'],
        'contactModeOfInjuryMostSevere': !exists(json, 'contactModeOfInjuryMostSevere') ? undefined : json['contactModeOfInjuryMostSevere'],
        'partsOfBodyInjured': !exists(json, 'partsOfBodyInjured') ? undefined : json['partsOfBodyInjured'],
        'partOfBodyInjuredMostSevere': !exists(json, 'partOfBodyInjuredMostSevere') ? undefined : json['partOfBodyInjuredMostSevere'],
        'typesOfInjury': !exists(json, 'typesOfInjury') ? undefined : json['typesOfInjury'],
        'typeOfInjuryMostSevere': !exists(json, 'typeOfInjuryMostSevere') ? undefined : json['typeOfInjuryMostSevere'],
    };
}

export function VictimForCreationDtoToJSON(value?: VictimForCreationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'victimsSSN': value.victimsSSN,
        'employmentStatusOfVictim': value.employmentStatusOfVictim,
        'employmentAgencySSN': value.employmentAgencySSN,
        'startedEmploymentForCompany': value.startedEmploymentForCompany === undefined ? undefined : (value.startedEmploymentForCompany.toISOString()),
        'lengthOfEmployment': value.lengthOfEmployment,
        'percentageOfFullWorkTime': value.percentageOfFullWorkTime,
        'workhourArrangement': value.workhourArrangement,
        'startOfWorkingDay': value.startOfWorkingDay === undefined ? undefined : (value.startOfWorkingDay.toISOString()),
        'workStation': value.workStation,
        'victimsOccupation': value.victimsOccupation,
        'absenceDueToAccident': value.absenceDueToAccident,
        'specificPhysicalActivities': value.specificPhysicalActivities,
        'specificPhysicalActivityMostSevere': value.specificPhysicalActivityMostSevere,
        'workDeviations': value.workDeviations,
        'workDeviationMostSevere': value.workDeviationMostSevere,
        'contactModeOfInjuries': value.contactModeOfInjuries,
        'contactModeOfInjuryMostSevere': value.contactModeOfInjuryMostSevere,
        'partsOfBodyInjured': value.partsOfBodyInjured,
        'partOfBodyInjuredMostSevere': value.partOfBodyInjuredMostSevere,
        'typesOfInjury': value.typesOfInjury,
        'typeOfInjuryMostSevere': value.typeOfInjuryMostSevere,
    };
}


