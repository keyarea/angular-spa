import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-courses-record',
  templateUrl: './courses-record.component.html',
  styleUrls: ['./courses-record.component.css']
})
export class CoursesRecordComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.manageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
