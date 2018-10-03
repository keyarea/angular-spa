import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalRecordComponent } from './withdrawal-record.component';

describe('WithdrawalRecordComponent', () => {
  let component: WithdrawalRecordComponent;
  let fixture: ComponentFixture<WithdrawalRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
