import { Component, OnInit } from '@angular/core';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less']
})
export class TeacherComponent implements OnInit {
  width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  dark = false;
  // 菜单是否展开
  isCollapsed = this.width > 768;
  courseIsOpen = false; // 我的课程菜单是否展开
  manageIsOpen = false; // 课程管理菜单是否展开
  financeIsOpen = false; // 财务信息菜单是否展开
  meIsOpen = false; // 我的信息菜单是否展开

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.changeCourseIsOpen$.subscribe(courseIsOpen => {
      this.courseIsOpen = <boolean>courseIsOpen;
    });

    this.teacherService.changeManageIsOpen$.subscribe(manageIsOpen => {
      this.manageIsOpen = <boolean>manageIsOpen;
    });

    this.teacherService.changeFinanceIsOpen$.subscribe(financeIsOpen => {
      this.financeIsOpen = <boolean>financeIsOpen;
    });

    this.teacherService.changeMeIsOpen$.subscribe(meIsOpen => {
      this.meIsOpen = <boolean>meIsOpen;
    });
  }

  ngOnInit() {
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
