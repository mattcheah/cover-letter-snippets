import { Component, OnInit } from '@angular/core';
import { StatusMessageService } from '../services/status-message.service';

@Component({
  selector: 'app-status-message',
  templateUrl: './status-message.component.html',
  styleUrls: ['./status-message.component.css']
})

export class StatusMessageComponent implements OnInit {
  statusMessage:String = "";
  statusClass:String = "primary";
  constructor(private statusMessageService:StatusMessageService) { }

  ngOnInit() {
    let statusObservable = this.statusMessageService.getStatusMessageStream();
    statusObservable.subscribe(d => {
      if (d !== undefined) {
        this.statusMessage = d.status;
        this.statusClass = d.cssClass;
      }
    });
  }

}
