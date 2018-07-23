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
  database:Array<Object>;


  constructor(private DatabaseService: DatabaseService) { }

  ngOnInit() {
  }

  connect(connectString:string):void {
    console.log("connecting to mongoose db: response is:");
    let self = this;

    this.DatabaseService.startConnection(connectString)
    .then(function (res) {
      return res.json().then((data) => {
        console.log(data);
        if ("error" in data) {
          self.responseMessageClass = "fail";
          self.responseMessage = data.error;
        } else if(data.connected) {
          self.responseMessage = data.responseMessage;
          self.database = data.data;
          self.showConnectForm = false;
          self.responseMessageClass = "success";
        }
      });
    }).catch((err) => {
      console.log("Error: " + err);
      self.responseMessage = err;
    });
  }

}
