import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileBottomCategoryComponent } from './upload-file-bottom-category.component';

describe('UploadFileBottomCategoryComponent', () => {
  let component: UploadFileBottomCategoryComponent;
  let fixture: ComponentFixture<UploadFileBottomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileBottomCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileBottomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
