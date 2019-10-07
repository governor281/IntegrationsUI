import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { LogDetailDates, LogDetailResponse } from 'src/api';

@Component({
  selector: 'uf-log-date-selector',
  templateUrl: './log-date-selector.component.html',
  styleUrls: ['./log-date-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogDateSelectorComponent {
  @Output() dateSelectedEvent = new EventEmitter<string>();
  @Input() availableDatesResponse: LogDetailResponse;
  constructor() {}
  onDateSelected(event: { value: string }) {
    this.dateSelectedEvent.emit(event.value);
  }
}
