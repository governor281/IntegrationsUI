import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SuspendedItemViewModel, SuspendedItemResponse } from '../../../api';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'uf-suspended-items',
  templateUrl: './suspended-items.component.html',
  styleUrls: ['./suspended-items.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuspendedItemsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<SuspendedItemViewModel>;

  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canIgnore: boolean = false;
  @Input() canMatch: boolean = false;
  @Input() alternateColumns: string[];
  @Input() suspendedItemResponse: SuspendedItemResponse;
  @Input() dataColumns: string[];
  @Output() createEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() deleteEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() viewLogsEvent = new EventEmitter<SuspendedItemViewModel>();
  @Output() ignoreEvent = new EventEmitter<SuspendedItemViewModel>();
  dataSource = new MatTableDataSource<SuspendedItemViewModel>();
  itemWithMatches: SuspendedItemViewModel;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[];

  ngOnInit() {
    this.displayedColumns = [...this.dataColumns];

    if (this.canCreate) {
      this.displayedColumns.push('Create');
    }
    if (this.canDelete) {
      this.displayedColumns.push('Delete');
    }
    if (this.canIgnore) {
      this.displayedColumns.push('Ignore');
    }
    this.displayedColumns.push('Logs');
    this.displayedColumns.unshift('expand');
    this.dataSource.data = this.suspendedItemResponse.suspendedItems;
  }

  setItems(item: SuspendedItemViewModel) {
    if (item.MatchedIds.length) {
      this.itemWithMatches =
        this.itemWithMatches && this.itemWithMatches.AccessPortalId === item.AccessPortalId ? {} : item;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

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
