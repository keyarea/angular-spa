import { Component } from '@angular/core';
import { slideInDownAnimation } from './app.animations';
import { HostBinding } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInDownAnimation ]
})
export class AppComponent {
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  title = 'myApp';
  constructor() {}

}
