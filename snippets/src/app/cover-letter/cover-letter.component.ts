import { Component, OnInit } from '@angular/core';
import { CoverLetterService } from '../services/cover-letter.service';
import { StatusMessageService } from '../services/status-message.service';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  constructor(private coverLetterService:CoverLetterService,
  private statusMessasageService:StatusMessageService) { }

  ngOnInit() {
  }

  compile() {
    let exportedCoverLetter = "";
    for (let i = 0; i < this.coverLetterService.addedSnippets.length; i++) {
      exportedCoverLetter += this.coverLetterService.addedSnippets[i].snippet;
      exportedCoverLetter += "\n\n";
    }
    this.coverLetterService.exported = exportedCoverLetter;
  }

}
