import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-finance-income',
  templateUrl: './finance-income.component.html',
  styleUrls: ['./finance-income.component.css']
})
export class FinanceIncomeComponent implements OnInit {

  constructor(
    private teacherService: TeacherService
  ) {
    this.teacherService.financeIsOpenChange(true);
  }

  ngOnInit() {
  }

}
