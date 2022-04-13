import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionFilesComponent } from './update-question-files.component';

describe('UpdateQuestionFilesComponent', () => {
  let component: UpdateQuestionFilesComponent;
  let fixture: ComponentFixture<UpdateQuestionFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuestionFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuestionFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
