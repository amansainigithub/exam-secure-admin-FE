import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchQuestionsWayComponent } from './fetch-questions-way.component';

describe('FetchQuestionsWayComponent', () => {
  let component: FetchQuestionsWayComponent;
  let fixture: ComponentFixture<FetchQuestionsWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchQuestionsWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchQuestionsWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
