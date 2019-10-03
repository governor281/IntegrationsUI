import { CanActivate, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './../guards/rolemanager.component';

@Injectable()
export class UserRolesAdminGuard implements CanActivate, CanLoad {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isUserRolesAdmin();

    // console.log('UserRolesAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isUserRolesAdmin();

    // console.log('UserRolesAdminGuard.canLoad() ' + canLoad);
    return canLoad;
  }
}
