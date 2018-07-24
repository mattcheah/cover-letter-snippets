import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../services/database.service";

@Component({
  selector: 'app-function-choice',
  templateUrl: './function-choice.component.html',
  styleUrls: ['./function-choice.component.css']
})
export class FunctionChoiceComponent implements OnInit {
  
  addSnippet:boolean = true;
  constructor(private databaseService:DatabaseService) { }

  ngOnInit() {
  }

  // switchOption() {
  //   this.addSnippet = !this.addSnippet;
  // }
}
