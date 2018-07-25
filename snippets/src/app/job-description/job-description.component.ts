import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  descriptionContent:string;

  constructor(private parseDescriptionService:ParseDescriptionService, private databaseService:DatabaseService) { }

  ngOnInit() {

  }

  submitDescription(description):void {
    this.parseDescriptionService.parseDescription(description);
  }

}
