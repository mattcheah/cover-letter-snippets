import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionChoiceComponent } from './function-choice.component';

describe('FunctionChoiceComponent', () => {
  let component: FunctionChoiceComponent;
  let fixture: ComponentFixture<FunctionChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
