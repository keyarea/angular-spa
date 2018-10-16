import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesOngoingComponent } from './courses-ongoing.component';

describe('CoursesOngoingComponent', () => {
  let component: CoursesOngoingComponent;
  let fixture: ComponentFixture<CoursesOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
