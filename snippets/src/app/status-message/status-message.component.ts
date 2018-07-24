import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.css']
})
export class StatusMessageComponent implements OnInit {
  statusMessage:String = "";
  statusClass:String = "primary";
  constructor() { }

  ngOnInit() {
  }

  setStatusMessage(message):void {
    this.statusMessage = message;
  }

  setStatusClass(cssClass):void {
    this.statusClass = cssClass;
  }

}
