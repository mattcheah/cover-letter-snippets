import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DatabaseService } from "./database.service";

@Injectable()
export class ParseDescriptionService {



  constructor(private databaseService:DatabaseService) { }

  parseDescription(description):any {
    this.resetJobKeywords();

    let descriptionWords = description.split(/\W/);

    for(let i = 0; i < descriptionWords.length; i++) {
      let word = descriptionWords[i].toLowerCase();
      if(word in this.databaseService.categories) {
        console.log("Description word: "+word +" is in categories");
        this.databaseService.categories[word].jobKeywords++;
      }
    }
    console.log("databaseService categories list is now:");
    console.log(this.databaseService.categories);
  }

  resetJobKeywords():void {
    let keywords = Object.keys(this.databaseService.categories);
    for(let i = 0; i< keywords.length; i++) {
      this.databaseService.categories[keywords[i]].jobKeywords = 0;
    }
  }
}
