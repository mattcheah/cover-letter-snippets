import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatabaseService {

  database: Array<any>;
  categories:any = {};

  constructor() { }

  startConnection(urlString):any {
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
        console.log("response from connection:");
        console.log(data);
        if("data" in data) self.database = data.data;
        self.extractCategories();
        return data;
    }).catch((err) => {
      console.log("Error: " + err);
      // self.responseMessage = err;
      return err;
    });
  }

  extractCategories(): void {
    console.log("this was called!");
    for (let i = 0; i < this.database.length; i++) {
      let record = this.database[i];
      for (let j = 0; j < record.categories; j++) {
        let category = record.categories[j];
        console.log("looking at category: "+category);
        if (!(category in this.categories)) {
          this.categories[category] = {
            ids: [],
            jobKeywords: 0
          };
          console.log("this.categories adding one more category");
          console.log(this.categories);
        }
        this.categories[category].ids.push(record);
      }
    }
    console.log("categories:");
    console.log(this.categories);
  }

}
