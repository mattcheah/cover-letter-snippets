import { async, TestBed, inject } from '@angular/core/testing';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';
import { identifierModuleUrl } from '@angular/compiler';

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
    it('should connect to the JSON file and return the contents', inject([DatabaseService], (service: DatabaseService) => {
        service.startConnectionJson('jsonFilePath');
        expect(service.connected).toBe(true);
    }));

    it('should connect to the db and return the contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mockURL');
      expect(service.connected).toBe(true);
    }));
  });

  describe('Adding snippet to a Database', () => {
    const categories = ['intro', 'outro'];
    const snippet =  'Hello new Snippet';

    it('should add the object to json and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson('jsonFilePath');

      const length = service.database.length;

      service.addJsonSnippet(snippet, categories);
      expect(service.database.length).toEqual(length + 1);
      expect(service.database[service.database.length - 1].categories).toEqual(['intro', 'outro']);
      expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
    }));

    it('should add the object to db and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mockURL');

      const length = service.database.length;

      service.addSnippet(snippet, categories);

      expect(service.database.length).toEqual(length + 1);
      expect(service.database[service.database.length - 1].categories).toEqual(['intro', 'outro']);
      expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
    }));

    it('should not create a JSON record with a non-unique id', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson('jsonFilePath');
      const data = service.database;
      let duplicateIdError = false;
      for (let i = 0; i < data.length; i++) {
        const currentId = data[i]._id;
        for (let j = i + 1; j < data.length; j++) {
          const checkId = data[j]._id;
          if (currentId === checkId) {
            duplicateIdError = true;
          }
        }
      }

      expect(duplicateIdError).toBe(false);
    }));
  });

  describe('Edit Snippet', () => {

    const newCategories = ['edited'];
    const newSnippet = 'Hello edited Snippet';

    it('should edit the json object and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson('jsonFilePath');

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.editJsonSnippet(id, newSnippet, newCategories);
      let myEditedRecord;
      for (let i = 0; i < length; i++) {
        if (service.database[i]._id === id) {
          myEditedRecord = service.database[i];
        }
      }

      expect(service.database.length).toEqual(length);
      expect(myEditedRecord.categories).toEqual(['edited']);
      expect(myEditedRecord.snippet).toEqual('Hello edited Snippet');
    }));

    it('should edit the db object and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mockURL');

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.editSnippet(id, newSnippet, newCategories);
      let myEditedRecord;
      for (let i = 0; i < length; i++) {
        if (service.database[i]._id === id) {
          myEditedRecord = service.database[i];
        }
      }

      expect(service.database.length).toEqual(length + 1);
      expect(service.database[service.database.length - 1].categories).toEqual(['intro', 'outro']);
      expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
    }));
  });

  describe('Delete Snippet', () => {

    it('should delete the json record and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson('jsonFilePath');

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.deleteJsonSnippet(id);
      let foundSnippet = false;
      for (let i = 0; i < length; i++) {
        if (service.database[i]._id === id) {
          foundSnippet = true;
        }
      }

      expect(service.database.length).toEqual(length - 1);
      expect(foundSnippet).toEqual(false);
    }));

    it('should delete the json record and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mockURL');

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.deleteSnippet(id);
      let foundSnippet = false;
      for (let i = 0; i < length; i++) {
        if (service.database[i]._id === id) {
          foundSnippet = true;
        }
      }

      expect(service.database.length).toEqual(length - 1);
      expect(foundSnippet).toEqual(false);
    }));
  });


});
