import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AccessPortalService } from 'src/api';

@Component({
  selector: 'uf-access-portal',
  templateUrl: './access-portal.component.html',
  styleUrls: ['./access-portal.component.scss']
})
export class AccessPortalComponent {
  exportDate: string = '';

  constructor(private breakpointObserver: BreakpointObserver, public accessService: AccessPortalService) {}

  setExportDate(date: string) {
    this.exportDate = date;
  }
}
