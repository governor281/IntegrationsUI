import { Component, OnInit, ViewChild } from '@angular/core';
import { AccessPortalService, LogDetailResponse, LogDetailDates } from 'src/api';
import { Observable, of } from 'rxjs';
import { ImportErrorLogComponent } from '@app/shared/import-error-log/import-error-log.component';

@Component({
  selector: 'uf-access-portal-import-logs',
  templateUrl: './access-portal-import-logs.component.html',
  styleUrls: ['./access-portal-import-logs.component.scss']
})
export class AccessPortalImportLogsComponent implements OnInit {
  @ViewChild(ImportErrorLogComponent, { static: false }) errorlog: ImportErrorLogComponent;
  logDetailResponse: Observable<LogDetailResponse>;
  // // TODO: See todo in usage
  logDateResponse: Observable<LogDetailResponse>;
  exportDate: string = '';
  displayedColumns = ['Message', 'TimeStamp'];
  // private _availableDates: LogDetailDates[];
  // public get availableDates(): LogDetailDates[] {
  //   return this._availableDates;
  // }
  // public set availableDates(value: LogDetailDates[]) {
  //   this._availableDates = value;
  // }
  // private _logResponse: LogDetailResponse;
  // public get logResponse(): LogDetailResponse {
  //   return this._logResponse;
  // }
  // public set logResponse(value: LogDetailResponse) {
  //   this._logResponse = value;
  //   this.availableDates = this.logResponse.LogDates;
  // }

  constructor(private accessService: AccessPortalService) {}

  ngOnInit() {
    this.GetLogDates();
  }

  setExportDate(date: string) {
    this.exportDate = date;
    this.GetSycLog();
  }

  GetSycLog() {
    this.accessService.accessPortalGetSyncLog(this.exportDate).subscribe(
      data => {
        this.logDetailResponse = of(data);
        this.errorlog.ds.data = data.LogDetail;
        this.errorlog.refresh();
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> GetSycLog -> error`, error);
      }
    );
  }

  GetLogDates() {
    // TODO: Can this return a synclogdate response maybe?
    // Maybe refactor API code LogDetailResponse:LogDetail,LogDates or something
    this.accessService.accessPortalGetSyncLogDates().subscribe(
      data => {
        this.logDateResponse = of(data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> GetLogDates -> error`, error);
      }
    );
  }

  CallAccessPortalGet() {
    // TODO: Is this a dupe of get sync log???
    this.accessService.accessPortalGetApiAccessPortal(this.exportDate).subscribe(
      data => {
        console.log(`FYI: AccessPortalComponent -> CallAccessPortalGet -> data`, data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> CallAccessPortalGet -> error`, error);
      }
    );
  }
}
