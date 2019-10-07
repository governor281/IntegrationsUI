import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogDateSelectorComponent } from './log-date-selector.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

describe('LogDateSelectorComponent', () => {
  let component: LogDateSelectorComponent;
  let fixture: ComponentFixture<LogDateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogDateSelectorComponent],
      imports: [MatSelectModule, MatOptionModule]
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
