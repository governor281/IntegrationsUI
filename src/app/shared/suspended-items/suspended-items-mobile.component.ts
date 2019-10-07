import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SuspendedItemResponse, SuspendedItemViewModel } from '../../../api';

@Component({ selector: 'uf-suspended-items-mobile', templateUrl: './suspended-item-mobile.component.html', styles: [] })
export class SuspendedItemsMobileComponent {
  @Input() suspendedItemResponse: SuspendedItemResponse;
  @Input() columns: string[];
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canIgnore: boolean = false;
  @Input() canMatch: boolean = false;
  @Output() createEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() deleteEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() viewLogsEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() ignoreEvent = new EventEmitter<SuspendedItemViewModel>();

  createFromSuspendedItem(item: SuspendedItemViewModel) {
    this.createEvent.emit(item);
  }

  deleteSuspendedItem(item: SuspendedItemViewModel) {
    this.deleteEvent.emit(item);
  }

  ignoreSuspendedItem(item: SuspendedItemViewModel) {
    this.ignoreEvent.emit(item);
  }

  viewLogsForSuspendedItem(item: SuspendedItemViewModel) {
    this.viewLogsEvent.emit(item);
  }
}
