import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileQuestionSetComponent } from './upload-file-question-set.component';

describe('UploadFileQuestionSetComponent', () => {
  let component: UploadFileQuestionSetComponent;
  let fixture: ComponentFixture<UploadFileQuestionSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileQuestionSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileQuestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
