import { TestBed, inject } from '@angular/core/testing';

import { ConnectToDatabaseService } from './connect-to-database.service';

describe('ConnectToDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectToDatabaseService]
    });
  });

  it('should be created', inject([ConnectToDatabaseService], (service: ConnectToDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
