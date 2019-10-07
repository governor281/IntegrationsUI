import { BrowserModule } from '@angular/platform-browser';
import { NgModule, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { Location } from '@angular/common';
import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { ApiModule, Configuration } from 'src/api';
import { PathHelper } from './core/authentication/constants';
import { AdalService, AdalGuard } from 'adal-angular4';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AccessPortalAdminGuard } from './core/authorization/guards/accessportal-admin-guard.component';
import { RoleManager } from './core/authorization/guards/rolemanager.service';
import { HasRolePipe } from '@app/shared/pipes/has-role.pipe';
import { ColumnHeaderPipe } from '@app/shared/pipes/column-header.pipe';

export function myfunc(): Configuration {
  return new Configuration({
    basePath: new PathHelper(inject(Location)).server
  });
}

@NgModule({
  imports: [
    ApiModule.forRoot(myfunc),
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    LoginModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, NotFoundComponent],
  providers: [AdalService, AdalGuard, AccessPortalAdminGuard, RoleManager],
  bootstrap: [AppComponent]
})
export class AppModule {}
