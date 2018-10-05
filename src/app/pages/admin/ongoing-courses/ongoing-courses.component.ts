import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-ongoing-courses',
  templateUrl: './ongoing-courses.component.html',
  styleUrls: ['./ongoing-courses.component.css']
})
export class OngoingCoursesComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.courseIsOpenChange(true);
  }

  ngOnInit() {
  }

}
