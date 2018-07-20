import { TestBed, inject } from '@angular/core/testing';

import { ParseDescriptionService } from './parse-description.service';

describe('ParseDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseDescriptionService]
    });
  });

  it('should be created', inject([ParseDescriptionService], (service: ParseDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
