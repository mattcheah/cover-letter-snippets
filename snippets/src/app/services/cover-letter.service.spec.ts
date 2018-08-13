import { TestBed, inject } from '@angular/core/testing';

import { CoverLetterService } from './cover-letter.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';

describe('CoverLetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ParseDescriptionService,
        StatusMessageService,
        CoverLetterService,
        DatabaseService
      ]
    });
  });

  it('should be created', inject([CoverLetterService], (service: CoverLetterService) => {
    expect(service).toBeTruthy();
  }));
});
