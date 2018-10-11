import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.less']
})
export class TeacherInfoComponent implements OnInit {
  areaIsLoading;
  gradeIsLoading;
  selectedArea;
  selectedGrade;

  areaList = [
    '东营',
    '青岛'
  ];
  gradeList = [
    '七年级',
    '八年级'
  ];
  tableTitle = '教师查看';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false

  teachers = [
    {
      id    : '1',
      name   : '张三',
      area : '东营',
      device : false,
      audit: false
    },
    {
      id    : '2',
      name   : '李四',
      area : '东营',
      device : false,
      audit: false
    },
    {
      id    : '3',
      name   : '王五',
      area : '东营',
      device : true,
      audit: true,
      orderNumber: '123432'
    }
  ];

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.teacherIsOpenChange(true);
  }

  ngOnInit() {
  }

}
