import { Component, OnInit } from '@angular/core';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.component.html',
  styleUrls: ['./cover-letter.component.css']
})
export class CoverLetterComponent implements OnInit {

  constructor(private coverLetterService:CoverLetterService) { }

  ngOnInit() {
  }

}
