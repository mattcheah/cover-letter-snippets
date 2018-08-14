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

  it('should add a snippet when addSnippet is called', inject([CoverLetterService], (service: CoverLetterService) => {
    service.addedSnippets = [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 }
    ];

    service.addSnippet({ _id: 4 });
    expect(service.addedSnippets.length).toBe(4);
    expect(service.addedSnippets[3]._id).toBe(4);
  }));

  it('should not add a snippet when snippet already exists in the array', inject([CoverLetterService], (service: CoverLetterService) => {
    service.addedSnippets = [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 }
    ];

    service.addSnippet({ _id: 3 });
    expect(service.addedSnippets.length).toBe(3);
    expect(service.addedSnippets[2]._id).toBe(3);
  }));

  it('should switch two items if moveSnippet is called', inject([CoverLetterService], (service: CoverLetterService) => {
    service.addedSnippets = [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 }
    ];

    service.moveSnippet(1, true);
    expect(service.addedSnippets.length).toBe(3);
    expect(service.addedSnippets[1]._id).toBe(1);
    expect(service.addedSnippets[0]._id).toBe(2);
    service.moveSnippet(1, false);
    expect(service.addedSnippets[1]._id).toBe(3);
    expect(service.addedSnippets[2]._id).toBe(1);
  }));

  it('should remove from array if removeSnippet is called', inject([CoverLetterService], (service: CoverLetterService) => {
    service.addedSnippets = [
      { _id: 1 },
      { _id: 2 },
      { _id: 3 }
    ];

    service.removeSnippet(1);
    expect(service.addedSnippets.length).toBe(2);
    expect(service.addedSnippets[1]._id).toBe(3);
  }));

});
