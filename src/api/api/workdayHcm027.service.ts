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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent, HttpParameterCodec } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
import { Observable } from 'rxjs';

import { FullSyncResponse } from '../model/fullSyncResponse';
import { LogDetailResponse } from '../model/logDetailResponse';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Configuration } from '../configuration';
import { WorkdayHcm027ServiceInterface } from './workdayHcm027.serviceInterface';

@Injectable()
export class WorkdayHcm027Service implements WorkdayHcm027ServiceInterface {
  protected basePath = 'http://localhost:8080';
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  public encoder: HttpParameterCodec;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() configuration: Configuration
  ) {
    if (configuration) {
      this.configuration = configuration;
      this.configuration.basePath = configuration.basePath || basePath || this.basePath;
    } else {
      this.configuration.basePath = basePath || this.basePath;
    }
    this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm027GetApiWorkdayHcm027(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public workdayHcm027GetApiWorkdayHcm027(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm027GetApiWorkdayHcm027(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm027GetApiWorkdayHcm027(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error(
        'Required parameter exportDate was null or undefined when calling workdayHcm027GetApiWorkdayHcm027.'
      );
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (exportDate !== undefined && exportDate !== null) {
      queryParameters = queryParameters.set('exportDate', <any>exportDate);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm027`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Displays the import log for the given date
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm027GetSyncLog(
    exportDate: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LogDetailResponse>;
  public workdayHcm027GetSyncLog(
    exportDate: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm027GetSyncLog(
    exportDate: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm027GetSyncLog(
    exportDate: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (exportDate === null || exportDate === undefined) {
      throw new Error('Required parameter exportDate was null or undefined when calling workdayHcm027GetSyncLog.');
    }

    let queryParameters = new HttpParams({ encoder: this.encoder });
    if (exportDate !== undefined && exportDate !== null) {
      queryParameters = queryParameters.set('exportDate', <any>exportDate);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm027/GetSyncLog`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Gets a distinct list of dates that can be used for import log information
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm027GetSyncLogDates(observe?: 'body', reportProgress?: boolean): Observable<LogDetailResponse>;
  public workdayHcm027GetSyncLogDates(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LogDetailResponse>>;
  public workdayHcm027GetSyncLogDates(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LogDetailResponse>>;
  public workdayHcm027GetSyncLogDates(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<LogDetailResponse>(`${this.configuration.basePath}/api/WorkdayHcm027/GetSyncLogDates`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }

  /**
   * Initiates the removal of rescinds from CX via a CSV file dropped by Workday for the HCM.INT027 integration
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public workdayHcm027HcmInt027Begin(observe?: 'body', reportProgress?: boolean): Observable<FullSyncResponse>;
  public workdayHcm027HcmInt027Begin(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<FullSyncResponse>>;
  public workdayHcm027HcmInt027Begin(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<FullSyncResponse>>;
  public workdayHcm027HcmInt027Begin(observe: any = 'body', reportProgress: boolean = false): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    const httpHeaderAccepts: string[] = ['application/json', 'text/json', 'application/xml', 'text/xml'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected !== undefined) {
      headers = headers.set('Accept', httpHeaderAcceptSelected);
    }

    return this.httpClient.get<FullSyncResponse>(`${this.configuration.basePath}/api/WorkdayHcm027/HcmInt027Begin`, {
      withCredentials: this.configuration.withCredentials,
      headers: headers,
      observe: observe,
      reportProgress: reportProgress
    });
  }
}
