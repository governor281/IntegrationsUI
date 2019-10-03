import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/shared/material/material.module';
import { AccessPortalRoutingModule } from './access-portal-routing.module';
import { AccessPortalComponent } from './access-portal.component';
import { SharedModule } from '@app/shared';
import { AccessPortalService } from 'src/api';
import { HasRolePipe } from '@app/core/pipes/has-role.pipe';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AccessPortalRoutingModule, SharedModule],
  declarations: [AccessPortalComponent, HasRolePipe],
  providers: [AccessPortalService]
})
export class AccessPortalModule {}
