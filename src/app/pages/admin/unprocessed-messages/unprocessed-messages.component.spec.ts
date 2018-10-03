import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprocessedMessagesComponent } from './unprocessed-messages.component';

describe('UnprocessedMessagesComponent', () => {
  let component: UnprocessedMessagesComponent;
  let fixture: ComponentFixture<UnprocessedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnprocessedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnprocessedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
