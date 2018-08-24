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
        DatabaseService,
        StatusMessageService,
        ParseDescriptionService,
        CoverLetterService
      ]
    });
  });
  it('should be created', inject([DatabaseService], (service: DatabaseService) => {
    expect(service).toBeTruthy();
  }));
});

describe('DB connection', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DatabaseService,
        StatusMessageService,
        ParseDescriptionService,
        CoverLetterService
      ]
    });
  });

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it('should connect to the DB and return the contents',
    inject([DatabaseService, HttpTestingController],
      (service: DatabaseService, backend: HttpTestingController) => {

        service.startConnection(false, 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');

        backend.expectOne((req: HttpRequest<any>) => {
          const body = JSON.parse(req.body);

          return req.url === 'api/connect-to-database'
            && req.method === 'POST'
            && body.databaseUrl === 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';

        }).flush({
          connected: true,
          error: false,
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
        expect(service.isJson).toBe(false);
      }));

});

describe('MongoDB DatabaseService', () => {

  let service;
  let backend;
  const Helper = require('../../test-helpers');

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DatabaseService,
        StatusMessageService,
        ParseDescriptionService,
        CoverLetterService
      ]
    });

    service = TestBed.get(DatabaseService);
    backend = TestBed.get(HttpTestingController);

    service.startConnection(false, 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');
    backend.expectOne((req: HttpRequest<any>) => {
      const body = JSON.parse(req.body);

      return req.url === 'api/connect-to-database'
        && req.method === 'POST'
        && body.databaseUrl === 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox';
    }).flush({
      connected: true,
      error: false,
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

  });

  afterEach(() => {
    backend.verify();
  });

  describe('Adding snippet to a Database', () => {
    const categories = ['newSnippet'];
    const snippet = 'Hello new Snippet';

    it('should add the object to MongoDB and return the new contents', () => {

      const length = service.database.length;

      service.addSnippet(snippet, categories);
      backend.expectOne((req) => {
        const body = JSON.parse(req.body);
        const categoriesMatch = Helper.compareCategories(body.categories, categories);

        return req.url === 'api/add-snippet'
          && req.method === 'POST'
          && body.snippet === 'Hello new Snippet'
          && categoriesMatch;
      }).flush({
        connected: true,
        error: false,
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
    });
  });

  describe('Editing a snippet', () => {

    const newCategories = ['edited'];
    const newSnippet = 'Hello edited Snippet';


    it('should edit the json object and return the new contents', () => {

      const length = service.database.length;
      const addedSnippet = service.database[length - 1];
      const id = addedSnippet._id;

      service.editSnippet(id, newSnippet, newCategories);
      backend.expectOne((req) => {
        const body = JSON.parse(req.body);
        const categoriesMatch = Helper.compareCategories(body.categories, newCategories);

        return req.url === 'api/edit-snippet'
          && req.method === 'PUT'
          && body.id === id
          && categoriesMatch
          && body.snippet === newSnippet;
      }).flush({
        connected: true,
        error: false,
        responseMessage: 'Edited Snippet!',
        data: [
          {
            _id: '1',
            snippet: 'snippets1',
            categories: ['intro', 'outro']
          },
          {
            _id: '2',
            snippet: 'Hello edited Snippet',
            categories: ['edited']
          }
        ]
      });

      let myEditedRecord;
      for (let i = 0; i < length; i++) {
        if (service.database[i]._id === id) {
          myEditedRecord = service.database[i];
        }
      }

      expect(service.database.length).toEqual(length);
      expect(myEditedRecord.categories).toEqual(['edited']);
      expect(myEditedRecord.snippet).toEqual('Hello edited Snippet');
    });

    it('should not edit an object if the id does not exist', () => {
      spyOn(service, 'extractCategories').and.callThrough();
      const database = service.database;

      service.editSnippet(348519348, 'badSnippet', ['badCat']);
      backend.expectOne((req) => {
        const body = JSON.parse(req.body);
        const categoriesMatch = Helper.compareCategories(body.categories, ['badCat']);

        return req.url === 'api/edit-snippet'
          && req.method === 'PUT'
          && body.id === 348519348
          && categoriesMatch
          && body.snippet === 'badSnippet';
      }).flush({
        connected: true,
        error: true,
        responseMessage: 'Could not edit this snippet!',
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

      expect(() => {
        if (service.database.length !== database.length) { return false; }
        for (let i = 0; i < database.length; i++) {
          if (database[i].snippet !== service.database[i].snippet) { return false; }
        }
        return true;
      });

      expect(service.extractCategories).not.toHaveBeenCalled();
    });
  });

  describe('Delete Snippet', () => {

    it('should delete the json record and return the new contents', () => {

      const length = service.database.length;
      const lastSnippet = service.database[length - 1];
      const id = lastSnippet._id;

      service.deleteSnippet(id);
      backend.expectOne((req) => {
        const body = JSON.parse(req.body);
        return req.url === 'api/delete-snippet'
          && req.method === 'DELETE'
          && body.id === id;
      }).flush({
        connected: true,
        error: false,
        responseMessage: 'Deleted Snippet!',
        data: [
          {
            _id: '1',
            snippet: 'snippets1',
            categories: ['intro', 'outro']
          }
        ]
      });

      let foundSnippet = false;
      for (let i = 0; i < service.database.length; i++) {
        if (service.database[i]._id === id) {
          foundSnippet = true;
        }
      }

      expect(service.database.length).toEqual(length - 1);
      expect(foundSnippet).toEqual(false);
    });

  });

});
