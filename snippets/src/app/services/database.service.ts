import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DatabaseService {

  constructor() { }

  startConnection(urlString):Promise<Response> {
    let data = { databaseUrl: urlString };
    return fetch("connect-to-database", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  }

}
