import { Component, ViewChild, Input, ChangeDetectionStrategy } from '@angular/core';
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
export class ImportErrorLogComponent {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<ILogDetail>;
  @Input() myService: any;
  @Input() callParams: { mthd: string };
  @Input() set exportDate(value: string) {
    this._logDate = value;
    this.onDateChanged();
  }
  ds = new MatTableDataSource<ILogDetail>();
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['Message', 'TimeStamp'];
  private _logDate: string = '';

  onDateChanged() {
    this.myService[this.callParams.mthd](this._logDate).subscribe(
      (data: LogDetailResponse) => {
        this.ds.data = data.LogDetail;
        this.ds.sort = this.sort;
        this.ds.paginator = this.paginator;
        this.table.dataSource = this.ds;
      },
      (error: string) => {
        console.log(error);
      }
    );
  }
}
