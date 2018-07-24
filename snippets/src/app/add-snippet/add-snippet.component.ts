import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {

  snippet:String = "";
  categories:String = "";

  constructor(private databaseService:DatabaseService) { }

  ngOnInit() {
  }

  addSnippet() {
    let categoriesArray = this.categories.split(",");
    this.databaseService.addSnippet(this.snippet, categoriesArray);
  }
}
