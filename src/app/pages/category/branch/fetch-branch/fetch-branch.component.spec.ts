import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchBranchComponent } from './fetch-branch.component';

describe('FetchBranchComponent', () => {
  let component: FetchBranchComponent;
  let fixture: ComponentFixture<FetchBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
