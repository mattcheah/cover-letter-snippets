import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatabaseService {

  constructor() { }

  startConnection(urlString):Promise<Response> {
    let data = { databaseUrl: urlString };
    return fetch("connect-to-database", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)
    });
  }

}
