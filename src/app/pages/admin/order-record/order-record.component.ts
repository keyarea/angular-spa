import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-order-record',
  templateUrl: './order-record.component.html',
  styleUrls: ['./order-record.component.css']
})
export class OrderRecordComponent implements OnInit {
  tableTitle = '订单记录';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false

  orders = [
    {
      id    : '1',
      name: '概率论',
      buyer: '张三',
      price: 23,
      commission: 20,
      time: '2018/01/01'
    },
    {
      id    : '1',
      name: '概率论',
      buyer: '张三',
      price: 23,
      commission: 20,
      time: '2018/01/01'
    }
    ];

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.withdrawalIsOpenChange(true);
  }

  ngOnInit() {
  }

}
