import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LogDetailResponse, LogDetailDates } from 'src/api';

@Component({
  selector: 'uf-log-date-selector',
  templateUrl: './log-date-selector.component.html',
  styleUrls: ['./log-date-selector.component.scss']
})
export class LogDateSelectorComponent implements OnInit {
  @Input() dateService: any;
  @Input() callParams: { mthd: string };
  @Output() dateSelectedEvent = new EventEmitter<string>();

  private _availableDates: LogDetailDates[];
  public get availableDates(): LogDetailDates[] {
    return this._availableDates;
  }
  public set availableDates(value: LogDetailDates[]) {
    this._availableDates = value;
  }
  private _logResponse: LogDetailResponse;
  public get logResponse(): LogDetailResponse {
    return this._logResponse;
  }
  public set logResponse(value: LogDetailResponse) {
    this._logResponse = value;
    this.availableDates = this.logResponse.LogDates;
  }
  constructor() {}

  ngOnInit() {
    this.dateService[this.callParams.mthd]().subscribe(
      (data: LogDetailResponse) => {
        this.logResponse = data;
      },
      (error: string) => {
        // TODO:Global Error Handler
        console.warn(error);
      }
    );
  }

  onDateSelected(event: { value: string }) {
    this.dateSelectedEvent.emit(event.value);
  }
}
