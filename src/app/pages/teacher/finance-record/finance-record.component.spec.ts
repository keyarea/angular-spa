import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRecordComponent } from './finance-record.component';

describe('FinanceRecordComponent', () => {
  let component: FinanceRecordComponent;
  let fixture: ComponentFixture<FinanceRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
