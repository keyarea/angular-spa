import { Component, OnInit, OnChanges } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-course-audit',
  templateUrl: './course-audit.component.html',
  styleUrls: ['./course-audit.component.css']
})
export class CourseAuditComponent implements OnInit, OnChanges {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.courseIsOpenChange(true);
  }

  ngOnInit() {

  }

  ngOnChanges() {

  }

}
