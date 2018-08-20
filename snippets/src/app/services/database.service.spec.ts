import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable, of } from 'rxjs';

describe('DatabaseService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        // ParseDescriptionService,
        // StatusMessageService,
        // CoverLetterService,
        DatabaseService,
      ]
    });

  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));


  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));

  describe('Connecting to a Database', () => {
    it('should connect to the JSON file and return the contents',
    inject([DatabaseService, HttpTestingController],
    (service: DatabaseService, backend: HttpTestingController) => {

      service.startConnection(true);

      backend.expectOne((req: HttpRequest<any>) => {
        const body = JSON.parse(req.body);

        return req.url === 'api/get-json-data'
        && req.method === 'POST'
        && body.urlString === './snippets-db.json';

      }).flush({
        connected: true,
        responseMessage: 'Hello!',
        data: [
          {
            _id: '1',
            snippet: 'snippets1',
            categories: ['intro', 'outro']
          },
          {
            _id: '2',
            snippet: 'snippets2',
            categories: ['intro', 'outro']
          }
        ]
      });

      expect(service.connected).toBe(true);
      expect(service.database).toEqual([
        {
          _id: '1',
          snippet: 'snippets1',
          categories: ['intro', 'outro']
        },
        {
          _id: '2',
          snippet: 'snippets2',
          categories: ['intro', 'outro']
        }
      ]);
    }));

    it('should connect to the db and return the contents',
      inject([DatabaseService, HttpTestingController],
      (service: DatabaseService, backend: HttpTestingController) => {

      service.startConnection(false, 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');
      backend.expectOne((req: HttpRequest<any>) => {
        const body = JSON.parse(req.body);

        return req.url === 'api/connect-to-database'
        && req.method === 'POST'
        && body.urlString === 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';
      }).flush({
        connected: true,
        responseMessage: 'Hello!',
        data: [
          {
            _id: '1',
            snippet: 'snippets1',
            categories: ['intro', 'outro']
          },
          {
            _id: '2',
            snippet: 'snippets2',
            categories: ['intro', 'outro']
          }
        ]
      });

      expect(service.connected).toBe(true);
      expect(service.database).toEqual([
        {
          _id: '1',
          snippet: 'snippets1',
          categories: ['intro', 'outro']
        },
        {
          _id: '2',
          snippet: 'snippets2',
          categories: ['intro', 'outro']
        }
      ]);
    }));
  });

  describe('Adding snippet to a Database', () => {
    const categories = ['newSnippet'];
    const snippet =  'Hello new Snippet';

    it('should add the object to json and return the new contents',
      inject([DatabaseService, HttpTestingController],
      (service: DatabaseService, backend: HttpTestingController) => {
        service.startConnection(true);
        backend.expectOne('api/connect-to-database').flush({
          connected: true,
          responseMessage: 'Hello!',
          data: [
            {
              _id: '1',
              snippet: 'snippets1',
              categories: ['intro', 'outro']
            },
            {
              _id: '2',
              snippet: 'snippets2',
              categories: ['intro', 'outro']
            }
          ]
        });


      const length = service.database.length;

      service.addJsonSnippet(snippet, categories);
      backend.expectOne((req) => {
        const body = JSON.parse(req.body);

        return req.url === 'api/add-snippet'
        && req.method === 'POST'
        && body.snippet === snippet
        && body.categories === categories;
      }).flush({
        connected: true,
        responseMessage: 'Hello!',
        data: [
          {
            _id: '1',
            snippet: 'snippets1',
            categories: ['intro', 'outro']
          },
          {
            _id: '2',
            snippet: 'snippets2',
            categories: ['intro', 'outro']
          },
          {
            _id: '3',
            snippet: 'Hello new Snippet',
            categories: ['newSnippet']
          }
        ]
      });

      expect(service.database.length).toEqual(length + 1);
      expect(service.database[service.database.length - 1].categories).toEqual(['newSnippet']);
      expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
    }));

    it('should add the object to db and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');

      const length = service.database.length;

      service.addSnippet(snippet, categories);

      expect(service.database.length).toEqual(length + 1);
      expect(service.database[service.database.length - 1].categories).toEqual(['intro', 'outro']);
      expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
    }));

    it('should not create a JSON record with a non-unique id', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson();
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
    const newSnippet = 'Hello edited Snippet1';

    it('should edit the json object and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnectionJson();

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
      service.startConnection('mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.editDbSnippet(id, newSnippet, newCategories);
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
      service.startConnectionJson();

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

    it('should delete the db record and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
      service.startConnection('mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');

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
