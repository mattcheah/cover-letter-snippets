import { TestBed, inject } from '@angular/core/testing';

import { CoverLetterService } from './cover-letter.service';

describe('CoverLetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoverLetterService]
    });
  });

  it('should be created', inject([CoverLetterService], (service: CoverLetterService) => {
    expect(service).toBeTruthy();
  }));
});
