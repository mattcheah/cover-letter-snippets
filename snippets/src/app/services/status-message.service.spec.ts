import { TestBed, inject } from '@angular/core/testing';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('StatusMessageService', () => {
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

  it('should be created', inject([StatusMessageService], (service: StatusMessageService) => {
    expect(service).toBeTruthy();
  }));
});
