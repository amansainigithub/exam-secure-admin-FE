import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionAnswerComponent } from './update-question-answer.component';

describe('UpdateQuestionAnswerComponent', () => {
  let component: UpdateQuestionAnswerComponent;
  let fixture: ComponentFixture<UpdateQuestionAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
