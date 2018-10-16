import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-my-audit',
  templateUrl: './my-audit.component.html',
  styleUrls: ['./my-audit.component.css']
})
export class MyAuditComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.meIsOpenChange(true);
  }

  ngOnInit() {
  }

}
