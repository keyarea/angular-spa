import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtherComponent } from './my-other.component';

describe('MyOtherComponent', () => {
  let component: MyOtherComponent;
  let fixture: ComponentFixture<MyOtherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOtherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
