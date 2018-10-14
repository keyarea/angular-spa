import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {
  tableTitle = '未处理消息';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false
  allChecked = false;
  indeterminate = false;
  listOfSelection = [
    {
      text    : '标为已读',
      onSelect: () => {
        this.checkAll(true);
      }
    },
    {
      text    : '删除',
      onSelect: () => {
        this.messages.forEach((data, index) => data.checked = index % 2 !== 0);
        this.refreshStatus();
      }
    }
  ];
  messages = [
    {
      id    : '1',
      type: '反馈',
      sender: '王五',
      content: 'helloworld',
      time: new Date(),
      statue: false,
      checked: false
    },
    {
      id    : '1',
      type: '消息',
      sender: '王五',
      content: 'helloworld',
      time: new Date(),
      statue: false,
      checked: false
    },
    {
      id    : '1',
      type: '反馈',
      sender: '王五',
      content: 'helloworld',
      time: new Date(),
      statue: false,
      checked: false
    }
  ];


  constructor(
    private adminServece: AdminService
  ) {
    this.adminServece.messageIsOpenChange(true);
  }

  refreshStatus(): void {
    const allChecked = this.messages.every(value => value.checked === true);
    const allUnChecked = this.messages.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.messages.forEach(data => data.checked = value);
    this.refreshStatus();
  }


  ngOnInit() {
  }

}
