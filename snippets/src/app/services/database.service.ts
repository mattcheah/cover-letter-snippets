import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StatusMessageService } from './status-message.service';

@Injectable()
export class DatabaseService {

  database: Array<any>;
  connected = false;
  showDatabase = false;
  databaseStream: BehaviorSubject<any> = new BehaviorSubject(undefined);
  categories: any = {};


  constructor(private statusMessageService: StatusMessageService) { }

  // getDatabaseStream():Observable<{}> {
  //   return this.databaseStream.asObservable();
  // }

  startConnection(urlString): void {
    const self = this;
    const errorMsg = 'There was an error connecting to the database: ';
    const dataObj = { databaseUrl: urlString };
    this.connect(() => {
      fetch('api/connect-to-database', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(dataObj)
      });
    });
  }

  startConnectionJson(): void {
    this.connect(() => {
      return fetch('api/get-json-data', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        }
      });
    });
  }

  connect(fetchPromise): void {
    const self = this;
    const errorMsg = 'There was an error connecting to the JSON File: ';

    fetchPromise().then(function (res) {
      return res.json();
    }).then((data) => {
      if ('error' in data) {
        self.statusMessageService.newStatusMessage(errorMsg + data.error, 'error');
      } else if (data.connected) {
        self.database = data.data;
        self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
        self.extractCategories();
        self.connected = true;
        self.showDatabase = true;
      }
    }).catch((err) => {
      console.log('Error: ' + err);
      self.statusMessageService.newStatusMessage(errorMsg + err, 'error');
    });
  }

  addSnippet(snippet, categories): void {
    const self = this;
    const data = {snippet: snippet, categories: categories};
    fetch('api/add-snippet', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(data)
    }).then(res => res.json()
    ).then(returnData => {
      self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
      self.database = returnData.data;
      self.extractCategories();
    }).catch(error => {
      console.log('Error: ' + error);
      self.statusMessageService.newStatusMessage('There was an error submitting your snippet: ' + error, 'error');
    });
  }

  deleteSnippet(id): void {
    const self = this;
    const data = {id: id};
    fetch('api/delete-snippet', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data)
    }).then(res => res.json()
    ).then(returnData => {
      self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
      self.database = returnData.data;
      self.extractCategories();
    }).catch(err => {
      self.statusMessageService.newStatusMessage(err, 'error');
    });
  }

  extractCategories(): void {
    this.categories = {};

    for (let i = 0; i < this.database.length; i++) {
      const record = this.database[i];
      for (let j = 0; j < record.categories.length; j++) {
        const category = record.categories[j];
        if (!(category in this.categories)) {
          this.categories[category] = {
            ids: [],
            jobKeywords: 0
          };
        }
        this.categories[category].ids.push(record);
      }
    }
  }

}
