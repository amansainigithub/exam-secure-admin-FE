import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQuestionFilesComponent } from './upload-question-files.component';

describe('UploadQuestionFilesComponent', () => {
  let component: UploadQuestionFilesComponent;
  let fixture: ComponentFixture<UploadQuestionFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadQuestionFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQuestionFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
