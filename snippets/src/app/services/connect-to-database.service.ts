import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConnectToDatabaseService {

  constructor() { }

  startConnection(urlString) {
    let data = { url: urlString };
    fetch("connect-to-database", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      // mode: "cors", // no-cors, cors, *same-origin
      // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, same-origin, *omit
      // headers: {
        // "Content-Type": "application/json; charset=utf-8",
      // },
      // redirect: "follow", // manual, *follow, error
      // referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    }).then(function(res) {
      console.log("response: ");
      console.log(res);
    })
  }

}
