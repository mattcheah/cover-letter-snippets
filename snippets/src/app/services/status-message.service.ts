import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StatusMessageService {

  statusMessageStream:BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor() { }

  getStatusMessageStream() {
    return this.statusMessageStream.asObservable();
  }

  newStatusMessage(status, cssClass) {
    this.statusMessageStream.next({
      status:status,
      cssClass:cssClass
    });
  }

  clearStatus() {
    this.statusMessageStream.next({
      status: "",
      cssClass: ""
    });
  }

}
