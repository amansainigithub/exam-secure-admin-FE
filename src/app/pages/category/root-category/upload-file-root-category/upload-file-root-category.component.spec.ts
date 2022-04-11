import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileRootCategoryComponent } from './upload-file-root-category.component';

describe('UploadFileRootCategoryComponent', () => {
  let component: UploadFileRootCategoryComponent;
  let fixture: ComponentFixture<UploadFileRootCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileRootCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
