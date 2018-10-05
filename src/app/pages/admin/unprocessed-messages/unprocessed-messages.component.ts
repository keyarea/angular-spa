import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-unprocessed-messages',
  templateUrl: './unprocessed-messages.component.html',
  styleUrls: ['./unprocessed-messages.component.css']
})
export class UnprocessedMessagesComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.messageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
