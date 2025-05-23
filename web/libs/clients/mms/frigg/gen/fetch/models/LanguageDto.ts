/* tslint:disable */
/* eslint-disable */
/**
 * MMS FORM SERVICE API
 * Frigg - student information system
 *
 * The version of the OpenAPI document: 1
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
 * @interface LanguageDto
 */
export interface LanguageDto {
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    languageEnvironment: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    preferredLanguage: string;
    /**
     * 
     * @type {boolean}
     * @memberof LanguageDto
     */
    signLanguage: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LanguageDto
     */
    guardianRequiresInterpreter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    firstLanguage: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    secondLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    thirdLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof LanguageDto
     */
    fourthLanguage?: string;
}

export function LanguageDtoFromJSON(json: any): LanguageDto {
    return LanguageDtoFromJSONTyped(json, false);
}

export function LanguageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'languageEnvironment': json['languageEnvironment'],
        'preferredLanguage': json['preferredLanguage'],
        'signLanguage': json['signLanguage'],
        'guardianRequiresInterpreter': !exists(json, 'guardianRequiresInterpreter') ? undefined : json['guardianRequiresInterpreter'],
        'firstLanguage': json['firstLanguage'],
        'secondLanguage': !exists(json, 'secondLanguage') ? undefined : json['secondLanguage'],
        'thirdLanguage': !exists(json, 'thirdLanguage') ? undefined : json['thirdLanguage'],
        'fourthLanguage': !exists(json, 'fourthLanguage') ? undefined : json['fourthLanguage'],
    };
}

export function LanguageDtoToJSON(value?: LanguageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'languageEnvironment': value.languageEnvironment,
        'preferredLanguage': value.preferredLanguage,
        'signLanguage': value.signLanguage,
        'guardianRequiresInterpreter': value.guardianRequiresInterpreter,
        'firstLanguage': value.firstLanguage,
        'secondLanguage': value.secondLanguage,
        'thirdLanguage': value.thirdLanguage,
        'fourthLanguage': value.fourthLanguage,
    };
}


