import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.less']
})
export class StudentManagementComponent implements OnInit {
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
  tableTitle = '学生管理';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false

  students = [
    {
      name: '张三',
      area: '东营',
      grade: '七年级',
      device: false
    },
    {
      name: '张三',
      area: '东营',
      grade: '七年级',
      device: false
    },
    {
      name: '张三',
      area: '东营',
      grade: '七年级',
      device: true,
      orderNumber: '123432'
    }

  ];


  constructor(
    private adminService: AdminService
  ) {}

  ngOnInit() {
  }

}
