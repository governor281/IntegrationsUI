import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AccessPortalService } from './api/accessPortal.service';
import { AdirondackService } from './api/adirondack.service';
import { EmployeeService } from './api/employee.service';
import { FacStaffService } from './api/facStaff.service';
import { FrsService } from './api/frs.service';
import { HobsonsService } from './api/hobsons.service';
import { JenzabarInt901Service } from './api/jenzabarInt901.service';
import { JenzabarInt902Service } from './api/jenzabarInt902.service';
import { LogEntryDetailService } from './api/logEntryDetail.service';
import { PersonalService } from './api/personal.service';
import { RoleService } from './api/role.service';
import { UFAuthorizationService } from './api/uFAuthorization.service';
import { WorkdayCcpStudentsService } from './api/workdayCcpStudents.service';
import { WorkdayEmailListService } from './api/workdayEmailList.service';
import { WorkdayFin107Service } from './api/workdayFin107.service';
import { WorkdayFin107bService } from './api/workdayFin107b.service';
import { WorkdayFin108Service } from './api/workdayFin108.service';
import { WorkdayHcm002Service } from './api/workdayHcm002.service';
import { WorkdayHcm004Service } from './api/workdayHcm004.service';
import { WorkdayHcm005Service } from './api/workdayHcm005.service';
import { WorkdayHcm006Service } from './api/workdayHcm006.service';
import { WorkdayHcm007Service } from './api/workdayHcm007.service';
import { WorkdayHcm008Service } from './api/workdayHcm008.service';
import { WorkdayHcm023Service } from './api/workdayHcm023.service';
import { WorkdayHcm027Service } from './api/workdayHcm027.service';
import { WorkdayHcm028Service } from './api/workdayHcm028.service';
import { WorkdayTranslationsService } from './api/workdayTranslations.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    AccessPortalService,
    AdirondackService,
    EmployeeService,
    FacStaffService,
    FrsService,
    HobsonsService,
    JenzabarInt901Service,
    JenzabarInt902Service,
    LogEntryDetailService,
    PersonalService,
    RoleService,
    UFAuthorizationService,
    WorkdayCcpStudentsService,
    WorkdayEmailListService,
    WorkdayFin107Service,
    WorkdayFin107bService,
    WorkdayFin108Service,
    WorkdayHcm002Service,
    WorkdayHcm004Service,
    WorkdayHcm005Service,
    WorkdayHcm006Service,
    WorkdayHcm007Service,
    WorkdayHcm008Service,
    WorkdayHcm023Service,
    WorkdayHcm027Service,
    WorkdayHcm028Service,
    WorkdayTranslationsService
  ]
})
export class ApiModule {
  public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [{ provide: Configuration, useFactory: configurationFactory }]
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: ApiModule, @Optional() http: HttpClient) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error(
        'You need to import the HttpClientModule in your AppModule! \n' +
          'See also https://github.com/angular/angular/issues/20575'
      );
    }
  }
}
