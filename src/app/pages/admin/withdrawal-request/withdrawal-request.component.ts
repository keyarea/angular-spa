import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-withdrawal-request',
  templateUrl: './withdrawal-request.component.html',
  styleUrls: ['./withdrawal-request.component.css']
})
export class WithdrawalRequestComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.withdrawalIsOpenChange(true);
  }

  ngOnInit() {
  }

}
