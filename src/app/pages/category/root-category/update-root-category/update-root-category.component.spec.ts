import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRootCategoryComponent } from './update-root-category.component';

describe('UpdateRootCategoryComponent', () => {
  let component: UpdateRootCategoryComponent;
  let fixture: ComponentFixture<UpdateRootCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRootCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRootCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
