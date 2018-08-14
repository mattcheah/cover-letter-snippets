import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BuildCoverLetterComponent } from './build-cover-letter.component';

import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('BuildCoverLetterComponent', () => {
  let component: BuildCoverLetterComponent;
  let fixture: ComponentFixture<BuildCoverLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCoverLetterComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        ParseDescriptionService,
        DatabaseService,
        StatusMessageService,
        CoverLetterService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
