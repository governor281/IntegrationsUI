import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SuspendedItemsComponent } from './suspended-items.component';

describe('SuspendedItemsComponent', () => {
  let component: SuspendedItemsComponent;
  let fixture: ComponentFixture<SuspendedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SuspendedItemsComponent],
      imports: [NoopAnimationsModule, MatPaginatorModule, MatSortModule, MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuspendedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
