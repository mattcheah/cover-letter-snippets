import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseCategoryAliasesService } from '../services/databaseCategoryAliases.service';



@Component({
  selector: 'app-category-aliases-db',
  templateUrl: './category-aliases-db.component.html',
  styleUrls: ['./category-aliases-db.component.css']
})
export class CategoryAliasesDatabaseComponent implements OnInit {

  showConnectForm = true;
  databaseString = 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';

  editCategoryObject;
  editingAlias = false;
  categoryEdited = false;

  constructor(public dbAliasService: DatabaseCategoryAliasesService) { }

  ngOnInit() {
  }

  connectJson(jsonString: string): void {
    this.dbAliasService.startAliasConnection(true, jsonString);
  }

  connect(connectString: string): void {
    // console.log("connecting to mongoose db: response is:");
    this.dbAliasService.startAliasConnection(false, connectString);
  }

  toggleEditCategory(category): void {
    console.log("id and category: " + category._id);
    console.log(category);
    if (!this.editCategoryObject || category._id !== this.editCategoryObject._id || this.editingAlias) {
      this.editingAlias = false;

      if (this.editCategoryObject) {
        console.log("about to save edit category obj");
        console.log(this.editCategoryObject);
        this.saveEdit(this.editCategoryObject);
      }

      this.editCategoryObject = category;
      console.log("editing category obj");
      console.log(this.editCategoryObject);
      const categoryLabel: HTMLElement = document.querySelector('#category-' + category._id + ' .category');
      const categoryEdit: HTMLElement = document.querySelector('#category-' + category._id + ' .category-edit');

      console.log("cat label: ");
      console.log(categoryLabel);
      console.log("cat edited: ");
      console.log(categoryEdit);

      categoryLabel.style.display = 'none';
      categoryEdit.style.display = 'block';
    }
  }

  toggleEditAliases(category): void {
    if (!this.editCategoryObject || category._id !== this.editCategoryObject._id || !this.editingAlias) {
      this.editingAlias = true;

      if (this.editCategoryObject) {
        this.saveEdit(this.editCategoryObject);
      }

      this.editCategoryObject = category;
      const aliasesLabel: HTMLElement = document.querySelector('#category-' + category._id + ' .aliases');
      const aliasesEdit: HTMLElement = document.querySelector('#category-' + category._id + ' .aliases-edit');

      aliasesLabel.style.display = 'none';
      aliasesEdit.style.display = 'block';
    }
  }

  toggleOffEditing(): void {

    if (this.editCategoryObject) {
      this.editCategoryObject = undefined;

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

  saveEdit(category): void {
    console.log("saveEdit function- category: ");
    console.log(category);

    // setting variables for edited content so that
    const newCat: HTMLInputElement = document.querySelector('#category-' + category._id + ' .category-edit');
    const newAlias: HTMLInputElement = document.querySelector('#category-' + category._id + ' .aliases-edit');

    category.category = newCat.value;
    category.aliases = newAlias.value;
    if (this.categoryEdited) {
      if (typeof category.aliases === 'string') {
        category.aliases.replace(' ', '');
        category.aliases = category.aliases.split(',');
      }
      console.log("cat id, cat, aliases: ");
      console.log(category._id);
      console.log(category.category);
      console.log(category.aliases);
      this.dbAliasService.editCategoryAliases(category._id, category.category, category.aliases);
      this.categoryEdited = false;
    }
    this.toggleOffEditing();
  }

  deleteRecord(id) {
    // console.log("delete id: "+id);
    this.dbAliasService.deleteCategory(id);
  }



}
