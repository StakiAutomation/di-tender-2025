/* tslint:disable */
/* eslint-disable */
/**
 * Miðlun API - V1.0
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EinstaklingurDTOAllt,
    EinstaklingurDTOAlltFromJSON,
    EinstaklingurDTOAlltToJSON,
    EinstaklingurDTOFaeding,
    EinstaklingurDTOFaedingFromJSON,
    EinstaklingurDTOFaedingToJSON,
    EinstaklingurDTOForsja,
    EinstaklingurDTOForsjaFromJSON,
    EinstaklingurDTOForsjaToJSON,
    EinstaklingurDTOGrunn,
    EinstaklingurDTOGrunnFromJSON,
    EinstaklingurDTOGrunnToJSON,
    EinstaklingurDTOHeimili,
    EinstaklingurDTOHeimiliFromJSON,
    EinstaklingurDTOHeimiliToJSON,
    EinstaklingurDTOHju,
    EinstaklingurDTOHjuFromJSON,
    EinstaklingurDTOHjuToJSON,
    EinstaklingurDTOItarAuka,
    EinstaklingurDTOItarAukaFromJSON,
    EinstaklingurDTOItarAukaToJSON,
    EinstaklingurDTOKyn,
    EinstaklingurDTOKynFromJSON,
    EinstaklingurDTOKynToJSON,
    EinstaklingurDTOLatnir1,
    EinstaklingurDTOLatnir1FromJSON,
    EinstaklingurDTOLatnir1ToJSON,
    EinstaklingurDTOLatnirItar,
    EinstaklingurDTOLatnirItarFromJSON,
    EinstaklingurDTOLatnirItarToJSON,
    EinstaklingurDTOLogforeldrar,
    EinstaklingurDTOLogforeldrarFromJSON,
    EinstaklingurDTOLogforeldrarToJSON,
    EinstaklingurDTOLoghTengsl,
    EinstaklingurDTOLoghTengslFromJSON,
    EinstaklingurDTOLoghTengslToJSON,
    EinstaklingurDTONafn,
    EinstaklingurDTONafnFromJSON,
    EinstaklingurDTONafnToJSON,
    EinstaklingurDTONafnItar,
    EinstaklingurDTONafnItarFromJSON,
    EinstaklingurDTONafnItarToJSON,
    EinstaklingurDTONyskra,
    EinstaklingurDTONyskraFromJSON,
    EinstaklingurDTONyskraToJSON,
    EinstaklingurDTORikisfang,
    EinstaklingurDTORikisfangFromJSON,
    EinstaklingurDTORikisfangToJSON,
    EinstaklingurDTOTru,
    EinstaklingurDTOTruFromJSON,
    EinstaklingurDTOTruToJSON,
    ProblemDetails,
    ProblemDetailsFromJSON,
    ProblemDetailsToJSON,
} from '../models';

export interface MidlunV1EinstaklingarNationalIdFaedingarstadurGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdForsjaGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdGrunnGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdHeimilisfangGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdHjuGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdItarGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdKynGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdLatnirGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdLatnirItarGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdLogforeldrarGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdLogheimilistengslGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdNafnGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdNafnItarGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdNyskraningGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdRikisfangGetRequest {
    nationalId: string;
}

export interface MidlunV1EinstaklingarNationalIdTruGetRequest {
    nationalId: string;
}

/**
 * 
 */
export class EinstaklingarApi extends runtime.BaseAPI {

