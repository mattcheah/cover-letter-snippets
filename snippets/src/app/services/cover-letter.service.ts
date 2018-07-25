import { Injectable } from '@angular/core';

@Injectable()
export class CoverLetterService {

  addedSnippets:Array<any> = [];

  constructor() { }

  addSnippet(snippet) {
    for(let i = 0; i< this.addedSnippets.length; i++) {
      if (this.addedSnippets[i]._id == snippet._id) {
        console.log("snippet id is the same as one that's already in the added snippets thing.");
        console.log(this.addedSnippets[i]);
        console.log(snippet);
        return;
      }
    }

    console.log("We made it past the stuff! pushing snippet");
    this.addedSnippets.push(snippet);
  }

  moveSnippet(index, up):void {
    console.log("moving snippet: index:"+index+"  "+up);
    let temp = this.addedSnippets[index];
    let swapIndex = up ? -1 : 1;
    this.addedSnippets[index] = this.addedSnippets[index+swapIndex];
    this.addedSnippets[index+swapIndex] = temp;
  }

  removeSnippet(index):void {
    this.addedSnippets.splice(index,1);
  }
}
