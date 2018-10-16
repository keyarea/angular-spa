import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAuditComponent } from './my-audit.component';

describe('MyAuditComponent', () => {
  let component: MyAuditComponent;
  let fixture: ComponentFixture<MyAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
