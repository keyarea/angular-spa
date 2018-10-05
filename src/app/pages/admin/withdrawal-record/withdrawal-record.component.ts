import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-withdrawal-record',
  templateUrl: './withdrawal-record.component.html',
  styleUrls: ['./withdrawal-record.component.css']
})
export class WithdrawalRecordComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.withdrawalIsOpenChange(true);
  }

  ngOnInit() {
  }

}
