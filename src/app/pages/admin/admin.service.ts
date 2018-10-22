import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AdminService {
  private courseIsOpen = new Subject(); // 课程菜单是否打开
  private teacherIsOpen = new Subject(); // 老师菜单是否打开
  private messageIsOpen = new Subject();  // 消息菜单是否打开
  private withdrawalIsOpen = new Subject(); // 财务菜单是否打开
  private permissionsIsOpen = new Subject(); // 权限菜单是否打开

  changeCourseIsOpen$ = this.courseIsOpen.asObservable();
  changeTeacherIsOpen$ = this.teacherIsOpen.asObservable();
  changeMessageIsOpen$ = this.messageIsOpen.asObservable();
  changeWithdrawalIsOpen$ = this.withdrawalIsOpen.asObservable();
  changePermissionsIsOpen$ = this.permissionsIsOpen.asObservable();

  courseIsOpenChange(change: boolean) {
    this.courseIsOpen.next(change);
  }

  teacherIsOpenChange(change: boolean) {
    this.teacherIsOpen.next(change);
  }

  messageIsOpenChange(change: boolean) {
    this.messageIsOpen.next(change);
  }

  withdrawalIsOpenChange(change: boolean) {
    this.withdrawalIsOpen.next(change);
  }

  permissionsIsOpenChange(change: boolean) {
    this.permissionsIsOpen.next(change);
  }

}
