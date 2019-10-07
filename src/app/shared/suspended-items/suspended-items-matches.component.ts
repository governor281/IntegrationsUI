import { Component, Input, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { SuspendedItemViewModel } from '../../../api';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'uf-suspended-items-matches',
  templateUrl: './suspended-items-matches.component.html',
  styleUrls: ['./suspended-items.component.scss']
})
export class SuspendedItemsMatchesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) mpaginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) msort: MatSort;
  @ViewChild(MatTable, { static: false }) mtable: MatTable<SuspendedItemViewModel>;
  @Input() itemWithMatches: SuspendedItemViewModel;
  @Input() dataColumns: string[];
  mdataSource = new MatTableDataSource<SuspendedItemViewModel>();
  ngOnInit(): void {
    this.mdataSource.data = this.itemWithMatches.MatchedIds;
  }
  ngAfterViewInit() {
    this.mdataSource.sort = this.msort;
    this.mdataSource.paginator = this.mpaginator;
    this.mtable.dataSource = this.mdataSource;
  }
}
