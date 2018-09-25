import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.css']
})
export class LeftControlComponent implements OnInit {
  @Input() isCollapsed: boolean;
  username: string;
  constructor() { }

  ngOnInit() {
  }

}
