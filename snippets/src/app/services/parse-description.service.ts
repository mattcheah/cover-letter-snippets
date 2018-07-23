import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { DatabaseService } from "./database.service";

@Injectable()
export class ParseDescriptionService {



  constructor(private databaseService:DatabaseService) { }

  parseDescription(description):any {
    let descriptionWords = description.split(/\W/);

    for(let i = 0; i < descriptionWords.length; i++) {
      if(descriptionWords[i] in this.databaseService.categories) {
        this.databaseService.categories[descriptionWords[i]].jobKeywords++;
      }
    }
    console.log("databaseService categories list is now:");
    console.log(this.databaseService.categories);
  }
}
