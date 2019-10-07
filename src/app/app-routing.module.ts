import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccessPortalAdminGuard } from './core/authorization/guards/accessportal-admin-guard.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'about',
      loadChildren: './about/about.module#AboutModule'
    },

    {
      path: 'accessportal',
      loadChildren: './access-portal/access-portal.module#AccessPortalModule',
      canActivate: [AccessPortalAdminGuard]
    },
    { path: '', redirectTo: 'about', pathMatch: 'full' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
