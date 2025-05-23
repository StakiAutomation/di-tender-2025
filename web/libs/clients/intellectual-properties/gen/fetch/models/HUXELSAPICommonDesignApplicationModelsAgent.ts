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
 * @interface HUXELSAPICommonDesignApplicationModelsAgent
 */
export interface HUXELSAPICommonDesignApplicationModelsAgent {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    address?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    county?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    postalCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    ssn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonDesignApplicationModelsAgent
     */
    annadTexti?: string | null;
}

export function HUXELSAPICommonDesignApplicationModelsAgentFromJSON(json: any): HUXELSAPICommonDesignApplicationModelsAgent {
    return HUXELSAPICommonDesignApplicationModelsAgentFromJSONTyped(json, false);
}

export function HUXELSAPICommonDesignApplicationModelsAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonDesignApplicationModelsAgent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'annadTexti': !exists(json, 'annadTexti') ? undefined : json['annadTexti'],
    };
}

export function HUXELSAPICommonDesignApplicationModelsAgentToJSON(value?: HUXELSAPICommonDesignApplicationModelsAgent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'address': value.address,
        'country': value.country,
        'county': value.county,
        'postalCode': value.postalCode,
        'ssn': value.ssn,
        'email': value.email,
        'phone': value.phone,
        'mobile': value.mobile,
        'annadTexti': value.annadTexti,
    };
}


