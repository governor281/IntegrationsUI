// import { Injectable } from '@angular/core';
// import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// import { Logger } from '../logger.service';
// import { CredentialsService } from '../authentication/credentials.service';
// import { AdalService } from 'adal-angular4';

// const log = new Logger('AuthenticationGuard');

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationGuard implements CanActivate {
//   constructor(private router: Router,
//      private credentialsService: CredentialsService, private adalService: AdalService) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     if (this.adalService.userInfo.authenticated ){
//       return true;
//     }

//     log.debug('Not authenticated, redirecting and adding redirect url...');
//     this.router.navigate(['/login']/* , { queryParams: { redirect: state.url }, replaceUrl: true } */);
//     return false;
//   }
// }
