/* tslint:disable */
/* eslint-disable */
/**
 * The Official Journal of Iceland Application API
 * This api is responsible for communications with the island.is application system.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CommentCreatorDto
 */
export interface CommentCreatorDto {
    /**
     * Id of the entity
     * @type {string}
     * @memberof CommentCreatorDto
     */
    id: string;
    /**
     * Title of the entity
     * @type {string}
     * @memberof CommentCreatorDto
     */
    title: string;
}

export function CommentCreatorDtoFromJSON(json: any): CommentCreatorDto {
    return CommentCreatorDtoFromJSONTyped(json, false);
}

export function CommentCreatorDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentCreatorDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
    };
}

export function CommentCreatorDtoToJSON(value?: CommentCreatorDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
    };
}


