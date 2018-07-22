import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConnectToDatabaseService } from '../services/connect-to-database.service';
// import { Mongoose } from 'mongoose';


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databaseString:string = "";
  responseMessage:string = "";

  constructor() { }

  ngOnInit() {
  }

  connect():void {
    console.log(this.databaseString);
    this.responseMessage = "Sorry, your request could not be completed.";
  }

}
