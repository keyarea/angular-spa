import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-courses-info',
  templateUrl: './courses-info.component.html',
  styleUrls: ['./courses-info.component.css']
})
export class CoursesInfoComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.courseIsOpenChange(true);
  }

  ngOnInit() {
  }

}
