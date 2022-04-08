import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuestionAnswerComponent } from './fetch-question-answer.component';

describe('FetchQuestionAnswerComponent', () => {
  let component: FetchQuestionAnswerComponent;
  let fixture: ComponentFixture<FetchQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchQuestionAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
