import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootomCategoryComponent } from './bootom-category.component';

describe('BootomCategoryComponent', () => {
  let component: BootomCategoryComponent;
  let fixture: ComponentFixture<BootomCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootomCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootomCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
