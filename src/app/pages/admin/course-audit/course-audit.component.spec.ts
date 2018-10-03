import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAuditComponent } from './course-audit.component';

describe('CourseAuditComponent', () => {
  let component: CourseAuditComponent;
  let fixture: ComponentFixture<CourseAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
