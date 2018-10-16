import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-finance-record',
  templateUrl: './finance-record.component.html',
  styleUrls: ['./finance-record.component.css']
})
export class FinanceRecordComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.financeIsOpenChange(true);
  }

  ngOnInit() {
  }

}
