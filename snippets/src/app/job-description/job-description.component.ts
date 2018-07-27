import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParseDescriptionService } from '../services/parse-description.service';
import { StatusMessageService } from '../services/status-message.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  descriptionContent:string;

  constructor(
    private parseDescriptionService:ParseDescriptionService,
    private statusMessageService:StatusMessageService
  ) { }

  ngOnInit() {

  }

  submitDescription(description):void {
    this.parseDescriptionService.parseDescription(description);
  }

  enterNewDescription():void {
    this.descriptionContent = "";
    this.parseDescriptionService.showParsingResults = false;
    this.statusMessageService.newStatusMessage("Resetting Job Description", "warning");
  }

}
