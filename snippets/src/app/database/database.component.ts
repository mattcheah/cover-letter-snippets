import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';
import { DatabaseCategoryAliasesService } from '../services/databaseCategoryAliases.service';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  showConnectForm = true;
  databaseString = 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';

  editSnippetObject;
  editingCategory = false;
  snippetEdited = false;

  constructor(
      public databaseService: DatabaseService, 
      public databaseCategoryAliasesService : DatabaseCategoryAliasesService
    ) { }

  ngOnInit() {
  }

  connectJson(jsonString: string): void {
    console.log("in db component connectJson");
    this.databaseService.startConnection(true, jsonString);
    console.log("json string for db service: " + jsonString);
    
    this.databaseCategoryAliasesService.startAliasConnection(true, jsonString);
  }

  connect(connectString: string): void {
    // console.log("connecting to mongoose db: response is:");
    this.databaseService.startConnection(false, connectString);
  }

  toggleEditSnippet(snippet): void {
    if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || this.editingCategory) {
      this.editingCategory = false;

      if (this.editSnippetObject) {
        this.saveEdit(this.editSnippetObject);
      }

      this.editSnippetObject = snippet;
      const snippetLabel: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .snippet');
      const snippetEdit: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');

      console.log("snippet label: ");
      console.log(snippetLabel);
      console.log("snippet edited: ");
      console.log(snippetEdit);

      snippetLabel.style.display = 'none';
      snippetEdit.style.display = 'block';
    }
  }

  toggleEditCategories(snippet): void {
    if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || !this.editingCategory) {
      this.editingCategory = true;

      if (this.editSnippetObject) {
        this.saveEdit(this.editSnippetObject);
      }

      this.editSnippetObject = snippet;
      const categoriesLabel: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .categories');
      const categoriesEdit: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .categories-edit');

      categoriesLabel.style.display = 'none';
      categoriesEdit.style.display = 'block';
    }
  }

  toggleOffEditing(): void {

    if (this.editSnippetObject) {
      this.editSnippetObject = undefined;

      const noEdits = document.getElementsByClassName('no-edit') as HTMLCollectionOf<HTMLElement>;
      const edits = document.getElementsByClassName('editable') as HTMLCollectionOf<HTMLElement>;

      for (let i = 0; i < edits.length; i++) {
        edits[i].style.display = 'none';
      }
      for (let j = 0; j < noEdits.length; j++) {
        noEdits[j].style.display = 'block';
      }
    }
  }

  saveEdit(snippet): void {


    // setting variables for edited content so that
    const newSnip: HTMLInputElement = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');
    const newCat: HTMLInputElement = document.querySelector('#snippet-' + snippet._id + ' .categories-edit');

    snippet.snippet = newSnip.value;
    snippet.categories = newCat.value;
    if (this.snippetEdited) {
      if (typeof snippet.categories === 'string') {
        snippet.categories.replace(' ', '');
        snippet.categories = snippet.categories.split(',');
      }
      this.databaseService.editSnippet(snippet._id, snippet.snippet, snippet.categories);
      this.snippetEdited = false;
    }
    this.toggleOffEditing();
  }

  deleteRecord(id) {
    // console.log("delete id: "+id);
    this.databaseService.deleteSnippet(id);
  }



}
