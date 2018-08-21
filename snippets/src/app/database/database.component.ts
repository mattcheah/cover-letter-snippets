import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatabaseService } from '../services/database.service';



@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  showConnectForm = true;
  databaseString = 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';

  constructor(public databaseService: DatabaseService) { }

  ngOnInit() {
  }

  connectJson(jsonString: string): void {
    this.databaseService.startConnection(true, jsonString);
  }

  connect(connectString: string): void {
    // console.log("connecting to mongoose db: response is:");
    this.databaseService.startConnection(false, connectString);
  }

  deleteRecord(id) {
    // console.log("delete id: "+id);
    this.databaseService.deleteSnippet(id);
  }



}
