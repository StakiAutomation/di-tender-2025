/* tslint:disable */
/* eslint-disable */
/**
 * TachoNet API
 * Vefþjónustur fyrir umsóknir um ökuritakort hjá island.is
 *
 * The version of the OpenAPI document: 1.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * 
 * @export
 * @enum {string}
 */
export enum CardIssueType {
    Primary = 'Primary',
    Renewal = 'Renewal',
    Reissue = 'Reissue',
    Republication = 'Republication'
}

export function CardIssueTypeFromJSON(json: any): CardIssueType {
    return CardIssueTypeFromJSONTyped(json, false);
}

export function CardIssueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardIssueType {
    return json as CardIssueType;
}

export function CardIssueTypeToJSON(value?: CardIssueType | null): any {
    return value as any;
}

