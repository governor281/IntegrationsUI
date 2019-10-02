import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './../guards/rolemanager.component';

@Injectable()
export class WorkdayAdminGuard implements CanActivate {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate =
      this.roleManager.isWorkdayAdmin() ||
      this.roleManager.isWorkdayUser() ||
      this.roleManager.isWorkStudySupervisor() ||
      this.roleManager.isWorkdayFinUser();

    // console.log('WorkdayAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad =
      this.roleManager.isWorkdayAdmin() ||
      this.roleManager.isWorkdayUser() ||
      this.roleManager.isWorkStudySupervisor() ||
      this.roleManager.isWorkdayFinUser();

    // console.log('WorkdayAdminGuard.CanLoad() ' + canLoad);
    return canLoad;
  }
}
