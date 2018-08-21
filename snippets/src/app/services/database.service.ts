import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StatusMessageService } from './status-message.service';

export interface DatabaseResponse {
  responseMessage: string;
  connected: boolean;
  data: Array<{}>;
  error: boolean
}

@Injectable()
export class DatabaseService {

  isJson: boolean;
  database: Array<any>;
  connected = false;
  showDatabase = false;
  categories: any = {};

  constructor(
    private http: HttpClient,
    private statusMessageService: StatusMessageService,
  ) { }

  startConnection(isJson = true, urlString = './snippets-db.json'): void {
    const self = this;
    const dataObj = JSON.stringify({ databaseUrl: urlString });
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    const url = isJson ? 'api/get-json-data' : 'api/connect-to-database';
    self.isJson = isJson;

    this.http.post<DatabaseResponse>(url, dataObj, options)
      .pipe(retry(2), catchError(this.handleError)
    ).subscribe(response => {
      if (response.connected) {
        self.database = response.data;
        self.statusMessageService.newStatusMessage(response.responseMessage, 'success');
        self.connected = true;
        self.showDatabase = true;

        if (self.database.length > 0) {
          self.extractCategories();
        }
      }
    });
  }

  addSnippet(snippet, categories): void {
    const self = this;
    const data = {snippet: snippet, categories: categories};
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    const url = self.isJson ? 'api/add-json-snippet' : 'api/add-snippet';

    this.http.post<DatabaseResponse>(url, JSON.stringify(data), options)
      .pipe(retry(2), catchError(this.handleError)
    ).subscribe(returnData => {
      if (returnData.connected) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
        self.database = returnData.data;
        self.extractCategories();
      } else if (returnData.error) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'error');
      }
    });
  }

  editSnippet(id, snippet, categories): void {
    const self = this;
    const url = self.isJson ? 'api/edit-json-snippet' : 'api/edit-snippet';
    const data = { id: id, snippet: snippet, categories: categories };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    this.http.put<DatabaseResponse>(url, JSON.stringify(data), options)
    .pipe(retry(2), catchError(this.handleError)
    ).subscribe(returnData => {
      if (returnData.connected && !returnData.error) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
        self.database = returnData.data;
        self.extractCategories();
      }
    });
  }

  deleteSnippet(id): void {
    const self = this;
    const data = {id: id};
    const url = self.isJson ? 'api/delete-json-snippet' : 'api/delete-snippet';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      }),
      body: JSON.stringify(data)
    };

    this.http.delete<DatabaseResponse>(url, options)
      .pipe(retry(2), catchError(this.handleError)
      ).subscribe(returnData => {
        if (returnData.connected && !returnData.error) {
          self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
          self.database = returnData.data;
          self.extractCategories();
        }
      });
  }

  private extractCategories(): void {
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

  private handleError(error: HttpErrorResponse) {
    console.log('error obj: ');
    console.log(error);

    if (error.error instanceof ErrorEvent) {
      console.error('Error: ', error.error.message);
      this.statusMessageService.newStatusMessage('There was a network error with your request: ' + error.error.message, 'error');
    } else {
      console.error(`Backend returned code ${error.status}`);
      console.error(`Error Body: ${error.error}`);
      this.statusMessageService.newStatusMessage('There was a server error with your request: ' + error.error, 'error');
    }
    return throwError('error from throwerror');
  }

}
