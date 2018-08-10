import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StatusMessageService } from './status-message.service';

@Injectable()
export class DatabaseService {

  database: Array<any>;
  connected:boolean = false;
  showDatabase:boolean = false;
  databaseStream:BehaviorSubject<any> = new BehaviorSubject(undefined);
  categories:any = {};


  constructor(private statusMessageService:StatusMessageService) { }

  // getDatabaseStream():Observable<{}> {
  //   return this.databaseStream.asObservable();
  // }

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
      if ("error" in data) {
        self.statusMessageService.newStatusMessage("There was an error connecting to the database: "+data.error, "error");
      } else if (data.connected) {
        self.database = data.data;
        self.statusMessageService.newStatusMessage(data.responseMessage, "success");
        self.extractCategories();
        self.connected = true;
        self.showDatabase = true;
      }
    }).catch((err) => {
      console.log("Error: " + err);
      self.statusMessageService.newStatusMessage("There was an error connecting to the database: "+err, "error");
    });
  }

  startConnectionJson():void {
    let self = this;
    fetch("connect-to-json", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      }
    }).then(function (res) {
      return res.json();
    }).then((data) => {
      if ("error" in data) {
        self.statusMessageService.newStatusMessage("There was an error connecting to the JSON File: " + data.error, "error");
      } else if (data.connected) {
        self.database = data.data;
        self.statusMessageService.newStatusMessage(data.responseMessage, "success");
        self.extractCategories();
        self.connected = true;
        self.showDatabase = true;
      }
    }).catch((err) => {
      console.log("Error: " + err);
      self.statusMessageService.newStatusMessage("There was an error connecting to the JSON File: " + err, "error");
    });
  }

  addSnippet(snippet, categories):void {
    let self = this;
    let data = {snippet:snippet, categories:categories};
    fetch('add-snippet', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(data)
    }).then(res => res.json()
    ).then(data => {
      self.statusMessageService.newStatusMessage(data.responseMessage, "success");
      self.database = data.data;
      self.extractCategories();
    }).catch(error => {
      console.log("Error: "+error);
      self.statusMessageService.newStatusMessage("There was an error submitting your snippet: "+error, "error");
    });
  }

  deleteSnippet(id):void {
    let self = this;
    let data = {id: id};
    fetch('delete-snippet', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)
    }).then(res => res.json()
    ).then(data => {
      self.statusMessageService.newStatusMessage(data.responseMessage, "success");
      self.database = data.data;
      self.extractCategories();
    }).catch(err => {
      self.statusMessageService.newStatusMessage(err, "error");
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
