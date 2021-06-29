import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';
import {DatabaseCategoryAliasesService } from '../services/databaseCategoryAliases.service';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {

  snippet: String = '';
  categories: String = '';

  category: String = '';
  aliases: String = '';

  constructor(public databaseService: DatabaseService, public databaseAliasService: DatabaseCategoryAliasesService) { }

  ngOnInit() {
  }

  addSnippet() {
    console.log("snippet being added");
    this.categories.replace(' ', '');
    const categoriesArray = this.categories.split(',');
    this.databaseService.addSnippet(this.snippet, categoriesArray);
    this.snippet = '';
    this.categories = '';
  }

  addCategoryAndAliases() {
    console.log("alias being added");
    this.aliases.replace(' ', '');
    const aliasesArray = this.aliases.split(',');
    this.databaseAliasService.addCategoryAliases(this.category, aliasesArray);
    this.category = '';
    this.aliases = '';
  }
}
