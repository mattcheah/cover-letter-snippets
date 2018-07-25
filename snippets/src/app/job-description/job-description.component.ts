import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParseDescriptionService } from '../services/parse-description.service';
import { StatusMessageService } from '../services/status-message.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {

  descriptionContent:string;
  filteredSnippets:Array<any>;
  displayedCategory:string = "";
  showFilteredSnippetsTable:boolean = false;

  constructor(
    private parseDescriptionService:ParseDescriptionService,
    private databaseService:DatabaseService,
    private coverLetterService:CoverLetterService,
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
    this.showFilteredSnippetsTable = false;
    this.statusMessageService.newStatusMessage("Resetting Job Description", "warning");
  }

  displaySnippets(keyword):void {
    this.filteredSnippets = [];
    let snippets = this.databaseService.database;
    for(let i = 0; i < snippets.length; i++) {
      if (snippets[i].categories.includes(keyword)) this.filteredSnippets.push(snippets[i]);
    }
    this.displayedCategory = keyword;
    this.showFilteredSnippetsTable = true;
    this.statusMessageService.newStatusMessage("Displaying Snippets from category: "+keyword, "primary");
  }

}
