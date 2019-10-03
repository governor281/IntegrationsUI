import { CanActivate, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { RoleManager } from './rolemanager.service';

@Injectable()
export class AdirondackAdminGuard implements CanActivate, CanLoad {
  constructor(private roleManager: RoleManager) {}

  canActivate() {
    const canActivate = this.roleManager.isAdirondackAdmin() || this.roleManager.isAdirondackUser();

    // console.log('AdirondackAdminGuard.canActivate() ' + canActivate);
    return canActivate;
  }

  canLoad(): boolean {
    const canLoad = this.roleManager.isAdirondackAdmin() || this.roleManager.isAdirondackUser();

    // console.log('AdirondackAdminGuard.canLoad() ' + canLoad);
    return canLoad;
  }
}
