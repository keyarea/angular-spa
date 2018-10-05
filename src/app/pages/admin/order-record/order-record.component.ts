import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-order-record',
  templateUrl: './order-record.component.html',
  styleUrls: ['./order-record.component.css']
})
export class OrderRecordComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.withdrawalIsOpenChange(true);
  }

  ngOnInit() {
  }

}
