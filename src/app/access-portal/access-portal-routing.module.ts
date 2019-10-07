import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { AccessPortalComponent } from './access-portal.component';
import { AccessPortalSuspendedItemsComponent } from './access-portal-suspended-items/access-portal-suspended-items.component';
import { AccessPortalImportLogsComponent } from './access-portal-import-logs/access-portal-import-logs.component';
import { AccessPortalImportComponent } from './access-portal-import/access-portal-import.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: AccessPortalComponent,
    // children:[
    //   { path: 'suspended', component: AccessPortalSuspendedItemsComponent, data: { title: extract('Suspended Items') } }
    // ],

    children: [
      {
        path: 'suspended',
        component: AccessPortalSuspendedItemsComponent,
        data: { title: extract('Suspended Items') }
      },
      {
        path: 'importlogs',
        component: AccessPortalImportLogsComponent,
        data: { title: extract('Import Logs') }
      },
      {
        path: 'startimport',
        component: AccessPortalImportComponent,
        data: { title: extract('Start Import') }
      }
    ],

    data: { title: extract('Access Portal') }
  },
  { path: 'accessportal', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccessPortalRoutingModule {}
