/* tslint:disable */
/* eslint-disable */
/**
 * Session log API
 * Session log to track user sessions.   The swagger document can be downloaded by appending `-json` to the last path segment.
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
 * @interface Session
 */
export interface Session {
    /**
     * 
     * @type {object}
     * @memberof Session
     */
    id: object;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    sessionId: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    actorNationalId: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    subjectNationalId: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    clientId: string;
    /**
     * 
     * @type {Date}
     * @memberof Session
     */
    timestamp: Date;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    userAgent: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    device?: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    ip: string;
    /**
     * 
     * @type {string}
     * @memberof Session
     */
    ipLocation?: string;
}

export function SessionFromJSON(json: any): Session {
    return SessionFromJSONTyped(json, false);
}

export function SessionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Session {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'sessionId': json['sessionId'],
        'actorNationalId': json['actorNationalId'],
        'subjectNationalId': json['subjectNationalId'],
        'clientId': json['clientId'],
        'timestamp': (new Date(json['timestamp'])),
        'userAgent': json['userAgent'],
        'device': !exists(json, 'device') ? undefined : json['device'],
        'ip': json['ip'],
        'ipLocation': !exists(json, 'ipLocation') ? undefined : json['ipLocation'],
    };
}

export function SessionToJSON(value?: Session | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'sessionId': value.sessionId,
        'actorNationalId': value.actorNationalId,
        'subjectNationalId': value.subjectNationalId,
        'clientId': value.clientId,
        'timestamp': (value.timestamp.toISOString()),
        'userAgent': value.userAgent,
        'device': value.device,
        'ip': value.ip,
        'ipLocation': value.ipLocation,
    };
}


