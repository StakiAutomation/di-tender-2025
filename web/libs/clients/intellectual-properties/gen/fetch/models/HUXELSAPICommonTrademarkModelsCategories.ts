/* tslint:disable */
/* eslint-disable */
/**
 * Hugverkastofan WebAPI
 * Hugverkastofan WebAPI v3
 *
 * The version of the OpenAPI document: v3
 * Contact: ut@hugverk.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface HUXELSAPICommonTrademarkModelsCategories
 */
export interface HUXELSAPICommonTrademarkModelsCategories {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonTrademarkModelsCategories
     */
    categoryNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonTrademarkModelsCategories
     */
    categoryDescription?: string | null;
}

export function HUXELSAPICommonTrademarkModelsCategoriesFromJSON(json: any): HUXELSAPICommonTrademarkModelsCategories {
    return HUXELSAPICommonTrademarkModelsCategoriesFromJSONTyped(json, false);
}

export function HUXELSAPICommonTrademarkModelsCategoriesFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonTrademarkModelsCategories {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'categoryNumber': !exists(json, 'categoryNumber') ? undefined : json['categoryNumber'],
        'categoryDescription': !exists(json, 'categoryDescription') ? undefined : json['categoryDescription'],
    };
}

export function HUXELSAPICommonTrademarkModelsCategoriesToJSON(value?: HUXELSAPICommonTrademarkModelsCategories | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'categoryNumber': value.categoryNumber,
        'categoryDescription': value.categoryDescription,
    };
}


