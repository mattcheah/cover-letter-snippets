import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { DatabaseComponent } from './database/database.component';
import { ResultsComponent } from './results/results.component';


@NgModule({
  declarations: [
    AppComponent,
    JobDescriptionComponent,
    DatabaseComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
