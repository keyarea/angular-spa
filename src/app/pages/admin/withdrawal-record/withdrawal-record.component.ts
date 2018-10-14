import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-withdrawal-record',
  templateUrl: './withdrawal-record.component.html',
  styleUrls: ['./withdrawal-record.component.css']
})
export class WithdrawalRecordComponent implements OnInit {
  tableTitle = '提现记录';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false

  records = [
    {
      id    : '1',
      time: '2018/01/01 18:00',
      money: 20,
      QrCode: '',
      status: false,
      initiator: '张三'
    },
    {
      id    : '1',
      time: '2018/01/01 18:00',
      money: 20,
      QrCode: '',
      status: false,
      initiator: '张三'
    },
    {
      id    : '1',
      time: '2018/01/01 18:00',
      money: 20,
      QrCode: '',
      status: false,
      initiator: '张三'
    },
  ];

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.withdrawalIsOpenChange(true);
  }

  ngOnInit() {
  }

}
