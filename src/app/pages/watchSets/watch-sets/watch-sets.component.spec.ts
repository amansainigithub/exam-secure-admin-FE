import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSetsComponent } from './watch-sets.component';

describe('WatchSetsComponent', () => {
  let component: WatchSetsComponent;
  let fixture: ComponentFixture<WatchSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
