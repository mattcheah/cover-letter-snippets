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

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    
  }

  connect(connectString:string):void {
    // console.log("connecting to mongoose db: response is:");
    this.databaseService.startConnection(connectString);
  }

  deleteSnippet(id) {
    console.log("delete id: "+id);
    this.databaseService.deleteSnippet(id);
  }



}
