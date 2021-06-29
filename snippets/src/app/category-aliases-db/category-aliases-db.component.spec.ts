import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { CategoryAliasesDatabaseComponent } from './category-aliases-db.component';

import { ParseDescriptionService } from '../services/parse-description.service';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';
import { CoverLetterService } from '../services/cover-letter.service';

describe('CategoryAliasesDatabaseComponent', () => {
  let component: CategoryAliasesDatabaseComponent;
  let fixture: ComponentFixture<CategoryAliasesDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      declarations: [ CategoryAliasesDatabaseComponent ],
      providers: [
        ParseDescriptionService,
        StatusMessageService,
        CoverLetterService,
        DatabaseService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryAliasesDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Use JSON File:" in an h4', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#json-title').textContent).toContain('Use JSON File:');
  }));

  it('should render "Connect your Database:" in an h4', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#db-title').textContent).toContain('Connect your Database:');
  }));

});
