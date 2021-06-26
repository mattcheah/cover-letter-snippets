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
export class DatabaseCategoryAliasesService {

  isJson: boolean;
  database: Array<any>;
  connected = false;
  showDatabase = false;
  aliases: any = {};

  constructor(
    private http: HttpClient,
    private statusMessageService: StatusMessageService,
  ) { }

  startAliasConnection(isJson = true, urlString = 'category-aliases-db.json'): void {
    console.log("in db category alias service startconnection");
    const self = this;
    const dataObj = JSON.stringify({ databaseUrl: urlString });
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };
    //const url = isJson ? 'api/get-json-category-aliases-data' : 'api/connect-to-database';
    const url = 'api/get-json-category-aliases-data';

    console.log("category alias url: " + url);
    self.isJson = isJson;

    this.http.post<DatabaseResponse>(url, dataObj, options)
      .pipe(retry(2), catchError(this.handleError)
    ).subscribe(response => {
      if (response.connected && !response.error) {
        self.database = response.data;
        self.statusMessageService.newStatusMessage(response.responseMessage, 'success');
        self.connected = true;
        self.showDatabase = true;

        if (self.database.length > 0) {
          console.log("calling extractAliases")
          self.extractAliases();
        }
      } else if (response.error) {
        self.statusMessageService.newStatusMessage(response.responseMessage, 'errir');
      }
    });
  }

  addCategoryAliases(category, aliases): void {
    const self = this;
    const data = {category: category, aliases: aliases};
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    const url = self.isJson ? 'api/add-json-category-aliases' : 'api/add-snippet';

    this.http.post<DatabaseResponse>(url, JSON.stringify(data), options)
      .pipe(catchError(this.handleError)
    ).subscribe(returnData => {
      if (returnData.connected) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
        self.database = returnData.data;
        self.extractAliases();
      } else if (returnData.error) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'error');
      }
    });
  }

  editCategoryAliases(id, category, aliases): void {
    const self = this;
    const url = self.isJson ? 'api/edit-json-category-aliases' : 'api/edit-snippet';
    const data = { id: id, category: category, aliases: aliases };
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    };

    this.http.put<DatabaseResponse>(url, JSON.stringify(data), options)
    .pipe(catchError(this.handleError)
    ).subscribe(returnData => {
      if (returnData.connected && !returnData.error) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
        self.database = returnData.data;
        self.extractAliases();
      } else if (returnData.error) {
        self.statusMessageService.newStatusMessage(returnData.responseMessage, 'errir');
      }
    });
  }

  deleteCategory(id): void {
    const self = this;
    const data = {id: id};
    const url = self.isJson ? 'api/delete-json-category-aliases' : 'api/delete-snippet';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      }),
      body: JSON.stringify(data)
    };

    this.http.delete<DatabaseResponse>(url, options)
      .pipe(catchError(this.handleError)
      ).subscribe(returnData => {
        if (returnData.connected && !returnData.error) {
          self.statusMessageService.newStatusMessage(returnData.responseMessage, 'success');
          self.database = returnData.data;
          self.extractAliases();
        } else if (returnData.error) {
          self.statusMessageService.newStatusMessage(returnData.responseMessage, 'errir');
        }
      });
  }

  private extractAliases(): void {
    this.aliases = {};
    for (let i = 0; i < this.database.length; i++) {
      const record = this.database[i];
      for (let j = 0; j < record.aliases.length; j++) {
        const alias = record.aliases[j];
        if (!(alias in this.aliases)) {
          this.aliases[alias] = {
            ids: [],
            jobKeywords: 0
          };
        }
        this.aliases[alias].ids.push(record);
      }
    }
    console.log("aliases: " + this.aliases)
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
