/* tslint:disable */
/* eslint-disable */
/**
 * Forskráning Vegabréfa
 * The API retrieves information about identity documents
 *
 * The version of the OpenAPI document: v1
 * Contact: skra@skra.is
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Approval,
    ApprovalFromJSON,
    ApprovalFromJSONTyped,
    ApprovalToJSON,
    BioInfo,
    BioInfoFromJSON,
    BioInfoFromJSONTyped,
    BioInfoToJSON,
    ContactInfo,
    ContactInfoFromJSON,
    ContactInfoFromJSONTyped,
    ContactInfoToJSON,
    DeliveryAddress,
    DeliveryAddressFromJSON,
    DeliveryAddressFromJSONTyped,
    DeliveryAddressToJSON,
    Document,
    DocumentFromJSON,
    DocumentFromJSONTyped,
    DocumentToJSON,
} from './';

/**
 * 
 * @export
 * @interface Preregistration
 */
export interface Preregistration {
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    guid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    appliedForPersonId: string;
    /**
     * 
     * @type {number}
     * @memberof Preregistration
     */
    priority: number;
    /**
     * 
     * @type {BioInfo}
     * @memberof Preregistration
     */
    bioInfo?: BioInfo | null;
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    personalComment?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    deliveryName?: string | null;
    /**
     * 
     * @type {DeliveryAddress}
     * @memberof Preregistration
     */
    deliveryAddress?: DeliveryAddress | null;
    /**
     * 
     * @type {Approval}
     * @memberof Preregistration
     */
    approvalA?: Approval | null;
    /**
     * 
     * @type {Approval}
     * @memberof Preregistration
     */
    approvalB?: Approval | null;
    /**
     * 
     * @type {ContactInfo}
     * @memberof Preregistration
     */
    contactInfo?: ContactInfo | null;
    /**
     * 
     * @type {Array<Document>}
     * @memberof Preregistration
     */
    documents?: Array<Document> | null;
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof Preregistration
     */
    subType: string;
}

export function PreregistrationFromJSON(json: any): Preregistration {
    return PreregistrationFromJSONTyped(json, false);
}

export function PreregistrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Preregistration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guid': !exists(json, 'guid') ? undefined : json['guid'],
        'appliedForPersonId': json['appliedForPersonId'],
        'priority': json['priority'],
        'bioInfo': !exists(json, 'bioInfo') ? undefined : BioInfoFromJSON(json['bioInfo']),
        'personalComment': !exists(json, 'personalComment') ? undefined : json['personalComment'],
        'deliveryName': !exists(json, 'deliveryName') ? undefined : json['deliveryName'],
        'deliveryAddress': !exists(json, 'deliveryAddress') ? undefined : DeliveryAddressFromJSON(json['deliveryAddress']),
        'approvalA': !exists(json, 'approvalA') ? undefined : ApprovalFromJSON(json['approvalA']),
        'approvalB': !exists(json, 'approvalB') ? undefined : ApprovalFromJSON(json['approvalB']),
        'contactInfo': !exists(json, 'contactInfo') ? undefined : ContactInfoFromJSON(json['contactInfo']),
        'documents': !exists(json, 'documents') ? undefined : (json['documents'] === null ? null : (json['documents'] as Array<any>).map(DocumentFromJSON)),
        'type': json['type'],
        'subType': json['subType'],
    };
}

export function PreregistrationToJSON(value?: Preregistration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guid': value.guid,
        'appliedForPersonId': value.appliedForPersonId,
        'priority': value.priority,
        'bioInfo': BioInfoToJSON(value.bioInfo),
        'personalComment': value.personalComment,
        'deliveryName': value.deliveryName,
        'deliveryAddress': DeliveryAddressToJSON(value.deliveryAddress),
        'approvalA': ApprovalToJSON(value.approvalA),
        'approvalB': ApprovalToJSON(value.approvalB),
        'contactInfo': ContactInfoToJSON(value.contactInfo),
        'documents': value.documents === undefined ? undefined : (value.documents === null ? null : (value.documents as Array<any>).map(DocumentToJSON)),
        'type': value.type,
        'subType': value.subType,
    };
}


