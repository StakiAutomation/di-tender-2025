/* tslint:disable */
/* eslint-disable */
/**
 * Documents backend
 * Backend providing documents and document-providers info
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CreateProviderDto,
    CreateProviderDtoFromJSON,
    CreateProviderDtoToJSON,
    Provider,
    ProviderFromJSON,
    ProviderToJSON,
    UpdateProviderDto,
    UpdateProviderDtoFromJSON,
    UpdateProviderDtoToJSON,
} from '../models';

export interface ProviderControllerCreateProviderRequest {
    createProviderDto: CreateProviderDto;
    authorization?: string;
}

export interface ProviderControllerFindByExternalIdRequest {
    id: string;
    authorization?: string;
}

export interface ProviderControllerFindByIdRequest {
    id: string;
    authorization?: string;
}

export interface ProviderControllerGetAllProvidersRequest {
    authorization?: string;
}

export interface ProviderControllerUpdateProviderRequest {
    id: string;
    updateProviderDto: UpdateProviderDto;
    authorization?: string;
}

/**
 * 
 */
export class ProvidersApi extends runtime.BaseAPI {

    /**
     */
    async providerControllerCreateProviderRaw(requestParameters: ProviderControllerCreateProviderRequest): Promise<runtime.ApiResponse<Provider>> {
        if (requestParameters.createProviderDto === null || requestParameters.createProviderDto === undefined) {
            throw new runtime.RequiredError('createProviderDto','Required parameter requestParameters.createProviderDto was null or undefined when calling providerControllerCreateProvider.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/providers`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProviderDtoToJSON(requestParameters.createProviderDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
    }

    /**
     */
    async providerControllerCreateProvider(requestParameters: ProviderControllerCreateProviderRequest): Promise<Provider> {
        const response = await this.providerControllerCreateProviderRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async providerControllerFindByExternalIdRaw(requestParameters: ProviderControllerFindByExternalIdRequest): Promise<runtime.ApiResponse<Provider>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling providerControllerFindByExternalId.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/providers/external/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
    }

    /**
     */
    async providerControllerFindByExternalId(requestParameters: ProviderControllerFindByExternalIdRequest): Promise<Provider> {
        const response = await this.providerControllerFindByExternalIdRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async providerControllerFindByIdRaw(requestParameters: ProviderControllerFindByIdRequest): Promise<runtime.ApiResponse<Provider>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling providerControllerFindById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/providers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
    }

    /**
     */
    async providerControllerFindById(requestParameters: ProviderControllerFindByIdRequest): Promise<Provider> {
        const response = await this.providerControllerFindByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async providerControllerGetAllProvidersRaw(requestParameters: ProviderControllerGetAllProvidersRequest): Promise<runtime.ApiResponse<Array<Provider>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProviderFromJSON));
    }

    /**
     */
    async providerControllerGetAllProviders(requestParameters: ProviderControllerGetAllProvidersRequest): Promise<Array<Provider>> {
        const response = await this.providerControllerGetAllProvidersRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async providerControllerUpdateProviderRaw(requestParameters: ProviderControllerUpdateProviderRequest): Promise<runtime.ApiResponse<Provider>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling providerControllerUpdateProvider.');
        }

        if (requestParameters.updateProviderDto === null || requestParameters.updateProviderDto === undefined) {
            throw new runtime.RequiredError('updateProviderDto','Required parameter requestParameters.updateProviderDto was null or undefined when calling providerControllerUpdateProvider.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        const response = await this.request({
            path: `/providers/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateProviderDtoToJSON(requestParameters.updateProviderDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProviderFromJSON(jsonValue));
    }

    /**
     */
    async providerControllerUpdateProvider(requestParameters: ProviderControllerUpdateProviderRequest): Promise<Provider> {
        const response = await this.providerControllerUpdateProviderRaw(requestParameters);
        return await response.value();
    }

}
