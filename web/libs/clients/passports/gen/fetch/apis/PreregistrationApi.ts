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


import * as runtime from '../runtime';
import {
    Preregistration,
    PreregistrationFromJSON,
    PreregistrationToJSON,
} from '../models';

export interface PreregistrationDeletePreregRequest {
    guid: string | null;
    xRoadClient: string;
}

export interface PreregistrationGetPreregistrationRequest {
    status: string | null;
    xRoadClient: string;
}

export interface PreregistrationPreregistrationRequest {
    xRoadClient: string;
    preregistration: Preregistration;
}

/**
 * 
 */
export class PreregistrationApi extends runtime.BaseAPI {

    /**
     */
    async preregistrationDeletePreregRaw(requestParameters: PreregistrationDeletePreregRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.guid === null || requestParameters.guid === undefined) {
            throw new runtime.RequiredError('guid','Required parameter requestParameters.guid was null or undefined when calling preregistrationDeletePrereg.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling preregistrationDeletePrereg.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/preregistration/{guid}`.replace(`{${"guid"}}`, encodeURIComponent(String(requestParameters.guid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async preregistrationDeletePrereg(requestParameters: PreregistrationDeletePreregRequest): Promise<Array<string>> {
        const response = await this.preregistrationDeletePreregRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async preregistrationGetPreregistrationRaw(requestParameters: PreregistrationGetPreregistrationRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.status === null || requestParameters.status === undefined) {
            throw new runtime.RequiredError('status','Required parameter requestParameters.status was null or undefined when calling preregistrationGetPreregistration.');
        }

        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling preregistrationGetPreregistration.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/preregistration/getbystatus/{status}`.replace(`{${"status"}}`, encodeURIComponent(String(requestParameters.status))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async preregistrationGetPreregistration(requestParameters: PreregistrationGetPreregistrationRequest): Promise<Array<string>> {
        const response = await this.preregistrationGetPreregistrationRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async preregistrationPreregistrationRaw(requestParameters: PreregistrationPreregistrationRequest): Promise<runtime.ApiResponse<Array<string>>> {
        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling preregistrationPreregistration.');
        }

        if (requestParameters.preregistration === null || requestParameters.preregistration === undefined) {
            throw new runtime.RequiredError('preregistration','Required parameter requestParameters.preregistration was null or undefined when calling preregistrationPreregistration.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/preregistration`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PreregistrationToJSON(requestParameters.preregistration),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async preregistrationPreregistration(requestParameters: PreregistrationPreregistrationRequest): Promise<Array<string>> {
        const response = await this.preregistrationPreregistrationRaw(requestParameters);
        return await response.value();
    }

}
