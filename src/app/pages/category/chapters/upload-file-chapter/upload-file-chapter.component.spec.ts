import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileChapterComponent } from './upload-file-chapter.component';

describe('UploadFileChapterComponent', () => {
  let component: UploadFileChapterComponent;
  let fixture: ComponentFixture<UploadFileChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileChapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
