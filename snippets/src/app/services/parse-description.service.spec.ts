import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { StatusMessageService } from './status-message.service';
import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('ParseDescriptionService', () => {
  let mockCategories;
  let description;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        ParseDescriptionService,
        StatusMessageService,
        CoverLetterService,
        DatabaseService,
      ]
    });

    mockCategories = {
      'java': {
        'ids': [
          {
            'categories': [
              'java',
              'python',
              'c',
              'c++'
            ],
            '_id': '5b5b51f0f945a637b0b7040d',
            'snippet': 'I wrote my own search engine called google.com (a play on the number googol), in Java and Python. You can see it in action here: https://www.google.com. After numerous bugs, my team and I rewrote it in C and C++.',
            '__v': 0
          },
          {
            'categories': [
              'python',
              'java',
              'c',
              'php'
            ],
            '_id': '5b5b567bf945a637b0b70410',
            'snippet': 'Since I have so much money, I bought this video streaming service called Youtube. It\'s written in Python but has some other services written in C and Java, and probably PHP. ',
            '__v': 0
          }
        ],
        'jobKeywords': 0,
        'keyword': 'java'
      },
      'intro': {
        'ids': [
          {
            'categories': [
              'intro'
            ],
            '_id': '5b5b5218f945a637b0b7040e',
            'snippet': 'Hi, my name is Larry Page. I\'m interested in your Jr. Developer Position at Yahoo.com, and I have some experience creating large-scale search applications, so i feel like I will be a good fit for the job. ',
            '__v': 0
          },
          {
            'categories': [
              'intro'
            ],
            '_id': '5b6339a28d7e95413ce07175',
            'snippet': 'Hi, my name is Matt Cheah',
            '__v': 0
          }
        ],
        'jobKeywords': 0,
        'keyword': 'intro'
      },
      'php': {
        'ids': [
          {
            'categories': [
              'python',
              'java',
              'c',
              'php'
            ],
            '_id': '5b5b567bf945a637b0b70410',
            'snippet': 'Since I have so much money, I bought this video streaming service called Youtube. It\'s written in Python but has some other services written in C and Java, and probably PHP. ',
            '__v': 0
          }
        ],
        'jobKeywords': 0,
        'keyword': 'php'
      },
      'outro': {
        'ids': [
          {
            'categories': [
              'outro'
            ],
            '_id': '5b5b56a7f945a637b0b70411',
            'snippet': 'Overall, I am very intelligent and have enough money to pay people to work for me, so I think I would be a great benefit to your organization. Please hire me, thanks! ',
            '__v': 0
          },
          {
            'categories': [
              'outro'
            ],
            '_id': '5b5b56aff945a637b0b70412',
            'snippet': 'sincerely, Larry Page',
            '__v': 0
          },
          {
            'categories': [
              'outro'
            ],
            '_id': '5b6334f28d7e95413ce07170',
            'snippet': 'I think i\'d be a great fit for your team, and I\'d love to discuss the position further. Thanks for your time! ',
            '__v': 0
          }
        ],
        'jobKeywords': 0,
        'keyword': 'outro'
      }
    };
    description = 'java python C++ c# PHP php php java php ruby rails angular node react native core ember aws myswl nosql postgres seo marketing photoshop adobe my acorn is missing did you eat the acorn?';
  });

  it('should be created', inject([ParseDescriptionService], (service: ParseDescriptionService) => {
    expect(service).toBeTruthy();
  }));

  it('should parse the job description into different keywords.', () => {

    const databaseService = TestBed.get(DatabaseService);
    databaseService.categories = mockCategories;

    const parseDescriptionService = new ParseDescriptionService(databaseService, new StatusMessageService);

    parseDescriptionService.parseDescription(description);

    const result: Array<any> = parseDescriptionService.keywordArray;
    expect(result[0].keyword).toEqual('php');
    expect(result[0].jobKeywords).toEqual(4);
    expect(result[1].keyword).toEqual('java');
    expect(result[1].jobKeywords).toEqual(2);
    expect(result.length).toEqual(4);
    expect(parseDescriptionService.showParsingResults).toBe(true);

  });

  describe('resetJobKeywords()', () => {
    it('should reset all jobKeywords in the database categories object', () => {

      const databaseService = TestBed.get(DatabaseService);
      databaseService.categories = mockCategories;

      const parseDescriptionService = new ParseDescriptionService(databaseService, new StatusMessageService);

      parseDescriptionService.parseDescription(description);
      parseDescriptionService.resetJobKeywords();
      parseDescriptionService.createOrderedArray();

      const result: Array<any> = parseDescriptionService.keywordArray;
      expect(result[0].jobKeywords).toEqual(0);
      expect(result[result.length - 1].jobKeywords).toEqual(0);
    });
  });

  // it('should create a spy that returns an key value object of categories', () => {
  //   const databaseServiceSpy = jasmine.createSpyObj('DatabaseService', ['categories']);

  //   databaseServiceSpy.categories.and.returnValue(mockCategories);

  //   const databaseService = new DatabaseService(new StatusMessageService);
  //   const parseDescriptionService = new ParseDescriptionService(databaseService, new StatusMessageService);
  //   // spyOn(databaseService, 'categories').and.returnValue(mockCategories);
  //   databaseService.categories = mockCategories;

  //   expect(databaseService.categories).toEqual(mockCategories);

  // });
});
