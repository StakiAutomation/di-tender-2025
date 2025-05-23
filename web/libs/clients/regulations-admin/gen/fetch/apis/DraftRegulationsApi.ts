/* tslint:disable */
/* eslint-disable */
/**
 * Regulations admin - backend
 * Backend services for regulations admin.
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
    CreateDraftRegulationDto,
    CreateDraftRegulationDtoFromJSON,
    CreateDraftRegulationDtoToJSON,
    DraftImpactModel,
    DraftImpactModelFromJSON,
    DraftImpactModelToJSON,
    DraftRegulationModel,
    DraftRegulationModelFromJSON,
    DraftRegulationModelToJSON,
    DraftRegulationShippedModel,
    DraftRegulationShippedModelFromJSON,
    DraftRegulationShippedModelToJSON,
    DraftRegulationTemplate,
    DraftRegulationTemplateFromJSON,
    DraftRegulationTemplateToJSON,
    TaskListModel,
    TaskListModelFromJSON,
    TaskListModelToJSON,
    UpdateDraftRegulationDto,
    UpdateDraftRegulationDtoFromJSON,
    UpdateDraftRegulationDtoToJSON,
} from '../models';

export interface DraftRegulationControllerCreateRequest {
    createDraftRegulationDto: CreateDraftRegulationDto;
}

export interface DraftRegulationControllerDeleteRequest {
    id: string;
}

export interface DraftRegulationControllerGetAllRequest {
    page: number;
}

export interface DraftRegulationControllerGetByIdRequest {
    id: string;
}

export interface DraftRegulationControllerGetImpactsByNameRequest {
    name: string;
}

export interface DraftRegulationControllerUpdateRequest {
    id: string;
    updateDraftRegulationDto: UpdateDraftRegulationDto;
}

/**
 * 
 */
export class DraftRegulationsApi extends runtime.BaseAPI {

    /**
     */
    async draftRegulationControllerCreateRaw(requestParameters: DraftRegulationControllerCreateRequest): Promise<runtime.ApiResponse<DraftRegulationModel>> {
        if (requestParameters.createDraftRegulationDto === null || requestParameters.createDraftRegulationDto === undefined) {
            throw new runtime.RequiredError('createDraftRegulationDto','Required parameter requestParameters.createDraftRegulationDto was null or undefined when calling draftRegulationControllerCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/draft_regulation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateDraftRegulationDtoToJSON(requestParameters.createDraftRegulationDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftRegulationModelFromJSON(jsonValue));
    }

    /**
     */
    async draftRegulationControllerCreate(requestParameters: DraftRegulationControllerCreateRequest): Promise<DraftRegulationModel> {
        const response = await this.draftRegulationControllerCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async draftRegulationControllerDeleteRaw(requestParameters: DraftRegulationControllerDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling draftRegulationControllerDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/draft_regulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async draftRegulationControllerDelete(requestParameters: DraftRegulationControllerDeleteRequest): Promise<void> {
        await this.draftRegulationControllerDeleteRaw(requestParameters);
    }

    /**
     */
    async draftRegulationControllerGetAllRaw(requestParameters: DraftRegulationControllerGetAllRequest): Promise<runtime.ApiResponse<TaskListModel>> {
        if (requestParameters.page === null || requestParameters.page === undefined) {
            throw new runtime.RequiredError('page','Required parameter requestParameters.page was null or undefined when calling draftRegulationControllerGetAll.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/draft_regulations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskListModelFromJSON(jsonValue));
    }

    /**
     */
    async draftRegulationControllerGetAll(requestParameters: DraftRegulationControllerGetAllRequest): Promise<TaskListModel> {
        const response = await this.draftRegulationControllerGetAllRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async draftRegulationControllerGetAllShippedRaw(): Promise<runtime.ApiResponse<Array<DraftRegulationShippedModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/draft_regulations_shipped`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DraftRegulationShippedModelFromJSON));
    }

    /**
     */
    async draftRegulationControllerGetAllShipped(): Promise<Array<DraftRegulationShippedModel>> {
        const response = await this.draftRegulationControllerGetAllShippedRaw();
        return await response.value();
    }

    /**
     */
    async draftRegulationControllerGetByIdRaw(requestParameters: DraftRegulationControllerGetByIdRequest): Promise<runtime.ApiResponse<DraftRegulationTemplate>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling draftRegulationControllerGetById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/draft_regulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftRegulationTemplateFromJSON(jsonValue));
    }

    /**
     */
    async draftRegulationControllerGetById(requestParameters: DraftRegulationControllerGetByIdRequest): Promise<DraftRegulationTemplate> {
        const response = await this.draftRegulationControllerGetByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async draftRegulationControllerGetImpactsByNameRaw(requestParameters: DraftRegulationControllerGetImpactsByNameRequest): Promise<runtime.ApiResponse<Array<DraftImpactModel>>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling draftRegulationControllerGetImpactsByName.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/draft_regulation_impacts/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DraftImpactModelFromJSON));
    }

    /**
     */
    async draftRegulationControllerGetImpactsByName(requestParameters: DraftRegulationControllerGetImpactsByNameRequest): Promise<Array<DraftImpactModel>> {
        const response = await this.draftRegulationControllerGetImpactsByNameRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async draftRegulationControllerUpdateRaw(requestParameters: DraftRegulationControllerUpdateRequest): Promise<runtime.ApiResponse<DraftRegulationModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling draftRegulationControllerUpdate.');
        }

        if (requestParameters.updateDraftRegulationDto === null || requestParameters.updateDraftRegulationDto === undefined) {
            throw new runtime.RequiredError('updateDraftRegulationDto','Required parameter requestParameters.updateDraftRegulationDto was null or undefined when calling draftRegulationControllerUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/draft_regulation/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateDraftRegulationDtoToJSON(requestParameters.updateDraftRegulationDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DraftRegulationModelFromJSON(jsonValue));
    }

    /**
     */
    async draftRegulationControllerUpdate(requestParameters: DraftRegulationControllerUpdateRequest): Promise<DraftRegulationModel> {
        const response = await this.draftRegulationControllerUpdateRaw(requestParameters);
        return await response.value();
    }

}
