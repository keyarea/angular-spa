import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedCoursesComponent } from './closed-courses.component';

describe('ClosedCoursesComponent', () => {
  let component: ClosedCoursesComponent;
  let fixture: ComponentFixture<ClosedCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
