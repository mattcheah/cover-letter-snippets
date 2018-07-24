import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DatabaseService {

  database: Array<any>;
  connected:boolean = false;
  databaseStream:BehaviorSubject<any> = new BehaviorSubject(undefined);
  categories:any = {};


  constructor() { }

  getDatabaseStream():Observable<{}> {
    return this.databaseStream.asObservable();
  }

  startConnection(urlString):void {
    let self = this;
    let data = { databaseUrl: urlString };
    fetch("connect-to-database", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)
    }).then(function (res) {
      return res.json();
    }).then((data) => {
      if("data" in data) self.database = data.data;
      self.extractCategories();
      this.databaseStream.next(data);
      this.connected = true;
    }).catch((err) => {
      console.log("Error: " + err);
      this.databaseStream.error(err);
    });
  }

  addSnippet(snippet, categories):void {
    let data = {snippet:snippet, categories:categories};
    fetch('add-snippet', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      console.log(data);
    }).catch(error => {
      console.log("Error: "+error);
    });
  }

  extractCategories(): void {
    for (let i = 0; i < this.database.length; i++) {
      let record = this.database[i];
      for (let j = 0; j < record.categories.length; j++) {
        let category = record.categories[j];
        if (!(category in this.categories)) {
          this.categories[category] = {
            ids: [],
            jobKeywords: 0
          };
        }
        this.categories[category].ids.push(record);
      }
    }
    console.log("categories:");
    console.log(this.categories);
  }

}
