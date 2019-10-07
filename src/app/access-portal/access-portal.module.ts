import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/shared/material/material.module';
import { AccessPortalRoutingModule } from './access-portal-routing.module';
import { AccessPortalComponent } from './access-portal.component';
import { SharedModule } from '@app/shared';
import { AccessPortalService } from '../../api';

import { AccessPortalImportLogsComponent } from './access-portal-import-logs/access-portal-import-logs.component';
import { AccessPortalImportComponent } from './access-portal-import/access-portal-import.component';
import { AccessPortalSuspendedItemsComponent } from './access-portal-suspended-items/access-portal-suspended-items.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AccessPortalRoutingModule, SharedModule],
  declarations: [
    AccessPortalComponent,
    AccessPortalImportLogsComponent,
    AccessPortalImportComponent,
    AccessPortalSuspendedItemsComponent
  ],
  providers: [AccessPortalService]
})
export class AccessPortalModule {}
