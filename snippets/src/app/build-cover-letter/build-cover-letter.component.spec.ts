import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCoverLetterComponent } from './build-cover-letter.component';

describe('BuildCoverLetterComponent', () => {
  let component: BuildCoverLetterComponent;
  let fixture: ComponentFixture<BuildCoverLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCoverLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCoverLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
