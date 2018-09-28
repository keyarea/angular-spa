import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  dark = false;
  isCollapsed = false;
  hide = true;

  constructor() { }

  ngOnInit() {}


  toggleHide() {
    this.hide = !this.hide;
  }

}
