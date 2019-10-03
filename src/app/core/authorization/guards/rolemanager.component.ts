import { Injectable } from '@angular/core';
import { UFAuthorizationService } from 'src/api';

/*
D2FABFC3-F3F0-44E0-A77F-A0A2648D8DF3    AccessPortalAdmin
94C931D7-72A5-457B-99AC-ECDB0561676D    FrsPortalAdmin
72BF61B4-65A1-4FE8-A367-941C99F2DF9A    WorkdayAdmin
D690BB1A-DAAF-40D6-9459-AB370D4322AA    HobsonsAdmin (Radius)
5DA24342-9F77-47C1-8AB6-B8DEDF9BA6D5    AdirondackAdmin
228D7942-2850-409C-A985-800170A8E265    TsheetsAdmin
CA284401-172C-4CAE-82AB-E491E1C21DBB	AccessPortalUser
8DAB2A95-FA34-4151-BC7D-CC5CE3A8321D	FrsPortalUser
ACBF4DF3-1B59-4EC2-9540-A37BC9A74EBB	WorkdayUser
AB97CF5B-DC58-4EA1-B475-DBB2B29DA8FC	HobsonsUser (Radius)
EDF13AF2-D3DE-4CE1-93F6-34C7D761368C    AdirondackUser
029F4A1B-F355-4A41-976A-C167536958F8    TsheetsUser
13E9E27A-A03C-4C71-913C-AE67A88F2F0E    WorkStudySupervisor
BC33B941-66AA-4A4F-821B-0F68ED1606C8    UserRoleAdmin
D26E0BE7-B8B7-462B-AD88-6FFC1FF8D387    WorkdayFinUser
*/

@Injectable()
export class RoleManager {
  roles: Array<string> = [];

  constructor(private authorizeService: UFAuthorizationService) {}

  get roleIds(): Array<string> {
    return this.roles;
  }

  set roleIds(value: Array<string>) {
    this.roles = value;
  }

  clearRoleIds() {
    this.roles.length = 0;
  }

  isRadiusAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'D690BB1A-DAAF-40D6-9459-AB370D4322AA');
    return isAdmin != null;
  }
  isRadiusUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'AB97CF5B-DC58-4EA1-B475-DBB2B29DA8FC');
    return isAdmin != null;
  }

  isWorkdayAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '72BF61B4-65A1-4FE8-A367-941C99F2DF9A');
    return isAdmin != null;
  }

  isWorkdayUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'ACBF4DF3-1B59-4EC2-9540-A37BC9A74EBB');
    return isAdmin != null;
  }

  isWorkdayFinUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'D26E0BE7-B8B7-462B-AD88-6FFC1FF8D387');
    return isAdmin != null;
  }

  isWorkStudySupervisor(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isSupervisor = this.roles.find(x => x === '13E9E27A-A03C-4C71-913C-AE67A88F2F0E');
    return isSupervisor != null;
  }

  isTsheetsAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '228D7942-2850-409C-A985-800170A8E265');
    return isAdmin != null;
  }

  isTsheetsUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '029F4A1B-F355-4A41-976A-C167536958F8');
    return isAdmin != null;
  }

  isFrsAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '94C931D7-72A5-457B-99AC-ECDB0561676D');
    return isAdmin != null;
  }

  isFrsUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '8DAB2A95-FA34-4151-BC7D-CC5CE3A8321D');
    return isAdmin != null;
  }

  isAccessPortalAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'D2FABFC3-F3F0-44E0-A77F-A0A2648D8DF3');
    return isAdmin != null;
  }

  isAccessPortalUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'CA284401-172C-4CAE-82AB-E491E1C21DBB');
    return isAdmin != null;
  }

  isAdirondackAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === '5DA24342-9F77-47C1-8AB6-B8DEDF9BA6D5');
    return isAdmin != null;
  }

  isAdirondackUser(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'EDF13AF2-D3DE-4CE1-93F6-34C7D761368C');
    return isAdmin != null;
  }

  isUserRolesAdmin(): boolean {
    if (this.roles.length === 0) {
      return false;
    }

    const isAdmin = this.roles.find(x => x === 'BC33B941-66AA-4A4F-821B-0F68ED1606C8');
    return isAdmin != null;
  }
}
