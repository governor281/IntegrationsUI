import { Component } from '@angular/core';

@Component({
  selector: 'uf-access-portal',
  templateUrl: './access-portal.component.html'
})
export class AccessPortalComponent {
  mylinks = [
    {
      text: 'Suspended Items',
      link: '/accessportal/suspended'
    },
    {
      text: 'Import Error Logs',
      link: '/accessportal/importlogs'
    },
    {
      text: 'Import Access Data into Jenzabar CX',
      link: '/accessportal/startimport'
    }
  ];
  constructor() {}
}
