import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {

  constructor(
    private adminServece: AdminService
  ) {
    this.adminServece.messageIsOpenChange(true);
  }

  ngOnInit() {
  }

}
