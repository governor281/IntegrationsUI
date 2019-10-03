import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDateSelectorComponent } from './log-date-selector.component';

describe('LogDateSelectorComponent', () => {
  let component: LogDateSelectorComponent;
  let fixture: ComponentFixture<LogDateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDateSelectorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
