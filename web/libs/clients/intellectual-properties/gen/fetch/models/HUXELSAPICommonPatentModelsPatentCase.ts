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
    HUXELSAPICommonDesignApplicationModelsSimpleAttachment,
    HUXELSAPICommonDesignApplicationModelsSimpleAttachmentFromJSON,
    HUXELSAPICommonDesignApplicationModelsSimpleAttachmentFromJSONTyped,
    HUXELSAPICommonDesignApplicationModelsSimpleAttachmentToJSON,
    HUXELSAPICommonPatentModelsAgent,
    HUXELSAPICommonPatentModelsAgentFromJSON,
    HUXELSAPICommonPatentModelsAgentFromJSONTyped,
    HUXELSAPICommonPatentModelsAgentToJSON,
    HUXELSAPICommonPatentModelsLienHolder,
    HUXELSAPICommonPatentModelsLienHolderFromJSON,
    HUXELSAPICommonPatentModelsLienHolderFromJSONTyped,
    HUXELSAPICommonPatentModelsLienHolderToJSON,
    HUXELSAPICommonPatentModelsOwner,
    HUXELSAPICommonPatentModelsOwnerFromJSON,
    HUXELSAPICommonPatentModelsOwnerFromJSONTyped,
    HUXELSAPICommonPatentModelsOwnerToJSON,
    HUXELSAPICommonPatentModelsUsageRightsHolder,
    HUXELSAPICommonPatentModelsUsageRightsHolderFromJSON,
    HUXELSAPICommonPatentModelsUsageRightsHolderFromJSONTyped,
    HUXELSAPICommonPatentModelsUsageRightsHolderToJSON,
    HUXELSAPICommonTMApplicationModelsPriceList,
    HUXELSAPICommonTMApplicationModelsPriceListFromJSON,
    HUXELSAPICommonTMApplicationModelsPriceListFromJSONTyped,
    HUXELSAPICommonTMApplicationModelsPriceListToJSON,
} from './';

/**
 * 
 * @export
 * @interface HUXELSAPICommonPatentModelsPatentCase
 */
export interface HUXELSAPICommonPatentModelsPatentCase {
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    caseType?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    enkid?: Array<string> | null;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsOwner}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    newOwner?: HUXELSAPICommonPatentModelsOwner;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsAgent}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    newAgent?: HUXELSAPICommonPatentModelsAgent;
    /**
     * 
     * @type {string}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    description?: string | null;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsAgent}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    applicant?: HUXELSAPICommonPatentModelsAgent;
    /**
     * 
     * @type {Array<HUXELSAPICommonDesignApplicationModelsSimpleAttachment>}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    attachments?: Array<HUXELSAPICommonDesignApplicationModelsSimpleAttachment> | null;
    /**
     * 
     * @type {HUXELSAPICommonTMApplicationModelsPriceList}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    prices?: HUXELSAPICommonTMApplicationModelsPriceList;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsLienHolder}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    lienHolder?: HUXELSAPICommonPatentModelsLienHolder;
    /**
     * 
     * @type {HUXELSAPICommonPatentModelsUsageRightsHolder}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    usageRightsHolder?: HUXELSAPICommonPatentModelsUsageRightsHolder;
    /**
     * 
     * @type {boolean}
     * @memberof HUXELSAPICommonPatentModelsPatentCase
     */
    paid?: boolean;
}

export function HUXELSAPICommonPatentModelsPatentCaseFromJSON(json: any): HUXELSAPICommonPatentModelsPatentCase {
    return HUXELSAPICommonPatentModelsPatentCaseFromJSONTyped(json, false);
}

export function HUXELSAPICommonPatentModelsPatentCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HUXELSAPICommonPatentModelsPatentCase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'caseType': !exists(json, 'caseType') ? undefined : json['caseType'],
        'enkid': !exists(json, 'enkid') ? undefined : json['enkid'],
        'newOwner': !exists(json, 'newOwner') ? undefined : HUXELSAPICommonPatentModelsOwnerFromJSON(json['newOwner']),
        'newAgent': !exists(json, 'newAgent') ? undefined : HUXELSAPICommonPatentModelsAgentFromJSON(json['newAgent']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'applicant': !exists(json, 'applicant') ? undefined : HUXELSAPICommonPatentModelsAgentFromJSON(json['applicant']),
        'attachments': !exists(json, 'attachments') ? undefined : (json['attachments'] === null ? null : (json['attachments'] as Array<any>).map(HUXELSAPICommonDesignApplicationModelsSimpleAttachmentFromJSON)),
        'prices': !exists(json, 'prices') ? undefined : HUXELSAPICommonTMApplicationModelsPriceListFromJSON(json['prices']),
        'lienHolder': !exists(json, 'lienHolder') ? undefined : HUXELSAPICommonPatentModelsLienHolderFromJSON(json['lienHolder']),
        'usageRightsHolder': !exists(json, 'usageRightsHolder') ? undefined : HUXELSAPICommonPatentModelsUsageRightsHolderFromJSON(json['usageRightsHolder']),
        'paid': !exists(json, 'paid') ? undefined : json['paid'],
    };
}

export function HUXELSAPICommonPatentModelsPatentCaseToJSON(value?: HUXELSAPICommonPatentModelsPatentCase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'caseType': value.caseType,
        'enkid': value.enkid,
        'newOwner': HUXELSAPICommonPatentModelsOwnerToJSON(value.newOwner),
        'newAgent': HUXELSAPICommonPatentModelsAgentToJSON(value.newAgent),
        'description': value.description,
        'applicant': HUXELSAPICommonPatentModelsAgentToJSON(value.applicant),
        'attachments': value.attachments === undefined ? undefined : (value.attachments === null ? null : (value.attachments as Array<any>).map(HUXELSAPICommonDesignApplicationModelsSimpleAttachmentToJSON)),
        'prices': HUXELSAPICommonTMApplicationModelsPriceListToJSON(value.prices),
        'lienHolder': HUXELSAPICommonPatentModelsLienHolderToJSON(value.lienHolder),
        'usageRightsHolder': HUXELSAPICommonPatentModelsUsageRightsHolderToJSON(value.usageRightsHolder),
        'paid': value.paid,
    };
}


