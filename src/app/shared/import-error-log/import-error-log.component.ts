import {
  Component,
  ViewChild,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ILogDetail, LogDetailResponse } from 'src/api';

@Component({
  selector: 'uf-import-error-log',
  templateUrl: './import-error-log.component.html',
  styleUrls: ['./import-error-log.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImportErrorLogComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ILogDetail>;
  @Input() logResponse: LogDetailResponse;
  @Input() columns: string[];
  ds = new MatTableDataSource<ILogDetail>();
  constructor(private changeDetectorRefs: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.ds.data = this.logResponse.LogDetail;
  }
  refresh() {
    // this.ds.data = this.logResponse.LogDetail;
    this.changeDetectorRefs.detectChanges();
  }
  ngAfterViewInit(): void {
    this.ds.sort = this.sort;
    this.ds.paginator = this.paginator;
    this.table.dataSource = this.ds;
  }
}
