import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPortalSuspendedItemsComponent } from './access-portal-suspended-items.component';

describe('AccessPortalSuspendedItemsComponent', () => {
  let component: AccessPortalSuspendedItemsComponent;
  let fixture: ComponentFixture<AccessPortalSuspendedItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccessPortalSuspendedItemsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPortalSuspendedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
