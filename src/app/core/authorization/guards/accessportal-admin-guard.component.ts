import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './../guards/rolemanager.component';

@Injectable()
export class AccessPortalAdminGuard implements CanActivate {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isAccessPortalAdmin() || this.roleManager.isAccessPortalUser();

    // console.log('AccessPortalAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isAccessPortalAdmin() || this.roleManager.isAccessPortalUser();

    // console.log('AccessPortalAdminGuard.canLoad() ' + canLoad);
    return canLoad;
  }
}
