/* tslint:disable */
/* eslint-disable */
/**
 * MMS Island.is application API
 * API for Island.is
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    LanguageDto,
    LanguageDtoFromJSON,
    LanguageDtoFromJSONTyped,
    LanguageDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface SchoolDto
 */
export interface SchoolDto {
    /**
     * What school is being applied to
     * @type {string}
     * @memberof SchoolDto
     */
    schoolId?: string;
    /**
     * Name of school
     * @type {string}
     * @memberof SchoolDto
     */
    name?: string | null;
    /**
     * National Id of school
     * @type {string}
     * @memberof SchoolDto
     */
    nationalId?: string | null;
    /**
     * Zip code of the schhool
     * @type {string}
     * @memberof SchoolDto
     */
    postCode?: string | null;
    /**
     * School address
     * @type {string}
     * @memberof SchoolDto
     */
    address?: string | null;
    /**
     * School municipality
     * @type {string}
     * @memberof SchoolDto
     */
    municipality?: string | null;
    /**
     * Does the school offer a dormitory
     * @type {boolean}
     * @memberof SchoolDto
     */
    availableDormitory?: boolean;
    /**
     * Abbr for school
     * @type {string}
     * @memberof SchoolDto
     */
    abbreviation?: string | null;
    /**
     * Email address of school
     * @type {string}
     * @memberof SchoolDto
     */
    email?: string | null;
    /**
     * Phone number for school
     * @type {string}
     * @memberof SchoolDto
     */
    phoneNumber?: string | null;
    /**
     * Website address for school
     * @type {string}
     * @memberof SchoolDto
     */
    website?: string | null;
    /**
     * If any programmes are open for admission
     * @type {boolean}
     * @memberof SchoolDto
     */
    anyOpenForAdmissionGeneral?: boolean;
    /**
     * If any programmes are open for admission for freshman
     * @type {boolean}
     * @memberof SchoolDto
     */
    anyOpenForAdmissionFreshman?: boolean;
    /**
     * Third languageges tought in school
     * @type {Array<LanguageDto>}
     * @memberof SchoolDto
     */
    thirdLanguages?: Array<LanguageDto> | null;
    /**
     * Nordic languageges tought in school
     * @type {Array<LanguageDto>}
     * @memberof SchoolDto
     */
    nordicLanguages?: Array<LanguageDto> | null;
}

export function SchoolDtoFromJSON(json: any): SchoolDto {
    return SchoolDtoFromJSONTyped(json, false);
}

export function SchoolDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SchoolDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schoolId': !exists(json, 'schoolId') ? undefined : json['schoolId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nationalId': !exists(json, 'nationalId') ? undefined : json['nationalId'],
        'postCode': !exists(json, 'postCode') ? undefined : json['postCode'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'municipality': !exists(json, 'municipality') ? undefined : json['municipality'],
        'availableDormitory': !exists(json, 'availableDormitory') ? undefined : json['availableDormitory'],
        'abbreviation': !exists(json, 'abbreviation') ? undefined : json['abbreviation'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'anyOpenForAdmissionGeneral': !exists(json, 'anyOpenForAdmissionGeneral') ? undefined : json['anyOpenForAdmissionGeneral'],
        'anyOpenForAdmissionFreshman': !exists(json, 'anyOpenForAdmissionFreshman') ? undefined : json['anyOpenForAdmissionFreshman'],
        'thirdLanguages': !exists(json, 'thirdLanguages') ? undefined : (json['thirdLanguages'] === null ? null : (json['thirdLanguages'] as Array<any>).map(LanguageDtoFromJSON)),
        'nordicLanguages': !exists(json, 'nordicLanguages') ? undefined : (json['nordicLanguages'] === null ? null : (json['nordicLanguages'] as Array<any>).map(LanguageDtoFromJSON)),
    };
}

export function SchoolDtoToJSON(value?: SchoolDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schoolId': value.schoolId,
        'name': value.name,
        'nationalId': value.nationalId,
        'postCode': value.postCode,
        'address': value.address,
        'municipality': value.municipality,
        'availableDormitory': value.availableDormitory,
        'abbreviation': value.abbreviation,
        'email': value.email,
        'phoneNumber': value.phoneNumber,
        'website': value.website,
        'anyOpenForAdmissionGeneral': value.anyOpenForAdmissionGeneral,
        'anyOpenForAdmissionFreshman': value.anyOpenForAdmissionFreshman,
        'thirdLanguages': value.thirdLanguages === undefined ? undefined : (value.thirdLanguages === null ? null : (value.thirdLanguages as Array<any>).map(LanguageDtoToJSON)),
        'nordicLanguages': value.nordicLanguages === undefined ? undefined : (value.nordicLanguages === null ? null : (value.nordicLanguages as Array<any>).map(LanguageDtoToJSON)),
    };
}


