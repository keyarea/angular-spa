import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
  styleUrls: ['./new-messages.component.css']
})
export class NewMessagesComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.messageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
