// import { CanActivate } from '@angular/router';
// import { Injectable } from '@angular/core';
// import { GlobalEventsManager } from '../authenticate/globaleventsmanager.component';
// import { RoleManager } from './../guards/rolemanager.component';

// @Injectable()
// export class LoginGuard implements CanActivate {
//   IsLoggedIn: boolean = false;

//   constructor(private globaleventsmanager: GlobalEventsManager, private roleManager: RoleManager) {
//     this.globaleventsmanager.IsAuthenticated.subscribe(mode => {
//       this.processLoginEvent(mode);
//     });
//   }

//   canActivate() {
//     // console.log('LoginGuard.canActivate() '+ this.IsLoggedIn);

//     return this.IsLoggedIn;
//   }

//   processLoginEvent(mode: boolean) {
//     // console.log("LoginGuard.processLoginEvent() mode:" + mode);
//     this.IsLoggedIn = mode;

//     this.canActivate();
//   }
// }
