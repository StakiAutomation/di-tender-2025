/* tslint:disable */
/* eslint-disable */
/**
 * Vinnuvélauppfletting
 * Vefþjónusta til þess að fletta upp á vinnuvélum.
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
 * @interface MachineLicenseCategoryDto
 */
export interface MachineLicenseCategoryDto {
    /**
     * 
     * @type {string}
     * @memberof MachineLicenseCategoryDto
     */
    categoryName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MachineLicenseCategoryDto
     */
    categoryNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof MachineLicenseCategoryDto
     */
    categoryPrefix?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof MachineLicenseCategoryDto
     */
    hasInstructorLicense?: boolean;
}

export function MachineLicenseCategoryDtoFromJSON(json: any): MachineLicenseCategoryDto {
    return MachineLicenseCategoryDtoFromJSONTyped(json, false);
}

export function MachineLicenseCategoryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MachineLicenseCategoryDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryName': !exists(json, 'categoryName') ? undefined : json['categoryName'],
        'categoryNameEn': !exists(json, 'categoryNameEn') ? undefined : json['categoryNameEn'],
        'categoryPrefix': !exists(json, 'categoryPrefix') ? undefined : json['categoryPrefix'],
        'hasInstructorLicense': !exists(json, 'hasInstructorLicense') ? undefined : json['hasInstructorLicense'],
    };
}

export function MachineLicenseCategoryDtoToJSON(value?: MachineLicenseCategoryDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryName': value.categoryName,
        'categoryNameEn': value.categoryNameEn,
        'categoryPrefix': value.categoryPrefix,
        'hasInstructorLicense': value.hasInstructorLicense,
    };
}


