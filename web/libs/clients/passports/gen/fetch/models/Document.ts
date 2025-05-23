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
/**
 * 
 * @export
 * @interface Document
 */
export interface Document {
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    documentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    contentType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    content?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Document
     */
    dataSpecification?: string | null;
}

export function DocumentFromJSON(json: any): Document {
    return DocumentFromJSONTyped(json, false);
}

export function DocumentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Document {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'documentType': !exists(json, 'documentType') ? undefined : json['documentType'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'dataSpecification': !exists(json, 'dataSpecification') ? undefined : json['dataSpecification'],
    };
}

export function DocumentToJSON(value?: Document | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'documentType': value.documentType,
        'contentType': value.contentType,
        'content': value.content,
        'dataSpecification': value.dataSpecification,
    };
}


