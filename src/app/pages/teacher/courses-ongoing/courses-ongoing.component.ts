import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-courses-ongoing',
  templateUrl: './courses-ongoing.component.html',
  styleUrls: ['./courses-ongoing.component.less']
})
export class CoursesOngoingComponent implements OnInit {
  tableTitle = '课程审核';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false

  classes = [
    {
      id    : '1',
      name   : '概率论',
      endClassNum: 1,
      classNum : 2,
      classTime: '2018-10-12 20:27:02',
      speaker: '张三',
      capacity: 1,
      price: 20,
      commission: 16,
      audit: false
    },
    {
      id    : '2',
      name   : '高等数学',
      endClassNum: 1,
      classNum : 2,
      classTime: '2018-10-12 20:27:02',
      speaker: '张三',
      capacity: 2,
      price: 20,
      commission: 12,
      audit: false
    },
    {
      id    : '3',
      name   : '数理统计',
      endClassNum: 1,
      classNum : 2,
      classTime: '2018-10-12 20:27:02',
      speaker: '张三',
      capacity: 1,
      price: 20,
      commission: 12,
      audit: false
    }
  ];
  constructor(
    private teacherService: TeacherService,
    private nzMessageService: NzMessageService
  ) {
    this.teacherService.courseIsOpenChange(true);
  }

  auditPass() {

  }

  auditCancel(): void {
    this.nzMessageService.info('操作取消');
  }

  ngOnInit() {
  }

}
