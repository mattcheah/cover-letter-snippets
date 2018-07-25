import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ParseDescriptionService } from '../services/parse-description.service';
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
    private coverLetterService:CoverLetterService
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
  }

  displaySnippets(keyword):void {
    this.filteredSnippets = [];
    let snippets = this.databaseService.database;
    for(let i = 0; i < snippets.length; i++) {
      if (snippets[i].categories.includes(keyword)) this.filteredSnippets.push(snippets[i]);
    }
    this.displayedCategory = keyword;
    this.showFilteredSnippetsTable = true;
  }

}
