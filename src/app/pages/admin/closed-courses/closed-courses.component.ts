import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-closed-courses',
  templateUrl: './closed-courses.component.html',
  styleUrls: ['./closed-courses.component.css']
})
export class ClosedCoursesComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.courseIsOpenChange(true);
  }

  ngOnInit() {
  }

}
