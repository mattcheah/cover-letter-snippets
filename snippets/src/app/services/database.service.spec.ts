import { async, TestBed, inject } from '@angular/core/testing';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('DatabaseService', () => {
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

  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));

  describe('Connecting to a Database', () => {
    it('should connect to the JSON file and return the contents', inject([DatabaseService], async (service: DatabaseService) => {
      // async(() => {
      //   service.startConnectionJson().then(() => {
      //     expect(1).toEqual(1);
      //   });
      // });

        await service.startConnectionJson();
        // expect(service.database.length).toBeGreaterThan(0);
        expect(service.connected).toBe(true);

    }));
  });


});
