import { Component, OnInit } from '@angular/core';
import { ParseDescriptionService } from '../services/parse-description.service';
import { StatusMessageService } from '../services/status-message.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private parseDescriptionService: ParseDescriptionService,
    private databaseService: DatabaseService,
    private coverLetterService: CoverLetterService,
    private statusMessageService: StatusMessageService) { }

  ngOnInit() {
  }

}
