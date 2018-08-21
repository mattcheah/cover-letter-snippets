import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable, of } from 'rxjs';

describe('DB connection', () => {

  let service;
  let backend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DatabaseService,
      ]
    });

    service = TestBed.get(DatabaseService);
    backend = TestBed.get(HttpTestingController);

  });

  afterEach(() => {
    backend.verify();
  });

  it('should connect to the db and return the contents', () => {

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
  });

});

describe('Json DatabaseService', () => {

  let service;
  let backend;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        DatabaseService,
      ]
    });

    service = TestBed.get(DatabaseService);
    backend = TestBed.get(HttpTestingController);

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

  });

  afterEach(() => {
    backend.verify();
  });


describe('DatabaseService Mlab Db', () => {



  it('should add the object to db and return the new contents', inject([DatabaseService], (service: DatabaseService) => {
    service.startConnection(false, 'mongodb://user:testtest1@ds119660.mlab.com:19660/snippets-sandbox');

    const length = service.database.length;

    service.addSnippet(snippet, categories);

    expect(service.database.length).toEqual(length + 1);
    expect(service.database[service.database.length - 1].categories).toEqual(['intro', 'outro']);
    expect(service.database[service.database.length - 1].snippet).toEqual('Hello new Snippet');
  }));

});

describe('Edit Snippet', () => {



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


})
