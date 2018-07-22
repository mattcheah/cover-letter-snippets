import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ConnectToDatabaseService } from '../services/connect-to-database.service';

// import mongoose from 'mongoose';
// const mongoose = require('mongoose');

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databaseString:string = "";
  responseMessage:string = "";

  databaseData:Array<Object> = [
    {
      id:1,
      categories: ["php","javascript"],
      snippet: "I have some experience with PHP and Javascript"
    },
    {
      id:2,
      categories: ["php"],
      snippet: "I created my own proprierary framework in PHP"
    },
    {
      id:3,
      categories: ["angular"],
      snippet: "My last project was an angular6 administration dashboard that shows information"
    },
    {
      id:4,
      categories: ["php"],
      snippet: "I built the bestattorney.com website in PHP and created a series of contact classes that allow for things to be done."
    },
    {
      id: 5,
      categories: ["angular", "javascript"],
      snippet: "I built the chewallah website in angular6."
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  connect(connectString:string):void {
    // console.log(this.databaseString);
    console.log("connecting to mongoose db: response is:")
    // let connection = mongoose.connect(connectString);
    // console.log(connection);

    // let snippetSchema = new mongoose.Schema({
    //   id: Number,
    //   categories: Array,
    //   snippet: String
    // }); 
    // let Snippet = mongoose.model('Snippet',snippetSchema);

    // let snippet1 = Snippet({
    //     id: 5,
    //     categories: ["angular", "javascript"],
    //     snippet: "I built the chewallah website in angular6."
    // });
      // this.responseMessage = connection ? "Connected successfully" : "Could not connect";
  }

}
