import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchChaptersComponent } from './fetch-chapters.component';

describe('FetchChaptersComponent', () => {
  let component: FetchChaptersComponent;
  let fixture: ComponentFixture<FetchChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
