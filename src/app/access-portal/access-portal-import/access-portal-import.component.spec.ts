import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPortalImportComponent } from './access-portal-import.component';

describe('AccessPortalImportComponent', () => {
  let component: AccessPortalImportComponent;
  let fixture: ComponentFixture<AccessPortalImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccessPortalImportComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPortalImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
