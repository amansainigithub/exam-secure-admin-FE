import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionSetComponent } from './update-question-set.component';

describe('UpdateQuestionSetComponent', () => {
  let component: UpdateQuestionSetComponent;
  let fixture: ComponentFixture<UpdateQuestionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
