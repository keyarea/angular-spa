import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-my-index',
  templateUrl: './my-index.component.html',
  styleUrls: ['./my-index.component.css']
})
export class MyIndexComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.meIsOpenChange(true);
  }

  ngOnInit() {
  }

}
