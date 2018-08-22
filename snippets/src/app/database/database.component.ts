import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';



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

  constructor(public databaseService: DatabaseService) { }

  ngOnInit() {
  }

  connectJson(jsonString: string): void {
    this.databaseService.startConnection(true, jsonString);
  }

  connect(connectString: string): void {
    // console.log("connecting to mongoose db: response is:");
    this.databaseService.startConnection(false, connectString);
  }

  toggleEditSnippet(snippet): void {
    console.log('===================== START');
    console.log('clicked on new snippet:');
    console.log(snippet);

    if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || this.editingCategory) {
      console.log('no current editing object or we\'re switching objects')
      this.editingCategory = false;

      if (this.editSnippetObject) {
        console.log('We are switching objects and we need to save and flush');
        this.saveEdit(this.editSnippetObject);
      }

      console.log('lets display the editable box');
      this.editSnippetObject = snippet;
      const snippetLabel: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .snippet');
      const snippetEdit: HTMLElement = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');

      snippetLabel.style.display = 'none';
      snippetEdit.style.display = 'block';
    }
    console.log('================================ END');
  }

  toggleEditCategories(snippet): void {
    if (!this.editSnippetObject || snippet._id !== this.editSnippetObject._id || !this.editingCategory) {
      console.log('no current editing object or we\'re switching objects')
      this.editingCategory = true;

      if (this.editSnippetObject) {
        console.log('We are switching objects and we need to save and flush');
        this.saveEdit(this.editSnippetObject);
      }

      console.log('lets display the editable box');
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

    const newSnip: HTMLInputElement = document.querySelector('#snippet-' + snippet._id + ' .snippet-edit');
    const newCat: HTMLInputElement = document.querySelector('#snippet-' + snippet._id + ' .categories-edit');

    snippet.snippet = newSnip.value;
    snippet.categories = newCat.value;
    if (this.snippetEdited) {
      console.log('SNIPPET WAS EDITED. WE\'RE SAVING BROS');
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
