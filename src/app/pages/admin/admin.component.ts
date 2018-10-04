import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {
  dark = false;
  isCollapsed = false; // 菜单是否展开
  courseIsOpen = false; // 课程菜单是否展开
  teacherIsOpen = false; // 老师菜单是否展开
  messageIsOpen = false; // 信息菜单是否展开
  withdrawalIsOpen = false; // 财务菜单是否展开

  constructor() { }

  ngOnInit() {}




  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
