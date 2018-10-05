import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.teacherIsOpenChange(true);
  }

  ngOnInit() {
  }

}
