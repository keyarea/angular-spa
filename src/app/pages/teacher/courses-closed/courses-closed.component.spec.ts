import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesClosedComponent } from './courses-closed.component';

describe('CoursesClosedComponent', () => {
  let component: CoursesClosedComponent;
  let fixture: ComponentFixture<CoursesClosedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesClosedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
