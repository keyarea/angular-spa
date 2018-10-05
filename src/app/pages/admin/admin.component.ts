import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

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

  constructor(
    private adminService: AdminService
  ) {

    adminService.changeCourseIsOpen$.subscribe( courseIsOpen => {
      this.courseIsOpen = <boolean>courseIsOpen;
    });

    adminService.changeTeacherIsOpen$.subscribe(teacherIsOpen => {
      this.teacherIsOpen = <boolean>teacherIsOpen;
    });

    adminService.changeMessageIsOpen$.subscribe(messageIsOpen => {
      this.messageIsOpen = <boolean>messageIsOpen;
    });

    adminService.changeWithdrawalIsOpen$.subscribe(withdrawalIsOpen => {
      this.withdrawalIsOpen = <boolean>withdrawalIsOpen;
    });

  }

  ngOnInit() {}




  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
