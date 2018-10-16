import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRecordComponent } from './courses-record.component';

describe('CoursesRecordComponent', () => {
  let component: CoursesRecordComponent;
  let fixture: ComponentFixture<CoursesRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
