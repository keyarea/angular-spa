import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-courses-publish',
  templateUrl: './courses-publish.component.html',
  styleUrls: ['./courses-publish.component.css']
})
export class CoursesPublishComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.manageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
