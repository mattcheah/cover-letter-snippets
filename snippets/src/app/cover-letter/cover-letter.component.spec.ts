import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoverLetterComponent } from './cover-letter.component';
import { DatabaseComponent } from '../database/database.component';
import { AddSnippetComponent } from '../add-snippet/add-snippet.component';
import { BuildCoverLetterComponent } from '../build-cover-letter/build-cover-letter.component';
import { ExportComponent } from '../export/export.component';

import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('CoverLetterComponent', () => {
  let component: CoverLetterComponent;
  let fixture: ComponentFixture<CoverLetterComponent>;

  const appRoutes = [
    { path: '', component: DatabaseComponent },
    { path: 'add-snippet', component: AddSnippetComponent },
    { path: 'build-cover-letter', component: BuildCoverLetterComponent },
    { path: 'export-cover-letter', component: ExportComponent }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(appRoutes)
      ],
      declarations: [
        CoverLetterComponent,
        DatabaseComponent,
        AddSnippetComponent,
        BuildCoverLetterComponent,
        ExportComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ParseDescriptionService,
        StatusMessageService,
        CoverLetterService,
        DatabaseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
