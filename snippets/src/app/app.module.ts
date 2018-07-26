import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { JobDescriptionComponent } from './job-description/job-description.component';
import { DatabaseComponent } from './database/database.component';
import { ResultsComponent } from './results/results.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';
import { StatusMessageComponent } from './status-message/status-message.component';
import { HasKeywordsPipe } from './has-keywords.pipe';
import { CoverLetterComponent } from './cover-letter/cover-letter.component';
import { BuildCoverLetterComponent } from './build-cover-letter/build-cover-letter.component';
import { ExportComponent } from './export/export.component';
import { NavComponent } from './nav/nav.component';

import { DatabaseService } from './services/database.service';
import { ParseDescriptionService } from './services/parse-description.service';
import { StatusMessageService } from './services/status-message.service';
import { CoverLetterService } from './services/cover-letter.service';

const appRoutes:Routes = [
  { path: '', component: DatabaseComponent },
  { path: 'add-snippet', component: AddSnippetComponent },
  { path: 'build-cover-letter', component: BuildCoverLetterComponent },
  { path: 'export-cover-letter', component: ExportComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    JobDescriptionComponent,
    DatabaseComponent,
    ResultsComponent,
    AddSnippetComponent,
    StatusMessageComponent,
    HasKeywordsPipe,
    CoverLetterComponent,
    ExportComponent,
    BuildCoverLetterComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [
    DatabaseService,
    ParseDescriptionService,
    StatusMessageService,
    CoverLetterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
