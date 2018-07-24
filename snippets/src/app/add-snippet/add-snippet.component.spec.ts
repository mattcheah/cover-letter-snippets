import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnippetComponent } from './add-snippet.component';

describe('AddSnippetComponent', () => {
  let component: AddSnippetComponent;
  let fixture: ComponentFixture<AddSnippetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSnippetComponent ]
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
