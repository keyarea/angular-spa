import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TeacherService {
  private courseIsOpen = new Subject();
  private manageIsOpen = new Subject();
  private financeIsOpen = new Subject();
  private meIsOpen = new Subject();

  changeCourseIsOpen$ = this.courseIsOpen.asObservable();
  changeManageIsOpen$ = this.manageIsOpen.asObservable();
  changeFinanceIsOpen$ = this.financeIsOpen.asObservable();
  changeMeIsOpen$ = this.meIsOpen.asObservable();

  courseIsOpenChange(change: boolean) {
    this.courseIsOpen.next(change);
  }

  manageIsOpenChange(change: boolean) {
    this.manageIsOpen.next(change);
  }

  financeIsOpenChange(change: boolean) {
    this.financeIsOpen.next(change);
  }

  meIsOpenChange(change: boolean) {
    this.meIsOpen.next(change);
  }

}
