import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFileBranchComponent } from './upload-file-branch.component';

describe('UploadFileBranchComponent', () => {
  let component: UploadFileBranchComponent;
  let fixture: ComponentFixture<UploadFileBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadFileBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFileBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
