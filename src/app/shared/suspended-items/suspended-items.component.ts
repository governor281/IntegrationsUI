import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { SuspendedItemViewModel, SuspendedItemResponse } from 'src/api';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  ]
})
export class SuspendedItemsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<SuspendedItemViewModel>;
  dataSource = new MatTableDataSource<SuspendedItemViewModel>();
  @Input() myService: any;
  @Input() callParams: { mthd: string };
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canIgnore: boolean = false;
  itemWithMatches: SuspendedItemViewModel;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'FullName',
    'ApplicationEmail',
    'Phone',
    'AccessPortalId',
    'StudentUniqueId',
    'ParentUniqueId',
    'BirthDate',
    'AddressLine1',
    'AddressCtry',
    'AddressCity',
    'AddressZip',
    'AddressState'
  ];

  ngOnInit() {
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

    this.myService[this.callParams.mthd]().subscribe(
      (suspendedItems: SuspendedItemResponse) => {
        this.dataSource.data = suspendedItems.suspendedItems;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  setItems(items: SuspendedItemViewModel) {
    if (items.MatchedIds.length) {
      this.itemWithMatches = items;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
