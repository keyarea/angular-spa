import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';


@Component({
  selector: 'app-my-other',
  templateUrl: './my-other.component.html',
  styleUrls: ['./my-other.component.css']
})
export class MyOtherComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.meIsOpenChange(true);
  }

  ngOnInit() {
  }

}
