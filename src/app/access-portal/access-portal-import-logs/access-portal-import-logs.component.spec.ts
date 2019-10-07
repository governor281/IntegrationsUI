import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPortalImportLogsComponent } from './access-portal-import-logs.component';

describe('AccessPortalImportLogsComponent', () => {
  let component: AccessPortalImportLogsComponent;
  let fixture: ComponentFixture<AccessPortalImportLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccessPortalImportLogsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPortalImportLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
