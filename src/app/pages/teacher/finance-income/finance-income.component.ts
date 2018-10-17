import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-finance-income',
  templateUrl: './finance-income.component.html',
  styleUrls: ['./finance-income.component.css']
})
export class FinanceIncomeComponent implements OnInit {
  validateForm: FormGroup;
  submitForm = () => {
  }

  constructor(
    private teacherService: TeacherService,
    private fb: FormBuilder
  ) {
    this.teacherService.financeIsOpenChange(true);

    this.validateForm = this.fb.group({
      money: [ '' , [ Validators.required ]]
    });
  }

  ngOnInit() {
  }



}
