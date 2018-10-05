import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher-audit',
  templateUrl: './teacher-audit.component.html',
  styleUrls: ['./teacher-audit.component.css']
})
export class TeacherAuditComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.teacherIsOpenChange(true);
  }

  ngOnInit() {
  }

}
