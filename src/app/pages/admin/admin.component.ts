import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  dark = false;
  isCollapsed = false;

  constructor() { }

  ngOnInit() {}




  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
