import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedMessagesComponent } from './processed-messages.component';

describe('ProcessedMessagesComponent', () => {
  let component: ProcessedMessagesComponent;
  let fixture: ComponentFixture<ProcessedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
