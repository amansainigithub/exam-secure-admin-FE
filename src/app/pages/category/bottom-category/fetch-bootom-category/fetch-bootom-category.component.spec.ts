import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchBootomCategoryComponent } from './fetch-bootom-category.component';

describe('FetchBootomCategoryComponent', () => {
  let component: FetchBootomCategoryComponent;
  let fixture: ComponentFixture<FetchBootomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchBootomCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchBootomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
