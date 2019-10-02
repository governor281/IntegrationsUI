import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable()
export class PathHelper {
  public server: string = '';
  public tokenUrl: string = 'token';
  public apiUrl: string = 'api/';
  public serverWithTokenUrl: string = this.server + this.tokenUrl;
  public serverWithApiUrl: string = this.server + this.apiUrl;

  constructor(private loc: Location) {
    const angularRoute = this.loc.path();
    const fullUrl = window.location.href;
    const domain = fullUrl.replace(angularRoute, '');

    if (domain.includes('devufportal')) {
      // devufportal.findlay.edu
      this.server = 'https://ufapidev.findlay.edu/'; // develelpment backend server
    } else if (domain.includes('stgufportal')) {
      // stgufportal.findlay.edu
      this.server = 'https://stgufdata.findlay.edu/'; // stage backend server
    } else if (domain.includes('localhost')) {
      this.server = 'http://localhost:8080/';
    } else if (domain.includes('ufportal')) {
      // ufportal.findlay.edu
      this.server = 'https://ufdata.findlay.edu/'; // production backend server
    }

    console.log('Configuration() server: ' + this.server);
  }
}