    /**
     */
    async midlunV1EinstaklingarNationalIdFaedingarstadurGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdFaedingarstadurGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOFaeding>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdFaedingarstadurGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Faedingarstadur`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOFaedingFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdFaedingarstadurGet(requestParameters: MidlunV1EinstaklingarNationalIdFaedingarstadurGetRequest): Promise<EinstaklingurDTOFaeding> {
        const response = await this.midlunV1EinstaklingarNationalIdFaedingarstadurGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdForsjaGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdForsjaGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOForsja>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdForsjaGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Forsja`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOForsjaFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdForsjaGet(requestParameters: MidlunV1EinstaklingarNationalIdForsjaGetRequest): Promise<EinstaklingurDTOForsja> {
        const response = await this.midlunV1EinstaklingarNationalIdForsjaGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOAllt>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOAlltFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdGet(requestParameters: MidlunV1EinstaklingarNationalIdGetRequest): Promise<EinstaklingurDTOAllt> {
        const response = await this.midlunV1EinstaklingarNationalIdGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdGrunnGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdGrunnGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOGrunn>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdGrunnGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Grunn`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOGrunnFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdGrunnGet(requestParameters: MidlunV1EinstaklingarNationalIdGrunnGetRequest): Promise<EinstaklingurDTOGrunn> {
        const response = await this.midlunV1EinstaklingarNationalIdGrunnGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdHeimilisfangGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdHeimilisfangGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOHeimili>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdHeimilisfangGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Heimilisfang`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOHeimiliFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdHeimilisfangGet(requestParameters: MidlunV1EinstaklingarNationalIdHeimilisfangGetRequest): Promise<EinstaklingurDTOHeimili> {
        const response = await this.midlunV1EinstaklingarNationalIdHeimilisfangGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdHjuGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdHjuGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOHju>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdHjuGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Hju`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOHjuFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdHjuGet(requestParameters: MidlunV1EinstaklingarNationalIdHjuGetRequest): Promise<EinstaklingurDTOHju> {
        const response = await this.midlunV1EinstaklingarNationalIdHjuGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdItarGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdItarGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOItarAuka>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdItarGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Itar`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOItarAukaFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdItarGet(requestParameters: MidlunV1EinstaklingarNationalIdItarGetRequest): Promise<EinstaklingurDTOItarAuka> {
        const response = await this.midlunV1EinstaklingarNationalIdItarGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdKynGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdKynGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOKyn>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdKynGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Kyn`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOKynFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdKynGet(requestParameters: MidlunV1EinstaklingarNationalIdKynGetRequest): Promise<EinstaklingurDTOKyn> {
        const response = await this.midlunV1EinstaklingarNationalIdKynGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLatnirGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdLatnirGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOLatnir1>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdLatnirGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Latnir`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOLatnir1FromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLatnirGet(requestParameters: MidlunV1EinstaklingarNationalIdLatnirGetRequest): Promise<EinstaklingurDTOLatnir1> {
        const response = await this.midlunV1EinstaklingarNationalIdLatnirGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLatnirItarGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdLatnirItarGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOLatnirItar>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdLatnirItarGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/LatnirItar`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOLatnirItarFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLatnirItarGet(requestParameters: MidlunV1EinstaklingarNationalIdLatnirItarGetRequest): Promise<EinstaklingurDTOLatnirItar> {
        const response = await this.midlunV1EinstaklingarNationalIdLatnirItarGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLogforeldrarGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdLogforeldrarGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOLogforeldrar>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdLogforeldrarGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Logforeldrar`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOLogforeldrarFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLogforeldrarGet(requestParameters: MidlunV1EinstaklingarNationalIdLogforeldrarGetRequest): Promise<EinstaklingurDTOLogforeldrar> {
        const response = await this.midlunV1EinstaklingarNationalIdLogforeldrarGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLogheimilistengslGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdLogheimilistengslGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOLoghTengsl>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdLogheimilistengslGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Logheimilistengsl`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOLoghTengslFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdLogheimilistengslGet(requestParameters: MidlunV1EinstaklingarNationalIdLogheimilistengslGetRequest): Promise<EinstaklingurDTOLoghTengsl> {
        const response = await this.midlunV1EinstaklingarNationalIdLogheimilistengslGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNafnGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdNafnGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTONafn>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdNafnGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Nafn`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTONafnFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNafnGet(requestParameters: MidlunV1EinstaklingarNationalIdNafnGetRequest): Promise<EinstaklingurDTONafn> {
        const response = await this.midlunV1EinstaklingarNationalIdNafnGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNafnItarGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdNafnItarGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTONafnItar>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdNafnItarGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/NafnItar`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTONafnItarFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNafnItarGet(requestParameters: MidlunV1EinstaklingarNationalIdNafnItarGetRequest): Promise<EinstaklingurDTONafnItar> {
        const response = await this.midlunV1EinstaklingarNationalIdNafnItarGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNyskraningGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdNyskraningGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTONyskra>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdNyskraningGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Nyskraning`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTONyskraFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdNyskraningGet(requestParameters: MidlunV1EinstaklingarNationalIdNyskraningGetRequest): Promise<EinstaklingurDTONyskra> {
        const response = await this.midlunV1EinstaklingarNationalIdNyskraningGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdRikisfangGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdRikisfangGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTORikisfang>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdRikisfangGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Rikisfang`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTORikisfangFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdRikisfangGet(requestParameters: MidlunV1EinstaklingarNationalIdRikisfangGetRequest): Promise<EinstaklingurDTORikisfang> {
        const response = await this.midlunV1EinstaklingarNationalIdRikisfangGetRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdTruGetRaw(requestParameters: MidlunV1EinstaklingarNationalIdTruGetRequest): Promise<runtime.ApiResponse<EinstaklingurDTOTru>> {
        if (requestParameters.nationalId === null || requestParameters.nationalId === undefined) {
            throw new runtime.RequiredError('nationalId','Required parameter requestParameters.nationalId was null or undefined when calling midlunV1EinstaklingarNationalIdTruGet.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Midlun/v1/Einstaklingar/{nationalId}/Tru`.replace(`{${"nationalId"}}`, encodeURIComponent(String(requestParameters.nationalId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EinstaklingurDTOTruFromJSON(jsonValue));
    }

    /**
     */
    async midlunV1EinstaklingarNationalIdTruGet(requestParameters: MidlunV1EinstaklingarNationalIdTruGetRequest): Promise<EinstaklingurDTOTru> {
        const response = await this.midlunV1EinstaklingarNationalIdTruGetRaw(requestParameters);
        return await response.value();
    }

}
