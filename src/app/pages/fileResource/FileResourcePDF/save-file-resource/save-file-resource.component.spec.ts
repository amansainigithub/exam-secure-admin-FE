import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFileResourceComponent } from './save-file-resource.component';

describe('SaveFileResourceComponent', () => {
  let component: SaveFileResourceComponent;
  let fixture: ComponentFixture<SaveFileResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFileResourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveFileResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
