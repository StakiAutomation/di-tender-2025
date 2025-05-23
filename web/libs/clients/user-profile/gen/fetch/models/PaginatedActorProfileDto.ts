/* tslint:disable */
/* eslint-disable */
/**
 * User Profile backend
 * Backend providing user profiles for Island.is
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    MeActorProfileDto,
    MeActorProfileDtoFromJSON,
    MeActorProfileDtoFromJSONTyped,
    MeActorProfileDtoToJSON,
    PageInfoDto,
    PageInfoDtoFromJSON,
    PageInfoDtoFromJSONTyped,
    PageInfoDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedActorProfileDto
 */
export interface PaginatedActorProfileDto {
    /**
     * 
     * @type {Array<MeActorProfileDto>}
     * @memberof PaginatedActorProfileDto
     */
    data: Array<MeActorProfileDto>;
    /**
     * 
     * @type {PageInfoDto}
     * @memberof PaginatedActorProfileDto
     */
    pageInfo: PageInfoDto;
    /**
     * 
     * @type {number}
     * @memberof PaginatedActorProfileDto
     */
    totalCount: number;
}

export function PaginatedActorProfileDtoFromJSON(json: any): PaginatedActorProfileDto {
    return PaginatedActorProfileDtoFromJSONTyped(json, false);
}

export function PaginatedActorProfileDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedActorProfileDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(MeActorProfileDtoFromJSON)),
        'pageInfo': PageInfoDtoFromJSON(json['pageInfo']),
        'totalCount': json['totalCount'],
    };
}

export function PaginatedActorProfileDtoToJSON(value?: PaginatedActorProfileDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(MeActorProfileDtoToJSON)),
        'pageInfo': PageInfoDtoToJSON(value.pageInfo),
        'totalCount': value.totalCount,
    };
}


