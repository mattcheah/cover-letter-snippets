import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  coverLetterLinkDisabled:boolean = this.coverLetterService.addedSnippets.length == 0;

  constructor(
    private databaseService:DatabaseService,
    private parseDescriptionService:ParseDescriptionService,
    private coverLetterService:CoverLetterService
  ) { }

  ngOnInit() {
  }

}
