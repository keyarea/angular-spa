import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NzMessageService } from 'ng-zorro-antd';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  tableTitle = '用户列表';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false
  isVisible = false; // 模态框默认隐藏
  modalTitle = ''; // 模态框标题
  modalForm: FormGroup; // 模态框表单
  roleIsLoading = false; // 角色加载
  roleList = []; // 角色列表

  users = [
    {
      id    : '1',
      name: '张三',
      phone: '17601037335',
      status: true,
      createTime: '2018/09/18 16:08',
      role: '系统管理员'
    },
    {
      id    : '2',
      name: '李四',
      phone: '15345461840',
      status: true,
      createTime: '2018/09/19 16:08',
      role: '系统管理员'
    },
    {
      id    : '3',
      name: '王五',
      phone: '15805461478',
      status: true,
      createTime: '2018/10/11 15:08',
      role: '系统管理员'
    }
  ];
  constructor(
    private adminService: AdminService
  ) {
    this.adminService.permissionsIsOpenChange(true);
  }

  ngOnInit() {
  }


  editUser(): void {
    this.modalTitle = '编辑用户';
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOk () {
    this.isVisible = false;
  }

  submitForm () {

  }

  loadMoreRole() {

  }
}




