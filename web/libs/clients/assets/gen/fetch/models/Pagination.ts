/* tslint:disable */
/* eslint-disable */
/**
 * Fasteignir-Xroad
 * Uppfletting í fasteignaskrá.
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
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    total?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    totalPages?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    offset?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pagination
     */
    hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Pagination
     */
    hasNextPage?: boolean;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'page': !exists(json, 'page') ? undefined : json['page'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'page': value.page,
        'pageSize': value.pageSize,
        'total': value.total,
        'totalPages': value.totalPages,
        'offset': value.offset,
        'hasPreviousPage': value.hasPreviousPage,
        'hasNextPage': value.hasNextPage,
    };
}


