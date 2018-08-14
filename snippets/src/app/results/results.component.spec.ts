import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsComponent } from './results.component';

import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';
import { CoverLetterService } from '../services/cover-letter.service';

import { HasKeywordsPipe } from '../has-keywords.pipe';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'hasKeywords' })
class HasKeywordsPipeMock implements PipeTransform {
  transform(value) {
    return [
      'a',
      'b',
      'c'
    ];
  }
}

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultsComponent,
        HasKeywordsPipeMock
      ],
      providers: [
        ParseDescriptionService,
        StatusMessageService,
        CoverLetterService,
        DatabaseService,
        { provide: HasKeywordsPipe, useClass: HasKeywordsPipeMock }

      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Results for the job description:" in an h4', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#results-title').textContent).toContain('Results for the job description:');
  }));

  it('should render "Snippets from Category" when showFilteredSnippets is true', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#snippets-from-category')).toBe(null);

    component.showFilteredSnippetsTable = true;

    fixture.detectChanges();
    expect(compiled.querySelector('#snippets-from-category').textContent).toContain('Snippets from Category:');
  }));

});
