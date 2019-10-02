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

import { FullSyncResponse } from '../model/fullSyncResponse';
import { LogDetailResponse } from '../model/logDetailResponse';

import { Configuration } from '../configuration';

export interface JenzabarInt901ServiceInterface {
  defaultHeaders: HttpHeaders;
  configuration: Configuration;

  /**
   * Displays the import log for the given date
   *
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   */
  jenzabarInt901GetApiJenzabarInt901(exportDate: string, extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Displays the import log for the given date
   *
   * @param exportDate Date the export from Workday HCM.INT008 Data Radius and import into Jenzabar CX occured.
   */
  jenzabarInt901GetSyncLog(exportDate: string, extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Gets a distinct list of dates that can be used for import log information
   *
   */
  jenzabarInt901GetSyncLogDates(extraHttpRequestParams?: any): Observable<LogDetailResponse>;

  /**
   * Initiates the creation of the AD file needed to generate student AD accounts
   *
   */
  jenzabarInt901JenInt901Begin(extraHttpRequestParams?: any): Observable<FullSyncResponse>;
}
