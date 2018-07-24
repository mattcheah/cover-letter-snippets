import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {

  constructor(private databaseService:DatabaseService) { }

  ngOnInit() {
  }

}
