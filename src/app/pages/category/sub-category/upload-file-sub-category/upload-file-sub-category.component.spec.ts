import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileSubCategoryComponent } from './upload-file-sub-category.component';

describe('UploadFileSubCategoryComponent', () => {
  let component: UploadFileSubCategoryComponent;
  let fixture: ComponentFixture<UploadFileSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
