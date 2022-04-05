import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchRootCategoryComponent } from './fetch-root-category.component';

describe('FetchRootCategoryComponent', () => {
  let component: FetchRootCategoryComponent;
  let fixture: ComponentFixture<FetchRootCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchRootCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
