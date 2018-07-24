import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  showConnectForm: boolean = true;
  databaseString: string = "mongodb://test:testtest1@ds245901.mlab.com:45901/snippets-test";
  responseMessage:string = "";
  responseMessageClass:string = "";

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    let self = this;
    let databaseObservable:any = this.databaseService.getDatabaseStream();
    databaseObservable.subscribe(d => {
      if (d !== undefined) {
        let responseData = d;
        console.log("subscribed to dataobservable responseData");
        console.log(responseData);
        if ("error" in responseData) {
          self.responseMessage = responseData.error;
          self.responseMessageClass = "fail";
        } else if (responseData.connected) {
          self.showConnectForm = false;
          self.responseMessage = responseData.responseMessage;
          self.responseMessageClass = "success";
        }
      }
    });
  }

  connect(connectString:string):void {
    // console.log("connecting to mongoose db: response is:");
    this.databaseService.startConnection(connectString);
  }



}
