import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchSubCategoryComponent } from './fetch-sub-category.component';

describe('FetchSubCategoryComponent', () => {
  let component: FetchSubCategoryComponent;
  let fixture: ComponentFixture<FetchSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchSubCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
