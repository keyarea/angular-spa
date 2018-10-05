import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AdminService {
  private courseIsOpen = new Subject();
  private teacherIsOpen = new Subject();
  private messageIsOpen = new Subject();
  private withdrawalIsOpen = new Subject();

  changeCourseIsOpen$ = this.courseIsOpen.asObservable();
  changeTeacherIsOpen$ = this.teacherIsOpen.asObservable();
  changeMessageIsOpen$ = this.messageIsOpen.asObservable();
  changeWithdrawalIsOpen$ = this.withdrawalIsOpen.asObservable();

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

}
