import { TestBed, inject } from '@angular/core/testing';

import { StatusMessageService } from './status-message.service';

describe('StatusMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusMessageService]
    });
  });

  it('should be created', inject([StatusMessageService], (service: StatusMessageService) => {
    expect(service).toBeTruthy();
  }));
});
