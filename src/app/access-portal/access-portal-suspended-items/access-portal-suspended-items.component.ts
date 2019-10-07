import { Component, OnInit } from '@angular/core';
import {
  LogEntryDetailResponse,
  SuspendedItemResponse,
  ContactResponse,
  AccessPortalService,
  LogEntryDetailService,
  SuspendedItemViewModel
} from 'src/api';
import { Observable, of } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'uf-access-portal-suspended-items',
  templateUrl: './access-portal-suspended-items.component.html',
  styleUrls: ['./access-portal-suspended-items.component.scss']
})
export class AccessPortalSuspendedItemsComponent implements OnInit {
  logEntryDetailResponse: LogEntryDetailResponse;
  suspendedItemResponse: Observable<SuspendedItemResponse>;
  contactDetailResponse: ContactResponse;
  canCreate = false;
  canDelete = false;
  canIgnore = false;
  isSmall = false;
  columns = [
    'FullName',
    'ApplicationEmail',
    'Phone',
    'AccessPortalId',
    'StudentUniqueId',
    'ParentUniqueId',
    'BirthDate',
    'AddressLine1',
    'AddressCtry',
    'AddressCity',
    'AddressZip',
    'AddressState'
  ];
  constructor(
    private accessService: AccessPortalService,
    private logEntryService: LogEntryDetailService,
    private breakPoints: BreakpointObserver
  ) {}

  ngOnInit() {
    this.GetSuspendedItems();
    this.breakPoints.observe('(max-width: 599px)').subscribe(val => {
      this.isSmall = val.matches;
    });
  }

  GetLogsForSuspendedItem(item: SuspendedItemViewModel) {
    this.logEntryService
      .logEntryDetailGetLogEntryDetails(item.AccessPortalId, item.StudentUniqueId || '', 'AccessPortalSync')
      .subscribe(
        data => {
          this.logEntryDetailResponse = data;
        },
        error => {
          console.log(`FYI: AccessPortalComponent -> GetLogsForSuspendedItem -> error`, error);
        }
      );
  }

  GetSuspendedItems() {
    this.accessService.accessPortalGetSuspendedItems().subscribe(
      data => {
        this.suspendedItemResponse = of(data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> GetSuspendedItems -> error`, error);
      }
    );
  }

  DeleteSuspendedItem(SuspendedItem: SuspendedItemViewModel) {
    // TODO: Ensure Parameter in the API is using the correct name for the expected id
    this.accessService.accessPortalDeleteSuspendedItem(SuspendedItem.StudentId).subscribe(
      data => {
        this.suspendedItemResponse = of(data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> DeleteSuspendedItem -> error`, error);
      }
    );
  }

  CreateFromSuspendedItem(SuspendedItem: SuspendedItemViewModel) {
    // TODO: Ensure Parameter in the API is using the correct name for the expected id
    this.accessService.accessPortalPostSuspendedItem(SuspendedItem.StudentId).subscribe(
      data => {
        this.suspendedItemResponse = of(data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> CreateFromSuspendedItem -> error`, error);
      }
    );
  }

  MatchSuspendedItem(SuspendedItem: SuspendedItemViewModel) {
    this.accessService.accessPortalPutSuspendedItem(SuspendedItem.StudentId).subscribe(
      data => {
        this.suspendedItemResponse = of(data);
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> MatchSuspendedItem -> error`, error);
      }
    );
  }

  GetContactDetail(SuspendedItem: SuspendedItemViewModel) {
    // TODO: Ensure Parameter in the API is using the correct name for the expected id
    this.accessService.accessPortalGetContactDetail(SuspendedItem.StudentId).subscribe(
      data => {
        this.contactDetailResponse = data;
      },
      error => {
        console.log(`FYI: AccessPortalComponent -> GetContactDetail -> error`, error);
      }
    );
  }
}
