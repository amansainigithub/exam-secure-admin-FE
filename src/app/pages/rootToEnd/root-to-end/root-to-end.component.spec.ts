import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootToEndComponent } from './root-to-end.component';

describe('RootToEndComponent', () => {
  let component: RootToEndComponent;
  let fixture: ComponentFixture<RootToEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootToEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootToEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
