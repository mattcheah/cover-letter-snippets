import { Component, OnInit } from '@angular/core';

import { ParseDescriptionService } from '../services/parse-description.service';
import { StatusMessageService } from '../services/status-message.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-build-cover-letter',
  templateUrl: './build-cover-letter.component.html',
  styleUrls: ['./build-cover-letter.component.css']
})
export class BuildCoverLetterComponent implements OnInit {

  constructor(
    public parseDescriptionService: ParseDescriptionService,
    public coverLetterService: CoverLetterService,
  ) { }

  ngOnInit() {
  }

}
