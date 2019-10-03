import { Component, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AccessPortalService } from 'src/api';
import { RoleManager } from '@app/core/authorization/guards/rolemanager.service';

@Component({
  selector: 'uf-access-portal',
  templateUrl: './access-portal.component.html',
  styleUrls: ['./access-portal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessPortalComponent {
  exportDate: string = '';

  constructor(
    private breakpointObserver: BreakpointObserver,
    public accessService: AccessPortalService,
    public roleManager: RoleManager
  ) {}

  setExportDate(date: string) {
    this.exportDate = date;
  }
}
