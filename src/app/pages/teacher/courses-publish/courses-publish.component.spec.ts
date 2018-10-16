import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPublishComponent } from './courses-publish.component';

describe('CoursesPublishComponent', () => {
  let component: CoursesPublishComponent;
  let fixture: ComponentFixture<CoursesPublishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesPublishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
