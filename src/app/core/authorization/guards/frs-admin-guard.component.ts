import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './rolemanager.service';

@Injectable()
export class FrsAdminGuard implements CanActivate {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isFrsAdmin() || this.roleManager.isFrsUser();

    // console.log('FrsAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isFrsAdmin() || this.roleManager.isFrsUser();

    // console.log('FrsAdminGuard.canLoad() ' + canLoad);
    return canLoad;
  }
}
