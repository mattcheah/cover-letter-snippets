import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddSnippetComponent } from './add-snippet.component';
import { DatabaseService } from '../services/database.service';
import { StatusMessageService } from '../services/status-message.service';

describe('AddSnippetComponent', () => {
  let component: AddSnippetComponent;
  let fixture: ComponentFixture<AddSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ AddSnippetComponent ],
      providers: [
        DatabaseService,
        StatusMessageService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render "Add Snippet" in an h4', async(() => {
    const databaseService = TestBed.get(DatabaseService);
    databaseService.connected = true;

    fixture = TestBed.createComponent(AddSnippetComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Add Snippet');
  }));
});
