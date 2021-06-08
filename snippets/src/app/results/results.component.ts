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
  showAllValues = false;
  jobDescription: string;
  showDescriptionPanel = false;
  panelLabel = false;

  constructor(
    public parseDescriptionService: ParseDescriptionService,
    public coverLetterService: CoverLetterService,
    private databaseService: DatabaseService,
    private statusMessageService: StatusMessageService
  ) {}

  ngOnInit() {
    this.displaySnippets('intro');
  }

  displaySnippets(keyword): void {
    this.filteredSnippets = [];
    const snippets = this.databaseService.database;
    this.filteredSnippets = snippets
      .filter(x => x.categories.includes(keyword))
      .map(x => {
        x.matchesCount = this.getMatchingCategoriesCount(x);
        return x;
      })
      .sort((a, b) => {
        // nullcheck
        if (
          !this.parseDescriptionService.keywordArray ||
          !a.categories ||
          !b.categories
        ) {
          return 0;
        }
        // descending order
        return b.matchesCount - a.matchesCount;
      });
    this.displayedCategory = keyword;
    this.showFilteredSnippetsTable = true;
    this.statusMessageService.newStatusMessage(
      'Displaying Snippets from category: ' + keyword,
      'primary'
    );
  }

  enterNewDescription() {
    this.filteredSnippets = [];
    this.showFilteredSnippetsTable = false;
    this.parseDescriptionService.showParsingResults = false;
    this.parseDescriptionService.jobDescription = '';
    this.parseDescriptionService.keywordArray = [];
    this.statusMessageService.newStatusMessage(
      'Resetting Job Description',
      'warning'
    );
  }

  private getMatchingCategoriesCount(snippet: any): number {
    return snippet.categories.filter(
      x =>
        !!this.parseDescriptionService.keywordArray.filter(y => y['jobKeywords'] > 0).find(
          y => y['keyword'] === x
        )
    ).length;
  }

  toggleAccordian() {
    this.showDescriptionPanel = !this.showDescriptionPanel;
    this.panelLabel = !this.panelLabel;
  }
}
