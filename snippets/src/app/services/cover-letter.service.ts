import { Injectable } from '@angular/core';
import { StatusMessageService } from '../services/status-message.service';


@Injectable()
export class CoverLetterService {

  addedSnippets:Array<any> = [];

  constructor(private statusMessageService:StatusMessageService) { }

  addSnippet(snippet) {
    for(let i = 0; i< this.addedSnippets.length; i++) {
      if (this.addedSnippets[i]._id == snippet._id) {
        return;
      }
    }

    this.addedSnippets.push(snippet);
    this.statusMessageService.newStatusMessage("Added Snippet to the Cover Letter", "primary");
  }

  moveSnippet(index, up):void {
    let temp = this.addedSnippets[index];
    let swapIndex = up ? -1 : 1;
    this.addedSnippets[index] = this.addedSnippets[index+swapIndex];
    this.addedSnippets[index+swapIndex] = temp;
  }

  removeSnippet(index):void {
    this.addedSnippets.splice(index,1);
  this.statusMessageService.newStatusMessage("Removed Snippet from Cover Letter", "primary");
  }
}
