import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoverLetterService } from '../services/cover-letter.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {

  constructor(private coverLetterService:CoverLetterService) { }

  ngOnInit() {
  }

}
