import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAuditComponent } from './teacher-audit.component';

describe('TeacherAuditComponent', () => {
  let component: TeacherAuditComponent;
  let fixture: ComponentFixture<TeacherAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
