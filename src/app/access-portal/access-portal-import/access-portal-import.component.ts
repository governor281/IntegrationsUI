import { Component, OnInit } from '@angular/core';
import { AccessPortalService, FullSyncResponse } from 'src/api';

@Component({
  selector: 'uf-access-portal-import',
  templateUrl: './access-portal-import.component.html',
  styleUrls: ['./access-portal-import.component.scss']
})
export class AccessPortalImportComponent {
  fullSyncResponse: FullSyncResponse;

  constructor(private accessService: AccessPortalService) {}

  StartIntegration() {
    // TODO: IS this the begin ??
    this.accessService.accessPortalGetFullSync().subscribe(
      data => {
        this.fullSyncResponse = data;
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> StartIntegration -> error`, error);
      }
    );
  }
}
