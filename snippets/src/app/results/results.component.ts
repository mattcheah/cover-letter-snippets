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

  filteredSnippets: Array<any>;
  displayedCategory = '';
  showFilteredSnippetsTable = false;

  constructor(
    public parseDescriptionService: ParseDescriptionService,
    public coverLetterService: CoverLetterService,
    private databaseService: DatabaseService,
    private statusMessageService: StatusMessageService
  ) { }

  ngOnInit() {
  }

  displaySnippets(keyword): void {
    this.filteredSnippets = [];
    const snippets = this.databaseService.database;
    for (let i = 0; i < snippets.length; i++) {
      if (snippets[i].categories.includes(keyword)) { this.filteredSnippets.push(snippets[i]); }
    }
    this.displayedCategory = keyword;
    this.showFilteredSnippetsTable = true;
    this.statusMessageService.newStatusMessage('Displaying Snippets from category: ' + keyword, 'primary');
  }

  enterNewDescription() {
    this.filteredSnippets = [];
    this.showFilteredSnippetsTable = false;
    this.parseDescriptionService.showParsingResults = false;
    this.parseDescriptionService.jobDescription = '';
    this.parseDescriptionService.keywordArray = [];
    this.statusMessageService.newStatusMessage('Resetting Job Description', 'warning');
  }

}
