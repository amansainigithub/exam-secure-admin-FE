import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBootomCategoryComponent } from './update-bootom-category.component';

describe('UpdateBootomCategoryComponent', () => {
  let component: UpdateBootomCategoryComponent;
  let fixture: ComponentFixture<UpdateBootomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBootomCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBootomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
