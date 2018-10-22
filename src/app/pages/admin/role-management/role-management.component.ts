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
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.css']
})
export class RoleManagementComponent implements OnInit {
  tableTitle = '角色管理';  // 表格头部名称
  hideOnSinglePage = true; // 只有一页数据是否隐藏分页器
  noResult = '暂无数据';  // 无数据时显示内容
  pageSize = 30;  // 每页显示多少数据
  pageIndex; // 当前页码
  frontPagination = true; // 是否在前端对数据进行分页，如果在服务器分页数据或者需要在前端显示全部数据时传入 false
  isVisible = false; // 是否显示模态框
  modalTitle = ''; // 模态框标题
  permissionsForm: FormGroup; // 表单

  roles = [
    {
      id    : '1',
      name   : '系统管理员',
    },
    {
      id    : '2',
      name   : '区域管理员',
    },
    {
      id    : '3',
      name   : '老师',
    }
  ];
  constructor(
    private adminService: AdminService
  ) {
    this.adminService.permissionsIsOpenChange(true);
  }

  ngOnInit() {
  }

  editRole() {
    this.modalTitle = '角色编辑';
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {
    this.isVisible = true;
  }

  submitForm() {

  }

}
