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

import { exists, mapValues } from '../runtime';
import {
    ApplicantType,
    ApplicantTypeFromJSON,
    ApplicantTypeFromJSONTyped,
    ApplicantTypeToJSON,
    CertificationType,
    CertificationTypeFromJSON,
    CertificationTypeFromJSONTyped,
    CertificationTypeToJSON,
    FieldType,
    FieldTypeFromJSON,
    FieldTypeFromJSONTyped,
    FieldTypeToJSON,
    FormDto,
    FormDtoFromJSON,
    FormDtoFromJSONTyped,
    FormDtoToJSON,
    ListType,
    ListTypeFromJSON,
    ListTypeFromJSONTyped,
    ListTypeToJSON,
    Option,
    OptionFromJSON,
    OptionFromJSONTyped,
    OptionToJSON,
    OrganizationUrlDto,
    OrganizationUrlDtoFromJSON,
    OrganizationUrlDtoFromJSONTyped,
    OrganizationUrlDtoToJSON,
} from './';

/**
 * 
 * @export
 * @interface FormResponseDto
 */
export interface FormResponseDto {
    /**
     * 
     * @type {FormDto}
     * @memberof FormResponseDto
     */
    form?: FormDto;
    /**
     * 
     * @type {Array<FieldType>}
     * @memberof FormResponseDto
     */
    fieldTypes?: Array<FieldType>;
    /**
     * 
     * @type {Array<CertificationType>}
     * @memberof FormResponseDto
     */
    certificationTypes?: Array<CertificationType>;
    /**
     * 
     * @type {Array<ApplicantType>}
     * @memberof FormResponseDto
     */
    applicantTypes?: Array<ApplicantType>;
    /**
     * 
     * @type {Array<ListType>}
     * @memberof FormResponseDto
     */
    listTypes?: Array<ListType>;
    /**
     * 
     * @type {Array<OrganizationUrlDto>}
     * @memberof FormResponseDto
     */
    urls?: Array<OrganizationUrlDto>;
    /**
     * 
     * @type {Array<FormDto>}
     * @memberof FormResponseDto
     */
    forms?: Array<FormDto>;
    /**
     * 
     * @type {Array<string>}
     * @memberof FormResponseDto
     */
    organizationNationalIds?: Array<string>;
    /**
     * 
     * @type {Array<Option>}
     * @memberof FormResponseDto
     */
    organizations?: Array<Option>;
}

export function FormResponseDtoFromJSON(json: any): FormResponseDto {
    return FormResponseDtoFromJSONTyped(json, false);
}

export function FormResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'form': !exists(json, 'form') ? undefined : FormDtoFromJSON(json['form']),
        'fieldTypes': !exists(json, 'fieldTypes') ? undefined : ((json['fieldTypes'] as Array<any>).map(FieldTypeFromJSON)),
        'certificationTypes': !exists(json, 'certificationTypes') ? undefined : ((json['certificationTypes'] as Array<any>).map(CertificationTypeFromJSON)),
        'applicantTypes': !exists(json, 'applicantTypes') ? undefined : ((json['applicantTypes'] as Array<any>).map(ApplicantTypeFromJSON)),
        'listTypes': !exists(json, 'listTypes') ? undefined : ((json['listTypes'] as Array<any>).map(ListTypeFromJSON)),
        'urls': !exists(json, 'urls') ? undefined : ((json['urls'] as Array<any>).map(OrganizationUrlDtoFromJSON)),
        'forms': !exists(json, 'forms') ? undefined : ((json['forms'] as Array<any>).map(FormDtoFromJSON)),
        'organizationNationalIds': !exists(json, 'organizationNationalIds') ? undefined : json['organizationNationalIds'],
        'organizations': !exists(json, 'organizations') ? undefined : ((json['organizations'] as Array<any>).map(OptionFromJSON)),
    };
}

export function FormResponseDtoToJSON(value?: FormResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'form': FormDtoToJSON(value.form),
        'fieldTypes': value.fieldTypes === undefined ? undefined : ((value.fieldTypes as Array<any>).map(FieldTypeToJSON)),
        'certificationTypes': value.certificationTypes === undefined ? undefined : ((value.certificationTypes as Array<any>).map(CertificationTypeToJSON)),
        'applicantTypes': value.applicantTypes === undefined ? undefined : ((value.applicantTypes as Array<any>).map(ApplicantTypeToJSON)),
        'listTypes': value.listTypes === undefined ? undefined : ((value.listTypes as Array<any>).map(ListTypeToJSON)),
        'urls': value.urls === undefined ? undefined : ((value.urls as Array<any>).map(OrganizationUrlDtoToJSON)),
        'forms': value.forms === undefined ? undefined : ((value.forms as Array<any>).map(FormDtoToJSON)),
        'organizationNationalIds': value.organizationNationalIds,
        'organizations': value.organizations === undefined ? undefined : ((value.organizations as Array<any>).map(OptionToJSON)),
    };
}


