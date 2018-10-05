import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-ongoing-courses',
  templateUrl: './ongoing-courses.component.html',
  styleUrls: ['./ongoing-courses.component.less']
})
export class OngoingCoursesComponent implements OnInit {
  areaIsLoading;
  subjectIsLoading;
  gradeIsLoading;
  selectedArea;
  selectedSubject;
  selectedGrade;
  subjectList = [
    '语文',
    '数学'
  ];
  areaList = [
    '东营',
    '青岛'
  ];
  gradeList = [
    '七年级',
    '八年级'
  ];

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.courseIsOpenChange(true);
  }

  loadMoreArea() {

  }

  loadMoreSubject() {

  }

  loadMoreGrade() {

  }

  ngOnInit() {
  }

}
