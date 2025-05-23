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
    IdentityDocumentChildrenResponse,
    IdentityDocumentChildrenResponseFromJSON,
    IdentityDocumentChildrenResponseToJSON,
    IdentityDocumentResponse,
    IdentityDocumentResponseFromJSON,
    IdentityDocumentResponseToJSON,
} from '../models';

export interface IdentityDocumentGetChildrenIdentityDocumentRequest {
    xRoadClient: string;
    type?: string | null;
}

export interface IdentityDocumentGetIdentityDocumentRequest {
    xRoadClient: string;
    type?: string | null;
}

/**
 * 
 */
export class IdentityDocumentApi extends runtime.BaseAPI {

    /**
     */
    async identityDocumentGetChildrenIdentityDocumentRaw(requestParameters: IdentityDocumentGetChildrenIdentityDocumentRequest): Promise<runtime.ApiResponse<Array<IdentityDocumentChildrenResponse>>> {
        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling identityDocumentGetChildrenIdentityDocument.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/identitydocument/childrenidentitydocument`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentityDocumentChildrenResponseFromJSON));
    }

    /**
     */
    async identityDocumentGetChildrenIdentityDocument(requestParameters: IdentityDocumentGetChildrenIdentityDocumentRequest): Promise<Array<IdentityDocumentChildrenResponse>> {
        const response = await this.identityDocumentGetChildrenIdentityDocumentRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async identityDocumentGetIdentityDocumentRaw(requestParameters: IdentityDocumentGetIdentityDocumentRequest): Promise<runtime.ApiResponse<Array<IdentityDocumentResponse>>> {
        if (requestParameters.xRoadClient === null || requestParameters.xRoadClient === undefined) {
            throw new runtime.RequiredError('xRoadClient','Required parameter requestParameters.xRoadClient was null or undefined when calling identityDocumentGetIdentityDocument.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xRoadClient !== undefined && requestParameters.xRoadClient !== null) {
            headerParameters['X-Road-Client'] = String(requestParameters.xRoadClient);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // auth authentication
        }

        const response = await this.request({
            path: `/api/v1/identitydocument/identitydocument`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(IdentityDocumentResponseFromJSON));
    }

    /**
     */
    async identityDocumentGetIdentityDocument(requestParameters: IdentityDocumentGetIdentityDocumentRequest): Promise<Array<IdentityDocumentResponse>> {
        const response = await this.identityDocumentGetIdentityDocumentRaw(requestParameters);
        return await response.value();
    }

}
