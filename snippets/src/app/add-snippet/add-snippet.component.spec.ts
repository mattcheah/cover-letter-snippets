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
});
