import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchSetsByRootComponent } from './watch-sets-by-root.component';

describe('WatchSetsByRootComponent', () => {
  let component: WatchSetsByRootComponent;
  let fixture: ComponentFixture<WatchSetsByRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchSetsByRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchSetsByRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
