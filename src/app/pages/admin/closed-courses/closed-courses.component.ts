import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-closed-courses',
  templateUrl: './closed-courses.component.html',
  styleUrls: ['./closed-courses.component.less']
})
export class ClosedCoursesComponent implements OnInit {
  bordered = false; // 默认值为true，是否有边框
  hoverable = true; // 默认值为false,鼠标移过是否可以浮起
  loading = true; // 默认值false，当卡片内容还在加载中时，可以用 loading 展示一个占位
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

  ngOnInit() {
  }

}
