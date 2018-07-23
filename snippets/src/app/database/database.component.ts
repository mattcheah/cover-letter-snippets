import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  databaseString: string = "mongodb://test:testtest1@ds245901.mlab.com:45901/snippets-test";
  responseMessage:string = "";



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
        self.responseMessage = "error" in data ? data.error : data.responseMessage;
      });
    }).catch((err) => {
      console.log("Error: " + err);
      self.responseMessage = err;
    });


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
