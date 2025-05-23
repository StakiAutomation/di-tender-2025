/* tslint:disable */
/* eslint-disable */
/**
 * Form System API
 * This is an API for formbuilder and form-rendering (application) system
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
    CreateSectionDto,
    CreateSectionDtoFromJSON,
    CreateSectionDtoToJSON,
    SectionDto,
    SectionDtoFromJSON,
    SectionDtoToJSON,
    UpdateSectionDto,
    UpdateSectionDtoFromJSON,
    UpdateSectionDtoToJSON,
    UpdateSectionsDisplayOrderDto,
    UpdateSectionsDisplayOrderDtoFromJSON,
    UpdateSectionsDisplayOrderDtoToJSON,
} from '../models';

export interface SectionsControllerCreateRequest {
    createSectionDto: CreateSectionDto;
}

export interface SectionsControllerDeleteRequest {
    id: string;
}

export interface SectionsControllerUpdateRequest {
    id: string;
    updateSectionDto: UpdateSectionDto;
}

export interface SectionsControllerUpdateDisplayOrderRequest {
    updateSectionsDisplayOrderDto: UpdateSectionsDisplayOrderDto;
}

/**
 * 
 */
export class SectionsApi extends runtime.BaseAPI {

    /**
     * Creates a new section
     */
    async sectionsControllerCreateRaw(requestParameters: SectionsControllerCreateRequest): Promise<runtime.ApiResponse<SectionDto>> {
        if (requestParameters.createSectionDto === null || requestParameters.createSectionDto === undefined) {
            throw new runtime.RequiredError('createSectionDto','Required parameter requestParameters.createSectionDto was null or undefined when calling sectionsControllerCreate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sections`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSectionDtoToJSON(requestParameters.createSectionDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => SectionDtoFromJSON(jsonValue));
    }

    /**
     * Creates a new section
     */
    async sectionsControllerCreate(requestParameters: SectionsControllerCreateRequest): Promise<SectionDto> {
        const response = await this.sectionsControllerCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete section by id
     */
    async sectionsControllerDeleteRaw(requestParameters: SectionsControllerDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sectionsControllerDelete.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete section by id
     */
    async sectionsControllerDelete(requestParameters: SectionsControllerDeleteRequest): Promise<void> {
        await this.sectionsControllerDeleteRaw(requestParameters);
    }

    /**
     * Updates a section
     */
    async sectionsControllerUpdateRaw(requestParameters: SectionsControllerUpdateRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling sectionsControllerUpdate.');
        }

        if (requestParameters.updateSectionDto === null || requestParameters.updateSectionDto === undefined) {
            throw new runtime.RequiredError('updateSectionDto','Required parameter requestParameters.updateSectionDto was null or undefined when calling sectionsControllerUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sections/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSectionDtoToJSON(requestParameters.updateSectionDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Updates a section
     */
    async sectionsControllerUpdate(requestParameters: SectionsControllerUpdateRequest): Promise<void> {
        await this.sectionsControllerUpdateRaw(requestParameters);
    }

    /**
     * Update display order of sections
     */
    async sectionsControllerUpdateDisplayOrderRaw(requestParameters: SectionsControllerUpdateDisplayOrderRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.updateSectionsDisplayOrderDto === null || requestParameters.updateSectionsDisplayOrderDto === undefined) {
            throw new runtime.RequiredError('updateSectionsDisplayOrderDto','Required parameter requestParameters.updateSectionsDisplayOrderDto was null or undefined when calling sectionsControllerUpdateDisplayOrder.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sections`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSectionsDisplayOrderDtoToJSON(requestParameters.updateSectionsDisplayOrderDto),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Update display order of sections
     */
    async sectionsControllerUpdateDisplayOrder(requestParameters: SectionsControllerUpdateDisplayOrderRequest): Promise<void> {
        await this.sectionsControllerUpdateDisplayOrderRaw(requestParameters);
    }

}
