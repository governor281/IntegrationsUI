import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './../guards/rolemanager.component';

@Injectable()
export class TsheetsAdminGuard implements CanActivate {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isTsheetsAdmin() || this.roleManager.isTsheetsUser();

    // console.log('TsheetsAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isTsheetsAdmin() || this.roleManager.isTsheetsUser();

    // console.log('TsheetsAdminGuard.CanLoad() ' + canLoad);
    return canLoad;
  }
}
