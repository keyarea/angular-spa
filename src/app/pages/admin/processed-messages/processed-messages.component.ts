import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-processed-messages',
  templateUrl: './processed-messages.component.html',
  styleUrls: ['./processed-messages.component.css']
})
export class ProcessedMessagesComponent implements OnInit {

  constructor(
    private adminService: AdminService
  ) {
    this.adminService.messageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
