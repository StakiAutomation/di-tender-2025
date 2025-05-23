/* tslint:disable */
/* eslint-disable */
/**
 * Financial Aid Backend
 * This is the backend for the financial aid.
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
    CreateStaffDto,
    CreateStaffDtoFromJSON,
    CreateStaffDtoToJSON,
    StaffModel,
    StaffModelFromJSON,
    StaffModelToJSON,
    UpdateStaffDto,
    UpdateStaffDtoFromJSON,
    UpdateStaffDtoToJSON,
} from '../models';

export interface StaffControllerAllAdminUsersRequest {
    municipalityId: string;
}

export interface StaffControllerCreateStaffRequest {
    createStaffDto: CreateStaffDto;
}

export interface StaffControllerGetStaffByIdRequest {
    id: string;
}

export interface StaffControllerGetUsersRequest {
    municipalityId: string;
}

export interface StaffControllerNumberOfUsersForMunicipalityRequest {
    municipalityId: string;
}

export interface StaffControllerUpdateRequest {
    id: string;
    updateStaffDto: UpdateStaffDto;
}

/**
 * 
 */
export class StaffApi extends runtime.BaseAPI {

    /**
     */
    async staffControllerAllAdminUsersRaw(requestParameters: StaffControllerAllAdminUsersRequest): Promise<runtime.ApiResponse<Array<StaffModel>>> {
        if (requestParameters.municipalityId === null || requestParameters.municipalityId === undefined) {
            throw new runtime.RequiredError('municipalityId','Required parameter requestParameters.municipalityId was null or undefined when calling staffControllerAllAdminUsers.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/allAdminUsers/{municipalityId}`.replace(`{${"municipalityId"}}`, encodeURIComponent(String(requestParameters.municipalityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StaffModelFromJSON));
    }

    /**
     */
    async staffControllerAllAdminUsers(requestParameters: StaffControllerAllAdminUsersRequest): Promise<Array<StaffModel>> {
        const response = await this.staffControllerAllAdminUsersRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async staffControllerCreateStaffRaw(requestParameters: StaffControllerCreateStaffRequest): Promise<runtime.ApiResponse<StaffModel>> {
        if (requestParameters.createStaffDto === null || requestParameters.createStaffDto === undefined) {
            throw new runtime.RequiredError('createStaffDto','Required parameter requestParameters.createStaffDto was null or undefined when calling staffControllerCreateStaff.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/financial-aid/staff`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateStaffDtoToJSON(requestParameters.createStaffDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffModelFromJSON(jsonValue));
    }

    /**
     */
    async staffControllerCreateStaff(requestParameters: StaffControllerCreateStaffRequest): Promise<StaffModel> {
        const response = await this.staffControllerCreateStaffRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async staffControllerGetAdminsRaw(): Promise<runtime.ApiResponse<Array<StaffModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/admins`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StaffModelFromJSON));
    }

    /**
     */
    async staffControllerGetAdmins(): Promise<Array<StaffModel>> {
        const response = await this.staffControllerGetAdminsRaw();
        return await response.value();
    }

    /**
     */
    async staffControllerGetStaffByIdRaw(requestParameters: StaffControllerGetStaffByIdRequest): Promise<runtime.ApiResponse<StaffModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling staffControllerGetStaffById.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffModelFromJSON(jsonValue));
    }

    /**
     */
    async staffControllerGetStaffById(requestParameters: StaffControllerGetStaffByIdRequest): Promise<StaffModel> {
        const response = await this.staffControllerGetStaffByIdRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async staffControllerGetStaffByNationalIdRaw(): Promise<runtime.ApiResponse<StaffModel>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/nationalId`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffModelFromJSON(jsonValue));
    }

    /**
     */
    async staffControllerGetStaffByNationalId(): Promise<StaffModel> {
        const response = await this.staffControllerGetStaffByNationalIdRaw();
        return await response.value();
    }

    /**
     */
    async staffControllerGetStaffForMunicipalityRaw(): Promise<runtime.ApiResponse<Array<StaffModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/municipality`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StaffModelFromJSON));
    }

    /**
     */
    async staffControllerGetStaffForMunicipality(): Promise<Array<StaffModel>> {
        const response = await this.staffControllerGetStaffForMunicipalityRaw();
        return await response.value();
    }

    /**
     */
    async staffControllerGetSupervisorsRaw(): Promise<runtime.ApiResponse<Array<StaffModel>>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/supervisors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StaffModelFromJSON));
    }

    /**
     */
    async staffControllerGetSupervisors(): Promise<Array<StaffModel>> {
        const response = await this.staffControllerGetSupervisorsRaw();
        return await response.value();
    }

    /**
     */
    async staffControllerGetUsersRaw(requestParameters: StaffControllerGetUsersRequest): Promise<runtime.ApiResponse<Array<StaffModel>>> {
        if (requestParameters.municipalityId === null || requestParameters.municipalityId === undefined) {
            throw new runtime.RequiredError('municipalityId','Required parameter requestParameters.municipalityId was null or undefined when calling staffControllerGetUsers.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/users/{municipalityId}`.replace(`{${"municipalityId"}}`, encodeURIComponent(String(requestParameters.municipalityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StaffModelFromJSON));
    }

    /**
     */
    async staffControllerGetUsers(requestParameters: StaffControllerGetUsersRequest): Promise<Array<StaffModel>> {
        const response = await this.staffControllerGetUsersRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async staffControllerNumberOfUsersForMunicipalityRaw(requestParameters: StaffControllerNumberOfUsersForMunicipalityRequest): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.municipalityId === null || requestParameters.municipalityId === undefined) {
            throw new runtime.RequiredError('municipalityId','Required parameter requestParameters.municipalityId was null or undefined when calling staffControllerNumberOfUsersForMunicipality.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/financial-aid/staff/municipality/{municipalityId}`.replace(`{${"municipalityId"}}`, encodeURIComponent(String(requestParameters.municipalityId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async staffControllerNumberOfUsersForMunicipality(requestParameters: StaffControllerNumberOfUsersForMunicipalityRequest): Promise<number> {
        const response = await this.staffControllerNumberOfUsersForMunicipalityRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async staffControllerUpdateRaw(requestParameters: StaffControllerUpdateRequest): Promise<runtime.ApiResponse<StaffModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling staffControllerUpdate.');
        }

        if (requestParameters.updateStaffDto === null || requestParameters.updateStaffDto === undefined) {
            throw new runtime.RequiredError('updateStaffDto','Required parameter requestParameters.updateStaffDto was null or undefined when calling staffControllerUpdate.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/financial-aid/staff/id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateStaffDtoToJSON(requestParameters.updateStaffDto),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffModelFromJSON(jsonValue));
    }

    /**
     */
    async staffControllerUpdate(requestParameters: StaffControllerUpdateRequest): Promise<StaffModel> {
        const response = await this.staffControllerUpdateRaw(requestParameters);
        return await response.value();
    }

}
