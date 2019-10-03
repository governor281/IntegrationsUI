import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, I18nService, untilDestroyed, AuthenticationService } from '@app/core';
import { RoleManager } from '@app/core/authorization/guards/rolemanager.service';
import { UFAuthorizationService, UFAuthorizationResponse } from 'src/api';

const log = new Logger('Login');

@Component({
  selector: 'uf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  error: string | undefined;
  // loginForm!: FormGroup;
  isLoading = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private i18nService: I18nService,
    private authenticationService: AuthenticationService,
    private rolesService: UFAuthorizationService,
    private roleManager: RoleManager
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  login() {
    this.authenticationService.login().subscribe(() => {
      // this.rolesService.uFAuthorizationGetUserRoleIds().subscribe((res:UFAuthorizationResponse)=>{
      //   this.roleManager.roleIds = res.RoleIds;
      // });
      this.router.navigate(['home']);
    });
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  // private createForm() {
  //   this.loginForm = this.formBuilder.group({
  //     username: ['', Validators.required],
  //     password: ['', Validators.required],
  //     remember: true
  //   });
  // }
}
