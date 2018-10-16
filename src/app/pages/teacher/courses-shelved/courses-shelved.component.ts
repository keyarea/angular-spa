import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-courses-shelved',
  templateUrl: './courses-shelved.component.html',
  styleUrls: ['./courses-shelved.component.css']
})
export class CoursesShelvedComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.manageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
