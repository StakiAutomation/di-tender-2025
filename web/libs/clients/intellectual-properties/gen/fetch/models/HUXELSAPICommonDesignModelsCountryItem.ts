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
 * @interface HUXELSAPICommonDesignModelsCountryItem
 */
export interface HUXELSAPICommonDesignModelsCountryItem {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsCountryItem
     */
    heiti?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsCountryItem
     */
    landakodi?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof HUXELSAPICommonDesignModelsCountryItem
     */
    adiliAdParis?: boolean;
}

export function HUXELSAPICommonDesignModelsCountryItemFromJSON(json: any): HUXELSAPICommonDesignModelsCountryItem {
    return HUXELSAPICommonDesignModelsCountryItemFromJSONTyped(json, false);
}

export function HUXELSAPICommonDesignModelsCountryItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonDesignModelsCountryItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'heiti': !exists(json, 'heiti') ? undefined : json['heiti'],
        'landakodi': !exists(json, 'landakodi') ? undefined : json['landakodi'],
        'adiliAdParis': !exists(json, 'adiliAdParis') ? undefined : json['adiliAdParis'],
    };
}

export function HUXELSAPICommonDesignModelsCountryItemToJSON(value?: HUXELSAPICommonDesignModelsCountryItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'heiti': value.heiti,
        'landakodi': value.landakodi,
        'adiliAdParis': value.adiliAdParis,
    };
}


