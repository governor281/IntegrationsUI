import { Component, Input } from '@angular/core';
import { SuspendedItemViewModel } from '../../../api';
@Component({
  selector: 'uf-suspended-items-matches',
  templateUrl: './suspended-items-matches.component.html',
  styleUrls: ['./suspended-items.component.scss']
})
export class SuspendedItemsMatchesComponent {
  @Input() itemWithMatches: SuspendedItemViewModel;
  displayedColumns = [
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
    'AddressState',
    'matchbutton'
  ];
}
