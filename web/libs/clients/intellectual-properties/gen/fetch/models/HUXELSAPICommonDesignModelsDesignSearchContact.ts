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
import {
    HUXELSAPICommonDesignModelsDesignCountry,
    HUXELSAPICommonDesignModelsDesignCountryFromJSON,
    HUXELSAPICommonDesignModelsDesignCountryFromJSONTyped,
    HUXELSAPICommonDesignModelsDesignCountryToJSON,
} from './';

/**
 * 
 * @export
 * @interface HUXELSAPICommonDesignModelsDesignSearchContact
 */
export interface HUXELSAPICommonDesignModelsDesignSearchContact {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    postalcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    city?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    country?: string | null;
    /**
     * 
     * @type {HUXELSAPICommonDesignModelsDesignCountry}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    countryDetails?: HUXELSAPICommonDesignModelsDesignCountry;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    telephone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignModelsDesignSearchContact
     */
    mobilephone?: string | null;
}

export function HUXELSAPICommonDesignModelsDesignSearchContactFromJSON(json: any): HUXELSAPICommonDesignModelsDesignSearchContact {
    return HUXELSAPICommonDesignModelsDesignSearchContactFromJSONTyped(json, false);
}

export function HUXELSAPICommonDesignModelsDesignSearchContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonDesignModelsDesignSearchContact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'postalcode': !exists(json, 'postalcode') ? undefined : json['postalcode'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'countryDetails': !exists(json, 'countryDetails') ? undefined : HUXELSAPICommonDesignModelsDesignCountryFromJSON(json['countryDetails']),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'telephone': !exists(json, 'telephone') ? undefined : json['telephone'],
        'mobilephone': !exists(json, 'mobilephone') ? undefined : json['mobilephone'],
    };
}

export function HUXELSAPICommonDesignModelsDesignSearchContactToJSON(value?: HUXELSAPICommonDesignModelsDesignSearchContact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': value.address,
        'postalcode': value.postalcode,
        'city': value.city,
        'country': value.country,
        'countryDetails': HUXELSAPICommonDesignModelsDesignCountryToJSON(value.countryDetails),
        'email': value.email,
        'telephone': value.telephone,
        'mobilephone': value.mobilephone,
    };
}


