import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesShelvedComponent } from './courses-shelved.component';

describe('CoursesShelvedComponent', () => {
  let component: CoursesShelvedComponent;
  let fixture: ComponentFixture<CoursesShelvedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesShelvedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesShelvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
