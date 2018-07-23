import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParseDescriptionService } from '../services/parse-description.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  showKeywordResults:boolean = false;
  descriptionContent:string;
  textValue = "hi";
  constructor(private parseDescriptionService:ParseDescriptionService) { }

  ngOnInit() {

  }

  submitDescription(description):void {
    this.parseDescriptionService.parseDescription(description);
  }

}
