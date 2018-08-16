import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { StatusMessageService } from './status-message.service';

export interface DatabaseResponse {
  connected: boolean;
  responseMessage: String;
  data: {};
}

@Injectable()
export class DatabaseService {

  database: Array<any>;
  connected = false;
  showDatabase = false;
  categories: any = {};

  constructor(
    private http: HttpClient,
    private statusMessageService: StatusMessageService,
  ) { }

  startConnection(urlString) {
    const dataObj = { databaseUrl: urlString };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    this.connect(() => {
      return this.http.post<DatabaseResponse>('api/connect-to-database', dataObj, options)
        .pipe(retry(2), catchError(this.handleError)
      );
    });
  }

  startConnectionJson(jsonFileUrl = 'api/get-json-data') {
    this.connect(() => {
      return this.http.get<DatabaseResponse>(jsonFileUrl)
        .pipe(retry(2), catchError(this.handleError)
      );
    });
  }

  connect(httpObservable): void {
    const self = this;

    httpObservable().subscribe((data) => {
      console.log('Got data from jsonObservable:' + data);
      if (data.connected) {
        self.database = data.data;
        self.statusMessageService.newStatusMessage(data.responseMessage, 'success');
        self.connected = true;
        self.showDatabase = true;
        self.extractCategories();
      }
    });
  }

  addSnippet(snippet, categories): void {
    const self = this;
    const data = {snippet: snippet, categories: categories};
    fetch('api/add-snippet', {
        method:           'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type':           'application/json; charset=utf-8',
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

  addJsonSnippet(snippet, categories): void {
  }

  deleteSnippet(id): void {
    const self = this;
    const data = {id: id};
    fetch('api/delete-snippet', {
      method:            'DELETE',
      headers: {
        'Content-Type':            'application/json; charset=utf-8',
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
