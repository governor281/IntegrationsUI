import { CanActivate, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './../guards/rolemanager.component';

@Injectable()
export class RadiusAdminGuard implements CanActivate, CanLoad {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isRadiusAdmin() || this.roleManager.isRadiusUser();

    // console.log('RadiusAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isRadiusAdmin() || this.roleManager.isRadiusUser();

    // console.log('RadiusAdminGuard.canLoad() ' + canLoad);
    return canLoad;
  }
}
