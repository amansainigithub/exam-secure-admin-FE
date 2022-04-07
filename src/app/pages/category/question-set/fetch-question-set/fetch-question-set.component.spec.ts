import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuestionSetComponent } from './fetch-question-set.component';

describe('FetchQuestionSetComponent', () => {
  let component: FetchQuestionSetComponent;
  let fixture: ComponentFixture<FetchQuestionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchQuestionSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
