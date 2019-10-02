/**
 * UF.DataAccess.API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: V1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { UFAuthorizationResponse } from '../model/uFAuthorizationResponse';
import { UFUserRole } from '../model/uFUserRole';

import { Configuration } from '../configuration';

export interface UFAuthorizationServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   *
   *
   * @param ufUserRole
   */
  uFAuthorizationCreateUserRole(
    ufUserRole: UFUserRole,
    extraHttpRequestParams?: any
  ): Observable<UFAuthorizationResponse>;

  /**
   *
   *
   * @param ufUserRole
   */
  uFAuthorizationDeleteUserRole(
    ufUserRole: UFUserRole,
    extraHttpRequestParams?: any
  ): Observable<UFAuthorizationResponse>;

  /**
   *
   *
   */
  uFAuthorizationGetUserRoleIds(extraHttpRequestParams?: any): Observable<UFAuthorizationResponse>;

  /**
   *
   *
   */
  uFAuthorizationGetUserRoles(extraHttpRequestParams?: any): Observable<UFAuthorizationResponse>;

  /**
   *
   *
   */
  uFAuthorizationGetUserRolesScript(extraHttpRequestParams?: any): Observable<object>;
}
